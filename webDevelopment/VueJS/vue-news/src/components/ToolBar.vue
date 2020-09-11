<template>
  <div class="header">
    <!-- <a>태그로 만들어줌 -->
    <router-link to ="/news">News</router-link> |
    <router-link to ="/jobs">Jobs</router-link> |
    <router-link to ="/ask">Ask</router-link>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.header {
  color:white;
  background-color: #42b883;
  display:flex;
  padding: 15px;
}
.header .router-link-active {
color:black;
}
.header a{
  color:white;
}
</style>
