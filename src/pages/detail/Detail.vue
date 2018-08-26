<template>
  <div>图书id：{{bookid}}</div>
</template>

<script>
import { get } from '../../util.js'

export default {
  data () {
    return {
      bookid: ''
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
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
