import Chart from 'chart.js';
// plug만듬
export default {
  install(Vue){
      console.log(Vue,'plugin created');

      // $_   플러그인 프리픽스 접두사
      Vue.prototype.$_Chart = Chart;
      console.log(Vue.prototype.$_Chart);
  }
}