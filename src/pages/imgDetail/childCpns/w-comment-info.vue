<template>
  <view class="comment-info">
    <view class="info-left">
      <image :src="commentInfo.user.avatar"/>
    </view>
    <view class="info-right">
      <view class="user-info">
        <view class="user-name">
          <text>{{commentInfo.user.name}}</text>
          <view class="badges">
            <image v-for="(item, index) in commentInfo.user.title" :key="index"
                   :src="item.icon"></image>
          </view>
        </view>
        <view class="time">{{commentInfo.atime | timeFilter}}</view>
      </view>
      <view class="comment-content">
        {{commentInfo.content}}
      </view>
      <view class="comment-status">
        <view class="follow">支持({{commentInfo.size}})</view>
        <view class="oppose">反对(0)</view>
      </view>
    </view>
  </view>
</template>

<script>
  import moment from 'moment'
  export default {
    props: {
      commentInfo: {
        type: Object,
        default: {}
      }
    },
    filters: {
      timeFilter(time) {
        return moment(time * 1000).format('YYYY-MM-DD hh:mm')
      }
    }
  }
</script>

<style scoped>
  .comment-info {
    display: flex;
    margin-top: 30rpx;
  }
  .info-left {
    flex: 1;
    /* display: flex;
    justify-content: center; */
  }
  .info-left image {
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
    /* margin-left: 20rpx; */
  }
  .info-right {
    flex: 6;
    border-bottom: 1px solid #eee;
  }
  .user-info {
    height: 80rpx;
  }
  .user-name {
    display: flex;
  }
  .user-name text {
    font-size: 28rpx;
  }
  .badges {
    margin-left: 8rpx;
  }
  .badges image {
    width: 30rpx;
    height: 30rpx;
    margin-right: 8rpx;
  }
  .time {
    font-size: 24rpx;
    margin-top: 10rpx;
    color: #bbb;
  }
  .comment-content {
    color: #000;
    margin-top: 30rpx;
  }
  .comment-status {
    margin: 30rpx 0;
    display: flex;
    justify-content: flex-end;
   
  }
  .follow {
    color: rgb(30, 172, 30);
    font-size: 28rpx;
  }
  .oppose {
    color: #f00;
    margin-left: 36rpx;
    font-size: 28rpx;
  }
</style>