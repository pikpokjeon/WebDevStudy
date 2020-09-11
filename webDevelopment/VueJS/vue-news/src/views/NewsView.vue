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
// import bus from '../utils/bus';
import ListMixin from '../mixins/ListMixin';

export default {
  components: {
    ListItem
    },
  mixins: [ListMixin], //mixin으로 사용
   
}
</script>
<style scoped>

</style>