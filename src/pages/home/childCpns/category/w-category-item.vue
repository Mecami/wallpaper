<template>
  <view class="category-item" @click="handleCategoryItemclick"> 
    <image :src="categoryItem.cover" mode="aspectFill"/>
    <text class="category-name">{{categoryItem.name}}</text>
  </view>
</template>

<script>
  export default {
    props: {
      categoryItem: {
        type: Object,
        default: {}
      }
    },
    methods: {
      handleCategoryItemclick() {    
        uni.navigateTo({
          url: `/pages/categoryDetail/categoryDetail?type=${this.categoryItem.name}&id=${this.categoryItem.id}`         
        })
      }
    },
    watch: {
      categoryItem(newVal, oldVal) {
        console.log(newVal)
      }
    }
  }
</script>

<style scoped>
  .category-item {
    /* width: 33%; */
    border-top: 1rpx solid #fff;
    position: relative;
  }
  .category-item image {
    width: 100%;
    height: 242rpx;
  }
  .category-name {
    position: absolute;
    /* z-index: 2; */
    left: 20rpx;
    bottom: 16rpx;
    color: #fff;
    font-size: 36rpx;
    /* padding-left: 20rpx; */
  }
</style>