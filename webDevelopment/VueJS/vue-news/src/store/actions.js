
import {   fetchNewsList,
           fetchJobsList,
           fetchAskList,
           fetchUserInfo,
           fetchCommentItem
        } from '../API/index.js';

export default {
  FETCH_NEWS(context){
    fetchNewsList()
      .then(res => {
        console.log(res);
        context.commit('SET_NEWS', res.data);
      })
      .catch(err => console.log(err)
      )},

  FETCH_ASK(context){
    fetchAskList()
    .then(res => {
      context.commit('SET_ASK',res.data);
    })
    .catch(err => console.log(err)
    )},
    FETCH_JOBS({commit}) {
      fetchJobsList()
      .then( ({data}) => commit('SET_JOBS', data))
      .catch(err => console.log(err));
     },
    
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
     }

    }