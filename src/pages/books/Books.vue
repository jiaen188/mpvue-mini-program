<template>
  <div>
    <div v-for="book in books" :key="book.id">{{book.title}}</div>
  </div>
</template>

<script>
import { get } from '../../util.js'

export default {
  data () {
    return {
      books: []
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    async getList () {
      const books = await get('/weapp/booklist')
      this.books = books.list
    }
  }
}
</script>

<style>

</style>
