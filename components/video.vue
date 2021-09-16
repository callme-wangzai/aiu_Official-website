<template>
    <section class="video">
        <video controls="controls">
            <source src="movie.ogg" type="video/ogg" />
            <source :src="videoSrc" type="video/mp4" />
          </video>
        <span class="close-icon" @click="close"> X </span>
    </section>
</template>
<script>
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
export default {
    props: {
      videoSrc: {// 数据总条数
        type: String,
        default: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm'
      },
    },
  data() {
    return {
      playsinline: true,
      playerOptions: {
        // 播放器配置
        muted: false, // 是否静音
        language: 'zh-CN',
        // aspectRatio: '16:9',
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        controls: true,
        preload: 'auto', // 视频预加载
        fluid: true,
        sources: [
          {
             type: 'video/mp4',
             src:'http://47.106.86.150:8083/img/video/2f61d229521b480eb51f6f0748c11b3d_1630835861473.mp4'
           }
        ],
        poster: 'http://47.106.86.150:8083/img/picture/aba2d8494a8d4f9bbfda31e776ce12c9_1631114275350.png', // 封面图
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        controlBar : {
                timeDivider : true,//当前时间和持续时间的分隔符
                durationDisplay : true,//显示持续时间
                remainingTimeDisplay : false,//是否显示剩余时间功能
                fullscreenToggle : true  //全屏按钮
            }
      }
    }
  },
  mounted() {
    //   this.playerOptions.sources[0].src = this.myVideoPlayer
    console.log('this is current player instance object', this.myVideoPlayer)
  },
  methods: {
    close(){
        this.$emit('closeModal',{})
    },
  }
}
</script>

<style scoped>
.video {
    text-align: center;
    width: 100%;
    position: relative;
    top: 50%;
    margin-top:-350px;
} 
.video>video{
    height: 700px;
}
.close-icon{
    color: #fff;
    /* width: 17px;
    height: 17px; */
    position: absolute;
    top: 0;
    margin-left:-12px;
    cursor: pointer;
}
</style>