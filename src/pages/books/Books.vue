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
      more: true,
      tops: []
    }
  },
  mounted() {
    this.getList(true)
    this.getTop()
  },
  onPullDownRefresh () {
    this.getList(true)
    this.getTop()
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
    async getList (init) { // 获取书籍books列表
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
    },
    async getTop () { // 获取访问最多的那几本图书
      const tops = await get('/weapp/top')
      this.tops = tops.list
    }
  },
  components: {
    Card
  }
}
</script>

<style>

</style>
