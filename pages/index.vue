<template>
  <section class="container">
      <!-- banner -->
      <VBanner :banner="banner"></VBanner>
      <!-- 产品展示 -->
      <div :id="'product'+index" v-for="(item,index) in productList" :key="index">
        <div class="product type1" v-if="(index+1)%4===3">
          <div class="product-all">
            <div class="type-top">
              <div class="main">
                <div class="name">{{item.name}}</div>
                <div class="desc">{{item.desc}}</div>
                <div class="link">
                  <a v-if="item.video&&item.video.filePath" @click="watchVideo(item)">观看视频 ></a>
                  <a @click="shopLink(item)">立即购买 ></a>
                </div>
            </div>
              </div>
            <div class="img-video">
              <img v-if="item.files[0]&&item.files[0].filePath" v-lazy="$store.state.aiuSRC+item.files[0].filePath" alt="">
            </div>
          </div>
          <img class="product-img" v-if="item.backgrounds[0]&&item.backgrounds[0].filePath" v-lazy="$store.state.aiuSRC+item.backgrounds[0].filePath" alt="">
        </div>

        <div class="product type2" v-if="(index+1)%4===1||(index+1)%4===2">
          <div class="product-all">
            <div class=type-top>
              <div class="main">
                <div class="name">{{item.name}}</div>
                <div class="desc">{{item.desc}}</div>
                <div class="link">
                  <a v-if="item.video&&item.video.filePath" @click="watchVideo(item)">观看视频 ></a>
                  <a @click="shopLink(item)">立即购买 ></a>
                </div>
              </div>
            </div>
            <div class="img-video">
              <img v-if="item.files[0]&&item.files[0].filePath" v-lazy="$store.state.aiuSRC+item.files[0].filePath" alt="">
              <img v-if="item.files[1]&&item.files[1].filePath" v-lazy="$store.state.aiuSRC+item.files[1].filePath" alt="">
            </div>
          </div>
          <img class="product-img" v-if="item.backgrounds[0]&&item.backgrounds[0].filePath" v-lazy="$store.state.aiuSRC+item.backgrounds[0].filePath" alt="">
        </div>

        <div id="four" class="product type3" v-if="(index+1)%4===0">
          <div class="img-video">
            <img @click="linkTo(banner)" v-for="(banner,index) in item.files" :key="index" :src="$store.state.aiuSRC+banner.filePath" alt="">
          </div>
        </div>

      </div>
      <div id="videoPop" v-if="videoModal">
        <div class="box">
          <Video @closeModal="closeModal" :videoSrc="videoUrl"/>
        </div>
        
      </div>
      <!-- 首页底部 -->
      <BBanner :appList="appList"/>
  </section>
