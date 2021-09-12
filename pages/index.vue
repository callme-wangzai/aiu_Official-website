<template>
  <section class="container">
      <!-- banner -->
      <VBanner :bannerData="bannerData" :bannerNew="bannerNew"></VBanner>
      <!-- 产品展示 -->
      <div v-for="(item,index) in productList" :key="index">
        <div class="product type1" v-if="index%3===0">
          <div class="product-all">
            <div class="main">
              <div class="name">{{item.name}}</div>
              <div class="desc">{{item.desc}}</div>
              <div class="link">
                <a>观看视频 ></a>
                <a>立即购买 ></a>
              </div>
            </div>
            <div class="img-video">
              <img :src="$store.state.aiuSRC+item.files[0].filePath" alt="">
              <img :src="$store.state.aiuSRC+item.files[1].filePath" alt="">
              <img :src="$store.state.aiuSRC+item.files[1].filePath" alt="">
              <!-- <audio :src="$store.state.aiuSRC+item.video.filePath"></audio> -->
            </div>
            
          </div>
          <img class="product-img" v-if="item.carouselFigure[0]" :src="$store.state.aiuSRC+item.carouselFigure[0].filePath" alt="">
        </div>
        <div class="product type2" v-if="index%3===1">
          <div class="product-all">
            <div class=type2-top>
              <img :src="$store.state.aiuSRC+item.files[0].filePath" alt="">
              <div class="main">
                <div class="name">{{item.name}}</div>
                <div class="desc">{{item.desc}}</div>
                <div class="link">
                  <a>观看视频 ></a>
                  <a>立即购买 ></a>
                </div>
              </div>
            </div>
            <div class="img-video">
              <img :src="$store.state.aiuSRC+item.files[0].filePath" alt="">
              <img :src="$store.state.aiuSRC+item.files[1].filePath" alt="">
              <img :src="$store.state.aiuSRC+item.files[1].filePath" alt="">
            </div>
          </div>
          <img class="product-img" v-if="item.carouselFigure[0]" :src="$store.state.aiuSRC+item.carouselFigure[0].filePath" alt="">
        </div>
        <!-- <div class="product type3" v-if="index%3===2">
          <div class="product-all">{{item.name}}</div>
          <img class="product-img" v-if="item.carouselFigure[0]" :src="$store.state.aiuSRC+item.carouselFigure[0].filePath" alt="">
        </div> -->
        <div class="product type3" v-if="index%3===2">
          <div class="product-all">
            <div class="contain">
              <div class="main">
                <div class="name">{{item.name}}</div>
                <div class="desc">{{item.desc}}</div>
                <div class="link">
                  <a>观看视频 ></a>
                  <a>立即购买 ></a>
                </div>
              </div>
              <div class="img">
                <img :src="$store.state.aiuSRC+item.files[0].filePath" alt="">
              </div>
              <div class="img">
                <img :src="$store.state.aiuSRC+item.files[1].filePath" alt="">
              </div>
            </div>
          </div>
          <img class="product-img" v-if="item.carouselFigure[0]" :src="$store.state.aiuSRC+item.carouselFigure[0].filePath" alt="">
        </div>
        <!-- <div style="color:#fff;">{{item.name}}==={{index}}</div> -->
        <!-- <img :src="item.files[0]?$store.state.aiuSRC+item.files[0].filePath:''" alt=""> -->
        
      </div>
      <!-- 首页底部 -->
      <div class="banner">
        <div class="banner-main">
          <img class="white_logo" src="~/assets/images/index/logo_white.jpg" alt="">
          <div class="name">APP</div>
          <div class="title">运动使我快乐</div>
          <div class="code">
            <!-- 微信二维码 -->
            <div class="code-detail">
              <vue-qr :logoSrc="imageUrl" :text="weixinCode" :size="150"></vue-qr>
              <div class="code-name">微信二维码</div>
            </div>
            <!-- app二维码 -->
            <div class="code-detail">
              <vue-qr :logoSrc="imageUrl" :text="appCode" :size="150"></vue-qr>
              <div class="code-name">APP二维码</div>
            </div>
          </div>
        </div>
        <img src="~/assets/images/index/banner.png" alt="">
      </div>
  </section>
</template>
<script>
  import axios from 'axios'
  import AppLogo from '~/components/AppLogo.vue'
  import VHeader from '~/components/home/header'
  import VFooter from '~/components/home/footer'
  import VBanner from '~/components/home/banner'
  import indexVideo from '~/components/home/indexVideo'
  import prodListShow from '~/components/common/prodListShow'
  import indexNewsListShow from '~/components/common/indexNewsListShow'
  import vueQr from 'vue-qr'
  export default {
    data(){
      return {
        experiencePlace:['包头','成都','南京','东莞'],
        num:0,
        clickProdIndex:0,
        clickNewsIndex: 0,
        imageUrl: require("~/assets/images/index/TThome-logo.png"),
        weixinCode:'www.weixin.com',
        appCode:'www.aiyou.com'
      }
    },
    components: {
      AppLogo,
      VHeader,
      VFooter,
      VBanner,
      indexVideo,
      prodListShow,
      indexNewsListShow,
      vueQr
    },
    head () {
      return {
        title:this.metaData.navigationTitle,
        meta: [
          {name:'keywords',hid: 'keywords',content:`${this.metaData.navigationKeyword}`},
          {name:'description',hid:'description',content:`${this.metaData.navigationDescription}`}
        ]
      }
    },
    async asyncData({params,store}){
      //首页head信息
      let metaData = await axios(`${store.state.wordpressAPI}/NavigationMeta/get/1`);
      //banner数据动态获取
      let banner = await axios(`${store.state.wordpressAPI}/banner/selectAllByTpye/1`);
      let bannerNew =await axios.post(`${store.state.aiuAPI}/rest/api/file/v1/query/list`,{
        request:{
          fileName:"mainBanner"
        }
      })
      // let background =await axios.post(`${store.state.aiuAPI}/rest/api/file/v1/query/list`,{
      //   request:{
      //     fileName:"背景"
      //   }
      // })
      let productList = await axios.post(`${store.state.aiuAPI}/rest/api/product/v1/query/list`,{
        // request:{
          // asc:true,
          // sortName:"sortForHome",
          // name:"枪",
          // title:"test"
        // }
      })

      return {
        metaData: metaData.data,
        bannerData: banner.data,
        bannerNew:bannerNew.data.data.list[0],
        productList:productList.data.data.list,
        // backgroundList:background.data.data.list
      } 
    },
    methods: {

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
    background: green;
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
    background: green;
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
  .banner{
    width:100%;
    position: relative;
  }
  .banner .banner-main{
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    text-align: right;
    padding-right: 157.5px;
    padding-top:275.25px;
    box-sizing: border-box;
  }
  .banner-main .white_logo{
    width:307.5px;
  }
  .banner-main .name{
    color: #9f9f9f;
    font-size:54px;
  }
  .banner-main .code{
    
    display: flex;
    flex-direction:row-reverse;
  }
  .banner-main .code .code-detail{
    margin-top:50px;
    margin-left:20px;
  }
  .banner-main .code .code-name{
    color: #9f9f9f;
    text-align: center;
    margin-top:10px;
  }
  .banner-main .title{
    font-size: 14px;
    color: #9f9f9f;
  }
  .banner>img{
    width:100%;
    /* height: 100%; */
  }
</style>
