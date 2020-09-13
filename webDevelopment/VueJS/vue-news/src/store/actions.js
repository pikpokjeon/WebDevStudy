
import {   fetchNewsList,
           fetchJobsList,
           fetchAskList,
           fetchUserInfo,
           fetchCommentItem,
           fetchList
        } from '../API/index.js';

export default {
  // FETCH_NEWS(context){
  //   console.log("step call fetchNewsList");
  //   fetchNewsList(context).then(res => {
  //     console.log(res);
  //     context.commit('SET_NEWS', res.data);
  //     return res; //promise 객체를 반환한다.
  //   })
  //   .catch(err => console.log(err)
  //   );
  // },

  // FETCH_ASK(context){
  //   fetchAskList()
  //   .then(res => {
  //     context.commit('SET_ASK',res.data);
  //   })
  //   .catch(err => console.log(err)
  //   )},
  //   FETCH_JOBS({commit}) {
  //     fetchJobsList()
  //       .then( ({data}) => commit('SET_JOBS', data))
  //       .catch(err => console.log(err));
  //    },
    
    FETCH_USER( { commit }, name) {
      fetchUserInfo(name)
      // 구조분해할당으로 data를 가져옴.
        .then( ({data}) =>  commit('SET_USER', data))
        .catch(err => console.log(err));
     },
     FETCH_ITEM( {commit }, item) {
       fetchCommentItem(item)
        .then( ({data}) => commit('SET_ITEM', data))
        .catch(err => console.log(err));
     },

     async FETCH_LIST( {commit}, pageName){
      try{
        const res =  await fetchList(pageName);
        commit('SET_LIST',res.data);
        return res;
      } catch(err) {
        console.log(err);
      }
    }