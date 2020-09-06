<template>
  <div class="clearAllContainer">
    <div class='clearAll' v-on:click="clearTodo">Clear all</div>
  </div>
</template>

<script>
export default {
  methods:{
    clearTodo(){
      this.$emit('clearAll');
    }
  }
}
</script>

<style scoped>

</style>