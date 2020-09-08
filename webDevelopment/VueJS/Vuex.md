# Vuex?

### 복잡한 app 컴포넌트들을 간의 데이터 전달을 효율적으로 관리해주는 라이브러리
#### 주요속성 State (data), Getters (computed), mutations (method), actions (비동기method)

-- Vuex 컨셉

1. state : 컴포넌트 간에 공유하는 데이터 `data()`
-        스토어가 아닌 곳에서 직접적으로 조작하지 않는다. 
-        어느 컴포넌트에서 해당 `state`를 변경했는지 알기 힘들다.
1. view : 데이터를 표시하는 화면 `template`
1. action : 비동기 methods <-> Backend API  (ex: axios, Promise, async)
-        `axios` request를 날리고 서버가 respond하면, `mutation` 실행해서 데이터를 조작해준다.
-        인자로 `context`가 들어가는데 `mutation`으로 접근하기 위함이다. 인스턴스 그 자체는 아니다.
1. mutation : `state` 변경하는 methods. 개발자 도구로 해당 데이터 확인가능


```javascript 
const store = new Vuex.Store({
  state: {
    posts: [],
    loading: true
  },
  actions: {
    loadData({
      commit
    }) {
      axios.get(URL).then((response) => {
        // console.log(response.data, this)
        commit('updatePosts', response.data)
        commit('changeLoadingState', false)
      })
    }
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts
    },
    changeLoadingState(state, loading) {
      state.loading = loading
    }
  }
})

new Vue({
  el: '#app',
  computed: Vuex.mapState(['posts', 'loading']),
  store,
  created() {
    //console.log(this.$store)
    this.$store.dispatch('loadData') // dispatch loading
  }
})

```



## Vuex 구조
### 컴포넌트(view) -> 비동기 로직 (action) -> 동기 로직 (mutation) -> 상태 (state)


- MVC 패턴에서 발생하는 구조적 오류 해결
- 컴포넌트 간 데이터 전달 명시
- 여러 개의 컴포넌트에서 같은 데이터를 업데이트하는 동기화 문제 해결

## Flux?

- Unidirectional data flow  (데이터의 흐름이 여러 갈래로 나뉘지 않고 '단방향'으로만 처리)
- action (event emitted) -> dispatcher (modify data) -> model (the data) -> view (show in client view) 

## Helper 함수
### Vuex에 선언한 (state, getters, actions, mutations) 속성을 Vue Component에 쉽게 연결해준다.
### 기존의 함수와 함께 사용하기 위해 Spread Operator를 사용한다. (객체 내부 값을 다 꺼내온다)

1. state -> mapState
```javascript
//App.vue
computed(){
  ...mapState(['num']) // num(){ return this.$store.state.num}
}
```
```html
<!-- {{ this.$store.state.num}} -->
<p>{{this.num}}</p>
```

1. getters -> mapGetters
```javascript
//App.vue
computed(){
  ...mapGetters(['reverseMsg']) // num(){ return this.$store.state.num}
}
//store.js
getters: {
  reverseMsg{
    return state.msg.split('').reverse().join('')
  }
}
```
```html
<!-- {{ this.$store.getters.reverseMsg}} -->
<p>{{this.reverseMsg}}</p>
```

1. mutations -> mapMutations

1. actions -> mapActions