<template>
	<section class="container">
		<BBanner :appList="appList"/>

		<div class="common-logo">
			
			<!-- <img class="h-t-logo" src="~/assets/images/index/logo_white.jpg" alt="爱柚">
			<img class="h-t-logo logo-r" src="~/assets/images/index/logo_white2.png" alt="爱柚"> -->
		</div>
		<div class="course-title">课程列表</div>
		<div class="course-des">3分钟开启，瘦身时间轻松挤</div>
		<div class="course-list" v-swiper:mySwiper="swiperOption">
			<!-- 有传参进来 -->
			<div v-if="courseList.length>0" class="swiper-wrapper">
				<div class="course swiper-slide" v-for="(banner,index) in courseList" :key="index">
					<img v-if="banner.filePath" :src="$store.state.aiuSRC+banner.filePath">
				</div>
			</div>
			<div class="swiper-pagination"></div>
			<div class="swiper-button-prev swiper-button-white"></div>
			<div class="swiper-button-next swiper-button-white"></div>
		</div>

		<div class="intelligent-data">
			<img v-if="item.filePath" :src="$store.state.aiuSRC+item.filePath" alt="" v-for="(item,index) in IntelligentData" :key="index">
		</div>



	</section>
</template>


<script>
	import axios from 'axios'
	import indexVideo from '~/components/home/indexVideo'
	import BBanner from '~/components/home/bottom-banner'
	export default {
		data (){
			return {
				swiperOption: {
					// pagination: {
					// 	el: ".swiper-pagination",
					// 	clickable: true ,//允许分页点击跳转
					// },
					navigation: {
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev"
					},
					slidesPerView : 3,
					spaceBetween : 10,
				}
			}
		},
		components: {
			indexVideo,
			BBanner
		},
		head () {
		  return {
		    title:'产品和服务',
		    meta: [
          {name:'keywords',hid: 'keywords',content:`云麦,YUNMAI,好轻,云麦筋膜枪,云麦智能手表,云麦智能跳绳,云麦体脂秤,云麦好轻,云麦好轻Pro,云麦好轻Color2,云麦好轻mini2,云麦腕力球,云麦弹力圈,云麦瑜伽垫,体脂秤,筋膜枪,瑜伽,腕力球,体脂称`},
          {name:'description',hid:'description',content:`云麦科技旗下所有产品，包括云麦筋膜枪系列YUNMAI按摩筋膜枪PB、YUNMAI按摩筋膜枪SC，云麦体脂秤系列云麦好轻2、云麦好轻Pro、云麦好轻Color2、云麦好轻mini2，智能穿戴系列YUNMAI智能训练手表、YUNMAI智能跳绳，瑜伽系列瑜伽垫、瑜伽球、瑜伽砖、瑜伽柱、泡沫轴、瑜伽袜，运动服饰系列运动内衣、运动紧身裤等，运动装备系列运动跳绳、运动臂包、运动腰包、运动护膝、运动护肘、运动护腕、健力环、弹力带、阻力圈、握力圈等，同时提供云麦客户服务及售后支持`}
        ]
		  }
		},
		async asyncData({params,store}){
			let appList = await axios.get(`${store.state.aiuAPI}/rest/api/app/v1/list/all`)
			let IntelligentData = await axios.post(`${store.state.aiuAPI}/rest/api/display/v1/find-by-keys`,
				['intelligent_data']
			);
			let courseList = await axios.post(`${store.state.aiuAPI}/rest/api/display/v1/find-by-keys`,
				['course_list']
			);
		  return {
			appList:appList.data.data,
			IntelligentData:IntelligentData.data.data.intelligent_data.pictures,
			courseList:courseList.data.data.course_list.pictures
		  } 
		}
	}
</script>

