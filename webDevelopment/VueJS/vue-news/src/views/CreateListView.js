import ListView from '../views/ListView.vue';
import bus from '../utils/bus';
export default function createListView(name) {

  return {
    // 재사용할 컴포넌트 (인스터스) 옵션들이 들어갈 자리
    name: 'HOCComponent',
    created() {
      //아래 이름으로 이벤트 발생 (액션)
      bus.$emit('start:spinner'); 
      setTimeout(()=> {
        this.$store.dispatch('FETCH_LIST', this.$route.name )
          .then(()=> {
            console.log('fetched');
            bus.$emit('end:spinner');           
          })
          .catch(err => console.log(err));

      },3000)
    },
    render(createElement) {
      console.log(createElement);
      console.log(ListView);
      return createElement(ListView);
    },
  }
}

// export default createListView = (name) => ( 
//   {name: name, render(createElement){createElement(ListView)} });