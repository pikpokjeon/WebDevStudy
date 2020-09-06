<template>
  <div class="clearAllContainer">
    <div class='clearAll' v-on:click="clearTodo">Clear all</div>
  </div>
</template>

<script>
export default {
  methods:{
    clearTodo:function(){
      this.$emit('clearAll');
    }
  }
}
</script>

<style scoped>

</style>