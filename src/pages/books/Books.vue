<template>
  <div>
    <card v-for="book in books" :key="book.id" :book="book"></card>
    <p class="text-footer" v-if="!more">
      没有更多数据
    </p>
  </div>
</template>

<script>
import { get } from '../../util.js'
import Card from '../../components/Card'

export default {
  data () {
    return {
      books: [],
      page: 0,
      more: true
    }
  },
  mounted() {
    this.getList(true)
  },
  onPullDownRefresh () {
    this.getList(true)
  },
  onReachBottom() {
    if (!this.more) {
      // 没有更多了
      return false
    }
    this.page = this.page + 1
    this.getList()
  },
  methods: {
    async getList (init) {
      if (init) {
        this.page = 0
        this.more = true
      }
      wx.showNavigationBarLoading()
      const books = await get('/weapp/booklist', {page: this.page})
      if (books.list.length < 10 && this.page > 0) {
        this.more = false
      }
      if (init) {
        this.books = books.list
        wx.stopPullDownRefresh()
      } else {
        // 下拉刷新， 不能直接覆盖 books 而是累加
        this.books = this.books.concat(books.list)
      }

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
