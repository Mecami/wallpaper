<template>
  <view class="album-info">
    <view>
      <image :src="albumInfo.cover" mode="widthFix"/>
    </view>
    <view class="album-text">
      <text class="album-name">{{albumInfo.name}}</text>
      <text class="follow">关注专辑</text>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      albumInfo: {
        type: Object,
        default: {}
      }
    }
  }
</script>

<style scoped>
  .album-info {
    position: relative;
  }
  .album-info image {
    width: 100%;
  }
  .album-text {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 32rpx;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20rpx;
  }
  .album-name {
    color: #fff;
    /* font-weight: 600; */
    font-size: 38rpx;
  }
  .follow {
    background-color: var(--color);
    padding: 14rpx;
    color: #fff;
    border-radius: 8rpx;
  }
</style>