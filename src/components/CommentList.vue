<template>
  <div class="comment-list">
    <div class="page-title">
      我的评论
    </div>
    <div class="comment"
        v-for="comment in comments"
        :key="comment.id"
    >
      <div class="user">
        <div class="inline">
          <img :src="comment.image" class="avatar" mode="aspectFit">
          {{comment.title}}
        </div>
        <div class="right">
          {{comment.location || '未知地址'}}
          <span class="text-primary">--</span>
          {{comment.phone || '未知型号'}}
        </div>
      </div>
      <div class="content">
        {{comment.comment}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['comments']
}
</script>

<style lang="scss" scoped>
.comment-list {
  background: #eee;
  font-size: 14px;
  .comment {
    background: white;
    margin-bottom: 10px;
    padding: 5px 20px;
    .user {
      .inline {
        display: inline;
        .avatar {
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }
      }
    }
    .content {
      margin: 10px 0;
    }
  }
}
</style>
