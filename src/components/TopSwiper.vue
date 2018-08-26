<template>
  <div class="swiper">
    <swiper
      :indicator-dots="true"
      indicator-color="#EA5149"
      :autoplay="true"
      :interval="6000"
      :duration="1000"
      :circular="true"
    >
      <div v-for="(top, imgindex) in imgUrls" :key="imgindex">
        <swiper-item>
          <img
            @click="bookDetail(img)"
            class="slide-image"
            mode="aspectFit"
            v-for="img in top"
            :key="img.id"
            :src="img.image"
          >
        </swiper-item>
      </div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: ['tops'],
  methods: {
    bookDetail (item) {
      wx.navigateTo({
        url: '/pages/detail/main?id=' + item.id
      })
    }
  },
  computed: {
    imgUrls () {
      // 如果通用 请用chunk函数  比如lodash的chunk方法
      let res = this.tops
      return [res.slice(0, 3), res.slice(3, 6), res.slice(6)]
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper {
  margin-top: 5px;
  .slide-image {
    width: 33%;
    height: 250rpx;
  }
}
</style>
