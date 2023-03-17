<template>
<div class="focus">
      <h3>动态</h3>

          

</div>
<div class="focus_main">
<van-cell-group title="我的关注"> 
    <van-skeleton title avatar :row="3" />
    <van-skeleton title avatar :row="3" />
    <van-skeleton title avatar :row="3" />
    <van-skeleton title avatar :row="3" />
</van-cell-group>
</div>
</template>

<script setup lang="ts">

</script>

<style>
.focus{
    margin-bottom: 20px;
}
.focus h3{
    text-align: center;
    margin-bottom: 20px;
}
.focus_main{
    padding-top: 20px;
}
</style>