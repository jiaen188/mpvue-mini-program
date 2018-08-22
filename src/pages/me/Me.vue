<template>
  <div class="container">
    <div class="userinfo">
      <img :src="userinfo.avatarUrl" alt="">
      <p>{{userinfo.nickName}}</p>
    </div>
    <YearProgress></YearProgress>

    <button @click="scanBook" class="btn">添加图书</button>
  </div>
</template>

<script>
import YearProgress from '../../components/YearProgress.vue'

export default {
  created () {
    this.userinfo = wx.getStorageSync('userinfo')
  },
  data () {
    return {
      userinfo: {}
    }
  },
  methods: {
    scanBook () {
      wx.scanCode({
        success: (res) => {
          console.log(res)
        }
      })
    }
  },
  components: {
    YearProgress
  }
}
</script>

<style lang="scss">
.container {
  padding: 0 30rpx;
  .userinfo {
    margin-top: 100rpx;
    text-align: center;
    img {
      width: 150rpx;
      height: 150rpx;
      margin: 20rpx;
      border-radius: 50%
    }
  }
}
</style>
