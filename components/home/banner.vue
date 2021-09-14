<template>
	<div id="index-banner">
		<div v-swiper:mySwiper="swiperOption">
			<!-- 有传参进来 -->
			<div v-if="banner.length>0" class="swiper-wrapper">
				<div class="swiper-slide" v-for="(banner,index) in banner" :key="index">
					<img :src="$store.state.aiuSRC+banner.filePath">
				</div>
			</div>
			<!-- 无传参，用本地 -->
			<div v-else class="swiper-wrapper">
				<div class="swiper-slide" v-for="(banner,index) in swiperData" :key="index">
					<img :src="banner.imgUrl">
				</div>
			</div>
			<div class="swiper-pagination"></div>
			<div class="swiper-button-prev swiper-button-white"></div>
			<div class="swiper-button-next swiper-button-white"></div>
		</div>
	</div>
</template>

<script>
	export default {
		components: {
		},
		name: 'VBanner',
		props:{
			//banner为对象，里面的data属性包含着图片的数组
			banner: {
				type:Array,
				required:true
			},
		},
		data (){
			return {
				isLeft:true,
				currentIndex: 0,
				timer: '',
				clickTime: 0,
				swiperData:[
					{
						imgUrl:'http://47.106.86.150:8083/img/picture/aba2d8494a8d4f9bbfda31e776ce12c9_1631114275350.png',
					},
					{
						imgUrl:'http://47.106.86.150:8083/img/picture/aba2d8494a8d4f9bbfda31e776ce12c9_1631114275350.png',
					},
					{
						imgUrl:'http://47.106.86.150:8083/img/picture/aba2d8494a8d4f9bbfda31e776ce12c9_1631114275350.png',
					}
				],
				// swiperOption: {
				// 	loop: true,
				// 	autoplay: {
				// 	delay: 3000,
				// 	stopOnLastSlide: false,
				// 	disableOnInteraction: false
				// 	},
				// 	// 显示分页
				// 	pagination: {
				// 	el: ".swiper-pagination",
				// 	clickable: true //允许分页点击跳转
				// 	},
				// 	// 设置点击箭头
				// 	navigation: {
				// 	nextEl: ".swiper-button-next",
				// 	prevEl: ".swiper-button-prev"
				// 	}
				// },
				banners: [ 'http://47.106.86.150:8083/img/picture/aba2d8494a8d4f9bbfda31e776ce12c9_1631114275350.png', 'http://47.106.86.150:8083/img/picture/aba2d8494a8d4f9bbfda31e776ce12c9_1631114275350.png', 'http://47.106.86.150:8083/img/picture/aba2d8494a8d4f9bbfda31e776ce12c9_1631114275350.png' ],
				swiperOption: {
					pagination: {
						el: ".swiper-pagination",
						clickable: true //允许分页点击跳转
					},
					navigation: {
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev"
					}
				// some swiper options...
				}


			}
		},
		computed:{
			// swiper(){
			// 	return this.$refs.mySwiper.swiper
			// }
		},
		created (){

		},
		mounted(){
			console.log('banner',this.banner)
		},
		methods: {
		}
	}
</script>

<style scoped>
	#index-banner {
	    position:  relative;
	    overflow:  hidden; 
	    width:  100%;
	    height:  768px;
	}
	.swiper-slide>img{
		width: 100%;
    	height: 768px;
	}
	
	
</style>
<style>
	#index-banner .swiper-pagination-bullet{
		background:#fff!important;
		cursor: pointer;
	}
	#index-banner .swiper-pagination-bullet-active{
		background:orange!important;
	}
	#index-banner .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet{
		margin:0px 8px
	}
	#index-banner .swiper-pagination-bullet{
		width:14px;
		height:14px;
	}
</style>