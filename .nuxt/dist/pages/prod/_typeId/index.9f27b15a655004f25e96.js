webpackJsonp([9],{"+vS8":function(t,e){},"1STr":function(t,e,r){"use strict";var i=r("TLhS"),s=r("EWHn"),a=!1;var o=function(t){a||r("56yR")},n=r("VU/8")(i.a,s.a,!1,o,"data-v-5eaa7e2a",null);n.options.__file="components/common/prodListShow.vue",e.a=n.exports},"4Pxx":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r("JkAI"),s=r("xamx"),a=!1;var o=function(t){a||r("+vS8")},n=r("VU/8")(i.a,s.a,!1,o,"data-v-26eec218",null);n.options.__file="pages/prod/_typeId/index.vue",e.default=n.exports},"56yR":function(t,e){},"7wy8":function(t,e,r){"use strict";e.a={name:"pagination",data:function(){return{prePage:"<",nextPage:">",homePage:"<<",lastPage:">>",current:this.currentPage}},props:{total:{type:Number,default:0},display:{type:Number,default:8},currentPage:{type:Number,default:1},pagegroup:{type:Number,default:5,coerce:function(t){return(t=t>0?t:5)%2==1?t:t+1}}},computed:{page:function(){return Math.ceil(this.total/this.display)},grouplist:function(){var t=this.page,e=[],r=[],i=Math.floor(this.pagegroup/2),s=this.current;if(t<=this.pagegroup){for(;t--;)e.push({text:this.page-t,val:this.page-t});return e}for(;t--;)e.push(this.page-t);var a=e.indexOf(s);a<i&&(s=s+i-a),this.current>this.page-i&&(s=this.page-i),e=e.splice(s-i-1,this.pagegroup);do{var o=e.shift();r.push({text:o,val:o})}while(e.length);return this.page>this.pagegroup&&(this.current>i+1&&r.unshift({text:"...",val:r[0].val-1}),this.current<this.page-i&&r.push({text:"...",val:r[r.length-1].val+1})),r}},methods:{setCurrent:function(t){this.current!=t&&t>0&&t<this.page+1&&(this.current=t,this.$emit("pagechange",this.current))}}}},CwSZ:function(t,e,r){"use strict";var i=r("p8xL"),s=r("XgCd"),a={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},o=Date.prototype.toISOString,n={delimiter:"&",encode:!0,encoder:i.encode,encodeValuesOnly:!1,serializeDate:function(t){return o.call(t)},skipNulls:!1,strictNullHandling:!1},d=function t(e,r,s,a,o,d,c,l,u,p,y,f){var h=e;if("function"==typeof c)h=c(r,h);else if(h instanceof Date)h=p(h);else if(null===h){if(a)return d&&!f?d(r,n.encoder):r;h=""}if("string"==typeof h||"number"==typeof h||"boolean"==typeof h||i.isBuffer(h))return d?[y(f?r:d(r,n.encoder))+"="+y(d(h,n.encoder))]:[y(r)+"="+y(String(h))];var v,g=[];if(void 0===h)return g;if(Array.isArray(c))v=c;else{var I=Object.keys(h);v=l?I.sort(l):I}for(var m=0;m<v.length;++m){var C=v[m];o&&null===h[C]||(g=Array.isArray(h)?g.concat(t(h[C],s(r,C),s,a,o,d,c,l,u,p,y,f)):g.concat(t(h[C],r+(u?"."+C:"["+C+"]"),s,a,o,d,c,l,u,p,y,f)))}return g};t.exports=function(t,e){var r=t,o=e?i.assign({},e):{};if(null!==o.encoder&&void 0!==o.encoder&&"function"!=typeof o.encoder)throw new TypeError("Encoder has to be a function.");var c=void 0===o.delimiter?n.delimiter:o.delimiter,l="boolean"==typeof o.strictNullHandling?o.strictNullHandling:n.strictNullHandling,u="boolean"==typeof o.skipNulls?o.skipNulls:n.skipNulls,p="boolean"==typeof o.encode?o.encode:n.encode,y="function"==typeof o.encoder?o.encoder:n.encoder,f="function"==typeof o.sort?o.sort:null,h=void 0!==o.allowDots&&o.allowDots,v="function"==typeof o.serializeDate?o.serializeDate:n.serializeDate,g="boolean"==typeof o.encodeValuesOnly?o.encodeValuesOnly:n.encodeValuesOnly;if(void 0===o.format)o.format=s.default;else if(!Object.prototype.hasOwnProperty.call(s.formatters,o.format))throw new TypeError("Unknown format option provided.");var I,m,C=s.formatters[o.format];"function"==typeof o.filter?r=(m=o.filter)("",r):Array.isArray(o.filter)&&(I=m=o.filter);var P,B=[];if("object"!=typeof r||null===r)return"";P=o.arrayFormat in a?o.arrayFormat:"indices"in o?o.indices?"indices":"repeat":"indices";var w=a[P];I||(I=Object.keys(r)),f&&I.sort(f);for(var _=0;_<I.length;++_){var b=I[_];u&&null===r[b]||(B=B.concat(d(r[b],b,w,l,u,p?y:null,m,f,h,v,C,g)))}var x=B.join(c),k=!0===o.addQueryPrefix?"?":"";return x.length>0?k+x:""}},DDCP:function(t,e,r){"use strict";var i=r("p8xL"),s=Object.prototype.hasOwnProperty,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:i.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},o=function(t,e,r){if(t){var i=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,a=/(\[[^[\]]*])/g,o=/(\[[^[\]]*])/.exec(i),n=o?i.slice(0,o.index):i,d=[];if(n){if(!r.plainObjects&&s.call(Object.prototype,n)&&!r.allowPrototypes)return;d.push(n)}for(var c=0;null!==(o=a.exec(i))&&c<r.depth;){if(c+=1,!r.plainObjects&&s.call(Object.prototype,o[1].slice(1,-1))&&!r.allowPrototypes)return;d.push(o[1])}return o&&d.push("["+i.slice(o.index)+"]"),function(t,e,r){for(var i=e,s=t.length-1;s>=0;--s){var a,o=t[s];if("[]"===o)a=(a=[]).concat(i);else{a=r.plainObjects?Object.create(null):{};var n="["===o.charAt(0)&&"]"===o.charAt(o.length-1)?o.slice(1,-1):o,d=parseInt(n,10);!isNaN(d)&&o!==n&&String(d)===n&&d>=0&&r.parseArrays&&d<=r.arrayLimit?(a=[])[d]=i:a[n]=i}i=a}return i}(d,e,r)}};t.exports=function(t,e){var r=e?i.assign({},e):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"==typeof r.delimiter||i.isRegExp(r.delimiter)?r.delimiter:a.delimiter,r.depth="number"==typeof r.depth?r.depth:a.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:a.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:a.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:a.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:a.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:a.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:a.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:a.strictNullHandling,""===t||null===t||void 0===t)return r.plainObjects?Object.create(null):{};for(var n="string"==typeof t?function(t,e){for(var r={},i=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,o=e.parameterLimit===1/0?void 0:e.parameterLimit,n=i.split(e.delimiter,o),d=0;d<n.length;++d){var c,l,u=n[d],p=u.indexOf("]="),y=-1===p?u.indexOf("="):p+1;-1===y?(c=e.decoder(u,a.decoder),l=e.strictNullHandling?null:""):(c=e.decoder(u.slice(0,y),a.decoder),l=e.decoder(u.slice(y+1),a.decoder)),s.call(r,c)?r[c]=[].concat(r[c]).concat(l):r[c]=l}return r}(t,r):t,d=r.plainObjects?Object.create(null):{},c=Object.keys(n),l=0;l<c.length;++l){var u=c[l],p=o(u,n[u],r);d=i.merge(d,p,r)}return i.compact(d)}},EWHn:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"products-tab-box"},[r("ul",t._l(t.prodList,function(e,i){return r("li",{key:i,staticClass:"products-kind-list"},[r("div",{staticClass:"products-kind-list-img"},[r("nuxt-link",{attrs:{target:"_blank",to:{name:"prod-pdV-id",params:{id:e.proId},query:{typeId:e.proPositionId,classId:e.proTypeId}}}},[r("img",{attrs:{src:e.proImgs[0].proImgSrc,alt:e.proImgs[0].proImgAlt}})])],1),r("div",{staticClass:"products-kind-name"},[r("nuxt-link",{attrs:{target:"_blank",to:{name:"prod-pdV-id",params:{id:e.proId},query:{typeId:e.proPositionId,classId:e.proTypeId}}}},[r("b",[t._v(t._s(e.proName))])])],1),r("div",{staticClass:"products-kind-price"},[t._v("\n\t\t\t\t\t￥"),r("span",{staticClass:"price-num"},[t._v(t._s(e.proPrice))])])])}))]),t.showMore?r("div",{staticClass:"products-more"},[r("nuxt-link",{attrs:{target:"_blank",to:{name:"prod-typeId",params:{typeId:t.typeId}}}},[t._v("了解更多 >")])],1):t._e(),t.showNewMore?r("div",{staticClass:"products-more"},[r("nuxt-link",{attrs:{target:"_blank",to:"prod/newPro"}},[t._v("了解更多 >")])],1):t._e()])};i._withStripped=!0;var s={render:i,staticRenderFns:[]};e.a=s},JkAI:function(t,e,r){"use strict";var i=r("Xxa5"),s=r.n(i),a=r("exGp"),o=r.n(a),n=r("mtWM"),d=r.n(n),c=r("1STr"),l=r("mw3O"),u=r.n(l),p=r("Jz2J");e.a={data:function(){return{positionId:this.$route.params.typeId,typeId:this.$route.query.classId,textureId:this.$route.query.textureId,seriesId:null,styleId:null,orderByTime:0,orderByPageViewsCount:0,orderByPrice:0,display:12,current:1}},head:function(){return{title:this.prodListData.title,meta:[{name:"keywords",hid:"keywords",content:""+this.prodListData.keyword},{name:"description",hid:"description",content:""+this.prodListData.description}]}},methods:{getPositionIdProdList:function(t){var e=this;this.positionId=t,this.typeId=null,this.textureId=null,this.seriesId=null,this.styleId=null,this.orderByTime=0,this.orderByPageViewsCount=0,this.orderByPrice=0;var r=u.a.stringify({positionId:this.positionId,typeId:this.typeId,textureId:this.textureId,seriesId:this.seriesId,styleId:this.styleId,orderByTime:this.orderByTime,orderByPageViewsCount:this.orderByPageViewsCount,orderByPrice:this.orderByPrice});d.a.post(this.$store.state.wordpressAPI+"/product/selectByCondition/1/12",r).then(function(t){e.prodListData=t.data,e.total=t.data.total}).catch(function(t){console.log(t)})},getClassIdProdList:function(t){var e=this;this.typeId=t;var r=u.a.stringify({positionId:this.positionId,typeId:this.typeId,textureId:this.textureId,seriesId:this.seriesId,styleId:this.styleId,orderByTime:this.orderByTime,orderByPageViewsCount:this.orderByPageViewsCount,orderByPrice:this.orderByPrice});d.a.post(this.$store.state.wordpressAPI+"/product/selectByCondition/1/12",r).then(function(t){e.prodListData=t.data,e.total=t.data.total}).catch(function(t){console.log(t)})},getTextureIdProdList:function(t){var e=this;this.textureId=t;var r=u.a.stringify({positionId:this.positionId,typeId:this.typeId,textureId:this.textureId,seriesId:this.seriesId,styleId:this.styleId,orderByTime:this.orderByTime,orderByPageViewsCount:this.orderByPageViewsCount,orderByPrice:this.orderByPrice});d.a.post(this.$store.state.wordpressAPI+"/product/selectByCondition/1/12",r).then(function(t){e.prodListData=t.data,e.total=t.data.total}).catch(function(t){console.log(t)})},getSeriesIdProdList:function(t){var e=this;this.seriesId=t;var r=u.a.stringify({positionId:this.positionId,typeId:this.typeId,textureId:this.textureId,seriesId:this.seriesId,styleId:this.styleId,orderByTime:this.orderByTime,orderByPageViewsCount:this.orderByPageViewsCount,orderByPrice:this.orderByPrice});d.a.post(this.$store.state.wordpressAPI+"/product/selectByCondition/1/12",r).then(function(t){e.prodListData=t.data,e.total=t.data.total}).catch(function(t){console.log(t)})},getStyleIdProdList:function(t){var e=this;this.styleId=t;var r=u.a.stringify({positionId:this.positionId,typeId:this.typeId,textureId:this.textureId,seriesId:this.seriesId,styleId:this.styleId,orderByTime:this.orderByTime,orderByPageViewsCount:this.orderByPageViewsCount,orderByPrice:this.orderByPrice});d.a.post(this.$store.state.wordpressAPI+"/product/selectByCondition/1/12",r).then(function(t){e.prodListData=t.data,e.total=t.data.total}).catch(function(t){console.log(t)})},getOrderByTimeProdList:function(t){var e=this;this.orderByPageViewsCount=0,this.orderByPrice=0,0==this.orderByTime?this.orderByTime=1:this.orderByTime=0;var r=u.a.stringify({positionId:this.positionId,typeId:this.typeId,textureId:this.textureId,seriesId:this.seriesId,styleId:this.styleId,orderByTime:this.orderByTime,orderByPageViewsCount:this.orderByPageViewsCount,orderByPrice:this.orderByPrice});d.a.post(this.$store.state.wordpressAPI+"/product/selectByCondition/1/12",r).then(function(t){e.prodListData=t.data,e.total=t.data.total}).catch(function(t){console.log(t)})},getOrderByPageViewsCountProdList:function(t){var e=this;this.orderByTime=0,this.orderByPrice=0,0==this.orderByPageViewsCount?this.orderByPageViewsCount=1:this.orderByPageViewsCount=0;var r=u.a.stringify({positionId:this.positionId,typeId:this.typeId,textureId:this.textureId,seriesId:this.seriesId,styleId:this.styleId,orderByTime:this.orderByTime,orderByPageViewsCount:this.orderByPageViewsCount,orderByPrice:this.orderByPrice});d.a.post(this.$store.state.wordpressAPI+"/product/selectByCondition/1/12",r).then(function(t){e.prodListData=t.data,e.total=t.data.total}).catch(function(t){console.log(t)})},getOrderByPriceProdList:function(t){var e=this;this.orderByTime=0,this.orderByPageViewsCount=0,0==this.orderByPrice?this.orderByPrice=1:this.orderByPrice=0;var r=u.a.stringify({positionId:this.positionId,typeId:this.typeId,textureId:this.textureId,seriesId:this.seriesId,styleId:this.styleId,orderByTime:this.orderByTime,orderByPageViewsCount:this.orderByPageViewsCount,orderByPrice:this.orderByPrice});d.a.post(this.$store.state.wordpressAPI+"/product/selectByCondition/1/12",r).then(function(t){e.prodListData=t.data,e.total=t.data.total}).catch(function(t){console.log(t)})},pagechange:function(t){var e=this,r=u.a.stringify({positionId:this.positionId,typeId:this.typeId,textureId:this.textureId,seriesId:this.seriesId,styleId:this.styleId,orderByTime:this.orderByTime,orderByPageViewsCount:this.orderByPageViewsCount,orderByPrice:this.orderByPrice});d.a.post(this.$store.state.wordpressAPI+"/product/selectByCondition/"+t+"/12",r).then(function(t){e.prodListData=t.data,e.total=t.data.total}).catch(function(t){console.log(t)})}},validata:function(t){var e=t.params;return/^\d+$/.test(e.typeId)},asyncData:function(){var t=o()(s.a.mark(function t(e){var r,i,a,o=e.params,n=e.query,c=e.store;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d()(c.state.wordpressAPI+"/proCategory/showAll/list");case 2:return r=t.sent,i=u.a.stringify({positionId:o.typeId,typeId:n.classId,textureId:n.textureId,seriesId:null,styleId:null,orderByTime:0,orderByPageViewsCount:0,orderByPrice:0}),t.next=6,d.a.post(c.state.wordpressAPI+"/product/selectByCondition/1/12",i);case 6:return a=t.sent,t.abrupt("return",{materialsData:r.data[0],seriesData:r.data[1],styleData:r.data[2],prodListData:a.data,total:a.data.total});case 8:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),components:{prodListShow:c.a,pagination:p.a}}},Jz2J:function(t,e,r){"use strict";var i=r("7wy8"),s=r("PtX1"),a=!1;var o=function(t){a||r("cy4z")},n=r("VU/8")(i.a,s.a,!1,o,"data-v-d2ad50da",null);n.options.__file="components/common/pagination.vue",e.a=n.exports},PtX1:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ul",{staticClass:"pagination"},[r("li",{class:{disabled:1==t.current}},[r("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.setCurrent(t.current-1)}}},[t._v(" "+t._s(t.prePage)+" ")])]),r("li",{class:{disabled:1==t.current}},[r("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.setCurrent(1)}}},[t._v(" "+t._s(t.homePage)+" ")])]),t._l(t.grouplist,function(e,i){return r("li",{key:i,class:{active:t.current==e.val}},[r("a",{attrs:{href:"javascript:;"},on:{click:function(r){t.setCurrent(e.val)}}},[t._v(" "+t._s(e.text)+" ")])])}),r("li",{class:{disabled:t.current==t.page}},[r("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.setCurrent(t.page)}}},[t._v(" "+t._s(t.lastPage)+" ")])]),r("li",{class:{disabled:t.current==t.page}},[r("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.setCurrent(t.current+1)}}},[t._v(" "+t._s(t.nextPage))])])],2)])};i._withStripped=!0;var s={render:i,staticRenderFns:[]};e.a=s},TLhS:function(t,e,r){"use strict";e.a={name:"prodListShow",props:{prodList:{type:Array},showMore:{type:Boolean,default:!1},showNewMore:{type:Boolean,default:!1},typeId:{type:Number,default:1}}}},VEp1:function(t,e,r){t.exports=r.p+"img/banner.18cd3b5.jpg"},XgCd:function(t,e,r){"use strict";var i=String.prototype.replace,s=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return i.call(t,s,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},cy4z:function(t,e){},mw3O:function(t,e,r){"use strict";var i=r("CwSZ"),s=r("DDCP"),a=r("XgCd");t.exports={formats:a,parse:s,stringify:i}},p8xL:function(t,e,r){"use strict";var i=Object.prototype.hasOwnProperty,s=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}();e.arrayToObject=function(t,e){for(var r=e&&e.plainObjects?Object.create(null):{},i=0;i<t.length;++i)void 0!==t[i]&&(r[i]=t[i]);return r},e.merge=function(t,r,s){if(!r)return t;if("object"!=typeof r){if(Array.isArray(t))t.push(r);else{if("object"!=typeof t)return[t,r];(s.plainObjects||s.allowPrototypes||!i.call(Object.prototype,r))&&(t[r]=!0)}return t}if("object"!=typeof t)return[t].concat(r);var a=t;return Array.isArray(t)&&!Array.isArray(r)&&(a=e.arrayToObject(t,s)),Array.isArray(t)&&Array.isArray(r)?(r.forEach(function(r,a){i.call(t,a)?t[a]&&"object"==typeof t[a]?t[a]=e.merge(t[a],r,s):t.push(r):t[a]=r}),t):Object.keys(r).reduce(function(t,a){var o=r[a];return i.call(t,a)?t[a]=e.merge(t[a],o,s):t[a]=o,t},a)},e.assign=function(t,e){return Object.keys(e).reduce(function(t,r){return t[r]=e[r],t},t)},e.decode=function(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(e){return t}},e.encode=function(t){if(0===t.length)return t;for(var e="string"==typeof t?t:String(t),r="",i=0;i<e.length;++i){var a=e.charCodeAt(i);45===a||46===a||95===a||126===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122?r+=e.charAt(i):a<128?r+=s[a]:a<2048?r+=s[192|a>>6]+s[128|63&a]:a<55296||a>=57344?r+=s[224|a>>12]+s[128|a>>6&63]+s[128|63&a]:(i+=1,a=65536+((1023&a)<<10|1023&e.charCodeAt(i)),r+=s[240|a>>18]+s[128|a>>12&63]+s[128|a>>6&63]+s[128|63&a])}return r},e.compact=function(t){for(var e=[{obj:{o:t},prop:"o"}],r=[],i=0;i<e.length;++i)for(var s=e[i],a=s.obj[s.prop],o=Object.keys(a),n=0;n<o.length;++n){var d=o[n],c=a[d];"object"==typeof c&&null!==c&&-1===r.indexOf(c)&&(e.push({obj:a,prop:d}),r.push(c))}return function(t){for(var e;t.length;){var r=t.pop();if(e=r.obj[r.prop],Array.isArray(e)){for(var i=[],s=0;s<e.length;++s)void 0!==e[s]&&i.push(e[s]);r.obj[r.prop]=i}}return e}(e)},e.isRegExp=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},e.isBuffer=function(t){return null!==t&&void 0!==t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))}},xamx:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container"},[t._m(0),r("div",{attrs:{id:"bread-nav"}},[r("div",{staticClass:"brand-nav-box clearfix"},[r("div",{staticClass:"brand-nav-content"},[t._m(1),r("div",{staticClass:"brand-nav-list"},[r("ul",[r("li",[r("nuxt-link",{attrs:{target:"_blank",to:"/"}},[t._v("首页")])],1),r("li",[t._v(">")]),r("li",[r("nuxt-link",{attrs:{target:"_blank",to:"/prod"}},[t._v("产品列表")])],1),r("li",[t._v(">")]),t._l(t.$store.state.headProdNav,function(e,i){return i+1==t.$route.params.typeId?r("li",{key:i},[r("nuxt-link",{attrs:{to:{name:"prod-typeId",params:{typeId:e.proCategoryId}}}},[t._v(t._s(e.proCategoryName))])],1):t._e()})],2)])])])]),r("div",{attrs:{id:"products-content"}},[r("div",{attrs:{id:"products-select"}},[r("div",{staticClass:"products-select-box"},[r("div",{staticClass:"furniture-place"},[r("div",{staticClass:"furniture-place-title"},[t._v("空间:")]),r("div",{staticClass:"furniture-place-kinds"},[r("ul",t._l(t.$store.state.headProdNav,function(e,i){return i<4?r("li",{key:i,staticClass:"furniture-place-kinds-list",class:{active:i+1==t.$route.params.typeId},attrs:{"data-id":"1"},on:{click:function(r){t.getPositionIdProdList(e.proCategoryId)}}},[r("nuxt-link",{attrs:{to:{name:"prod-typeId",params:{typeId:e.proCategoryId}}}},[t._v(t._s(e.proCategoryName))])],1):t._e()}))])]),r("div",{staticClass:"furniture-class"},[r("div",{staticClass:"furniture-class-title"},[t._v("类型:")]),r("div",{staticClass:"furniture-class-kinds"},[r("ul",[r("li",{staticClass:"furniture-class-kinds-list",on:{click:function(e){t.getClassIdProdList(null)}}},[r("nuxt-link",{class:{active:null==t.$route.query.classId},attrs:{to:{name:"prod-typeId",params:{typeId:t.$route.params.typeId},query:{classId:null}}}},[t._v("全部")])],1),t._l(t.$store.state.headProdNav[t.$route.params.typeId-1].children,function(e,i){return r("li",{key:i,staticClass:"furniture-class-kinds-list",on:{click:function(r){t.getClassIdProdList(e.proCategoryId)}}},[r("nuxt-link",{class:{active:e.proCategoryId==t.$route.query.classId},attrs:{to:{name:"prod-typeId",params:{typeId:t.$route.params.typeId},query:{classId:e.proCategoryId}}}},[t._v(t._s(e.proCategoryName))])],1)})],2)])]),r("div",{staticClass:"furniture-materials"},[r("div",{staticClass:"furniture-materials-title"},[t._v("家具材质:")]),r("div",{staticClass:"furniture-materials-kinds"},[r("ul",[r("li",{staticClass:"furniture-materials-kinds-list",on:{click:function(e){t.getTextureIdProdList(null)}}},[r("nuxt-link",{class:{active:null==t.$route.query.textureId},attrs:{to:{name:"prod-typeId",params:{typeId:t.$route.params.typeId},query:{classId:t.$route.query.classId,textureId:null}}}},[t._v("全部")])],1),t._l(t.materialsData.children,function(e,i){return r("li",{key:i,staticClass:"furniture-materials-kinds-list",on:{click:function(r){t.getTextureIdProdList(e.proCategoryId)}}},[r("nuxt-link",{class:{active:e.proCategoryId==t.$route.query.textureId},attrs:{to:{name:"prod-typeId",params:{typeId:t.$route.params.typeId},query:{classId:t.$route.query.classId,textureId:e.proCategoryId}}}},[t._v(t._s(e.proCategoryName))])],1)})],2)])]),r("div",{staticClass:"furniture-series"},[r("div",{staticClass:"furniture-series-title"},[t._v("家具系列:")]),r("div",{staticClass:"furniture-series-kinds"},[r("ul",[r("li",{staticClass:"furniture-series-kinds-list",class:{active:null==t.seriesId},on:{click:function(e){t.getSeriesIdProdList(null)}}},[t._v("全部")]),t._l(t.seriesData.children,function(e,i){return r("li",{key:i,staticClass:"furniture-series-kinds-list",class:{active:e.proCategoryId==t.seriesId},on:{click:function(r){t.getSeriesIdProdList(e.proCategoryId)}}},[t._v(t._s(e.proCategoryName))])})],2)])]),r("div",{staticClass:"furniture-style"},[r("div",{staticClass:"furniture-style-title"},[t._v("家具风格:")]),r("div",{staticClass:"furniture-style-kinds"},[r("ul",[r("li",{staticClass:"furniture-style-kinds-list",class:{active:null==t.styleId},on:{click:function(e){t.getStyleIdProdList(null)}}},[t._v("全部")]),t._l(t.styleData.children,function(e,i){return r("li",{key:i,staticClass:"furniture-style-kinds-list",class:{active:e.proCategoryId==t.styleId},on:{click:function(r){t.getStyleIdProdList(e.proCategoryId)}}},[t._v(t._s(e.proCategoryName))])})],2)])]),r("div",{staticClass:"products-sequence"},[t._m(2),r("div",{staticClass:"sales-volume"},[r("ul",[r("li",{staticClass:"sales-volume-list",class:{active:t.orderByPageViewsCount},attrs:{"data-id":"0"},on:{click:t.getOrderByPageViewsCountProdList}},[t._v("销量")])])]),r("div",{staticClass:"news-products"},[r("ul",[r("li",{staticClass:"news-products-list",class:{active:t.orderByTime},attrs:{"data-id":"0"},on:{click:t.getOrderByTimeProdList}},[t._v("新品")])])]),r("div",{staticClass:"products-prices"},[r("ul",[r("li",{staticClass:"products-prices-list",class:{active:t.orderByPrice},attrs:{"data-id":"0"},on:{click:t.getOrderByPriceProdList}},[t._v("价格")])])])])])]),r("div",{attrs:{id:"products-show"}},[r("div",{staticClass:"products-show-box"},[0==t.prodListData.total?r("div",[r("p",[t._v("还没有类似产品哦^_^，请选择其他相关产品，O(∩_∩)O谢谢！")])]):t._e(),0!=t.prodListData.total?r("div",[r("prodListShow",{attrs:{prodList:t.prodListData.list}})],1):t._e()])]),0!=t.prodListData.total?r("div",{attrs:{id:"products-pagination"}},[r("div",{staticClass:"products-pagination-box"},[r("pagination",{attrs:{total:t.total,display:t.display,"current-page":t.current},on:{pagechange:t.pagechange}})],1)]):t._e()])])},s=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"common-banner"}},[e("div",{staticClass:"common-banner-container"},[e("div",{staticClass:"common-banner-img"},[e("img",{attrs:{src:r("VEp1")}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"brand-nav-title"},[e("span",[this._v("当前位置:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"compl-sequence"},[e("span",[this._v("综合排序")])])}];i._withStripped=!0;var a={render:i,staticRenderFns:s};e.a=a}});