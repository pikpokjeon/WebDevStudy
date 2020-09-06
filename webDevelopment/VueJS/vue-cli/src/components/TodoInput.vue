<template>
  <div class="inputBox shadow">
    <!-- 2-way binding 스크립트 단과 동기화됨-->
    <input type='text' v-model='newTodoItem' @keyup.enter='addTodo'>

    <button class="addContainer" v-on:click="addTodo">
      <!-- <font-awesome icon="fa-plus" /> -->
     push
      </button>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      newTodoItem: ""
    }
  },
  methods: {
    addTodo: function(){
      if ( this.newTodoItem !==''){
        this.$emit('addTodoItem' ,this.newTodoItem);
        this.clearInput();
      }
    
  },
    clearInput: function(){
      this.newTodoItem = '' ;

    }
  }

}
</script>

<style>

</style>