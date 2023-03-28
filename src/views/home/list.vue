<template>

<div class="play">
    <!-- <play1 /> -->
    <iconPark :icon="MusicList" size="32" fill="#333" @click="getmusiclist"></iconPark>
    <van-popup v-model:show="showBottom" position="bottom" :style="{ height: '30%' }">

<van-grid :gutter="10" direction="horizontal">


  <van-cell v-for="item , index in list" :key="index" @click="playing(item.player,item.songsname,item.list_url,item.pic_url)" :title="item.player">
    <div>
      {{ item.songsname }}
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

import { storeToRefs } from 'pinia';


// const { isPause, togglePlay } = toRefs(usePlayStore())

const {list}=storeToRefs(usePlayStore())
const {playing}=usePlayStore()
const showBottom = ref()
function getmusiclist() {
  showBottom.value = true
}

</script>

<style scoped lang="less">

</style>