<template>
	<footer class="v-footer">
		<div id="index-footer">
			<div class="index-footer-box">
				<div class="footer-top">
					<div class="footer-logo-box clearfix">
						<div class="footer-logo">
							<nuxt-link to="/">
								<img src="~/assets/images/index/logo2.png">
							</nuxt-link>
						</div>
						<!-- <div class="footer-phone">
							<img src="~/assets/images/index/footer-phone.png">
						</div>
						<div class="footer-pic">
							<img src="~/assets/images/index/footer-pic.png">
						</div> -->
					</div>
					<div class="footer-nav-box">
						<div class="footer-nav">
							<ul class="footer-nav-parent">
								<li class="footer-nav-list">
									<nuxt-link to="/">首页</nuxt-link>
								</li>
								<li class="footer-nav-list">
									<nuxt-link target="_blank" to="/">商城</nuxt-link>
									<!-- <ul class="footer-nav-child footer-nav-childNews">
										<li v-for="(item,index) in productList" :key="index"><a target="_blank" :href="item.mallLink">{{item.name}}</a></li>
									</ul> -->
								</li>
								<li class="footer-nav-list">
									<nuxt-link target="_blank" to="/brand">APP</nuxt-link>
									<ul class="footer-nav-child footer-nav-childProd">
										<li>
											<nuxt-link target="_blank" to="/brand">APP</nuxt-link>
										</li>
										<!-- <li v-for="(item,index) in headProdNav" :key="index" v-if="index<4">
											<nuxt-link target="_blank" :to="{name: 'prod-typeId',params: {typeId: item.proCategoryId}}">{{item.proCategoryName}}</nuxt-link>
										</li> -->
									</ul>
								</li>
								<li class="footer-nav-list">
									<nuxt-link to="/experice">关于我们</nuxt-link>
									<ul class="footer-nav-child">
										<li class="footer-nav-child-list"><nuxt-link to="/experice">联系我们</nuxt-link></li>
										<!-- <li class="footer-nav-child-list"><nuxt-link to="/service/aftersales">售后服务</nuxt-link></li>
										<li class="footer-nav-child-list"><nuxt-link to="/service/contact">联系我们</nuxt-link></li>
										<li class="footer-nav-child-list"><nuxt-link to="/service/questions">常见问题</nuxt-link></li> -->
									</ul>
								</li>
								<!-- <li class="footer-nav-list footer_links" v-show="$route.params.tag === undefined && $route.fullPath === '/'">
									<a href="javascript:void(0)">友情链接</a>
									<ul class="footer-nav-child footer_links_ul">
										<li class="footer-nav-child-list" v-for="(list,index) in indexLinksData" :key="index">
											<a target="_blank" :href="list.link">{{list.linkName}}</a>
										</li>
									</ul>
								</li> -->
							</ul>	
						</div>
						<!-- <div class="footer-code">
							<div class="footer-sina-box">
								<div class="footer-sina-icon"><a target="_blank" rel="nofollow" href="https://weibo.com/visney?is_hot=1"><img src="~/assets/images/index/footer-sina-icon.png"></a></div>
							</div>
							<div class="footer-weixin-box">
								<div class="footer-weixin-icon"><img src="~/assets/images/index/footer-weixin-icon.png"></div>
								<div class="footer-weixin-code code-pic active"><img src="~/assets/images/index/footer-weixin-code.png"></div>
							</div>
							<div class="footer-phone-box">
								<div class="footer-phone-icon"><img src="~/assets/images/index/footer-phone-icon.png"></div>
							</div>
						</div> -->
					</div>
				</div>
				<div class="footer-bottom">
					<p>Copyright © 2021 深圳市爱柚数字智能有限公司</p>
					<p class="link" @click="linkToWeb">粤ICP备2021129996号</p>
				</div>
			</div>
		</div>
	</footer>
