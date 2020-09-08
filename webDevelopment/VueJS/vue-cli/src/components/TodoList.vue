


<template>
<div>
 <transition-group name="list" tag="ul">
    <!-- 리스트의 인덱스추가 -->
    <li v-for='(todoItem, index) in this.storedItems' v-bind:key='todoItem.item' class='shadow'>
      <!-- 완료 버튼 -->
      <span class='checkBtn ' v-bind:class='{checkBtnCompleted: todoItem.completed}'
        @click='toggleComplete(todoItem, index)'></span>
      <span v-bind:class='{textCompleted: todoItem.completed}'>{{todoItem.item}}</span>  
      <button class="removeBtn" v-on:click='removeTodo(todoItem, index)'> x </button>
      </li>
  </transition-group>
  </div> 
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
 // props: [ 'propsdata'],//내려보낼 props
  methods:{
    // ...mapMutations({
      // removeTodo: 'removeOneItem',
      // toggleComplete: 'toggleOneItem'
    // })
    removeTodo(todoItem, index){
      this.$store.commit('removeOneItem', {todoItem, index})
    },
    toggleComplete(todoItem, index){
      this.$store.commit('toggleOneItem', {todoItem, index})
    }
  },
  computed: {
    storedItems(){
      return this.$store.getters.getTodoItems;
    }
  },
  }

</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
width: 30px;
    height: 100%;
    line-height: 45px;
    color: #62acde;
    margin-right: 18px;
     background: #f7f1f1;
    margin-left: 0;
}
.checkBtnCompleted {
background: #cecece;
}
.textCompleted {
  text-decoration: line-through;
background: #cecece;
}
.removeBtn {
    margin-left: auto;
    color: #d4d4d4;
    background: none;
    border: 0;
    font-size: 1.5em;
    font-family: ui-rounded;
    font-weight: 800;
}
/* transition css */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>