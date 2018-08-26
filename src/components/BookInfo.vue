<template>
  <div class="bookinfo">
    <div class="thumb">
      <img class="back" mode="aspectFill" :src="info.image">
      <img class="img" :src="info.image" mode="aspectFit">

      <div class="info">
        <div class="title">
          {{info.title}}
        </div>
        <div class="author">
          {{info.author}}
        </div>
      </div>
    </div>

    <div class="detail">
      <img class="avatar" mode="aspectFit" :src="userInfo.image">
      {{userInfo.name}}
      <div class="right text-primary">
        {{info.rate}}分
        <rate :value="info.rate"></rate>
      </div>
    </div>
    <div class="detail">
      {{info.publisher}}
      <div class="right">{{info.price}}</div>
    </div>
  </div>
</template>

<script>
import Rate from './Rate'

export default {
  props: ['info'],
  computed: {
    userInfo () {
      return this.info.user_info || {}
    }
  },
  components: {
    Rate
  }
}
</script>

<style lang="scss" scoped>
.bookinfo {
  font-size: 14px;
  .thumb {
    width: 750rpx;
    height: 500rpx;
    overflow: hidden;
    position: relative;
    .back {
      filter: blur(15px);
      width: 100%;
    }
    .img {
      position: absolute;
      width: 100%;
      height: 300rpx;
      left: 0;
      top: 30rpx;
    }
    .info {
      color: white;
      position: absolute;
      width: 100%;
      left: 0;
      top: 330rpx;
      text-align: center;
      .title {
        font-size: 20px;
      }
      .author {
        font-size: 14px;
      }
    }
  }
  .right {
    float: right;
  }
  .detail {
    padding: 5px 10px;
    .avatar {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      vertical-align: middle;
    }
  }
}
</style>
