<template>
    <div class="home_body">
        <van-search  placeholder="请输入搜索关键词" to="/search"/>
        <banner></banner>
        
    <van-cell-group title="音乐品味">
            <van-grid clickable>
                <van-grid-item icon ="https://s2.loli.net/2023/03/11/59MzRK6sHJCToqF.png" text="每日推荐" />
                
                
                
                <van-grid-item icon="https://s2.loli.net/2023/03/11/zTvBel1gdPy8NOo.png" text="歌单"  to="/test"
                    v-if="badge_numbers.wait_pay == 0" />
                <van-grid-item icon="https://s2.loli.net/2023/03/11/3EcbUwsAqaJIkvf.png" text="随机播放"  to="/test" />
                <van-grid-item icon="https://s2.loli.net/2023/03/11/KQtU9hEInFcrRul.png" text="排行榜"  to="/top" />
            </van-grid>
        </van-cell-group>

        <van-cell-group title="推荐歌单">
<!-- <van-skeleton title :row="3" />
    <van-skeleton title :row="3" /> -->

        <playlist></playlist>
        </van-cell-group>




    </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import {reactive, onMounted } from 'vue';
import banner from './banner.vue';
import play from './play.vue'
import playlist from './playlist.vue';





const badge_numbers = reactive({
    "wait_pay": 0,
    "wait_send": 4,
    "wait_receive": 5
})



</script>
<style>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  
</style>
