<template>
  <div class="play">
    <div class="playinfo">
      <img :src="picUrl">
      <p>{{ name }}--{{ songname }}</p>

    </div>
    <div class="play-controller">
      <!-- 上一首 -->
      <iconPark :icon="GoStart" size="32"></iconPark>
      <!-- 播放 -->
      <iconPark :icon="isPause ? PauseOne : Play" size="32" @click="togglePlay"></iconPark>
      <!-- 下一首 -->
      <iconPark :icon="GoEnd" size="32"></iconPark>


      <iconPark :icon="MusicList" size="32" fill="#333" @click="getmusiclist"></iconPark>

      <van-popup v-model:show="showBottom" position="bottom" :style="{ height: '30%' }">
        <van-grid :gutter="10" direction="horizontal">


          <van-cell v-for="item , index in list" :key="index">
            <div>
              {{ item }}
              
            </div>
          </van-cell>

        </van-grid>
      </van-popup>
    </div>
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

const { isPause, togglePlay } = toRefs(usePlayStore())
const { picUrl, name, songname,list } = storeToRefs(usePlayStore())



console.log(picUrl)






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
  // display: flex;
  // align-items: center;
  // align-content: center;
  // justify-content: end;

  // max-width: 100px;
  // min-width: 50px;

}

.playinfo {
  display: flex;
  align-items: center;
  justify-content: start;
  align-content: center;
  // margin-right: 20px;
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