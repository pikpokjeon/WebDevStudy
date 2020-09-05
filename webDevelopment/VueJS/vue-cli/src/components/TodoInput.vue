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
        const obj = {completed:false,item:this.newTodoItem};

        //JSON.stringfy -> 자바스크리트 오브젝트를 변환
        localStorage.setItem(this.newTodoItem,JSON.stringify(obj));//key,value
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