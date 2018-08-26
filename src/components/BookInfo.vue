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
    <div class="tags">
      <div class="badge" v-for="tag in info.tags" :key="tag">{{tag}}</div>
    </div>
    <div class="summary">
      <p v-for="(sum, i) in info.summary" :key="i">{{sum}}</p>
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
  .badge {
    display: inline-block;
    margin: 5px;
    padding: 5px;
    border-radius: 10px;
    border: 1px solid #EA5149;
    color: #EA5149;
  }
  .summary {
    margin-top: 10px;
    padding: 0 15px;
    p {
      text-indent: 2em;
      font-size: 14px;
    }
  }
}
</style>
