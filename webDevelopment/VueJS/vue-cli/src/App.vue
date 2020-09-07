<template>
  <div id="app">
    <todo-header></todo-header>
    <!-- <todo-input v-on:addTodoItem="addOneItem"></todo-input> -->
    <todo-input ></todo-input>
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


export default { //default라는 익명함수는 import 할 때 이름을 정할 수 있다
    data: function(){
      return {
        todoItems: []
      }
    },
    methods:{
      //store의 mutations
      // addOneItem(todoItem){
      //   const obj = {completed:false,item:todoItem};
      //   //JSON.stringfy -> 자바스크리트 오브젝트를 변환
      //   localStorage.setItem(todoItem,JSON.stringify(obj));//key,value
      //   this.todoItems.push(obj);
      // },
      // removeOneItem(todoItem, index){
      //   console.log(todoItem,index);
      //   localStorage.removeItem(todoItem.item);
      //   this.todoItems.splice(index,1);//start, deleteCount 기능후 새로운배열을 반환해줌

      // },
      // toggleOneItem(todoItem,index){
      //   this.todoItems(index).completed = !this.todoItems(index).completed;  
      //   //boolean값 갱신
      //   localStorage.removeItem(todoItem.item);
      //   localStorage.setItem(todoItem.item,JSON.stringify(todoItem));
      // },
      // clearAllItems(){
      //   localStorage.clear();
      //   this.todoItems = []
      // }
    },

  components: {
    //Enhanced Object Literal 때문에 키값:속성값 이름이 같으면 하나만 적어도 됨.
     TodoHeader,
      TodoInput,
      TodoList,
    'TodoFooter': TodoFooter //기존
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
