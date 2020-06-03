<template>
  <swiper class="swiper" autoplay indicator-dots circular 
          indicator-color="#fff" indicator-active-color="#ff5777">
    <swiper-item class="swiper-item" v-for="(item, index) in swiperList" :key="index">
      <image :src="item.thumb"/>
    </swiper-item> 
 </swiper> 
</template>

<script>
  export default {
    props: {
      swiperList: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
  .swiper {
    height: calc(750rpx / 2.3);
  }
  .swiper-item image {
    width: 100%;
    height: 100%;
  }
</style>