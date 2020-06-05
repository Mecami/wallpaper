<template>
  <view class="video-detail">
     <view class="img-bg">
        <image :src="imgSrc"/>
     </view>
     <view class="video">
        <video :src="videoSrc" :muted="isMuted" objectFit="fill"/>
     </view>
     <view class="video-tool">
       <image v-if="!isMuted" class="voice" 
              src="/static/img/videoDetail/quiet4.png"
              @click="handleVideoMuted"/>
       <image  v-else class="voice" 
               src="/static/img/videoDetail/voice3.png"
              @click="handleVideoMuted"/>
       <image class="download" src="/static/img/videoDetail/download3.png"
              @click="handleDownloadVideo"/>
       <view class="share">
         <image src="/static/img/videoDetail/share3.png"
              @click="handleShare"/>
         <button open-type="share"/>
       </view>
     </view>
  </view>
</template>


<script>
  export default {
    data() {
      return {
        isMuted: false,
        imgSrc: '',
        videoSrc: ''
      }
    },
    methods: {
      handleVideoMuted() {
        this.isMuted = !this.isMuted
      },
      async handleDownloadVideo() {
        uni.showLoading({
          title: '下载中'
        })
        const res = await uni.downloadFile({
          url: this.videoSrc
        })
        const {tempFilePath} = res[1]
        await uni.saveVideoToPhotosAlbum({
          filePath: tempFilePath
        })
        uni.hideLoading()
        uni.showToast({
          title: '已下载到本地'
        })
      },
      handleShare() {

      }
    },
    onLoad(options) {
      uni.setNavigationBarTitle({
        title: '视频详情'
      })
      this.imgSrc = options.img
      this.videoSrc = options.video
    }
  }
</script>

<style scoped>
  .video-detail {
    position: relative;
  }
  .img-bg {
    position: absolute;
    width: 100vw;
    height: 100vh;
    filter: blur(10px);

    z-index: -1;
  } 
  .img-bg image{
    width: 100%;
    height: 100%;
    
  } 
  .video {
    /* height: 860rpx; */
    /* position: absolute; */
    padding-top: 120rpx;
    /* left: 120rpx;
    right: 120rpx;
    bottom: 120rpx; */
    display: flex;
    justify-content: center;
  }
  .video video {
    width: 480rpx;
    height: 880rpx;
  }
  .video-tool {
    margin-top: 50rpx;
    height: 100rpx;
    display: flex;
    justify-content: center;
  }
  .video-tool image {
    width: 60rpx;
    height: 60rpx;
  }
  .download {
    margin: 0 130rpx;
  }
  .share {
    position: relative;
  }
  .share button {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    opacity: 0;
    
  }
</style>