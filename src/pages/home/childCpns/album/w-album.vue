<template>
  <scroll-view scroll-y class="album" @scrolltolower="handleScrollBottom">
    <w-swiper :swiperList="banner"/>
    <w-album-list :albumList="album"/>
  </scroll-view>
</template>

<script>
  import {getAlbumInfo} from 'network/home'

  import wSwiper from 'components/w-swiper/w-swiper'
  import wAlbumList from './w-album-list'

  export default {
    components: {
      wSwiper,
      wAlbumList
    },
    data() {
      return {
        skip: 0,
        banner: [],
        album: [],
        isMore: true
      }
    },
    methods: {
      _getAlbumInfo(skip) {
        if (!this.isMore) {
          uni.showToast({
            title: '我们是有底线的',
            icon: 'none'
          })
          return;
        }
        getAlbumInfo(skip)
          .then(res => {
            console.log(res)
            if (this.banner.length === 0) {
              this.banner = res[1].data.res.banner
            }
            const oldAlbumList = this.album
            const newAlbumList = res[1].data.res.album
            if (newAlbumList.length === 0) {
              this.isMore = false
              uni.showToast({
                title: '我们是有底线的',
                icon: 'none'
              })
              return;
            }
            this.album = [...oldAlbumList, ...newAlbumList]
            this.skip += 30
            // console.log(this.banner,this.album)
          })
      },
      handleScrollBottom() {
        this._getAlbumInfo(this.skip)
      }
    },
    mounted() {
      uni.setNavigationBarTitle({
        title: '专辑'
      })
      this._getAlbumInfo(this.skip)
    }
  }
</script>

<style scoped>
  .album {
    height: calc(100vh - 80rpx);
  }
</style>