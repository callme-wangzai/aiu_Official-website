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
    }
  },
  mounted() {
    // console.log('this is current player instance object', this.myVideoPlayer)
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