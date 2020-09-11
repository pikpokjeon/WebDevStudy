<template>

  <!-- 배열 한 앨리먼트 item -->
  <div>
    <list-item></list-item>
  <!-- <p v-for="item in fetchedAsk">  -->
    <!-- <a v-bind:href="item.url">
      {{item.title}}
    </a> -->
    <!-- <router-link v-bind:to="`item/${item.id}`">{{item.title}}</router-link>
    <small>{{item.time_ago}} by {{item.user}}</small>
  </p> -->
  </div>
</template>
<script>

// import { mapGetters} from 'vuex'
import ListItem from '../components/ListItem.vue';

export default {
 components: {ListItem},
 computed: {
    // ...mapGetters([
    //   'fetchedAsk'
    // ])
    // ...mapGetters({
    //   fetchedAsk
    // })
    // ...mapState({
    //   ask: state => state.ask
    // })
  },
  created() {
    // this.$store.dispatch('FETCH_ASK');
  },
}
</script>
<style scoped>

</style>