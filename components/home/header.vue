<template>
	<header class="v-header clearfix">
		<div id="index-header" :class="`fixedTop ${headFixed?'black':''}`">
			<div class="index-header-box">
				<nuxt-link to="/">
					<img class="h-t-logo" src="~/assets/images/index/logo.png" alt="爱柚">
				</nuxt-link>
				<div class="i-h-nav">
					<ul class="h-nav-list">
						<li >
							<nuxt-link class="titleLink" to="/">首页</nuxt-link>
						</li>
						<li>
							<nuxt-link class="titleLink" to="/brand">产品和服务</nuxt-link>
						</li>
						<li @mouseover="selectStyle" @mouseout="outStyle">
							<nuxt-link class="titleLink" to="/leader">智能硬件</nuxt-link>
						</li>
						<li>
							<nuxt-link class="titleLink" to="/experice">关于爱柚</nuxt-link>
						</li>
					</ul>		
				</div>
			</div>
		</div>
		<div v-show="menuShow" @mouseover="selectStyle" @mouseout="outStyle" class="menuBar">
			<div class="menu" v-for="(item,index) in productList2" :key="index" @click="linkTo(item,index)">
				<div class="menu-name">{{item.name}}</div>
				<img v-if="item.suspensions[0]&&item.suspensions[0].filePath" :src="$store.state.aiuSRC+item.suspensions[0].filePath" alt="">
			</div>
			<!-- 了解更多 -->
			<div class="menu" @click="linkToFour">
				<img class="learn_more" src="~/assets/images/index/learn_more.png" alt="">
			</div>
		</div>
	</header>
</template>

<script>
	import { mapState } from 'vuex'

	export default{
		name: 'VHeader',
		data (){
			return {
				headFixed:false,
				maxClientWidth: 980,
				isShowCode: false,
				menuShow:false
			}
		},
		computed: {
			...mapState(['productList2','headNewsNav','headJobNav'])
		},
		mounted (){
			
			//监听滚动条
			window.addEventListener('scroll',this.handleScroll);
		},
		methods: {
			handleScroll (){
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				var offsetTop = document.querySelector('.h-nav-list').offsetTop;
				// if (scrollTop > offsetTop) {
				// 	this.headFixed = true;
				// } else {
				// 	this.headFixed = false;
				// }
			},
			showCode (){
				this.isShowCode = !this.isShowCode
			},
			selectStyle(){
				this.menuShow = true
				this.headFixed = true;
				console.log('select')
			},
			outStyle(){
				this.menuShow = false
				this.headFixed = false;
				console.log('out')
			},
			linkTo(item,index){
				let el = document.getElementById(`product_${index}`)
				if(el){
					document.documentElement.scrollTop = el.offsetTop - 80
				}else{
					this.$router.push('/leader')
					setTimeout(()=>{
						let el = document.getElementById(`product_${index}`)
						document.documentElement.scrollTop = el.offsetTop - 80
					},500)
				}
			},
			linkToFour(){
				let el = document.getElementById(`four`)
				if(el){
					document.documentElement.scrollTop = el.offsetTop - 80
				}else{
					this.$router.push('/')
					setTimeout(()=>{
						let el = document.getElementById(`four`)
						document.documentElement.scrollTop = el.offsetTop - 80
					},500)
				}
			}
		},
		destroyed (){
			window.removeEventListener('scroll',this.handleScroll)
		}
	}
</script>

