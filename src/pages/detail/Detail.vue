<template>
  <div>
    图书id：{{bookid}}
    <book-info :info="info"></book-info>
  </div>
</template>

<script>
import { get } from '../../util.js'
import BookInfo from '../../components/BookInfo'

export default {
  data () {
    return {
      bookid: '',
      info: {}
    }
  },
  mounted () {
    // 1. 如何获取小程序在 page onLoad 时候传递的 options http://mpvue.com/mpvue/#_18
    this.bookid = this.$root.$mp.query.id
    this.getDetail()
  },
  methods: {
    async getDetail () {
      const info = await get('/weapp/bookdetail', {id: this.bookid})
      console.log(info)
      this.info = info
      wx.setNavigationBarTitle({
        title: info.title
      })
    }
  },
  components: {
    BookInfo
  }
}
</script>

<style lang="scss" scoped>

</style>
