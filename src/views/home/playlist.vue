<template>
    <van-grid :gutter="10" direction="horizontal">
  <van-grid-item v-for="item ,index in playlists.result" :key="index"  >
    <div class="playlist">
      <img :src="item.picUrl" >
  <p>{{ item.name }}</p>
    </div>
  
  </van-grid-item>
  
</van-grid>

</template>

<script setup lang="ts">

import { usePlaylistStore } from '@/store/playlist';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const {playlists}=storeToRefs(usePlaylistStore())
const {getplaylists} =usePlaylistStore()

onMounted (async()=>{
  await getplaylists()
})




</script>

<style scoped lang="less">
.playlist img{
  width: 100px;
  height: 100px;
}
</style>