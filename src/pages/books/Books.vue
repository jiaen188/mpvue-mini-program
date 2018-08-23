<template>
  <div>
    <card v-for="book in books" :key="book.id" :book="book"></card>
  </div>
</template>

<script>
import { get } from '../../util.js'
import Card from '../../components/Card'

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
  },
  components: {
    Card
  }
}
</script>

<style>

</style>
