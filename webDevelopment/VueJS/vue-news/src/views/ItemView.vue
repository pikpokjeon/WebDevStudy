<template>
<div>
  <section>
    <!-- 질문상세정보 -->
    <!-- 사용자정보 -->
  <div class="user-container">
    <user-profile :info="fetchedItem">
      <!-- ItemView -> info.user
      UserView -> info.id -->
      <router-link slot="username" :to="`/user/${fetchedItem.user}`">
        {{ fetchedItem.user }}
      </router-link>
      <span slot="time">{{ 'posted '+fetchedItem.time_ago }}</span>  
    </user-profile>  

 <!--     <div>
        <i class="fas fa-user"></i>
      </div>
      <div>
        <router-link :to="`/user/${fetchedItem.user}`">
        {{ fetchedItem.user }}
        </router-link>
      </div>   -->
  </div>
  <h2>{{ fetchedItem.title}}</h2>
  </section>
  <section>
    <!-- v-html은 글자내 html태그를 인식하게 하여
    화면에 뿌려준다 -->
    <div v-html="fetchedItem.content">

    </div>
   
  </section>
  <section>

  </section>

  </div>  
</template>
<script>
import UserProfile from '../components/UserProfile'
import { mapGetters } from 'vuex'
export default {
  components: {
    UserProfile
  },
  computed : {
    ...mapGetters([
      'fetchedItem'
    ])
  },
  created() {
    const itemID = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemID)
  },
  
}
</script>
<style scoped>
.user-container {
  display:flex;
  align-items: center;
}
.fa-user {
  font-size: 2.5rem;
}


</style>