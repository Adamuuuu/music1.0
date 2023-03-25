<template>
  <van-progress :percentage="50" color="#ee0a24"/>

  <div class="play">
    <!-- <div class="playinfo">
      <img :src="picUrl">
      <p>{{ name }}--{{ songname }}</p>

    </div> -->

    <div  class="playinfo" >
      {{ list[index].player }}--{{ list[index].songsname }}
    </div>


    <div class="play-controller">
      <!-- 上一首 -->
      <iconPark :icon="GoStart" size="32" @click="prev(list[index].list_url)"></iconPark>
      <!-- 播放 -->
      <iconPark :icon="isPause ? PauseOne : Play" size="32" @click="togglePlay"></iconPark>
      <!-- 下一首 -->
      <iconPark :icon="GoEnd" size="32" @click="next(list[index].list_url)"></iconPark>

<List></List>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import iconPark from '@/components/common/iconPark.vue';
import { GoEnd, GoStart, MusicList, PauseOne, Play } from '@icon-park/vue-next';
import { ref, toRefs, computed ,watch} from 'vue';
import { usePlayStore } from '@/store/play'
import { useSongsinfoStore } from '@/store/songinfo';
import { storeToRefs } from 'pinia';
import { ISongs } from '@/interface/songinfo';
import Playlist from './playlist.vue';
import List from './list.vue'
import { count } from 'console';

const {play,playing}=usePlayStore()
const { isPause, togglePlay } = toRefs(usePlayStore())
const { picUrl, name, songname } = storeToRefs(usePlayStore())
let {list}=storeToRefs(usePlayStore())

// const audioRef = ref<HTMLAudioElement | null>(null)
  
// const props=defineProps<{
//     list: {
//       player: string;
//     songsname: string;
//     list_id: number;
//   }[],
//   selectedSong: {
//     [x: string]: any;
//     name: string;
//     ids: number;
//     pst: number;
//     t: number;
//     ar: {
//         [x: string]: any;
//         id: number;
//         name: string;
//     }[];
//     alia: string[];
//     pop: number;
//     fee: number;
//     al: {
//         [x: string]: any;
//         id: number;
//         name: string;
//         picUrl: string;
//     };
//     dt: number;
// } | null
  
// }>()

const index = ref(0)
// const currentSong = computed(() => {
//   console.log("计算属性绑定成功")
//       return list.value[index.value]
//     })
    
    
    function next  (url:string)  {
      index.value++
      if (index.value >= list.value.length) {
        index.value = 1
        
      }
      playing(list.value[index.value].list_url)
      console.log(list.value[index.value],index.value)

    }


    
    const prev = (url:string) => {
      index.value--
      if (index.value < 1) {
        index.value = list.value.length - 1
      }
      list.value[index.value].list_url
      playing(list.value[index.value].list_url)
    }

    watch(list.value, () => {
      // index.value = 0
      console.log("监听执行了")
      index.value++
      console.log(list.value[index.value])
      console.log(index.value)
        
      
      
    })
    // watch(props.selectedSong, song => {
    //   if (song) {
    //     addSong(song)
    //   }
    // }








const showBottom = ref()


function getmusiclist() {
  showBottom.value = true
  
}
// const {songs}=toRefs(usePlayStore())
// const picUrl=toRefs( usePlayStore())

// const {getSongsinfo}=usePlayStore()








</script>

<style scoped lang="less">
.play {
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
}

.play-controller {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: end;

  max-width: 100px;
  min-width: 50px;

}

.playinfo {
  display: flex;
  align-items: center;
  justify-content: start;
  align-content: center;
  margin-right: 20px;
}

.playinfo img {
  width: 45px;
  height: 45px;
  display: flex;

  margin-right: 20px;

  border-radius: 200px;
}

.playinfo p {
  // float: left;
  // line-height: 50px;
  // text-align: center;
  // margin-left: 10px;
}
</style>