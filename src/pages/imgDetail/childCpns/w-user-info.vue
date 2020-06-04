<template>
  <view class="user-info">
    <view class="avatar">
      <image :src="userInfo.avatar"/>
    </view>
    <view class="user-content">
      <view class="user-name">
        {{userInfo.userName}}
      </view>
      <view class="atime">
        {{userInfo.cnTime}}
      </view>
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
  .user-info {
    padding: 16rpx;
    display: flex;

  }
  .avatar {
    margin-right: 16rpx;
  }
  .avatar image {
    width: 100rpx;
    height: 100rpx;
    border-radius: 50%;
  }
  .user-content {
    /* display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 6rpx; */
  }
  .user-name {
    font-size: 36rpx;
    color: #444;
    margin-bottom: 12rpx;
  }
  .atime {
    color: #ccc;
    font-size: 28rpx;
  }
</style>