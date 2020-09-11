<template>
  <div>
      <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem'

export default {
    components: {
      ListItem,
    },
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
      return createElement(ListView);
    },
  }
}
</script>

<style lang="stylus">

</style>