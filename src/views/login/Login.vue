<template>
<div class="erweima">
    <img src="" alt="">

  
</div>

<div id="qrcode"></div>
</template>
  <script type="text/javascript" src="http://static.runoob.com/assets/qrcode/qrcode.min.js" lang="js" >
// ts中报QRCode未声明的错可以这样声明： 
declare var QRCode: any; 
function makeQRCode(qrCodeContent){
	var qrcode = new QRCode("test", {
    	text: "https://music.163.com/login?codekey=176dc4f7-892a-4bb6-b4cc-b43e977e05c6",   // 二维码内容
    	width: 128,  
    	height: 128,
    	colorDark : "#000000",  // 码的颜色
    	colorLight : "#ffffff",  // 码的背景色
    	correctLevel : QRCode.CorrectLevel.H  // 高度容错
	});
	// qrcode.clear(); // 可以清除二维码
	// qrcode.makeCode("二维码的内容");  // 生成另外一个二维码
}

function downloadQRCode() {
  	const qrCodeDiv: any = document.getElementById('qrcode');  // 找到二维码div
    const url = qrCodeDiv.querySelector('canvas').toDataURL('image/png');          // 获取图片地址
  	const a = document.createElement('a');          // 创建一个a节点插入的document
    const handle = new MouseEvent('click')           // 模拟鼠标click点击事件
    a.download = this.qrCodename                  // 设置a节点的download属性值
    a.href = url;                                 // 将图片的src赋值给a节点的href
    a.dispatchEvent(handle)            // 触发点击事件
}

</script >



<style scoped lang="less"></style>