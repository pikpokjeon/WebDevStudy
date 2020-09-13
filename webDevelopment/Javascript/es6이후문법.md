## Promise
```javascript
  FETCH_NEWS(context){
    console.log("step call fetchNewsList");
    fetchNewsList(context).then(res => {
      console.log(res);
      context.commit('SET_NEWS', res.data);
      return res; //promise 객체를 반환한다.
    })
    .catch(err => console.log(err)
    );
  },
```

## Async & Await
- Promise와 Callback에서 주는 단점을 해결하고 동기적(절차적)으로 코드를 작성하게 해주는 비동기 처리 패턴

```javascript
     async FETCH_LIST( {commit}, pageName){
        const res =  await fetchList(pageName);
        commit('SET_LIST',res.data);
        return res;
      }
```
- async 함수의 내부 로직 중 비동기 처리 로직 앞에 await를 붙여준다
  Promise 객체를 반환하는 API 호출 함수 앞에 await을 붙인다.
```javascript

 async FETCH_LIST( {commit}, pageName){
    try{
        const res =  await fetchList(pageName);
        commit('SET_LIST',res.data);
        return res;
    } catch(err) {
      console.log(err);
    }
 }
    
```
- 에러 로그 출력을 위해 try/catch로 감싼다



## Spread Operator
```javascript
    // Objext Spread Operator

    const yaejin = {
      field : 'Frontend',
      language : 'JS'
    };
    const developer = {
      nation : 'Korea',
      ...yaejin //속성들을 다 들고옴.
    };
    console.log(developer);

```