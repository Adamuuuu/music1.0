<template>

<div class="play">
    <!-- <play1 /> -->
    <iconPark :icon="MusicList" size="32" fill="#333" @click="getmusiclist"></iconPark>
    <van-popup v-model:show="showBottom" position="bottom" :style="{ height: '30%' }">

<van-grid :gutter="10" direction="horizontal">


  <van-cell v-for="item , index in list" :key="index" @click="">
    <div>
      {{ item.player}}--{{ item.songsname }}
    </div>
  </van-cell>

</van-grid>
</van-popup>
</div>




</template>
<script setup lang="ts">
import iconPark from '@/components/common/iconPark.vue';
import { GoEnd, GoStart, MusicList, PauseOne, Play } from '@icon-park/vue-next';
import { ref, toRefs, onMounted } from 'vue';
import { usePlayStore } from '@/store/play'
import { useSongsinfoStore } from '@/store/songinfo';
import { storeToRefs } from 'pinia';
import { ISongs } from '@/interface/songinfo';
import Playlist from './playlist.vue';
import { url } from 'inspector';
import play1 from './play.vue'
const {play}=usePlayStore()
// const { isPause, togglePlay } = toRefs(usePlayStore())
const { picUrl, name, songname,url,songs } = storeToRefs(usePlayStore())
let {list}=storeToRefs(usePlayStore())
const selectedSong = ref<ISongs | null>(null)
    const selectSong = (song: ISongs) => {
      selectedSong.value = song
    }
    const addSong = (song: ISongs) => {
      if (!songs.value.some(item => item.url === song.url)) {
        songs.value.push(song)
      }
      selectedSong.value = null
    }


// const selectedSong = ref<Song | null>(null)
//     const selectSong = (song: Song) => {
//       selectedSong.value = song
//     }
//     const addSong = (song: Song) => {
//       if (!songs.value.some(item => item.url === song.url)) {
//         songs.value.push(song)
//       }
//       selectedSong.value = null
//     }
console.log(picUrl)

function handle(id:number)
{

}




const showBottom = ref()


function getmusiclist() {
  showBottom.value = true
  
}
// const {songs}=toRefs(usePlayStore())
// const picUrl=toRefs( usePlayStore())

// const {getSongsinfo}=usePlayStore()








</script>

<style scoped lang="less">

</style>