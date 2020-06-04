<template>
  <view class="album-list">
    <view class="relevant">
      相关
    </view>
    <w-album-item v-for="(item, index) in albumList" :key="index"
                  :albumItem="item"/>
  </view>
</template>

<script>
  import wAlbumItem from './w-album-item'
  export default {
    components: {
      wAlbumItem
    },
    props: {
      albumList: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .album-list {
    padding: 16rpx;
    border-bottom: 12rpx solid #eee;
  }
  .relevant {
    height: 44rp;
    line-height: 44rpx;
  }
</style>