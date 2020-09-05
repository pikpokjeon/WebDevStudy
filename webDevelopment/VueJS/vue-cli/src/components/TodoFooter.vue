<template>
  <div class="clearAllContainer">
    <div class='clearAll' v-on:click="clearTodo">Clear all</div>
  </div>
</template>

<script>
export default {
  methods:{
    clearTodo:function(){
      localStorage.clear();
    }
  }
}
</script>

<style scoped>

</style>