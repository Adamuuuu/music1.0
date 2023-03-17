<template>
    <router-view ></router-view>

   
    <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o" to="home">首页 </van-tabbar-item>
        <van-tabbar-item icon="search" to="search">发现</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="focus">关注</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to="usercenter">个人中心</van-tabbar-item>
    </van-tabbar>

</template>

<script setup lang="ts">

import { ref } from 'vue'
import { Play } from '@icon-park/vue-next';
const active = ref(0)

</script>

<style scoped lang="less">

</style>