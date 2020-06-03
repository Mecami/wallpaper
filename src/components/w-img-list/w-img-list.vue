<template>
  <view class="img-list">
    <view class="img-item" v-for="(item, index) in imgList" :key="index">
      <image :src="item.img" mode="widthFix"/>
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
  .img-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .img-item {
    width: 32.4%;
    border-top: 1px solid #fff;
  }
  .img-item image {
    width: 100%;
  }
</style>