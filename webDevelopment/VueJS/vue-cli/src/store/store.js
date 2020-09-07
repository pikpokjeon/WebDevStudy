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
  getters : { //computed와 같은 것
    getTodoItems(state) {
      return state.todoItems;
    }
  },
  mutations: { 

    // 전송되는 데이터 인자값은 보통 payload 로 많이 쓴다

    addOneItem(state, todoItem){
      const obj = {completed:false, item:todoItem}; //실질적으로 저장되는 todoItem
      //JSON.stringfy -> 자바스크리트 오브젝트를 변환
      localStorage.setItem(todoItem, JSON.stringify(obj));//key,value
      state.todoItems.push(obj); //실질적으로 저장되는 todoItem
    },
    removeOneItem(state, payload){
      console.log(state,payload);
      localStorage.removeItem(state.item);
      state.todoItems.splice(payload.index, 1);//start, deleteCount 기능후 새로운배열을 반환해줌

    },
    toggleOneItem(state, payload){
      console.log(payload);
      state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;  
      //boolean값 갱신
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(payload.todoItem.item ,JSON.stringify(payload.todoItem));
    },
    clearAllItems(){
      localStorage.clear();
      state.todoItems = []
    }
  }
})