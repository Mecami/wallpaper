<template>
  <view class="new-comment">
    <view class="comment-title">
      <!-- <image src="/static/img/imgDetail/new2.png"/> -->
      <text>最新评论</text>
    </view>
    <w-comment-info v-for="(item, index) in newComment" :key="index"
                    :commentInfo="item"/>
  </view>
</template>

<script>
  import wCommentInfo from './w-comment-info'
  export default {
    components: {
      wCommentInfo
    },
    props: {
      newComment: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .new-comment {
    padding: 20rpx;
  }
  .comment-title image {
    width: 60rpx;
    height: 40rpx;
  }
</style>