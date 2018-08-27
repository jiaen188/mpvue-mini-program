<template>
  <div>
    <book-info :info="info"></book-info>
    <div class="comment">
      <textarea v-model="comment" class="textarea" :maxlength="100" placeholder="请输入图书短评"></textarea>
    </div>
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
  </div>
</template>

<script>
import { get } from '../../util.js'
import BookInfo from '../../components/BookInfo'

export default {
  data () {
    return {
      bookid: '',
      info: {},
      comment: '',
      location: '',
      phone: ''
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
    }
  },
  components: {
    BookInfo
  }
}
</script>

<style lang="scss" scoped>
.comment {
  margin-top: 10px;
  .textarea {
    width: 730rpx;
    height: 220rpx;
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
