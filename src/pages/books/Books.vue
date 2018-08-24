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
  onPullDownRefresh () {
    this.getList()
  },
  methods: {
    async getList () {
      wx.showNavigationBarLoading()
      const books = await get('/weapp/booklist')
      this.books = books.list
      wx.stopPullDownRefresh()

      wx.hideNavigationBarLoading()
    }
  },
  components: {
    Card
  }
}
</script>

<style>

</style>
