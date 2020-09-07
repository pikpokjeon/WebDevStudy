import Vue from 'vue'
import Vuex from 'vuex'


// Store는 상위에서 하위에서 올라온 데이터들을 관리한다

// use : to add global functionality
Vue.use(Vuex); 

const storage = {
  fetch() {
      const arr =[];
      if(localStorage.length > 0) {
        for(let i = 0; i < localStorage.length ; i ++) {
          if (localStorage.key(i) !== 'loglevel:webpack-dev-server'){
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  }
}

export const store = new Vuex.Store({
  state : {
    todoItems: storage.fetch()
  },
  mutations: { 
    addOneItem(state, todoItem){
      const obj = {completed:false,item:todoItem};
      //JSON.stringfy -> 자바스크리트 오브젝트를 변환
      localStorage.setItem(todoItem,JSON.stringify(obj));//key,value
      state.todoItems.push(obj);
    },
    removeOneItem(state, index){
      console.log(state,index);
      localStorage.removeItem(state.item);
      state.todoItems.splice(index,1);//start, deleteCount 기능후 새로운배열을 반환해줌

    },
    toggleOneItem(state,index){
      state.todoItems[index].completed = !state.todoItems(index).completed;  
      //boolean값 갱신
      localStorage.removeItem(state.item);
      localStorage.setItem(todoItem.item,JSON.stringify(todoItem));
    },
    clearAllItems(){
      localStorage.clear();
      state.todoItems = []
    }
  }
})