webpackJsonp([8],{"1sdP":function(t,e,r){"use strict";var a=r("mw3O"),n=(r.n(a),r("mtWM"));r.n(n);e.a={name:"jobSelectHead",props:{workPlaceData:Array,jobKindsData:Array}}},"29R+":function(t,e,r){"use strict";var a=r("1sdP"),n=r("emoA"),i=!1;var o=function(t){i||r("5nrF")},s=r("VU/8")(a.a,n.a,!1,o,"data-v-6428769c",null);s.options.__file="components/job/jobSelectHead.vue",e.a=s.exports},"2ELy":function(t,e,r){"use strict";e.a={name:"jobHot",data:function(){return{searchMessage:""}},props:{hotJobData:Array,classId:String}}},"5nrF":function(t,e){},"7Df6":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"job_hot"},[t._m(0),r("div",{staticClass:"job_hot_box"},[r("ul",t._l(t.hotJobData,function(e,a){return r("li",{key:a,staticClass:"job_hot_list"},[r("div",{staticClass:"job_hot_name"},[r("nuxt-link",{attrs:{to:{name:"job-jobView-id",params:{id:e.jobId},query:{classId:e.jobClass.jobClassId,jobSiteId:e.jobSite.jobSiteId,jobTypeId:e.jobType.jobTypeId}}}},[t._v(t._s(e.jobName))])],1)])}))])]),r("div",{staticClass:"job_search"},[t._m(1),r("div",{staticClass:"job_search_con"},[r("div",{staticClass:"job_search"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchMessage,expression:"searchMessage"}],attrs:{type:"text",name:"",placeholder:"请输入关键字"},domProps:{value:t.searchMessage},on:{input:function(e){e.target.composing||(t.searchMessage=e.target.value)}}})]),r("div",{staticClass:"job_search_btn"},[r("nuxt-link",{attrs:{to:{name:"job-search",query:{search:this.searchMessage,classId:t.classId}}}},[t._v("搜索")])],1)])])])};a._withStripped=!0;var n={render:a,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"job_hot_title"},[e("h2",[this._v("热门招聘职位")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"job_search_title"},[e("h2",[this._v("职位搜索")])])}]};e.a=n},CNzk:function(t,e){},CwSZ:function(t,e,r){"use strict";var a=r("p8xL"),n=r("XgCd"),i={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},o=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:a.encode,encodeValuesOnly:!1,serializeDate:function(t){return o.call(t)},skipNulls:!1,strictNullHandling:!1},c=function t(e,r,n,i,o,c,l,u,d,p,b,f){var v=e;if("function"==typeof l)v=l(r,v);else if(v instanceof Date)v=p(v);else if(null===v){if(i)return c&&!f?c(r,s.encoder):r;v=""}if("string"==typeof v||"number"==typeof v||"boolean"==typeof v||a.isBuffer(v))return c?[b(f?r:c(r,s.encoder))+"="+b(c(v,s.encoder))]:[b(r)+"="+b(String(v))];var j,y=[];if(void 0===v)return y;if(Array.isArray(l))j=l;else{var _=Object.keys(v);j=u?_.sort(u):_}for(var m=0;m<j.length;++m){var h=j[m];o&&null===v[h]||(y=Array.isArray(v)?y.concat(t(v[h],n(r,h),n,i,o,c,l,u,d,p,b,f)):y.concat(t(v[h],r+(d?"."+h:"["+h+"]"),n,i,o,c,l,u,d,p,b,f)))}return y};t.exports=function(t,e){var r=t,o=e?a.assign({},e):{};if(null!==o.encoder&&void 0!==o.encoder&&"function"!=typeof o.encoder)throw new TypeError("Encoder has to be a function.");var l=void 0===o.delimiter?s.delimiter:o.delimiter,u="boolean"==typeof o.strictNullHandling?o.strictNullHandling:s.strictNullHandling,d="boolean"==typeof o.skipNulls?o.skipNulls:s.skipNulls,p="boolean"==typeof o.encode?o.encode:s.encode,b="function"==typeof o.encoder?o.encoder:s.encoder,f="function"==typeof o.sort?o.sort:null,v=void 0!==o.allowDots&&o.allowDots,j="function"==typeof o.serializeDate?o.serializeDate:s.serializeDate,y="boolean"==typeof o.encodeValuesOnly?o.encodeValuesOnly:s.encodeValuesOnly;if(void 0===o.format)o.format=n.default;else if(!Object.prototype.hasOwnProperty.call(n.formatters,o.format))throw new TypeError("Unknown format option provided.");var _,m,h=n.formatters[o.format];"function"==typeof o.filter?r=(m=o.filter)("",r):Array.isArray(o.filter)&&(_=m=o.filter);var g,w=[];if("object"!=typeof r||null===r)return"";g=o.arrayFormat in i?o.arrayFormat:"indices"in o?o.indices?"indices":"repeat":"indices";var C=i[g];_||(_=Object.keys(r)),f&&_.sort(f);for(var I=0;I<_.length;++I){var k=_[I];d&&null===r[k]||(w=w.concat(c(r[k],k,C,u,d,p?b:null,m,f,v,j,h,y)))}var x=w.join(l),D=!0===o.addQueryPrefix?"?":"";return x.length>0?D+x:""}},DDCP:function(t,e,r){"use strict";var a=r("p8xL"),n=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:a.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},o=function(t,e,r){if(t){var a=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,i=/(\[[^[\]]*])/g,o=/(\[[^[\]]*])/.exec(a),s=o?a.slice(0,o.index):a,c=[];if(s){if(!r.plainObjects&&n.call(Object.prototype,s)&&!r.allowPrototypes)return;c.push(s)}for(var l=0;null!==(o=i.exec(a))&&l<r.depth;){if(l+=1,!r.plainObjects&&n.call(Object.prototype,o[1].slice(1,-1))&&!r.allowPrototypes)return;c.push(o[1])}return o&&c.push("["+a.slice(o.index)+"]"),function(t,e,r){for(var a=e,n=t.length-1;n>=0;--n){var i,o=t[n];if("[]"===o)i=(i=[]).concat(a);else{i=r.plainObjects?Object.create(null):{};var s="["===o.charAt(0)&&"]"===o.charAt(o.length-1)?o.slice(1,-1):o,c=parseInt(s,10);!isNaN(c)&&o!==s&&String(c)===s&&c>=0&&r.parseArrays&&c<=r.arrayLimit?(i=[])[c]=a:i[s]=a}a=i}return a}(c,e,r)}};t.exports=function(t,e){var r=e?a.assign({},e):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"==typeof r.delimiter||a.isRegExp(r.delimiter)?r.delimiter:i.delimiter,r.depth="number"==typeof r.depth?r.depth:i.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:i.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:i.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:i.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:i.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:i.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:i.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:i.strictNullHandling,""===t||null===t||void 0===t)return r.plainObjects?Object.create(null):{};for(var s="string"==typeof t?function(t,e){for(var r={},a=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,o=e.parameterLimit===1/0?void 0:e.parameterLimit,s=a.split(e.delimiter,o),c=0;c<s.length;++c){var l,u,d=s[c],p=d.indexOf("]="),b=-1===p?d.indexOf("="):p+1;-1===b?(l=e.decoder(d,i.decoder),u=e.strictNullHandling?null:""):(l=e.decoder(d.slice(0,b),i.decoder),u=e.decoder(d.slice(b+1),i.decoder)),n.call(r,l)?r[l]=[].concat(r[l]).concat(u):r[l]=u}return r}(t,r):t,c=r.plainObjects?Object.create(null):{},l=Object.keys(s),u=0;u<l.length;++u){var d=l[u],p=o(d,s[d],r);c=a.merge(c,p,r)}return a.compact(c)}},FeL2:function(t,e){},IJKf:function(t,e){},Jk7L:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r("kRpV"),n=r("bIjx"),i=!1;var o=function(t){i||r("CNzk")},s=r("VU/8")(a.a,n.a,!1,o,"data-v-4187a9f2",null);s.options.__file="pages/job/jobView/_id.vue",e.default=s.exports},O5KD:function(t,e,r){"use strict";e.a={name:"jobConTitle",props:{headJobNav:Array}}},OWS5:function(t,e){},RUsL:function(t,e){},"W/nC":function(t,e,r){"use strict";var a=r("2ELy"),n=r("7Df6"),i=!1;var o=function(t){i||r("IJKf")},s=r("VU/8")(a.a,n.a,!1,o,null,null);s.options.__file="components/job/jobHot.vue",e.a=s.exports},XgCd:function(t,e,r){"use strict";var a=String.prototype.replace,n=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return a.call(t,n,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},bCiV:function(t,e,r){"use strict";e.a={components:{},name:"VBanner",props:{banner:{type:Array,required:!0}},data:function(){return{isLeft:!0,currentIndex:0,timer:"",clickTime:0,swiperData:[{imgUrl:"http://47.106.86.150:8083/img/picture/aba2d8494a8d4f9bbfda31e776ce12c9_1631114275350.png"},{imgUrl:"http://47.106.86.150:8083/img/picture/aba2d8494a8d4f9bbfda31e776ce12c9_1631114275350.png"},{imgUrl:"http://47.106.86.150:8083/img/picture/aba2d8494a8d4f9bbfda31e776ce12c9_1631114275350.png"}],banners:["http://47.106.86.150:8083/img/picture/aba2d8494a8d4f9bbfda31e776ce12c9_1631114275350.png","http://47.106.86.150:8083/img/picture/aba2d8494a8d4f9bbfda31e776ce12c9_1631114275350.png","http://47.106.86.150:8083/img/picture/aba2d8494a8d4f9bbfda31e776ce12c9_1631114275350.png"],swiperOption:{pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}}},computed:{},created:function(){},mounted:function(){console.log("banner",this.banner)},methods:{}}},bIjx:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container"},[r("VBanner",{attrs:{bannerData:t.bannerData}}),r("div",{attrs:{id:"job_content"}},[r("jobConTitle",{attrs:{headJobNav:t.$store.state.headJobNav}})],1),r("div",{attrs:{id:"job_view_wrap"}},[r("div",{staticClass:"job_view_box clearfix"},[r("div",{staticClass:"job_view_left"},[r("jobHot",{attrs:{hotJobData:t.hotJobData,classId:t.$route.query.classId}})],1),r("div",{staticClass:"job_view_right"},[r("jobSelectHead",{attrs:{workPlaceData:t.workPlaceData,jobKindsData:t.jobKindsData}}),r("div",{staticClass:"job_view_details"},[r("h2",[t._v("职位名称：\t"+t._s(t.jobViewData.jobName))]),r("p",[t._v("工作地点：\t"+t._s(t.jobViewData.jobSite.jobSiteName))]),r("p",[t._v("职位类别：\t"+t._s(t.jobViewData.jobType.jobTypeName))]),r("br"),r("h2",[t._v("工作职责：")]),r("p",{domProps:{innerHTML:t._s(t.jobViewData.jobDuty)}}),r("br"),r("h2",[t._v("招聘要求")]),r("p",{domProps:{innerHTML:t._s(t.jobViewData.jobRequire)}}),r("br"),r("h2",[t._v("薪资待遇")]),r("p",[t._v(t._s(t.jobViewData.jobSalary))])]),r("div",{staticClass:"job_emails"},[r("a",{attrs:{href:"mailto:job@visney.cn",target:"_blank"}},[t._v("简历发送到邮箱:"+t._s(t.jobViewData.jobContact))])])],1)])])],1)};a._withStripped=!0;var n={render:a,staticRenderFns:[]};e.a=n},bRvW:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"index-banner"}},[r("div",{directives:[{name:"swiper",rawName:"v-swiper:mySwiper",value:t.swiperOption,expression:"swiperOption",arg:"mySwiper"}]},[t.banner.length>0?r("div",{staticClass:"swiper-wrapper"},t._l(t.banner,function(e,a){return r("div",{key:a,staticClass:"swiper-slide"},[r("img",{attrs:{src:t.$store.state.aiuSRC+e.filePath}})])})):r("div",{staticClass:"swiper-wrapper"},t._l(t.swiperData,function(t,e){return r("div",{key:e,staticClass:"swiper-slide"},[r("img",{attrs:{src:t.imgUrl}})])})),r("div",{staticClass:"swiper-pagination"}),r("div",{staticClass:"swiper-button-prev swiper-button-white"}),r("div",{staticClass:"swiper-button-next swiper-button-white"})])])};a._withStripped=!0;var n={render:a,staticRenderFns:[]};e.a=n},emoA:function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"job_select_head"},[r("div",{staticClass:"work_place"},[r("div",{staticClass:"work_place_title"},[t._v("工作地点：")]),r("div",{staticClass:"work_place_list_wrap"},[r("ul",[r("li",{staticClass:"work_place_list"},[r("nuxt-link",{class:{active:null==t.$route.query.jobSiteId},attrs:{to:{name:"job-classId",params:{classId:t.$route.query.classId},query:{jobSiteId:null}}}},[t._v("全部")])],1),t._l(t.workPlaceData,function(e,a){return r("li",{key:a,staticClass:"work_place_list"},[r("nuxt-link",{class:{active:e.jobSiteId==t.$route.query.jobSiteId},attrs:{to:{name:"job-classId",params:{classId:t.$route.query.classId},query:{jobSiteId:e.jobSiteId}}}},[t._v(t._s(e.jobSiteName))])],1)})],2)])]),r("div",{staticClass:"job_kinds"},[r("div",{staticClass:"job_kinds_title"},[t._v("职位类别：")]),r("div",{staticClass:"job_kinds_list_wrap"},[r("ul",[r("li",{staticClass:"job_kinds_list"},[r("nuxt-link",{class:{active:null==t.$route.query.jobTypeId},attrs:{to:{name:"job-classId",params:{classId:t.$route.query.classId},query:{jobSiteId:t.$route.query.jobSiteId,kindsId:null}}}},[t._v("全部")])],1),t._l(t.jobKindsData,function(e,a){return r("li",{key:a,staticClass:"job_kinds_list"},[r("nuxt-link",{class:{active:e.jobTypeId==t.$route.query.jobTypeId},attrs:{to:{name:"job-classId",params:{classId:t.$route.query.classId},query:{jobSiteId:t.$route.query.jobSiteId,jobTypeId:e.jobTypeId}}}},[t._v(t._s(e.jobTypeName))])],1)})],2)])])])};a._withStripped=!0;var n={render:a,staticRenderFns:[]};e.a=n},kRpV:function(t,e,r){"use strict";var a=r("Xxa5"),n=r.n(a),i=r("exGp"),o=r.n(i),s=r("mtWM"),c=r.n(s),l=r("q4Ht"),u=r("ndZP"),d=r("W/nC"),p=r("29R+");e.a={data:function(){return{}},components:{VBanner:l.a,jobConTitle:u.a,jobHot:d.a,jobSelectHead:p.a},head:function(){return{title:"招聘中心",meta:[{name:"keywords",hid:"keywords",content:"招聘中心"},{name:"description",hid:"description",content:"招聘中心"}]}},asyncData:function(){var t=o()(n.a.mark(function t(e){var r,a,i,o,s,l=e.params,u=e.query,d=e.store;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c()(d.state.wordpressAPIForJob+"/jobBanner/getAll");case 2:return r=t.sent,t.next=5,c()(d.state.wordpressAPIForJob+"/job/getHot/"+u.classId);case 5:return a=t.sent,t.next=8,c()(d.state.wordpressAPIForJob+"/jobSite/getAll");case 8:return i=t.sent,t.next=11,c()(d.state.wordpressAPIForJob+"/jobType/getAll");case 11:return o=t.sent,t.next=14,c()(d.state.wordpressAPIForJob+"/job/getJobById/"+l.id);case 14:return s=t.sent,t.abrupt("return",{bannerData:r.data,hotJobData:a.data,workPlaceData:i.data,jobKindsData:o.data,jobViewData:s.data});case 16:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},mw3O:function(t,e,r){"use strict";var a=r("CwSZ"),n=r("DDCP"),i=r("XgCd");t.exports={formats:i,parse:n,stringify:a}},ndZP:function(t,e,r){"use strict";var a=r("O5KD"),n=r("v+E1"),i=!1;var o=function(t){i||r("FeL2")},s=r("VU/8")(a.a,n.a,!1,o,"data-v-4975c496",null);s.options.__file="components/job/jobConTitle.vue",e.a=s.exports},p8xL:function(t,e,r){"use strict";var a=Object.prototype.hasOwnProperty,n=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}();e.arrayToObject=function(t,e){for(var r=e&&e.plainObjects?Object.create(null):{},a=0;a<t.length;++a)void 0!==t[a]&&(r[a]=t[a]);return r},e.merge=function(t,r,n){if(!r)return t;if("object"!=typeof r){if(Array.isArray(t))t.push(r);else{if("object"!=typeof t)return[t,r];(n.plainObjects||n.allowPrototypes||!a.call(Object.prototype,r))&&(t[r]=!0)}return t}if("object"!=typeof t)return[t].concat(r);var i=t;return Array.isArray(t)&&!Array.isArray(r)&&(i=e.arrayToObject(t,n)),Array.isArray(t)&&Array.isArray(r)?(r.forEach(function(r,i){a.call(t,i)?t[i]&&"object"==typeof t[i]?t[i]=e.merge(t[i],r,n):t.push(r):t[i]=r}),t):Object.keys(r).reduce(function(t,i){var o=r[i];return a.call(t,i)?t[i]=e.merge(t[i],o,n):t[i]=o,t},i)},e.assign=function(t,e){return Object.keys(e).reduce(function(t,r){return t[r]=e[r],t},t)},e.decode=function(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(e){return t}},e.encode=function(t){if(0===t.length)return t;for(var e="string"==typeof t?t:String(t),r="",a=0;a<e.length;++a){var i=e.charCodeAt(a);45===i||46===i||95===i||126===i||i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122?r+=e.charAt(a):i<128?r+=n[i]:i<2048?r+=n[192|i>>6]+n[128|63&i]:i<55296||i>=57344?r+=n[224|i>>12]+n[128|i>>6&63]+n[128|63&i]:(a+=1,i=65536+((1023&i)<<10|1023&e.charCodeAt(a)),r+=n[240|i>>18]+n[128|i>>12&63]+n[128|i>>6&63]+n[128|63&i])}return r},e.compact=function(t){for(var e=[{obj:{o:t},prop:"o"}],r=[],a=0;a<e.length;++a)for(var n=e[a],i=n.obj[n.prop],o=Object.keys(i),s=0;s<o.length;++s){var c=o[s],l=i[c];"object"==typeof l&&null!==l&&-1===r.indexOf(l)&&(e.push({obj:i,prop:c}),r.push(l))}return function(t){for(var e;t.length;){var r=t.pop();if(e=r.obj[r.prop],Array.isArray(e)){for(var a=[],n=0;n<e.length;++n)void 0!==e[n]&&a.push(e[n]);r.obj[r.prop]=a}}return e}(e)},e.isRegExp=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},e.isBuffer=function(t){return null!==t&&void 0!==t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))}},q4Ht:function(t,e,r){"use strict";var a=r("bCiV"),n=r("bRvW"),i=!1;var o=function(t){i||(r("RUsL"),r("OWS5"))},s=r("VU/8")(a.a,n.a,!1,o,"data-v-120f5e71",null);s.options.__file="components/home/banner.vue",e.a=s.exports},"v+E1":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"job_con_title"},[r("div",{staticClass:"job_con_title_left"},[r("div",[r("ul",{staticClass:"job_nav_class"},t._l(t.headJobNav,function(e,a){return r("li",{key:a,staticClass:"job_list_kind"},[r("nuxt-link",{class:{active:a+1==(t.$route.params.classId||t.$route.query.classId)},attrs:{target:"_blank",to:{name:"job-classId",params:{classId:e.jobClassId}}}},[t._v(t._s(e.jobClassName))])],1)}))])]),r("div",{staticClass:"job_con_title_right"},[r("div",{attrs:{id:"bread-nav"}},[r("div",{staticClass:"brand-nav-box"},[r("div",{staticClass:"brand-nav-content"},[t._m(0),r("div",{staticClass:"brand-nav-list"},[r("ul",[r("li",[r("nuxt-link",{attrs:{target:"_blank",to:"/"}},[t._v("首页")])],1),r("li",[t._v(">")]),r("li",[r("nuxt-link",{attrs:{target:"_blank",to:"/job"}},[t._v("招聘中心")])],1)])])])])])])])};a._withStripped=!0;var n={render:a,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"brand-nav-title"},[e("span",[this._v("当前位置:")])])}]};e.a=n}});