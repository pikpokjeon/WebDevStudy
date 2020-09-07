<template>
  <div class="inputBox shadow">
    <!-- 2-way binding 스크립트 단과 동기화됨-->
    <input type='text' v-model='newTodoItem' @keyup.enter='addTodo'>

    <button class="addContainer" v-on:click="addTodo">
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
        this.$store.commit('addOneItem', this.newTodoItem);//mutation 동작을 위해
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
    Modal : Modal,
  }

}
</script>

<style>

</style>