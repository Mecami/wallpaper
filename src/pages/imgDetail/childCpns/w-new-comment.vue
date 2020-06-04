<template>
  <view>
    <view>
      <image src="/static/img/imgDetail/new.png"/>
      <text>热门评论</text>
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

</style>