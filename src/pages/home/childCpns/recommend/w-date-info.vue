<template>
  <view class="date-info" v-if="Object.keys(dateInfo).length !== 0">
    <view class="date">
      {{dateInfo.date}}
    </view>

    <view class="title">
      {{dateInfo.title}}
    </view>

    <view class="more">
      <text>更多</text>
      <image src="/static/img/home/right.png"></image>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      dateInfo: {
        type: Object,
        default: {}
      }
    }
  }
</script>

<style scoped>
  .date-info {
    display: flex;
    /* justify-content: center;
    align-content: center; */
    height: 80rpx;
    font-weight: 600;
    font-size: 36rpx;
  }
  .date {
    width: 200rpx;
    color: var(--color);
    line-height: 80rpx;
    text-align: center;
     font-weight: 600;
    font-size: 36rpx;
  }
  .date {
    /* padding-left: 20rpx; */
  }
  .title {
    flex: 1;
    /* text-align: center;
    line-height: 80rpx; */
    display: flex;
    justify-content: center;
    align-items: center;
     /* font-weight: 600; */
    /* font-size: 36rpx; */
  }
  .more {
    width: 200rpx;
    
    display: flex;
    /* justify-content: center; */
    justify-content: flex-end;
    align-items: center;

    padding-right: 20rpx;

  }
  .more text {
    color: var(--color);
    /* font-weight: 600; */
    /* font-size: 36rpx; */
  }
  .more image {
    margin-top: 4rpx;
    /* vertical-align: top; */
    width: 36rpx;
    height: 36rpx;
  }
</style>