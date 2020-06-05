<template>
  <view class="img-detail">
    <w-user-info :userInfo="userInfo"/>
    <w-img-info :imgInfo="imgInfo"/>
    <w-album-list :albumList="albumList" v-if="albumList.length !== 0"/>
    <w-hot-comment :hotComment="hotComment" v-if="hotComment.length !== 0"/>
    <w-new-comment :newComment="newComment" v-if="newComment.length !== 0"/>
    <view class="download-img" @click="handleDownloadImg">下载壁纸</view>
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
        id: '',
        userInfo: {},
        imgInfo: {},
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
      },
      async handleDownloadImg() {
        uni.showLoading({
          title: '下载中'
        })
        const res = await uni.downloadFile({
          url: this.imgInfo.img
        })
        console.log(res)
        const {tempFilePath} = res[1].tempFilePath
        await uni.saveImageToPhotosAlbum({
          filePath: tempFilePath
        })
        uni.hideLoading()
        uni.showToast({
          title: '已下载到本地'
        })

        
      }
    },
    onLoad() {
      uni.setNavigationBarTitle({
        title: '图片详情'
      })
      // 从 globalData 中根据索引找到对应的 item
      const currentIndex = getApp().globalData.imgListIndex
      const imgItem = getApp().globalData.imgList[currentIndex]
      console.log(imgItem)

      this.id = imgItem.id
      this.imgInfo = imgItem
      this._getComments()

      // 有些 imgItem 里没有 user 属性，如果没有则直接 return, 并且不渲染顶部的用户信息
      if (!imgItem.user) {
        return ;
      }
      this.userInfo = imgItem.user
      this.userInfo.cnTime = moment(imgItem.atime * 1000).fromNow()

      
      // this.imgInfo.etime = moment(this.imgInfo.atime).fromNow()
      
    }
  }
</script>

<style scoped>
  .img-detail {
    padding-bottom: 90rpx;
  }
  .download-img {
    margin-top: 20rpx;
    height: 90rpx;
    font-size: 36rpx;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: var(--color);
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>