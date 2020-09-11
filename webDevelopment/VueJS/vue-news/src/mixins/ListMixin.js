import bus from '../utils/bus';
export default {
  // 재활용할 컴포넌트 옵션
  created() { // 라이프사이클 훅
    bus.$emit('start:spinner'); 
      setTimeout(()=> {
        this.$store.dispatch('FETCH_LIST', this.$route.name)
          .then(()=> {
            console.log('fetched');
            bus.$emit('end:spinner');           
          })
          .catch(err => console.log(err));

      },1000)
  },

}