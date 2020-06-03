<template>
  <view class="images">
    <view class="img-item" v-for="(item, index) in imgList" :key="index">
      <image :src="item.thumb" mode="widthFix"></image>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      imgList: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .images {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .img-item {
    width: 49.4%;
    border-top: 4rpx solid #fff;
  }
  .img-item image {
    width: 100%;
  }
</style>