<template>
  <view class="img-list">
    <view class="img-item" v-for="(item, index) in imgList" :key="index"
          @click="handleImgClick(index)">
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
    },
    methods: {
      handleImgClick(index) {
        getApp().globalData.imgList = this.imgList
        getApp().globalData.imgListIndex = index

        uni.navigateTo({
          url: '/pages/imgDetail/imgDetail'
        })
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