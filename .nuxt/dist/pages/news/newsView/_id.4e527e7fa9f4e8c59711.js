webpackJsonp([26],{"56cL":function(t,a,e){"use strict";var s=e("Xxa5"),i=e.n(s),r=e("exGp"),l=e.n(r),n=e("mtWM"),c=e.n(n);a.a={data:function(){return{}},validate:function(t){var a=t.params;return/^\d+$/.test(a.id)},asyncData:function(){var t=l()(i.a.mark(function t(a){var e,s,r,l,n,d,o,v=a.params,w=a.query,u=a.store;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=v.id,s=w.category,t.next=4,c.a.get(u.state.wordpressAPI+"/article/getArticleDetails/"+e);case 4:return r=t.sent,t.next=7,c.a.get(u.state.wordpressAPI+"/article/getArticleNextAndBefore/"+s+"/"+e);case 7:return l=t.sent,t.next=10,c.a.get(u.state.wordpressAPI+"/article/getRecommendsByCategoryId/"+s+"/8");case 10:return n=t.sent,t.next=13,c.a.get(u.state.wordpressAPI+"/article/getArticleNew/6");case 13:return d=t.sent,t.next=16,c.a.get(u.state.wordpressAPI+"/article/getArticleRandom");case 16:return o=t.sent,t.abrupt("return",{articleData:r.data,preNextData:l.data.list,relatedArticleData:n.data,latestArticleData:d.data,loveArticleData:o.data});case 18:case"end":return t.stop()}},t,this)}));return function(a){return t.apply(this,arguments)}}(),head:function(){return{title:this.articleData.articleMetaTitle,meta:[{name:"keywords",hid:"keywords",content:""+this.articleData.articleKeyWord},{name:"description",hid:"description",content:""+this.articleData.articleMetaDescription}]}},mounted:function(){this.$nextTick(function(){window._bd_share_config={common:{bdSnsKey:{},bdText:"",bdMini:"1",bdMiniList:["qzone","tsina","weixin","sqq","duitang","hx","fx","youdao","sdo","qingbiji","people","xinhua","mail","isohu","yaolan","wealink","ty","iguba","fbook","twi","linkedin","h163","evernotecn","copy","print"],bdPic:"",bdStyle:"2",bdSize:"32"},share:{}};var t=document.createElement("script");t.type="text/javascript",t.src="http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion="+~(-new Date/36e5),document.body.appendChild(t)})}}},VEWV:function(t,a){},a5So:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"cotainer"},[e("div",{attrs:{id:"bread-nav"}},[e("div",{staticClass:"brand-nav-box clearfix"},[e("div",{staticClass:"brand-nav-content"},[t._m(0),e("div",{staticClass:"brand-nav-list"},[e("ul",[e("li",[e("nuxt-link",{attrs:{target:"_blank",to:"/"}},[t._v("首页")])],1),e("li",[t._v(">")]),e("li",{staticClass:"brand-nav-products"},[e("nuxt-link",{attrs:{target:"_blank",to:"/news"}},[t._v("新闻中心")])],1),e("li",[t._v(">")]),t._l(t.$store.state.headNewsNav,function(a,s){return s+1==t.$route.query.category?e("li",{key:a.articleCategoryId,staticClass:"brand-nav-prod-list"},[e("nuxt-link",{attrs:{target:"_blank",to:{name:"news-category",params:{category:a.articleCategoryId}}}},[t._v(t._s(a.articleCategoryName))])],1):t._e()})],2)])])])]),e("div",{attrs:{id:"news-view"}},[e("div",{staticClass:"news-view-box"},[e("div",{staticClass:"news-view-details-wrap"},[e("div",{staticClass:"news-view-title-box"},[e("div",{staticClass:"news-view-title"},[e("h1",[t._v(t._s(t.articleData.articleName))])]),e("div",{staticClass:"news-view-info"},[e("div",{staticClass:"news-view-sort"},[e("span",{staticClass:"news-view-info-title"},[t._v("分类:")]),e("span",{staticClass:"news-view-sort-cont"},[t._v(t._s(t.articleData.articleCategory.articleCategoryName))])]),e("div",{staticClass:"news-view-edit"},[e("span",{staticClass:"news-view-info-title"},[t._v("编辑:")]),e("span",{staticClass:"news-view-edit-cont"},[t._v(t._s(t.articleData.articleEditor.articleEditorName))])]),e("div",{staticClass:"news-view-access"},[e("span",{staticClass:"news-view-info-title"},[t._v("访问:")]),e("span",{staticClass:"news-view-access-cont"},[t._v(t._s(t.articleData.pageViews.pageViewsCount))])]),e("div",{staticClass:"news-view-time"},[e("span",{staticClass:"news-view-info-title"},[t._v("发布:")]),e("span",{staticClass:"news-view-time-cont"},[t._v(t._s(t.articleData.articleAddTime))])])])]),e("div",{staticClass:"news-view-details",domProps:{innerHTML:t._s(t.articleData.articleText)}})]),1==t.preNextData.length?e("div",{staticClass:"news-view-other"},[t.preNextData[0].articleId<this.$route.params.id?e("div",{staticClass:"news-view-prev"},[e("nuxt-link",{attrs:{to:{name:"news-newsView-id",params:{id:t.preNextData[0].articleId},query:{category:t.preNextData[0].articleCategoryId}}}},[e("span",[t._v("上一篇:")]),e("span",{staticClass:"news-view-prev-title"},[t._v(t._s(t.preNextData[0].articleName))])])],1):t._e(),t.preNextData[0].articleId>this.$route.params.id?e("div",{staticClass:"news-view-next"},[e("nuxt-link",{attrs:{to:{name:"news-newsView-id",params:{id:t.preNextData[0].articleId},query:{category:t.preNextData[0].articleCategoryId}}}},[e("span",[t._v("下一篇:")]),e("span",{staticClass:"news-view-next-title"},[t._v(t._s(t.preNextData[0].articleName))])])],1):t._e()]):t._e(),2==t.preNextData.length?e("div",{staticClass:"news-view-other"},[e("div",{staticClass:"news-view-prev"},[e("nuxt-link",{attrs:{to:{name:"news-newsView-id",params:{id:t.preNextData[0].articleId},query:{category:t.preNextData[0].articleCategoryId}}}},[e("span",[t._v("上一篇:")]),e("span",{staticClass:"news-view-prev-title"},[t._v(t._s(t.preNextData[0].articleName))])])],1),e("div",{staticClass:"news-view-next"},[e("nuxt-link",{attrs:{to:{name:"news-newsView-id",params:{id:t.preNextData[1].articleId},query:{category:t.preNextData[1].articleCategoryId}}}},[e("span",[t._v("下一篇:")]),e("span",{staticClass:"news-view-next-title"},[t._v(t._s(t.preNextData[1].articleName))])])],1)]):t._e(),e("div",{staticClass:"news-view-share-box clearfix"},[e("div",{staticClass:"news-view-tag-box"},[e("div",{staticClass:"news-view-tag"},[e("a",{attrs:{href:"javascript:viod(0);"}},[t._v(t._s(t.articleData.labelList[0].articleLabelName))])]),e("div",{staticClass:"news-view-tag"},[e("a",{attrs:{href:"javascript:viod(0);"}},[t._v(t._s(t.articleData.labelList[1].articleLabelName))])])]),t._m(1)])])]),e("div",{attrs:{id:"related-article"}},[e("div",{staticClass:"related-article-box"},[t._m(2),e("div",{staticClass:"related-article-list-box"},[e("div",{staticClass:"related-article-left"},[e("ul",t._l(t.relatedArticleData,function(a,s){return s<4?e("li",{key:a.articleId,staticClass:"related-article-list"},[e("div",{staticClass:"related-article-list-title"},[e("nuxt-link",{attrs:{target:"_blank",to:{name:"news-newsView-id",params:{id:a.articleId},query:{category:a.articleCategoryId}}}},[t._v(t._s(a.articleName))])],1)]):t._e()}))]),e("div",{staticClass:"related-article-right"},[e("ul",t._l(t.relatedArticleData,function(a,s){return s>3?e("li",{key:a.articleId,staticClass:"related-article-list"},[e("div",{staticClass:"related-article-list-title"},[e("nuxt-link",{attrs:{target:"_blank",to:{name:"news-newsView-id",params:{id:a.articleId},query:{category:a.articleCategoryId}}}},[t._v(t._s(a.articleName))])],1)]):t._e()}))])])])]),e("div",{attrs:{id:"latest-article"}},[e("div",{staticClass:"latest-article-box"},[t._m(3),e("div",{staticClass:"latest-article-list-box"},[e("ul",t._l(t.latestArticleData,function(a){return e("li",{key:a.articleId,staticClass:"latest-article-list"},[e("div",{staticClass:"latest-article-list-title"},[e("nuxt-link",{attrs:{target:"_blank",to:{name:"news-newsView-id",params:{id:a.articleId},query:{category:a.articleCategoryId}}}},[t._v(t._s(a.articleName))])],1)])}))])])]),e("div",{attrs:{id:"love-products"}},[e("div",{staticClass:"love-products-box"},[t._m(4),e("div",{staticClass:"love-products-list-box"},[e("ul",t._l(t.loveArticleData,function(a){return e("li",{key:a.articleId,staticClass:"love-products-list"},[e("div",{staticClass:"love-products-list-img"},[e("nuxt-link",{attrs:{target:"_blank",to:{name:"news-newsView-id",params:{id:a.articleId},query:{category:a.articleCategoryId}}}},[e("img",{attrs:{src:a.articleImg.articleImgSrc,alt:a.articleImg.articleImgAlt}})])],1),e("div",{staticClass:"love-products-list-title"},[e("nuxt-link",{attrs:{target:"_blank",to:{name:"news-newsView-id",params:{id:a.articleId},query:{category:a.articleCategoryId}}}},[t._v(t._s(a.articleName))])],1)])}))])])])])};s._withStripped=!0;var i={render:s,staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"brand-nav-title"},[a("span",[this._v("当前位置:")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"news-view-share"},[a("div",{staticClass:"bdsharebuttonbox"},[a("a",{staticClass:"bds_more",attrs:{href:"#","data-cmd":"more"}}),a("a",{staticClass:"bds_tsina",attrs:{href:"#","data-cmd":"tsina",title:"分享到新浪微博"}}),a("a",{staticClass:"bds_weixin",attrs:{href:"#","data-cmd":"weixin",title:"分享到微信"}}),a("a",{staticClass:"bds_qzone",attrs:{href:"#","data-cmd":"qzone",title:"分享到QQ空间"}}),a("a",{staticClass:"bds_sqq",attrs:{href:"#","data-cmd":"sqq",title:"分享到QQ好友"}})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"related-article-title"},[a("p",[this._v("相关文章")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"latest-article-title"},[a("p",[this._v("最新文章")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"love-products-title"},[a("p",[this._v("猜你喜欢")])])}]};a.a=i},z4IV:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e("56cL"),i=e("a5So"),r=!1;var l=function(t){r||e("VEWV")},n=e("VU/8")(s.a,i.a,!1,l,"data-v-34aa8354",null);n.options.__file="pages/news/newsView/_id.vue",a.default=n.exports}});