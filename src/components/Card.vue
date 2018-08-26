<template>
  <a :href="detailUrl">
    <div class="book-card">
      <div class="thumb" @click.stop="preview">
        <img :src="book.image" mode="aspectFit" class="image">
      </div>
      <div class="detail">
        <div class="row text-primary">
          <div class="right">
            {{book.rate}} <rate :value="book.rate"></rate>
          </div>
          <div class="left">
            {{book.title}}
          </div>
        </div>
        <div class="row">
          <div class="right text-primary">
            浏览量：{{book.count}}
          </div>
          <div class="left">
            {{book.author || '作者数据错误' }}
          </div>
        </div>
        <div class="row">
          <div class="right">
            {{book.user_info.nickName}}
          </div>
          <div class="left">
            {{book.publisher}}
          </div>
        </div>
      </div>
    </div>
  </a>

</template>

<script>
import Rate from './Rate.vue'

export default {
  props: ['book'],
  methods: {
    preview () {
      wx.previewImage({
        current: this.book.image,
        urls: [this.book.image]
      })
    }
  },
  computed: {
    detailUrl () {
      return '/pages/detail/main?id=' + this.book.id
    }
  },
  components: {
    Rate
  }
}
</script>

<style lang="scss" scoped>
.book-card {
  padding: 5px;
  overflow: hidden;
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 14px;
  .thumb {
    width: 90px;
    height: 90px;
    float: left;
    margin: 0 auto;
    overflow: hidden;
    .image {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .detail {
    margin-left: 100px;
    .row {
      line-height: 20px;
      margin-bottom: 3px;
      .right {
        float: right;
      }
      .left {
        margin-right: 80px;
      }
    }
  }
}
</style>
