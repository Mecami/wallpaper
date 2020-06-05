<template>
   <view class="tab-control">
     <view v-for="(item, index) in titles" :key="index" 
           class="tab-item" :class="{active: currentIndex === index}"
           @click="handleItemClick(index)">
       <text>{{item}}</text>
     </view>
   </view>
</template>

<script>
  export default {
    props: {
      titles: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      handleItemClick(index) {
        this.currentIndex = index
        // 将当前索引发出给父组件
        this.$emit('tabControlClick', index)
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    

  }
  .tab-item {
    height: 80rpx;
    flex: 1;
    text-align: center;
    line-height: 80rpx;
   
  }
  .active text {
    padding: 0 8rpx 6rpx;
    border-bottom: 8rpx solid var(--color);
  }
</style>