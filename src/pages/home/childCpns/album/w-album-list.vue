<template>
    <view class="album-list">
    <w-album-list-item v-for="(item, index) in albumList" :key="index"
                       :albumItem="item"/>
  </view>
</template>

<script>
  import wAlbumListItem from './w-album-list-item'
  export default {
    components: {
      wAlbumListItem
    },
    props: {
      albumList: {
        type: Array,
        default: []
      }
    }
  }
</script>

<style scoped>
 .album-list {
   /* margin-top: 20rpx; */
 }
</style>