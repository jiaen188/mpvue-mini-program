<template>
  <div>
    <h1>vue is good</h1>
    <todolist></todolist>
  </div>
</template>

<script>
import Todolist from '@/components/Todolist'
export default {
  components: {
    Todolist
  }
}
</script>

<style scoped>
h1{
  color: red;
}
</style>
