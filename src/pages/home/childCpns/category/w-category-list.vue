<template>
  <view class="category-list">
    <!-- {{categoryList}} -->
    <w-category-item v-for="(item, index) in categoryList" :key="index" 
                     :categoryItem="item" class="category-item"/>
  </view>
</template>

<script>
  import wCategoryItem from './w-category-item'
  export default {
    components: {
      wCategoryItem
    },
    props: {
      categoryList: {
        type: Array,
        default: []
      }
    },
    methods: {
      
    }
  }
</script>

<style scoped>
  .category-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .category-item {
    width: 32.8%;
    
  }
</style>