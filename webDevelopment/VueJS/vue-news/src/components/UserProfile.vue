<template>
  <div>
      <div class="user-container">  
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <slot name="username">
              <!-- 상위 컴포넌트에서 정의할 영역 -->
          </slot>
           <router-link :to="`/user/${info.user}`">
            {{ info.user }}
          </router-link> 

          <template v-if="info.id">
            <div class="info.id">
              {{ info.id }}
            </div>
          </template>
          
          <template v-else>
            <div class="info.user">
              {{ info.user }}
            </div>
          </template> 
          
          <div div class="time">
            <slot name="time">
              <!-- 상위 컴포넌트에서 정의할 영역 -->
            </slot>
          </div>
          <slot name="karma">
              <!-- 상위 컴포넌트에서 정의할 영역 -->
          </slot>
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
  // computed: {
  //   userInfo() {
  //     return this.$store.state.user;
  //   }
  // },

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