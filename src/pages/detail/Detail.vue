<template>
  <div>
    <book-info :info="info"></book-info>
    <comment-list :comments="comments"></comment-list>
    <div class="comment" v-if="showAdd">
      <textarea v-model='comment'
        class='textarea'
        :maxlength='100'
        placeholder='请输入图书短评'></textarea>
      <div class="location">
        地理位置：
        <switch color="#EA5149" :checked="location" @change="getGeo"></switch>
        <span class="text-primary">{{location}}</span>
      </div>
      <div class="phone">
        手机型号：
          <switch color="#EA5149" :checked="phone" @change="getPhone"></switch>
          <span class="text-primary">{{phone}}</span>
      </div>
      <button class="btn" @click="addComment">
        评论
      </button>
    </div>
    <div v-else class="text-footer">
      未登录或者已评论
    </div>
    <button open-type="share" class="btn">转发给好友</button>
  </div>
</template>

<script>
import { get, post, showModal } from '../../util.js'
import BookInfo from '../../components/BookInfo'
import CommentList from '../../components/CommentList'

export default {
  data () {
    return {
      userinfo: {},
      comments: [],
      bookid: '',
      info: {},
      comment: '',
      location: '',
      phone: ''
    }
  },
  computed: {
    showAdd () {
      // 没有登录
      if (!this.userinfo.openId) {
        return false
      }
      // 评论里面查到有自己的openid
      if (this.comments.filter(v => v.openid === this.userinfo.openId).length) {
        return false
      }
      return true
    }
  },
  onShareAppMessage (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: this.info.title,
      path: '/page/detail?id=' + this.bookid
    }
  },
  created () {
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  mounted () {
    // 1. 如何获取小程序在 page onLoad 时候传递的 options http://mpvue.com/mpvue/#_18
    this.bookid = this.$root.$mp.query.id
    this.getDetail()
    this.getComments()
    const userinfo = wx.getStorageSync('userinfo')
    if (userinfo) {
      this.userinfo = userinfo
    }
  },
  methods: {
    async getDetail () {
      const info = await get('/weapp/bookdetail', {id: this.bookid})
      this.info = info
      wx.setNavigationBarTitle({
        title: info.title
      })
    },
    getGeo (e) {
      const ak = 'rIt7RmMdNY8Lgw5VbsPMVSi81jYmGf0G'
      let url = 'http://api.map.baidu.com/geocoder/v2/'

      if (e.target.value) {
        wx.getLocation({
          success: res => {
            wx.request({
              url,
              data: {
                ak,
                location: `${res.latitude}, ${res.longitude}`,
                output: 'json'
              },
              success: res => {
                if (res.data.status === 0) {
                  this.location = res.data.result.addressComponent.city
                } else {
                  this.location = '未知地点'
                }
              }
            })
          }
        })
      } else {
        this.location = ''
      }
    },
    getPhone (e) {
      if (e.target.value) {
        const phoneInfo = wx.getSystemInfoSync()
        this.phone = phoneInfo.model
      } else {
        // 没选中
        this.phone = ''
      }
    },
    async addComment () {
      if (!this.comment) {
        return
      }
      // 评论内容 手机型号 地理位置 图书id 用户的openid
      const data = {
        comment: this.comment,
        phone: this.phone,
        location: this.location,
        bookid: this.bookid,
        openid: this.userinfo.openId
      }
      try {
        await post('/weapp/addcomment', data)
        this.comment = ''
        this.getComments()
      } catch (e) {
        showModal('失败', e.msg)
      }
    },
    async getComments () {
      const comments = await get('/weapp/commentlist', {bookid: this.bookid})
      this.comments = comments.list || []
    }
  },
  components: {
    BookInfo,
    CommentList
  }
}
</script>

<style lang="scss" scoped>
.comment {
  margin-top: 10px;
  .textarea {
    width: 730rpx;
    height: 200rpx;
    background: #eee;
    padding: 10px;
  }
  .location {
    margin-top: 10px;
    padding: 5px 10px;
  }
  .phone {
    margin-top: 10px;
    padding: 5px 10px;
  }
}
</style>
