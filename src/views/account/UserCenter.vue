<template>
    <div class="content">
        <van-row>
            <van-col span="8">
                <van-image round width="4rem" height="4rem" :src="userinfo.avator" />
            </van-col>
            <van-col span="16">
                <div class="member-detail">
                    <p>{{ userinfo.username }}</p>
                    <p>{{ userinfo.intro }}</p>
                </div>
            </van-col>
        </van-row>
        <van-cell-group title="音乐品味">
            <van-grid clickable>
                <van-grid-item icon ="https://s2.loli.net/2023/03/11/59MzRK6sHJCToqF.png" text="我的喜欢" />
                
                
                
                <van-grid-item icon="https://s2.loli.net/2023/03/11/zTvBel1gdPy8NOo.png" text="最近播放" :badge="badge_numbers.wait_pay" to="/test"
                    v-if="badge_numbers.wait_pay == 0" />
                <van-grid-item icon="https://s2.loli.net/2023/03/11/3EcbUwsAqaJIkvf.png" text="下载" :badge="badge_numbers.wait_send" to="/test" />
                <van-grid-item icon="https://s2.loli.net/2023/03/11/KQtU9hEInFcrRul.png" text="云盘" :badge="badge_numbers.wait_receive" to="/test" />
            </van-grid>
        </van-cell-group>

        <!-- <van-cell-group title="基本资料">
            <van-cell title="个人资料" is-link to="/uc/profile"></van-cell>
            <van-cell title="我的消息" is-link to="/uc/address"></van-cell>
            <van-cell title="设置" is-link to="/demo"></van-cell>
        </van-cell-group> -->

        <div class="my_music">
            <p>我的歌单</p>
        <van-skeleton title :row="3" />
        <van-skeleton title :row="3" />
        <van-skeleton title :row="3" />
        </div>
      



    </div>
</template>
<script setup lang="ts" >
import { reactive, onMounted } from 'vue'

const badge_numbers = reactive({
    "wait_pay": 0,
    "wait_send": 4,
    "wait_receive": 5
})
const userinfo = reactive({
    "username": "昵称",
    "intro": "这里是用户的介绍信息",
    "avator": "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
})

</script>


<style>
p {
    color: black;
}

.content {
    background-color: #f7f8fa;
    height: 500px;
    padding: 15px 10px;
}

.member-detail {
    font-size: 14px;
}
</style>