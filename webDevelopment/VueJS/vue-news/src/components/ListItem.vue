<template>
  <div>
  <ul class ="news-list">
    <li class="post" v-for="item in listItems">
      
      <div class= "points">
        {{item.points || 0}}
      </div>
      
      <div>
        <!-- 타이틀영역 -->
        <p class="news-title">
          <template v-if="item.domain">
            <a v-bind:href="item.url">
              {{ item.title }}
            </a>
          </template>
          <template v-else>
            <router-link v-bind:to="`item/${item.id}`">
              {{ item.title }}
            </router-link>
          </template>
          
        </p>

        <small class="link-text">
          {{item.time_ago}} by 
          <router-link 
          v-if="item.user"
          v-bind:to="`/user/${item.user}`" class="link-text">
            {{item.user}}
          </router-link>
          <a 
            v-else
           :href="item.url">{{item.domain}}</a>
        </small>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  created() {
    // this.$store.dispatch('FETCH_NEWS')
    // 분기처리해야함
    console.log(this.$route);
    const name = this.$route.name;
    if (name === 'news'){
      this.$store.dispatch('FETCH_NEWS')
    }else if (name === 'ask'){
      this.$store.dispatch('FETCH_ASK')
    }else if (name === 'jobs'){
      this.$store.dispatch('FETCH_JOBS')
    }
    
  },
  computed : {
    listItems() {
    const name = this.$route.name;
      if (name === 'news'){
        return this.$store.state.news
      }else if (name === 'ask'){
        return this.$store.state.ask      
      }else if (name === 'jobs'){  
        return this.$store.state.jobs
      }
    }
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