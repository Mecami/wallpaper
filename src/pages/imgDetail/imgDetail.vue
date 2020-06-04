<template>
  <view>
    <w-user-info :userInfo="userInfo"/>
    <w-img-info :imgInfo="imgInfo"/>
    <w-album-list :albumList="albumList"/>
    <w-new-comment :newComment="newComment"/>
    <w-hot-comment :hotComment="hotComment"/>
  </view>
</template>

<script>
  import moment from 'moment'
  moment.locale('zh-cn')
  import { getComments } from 'network/imgDetail'

  import wUserInfo from './childCpns/w-user-info'
  import wImgInfo from './childCpns/w-img-info'
  import wAlbumList from './childCpns/w-album-list'
  import wHotComment from './childCpns/w-hot-comment'
  import wNewComment from './childCpns/w-new-comment'

  export default {
    components: {
      wUserInfo,
      wImgInfo,
      wAlbumList,
      wHotComment,
      wNewComment
    },
    data() {
      return {
        userInfo: {
          userName: 'kiko',
          avatar: 'http://img0.adesk.com/download/5dee04f804220801b33bebf7',
          cnTime: moment(1578229386 * 1000).fromNow()
        },
        imgInfo: {
          id: '5e05dd21e7bce73927c8c691',
          username: 'kiko',
          atime: 1502251085,
          etime: moment(1502251085 * 1000).fromNow(),
          img: 'http://img5.adesk.com/5e05dd21e7bce73927c8c691',
          rank: 2409
        },
        albumList: [],
        hotComment: [],
        newComment: []

      }
    },
    methods: {
      _getComments() {
        getComments(this.imgInfo.id)
          .then(res => {
            console.log(res)
            this.albumList = res[1].data.res.album
            this.hotComment = res[1].data.res.hot
            this.newComment = res[1].data.res.comment
          })
      }
    },
    onLoad() {
      uni.setNavigationBarTitle({
        title: '图片详情'
      })
      // this.imgInfo.etime = moment(this.imgInfo.atime).fromNow()
      this._getComments()
    }
  }
</script>

<style scoped>

</style>