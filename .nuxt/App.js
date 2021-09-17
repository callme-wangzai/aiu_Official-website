import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '../assets/css/reset.css'

import '../node_modules/video.js/dist/video-js.css'


let layouts = {

  "_default": () => import('../layouts/default.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default || m)

}

let resolvedLayouts = {}

export default {
  head: {"title":"aiu","meta":[{"name":"renderer","content":"webkit"},{"name":"force-rendering","content":"webkit"},{"http-equiv":"X-UA-Compatible","content":"IE=Edge,chrome=1"},{"name":"baidu-site-verification","content":"mREHhDF8nW"},{"charset":"utf-8"},{"hid":"description","name":"description","content":"爱柚"},{"name":"format-detection","content":"telephone=no"},{"name":"viewport","content":"width=device-width, initial-scale=1.0, user-scalable=no"},{"name":"360-site-verification","content":"850970beabd63bd397272b6dd73a1aba"},{"name":"sogou_site_verification","content":"y3fi8ttkxP"},{"name":"shenma-site-verification","content":"15230d9dfb2e66bfecf2408862f2462c_1537497601"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.jpeg"}],"script":[{"src":"http:\u002F\u002Fapi.map.baidu.com\u002Fapi?v=2.0&ak=MDdqxkqhQzfdBzfu2tfGiidGbHgTfGrB"}],"style":[]},
  render(h, props) {
    const loadingEl = h('nuxt-loading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      }
    }, [ templateEl ])

    return h('div',{
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (typeof window !== 'undefined') {
      window.$nuxt = this
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },
  
  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },
  
  methods: {
    
    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },
    
    setLayout (layout) {
      if (!layout || !resolvedLayouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = resolvedLayouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !(layouts['_' + layout] || resolvedLayouts['_' + layout])) layout = 'default'
      let _layout = '_' + layout
      if (resolvedLayouts[_layout]) {
        return Promise.resolve(resolvedLayouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        resolvedLayouts[_layout] = Component
        delete layouts[_layout]
        return resolvedLayouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
      })
    }
  },
  components: {
    NuxtLoading
  }
}

