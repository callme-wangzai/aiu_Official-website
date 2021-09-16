<template>
	<section class="container">
			<img v-for="(item,index) in fileList" :key="index" :src="$store.state.aiuSRC+item.filePath" alt="">
	</section>
</template>


<script>
	import axios from 'axios'
	export default {
		data (){
			return {
			}
		},
		head () {
		  return {
		    title:this.metaData.navigationTitle,
		    meta: [
		      {name:'keywords',hid: 'keywords',content:`关于爱柚`},
		      {name:'description',hid:'description',content:`了解爱柚`}
		    ]
		  }
		},
		async asyncData({params,store}){
		  //head信息
		    let metaData = await axios(`${store.state.wordpressAPI}/NavigationMeta/get/3`);
			// let fileList = await axios.post(`${store.state.aiuAPI}/rest/api/file/v1/query/list`,{
			// 	pageNum: 1,
			// 	pageSize: 10,
			// 	request:{
			// 	  fileName:'aboutUS',
			// 	  fileType:1
			// 	}
			// })
			let fileList = await axios.post(`${store.state.aiuAPI}/rest/api/display/v1/find-by-keys`,
				['about_us']
			);
		  return {
		    metaData: metaData.data,
			fileList:fileList.data.data.about_us.pictures
		  } 
		},
		components: {
		}
	}
</script>

<style scoped>
body{
	background: #000;
}
.container{
	margin-top:80px;
	padding:0 30px;
	background: #fff;
}
.container img{
	width:100%;
}
img{
	border:none;
	margin-bottom: 20px;
}
</style>