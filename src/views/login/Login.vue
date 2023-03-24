<template>
	<div>
	  <div v-if="!isLogin">
		<h2>请扫描二维码登录</h2>
		<div ref="qrcode"></div>
		<div ref="qrcodeRef"></div>
		<p v-if="showRefreshButton">
		  二维码已过期，请点击刷新
		  <button @click="refreshQRCode">刷新</button>
		</p>
	  </div>
	  <div v-else>
		<h2>登录成功</h2>
		<p>欢迎使用本系统</p>
	  </div>
	</div>
  </template>
  <script setup lang="ts">
  import QRCode from 'qrcode-generator'
  import { ref, onMounted ,onUnmounted} from 'vue'
  //定义一个登录的状态
  const isLogin = ref(false)
  //获取二维码接口的url信息
  const qrcodeUrl = 'https://music.163.com/login?codekey=a9997558-88a6-4c26-a415-6a8e7b2b9893'
  //定义一个响应式DOM元素用于存放二维码
  const qrcodeRef = ref<HTMLElement>()
  //定义刷新二维码按钮  初始值为false  不显示出来
	const showRefreshButton = ref(false)
	//定义一个时间戳获取当前时间
  const timestamp = ref(Date.now())

  let intervalId: number | null = null
  //刷新时间戳
  function refreshQRCode() {
	timestamp.value = Date.now()
  }
  //更新时间戳函数
  function updateQRCode() {
	const qrcode = QRCode(0, 'L')
	//将时间戳信息添加到URL信息中去
	qrcode.addData(`${qrcodeUrl}?t=${timestamp.value}`)
	//创建二维码
	qrcode.make()
	const qrcodeImage = qrcode.createImgTag(4, 8)
	if (qrcodeRef.value) {
	  qrcodeRef.value.innerHTML = qrcodeImage
	}
  }
  //更新时间戳函数
  function startTimer() {
	//首先判断是否存在，如果存在则清除之前的计时器，防止多个计时器同时计数
	if (intervalId) clearInterval(intervalId)
	
	intervalId = setInterval(() => {
	  timestamp.value = Date.now()
	  if (!showRefreshButton.value) {
		showRefreshButton.value = true
	  }
	}, 5000)

  }

  function stopTimer() {
	if (intervalId) clearInterval(intervalId)
  }
  
  onMounted(() => {
	updateQRCode()
	startTimer()
  })
//   另外，在组件销毁时应该停止计时器，以避免内存泄漏。可以在组件的onUnmounted生命周期函数中调用stopTimer函数来实现这个功能。
  onUnmounted(()=>{
	stopTimer()
  })
  </script>