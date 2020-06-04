<template>
  <view>
    <w-cover :albumInfo="albumCover"/>
    <w-user-info :userInfo="userInfo"/>
    <w-img-list :imgList="albumList"/>
  </view>
</template>

<script>
  import {getAlbumDetail} from 'network/albumDetail'

  import wImgList from 'components/w-img-list/w-img-list'
  import wCover from './childCpns/w-cover'
  import wUserInfo from './childCpns/w-user-info'

  export default {
    components: {
      wImgList,
      wCover,
      wUserInfo
    },
    data() {
      return {
        albumId: '',
        skip: 0,
        first: 1,
        isMore: true,
        albumCover: {},
        userInfo: {},
        albumList: []
      }
    },
    methods: {
      _getAlbumDetail() {
        if (!this.isMore) {
          uni.showToast({
            title: '我们是有底线的',
            icon: 'none'
          })
          return ;
        }
        getAlbumDetail(this.albumId, this.skip, this.first)
          .then(result => {
            console.log(result)
            const res = result[1].data.res
            if (this.first) {
              // 专辑封面和名字
              this.albumCover.cover = res.album.cover
              this.albumCover.name = res.album.name

              // 创建专辑用户信息
              this.userInfo = res.album.user
              this.userInfo.desc = res.album.desc
            }
            this.first = 0

            //专辑图片列表           
            const newAlbumList = res.wallpaper
            if (newAlbumList.length === 0) {
              this.isMore = false
              uni.showToast({
                title: '我们是有底线的',
                icon: 'none'
              })
              return ;
            }
            const oldAlbumList = this.albumList
            this.albumList = [...oldAlbumList, ...newAlbumList]
            this.skip += 30
             
          })
      }
    },
    onLoad(options) {
      uni.setNavigationBarTitle({
        title: '专辑详情'
      })
      // this.albumId = options.id
      this.albumId = '5e09c739e7bce739af7638f5'
      this._getAlbumDetail()
    },
    onReachBottom() {
      this._getAlbumDetail()
    }
  }
</script>

<style scoped>

</style>