<template>
  <view class="category-detail">
    <w-tab-control :titles="imgTypes"
                   @tabControlClick="handleTabClick"/>
    <scroll-view scroll-y class="scroll-view" 
                @scrolltolower="handleScrollBottom">
      <w-img-list :imgList="currentImgList"/>
    </scroll-view>
  </view>
</template>

<script>
  import {getCategoryList} from 'network/categoryDetail'

  import wTabControl from 'components/w-tab-control/w-tab-control'
  import wImgList from 'components/w-img-list/w-img-list'

  export default {
    components: {
      wTabControl,
      wImgList
    },
    data() {
      return {
        categoryId: '',
        currentIndex: 0,
        imgTypes: ['最新', '热门'],
        imgList: [
          {ename: 'new', skip: 0, list: [], isMore: true},
          {ename: 'hot', skip: 0, list: [], isMore: true}
        ],
         
      }
    },
    computed: {
      currentImgList() {
        return this.imgList[this.currentIndex].list
      }
    },
    methods: {    
      _getCategoryList() {
        const imgTypeObj = this.imgList[this.currentIndex]
        if (!imgTypeObj.isMore) {
           uni.showToast({
                title: '我们是有底线的',
                icon: 'none'
           })
           return ;
        }        
        const skip = imgTypeObj.skip
        const order = imgTypeObj.ename
        getCategoryList(this.categoryId, skip, order)
          .then(res => {
            console.log(res)
            // 保存对应的数据
            const oldList = imgTypeObj.list
            const newList = res[1].data.res.vertical
            if (newList.length === 0) {
              imgTypeObj.isMore = false
              uni.showToast({
                title: '我们是有底线的',
                icon: 'none'
              })
            }
            imgTypeObj.list = [...oldList, ...newList]
            imgTypeObj.skip += 30
          })
      },
      handleTabClick(index) {
        this.currentIndex = index
        if (this.imgList[this.currentIndex].list.length === 0) {
           this._getCategoryList()
        }
       
      },
      handleScrollBottom() {
        this._getCategoryList()
      }
    },
    onLoad(options) {
      uni.setNavigationBarTitle({
        title: options.type
      })
      this.categoryId = options.id
      this._getCategoryList()
    }
  }
</script>

<style scoped>
  .scroll-view {
    height: calc(100vh - 80rpx);
  }
</style>