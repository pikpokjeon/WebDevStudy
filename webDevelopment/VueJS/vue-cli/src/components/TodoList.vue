


<template>
<div>
  <ol>
    <!-- 리스트의 인덱스추가 -->
    <li v-for='(todoItem, index) in todoItems' v-bind:key='todoItem.item'>
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
  data: function(){
    return {
      todoItems: []
    }
  },
  methods:{
    removeTodo:function(todoItem, index){
      console.log(todoItem,index);
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index,1);//start, deleteCount 기능후 새로운배열을 반환해줌

    },
    toggleComplete: function(todoItem,index){
      todoItem.completed = !todoItem.completed;
      //boolean값 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item,JSON.stringify(todoItem));
    }
  },
  created: function(){ //인스턴스 생성시점에 돌아가는 로직
      // 로컬스토레이지 연결 문제있으니 고쳐야함
      if(localStorage.length>0){
        for(let i = 0; i < localStorage.length ; i ++){
          //
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));

        }
      }
    }
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