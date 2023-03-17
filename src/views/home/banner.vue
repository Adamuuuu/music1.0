
<template>
<div class="Mine-categories-swipe">
<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item ,index in banners.banners" :key="index" >
      
    <img :src="item.pic" @click="handle(item.targetId)" >
    </van-swipe-item>
  
  </van-swipe>
<ul >
  <li v-for="item ,index in banners" :key="index">{{ item.pic }}</li>
</ul>
</div>
</template>


<script setup lang="ts">

import { useBannerStore } from '@/store/banner';//状态管理
import { storeToRefs } from 'pinia';//响应式特性
import { onMounted ,ref} from 'vue';
import { usePlayStore } from '@/store/play';
import {useSongsinfoStore} from '@/store/songinfo'
const {play}=usePlayStore()
// const {getSongsinfo}=usePlayStore()
const {banners}=storeToRefs(useBannerStore())
// const {banners}=useBannerStore()
const {getBanners}=useBannerStore()
onMounted(async()=>{ //挂载完成触发请求
    await getBanners()
})

function handle(id:number)
{
  //给播放器传入歌曲id
  play(id)
  //给歌曲详情界面传入歌曲id
  // getSongsinfo(id)
}

</script>

<style scoped lang="css">

.my-swipe .van-swipe-item {
  margin-top: 10px;
  margin-bottom: 10px;
    width: 100%;
    height: 188px;
    color: #fff;
    font-size: 20px;
    text-align: center;
    background-color: #39a9ed;
  }
  .Mine-categories-swipe img{
    display: inline-block;
    width: 100%;
    height: 188px;
}
</style>