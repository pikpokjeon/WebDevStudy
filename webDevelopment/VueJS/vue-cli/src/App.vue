<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input v-on:addTodoItem="addOneItem"></todo-input>
    <todo-list v-bind:propsdata='todoItems' v-on:removeItem="removeOneItem" 
                v-on:toggle-Item='toggleOneItem'></todo-list>
    <todo-footer v-on:clearAll="clearAllItems"></todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'


export default {
    data: function(){
      return {
        todoItems: []
      }
    },
    methods:{
      addOneItem: function(todoItem){
        const obj = {completed:false,item:todoItem};
        //JSON.stringfy -> 자바스크리트 오브젝트를 변환
        localStorage.setItem(todoItem,JSON.stringify(obj));//key,value
        this.todoItems.push(obj);
      },
      removeOneItem:function(todoItem, index){
        console.log(todoItem,index);
        localStorage.removeItem(todoItem.item);
        this.todoItems.splice(index,1);//start, deleteCount 기능후 새로운배열을 반환해줌

      },
      toggleOneItem: function(todoItem,index){
        this.todoItems(index).completed = !this.todoItems(index).completed;  
        //boolean값 갱신
        localStorage.removeItem(todoItem.item);
        localStorage.setItem(todoItem.item,JSON.stringify(todoItem));
      },
      clearAllItems:function(){
        localStorage.clear();
        this.todoItems = []
      }
    },
    created: function(){ //인스턴스 생성시점에 돌아가는 로직
      // 로컬스토레이지 연결 문제있으니 고쳐야함
      if(localStorage.length>0){
        for(let i = 0; i < localStorage.length ; i ++){
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));

        }
      }
    },
  components: {
    'TodoHeader' : TodoHeader,
    'TodoInput' : TodoInput,
    'TodoList' : TodoList,
    'TodoFooter': TodoFooter
  }

}
</script>

<style>
  body {
    text-align : center;
    background-color: #f6f6f6;
  }
  input {
    border-style : groove;
    width: 200px;
  }
  button {
    border-style: groove;

  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
