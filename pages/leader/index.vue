<template>
	<div>
         <VBanner :id="'product_'+index" :banner="item.carouselFigure" v-for="(item,index) in productList" :key="index"></VBanner>
    </div>
</template>


<script>
	import axios from 'axios'
    import VBanner from '~/components/home/banner'
	export default {
        components: {
            VBanner,
        },
        data (){
            return {
                showLetter1: false,
                showLetter2: false,
            }
        },
        methods: {
            changeLetter1 (){
                this.showLetter1 = !this.showLetter1;
            },
            changeLetter2 (){
                this.showLetter2 = !this.showLetter2;
            }
        },
		head () {
		  return {
		    title:'智能硬件',
		    meta: [
		      {name:'keywords',hid: 'keywords',content:'创始人说'},
		      {name:'description',hid:'description',content:'创始人说'}
		    ]
		  }
		},
        async asyncData({params,store}){
            let productList = await axios.post(`${store.state.aiuAPI}/rest/api/product/v1/query/list`,{
                asc:true,
                sortName:"sortForMenu3",
            })
            return {
                productList:productList.data.data.list,
            } 
        },
	}
</script>

<style scoped>
    .leader_said_wrap {
        overflow:  hidden;
        width: 100%;
    }

    .leader_said_box {
        position:  relative;
        width:  1200px;
        min-height: 26830px;
        margin:  0 auto;
    }

    .leader_said_first, .leader_said_third, .leader_said_fiv {
        background-color: #f5f6fb;
    }

    .leader_said_sec, .leader_said_fou {
        background-color:  #fff;
    }

    .leader_said_position {
        position:  absolute;
        top: 0;
        left:  50%;
        overflow: hidden;
        width: 1920px;
        margin-left: -960px;
    }

    .leader_said_con1 {
        position:  relative;
    }

    .leader_said_video {
        position:  absolute;
        left:  50%;
        bottom: -252px;
        width: 921px;
        height: 505px;
        margin-left: -460px;
    }

    #leader_video {
        widows: 100%;
        height: 100%;
    }

    .leader_said_con22_box {
        position: relative;
    }



    .leader_said_letter1_con {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left:  0;
        background: rgba(0,0,0,0.7);
        z-index: 10086;
        cursor: pointer;
    }

    .leader_said_letter2_con {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left:  0;
        background: rgba(0,0,0,0.7);
        z-index: 10086;
        cursor: pointer;
    }

    .leader_said_letter_img {
        overflow-y: auto;
        width:  1600px;
        height: 1000px;
        margin:  0 auto;
    }

    .leader_said_letter_btn {
        position:  absolute;
        top: 0;
        width:  100%;
        height: 392px;
        z-index: 6;
    }

    .leader_said_letter_btn1 {
        position:  absolute;
        top: 0;
        right: 46.7%;
        width:  660px;
        height: 390px;
        cursor:  pointer;
    }

    .leader_said_letter_btn2 {
        position:  absolute;
        top: 0;
        left: 53.7%;
        width: 530px;
        height: 390px;
        cursor:  pointer;
    }
	
</style>
