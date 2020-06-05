<template>
  <view class="user-info" v-if="Object.keys(userInfo).length !== 0">
    <view class="avatar">
      <image :src="userInfo.avatar"/>
    </view>
    <view class="user-content">
      <view class="user-name">
        {{userInfo.name}}
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
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
  }
  .user-content {
    /* display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 6rpx; */
  }
  .user-name {
    font-size: 32rpx;
    /* color: #555; */
    margin-bottom: 4rpx;
  }
  .atime {
    color: #ccc;
    font-size: 24rpx;
  }
</style>