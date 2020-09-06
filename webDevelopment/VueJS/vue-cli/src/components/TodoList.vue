


<template>
<div>
  <ol>
    <!-- 리스트의 인덱스추가 -->
    <li v-for='(todoItem, index) in propsdata' v-bind:key='todoItem.item'>
      <span class='check' v-bind:class='{checkBtnCompleted: todoItem.completed}'
      @click='toggleComplete(todoItem,index)'></span>
      <span v-bind:class='{textCompleted: todoItem.completed}'>{{todoItem.item}}</span>  
      <button v-on:click='removeTodo(todoItem, index)'> 삭제 </button>
      </li>
  </ol>
  </div> 
</template>

<script>
export default {
  props: [ 'propsdata'],//내려보낼 props
  methods:{
    removeTodo:function(todoItem, index){
      this.$emit('removeItem',todoItem, index)
      
    },
    toggleComplete: function(todoItem,index){
      this.$emit('toggleItem', todoItem, index)
    }
  },

  }

</script>

<style scoped>
.check{
  width: 50px;
  padding: 10px;
  background-color: blueviolet;
  margin: 10px;
}
li{
      display: block;
    margin: 21px;
    background-color:white;
    
}

</style>