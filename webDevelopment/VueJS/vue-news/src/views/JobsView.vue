<template>
  <div>
  <p  v-for="job in fetchedJobs">
    <a v-bind:href="job.url">{{job.title}}</a>
    <small>{{job.time_ago}},{{job.domain}}</small>
  </p>
  </div>
</template>
<script>
import { mapState, mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'fetchedJobs'
    ])
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
}
</script>
<style lang="stylus">

</style>