<template>
   
  <Nav></Nav>
      <div class="top">
          <div class="top-top">
              <p>歌单详情</p>
          </div>
          <div class="top-bottom">
              <van-list>
        <van-cell v-for="item,index in songs" :key="index" :title="item.name" @click="handle(item.id)">
      <!-- {{ item.name }} -->
      <!-- {{ item.dt }}-- -->
      {{ item.ar[0].name}}
      
      </van-cell>
      </van-list>
      
          </div>
      </div>
      </template>
      
      <script lang="ts" setup>
      import {ref,onMounted} from 'vue'
      import { usePlaylistInfoStore } from '@/store/playlistinfo';
      import { storeToRefs } from 'pinia';
      import { usePlayStore } from '@/store/play';
      import {useTopStore} from '@/store/top'
      import Nav  from "@/components/common/nav.vue"
      const {songs}=storeToRefs(useTopStore())
      const {play}=usePlayStore()
     
      
      
      const songname="歌曲名"
      const dt="0:0:0"
      const alname="专辑名"
      const {gettop}=useTopStore()
onMounted(async()=>{ //挂载完成触发请求
    await gettop()
})
  function handle(id:number){
      play(id)
  }
  
  
      // const list = ref([]);
      //     const loading = ref(false);
      //     const finished = ref(false);
      
      //     const onLoad = () => {
      //       // 异步更新数据
      //       // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      //       setTimeout(() => {
      //         for (let i = 0; i < 10; i++) {
      //           list.value.push(
                  
      //           );
      //         }
      
      //         // 加载状态结束
      //         loading.value = false;
      
      //         // 数据全部加载完成
      //         if (list.value.length >= 40) {
      //           finished.value = true;
      //         }
      //       },2000);
      //     };
      </script>
      
      <style scoped lang="less">
      .top-top{
          width: 100%;
          height: 200px;
          text-align: center;
          & h1{
              line-height: 200px;
          }
      }
      
      </style>