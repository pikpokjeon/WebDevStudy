<template>
<div>
  <ol class ="news-list">
    <li class="post" v-for="item in news">
      
      <div class= "points">
        {{item.points}}
      </div>
      
      <div>
        <a class="news-title" v-bind: href="item.url">
          {{item.title}}
        </a>
        <small class="link-text">{{item.time_ago}} by 
          <router-link v-bind:to="`/user/${item.user}`">
            {{item.user}}
          </router-link>
        </small>
      </div>
      
      
    </li>
  </ol>
  <div>
  <!-- <p v-for="item in news"> 
    <a v-bind:href="item.url">
      {{item.title}}
    </a>
    <small>{{item.time_ago}} by 
      <router-link v-bind:to="`/user/${item.user}`">
      {{item.user}}
      </router-link>
    </small>
  </p> -->
  </div>

</div>  
</template>
<script>
import { mapState} from 'vuex'
export default {
  computed: {
    ...mapState({
      news: state => state.news
    })
  },
  created() {
    this.$store.dispatch('FETCH_NEWS'); // Component to Actions
 // 1
  // fetchNewsList()    
  //     .then(res => this.users = res.data)
  //     .catch(err => console.log(err));
  },
}
</script>
<style scoped>
.news-list {
  list-style: none;
}
.points {
  width:80px;
  height:60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.news-title {
  margin:0;
}
.link-text{
  color:slateblue;
}
a { 
  text-decoration: none;
}

</style>