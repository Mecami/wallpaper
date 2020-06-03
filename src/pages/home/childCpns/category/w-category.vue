<template>
  <scroll-view scroll-y class="category">
    <w-category-list :categoryList="categoryItems"/>
  </scroll-view>
</template>

<script>
  import {getCategoryItems} from 'network/home'

  import wCategoryList from './w-category-list'

  export default {
    components: {
      wCategoryList
    },
    data() {
      return {
        categoryItems: []
      }
    },
    methods: {
      _getCategoryItems() {
        getCategoryItems()
          .then(res => {
            console.log(res)
            this.categoryItems = res[1].data.res.category
            console.log(this.categoryItems)
          }) 
      }
    },
    mounted() {
      uni.setNavigationBarTitle({
        title: '分类'
      })
      this._getCategoryItems()
    }
  }
</script>

<style scoped>
  .category {
    height: calc(100vh - 80rpx);
  }
</style>