<style scoped>
	#index-header {
	    width:  100%;
	    /* height: 158px; */
	    /* background:  #fff; */
	    z-index: 666;
	}

	.fixedTop{
	    position:  fixed;
	    /* top: -100px; */
	    left: 0;
	}

	.index-header-box {
	    position:  relative;
	    width:  100%;
	    height:  100%;
	    /* background: #fff; */
	    /* border-bottom: 2px solid #d5d5d8; */
	    box-sizing:  border-box;
	}

	.menuBar{
		width: 100%;
		/* height:100px; */
		padding:10px 0;
		background: #fff;
		position:  fixed;
		top:80px;
		z-index: 666;
		display: flex;
		justify-content: center;
	}
	.menuBar .menu{
		margin:0 20px;
		cursor: pointer;
	}
	.menuBar .menu .menu-name{
		text-align: center;
		margin:10px 0;
		color:#6d6d6d;
	}
	.menuBar .menu>img{
		width: 150px;
		height: 100px;
	}
	.menu .learn_more{
		margin-top:30px;
	}

	.h-t-logo {
	    position:  absolute;
		left:210px;
		top:12.5px;
		/* width: 202px; */
		height:55px;
		/* line-height: 80px; */
	    /* left: 50%;
	    top: 0;
	    width: 80px;
	    height:  81px;
	    margin-left: -40px; */
	}

	.i-h-nav {
	    width:  1200px;
	    height:  80px;
	    margin:  0 auto;
	    /* padding-top: 15px; */
	    font-size:  18px;
	    line-height: 80px;
	    text-align:  right;
	}

	ul.h-nav-list {
	    display:  block;
	    width:  100%;
	    height:  100%;
	}

	.h-nav-list>li {
	    position: relative;
	    display:  inline-block;
	    padding: 0 23px;
	}
	.h-nav-list .titleLink:hover{
		color:orange;
	}

	.h-nav-list>li>a {
	    display:  block;
	    width:  100%;
	    height:  100%;
	    /* padding-bottom:  6px; */
	    color: #fff;
	    -webkit-box-sizing: border-box;
	    -moz-box-sizing: border-box;
	    box-sizing: border-box;
	    -webkit-transition: all 0.5s ease;
	    -o-transition: all 0.5s ease;
	    transition: all 0.5s ease;
	}

	.h-nav-list>li:hover>a, .h-nav-list .nuxt-link-exact-active, .h-nav-list .nuxt-link-active {
	    
	    /* border-bottom: 2px solid #2f2d37; */
	}
 	
	.h-nav-list>li:first-child .nuxt-link-active{
		border-bottom: 2px solid transparent;
	}

	.h-nav-list>li .nuxt-link-exact-active{
		color: orange!important;
	}
	.h-nav-list-child li a.nuxt-link-exact-active{
		border: none;
	}
	ul.h-nav-list-child {
	    display:  none;
	    position:  absolute;
	    top: 62px;
	    left: 50%;
	    overflow: hidden;
	    width: 100px;
	    height:  0;
	    margin-left: -50px;
	    background: #f2f3f4;
	    opacity: 0;
	    filter: alpha(opacity=0);
	    z-index: 999;
	}

	.h-nav-list>li:hover .h-nav-list-child {
	    display:  block;
	    height: auto;
	    -webkit-transition: all 1s ease;
	    -o-transition: all 1s ease;
	    transition: all 1s ease;
	    opacity: 100;
	    filter: alpha(opacity=1);
	}

	ul.h-nav-list-child>li {
	    width:  100%;
	    height: 30px;
	    font-size:  14px;
	    text-align:  center;
	    line-height: 30px;
	}

	ul.h-nav-list-child li a {
	    display: block;
	    overflow:  hidden;
	    width:  100%;
	    height:  100%;
	    color: #6d6d6d;
	    border: none;
	}

	ul.h-nav-list-child li a:hover{
	    color: #22202b;
	}

	 ul.h-nav-list-child.h-nav-list-childProd {
	    left: 0;
	    margin-left: 0;
	    width: 600px;
	    padding: 15px;
	}

	ul.h-nav-list-child.h-nav-list-childProd>li {
	    overflow: hidden;
	    height:  auto;
	    line-height: 40px;
	}

	ul.h-nav-list-child.h-nav-list-childProd>li>a:first-child {
	    float:  left;
	    width: 100px;
	}

	ul.h-nav-list-child.h-nav-list-childProd>li>a:nth-child(2) {
	    float:  left;
	    width: 50px;
	    font-weight:  bold;
	}

	ul.nav-childProd {
	    float:  left;
	    width: 450px;
	    min-height: 30px;
	    border-bottom: 1px dotted #ccc;
	}

	ul.h-nav-list-child.h-nav-list-childProd>li:last-child .nav-childProd {
	    border-bottom:  none;
	}

	ul.nav-childProd>li {
	    float:  left;
	    width: auto;
	}

	ul.nav-childProd>li>a {
	    padding: 0 10px;
	} 
	
	ul.h-nav-list-child.h-nav-list-childProd .nuxt-link-active {
	    color: #6d6d6d;
	    border-bottom:  transparent;
	}

	ul.h-nav-list-child.h-nav-list-childProd li a:hover {
	    color: #22202b;
	}

	.h-nav-list-childNews li a.nuxt-link-active {
	    color: #6d6d6d;
	    border: none;
	}
	.black{
		background-color:rgba(0,0,0,1)!important;
	}
</style>