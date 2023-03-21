<template>
     <van-nav-bar
  title="歌单"
  left-text="返回"
  left-arrow
  fixed="true"
  @click-left="onClickLeft"
/>
</template>

<script setup lang="ts">
 const onClickLeft = () => history.back();
</script>