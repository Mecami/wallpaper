<template>
  <view>
    <w-tab-control :titles="titles" @tabControlClick="handleTabClick"/>
  </view>
</template>

<script>
  import { getVedioData } from 'network/vedio'

  import wTabControl from 'components/w-tab-control/w-tab-control'

  export default {
    components: {
      wTabControl
    },
    data() {
      return {
        currentIndex: 0,
        titles: ['推荐', '娱乐', '最新', '热门', '分类'],
        vedios: [
          {skip: 0, order: 'hot', list: [], url: '/videoimg/v1/videowp/featured'},
          {skip: 0, order: 'hot', list: [], url: '/videoimg/v1/videowp/featured'},
          {skip: 0, order: 'hot', list: [], url: '/videoimg/v1/videowp/featured'},
          {skip: 0, order: 'hot', list: [], url: '/videoimg/v1/videowp/featured'},
          {skip: 0, order: 'hot', list: [], url: '/videoimg/v1/videowp/featured'}
        ]
      }
    },
    methods: {
      handleTabClick(index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>

</style>