<template>
  <div class="clearAllContainer">
    <div class='clearAll' v-on:click="clearTodo">Clear all</div>
  </div>
</template>

<script>

import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations({
   clearTodo:'clearAllItems'
    })
  }
}
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>