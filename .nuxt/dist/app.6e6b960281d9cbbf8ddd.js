webpackJsonp([28],{"0F0d":function(t,e,n){"use strict";e.a={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default&&this.$slots.default[0]:t("div",{class:["no-ssr-placeholder"]},this.$slots.placeholder||this.placeholder)}}},"4Atj":function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="4Atj"},"8Hug":function(t,e){},EDs6:function(t,e){},F88d:function(t,e,n){"use strict";var r=n("n+J3"),o=n("P+aQ"),a=!1;var i=function(t){a||n("vkpq")},u=n("VU/8")(r.a,o.a,!1,i,null,null);u.options.__file=".nuxt/components/nuxt-loading.vue",e.a=u.exports},"HBB+":function(t,e,n){"use strict";e.a={name:"nuxt-child",functional:!0,props:["keepAlive"],render:function(t,e){var n=e.parent,a=e.data,i=e.props;a.nuxtChild=!0;for(var u=n,s=n.$nuxt.nuxt.transitions,c=n.$nuxt.nuxt.defaultTransition,f=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&f++,n=n.$parent;a.nuxtChildDepth=f;var d=s[f]||c,p={};r.forEach(function(t){void 0!==d[t]&&(p[t]=d[t])});var l={};o.forEach(function(t){"function"==typeof d[t]&&(l[t]=d[t].bind(u))});var h=l.beforeEnter;l.beforeEnter=function(t){if(window.$nuxt.$emit("triggerScroll"),h)return h.call(u,t)};var m=[t("router-view",a)];return void 0!==i.keepAlive&&(m=[t("keep-alive",m)]),t("transition",{props:p,on:l},m)}};var r=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],o=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"]},"Hot+":function(t,e,n){"use strict";var r=n("/5sW"),o=n("HBB+"),a=n("To1F"),i=n("YLfZ");e.a={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(i.b)(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:o.a,NuxtError:a.a}}},J1QK:function(t,e,n){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[404===this.error.statusCode?e("div",{staticClass:"page"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"http://img.binlive.cn/upload/1525013647902",alt:""}})])],1):e("div",{staticClass:"page"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"http://img.binlive.cn/upload/1525016935287",alt:""}})])],1)])};r._withStripped=!0;var o={render:r,staticRenderFns:[]};e.a=o},J2Ti:function(t,e,n){"use strict";n.d(e,"a",function(){return g});var r=n("woOf"),o=n.n(r),a=n("BO1k"),i=n.n(a),u=n("/5sW"),s=n("NYxO");u.default.use(s.default);var c=n("QA5y"),f=c.keys(),d={},p=void 0;if(f.forEach(function(t){-1!==t.indexOf("./index.")&&(p=t)}),p&&(d=_(p)),"function"!=typeof d){d.modules||(d.modules={});var l=!0,h=!1,m=void 0;try{for(var v,x=i()(f);!(l=(v=x.next()).done);l=!0){var y=v.value,b=y.replace(/^\.\//,"").replace(/\.(js)$/,"");if("index"!==b){var w=b.split(/\//);(t=C(d,w))[b=w.pop()]=_(y),t[b].namespaced=!0}}}catch(t){h=!0,m=t}finally{try{!l&&x.return&&x.return()}finally{if(h)throw m}}}var g=d instanceof Function?d:function(){return new s.default.Store(o()({strict:!1},d,{state:d.state instanceof Function?d.state():{}}))};function _(t){var e=c(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function C(t,e){if(1===e.length)return t.modules;var n=e.shift();return t.modules[n]=t.modules[n]||{},t.modules[n].namespaced=!0,t.modules[n].modules=t.modules[n].modules||{},C(t.modules[n],e)}},"P+aQ":function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})};r._withStripped=!0;var o={render:r,staticRenderFns:[]};e.a=o},QA5y:function(t,e,n){var r={"./index.js":"vdRI"};function o(t){return n(a(t))}function a(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="QA5y"},T23V:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o,a,i=n("pFYg"),u=n.n(i),s=n("//Fk"),c=n.n(s),f=n("Xxa5"),d=n.n(f),p=n("mvHQ"),l=n.n(p),h=n("exGp"),m=n.n(h),v=n("fZjL"),x=n.n(v),y=n("woOf"),b=n.n(y),w=n("/5sW"),g=n("unZF"),_=n("qcny"),C=n("YLfZ"),k=(r=m()(d.a.mark(function t(e,n,r){var o,a,i=this;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!R.nuxt.err||n.path!==e.path,this._queryChanged=l()(e.query)!==l()(n.query),this._diffQuery=this._queryChanged?Object(C.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,Object(C.k)(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},a=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:a,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])})),function(t,e,n){return r.apply(this,arguments)}),$=(o=m()(d.a.mark(function t(e,n,r){var o,a,i,u,s,f,p,l,h=this;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return o=!1,a=function(t){if(n.path===t.path&&h.$loading.finish&&h.$loading.finish(),n.path!==t.path&&h.$loading.pause&&h.$loading.pause(),!o){o=!0;var e=[];E=Object(C.e)(n,e).map(function(t,r){return Object(C.b)(n.matched[e[r]].path)(n.params)}),r(t)}},t.next=6,Object(C.m)(R,{route:e,from:n,next:a.bind(this)});case 6:if(this._dateLastError=R.nuxt.dateErr,this._hadError=!!R.nuxt.err,i=[],(u=Object(C.e)(e,i)).length){t.next=24;break}return t.next=13,I.call(this,u,R.context);case 13:if(!o){t.next=15;break}return t.abrupt("return");case 15:return t.next=17,this.loadLayout("function"==typeof _.a.layout?_.a.layout(R.context):_.a.layout);case 17:return s=t.sent,t.next=20,I.call(this,u,R.context,s);case 20:if(!o){t.next=22;break}return t.abrupt("return");case 22:return R.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 24:return u.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(q(u,e,n)),t.prev=26,t.next=29,I.call(this,u,R.context);case 29:if(!o){t.next=31;break}return t.abrupt("return");case 31:if(!R.context._errored){t.next=33;break}return t.abrupt("return",r());case 33:return"function"==typeof(f=u[0].options.layout)&&(f=f(R.context)),t.next=37,this.loadLayout(f);case 37:return f=t.sent,t.next=40,I.call(this,u,R.context,f);case 40:if(!o){t.next=42;break}return t.abrupt("return");case 42:if(!R.context._errored){t.next=44;break}return t.abrupt("return",r());case 44:if(p=!0,u.forEach(function(t){p&&"function"==typeof t.options.validate&&(p=t.options.validate({params:e.params||{},query:e.query||{},store:T}))}),p){t.next=49;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 49:return t.next=51,c.a.all(u.map(function(t,n){if(t._path=Object(C.b)(e.matched[i[n]].path)(e.params),t._dataRefresh=!1,h._pathChanged&&t._path!==E[n])t._dataRefresh=!0;else if(!h._pathChanged&&h._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return h._diffQuery[t]}))}if(!h._hadError&&h._isMounted&&!t._dataRefresh)return c.a.resolve();var o=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,u=!!t.options.fetch,s=a&&u?30:45;if(a){var f=Object(C.j)(t.options.asyncData,R.context).then(function(e){Object(C.a)(t,e),h.$loading.increase&&h.$loading.increase(s)});o.push(f)}if(u){var d=t.options.fetch(R.context);d&&(d instanceof c.a||"function"==typeof d.then)||(d=c.a.resolve(d)),d.then(function(t){h.$loading.increase&&h.$loading.increase(s)}),o.push(d)}return c.a.all(o)}));case 51:o||(this.$loading.finish&&this.$loading.finish(),E=u.map(function(t,n){return Object(C.b)(e.matched[i[n]].path)(e.params)}),r()),t.next=66;break;case 54:return t.prev=54,t.t0=t.catch(26),t.t0||(t.t0={}),E=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,"function"==typeof(l=_.a.layout)&&(l=l(R.context)),t.next=63,this.loadLayout(l);case 63:this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 66:case"end":return t.stop()}},t,this,[[26,54]])})),function(t,e,n){return o.apply(this,arguments)}),j=(a=m()(d.a.mark(function t(e){var n,r,o,a;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return R=e.app,A=e.router,T=e.store,t.next=5,c.a.all(L(A));case 5:return n=t.sent,r=new w.default(R),o=O.layout||"default",t.next=10,r.loadLayout(o);case 10:if(r.setLayout(o),a=function(){r.$mount("#__nuxt"),w.default.nextTick(function(){D(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(q(n,A.currentRoute)),E=A.currentRoute.matched.map(function(t){return Object(C.b)(t.path)(A.currentRoute.params)})),r.$loading={},O.error&&r.error(O.error),A.beforeEach(k.bind(r)),A.beforeEach($.bind(r)),A.afterEach(N),A.afterEach(F.bind(r)),!O.serverRendered){t.next=23;break}return a(),t.abrupt("return");case 23:$.call(r,A.currentRoute,A.currentRoute,function(t){if(!t)return N(A.currentRoute,A.currentRoute),P.call(r,A.currentRoute),void a();A.push(t,function(){return a()},function(t){if(!t)return a();console.error(t)})});case 24:case"end":return t.stop()}},t,this)})),function(t){return a.apply(this,arguments)}),E=[],R=void 0,A=void 0,T=void 0,O=window.__NUXT__||{};function q(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=b()({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);x()(o).filter(function(t){return o[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function S(t,e){return O.serverRendered&&e&&Object(C.a)(t,e),t._Ctor=t,t}function L(t){var e,n=this,r=Object(C.d)(t.options.base,t.options.mode);return Object(C.c)(t.match(r),(e=m()(d.a.mark(function t(e,r,o,a,i){var u;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return u=S(Object(C.l)(e),O.data?O.data[i]:null),o.components[a]=u,t.abrupt("return",u);case 7:case"end":return t.stop()}},t,n)})),function(t,n,r,o,a){return e.apply(this,arguments)}))}function I(t,e,n){var r=this,o=[],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof g.a[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),g.a[t])}),!a)return Object(C.i)(o,e)}function N(t,e){Object(C.c)(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":u()(t))||t.options||((t=w.default.extend(t))._Ctor=t,n.components[r]=t),t})}function P(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?_.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(R.context)),this.setLayout(e)}function F(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||w.default.nextTick(function(){Object(C.f)(t,[]).forEach(function(t,e){if(t&&t.constructor._dataRefresh&&E[e]===t.constructor._path&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)w.default.set(t.$data,r,n[r])}}),P.call(n,t)})}function D(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),A.afterEach(function(e,n){w.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}Object(_.b)().then(j).catch(function(t){"ERR_REDIRECT"!==t.message&&console.error("[nuxt] Error while initializing app",t)})},To1F:function(t,e,n){"use strict";var r=n("sjOM"),o=n("J1QK"),a=!1;var i=function(t){a||n("8Hug")},u=n("VU/8")(r.a,o.a,!1,i,"data-v-d5ea9138",null);u.options.__file="layouts/error.vue",e.a=u.exports},WRRc:function(t,e,n){"use strict";e.a={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}}},YLfZ:function(t,e,n){"use strict";e.a=function(t,e){var n=t.options.data||y;if(!e&&t.options.hasAsyncData)return;t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),v()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)},e.l=b,e.e=w,e.f=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))},e.c=g,e.k=_,n.d(e,"h",function(){return $}),n.d(e,"m",function(){return j}),e.i=function t(e,n){if(!e.length||n._redirected||n._errored)return p.a.resolve();return E(e[0],n).then(function(){return t(e.slice(1),n)})},e.j=E,e.d=function(t,e){var n=window.location.pathname;if("hash"===e)return window.location.hash.replace(/^#\//,"");t&&0===n.indexOf(t)&&(n=n.slice(t.length));return(n||"/")+window.location.search+window.location.hash},e.b=function(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===i()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var a="",i=n||{},u=r||{},s=u.pretty?A:encodeURIComponent,c=0;c<t.length;c++){var f=t[c];if("string"!=typeof f){var d,p=i[f.name];if(null==p){if(f.optional){f.partial&&(a+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(Array.isArray(p)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+o()(p)+"`");if(0===p.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var l=0;l<p.length;l++){if(d=s(p[l]),!e[c].test(d))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+o()(d)+"`");a+=(0===l?f.prefix:f.delimiter)+d}}else{if(d=f.asterisk?encodeURI(p).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(p),!e[c].test(d))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+d+'"');a+=f.prefix+d}}else a+=f}return a}}(function(t,e){var n,r=[],o=0,a=0,i="",u=e&&e.delimiter||"/";for(;null!=(n=R.exec(t));){var s=n[0],c=n[1],f=n.index;if(i+=t.slice(a,f),a=f+s.length,c)i+=c[1];else{var d=t[a],p=n[2],l=n[3],h=n[4],m=n[5],v=n[6],x=n[7];i&&(r.push(i),i="");var y=null!=p&&null!=d&&d!==p,b="+"===v||"*"===v,w="?"===v||"*"===v,g=n[2]||u,_=h||m;r.push({name:l||o++,prefix:p||"",delimiter:g,optional:w,repeat:b,partial:y,asterisk:!!x,pattern:_?O(_):x?".*":"[^"+T(g)+"]+?"})}}a<t.length&&(i+=t.substr(a));i&&r.push(i);return r}(t,e))},e.g=function(t,e){var n={},r=v()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n};var r=n("mvHQ"),o=n.n(r),a=n("pFYg"),i=n.n(a),u=n("Xxa5"),s=n.n(u),c=n("exGp"),f=n.n(c),d=n("//Fk"),p=n.n(d),l=n("fZjL"),h=n.n(l),m=n("Dd8w"),v=n.n(m),x=n("/5sW"),y=function(){return{}};function b(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=x.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function w(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function g(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function _(t){var e,n=this;return p.a.all(g(t,(e=f()(s.a.mark(function t(e,r,o,a){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return t.abrupt("return",o.components[a]=b(e));case 5:case"end":return t.stop()}},t,n)})),function(t,n,r,o){return e.apply(this,arguments)})))}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var C,k,$=(C=f()(s.a.mark(function t(e){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:return t.abrupt("return",v()({},e,{meta:w(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)})),function(t){return C.apply(this,arguments)}),j=(k=f()(s.a.mark(function t(e,n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context){t.next=14;break}t.t0=!1,t.t1=e,t.t2=e.store,t.t3=n.payload,t.t4=n.error,t.t5={},e.context={get isServer(){return console.warn("context.isServer has been deprecated, please use process.server instead."),!1},get isClient(){return console.warn("context.isClient has been deprecated, please use process.client instead."),!0},isStatic:t.t0,isDev:!1,isHMR:!1,app:t.t1,store:t.t2,payload:t.t3,error:t.t4,base:"/",env:t.t5},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var o=void 0===n?"undefined":i()(n);if("number"==typeof t||"undefined"!==o&&"object"!==o||(r=n||{},o=void 0===(n=t)?"undefined":i()(n),t=302),"object"===o&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=q(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__;case 14:if(e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=22;break}return t.next=21,$(n.route);case 21:e.context.route=t.sent;case 22:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=28;break}return t.next=27,$(n.from);case 27:e.context.from=t.sent;case 28:case"end":return t.stop()}},t,this)})),function(t,e){return k.apply(this,arguments)});function E(t,e){var n=void 0;return(n=2===t.length?new p.a(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof p.a||"function"==typeof n.then)||(n=p.a.resolve(n)),n}var R=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function A(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function T(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function O(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function q(t,e){var n=void 0,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var a=t.split("/"),i=(n?n+"://":"//")+a.shift(),u=a.filter(Boolean).join("/"),s=void 0;return 2===(a=u.split("#")).length&&(u=a[0],s=a[1]),i+=u?"/"+u:"",e&&"{}"!==o()(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return h()(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=s?"#"+s:""}},mtxM:function(t,e,n){"use strict";e.a=function(){return new i.default({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:S,routes:[{path:"/brand",component:u,name:"brand"},{path:"/experice",component:s,name:"experice"},{path:"/job",component:c,name:"job"},{path:"/join",component:f,name:"join"},{path:"/leader",component:d,name:"leader"},{path:"/news",component:p,name:"news"},{path:"/prod",component:l,name:"prod"},{path:"/sitemap",component:h,name:"sitemap"},{path:"/experice/bt",component:m,name:"experice-bt"},{path:"/experice/cd",component:v,name:"experice-cd"},{path:"/experice/dg",component:x,name:"experice-dg"},{path:"/experice/nj",component:y,name:"experice-nj"},{path:"/job/search",component:b,name:"job-search"},{path:"/prod/newPro",component:w,name:"prod-newPro"},{path:"/service/aftersales",component:g,name:"service-aftersales"},{path:"/service/contact",component:_,name:"service-contact"},{path:"/service/presales",component:C,name:"service-presales"},{path:"/service/questions",component:k,name:"service-questions"},{path:"/job/jobView/:id?",component:$,name:"job-jobView-id"},{path:"/news/newsView/:id?",component:j,name:"news-newsView-id"},{path:"/prod/pdV/:id?",component:E,name:"prod-pdV-id"},{path:"/job/:classId",component:R,name:"job-classId"},{path:"/news/:category",component:A,name:"news-category"},{path:"/prod/:typeId",component:T,name:"prod-typeId"},{path:"/service/:id?",component:O,name:"service-id"},{path:"/",component:q,name:"index"}],fallback:!1})};var r=n("//Fk"),o=n.n(r),a=n("/5sW"),i=n("/ocq");a.default.use(i.default);var u=function(){return n.e(11).then(n.bind(null,"ZDha")).then(function(t){return t.default||t})},s=function(){return n.e(5).then(n.bind(null,"Ip+Q")).then(function(t){return t.default||t})},c=function(){return n.e(12).then(n.bind(null,"Gurz")).then(function(t){return t.default||t})},f=function(){return n.e(6).then(n.bind(null,"7Gx2")).then(function(t){return t.default||t})},d=function(){return n.e(21).then(n.bind(null,"dSai")).then(function(t){return t.default||t})},p=function(){return n.e(20).then(n.bind(null,"1gT6")).then(function(t){return t.default||t})},l=function(){return n.e(15).then(n.bind(null,"T26r")).then(function(t){return t.default||t})},h=function(){return n.e(25).then(n.bind(null,"c5NV")).then(function(t){return t.default||t})},m=function(){return n.e(3).then(n.bind(null,"6pve")).then(function(t){return t.default||t})},v=function(){return n.e(2).then(n.bind(null,"G9ri")).then(function(t){return t.default||t})},x=function(){return n.e(1).then(n.bind(null,"/yo7")).then(function(t){return t.default||t})},y=function(){return n.e(0).then(n.bind(null,"gKe7")).then(function(t){return t.default||t})},b=function(){return n.e(7).then(n.bind(null,"nqyL")).then(function(t){return t.default||t})},w=function(){return n.e(17).then(n.bind(null,"aWeJ")).then(function(t){return t.default||t})},g=function(){return n.e(19).then(n.bind(null,"tYax")).then(function(t){return t.default||t})},_=function(){return n.e(23).then(n.bind(null,"zv04")).then(function(t){return t.default||t})},C=function(){return n.e(18).then(n.bind(null,"SaAC")).then(function(t){return t.default||t})},k=function(){return n.e(22).then(n.bind(null,"BPIq")).then(function(t){return t.default||t})},$=function(){return n.e(8).then(n.bind(null,"Jk7L")).then(function(t){return t.default||t})},j=function(){return n.e(26).then(n.bind(null,"z4IV")).then(function(t){return t.default||t})},E=function(){return n.e(13).then(n.bind(null,"d0m6")).then(function(t){return t.default||t})},R=function(){return n.e(9).then(n.bind(null,"YBAK")).then(function(t){return t.default||t})},A=function(){return n.e(16).then(n.bind(null,"SJwR")).then(function(t){return t.default||t})},T=function(){return n.e(10).then(n.bind(null,"4Pxx")).then(function(t){return t.default||t})},O=function(){return n.e(24).then(n.bind(null,"e7KU")).then(function(t){return t.default||t})},q=function(){return n.e(4).then(n.bind(null,"/TYz")).then(function(t){return t.default||t})};window.history.scrollRestoration="manual";var S=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new o.a(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})}},"n+J3":function(t,e,n){"use strict";var r=n("/5sW");e.a={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"#3B8070",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},qcny:function(t,e,n){"use strict";n.d(e,"b",function(){return T});var r=n("Xxa5"),o=n.n(r),a=n("//Fk"),i=(n.n(a),n("C4MV")),u=n.n(i),s=n("woOf"),c=n.n(s),f=n("Dd8w"),d=n.n(f),p=n("exGp"),l=n.n(p),h=n("MU8w"),m=(n.n(h),n("/5sW")),v=n("p3jY"),x=n.n(v),y=n("mtxM"),b=n("0F0d"),w=n("HBB+"),g=n("WRRc"),_=n("To1F"),C=n("Hot+"),k=n("yTq1"),$=n("YLfZ"),j=n("J2Ti"),E=n("sQWu"),R=n("vfPB");n.d(e,"a",function(){return _.a});var A,T=(A=l()(o.a.mark(function t(e){var n,r,a,i,s,f,p;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(y.a)(e),(r=Object(j.a)(e)).$router=n,a=d()({router:n,store:r,nuxt:{defaultTransition:O,transitions:[O],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?c()({},O,{name:t}):c()({},O,t):O}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,a.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},k.a),r.app=a,i=e?e.next:function(t){return a.router.push(t)},s=void 0,e?s=n.resolve(e.url).route:(f=Object($.d)(n.options.base),s=n.resolve(f).route),t.next=10,Object($.m)(a,{route:s,next:i,error:a.nuxt.error.bind(a),store:r,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 10:if(p=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");a[t="$"+t]=e,r[t]=a[t];var n="__nuxt_"+t+"_installed__";m.default[n]||(m.default[n]=!0,m.default.use(function(){m.default.prototype.hasOwnProperty(t)||u()(m.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))},window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),"function"!=typeof E.default){t.next=16;break}return t.next=16,Object(E.default)(a.context,p);case 16:if("function"!=typeof R.default){t.next=19;break}return t.next=19,Object(R.default)(a.context,p);case 19:t.next=22;break;case 22:return t.abrupt("return",{app:a,router:n,store:r});case 23:case"end":return t.stop()}},t,this)})),function(t){return A.apply(this,arguments)});m.default.component(b.a.name,b.a),m.default.component(w.a.name,w.a),m.default.component(g.a.name,g.a),m.default.component(C.a.name,C.a),m.default.use(x.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var O={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"}},sQWu:function(t,e,n){"use strict";var r=n("/5sW"),o=n("AXdl");r.default.use(o.a,{preLoad:1.33,error:"",loading:"",attempt:2,throttleWait:500})},sjOM:function(t,e,n){"use strict";e.a={props:["error"],layout:"blog"}},unZF:function(t,e,n){"use strict";var r=n("BO1k"),o=n.n(r),a=n("4Atj"),i=a.keys();function u(t){var e=a(t);return e.default?e.default:e}var s={},c=!0,f=!1,d=void 0;try{for(var p,l=o()(i);!(c=(p=l.next()).done);c=!0){var h=p.value;s[h.replace(/^\.\//,"").replace(/\.(js)$/,"")]=u(h)}}catch(t){f=!0,d=t}finally{try{!c&&l.return&&l.return()}finally{if(f)throw d}}e.a=s},v2ns:function(t,e){},vdRI:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("Xxa5"),o=n.n(r),a=n("exGp"),i=n.n(a),u=n("/5sW"),s=n("NYxO"),c=n("mtWM"),f=n.n(c);u.default.use(s.default);var d={wordpressAPI:"http://visney.cn:81",wordpressAPIForJob:"http://visney.cn:8082",aiuAPI:"http://47.106.86.150:8082",aiuSRC:"http://47.106.86.150:8083",headProdNav:{},headNewsNav:{},headJobNav:{},indexLinksData:null},p={setHeadProdNav:function(t,e){t.headProdNav=e},setProductList:function(t,e){t.productList=e},setHeadJobNav:function(t,e){t.headJobNav=e},setIndexLinksData:function(t,e){t.indexLinksData=e}},l={},h={nuxtServerInit:function(){var t=i()(o.a.mark(function t(e){var n,r,a,i,u=e.commit,s=e.state;e.req;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f()(s.wordpressAPI+"/proCategory/showAll/main");case 2:return n=t.sent,u("setHeadProdNav",n.data),t.next=6,f.a.post(s.aiuAPI+"/rest/api/product/v1/query/list",{});case 6:return r=t.sent,u("setProductList",r.data.data.list),t.next=10,f()(s.wordpressAPIForJob+"/jobClass/getAll");case 10:return a=t.sent,u("setHeadJobNav",a.data),t.next=14,f()(s.wordpressAPI+"/link/selectAll");case 14:i=t.sent,u("setIndexLinksData",i.data);case 16:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()};e.default=function(){return new s.default.Store({state:d,getters:l,mutations:p,actions:h})}},vfPB:function(t,e,n){"use strict";var r=n("/5sW"),o=n("v2ns"),a=(n.n(o),n("Z5iE"));r.default.use(a)},vkpq:function(t,e){},yTq1:function(t,e,n){"use strict";var r=n("//Fk"),o=n.n(r),a=n("/5sW"),i=n("F88d"),u=n("EDs6"),s=(n.n(u),{_default:function(){return n.e(14).then(n.bind(null,"Ma2J")).then(function(t){return t.default||t})}}),c={};e.a={head:{title:"visney",meta:[{name:"renderer",content:"webkit"},{name:"force-rendering",content:"webkit"},{"http-equiv":"X-UA-Compatible",content:"IE=Edge,chrome=1"},{name:"baidu-site-verification",content:"mREHhDF8nW"},{charset:"utf-8"},{hid:"description",name:"description",content:"爱柚"},{name:"format-detection",content:"telephone=no"},{name:"viewport",content:"width=device-width, initial-scale=1.0, user-scalable=no"},{name:"360-site-verification",content:"850970beabd63bd397272b6dd73a1aba"},{name:"sogou_site_verification",content:"y3fi8ttkxP"},{name:"shenma-site-verification",content:"15230d9dfb2e66bfecf2408862f2462c_1537497601"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],script:[{src:"http://api.map.baidu.com/api?v=2.0&ak=MDdqxkqhQzfdBzfu2tfGiidGbHgTfGrB"}],style:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt");return t("div",{domProps:{id:"__nuxt"}},[n,t("transition",{props:{name:"layout",mode:"out-in"}},[t("div",{domProps:{id:"__layout"},key:this.layoutName},[r])])])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){a.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){a.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){t&&c["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=c[e],this.layout},loadLayout:function(t){var e=this;t&&(s["_"+t]||c["_"+t])||(t="default");var n="_"+t;return c[n]?o.a.resolve(c[n]):s[n]().then(function(t){return c[n]=t,delete s[n],c[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message})})}},components:{NuxtLoading:i.a}}}},["T23V"]);