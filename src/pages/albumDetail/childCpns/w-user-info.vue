<template>
  <view class="user">
    <view class="user-info">
      <image :src="userInfo.avatar"/>
      <text>{{userInfo.name}}</text>
    </view>
    <view class="album-desc">
      <text>{{userInfo.desc}}</text>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      userInfo: {
        type: Object,
        default: {}
      }
    }
  }
</script>

<style scoped>
  .user {
    padding: 20rpx;
  }
  .user-info {
    display: flex;
    align-items: center;
    
  }
  .user-info image {
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;
  }
  .user-info text {
    margin-left: 20rpx;
  }
  .album-desc {
    margin-top: 20rpx;
  }
  .album-desc text {
    letter-spacing: 2rpx;
  }
</style>