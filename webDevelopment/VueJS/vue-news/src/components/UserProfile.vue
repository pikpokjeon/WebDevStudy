<template>
  <div>
      <div class="user-container">  
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <div>
            {{ info.id }}
          </div>
          <div class="time">
            {{ info.created }}
          </div>
          <!-- <router-link :to="`/user/${userInfo.user}`">
          </router-link> -->
        </div>  
      </div>
   </div>
</template>

<script>
export default {
  props: {
    //내려온 info props데이터는 object이다
    info: Object
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