<template>
	<section class="container">
		<BBanner :appList="appList"/>

		<div class="common-logo">
			<img class="h-t-logo" src="~/assets/images/index/logo_white.jpg" alt="爱柚">
			<img class="h-t-logo logo-r" src="~/assets/images/index/logo_white2.png" alt="爱柚">
		</div>

		<div class="course-list">
			<ul>
				<li class="course" v-for="(item,index) in fileList" :key="index">
					<img :src="$store.state.aiuSRC+item.filePath" alt="">
				</li>
				<li class="course" v-for="(item,index) in fileList" :key="index">
					<img :src="$store.state.aiuSRC+item.filePath" alt="">
				</li>
				<li class="course" v-for="(item,index) in fileList" :key="index">
					<img :src="$store.state.aiuSRC+item.filePath" alt="">
				</li>
				<li class="course" v-for="(item,index) in fileList" :key="index">
					<img :src="$store.state.aiuSRC+item.filePath" alt="">
				</li>
			</ul>

		</div>	

		<div class="intelligent-data">
			<img :src="$store.state.aiuSRC+item.filePath" alt="" v-for="(item,index) in IntelligentData" :key="index">
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
		      {name:'keywords',hid: 'keywords',content:`${this.metaData.navigationKeyword}`},
		      {name:'description',hid:'description',content:`${this.metaData.navigationDescription}`}
		    ]
		  }
		},
		async asyncData({params,store}){
		  //head信息
		    let metaData = await axios(`${store.state.wordpressAPI}/NavigationMeta/get/2`);
			let appList = await axios.get(`${store.state.aiuAPI}/rest/api/app/v1/list/all`)
			let fileList = await axios.post(`${store.state.aiuAPI}/rest/api/file/v1/query/list`,{
				pageNum: 1,
				pageSize: 10,
				request:{
				  fileName:'course',
				  fileType:1
				}
			})
			let IntelligentData = await axios.post(`${store.state.aiuAPI}/rest/api/file/v1/query/list`,{
				pageNum: 1,
				pageSize: 10,
				request:{
				  fileName:'智能数据',
				  fileType:1
				}
			})
		  return {
		    metaData: metaData.data,
			appList:appList.data.data,
			fileList:fileList.data.data.list,
			IntelligentData:IntelligentData.data.data.list
		  } 
		}
	}
</script>

<style scoped>
	.container{

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
	.course-list{
		width:100%;
		overflow-x: auto;
	}
	.course-list>ul{
		width:20000px;
		display: flex;
    	
	}
	.course{
		width:446px;
		height:375px;
		margin-right:24px;
		cursor: pointer;
	}
	.course>img{
		width:100%;
		height:100%
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

	/*品牌实力部分*/
		div#brand-strength {
		    width: 100%;
		    height: auto;
		}

		.strength-content {
		    width: 1200px;
		    height: auto;
		    margin: 0 auto;
		}

		.strength-content-first {
		    overflow:  hidden;
		    width: 100%;
		    height: auto;
		    padding: 162px 0 140px;
		    text-align: center;
		}

		.strength-content-left {
		    float:  left;
		    overflow:  hidden;
		    width:  434px;
		    height: 700px;
		}

		.strength-content-right {
		    float:  right;
		    width:  600px;
		    height:  auto;
		    padding-left:  37px;
		    box-sizing:  border-box;
		}

		.strength-content-titleC {
		    overflow:  hidden;
		    width:  100%;
		    height: 40px;
		    color: #22202b;
		    font-size:  38px;
        	font-family: 'Noto Serif CJK SC', 'Source Han Serif SC', 'Source Han Serif', 'source-han-serif-sc','STZhongsong','宋体', 'serif';
        	font-weight: 900;	
		    line-height: 40px;
		    text-align:  left;
		}

		.strength-content-titleE {
		    width:  100%;
		    height:  auto;
		    margin-top: 34px;
		    color:  #6d6d6d;
		    font-size:  14px;
		    line-height: 16px;
		    text-align:  left;
		}

		.strength-content-description {
		    overflow:  hidden;
		    width:  100%;
		    height:  45px;
		    margin-top: 105px;
		    color: #22202b;
		    font-size:  22px;
		    line-height:  45px;
		    text-align:  left;
		}

		.strength-content-intro {
		    overflow:  hidden;
		    width: 100%;
		    height:  auto;
		    margin-top: 90px;
		    color:  #858585;
		    font-size:  14px;
		    line-height:  22px;
		    text-align:  left;
		}

		.strength-content-box {
		    width:  100%;
		    height:  auto;
		    padding-bottom: 240px;
		}

		.strength-content-box ul {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		}

		.strength-content-box ul li {
		    float:  left;
		    width:  364px;
		    height:  auto;
		    margin-left: 54px;
		}

		.strength-content-box ul li:first-child {
		    margin-left: 0px;
		}

		.strength-main {
		    overflow:  hidden;
		    width:  100%;
		    height:  100%;
		}

		.strength-main-img{
			cursor: pointer;
			-webkit-transition: all 0.5s ease;
	        -o-transition: all 0.5s ease;
	        transition: all 0.5s ease;
		}

		.strength-main-imgcd {
		    overflow:  hidden;
		    width:  364px;
		    height:  200px;
		    background: url("~/assets/images/brand/strength-main-chengdu.png") center center no-repeat;
		}

		.strength-main-imgcd:hover{
			background: url("~/assets/images/brand/strength-main-chengdu2.jpg") center center no-repeat;
		}

		.strength-main-imgnj {
		    overflow:  hidden;
		    width:  364px;
		    height:  200px;
		    background: url("~/assets/images/brand/strength-main-nanjing.png") center center no-repeat;
		}

		.strength-main-imgnj:hover{
			background: url("~/assets/images/brand/strength-main-nanjing2.jpg") center center no-repeat;
		}

		.strength-main-imgdg {
		    overflow:  hidden;
		    width:  364px;
		    height:  200px;
		    background: url("~/assets/images/brand/strength-main-dongguan.png") center center no-repeat;
		}

		.strength-main-imgdg:hover{
			background: url("~/assets/images/brand/strength-main-dongguan2.jpg") center center no-repeat;
		}
	
		.strength-main-title {
		    overflow:  hidden;
		    width:  100%;
		    height:  auto;
		    padding-top: 10px;
		    color:  #858585;
		    font-size:  18px;
		    line-height: 22px;
		    text-align:  center;
		}
	/*品牌实力部分结束*/
</style>