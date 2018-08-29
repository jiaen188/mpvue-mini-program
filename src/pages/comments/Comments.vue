<template>
  <div class="container">
    <comment-list type="user" :comments="comments"></comment-list>
  </div>
</template>

<script>
import { get } from '../../util.js'
import CommentList from '../../components/CommentList'

export default {
  onShow () {
    if (!this.userinfo.openId) {
      let userinfo = wx.getStorageSync('userinfo')
      if (userinfo) {
        this.userinfo = userinfo
        this.init()
      }
    }
  },
  data () {
    return {
      userinfo: {},
      comments: []
    }
  },
  methods: {
    init () {
      wx.showNavigationBarLoading()
      this.getComments()
    },
    async getComments () {
      const comments = await get('/weapp/commentlist', {
        openid: this.userinfo.openId
      })
      this.comments = comments.list
    }
  },
  components: {
    CommentList
  }
}
</script>

<style>

</style>
