"use strict";(self["webpackChunkweek6_vue_project"]=self["webpackChunkweek6_vue_project"]||[]).push([[861],{861:function(t,e,u){u.r(e),u.d(e,{default:function(){return h}});var r=u(252),n=u(577);const o=(0,r._)("h2",null,"前台單一產品資訊頁",-1);function c(t,e,u,c,s,a){return(0,r.wg)(),(0,r.iD)(r.HY,null,[o,(0,r.Uk)(" "+(0,n.zw)(s.product),1)],64)}var s={data(){return{product:[]}},mounted(){const{id:t}=this.$route.params;this.$http.get(`https://vue3-course-api.hexschool.io/v2/api/sylviah/product/${t}`).then((t=>{this.product=t.data.product}))}},a=u(744);const p=(0,a.Z)(s,[["render",c]]);var h=p}}]);
//# sourceMappingURL=861.55cbc0eb.js.map