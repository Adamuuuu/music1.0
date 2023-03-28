<template>
  <!-- <van-progress :percentage="50" color="#ee0a24"/> -->

  <div class="play">
    <!-- <div class="playinfo">
      <img :src="picUrl">
      <p>{{ name }}--{{ songname }}</p>

    </div> -->

    <div  class="playinfo" v-if="list[index]!=undefined&&index!=undefined">
      <img v-if="!currentSong.pic_url" src="@/assets/imges/logo3.png" >
      <img v-else :src="currentSong.pic_url">
      {{ currentSong.player }}--{{ currentSong.songsname }}
    </div>
    <div class="play-controller">
      <!-- 上一首 -->
      <iconPark :icon="GoStart" size="32" @click="prev()"></iconPark>
      <!-- 播放 -->
      <iconPark :icon="isPause ? PauseOne : Play" size="32" @click="togglePlay"></iconPark>
      <!-- 下一首 -->
      <iconPark :icon="GoEnd" size="32" @click="next()"></iconPark>

<List></List>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import iconPark from '@/components/common/iconPark.vue';
import { GoEnd, GoStart, MusicList, PauseOne, Play } from '@icon-park/vue-next';
import { ref, toRefs, computed ,watch} from 'vue';
import { usePlayStore } from '@/store/play'
import { storeToRefs } from 'pinia';
import List from './list.vue'

const showBottom = ref()
const { isPause, togglePlay,next,prev } = toRefs(usePlayStore())
const { list,index } = storeToRefs(usePlayStore())


const currentSong = computed(() => {
  console.log("计算属性绑定成功")
      return list.value[index.value]
    })
 
    watch(list.value, () => {
      // index.value = 0
      console.log("监听执行了")
      // index.value++
      console.log(list.value[index.value])
      console.log(index.value)
  
    })



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