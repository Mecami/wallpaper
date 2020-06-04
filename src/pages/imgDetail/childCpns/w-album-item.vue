<template>
  <view class="album-item">
    <view class="album-cover">
      <image :src="albumItem.cover" mode="widthFix"/>
    </view>
    <view class="album-info">
      <view class="album-text">
        <text>专辑</text>
      </view>
      <view class="album-name">
        {{albumItem.name}}
      </view>
      <view class="album-desc">
        {{albumItem.desc}}
      </view>
    </view>
    <view class="more">
      <image src="/static/img/imgDetail/more.png"/>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      albumItem: {
        type: Object,
        default: {}
      }
    }
  }
</script>

<style scoped>
  .album-item {
    display: flex;
    margin-top: 16rpx;
  }
  .album-cover, .album-info {
    flex: 4;
  }
   
  .album-cover image {
    width: 100%;
    vertical-align: middle;
  }
  .album-info {
    padding-left: 20rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
   
  }
  .album-text text {
    color: #fff;
    padding: 4rpx 10rpx;
    background-color: var(--color);
    border-radius: 6rpx;
    font-size: 30rpx;
  }
  .album-name {
    /* margin: 20rpx 0; */
     font-size: 30rpx;
     color: #444;
  }
  .album-desc {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: 30rpx;
    /* color: #555; */
  }
  .more {
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .more image {
    width: 46rpx;
    height: 46rpx;
  }
</style>