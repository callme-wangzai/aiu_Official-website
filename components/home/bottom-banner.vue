<template>
	<div id="bottom-banner">
        <div class="banner">
            <div class="banner-main">
            <img class="white_logo" src="~/assets/images/index/logo_white.jpg" alt="">
            <div class="name">APP</div>
            <div class="title">身随心动，及时型动</div>
            <div class="code">
                <!-- 微信二维码 -->
                <!-- <div class="code-detail">
                <vue-qr :logoSrc="imageUrl" :text="appList[0].androidLink?appList[0].androidLink:''" :size="300"></vue-qr>
                <div class="code-name">微信二维码</div>
                </div> -->
                <!-- app二维码 -->
                <div class="code-detail">
                <vue-qr :logoSrc="imageUrl" :text="appList[0].iosLink?appList[0].iosLink:''" :size="300"></vue-qr>
                <div class="code-name">APP二维码</div>
                </div>
            </div>
            </div>
            <img src="~/assets/images/index/banner.png" alt="">
        </div>
	</div>
</template>

<script>
    import vueQr from 'vue-qr'
	export default {
		components: {
            vueQr
		},
		name: 'BottomBanner',
        props:{
			//banner为对象，里面的data属性包含着图片的数组
			appList: {
				type:Array,
				required:true
			},
		},
		data (){
			return {
                imageUrl: require("~/static/favicon.jpeg"),
                weixinCode:'www.weixin.com',
                appCode:'www.aiyou.com'

			}
		},
		computed:{
		},
		created (){

		},
		mounted(){
            console.log('appList',this.appList)
		},
		methods: {
		}
	}
</script>

<style scoped>
	.banner{
    width:100%;
    height:810px;
    position: relative;
  }
  .banner .banner-main{
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    text-align: right;
    padding-right: 157.5px;
    /* padding-top:275.25px; */
    padding-top:175.25px;
    box-sizing: border-box;
  }
  .banner-main .white_logo{
    width:307.5px;
    display: inline-block;
  }
  .banner-main .name{
    color: #9f9f9f;
    font-size:54px;
  }
  .banner-main .code{
    /* margin-right: -100px; */
    display: flex;
    flex-direction:row-reverse;
  }
  .banner-main .code .code-detail{
    margin-top:50px;
    margin-left:30px;
  }
  .banner-main .code .code-name{
    color: #9f9f9f;
    text-align: center;
    margin-top:10px;
    font-size: 22px;
  }
  .banner-main .title{
    font-size: 14px;
    color: #9f9f9f;
  }
  .banner>img{
    width:100%;
    height:810px;
    /* height: 100%; */
  }
	
	
</style>