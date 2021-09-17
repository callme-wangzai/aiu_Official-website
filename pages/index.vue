<template>
  <section class="container">
      <!-- banner -->
      <VBanner :banner="banner"></VBanner>
      <!-- 产品展示 -->
      <div :id="'product'+index" v-for="(item,index) in productList" :key="index">
        <div class="product type1" v-if="item.renderType===1">
          <div class="product-all">
            <div class="main">
              <div class="name">{{item.name}}</div>
              <div class="desc">{{item.desc}}</div>
              <div class="link">
                <a @click="watchVideo(item)">观看视频 ></a>
                <a @click="shopLink(item)">立即购买 ></a>
              </div>
            </div>
            <div class="img-video">
              <img v-lazy="$store.state.aiuSRC+item.files[0].filePath" alt="">
              <img v-lazy="$store.state.aiuSRC+item.files[1].filePath" alt="">
              <img v-lazy="$store.state.aiuSRC+item.files[2].filePath" alt="">
              <!-- <audio v-lazy="$store.state.aiuSRC+item.video.filePath"></audio> -->
            </div>
          </div>
          <img class="product-img" v-if="item.backgrounds[0]" v-lazy="$store.state.aiuSRC+item.carouselFigure[0].filePath" alt="">
        </div>
        <div class="product type2" v-if="item.renderType===2">
          <div class="product-all">
            <div class=type2-top>
              <img v-lazy="$store.state.aiuSRC+item.files[0].filePath" alt="">
              <div class="main">
                <div class="name">{{item.name}}</div>
                <div class="desc">{{item.desc}}</div>
                <div class="link">
                  <a @click="watchVideo(item)">观看视频 ></a>
                  <a @click="shopLink(item)">立即购买 ></a>
                </div>
              </div>
            </div>
            <div class="img-video">
              <img v-lazy="$store.state.aiuSRC+item.files[1].filePath" alt="">
              <img v-lazy="$store.state.aiuSRC+item.files[2].filePath" alt="">
              <img v-lazy="$store.state.aiuSRC+item.files[3].filePath" alt="">
            </div>
          </div>
          <img class="product-img" v-if="item.backgrounds[0]" v-lazy="$store.state.aiuSRC+item.carouselFigure[0].filePath" alt="">
        </div>
        <!-- <div class="product type3" v-if="index%3===2">
          <div class="product-all">{{item.name}}</div>
          <img class="product-img" v-if="item.carouselFigure[0]" v-lazy="$store.state.aiuSRC+item.carouselFigure[0].filePath" alt="">
        </div> -->
        <div class="product type3" v-if="item.renderType===3">
          <div class="product-all">
            <div class="contain">
              <div class="main">
                <div class="name">{{item.name}}</div>
                <div class="desc">{{item.desc}}</div>
                <div class="link">
                  <a @click="watchVideo(item)">观看视频 ></a>
                  <a @click="shopLink(item)">立即购买 ></a>
                </div>
              </div>
              <div class="img">
                <img v-lazy="$store.state.aiuSRC+item.files[0].filePath" alt="">
              </div>
              <div class="img">
                <img v-lazy="$store.state.aiuSRC+item.files[1].filePath" alt="">
              </div>
            </div>
            
          </div>
          <img class="product-img" v-if="item.backgrounds[0]" v-lazy="$store.state.aiuSRC+item.carouselFigure[0].filePath" alt="">
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
      //首页head信息
      let metaData = await axios(`${store.state.wordpressAPI}/NavigationMeta/get/1`);
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
        metaData: metaData.data,
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
      }
    },
    mounted(){

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
  }
  .product-all{
    position:absolute;
    background:rgba(0, 0, 0, 0.6);
    color: #fff;
    width:100%;
    height: 100%;
  }
  .type1 .product-all .main{
    margin-top:133.5px;
    padding: 0 157.5px;
  }
  .product-all .main .name{
    font-size:27px;
  }
  .type1 .product-all .main .desc{
    margin-top:20px;
    font-size: 18px;
    font-weight: 100;
    width:50%;
  }
  .product-all .main .link{
    font-size: 14px;
    font-weight: 400;
    color: #FE841C;
    display: flex;
  }
  .product-all .main .link>a{
    margin-left:10px;
    margin-right:30px;
    cursor: pointer;
  }
  .type1 .product-all .main .link{
    margin-top:40px;
  }
  .type1 .product-all .main .link>a{
    margin-left:10px;
    margin-right:20px;
  }
  .type1 .product-all .img-video{
    width:100%;
    display: flex;
    justify-content: space-between;
    padding: 0 157.5px;
    box-sizing: border-box;
    position: absolute;
    bottom:80px;
  }
  .type1 .product-all .img-video>img,audio{
    width: 345px;
    height:193.5px;
    /* margin-right: 0 210px; */
  }
  .type2 .type2-top{
    display: flex;
    justify-content: space-between;
    position:relative;
    
    padding: 50px 157.5px;
    color:#fff;
  }
  .type2 .product-all .type2-top>img{
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
    margin-top:20px;
  } 
  .type2 .product-all .main .link{
    justify-content:center;
    margin-top:40px;
  }
  .type2 .img-video{
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 0 157.5px;
    box-sizing: border-box;
    /* position: absolute; */
    /* height:100%; */
    /* background:rgba(0, 0, 0, 0.6); */
  }
  .type2 .img-video>img,audio{
    width: 310.5px;
    height:310.5px;
    border-radius: 155.25px;
  }
  .type3 .contain{
    position:absolute;
    right:80px;
    bottom:30.75px;
    color:#fff;
  }
  
  .type3 .product-all .img>img{
    margin-bottom:28.5px;
    width: 547.5px;
    height:195px;
  }
  .type3 .product-all .main{
    margin-bottom:42px;
    width: 547.4px;
    text-align: center;
  }
  .type3 .product-all .main .desc{
    font-size: 18px;
    font-weight: 100;
    margin-top:10px;
  }
  .type3 .product-all .main .link{
    margin-top:10px;
    justify-content:center;
  }
  .type3 .product-all .main .link>a{
    margin-left:20px;
    margin-right:20px;
  }
  .product-img{
    /* position:absolute; */
    
    width:100%;
    height: 810px;
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
