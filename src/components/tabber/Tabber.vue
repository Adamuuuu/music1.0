<template>
    <router-view ></router-view>

    <van-sticky :offset-bottom="50" position="bottom" >
<div class="play">
    <!-- <List></List> -->
    <keep-alive><play/></keep-alive>
    
</div>
</van-sticky>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" to="home">首页 </van-tabbar-item>
        <van-tabbar-item icon="search" to="playlistall">歌单库</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="focus">关注</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="usercenter">个人中心</van-tabbar-item>
    </van-tabbar>

</template>

<script setup lang="ts">

import { ref } from 'vue'
import play from '@/views/home/play.vue'
const active = ref(0)

</script>

<style scoped lang="less">
.play{
    width: 100%;
    height: 50px;  
    bottom: 5px;
    background-color: #39a9ed;
    position: fixed;
    bottom: 50px;
  }
</style>