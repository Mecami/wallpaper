<template>
  <view>
    <w-tab-control :titles="titles" @tabControlClick="handleTabClick"/>
    <scroll-view scroll-y class="scroll-view" @scrolltolower="handleScrollBottom">
      <w-img-list :imgList="imgList" :isGoImgDetail="isGoImgDetail"/>
    </scroll-view>
  </view>
</template>

<script>
  import {getVedioData} from 'network/vedio'

  import wTabControl from 'components/w-tab-control/w-tab-control'
  import wImgList from 'components/w-img-list/w-img-list'

  export default {
    components: {
      wTabControl,
      wImgList
    },
    data() {
      return {
        currentIndex: 0,
        isGoImgDetail: false,
        titles: ['推荐', '娱乐', '最新', '热门'],
        vedios: [
          {skip: 0, order: 'hot', list: [], isMore: true, url: '/videoimg/v1/videowp/featured'},
          {skip: 0, order: 'new', list: [], isMore: true, url: '/videoimg/v1/videowp/category/59b25abbe7bce76bc834198a'},
          {skip: 0, order: 'new', list: [], isMore: true, url: '/videoimg/v1/videowp/videowp'},
          {skip: 0, order: 'hot', list: [], isMore: true, url: '/videoimg/v1/videowp/videowp'}
          
        ]
      }
    },
    computed: {
      imgList() {
        return this.vedios[this.currentIndex].list
      }
    },
    methods: {
      _getVedioData() {  
        const nowObj = this.vedios[this.currentIndex]
        if (!nowObj.isMore) {
           uni.showToast({
             title: '我们是有底线的',
             icon: 'none'
           })
           return ;
        }    
        getVedioData(nowObj)
          .then(res => {
            console.log(res)
            const currentObj =  this.vedios[this.currentIndex]
            const oldList = currentObj.list
            const newList = res[1].data.res.videowp
            if (newList.length === 0) {
              currentObj.isMore = false
              uni.showToast({
                title: '我们是有底线的',
                icon: 'none'
              })
              return ;
            }
            this.vedios[this.currentIndex].list = [...oldList, ...newList]
            currentObj.skip += 30

          })
      },
      handleTabClick(index) {
        this.currentIndex = index
        if (this.vedios[index].list.length !== 0) {
          return ;
        }
        this._getVedioData()
      },
      handleScrollBottom() {
        this._getVedioData()
      }
    },
    onLoad() {
      this._getVedioData()
    }
  }
</script>

<style scoped>
  .scroll-view {
    height: calc(100vh - 80rpx);
  }
</style>