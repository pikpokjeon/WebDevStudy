<template>
<div>
  <list-item></list-item>
  <!-- <ol class ="news-list">
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
  </ol> -->
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
// import { mapState} from 'vuex'
import ListItem from '../components/ListItem.vue';
import bus from '../utils/bus';
export default {
  components: {
    ListItem
    },
    created() {
      //아래 이름으로 이벤트 발생 (액션)
      bus.$emit('start:spinner'); 
      setTimeout(()=> {
        this.$store.dispatch('FETCH_NEWS')
        .then(()=> {
          console.log('fetched');
          bus.$emit('end:spinner');           
        })
        .catch(err => console.log(err));

      },3000);
      
    },

// computed: {
  //   ...mapState({
  //     news: state => state.news
  //   })
  // },
  // created() {
    // this.$store.dispatch('FETCH_NEWS'); // Component to Actions
 // 1
  // fetchNewsList()    
  //     .then(res => this.users = res.data)
  //     .catch(err => console.log(err));
  // },
}
</script>
<style scoped>

</style>