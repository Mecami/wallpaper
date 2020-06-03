<template>
  <view>
    <w-swiper :swiperList="banner"/>
    <w-album-list :albumList="album"/>
  </view>
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
        album: []
      }
    },
    methods: {
      _getAlbumInfo(skip) {
        getAlbumInfo(skip)
          .then(res => {
            console.log(res)
            this.banner = res[1].data.res.banner
            this.album = res[1].data.res.album
            console.log(this.banner,this.album)
          })
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
 
</style>