<template>
  <view id="home">
     <!-- tab-control -->
     <w-tab-control @tabControlClick="handleTabControlClick"/>

     
       <!-- 推荐模块 -->
       <w-recommend v-if="currentIndex === 0"/>
     
       <!-- 分类模块 -->
       <w-category v-if="currentIndex === 1"/>
      
       <!-- 专辑模块 -->
       <w-album v-if="currentIndex === 2"/>
     
      
  </view>

</template>

<script>

import wTabControl from 'components/w-tab-control/w-tab-control'

import wRecommend from './childCpns/recommend/w-recommend'
import wCategory from './childCpns/category/w-category'
import wAlbum from './childCpns/album/w-album'

export default {
  components: {
     wTabControl,
     wRecommend,
     wCategory,
     wAlbum
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  computed: {

  },
  methods: {
    handleTabControlClick(index) {
      // console.log(index)
      this.currentIndex = index
    }
  },
  onLoad() {
    // console.log('---')
  
    
  },
  onReachBottom() {
    // console.log('到底部了,home')
  }
}
</script>

<style scoped>
  .scroll-view {
    height: calc(100vh - 80rpx);
  }
</style>