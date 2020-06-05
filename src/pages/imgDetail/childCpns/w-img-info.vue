<template>
  <view class="img-desc">
    <image :src="imgInfo.img" mode="widthFix"/>
    <view class="img-info">
      <view class="rank">
        <image src="/static/img/imgDetail/rank2.png"/>
        <text>{{imgInfo.rank}}</text>
      </view>
      <view class="collect">
        <image src="/static/img/imgDetail/star.png"/>
        <text>收藏</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      imgInfo: {
        type: Object,
        default: {}
      }
    }
  }
</script>

<style scoped>
  .img-desc {
    border-bottom: 12rpx solid #eee;
  }
  .img-desc image {
    width: 100%;
  }
  .img-info {
    display: flex;
    height: 80rpx;
  }
  .img-info image {
    vertical-align: middle;
    width: 40rpx;
    height: 40rpx;
    margin-right: 6rpx;
  }
  .rank, .collect {
    flex: 1;
    /* text-align: center; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>