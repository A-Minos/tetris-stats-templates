import{d as D,k as P,h as p,F as O,o as g,g as x,w as t,b as r,m as c,t as _,u as d,e as h,c as T,a as j,_ as o}from"./index-Bnoyiqnw.js";import{_ as F}from"./dynamic-import-helper-BheWnx7M.js";import{_ as H}from"./rank.vue_vue_type_script_setup_true_lang-CCGxB_Sc.js";import{l as b}from"./chunk-GK5I7C4J-5krRHSV_.js";import{u as W}from"./chunk-YCOFVOXU-TAodfX1t.js";import{c as M}from"./index-DM71t6Hk.js";import{c as z,f as $,g as f,a as k,d as A,u as V,e as I,h as U}from"./light-CRRU6mWK.js";import{d as q,s as G}from"./light-BZXOviB-.js";import{r as w}from"./use-style-CNbhCXKe.js";import{_ as J}from"./text-B46ev7ct.js";import{_ as K}from"./Flex-DwFJOMMr.js";import{_ as Q}from"./Image-Bxv671tg.js";import{_ as X}from"./Card-ivCOOPZe.js";const Y=z("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[$("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[$("no-title",`
 display: flex;
 align-items: center;
 `)]),f("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),k("title-position-left",[f("line",[k("left",{width:"28px"})])]),k("title-position-right",[f("line",[k("right",{width:"28px"})])]),k("dashed",[f("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),k("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),f("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),$("dashed",[f("line",{backgroundColor:"var(--n-color)"})]),k("dashed",[f("line",{borderColor:"var(--n-color)"})]),k("vertical",{backgroundColor:"var(--n-color)"})]),Z=Object.assign(Object.assign({},V.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),ee=D({name:"Divider",props:Z,setup(l){const{mergedClsPrefixRef:s,inlineThemeDisabled:m}=A(l),v=V("Divider","-divider",Y,q,l,s),u=P(()=>{const{common:{cubicBezierEaseInOut:a},self:{color:i,textColor:n,fontWeight:y}}=v.value;return{"--n-bezier":a,"--n-color":i,"--n-text-color":n,"--n-font-weight":y}}),e=m?I("divider",void 0,u,l):void 0;return{mergedClsPrefix:s,cssVars:m?void 0:u,themeClass:e==null?void 0:e.themeClass,onRender:e==null?void 0:e.onRender}},render(){var l;const{$slots:s,titlePlacement:m,vertical:v,dashed:u,cssVars:e,mergedClsPrefix:a}=this;return(l=this.onRender)===null||l===void 0||l.call(this),p("div",{role:"separator",class:[`${a}-divider`,this.themeClass,{[`${a}-divider--vertical`]:v,[`${a}-divider--no-title`]:!s.default,[`${a}-divider--dashed`]:u,[`${a}-divider--title-position-${m}`]:s.default&&m}],style:e},v?null:p("div",{class:`${a}-divider__line ${a}-divider__line--left`}),!v&&s.default?p(O,null,p("div",{class:`${a}-divider__title`},this.$slots),p("div",{class:`${a}-divider__line ${a}-divider__line--right`})):null)}}),te=z("statistic",[f("label",`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),z("statistic-value",`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[f("prefix",`
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[z("icon",{verticalAlign:"-0.125em"})]),f("content",`
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),f("suffix",`
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[z("icon",{verticalAlign:"-0.125em"})])])]),se=Object.assign(Object.assign({},V.props),{tabularNums:Boolean,label:String,value:[String,Number]}),ae=D({name:"Statistic",props:se,setup(l){const{mergedClsPrefixRef:s,inlineThemeDisabled:m,mergedRtlRef:v}=A(l),u=V("Statistic","-statistic",te,G,l,s),e=U("Statistic",v,s),a=P(()=>{const{self:{labelFontWeight:n,valueFontSize:y,valueFontWeight:C,valuePrefixTextColor:R,labelTextColor:E,valueSuffixTextColor:L,valueTextColor:S,labelFontSize:B},common:{cubicBezierEaseInOut:N}}=u.value;return{"--n-bezier":N,"--n-label-font-size":B,"--n-label-font-weight":n,"--n-label-text-color":E,"--n-value-font-weight":C,"--n-value-font-size":y,"--n-value-prefix-text-color":R,"--n-value-suffix-text-color":L,"--n-value-text-color":S}}),i=m?I("statistic",void 0,a,l):void 0;return{rtlEnabled:e,mergedClsPrefix:s,cssVars:m?void 0:a,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var l;const{mergedClsPrefix:s,$slots:{default:m,label:v,prefix:u,suffix:e}}=this;return(l=this.onRender)===null||l===void 0||l.call(this),p("div",{class:[`${s}-statistic`,this.themeClass,this.rtlEnabled&&`${s}-statistic--rtl`],style:this.cssVars},w(v,a=>p("div",{class:`${s}-statistic__label`},this.label||a)),p("div",{class:`${s}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?"tabular-nums":""}},w(u,a=>a&&p("span",{class:`${s}-statistic-value__prefix`},a)),this.value!==void 0?p("span",{class:`${s}-statistic-value__content`},this.value):w(m,a=>a&&p("span",{class:`${s}-statistic-value__content`},a)),w(e,a=>a&&p("span",{class:`${s}-statistic-value__suffix`},a))))}}),re={key:0,class:"text-right"},ie={class:"text-center"},be=D({__name:"_tetra-league",props:{rank:{},tr:{},glicko:{},rd:{},country:{},global_rank:{},country_rank:{},pps:{},apm:{},apl:{},vs:{},adpl:{},statistic:{},decaying:{type:Boolean},highest_rank:{}},setup(l){const s=l,m=M(async()=>await F(Object.assign({"../../../../shared/assets/images/ranks/a+.svg":()=>o(()=>import("./a_-B_1WAD8z.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/a-.svg":()=>o(()=>import("./a--BICzKy-Y.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/a.svg":()=>o(()=>import("./a-DaV3DM5G.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/b+.svg":()=>o(()=>import("./b_-B6YbDT1j.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/b-.svg":()=>o(()=>import("./b--qHIuQCgX.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/b.svg":()=>o(()=>import("./b-C9M5d8M1.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/c+.svg":()=>o(()=>import("./c_-eVlLiVxL.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/c-.svg":()=>o(()=>import("./c--DasCfGDF.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/c.svg":()=>o(()=>import("./c-B4Hlmr2I.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/d+.svg":()=>o(()=>import("./d_-Di1wv7pH.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/d.svg":()=>o(()=>import("./d-B6G9Qcl3.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/s+.svg":()=>o(()=>import("./s_-DoD2uDfa.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/s-.svg":()=>o(()=>import("./s--B-xA9CF1.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/s.svg":()=>o(()=>import("./s-CNeWXMse.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/ss.svg":()=>o(()=>import("./ss-tqVEKLDu.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/u.svg":()=>o(()=>import("./u-Da1r6iHp.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/x.svg":()=>o(()=>import("./x-BTYG8EN1.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/z.svg":()=>o(()=>import("./z-B_3PWuVK.js"),[],import.meta.url)}),`../../../../shared/assets/images/ranks/${s.highest_rank}.svg`,9).then(e=>e.default)),v=P(()=>W(s.country)?"NA":s.country.toUpperCase()),u=P(()=>{const e={depth:3,status:"default",arrow:{depth:3,status:"default"}};return s.decaying&&(delete e.arrow.depth,e.arrow.status="warning",s.rd>=98&&(e.arrow.status="error")),s.rd>=100&&(delete e.depth,e.status="error"),e});return(e,a)=>{const i=J,n=K,y=ee,C=Q,R=X,E=ae;return g(),x(n,{vertical:""},{default:t(()=>[r(R,{size:"small"},{default:t(()=>[r(n,{size:0,vertical:""},{default:t(()=>[r(n,{align:"center",justify:"space-between"},{default:t(()=>[r(n,{align:"center",size:"small"},{default:t(()=>[r(H,{rank:s.rank,class:"[&>img]:size-15"},null,8,["rank"]),r(n,{size:0,vertical:""},{default:t(()=>[r(i,{class:"text-2xl fw-bold"},{default:t(()=>[c(_(e.tr)+" TR",1)]),_:1}),r(n,{size:0},{default:t(()=>[r(i,{depth:3},{default:t(()=>[c(_(e.glicko),1)]),_:1}),r(i,{depth:3},{default:t(()=>[c("±")]),_:1}),r(i,{depth:d(u).depth,type:d(u).status},{default:t(()=>[c(_(e.rd),1)]),_:1},8,["depth","type"]),e.decaying?(g(),x(i,{key:0,depth:d(u).arrow.depth,type:d(u).arrow.status,class:"text-4 font-[HUN]"},{default:t(()=>[c(" Ƿ ")]),_:1},8,["depth","type"])):h("",!0)]),_:1})]),_:1})]),_:1}),[e.global_rank,e.country_rank].some(d(b))?(g(),T("div",re,[r(n,{size:0,vertical:""},{default:t(()=>[d(b)(e.global_rank)?(g(),x(i,{key:0,class:"text-sm fw-bold",type:"success"},{default:t(()=>[c(" #"+_(e.global_rank),1)]),_:1})):h("",!0),d(b)(e.country)&&d(b)(e.country_rank)?(g(),x(i,{key:1,class:"text-sm fw-bold",type:"info"},{default:t(()=>[c(_(d(v))+"#"+_(e.country_rank),1)]),_:1})):h("",!0)]),_:1})])):h("",!0)]),_:1}),r(n,{size:0,align:"center",justify:"center"},{default:t(()=>[d(b)(e.statistic)?(g(),T(O,{key:0},[r(i,{depth:3,class:"text-sm"},{default:t(()=>[c(" 胜率: "+_(e.statistic.wins)+" / "+_(e.statistic.total)+" ("+_((e.statistic.wins/e.statistic.total*100).toFixed(2))+"%) ",1)]),_:1}),r(y,{vertical:""})],64)):h("",!0),d(b)(e.highest_rank)?(g(),T(O,{key:1},[r(i,{depth:3},{default:t(()=>[c("历史最高:")]),_:1}),r(C,{src:d(m),class:"[&>img]:size-4"},null,8,["src"])],64)):h("",!0)]),_:1})]),_:1})]),_:1}),r(R,{size:"small"},{default:t(()=>[j("div",ie,[r(n,{justify:"space-evenly"},{default:t(()=>[r(E,{value:e.pps,label:"PPS"},null,8,["value"]),r(E,{label:"APM"},{default:t(()=>[r(n,{size:0,vertical:""},{default:t(()=>[r(i,null,{default:t(()=>[c(_(e.apm),1)]),_:1}),r(i,{depth:3,class:"text-sm"},{default:t(()=>[c(" (x"+_(e.apl)+") ",1)]),_:1})]),_:1})]),_:1}),d(b)(e.vs)?(g(),x(E,{key:0,label:"VS"},{default:t(()=>[r(n,{size:0,vertical:""},{default:t(()=>[r(i,null,{default:t(()=>[c(_(e.vs),1)]),_:1}),d(b)(e.adpl)?(g(),x(i,{key:0,depth:3,class:"text-sm"},{default:t(()=>[c(" (x"+_(e.adpl)+") ",1)]),_:1})):h("",!0)]),_:1})]),_:1})):h("",!0)]),_:1})])]),_:1})]),_:1})}}});export{be as _,ee as a};
