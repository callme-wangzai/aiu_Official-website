import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
	aiuAPI:'http://47.106.86.150:8082',
	aiuSRC:'http://47.106.86.150:8083',
	headProdNav: {},
	headNewsNav: {},
	headJobNav: {},
	indexLinksData: null,
	// indexShowLinks: false
};

const mutations = {
		setProductList(state,data){
			state.productList = data
		},
		// setHeadJobNav(state,data){
		// 	state.headJobNav = data
		// },
		// setIndexLinksData(state,data){
		// 	state.indexLinksData = data
		// },
		// setIndexShowLinks(state,bool){
		// 	state.indexShowLinks = bool
		// }	
};

const getters = {
};

const actions = {
	async nuxtServerInit({commit,state,req}) {
		
			let productList = await axios.post(`${state.aiuAPI}/rest/api/product/v1/query/list`,{
				asc:true,
        		sortName:"sortForHome"
			})
			commit('setProductList',productList.data.data.list);
	}
};

const store = () => new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})

export default store