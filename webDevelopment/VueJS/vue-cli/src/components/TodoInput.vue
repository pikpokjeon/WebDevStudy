<template>
  <div class="inputBox shadow">
    <!-- 2-way binding 스크립트 단과 동기화됨-->
    <input type='text' v-model='newTodoItem' @keyup.enter='addTodo'>

    <button class="addContainer addBtn" v-on:click="addTodo">
      <!-- <font-awesome icon="fa-plus" /> -->
     push
    </button>
     
      <Modal v-if="showModal" @close="showModal = false">

        <h3 slot="header">확인</h3>
        <h4 slot="body">등록 되었습니다.</h4>
        <small slot="footer" @click="showModal = false">끝</small>
      </Modal>

  </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {

  data: function(){
    return {
      newTodoItem: "",
      showModal : false,
    }
  },
  methods: {
    addTodo: function(){
      if ( this.newTodoItem !==''){
        // this.$emit('addTodoItem' ,this.newTodoItem);
        this.$store.commit('addOneItem', this.newTodoItem);//store의 mutation을 실행 
        this.clearInput();

      } else {
        this.showModal = !this.showModal;
      }
    
     },
    clearInput: function(){
      this.newTodoItem = '' ;

    }
  },
  components: {
     Modal,
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
</style>