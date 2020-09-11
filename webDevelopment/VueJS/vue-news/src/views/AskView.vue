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
import ListMixin from '../mixins/ListMixin'

export default {
 components: {ListItem},
  mixins: [ListMixin],

  }

</script>
<style scoped>

</style>