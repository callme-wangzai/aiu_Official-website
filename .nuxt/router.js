import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _d9d8874c = () => import('../pages/brand/index.vue' /* webpackChunkName: "pages/brand/index" */).then(m => m.default || m)
const _7a80df24 = () => import('../pages/experice/index.vue' /* webpackChunkName: "pages/experice/index" */).then(m => m.default || m)
const _1993ff10 = () => import('../pages/job/index.vue' /* webpackChunkName: "pages/job/index" */).then(m => m.default || m)
const _7281224d = () => import('../pages/join/index.vue' /* webpackChunkName: "pages/join/index" */).then(m => m.default || m)
const _3cd1fd6c = () => import('../pages/leader/index.vue' /* webpackChunkName: "pages/leader/index" */).then(m => m.default || m)
const _05eede94 = () => import('../pages/news/index.vue' /* webpackChunkName: "pages/news/index" */).then(m => m.default || m)
const _3310578c = () => import('../pages/prod/index.vue' /* webpackChunkName: "pages/prod/index" */).then(m => m.default || m)
const _375f83f0 = () => import('../pages/sitemap/index.vue' /* webpackChunkName: "pages/sitemap/index" */).then(m => m.default || m)
const _45baf41a = () => import('../pages/experice/bt/index.vue' /* webpackChunkName: "pages/experice/bt/index" */).then(m => m.default || m)
const _d2ee017c = () => import('../pages/experice/cd/index.vue' /* webpackChunkName: "pages/experice/cd/index" */).then(m => m.default || m)
const _5ce8bce4 = () => import('../pages/experice/dg/index.vue' /* webpackChunkName: "pages/experice/dg/index" */).then(m => m.default || m)
const _68874add = () => import('../pages/experice/nj/index.vue' /* webpackChunkName: "pages/experice/nj/index" */).then(m => m.default || m)
const _4529d146 = () => import('../pages/job/search/index.vue' /* webpackChunkName: "pages/job/search/index" */).then(m => m.default || m)
const _cc309810 = () => import('../pages/prod/newPro/index.vue' /* webpackChunkName: "pages/prod/newPro/index" */).then(m => m.default || m)
const _f434f72c = () => import('../pages/service/aftersales.vue' /* webpackChunkName: "pages/service/aftersales" */).then(m => m.default || m)
const _664a8cd6 = () => import('../pages/service/contact.vue' /* webpackChunkName: "pages/service/contact" */).then(m => m.default || m)
const _210c2803 = () => import('../pages/service/presales.vue' /* webpackChunkName: "pages/service/presales" */).then(m => m.default || m)
const _48b987fa = () => import('../pages/service/questions.vue' /* webpackChunkName: "pages/service/questions" */).then(m => m.default || m)
const _58793e6b = () => import('../pages/job/jobView/_id.vue' /* webpackChunkName: "pages/job/jobView/_id" */).then(m => m.default || m)
const _0689188f = () => import('../pages/news/newsView/_id.vue' /* webpackChunkName: "pages/news/newsView/_id" */).then(m => m.default || m)
const _39e5be16 = () => import('../pages/prod/pdV/_id.vue' /* webpackChunkName: "pages/prod/pdV/_id" */).then(m => m.default || m)
const _59d600ae = () => import('../pages/job/_classId/index.vue' /* webpackChunkName: "pages/job/_classId/index" */).then(m => m.default || m)
const _2b3976f8 = () => import('../pages/news/_category/index.vue' /* webpackChunkName: "pages/news/_category/index" */).then(m => m.default || m)
const _21dbaeff = () => import('../pages/prod/_typeId/index.vue' /* webpackChunkName: "pages/prod/_typeId/index" */).then(m => m.default || m)
const _6c778720 = () => import('../pages/service/_id.vue' /* webpackChunkName: "pages/service/_id" */).then(m => m.default || m)
const _0c6d3a3c = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/brand",
			component: _d9d8874c,
			name: "brand"
		},
		{
			path: "/experice",
			component: _7a80df24,
			name: "experice"
		},
		{
			path: "/job",
			component: _1993ff10,
			name: "job"
		},
		{
			path: "/join",
			component: _7281224d,
			name: "join"
		},
		{
			path: "/leader",
			component: _3cd1fd6c,
			name: "leader"
		},
		{
			path: "/news",
			component: _05eede94,
			name: "news"
		},
		{
			path: "/prod",
			component: _3310578c,
			name: "prod"
		},
		{
			path: "/sitemap",
			component: _375f83f0,
			name: "sitemap"
		},
		{
			path: "/experice/bt",
			component: _45baf41a,
			name: "experice-bt"
		},
		{
			path: "/experice/cd",
			component: _d2ee017c,
			name: "experice-cd"
		},
		{
			path: "/experice/dg",
			component: _5ce8bce4,
			name: "experice-dg"
		},
		{
			path: "/experice/nj",
			component: _68874add,
			name: "experice-nj"
		},
		{
			path: "/job/search",
			component: _4529d146,
			name: "job-search"
		},
		{
			path: "/prod/newPro",
			component: _cc309810,
			name: "prod-newPro"
		},
		{
			path: "/service/aftersales",
			component: _f434f72c,
			name: "service-aftersales"
		},
		{
			path: "/service/contact",
			component: _664a8cd6,
			name: "service-contact"
		},
		{
			path: "/service/presales",
			component: _210c2803,
			name: "service-presales"
		},
		{
			path: "/service/questions",
			component: _48b987fa,
			name: "service-questions"
		},
		{
			path: "/job/jobView/:id?",
			component: _58793e6b,
			name: "job-jobView-id"
		},
		{
			path: "/news/newsView/:id?",
			component: _0689188f,
			name: "news-newsView-id"
		},
		{
			path: "/prod/pdV/:id?",
			component: _39e5be16,
			name: "prod-pdV-id"
		},
		{
			path: "/job/:classId",
			component: _59d600ae,
			name: "job-classId"
		},
		{
			path: "/news/:category",
			component: _2b3976f8,
			name: "news-category"
		},
		{
			path: "/prod/:typeId",
			component: _21dbaeff,
			name: "prod-typeId"
		},
		{
			path: "/service/:id?",
			component: _6c778720,
			name: "service-id"
		},
		{
			path: "/",
			component: _0c6d3a3c,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