<style scoped>
body{
	background: #000;
}
	.container{
		margin-top:80px;
	}
	.common-logo{
		/* height:300px; */
		overflow: hidden;
	}
	.h-t-logo {
	    /* position:  absolute;
		left:210px;
		top:12.5px;
		height:55px; */
		height:150px
	}
	.logo-r{
		float: right;
	}
	.course-title{
		font-size: 30px;
		color: #fff;
		text-align: center;
		margin-top: 30px;
	}
	.course-des{
		font-size: 14px;
		color: #fff;
		text-align: center;
		margin-top: 5px;
	}
	.course-list{
		width:100%;
		/* overflow-x: auto; */
		margin:10px 0px;
	}
	.course{
		width:446px;
		height:375px;
		margin-right:24px;
		cursor: pointer;
	}
	.course>img{
		width:100%;
		height:100%;
		border-radius:10px;
	}
	.intelligent-data>img{
		width: 100%;
	}
	/*banner*/
		#common-banner {
		    position: relative;
		    overflow: hidden;
		    width: 100%;
		    height: 600px;
		}


		.marginTop{
		    margin-top: 173px;
		}

		.common-banner-container {
		    position: relative;
		    width: 1200px;
		    height: 100%;
		    margin: 0 auto;
		}

		.common-banner-img {
		    position: absolute;
		    top: 0;
		    left: 50%;
		    overflow: hidden;
		    width: 1920px;
		    height: 100%;
		    margin-left: -960px;
		}
	/*banner*/
	/*brand story*/
		div#brand-story {
		    width: 100%;
		    height: auto;
		}

		.story-content {
		    width: 1200px;
		    height: auto;
		    margin: 0 auto;
		}

		.story-content-top {
		    width: 100%;
		    height: auto;
		    padding: 162px 0 100px;
		    text-align: center;
		}

		.story-content-top-titleC {
		    width: 100%;
		    height: auto;
		    font-size:  38px;
			font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
			font-weight: 900;
		    color: #22202b;
		    line-height: 46px;
		}

		.story-content-top-titleE {
		    width: 100%;
		    height: auto;
		    font-size: 14px;
		    color: #858585;
		    line-height: 22px;
		}

		.story-content-top-description {
		    width: 100%;
		    height: auto;
		    font-size: 14px;
		    color: #858585;
		    line-height: 22px;
		}

		.story-content-box {
		    overflow:  hidden;
		    width: 100%;
		    height:  auto;
		    padding-bottom: 90px;
		}

		.story-margaret {
		    overflow:  hidden;
		    width:  100%;
		}

		.story-margaret-left {
		    float:  left;
		    width:  661px;
		    height:  370px;
		}

		.story-margaret-left img {
		    width:  100%;
		    height:  100%;
		}

		.story-margaret-right {
		    float:  right;
		    width:  340px;
		    height:  370px;
		    border-bottom: 2px solid #d5d5d8;
		}

		.story-margaret-titleC {
		    width:  100%;
		    height:  auto;
		    color:  #22202b;
		    font-size:  22px;
		    font-weight:  bold;
		    line-height:  28px;
		    text-align:  right;
		}

		.story-margaret-titleE {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		    padding: 5px 0 15px;
		    color:  #ccc;
		    font-size:  12px;
		    line-height:  18px;
		    text-align:  right;
		}

		.story-margaret-add {
		    width:  100%;
		    height:  auto;
		    padding-top: 70px;
		    color:  #000;
		    font-size: 36px;
		    font-weight: bolder;
		    text-align:  right;
		}

		.story-margaret-intro {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		    padding:  77px 0 60px;
		    color:  #858585;
		    font-size:  14px;
		    line-height:  22px;
		    text-align:  left;
		}

		.story-margaret-intro-left {
		    float:  left;
		    width:  600px;
		    height: auto;
		    padding-right: 60px;
		    box-sizing:  border-box;
		}

		.story-margaret-intro-right {
		    float: right;
		    width: 600px;
		    height: auto;
		    padding-left:  60px;
		    box-sizing:  border-box;
		}

		.story-margaret-intro p {
		    padding-top: 24px;
		}

		.story-margaret-intro h3 {
		    padding-top: 24px;
		    color:  #22202b;
		}
	/*brand story*/

	/*brand background*/
		div#brand-background {
		    width: 100%;
		    height: auto;
		    background: #f9f9fa;
		}

		.background-content {
		    width: 1200px;
		    height: auto;
		    margin: 0 auto;
		}

		.background-content-top {
		    width: 100%;
		    height: auto;
		    padding: 162px 0 100px;
		    text-align: center;
		}

		.background-content-top-titleC {
		    width: 100%;
		    height: auto;
		    font-size:  38px;
			font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
			font-weight: 900;
		    color: #22202b;
		    line-height: 46px;
		}

		.background-content-top-titleE {
		    width: 100%;
		    height: auto;
		    font-size: 14px;
		    color: #858585;
		    line-height: 22px;
		}

		.background-content-top-description {
		    width: 100%;
		    height: auto;
		    font-size: 14px;
		    color: #858585;
		    line-height: 22px;
		}
		.background-content-box {
		    overflow: hidden;
		    width: 100%;
		    height: auto;
		    padding-bottom: 170px;
		}

		.background-content-box ul {
		    overflow:  hidden;
		    width:  100%;
		}

		li.background-list {
		    float: left;
		    overflow:  hidden;
		    width: 400px;
		    height:  auto;
		    box-sizing: border-box;
		}

		.background-content-box ul li:last-child {
		    padding-left: 50px;
		}

		.background-list-title {
		    overflow:  hidden;
		    width:  100%;
		    height:  48px;
		    color:  #6d6d6d;
		    font-size:  18px;
		    font-weight:  bold;
		    text-align:  left;
		    line-height: 48px;
		}

		.background-list-title p {
		    overflow:  hidden;
		    width:  100%;
		    height:  100%;
		    text-overflow:  ellipsis;
		    white-space:  nowrap;
		}

		.bg-list-intro {
		    overflow:  hidden;
		    width:  300px;
		    height:  auto;
		    padding: 35px 0 50px;
		    color:  #858585;
		    font-size:  14px;
		    line-height:  20px;
		    text-align:  left;
		}
	/*brand background*/

	/*发展历程部分*/
		div#brand-development {
		    width: 100%;
		    height: auto;
		}

		.development-content {
		    width: 1200px;
		    height: auto;
		    margin: 0 auto;
		}

		.development-content-top {
		    width: 100%;
		    height: auto;
		    padding: 162px 0 100px;
		    text-align: center;
		}

		.development-content-top-titleC {
		    width: 100%;
		    height: auto;
		    font-size:  38px;
			font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
			font-weight: 900;
		    color: #22202b;
		    line-height: 46px;
		}

		.development-content-top-titleE {
		    width: 100%;
		    height: auto;
		    font-size: 14px;
		    color: #858585;
		    line-height: 22px;
		}

		.development-content-top-description {
		    width: 100%;
		    height: auto;
		    font-size: 14px;
		    color: #858585;
		    line-height: 22px;
		}

		.development-content-box {
		    overflow: hidden;
		    width: 100%;
		    height: auto;
		    padding-bottom: 120px;
		}

		.development-content-img {
		    overflow:  hidden;
		    width: 461px;
		    height:  225px;
		    margin:  0 auto 25px;
		}

		.development-content-img img {
		    width:  100%;
		    height:  100%;
		}

		.development-process {
			position: relative;
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		    padding: 75px 0 120px;
		}

		.development-process ul {
		    overflow:  hidden;
		    width:  100%;
		}

		.development-list {
		    position: relative;
		    display:  flex;
		    overflow:  hidden;
		    width: 612px;
		    align-items:  center;
		}

		.development-process ul li:nth-child(2n+1) {
		    float: right;
		}

		.development-process ul li:nth-child(2n+1)::before {
		    position:  absolute;
		    top: 50%;
		    left:  0;
		    content:  "";
		    width:  6px;
		    height:  40px;
		    margin-top: -20px;
		    background: #000;
		    z-index: 66;
		}

		.development-process ul li:nth-child(2n) {
		    float:  left;
		}

		.development-process ul li:nth-child(2n)::before {
		    position:  absolute;
		    top: 50%;
		    right:  18px;
		    content:  "";
		    width:  6px;
		    height:  40px;
		    margin-top: -20px;
		    background: #000;
		    z-index: 66;
		}

		.development-time {
		    width: 160px;
		    color:  #22202b;
		    font-size:  22px;
		    font-weight:  bold;
		    text-align:  center;
		}

		.development-intro {
		    overflow:  hidden;
		    width:  440px;
		    color:  #858585;
		    font-size:  14px;
		    line-height:  22px;
		    text-align:  left;
		}

		.development-process ul li:nth-child(2) {
		    margin-top: 40px;
		}

		.development-process ul li:nth-child(3) {
		    margin-top: 60px;
		}

		.development-process ul li:nth-child(4) {
		    margin-top: 60px;
		}

		/* .development-process ul li:nth-child(3),.development-process ul li:nth-child(4) {
		    margin-top: 15px;
		} */

		.development-process ul li:nth-child(5) {
		    margin-top: 37px;
		}

		.development-process ul li:nth-child(6) {
		    margin-top: 40px;
		}

		/* .development-process ul li:nth-child(3) p:nth-child(4),.development-process ul li:nth-child(4) p:nth-child(2) {
		    margin-top: 20px;
		} */

		.development-fauture {
		    width:  100%;
		    height:  auto;
		}

		.development-fauture-title {
		    width: 100%;
		    height: auto;
		    text-align:  center;
		}

		p.fauture-title {
		    width:  100%;
		    height:  auto;
		    color:  #22202b;
		    font-size: 22px;
		    font-weight:  bold;
		    line-height: 44px;
		}

		p.fauture-title-intro {
		    width: 100%;
		    height: auto;
		    color: #22202b;
		    font-size: 18px;
		    line-height: 34px;
		}

		.development-fauture-intro {
		    overflow:  hidden;
		    width:  780px;
		    margin:  0 auto;
		    padding-top: 85px;
		    color:  #858585;
		    font-size:  14px;
		    line-height: 22px;
		}

		.development-timelines {
		    position:  absolute;
		    top: 0;
		    left: 49.3%;
		    width:  1px;
		    height: 1095px;
		    background:  #eee;
		    z-index: -1;
		}
	/*发展历程部分结束*/

	/*品牌理念部分*/
		div#brand-concept {
		    width: 100%;
		    height: auto;
		    background: #f9f9fa;
		}

		.concept-content {
		    width: 1200px;
		    height: auto;
		    margin: 0 auto;
		}

		.concept-content-top {
		    width: 100%;
		    height: auto;
		    padding: 162px 0 100px;
		    text-align: center;
		}

		.concept-content-top-titleC {
		    width: 100%;
		    height: auto;
		    font-size:  38px;
			font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
			font-weight: 900;
		    color: #22202b;
		    line-height: 46px;
		}

		.concept-content-top-titleE {
		    width: 100%;
		    height: auto;
		    font-size: 14px;
		    color: #858585;
		    line-height: 22px;
		}

		.concept-content-top-description {
		    width: 100%;
		    height: auto;
		    font-size: 14px;
		    color: #858585;
		    line-height: 22px;
		}

		.concept-content-box {
		    overflow: hidden;
		    width: 100%;
		    height: auto;
		    padding-bottom: 160px;
		}

		.concept-intro {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		}

		.concept-intro-left {
		    float:  left;
		    overflow:  hidden;
		    width:  461px;
		    height: 225px;
		}

		.concept-intro-left img {
		    width:  100%;
		    height:  100%;
		}

		.concept-intro-right {
		    float:  right;
		    width:  650px;
		    height:  auto;
		}

		.concept-intro-title {
		    overflow:  hidden;
		    width:  100%;
		    height:  58px;
		    color:  #22202b;
		    font-size:  22px;
		    font-weight:  bold;
		    line-height:  58px;
		    text-align:  left;
		    text-overflow:  ellipsis;
		    white-space:  nowrap;
		}

		.concept-intro-content {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		    padding-top:  22px;
		    color:  #858585;
		    font-size:  14px;
		    line-height:  20px;
		    text-align:  left;
		}

		.concept-details {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		    padding-top: 145px;
		}

		.concept-details-left {
		    float:  left;
		    width:  550px;
		    height:  auto;
		}

		.concept-details-right {
		    float:  right;
		    width:  648px;
		    height:  356px;
		}

		.concept-details-video {
		    overflow:  hidden;
		    width:  100%;
		    height:  100%;
		    background-color: #000;
		}

		.brand-slogan {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		    margin-top: 30px;
		}

		p.brand-concept-title {
		    width:  100%;
		    height: 38px;
		    color:  #6d6d6d;
		    font-size:  22px;
		    line-height:  28px;
		    text-align:  left;
		}

		p.brand-concept-desc {
		    overflow:  hidden;
		    width: 100%;
		    height:  30px;
		    color:  #858585;
		    font-size:  14px;
		    line-height:  30px;
		    text-align:  left;
		}

		.concept-details-left .brand-slogan:first-child {
		    margin-top: 0;
		}
	/*品牌理念部分结束*/

	/*品牌实力部分结束*/
</style>