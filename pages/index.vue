<template>
  <section class="container">
      <!-- banner -->
      <VBanner :bannerData="bannerData" :bannerNew="bannerNew"></VBanner>
      <!-- 产品展示 -->
      <div v-for="(item,index) in productList" :key="index">
        <div class="product type1" v-if="index===0">
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
        <div class="product type2" v-if="index===1">
          <div class="product-all">{{item.name}}</div>
          <img class="product-img" v-if="item.carouselFigure[0]" :src="$store.state.aiuSRC+item.carouselFigure[0].filePath" alt="">
        </div>
        <div class="product type3" v-if="index===2">
          <div class="product-all">{{item.name}}</div>
          <img class="product-img" v-if="item.carouselFigure[0]" :src="$store.state.aiuSRC+item.carouselFigure[0].filePath" alt="">
        </div>
        <div class="product type4" v-if="index===3">
          <div class="product-all">{{item.name}}</div>
          <img class="product-img" v-if="item.carouselFigure[0]" :src="$store.state.aiuSRC+item.carouselFigure[0].filePath" alt="">
        </div>
        <!-- <div style="color:#fff;">{{item.name}}==={{index}}</div> -->
        <!-- <img :src="item.files[0]?$store.state.aiuSRC+item.files[0].filePath:''" alt=""> -->
        
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

  export default {
    data(){
      return {
        experiencePlace:['包头','成都','南京','东莞'],
        num:0,
        clickProdIndex:0,
        clickNewsIndex: 0
      }
    },
    components: {
      AppLogo,
      VHeader,
      VFooter,
      VBanner,
      indexVideo,
      prodListShow,
      indexNewsListShow
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
      tab (index){
        this.num = index;
      },
      getProdList (index){
        this.clickProdIndex = index;
      },
      getNewsList (index){
        this.clickNewsIndex = index;
      }

    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
    height: auto;
  }
  .product{
    position:relative;
  }
  .product-all{
    position:absolute;
    width:100%;
    height: 100%;
    
  }
  .type1 .product-all{
    background:rgba(0, 0, 0, 0.8);
    color: #fff;
    
  }
  .type1 .product-all .main{
    margin-top:178px;
    padding: 0 210px;
  }
  .type1 .product-all .main .name{
    font-size:36px;
  }
  .type1 .product-all .main .desc{
    margin-top:20px;
    font-size: 24px;
    font-weight: 400;
    width:50%;
  }
  .type1 .product-all .main .link{
    font-size: 18px;
    font-weight: 400;
    margin-top:40px;
    color: #FE841C;
    display: flex;
    
  }
  .type1 .product-all .main .link>a{
    margin-left:10px;
    margin-right:30px;
    cursor: pointer;
  }
  .type1 .product-all .img-video{
    width:100%;
    display: flex;
    justify-content: space-between;
    padding: 0 210px;
    box-sizing: border-box;
    position: absolute;
    bottom:80px;
  }
  .type1 .product-all .img-video>img,audio{
    width: 230px;
    height:129px;
    /* margin-right: 0 210px; */
  }
  .product-img{
    /* position:absolute; */
    
    width:100%;
    height: auto;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }
  
</style>
