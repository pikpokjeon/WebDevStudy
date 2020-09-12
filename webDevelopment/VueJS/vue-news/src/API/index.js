import axios from 'axios';

// 1.HTTP req res 기본설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
};

// 2.API 함수들 정리
const fetchNewsList = () => {
  // return axios.get(config.baseUrl + 'news/1.json');
  return axios.get(`${config.baseUrl}news/1.json`);
}

const fetchJobsList = () => {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}
const fetchAskList = () => {
  return axios.get(`${config.baseUrl}ask/1.json`);
}
const fetchUserInfo = (username) => {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}
const fetchCommentItem = (param) => {
  return axios.get(`${config.baseUrl}item/${param}.json`);

}
const fetchList = (pageName) => {
  return axios.get(`${config.baseUrl}${pageName}/1.json`)
}
// fetchNewsList()
//   .then()

export {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchCommentItem  ,
  fetchList
}