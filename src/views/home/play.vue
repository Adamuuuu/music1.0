<template>
  <!-- <div class="playinfo">
<img src="songs.songs.al.picUrl" >
<span></span>

  </div> -->
  <div class="play-controller">
        <!-- 上一首 -->
        <iconPark :icon="GoStart" size="32" ></iconPark>
    <!-- 播放 -->
        <iconPark :icon="isPause?PauseOne:Play" size="32" @click="togglePlay"></iconPark>
    <!-- 下一首 -->
        <iconPark :icon="GoEnd" size="32"></iconPark>
  </div>
</template>

<script setup lang="ts">
import iconPark from '@/components/common/iconPark.vue';
import { GoEnd, GoStart, PauseOne, Play } from '@icon-park/vue-next';
import { ref ,toRefs,onMounted} from 'vue';
import {usePlayStore} from '@/store/play'
import { useSongsinfoStore } from '@/store/songinfo';

const {isPause,togglePlay}=toRefs( usePlayStore())
// const {songs}=toRefs(usePlayStore())

// const {getSongsinfo}=usePlayStore()








</script>

<style scoped lang="less">
.play-controller{
  float: right;
  margin-top: 10px;
}
</style>