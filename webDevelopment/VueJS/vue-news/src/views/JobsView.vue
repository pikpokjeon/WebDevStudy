<template>
  <div>
    <list-item></list-item>
  <!-- <p  v-for="job in fetchedJobs">
    <a v-bind:href="job.url">{{job.title}}</a>
    <small>{{job.time_ago}},{{job.domain}}</small>
  </p> -->
  </div>
</template>
<script>
// import { mapState, mapGetters} from 'vuex'
import ListItem from '../components/ListItem.vue';
import ListMixin from '../mixins/ListMixin'

export default {
  components: {
    ListItem
    },
  mixins: [ListMixin],  
  
  // computed: {
  //   ...mapGetters([
  //     'fetchedJobs'
  //   ])
  // },
  // created() {
  //   this.$store.dispatch('FETCH_JOBS');
  // },
}
</script>
<style lang="stylus">

</style>