</template>
<script>
  import { mapState } from 'vuex'
  import axios from 'axios'
  import AppLogo from '~/components/AppLogo.vue'
  import VHeader from '~/components/home/header'
  import VFooter from '~/components/home/footer'
  import VBanner from '~/components/home/banner'
  import BBanner from '~/components/home/bottom-banner'
  import indexVideo from '~/components/home/indexVideo'
  import Video from '~/components/video'
  import prodListShow from '~/components/common/prodListShow'
  import indexNewsListShow from '~/components/common/indexNewsListShow'
  
  export default {
    data(){
      return {
        experiencePlace:['包头','成都','南京','东莞'],
        num:0,
        clickProdIndex:0,
        clickNewsIndex: 0,
        videoUrl:'',
        videoModal:false
      }
    },
    components: {
      AppLogo,
      VHeader,
      VFooter,
      VBanner,
      BBanner,
      indexVideo,
      prodListShow,
      indexNewsListShow,
      Video
    },
    head () {
      return {
        title:'aiyou',
        meta: [
          {name:'keywords',hid: 'keywords',content:`云麦,YUNMAI,好轻,云麦筋膜枪,云麦智能手表,云麦智能跳绳,云麦体脂秤,云麦好轻,云麦好轻Pro,云麦好轻Color2,云麦好轻mini2,云麦腕力球,云麦弹力圈,云麦瑜伽垫,体脂秤,筋膜枪,瑜伽,腕力球,体脂称`},
          {name:'description',hid:'description',content:`云麦科技旗下所有产品，包括云麦筋膜枪系列YUNMAI按摩筋膜枪PB、YUNMAI按摩筋膜枪SC，云麦体脂秤系列云麦好轻2、云麦好轻Pro、云麦好轻Color2、云麦好轻mini2，智能穿戴系列YUNMAI智能训练手表、YUNMAI智能跳绳，瑜伽系列瑜伽垫、瑜伽球、瑜伽砖、瑜伽柱、泡沫轴、瑜伽袜，运动服饰系列运动内衣、运动紧身裤等，运动装备系列运动跳绳、运动臂包、运动腰包、运动护膝、运动护肘、运动护腕、健力环、弹力带、阻力圈、握力圈等，同时提供云麦客户服务及售后支持`}
        ]
      }
    },
    async asyncData({params,store}){
      //banner数据动态获取
      let banner = await axios.post(`${store.state.aiuAPI}/rest/api/display/v1/find-by-keys`,
        ['main_carouselFigure']
      );
      // let productList = await axios.post(`${store.state.aiuAPI}/rest/api/product/v1/query/list`,{
      //   asc:true,
      //   sortName:"sortForHome",
      // })
      let appList = await axios.get(`${store.state.aiuAPI}/rest/api/app/v1/list/all`)
      return {
        banner:banner.data.data.main_carouselFigure.pictures,
        // productList:productList.data.data.list,
        appList:appList.data.data
        // backgroundList:background.data.data.list
      } 
    },
    computed: {
			...mapState(['productList'])
		},
    methods: {
      shopLink(item){
        window.open(item.mallLink,'_target')
      },
      watchVideo(item){
        this.videoUrl = this.$store.state.aiuSRC+item.video.filePath
        this.videoModal = true
        console.log('this.videoUrl',this.videoUrl)
      },
      closeModal(){
        this.videoModal = false
      },
      linkTo(item){
				console.log('item',item)
				if(item.remark){
					window.open(item.remark)
				}
			}
    },
    mounted(){
      console.log('productList',this.productList)
    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
    height: auto;
    background: #fff;
  }
  .product{
    position:relative;
    /* height:65vw; */
    overflow: hidden;
    
  }
  .product-all{
    position:absolute;
    background:rgba(0, 0, 0, 0.2);
    color: #fff;
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .type1 .product-all .main{
    width:500px;
    text-align: center;
  }
  .product-all .main .name{
    font-size:27px;
  }
  .type1 .product-all .main .desc{
    
    /* font-size: 18px;
    font-weight: 100;
    width:50%;
    margin:0 auto;
    margin-top:20px;
    letter-spacing: 2px; */

    font-weight: 100;
    font-size:18px;
    margin-top:10px;
    letter-spacing: 2px;
  }
  .product-all .main .link{
    font-size: 14px;
    font-weight: 400;
    color: #FE841C;
    display: flex;
    justify-content: center;
  }
  .product-all .main .link>a{
    margin-left:10px;
    margin-right:30px;
    cursor: pointer;
  }
  .type1 .product-all .main .link{
    margin-top:10px;
    /* margin-bottom:3vw; */
  }
  .type1 .product-all .main .link>a{
    margin-left:10px;
    margin-right:20px;
  }
  .type1 .product-all .img-video{
    width:97vw;
    margin:0 1.5vw;
    margin-bottom:1vw;
    height:48vw;
    
    /* display: flex;
    justify-content: space-between;
    padding: 0 157.5px;
    box-sizing: border-box;
    position: absolute;
    bottom:80px; */
  }
  .type1 .product-all .img-video>img,audio{
    width: 100%;
    height:100%;
    border-radius: 1vw;
    /* margin-right: 0 210px; */
  }
  .type-top{
    display: flex;
    justify-content: center;
    position:relative;
    
    padding: 3vw 10vw;
    color:#fff;
  }
  .type2 .product-all .type-top>img{
    width: 442px;
    height:352px;
  }
  .type2 .product-all .main{
    width:500px;
    text-align: center;
  }
  .type2 .product-all .main .desc{
    font-weight: 100;
    font-size:18px;
    margin-top:10px;
    /* text-indent : 32px; */
    letter-spacing: 2px;
    
  } 
  .desc{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .type2 .product-all .main .link{
    justify-content:center;
    margin-top:10px;
  }
  .type2 .img-video{
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 0 1.5vw;
    box-sizing: border-box;
    margin-bottom:1.5rem;
  }
  .type2 .img-video>img,audio{
    width: 48vw;
    height:48vw;
    border-radius: 1vw;
  }
  .product-img{
    width:100%;
    height: 65vw;
  }
  .type3 .img-video{
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
  }
  .type3 .img-video>img{
    width: 49.5vw;
    height:42.5vw;
    margin-top:1vw;
  }
  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }
  #videoPop{
        width: 100%;
    height: 100%;
    float: left;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.7);
    z-index: 999999999;
  }
  .box{
    height: 100%;
    position: relative;
  }
</style>
