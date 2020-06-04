<template>
  <view class="album-item" @click="handleItemClick">
    <image :src="albumItem.cover" mode="aspectFill"/>
    <view class="album-info">
      <view class="album-name">{{albumItem.name}}</view>
      <view class="album-desc">{{albumItem.desc}}</view>
      <view><text class="follow">+关注</text></view>
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
    },
    methods: {
      handleItemClick() {
        uni.navigateTo({
          url: `/pages/albumDetail/albumDetail?id=${this.albumItem.id}`
        })
      }
    }
  }
</script>

<style scoped>
  .album-item {
    display: flex;
    padding: 20rpx;
    border-bottom: 1rpx solid #eee;
  }
  .album-item image {
    flex: 1;
    height: 180rpx;
  }
  .album-info {
    flex: 2;
    /* padding: 6rpx 4rpx 4rpx 20rpx; */
    padding-left: 20rpx;
    /* padding-bottom: 4rpx; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .album-name {
    font-weight: 600;
    /* color: #000; */
  }
  .album-desc {
    overflow: hidden;
    text-overflow: ellipsis;

    display: -webkit-box;
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;

    letter-spacing: 2rpx;
    font-size: 28rpx;
  }
  .follow {
    padding: 2rpx 10rpx 2rpx 6rpx;
    border: 2rpx solid var(--color);
    color: var(--color);
    font-weight: 600;
    font-size: 28rpx;
  }
</style>