<template>
<div>
  <section>
    <!-- 질문상세정보 -->
  <div class="user-container">  
      <div>
        <i class="fas fa-user"></i>
      </div>
      <div>
        <router-link :to="`/user/${fetchedItem.user}`">
        {{ fetchedItem.user }}
        </router-link>
      </div>  
  </div>
  <h2>{{ fetchedItem.title}}</h2>
  </section>
  <section>
    <!-- v-html은 글자내 html태그를 인식하게 하여
    화면에 뿌려준다 -->
    <div v-html="fetchedItem.content">

    </div>
   
  </section>

  </div>  
</template>
<script>
import { mapGetters } from 'vuex'
export default {
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