<template>
    <van-grid :gutter="10" direction="horizontal">
  <van-grid-item v-for="item ,index in playlists" :key="index"  to="playlist_songs" @click="getsongsid(item.id)">
    <div class="playlist">
      <img :src="item.picUrl" >
  <p>{{ item.id }}--{{ item.name }}</p>
    </div>
  
  </van-grid-item>
  
</van-grid>

</template>

<script setup lang="ts">

import { usePlaylistStore } from '@/store/playlist';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { usePlaylistInfoStore } from '@/store/playlistinfo';
const {playlists}=storeToRefs(usePlaylistStore())
const {getplaylists} =usePlaylistStore()

const {getplaylistinfo} =usePlaylistInfoStore()

onMounted (async()=>{
  await getplaylists()
})

function getsongsid(id:number){
  getplaylistinfo(id)
}




</script>

<style scoped lang="less">
.playlist img{
  width: 100px;
  height: 100px;
}
</style>