<template>
  <scroll-view scroll-y class="recommend" 
               @scrolltolower="hancleScrollBottom">
    <!-- 顶部图片 -->
    <w-home-top-img :imgList="topImages"/>

    <!-- 日期信息 -->
    <w-home-date-info :dateInfo="dateInfo"/>

    <!-- 日期图片 -->
    <w-img-list :imgList="dateImages"/>

    <!-- 热门标题 -->
    <view class="hot-title"><text>热门</text></view>

    <!-- 热门图片 -->
    <w-img-list :imgList="hotImages"/>

  </scroll-view>
</template>

<script>
  import moment from 'moment'
  import {getRecommend} from 'network/home'

  import wImgList from 'components/w-img-list/w-img-list'
  import wHomeTopImg from './w-top-img'
  import wHomeDateInfo from './w-date-info'

  export default {
    components: {
      wImgList,
      wHomeTopImg,
      wHomeDateInfo
    },
    data() {
      return {
        recommendSkip: 0,
        topImages: [],
        dateInfo: {},
        dateImages: [],
        hotImages: [],
        isMore: true
      }
    },
    methods: {
      _getRecommend(skip) {
        if (!this.isMore) {
          uni.showToast({
            title: '我们是有底线的',
            icon: 'none'
          })
          return;
        }
        getRecommend(skip)
          .then(result => {
            console.log(result)
            const res = result[1].data.res
            if (this.topImages.length === 0) {
              this.topImages = res.homepage[1].items
              this.dateInfo.title = res.homepage[2].title
              this.dateInfo.date = moment(res.homepage[2].stime).format('MM-DD')
              this.dateInfo.MM = moment(res.homepage[2].stime).format('MM')
              this.dateInfo.DD = moment(res.homepage[2].stime).format('DD')
              this.dateImages = res.homepage[2].items
            }
            if (res.vertical.length === 0) {
              this.isMore = false
              uni.showToast({
                title: '我们是有底线的',
                icon: 'none'
              })
              return;
            }
            this.hotImages = [...this.hotImages,...res.vertical]
            this.recommendSkip += 30
          })
      },
      hancleScrollBottom() {
        // console.log('到底部了-scroll-view')
        
        this._getRecommend(this.recommendSkip)
      }
    },
    mounted() {
      // uni.setNavigationBarTitle({
      //   title: '推荐'
      // })
      this._getRecommend(this.recommendSkip)
     
    },
    
  }
</script>

<style scoped>
  .recommend {
    height: calc(100vh - 80rpx);
  }
  .hot-title {
    height: 80rpx;
    line-height: 80rpx;
  }
  .hot-title text {
    border-left: 16rpx solid var(--color);
    padding: 10rpx;
  }
</style>