</template>
<style scoped>
	div#index-footer {
	    width:  100%;
	    height:  auto;
	    background: #000;
	}

	.index-footer-box {
	    width: 1200px;
	    height: auto;
	    margin: 0 auto;
	    /* padding-bottom: 30px; */
	}
	.footer-top{
		display: flex;
		justify-content: space-between;
	}
	.footer-logo-box {
	    position:  relative;
	    /* width:  100%; */
	    height:  84px;
	    /* border-bottom: 2px solid #515256; */
	}

	.footer-logo {
	    float:  left;
	    margin-top: 28px;
	}

	.footer-logo img{
		height: 37.5px;
	}

	.footer-phone {
	    float:  right;
	    margin-top:  28px;
	    margin-right: 130px;
	}

	.footer-pic {
	    position:  absolute;
	    top: -77px;
	    right: -15px;
	    overflow:  hidden;
	    width:  129px;
	    height: 161px;
	}

	.footer-nav-box {
	    overflow:  hidden;
	    /* width:  100%; */
	    height:  auto;
	    padding-bottom: 12px;
	    background: #000;
	}

	.footer-nav {
	    float:  left;
	    overflow:  hidden;
	    width:  900px;
	    height:  auto;
	    padding-top:  35px;
	}

	.footer-code {
	    position: relative;
	    float:  right;
	    overflow:  hidden;
	    width:  300px;
	    height:  auto;
	    padding-top:  277px;
	}

	ul.footer-nav-parent {
	    overflow:  hidden;
	    width:  100%;
	    height:  auto;
	    text-align: center;
	}

	li.footer-nav-list {
	    display: inline-block;
	    margin-left:  110px;
	}

	.footer-nav-parent .footer-nav-list:first-child {
	    margin-left: 0px;
	}

	li.footer-nav-list>a {
	    display:  block;
	    width:  100%;
	    height: 34px;
	    color: #f9f9fa;
	    font-size:  14px;
	    font-weight:  bold;
	    line-height:  34px;
	    text-align:  center;
	}

	ul.footer-nav-child {
	    overflow:  hidden;
	    width:  100%;
	    height:  auto;
	    padding-top: 12px;
	}

	.footer-nav-child li {
	    width:  100%;
	    height:  30px;
	    font-size:  14px;
	    text-align:  center;
	    line-height: 30px;
	}

	.footer-nav-child li a {
	    color: #969696;
	}

	.footer-nav-child li a:hover {
	    color: #f9f9fa;
	}

	.footer-nav-list.footer_links{
		margin-left: 70px;
	}

	ul.footer-nav-child.footer_links_ul {
		overflow-y: auto;
		height: 120px;
		padding-right: 14px;
	}

	ul.footer-nav-child.footer_links_ul li{
		max-width:  104px;
		overflow: hidden;
	}

	ul.footer-nav-child.footer_links_ul li a {
		display: block;
		width: 100%;
		padding: 0 5px;
	}

	/*滚动条样式*/
	.footer_links_ul::-webkit-scrollbar {/*滚动条整体样式*/
		width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
		height: 4px;
	}
	.footer_links_ul::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
		border-radius: 5px;
		box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
		background: rgba(0,0,0,0.2);
	}
	.footer_links_ul::-webkit-scrollbar-track {/*滚动条里面轨道*/
		box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
		border-radius: 0;
		background: rgba(0,0,0,0.1);
	}

	.footer-code>div {
	    float:  right;
	    width:  28px;
	    height: 24px;
	    text-align: center;
	    cursor: pointer;
	    -webkit-transition: all 0.5 ease;
	    -o-transition: all 0.5 ease;
	    transition: all 0.5 ease;
	}

	.footer-weixin-box {
	    margin-right: 24px;
	    margin-left: 23px;
	}

	.code-pic {
	    display: none;
	    position: absolute;
	    top: 70px;
	    right: 0;
	    overflow:  hidden;
	    width: 135px;
	    height: 139px;
	}

	.code-pic img {
	    width:  100%;
	    height: 100%;
	}

	.code-pic.active {
	    display:  block;
	}

	.footer-bottom {
	    overflow:  hidden;
	    width: 100%;
	    height:  28px;
	    color:  #999;
	    font-size: 12px;
	    text-align:  center;
	    line-height:  28px;
	}
	.footer-bottom p {
		display: inline-block;
		margin-left: 15px;
	}

	.footer-bottom p:first-child {
		margin-left: 0;
	}

	.footer-bottom p a {
		color:  #999;
	}

	.footer-bottom p a:hover {
		color: #f9f9fa;
	}
	.link{
		cursor: pointer;
	}
</style>

<script>
	import { mapState } from 'vuex'

	export default {
		name: 'VFooter',
		components: {},
		
		computed: {
			...mapState(['headProdNav','productList','indexLinksData'])
		},
		methods:{

			linkToWeb(){
				window.open('https://beian.miit.gov.cn/')
			}
		}
		// mounted (){
		// 	//判断是否为首页，首页则改变友情链接控制字段，只在首页显示
		// 	let that = this
		// 	if(that.$route.params.tag === undefined && that.$route.fullPath === '/'){
		// 		that.$store.commit('setIndexShowLinks', true)
		// 	}else {
		// 		that.$store.commit('setIndexShowLinks', false)
		// 	}
		// }
	}
</script>