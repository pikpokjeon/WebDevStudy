<template>
  <div>
    <!-- info라는 이름으로 userInfo props를 내려줌 -->
    <user-profile :info="userInfo"></user-profile>
    <!-- <p>name: {{userInfo.id}}</p>
    <p>karma: {{userInfo.karma}}</p>
    <p>created: {{userInfo.created}}</p> -->
  </div>  
</template>
<script>
import UserProfile from '../components/UserProfile.vue'
export default {
  components: {
    UserProfile,
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    // console.log(this.$route.params.id);
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
  },
}
</script>
<style scoped>

</style>