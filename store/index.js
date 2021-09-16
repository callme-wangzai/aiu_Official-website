import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
	wordpressAPI: 'http://visney.cn:81',
	wordpressAPIForJob: 'http://visney.cn:8082',
	aiuAPI:'http://47.106.86.150:8082',
	aiuSRC:'http://47.106.86.150:8083',
	headProdNav: {},
	headNewsNav: {},
	headJobNav: {},
	indexLinksData: null,
	// indexShowLinks: false
};

const mutations = {
	//头部导航产品与新闻信息
		setHeadProdNav(state,data){
			state.headProdNav = data
		},
		setProductList(state,data){
			state.productList = data
		},
		setHeadJobNav(state,data){
			state.headJobNav = data
		},
		setIndexLinksData(state,data){
			state.indexLinksData = data
		},
		// setIndexShowLinks(state,bool){
		// 	state.indexShowLinks = bool
		// }	
};

const getters = {
};

const actions = {
	async nuxtServerInit({commit,state,req}) {
		
		//产品导航
			let headProdNav = await axios(`${state.wordpressAPI}/proCategory/showAll/main`);
			commit('setHeadProdNav',headProdNav.data);
		//商品导航
			// let headNewsNav = await axios(`${state.wordpressAPI}/articleCategory/getAll`);
			let productList = await axios.post(`${state.aiuAPI}/rest/api/product/v1/query/list`,{
				asc:true,
        		sortName:"sortForHome"
			})
			commit('setProductList',productList.data.data.list);
		//招聘导航
			let headJobNav = await axios(`${state.wordpressAPIForJob}/jobClass/getAll`);
			commit('setHeadJobNav',headJobNav.data);
		//友情链接
			let indexLinksData = await axios(`${state.wordpressAPI}/link/selectAll`);
			commit('setIndexLinksData',indexLinksData.data);
	}
};

const store = () => new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})

export default store