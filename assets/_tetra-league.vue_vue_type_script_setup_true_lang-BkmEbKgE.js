import{d as O,k as T,h as v,F as L,o as f,g as b,u as _,_ as t,w as a,b as i,m as c,t as p,e as h,c as z,a as W}from"./index-d3Nv2PvX.js";import{_ as w}from"./dynamic-import-helper-BheWnx7M.js";import{c as C}from"./index-Bem5ymvb.js";import{_ as $}from"./Image-5R8WU2kk.js";import{l as E}from"./chunk-GK5I7C4J-5krRHSV_.js";import{e as M}from"./chunk-SQKQXXQG-kVuZRh9F.js";import{c as P,f as I,g,a as k,d as S,u as D,e as B,h as U}from"./light-VyWawr5E.js";import{d as q,s as G}from"./light-fQwtIiG3.js";import{r as y}from"./use-style-C-GJeiq0.js";import{_ as J}from"./text-TmElWV2H.js";import{_ as K}from"./Flex-Dsx2KXf8.js";import{_ as Q}from"./Card-CMdPQQps.js";const X=P("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[I("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[I("no-title",`
 display: flex;
 align-items: center;
 `)]),g("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),k("title-position-left",[g("line",[k("left",{width:"28px"})])]),k("title-position-right",[g("line",[k("right",{width:"28px"})])]),k("dashed",[g("line",`
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
 `),g("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),I("dashed",[g("line",{backgroundColor:"var(--n-color)"})]),k("dashed",[g("line",{borderColor:"var(--n-color)"})]),k("vertical",{backgroundColor:"var(--n-color)"})]),Y=Object.assign(Object.assign({},D.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),Z=O({name:"Divider",props:Y,setup(n){const{mergedClsPrefixRef:s,inlineThemeDisabled:d}=S(n),m=D("Divider","-divider",X,q,n,s),u=T(()=>{const{common:{cubicBezierEaseInOut:r},self:{color:o,textColor:l,fontWeight:R}}=m.value;return{"--n-bezier":r,"--n-color":o,"--n-text-color":l,"--n-font-weight":R}}),e=d?B("divider",void 0,u,n):void 0;return{mergedClsPrefix:s,cssVars:d?void 0:u,themeClass:e==null?void 0:e.themeClass,onRender:e==null?void 0:e.onRender}},render(){var n;const{$slots:s,titlePlacement:d,vertical:m,dashed:u,cssVars:e,mergedClsPrefix:r}=this;return(n=this.onRender)===null||n===void 0||n.call(this),v("div",{role:"separator",class:[`${r}-divider`,this.themeClass,{[`${r}-divider--vertical`]:m,[`${r}-divider--no-title`]:!s.default,[`${r}-divider--dashed`]:u,[`${r}-divider--title-position-${d}`]:s.default&&d}],style:e},m?null:v("div",{class:`${r}-divider__line ${r}-divider__line--left`}),!m&&s.default?v(L,null,v("div",{class:`${r}-divider__title`},this.$slots),v("div",{class:`${r}-divider__line ${r}-divider__line--right`})):null)}}),ee=P("statistic",[g("label",`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),P("statistic-value",`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[g("prefix",`
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[P("icon",{verticalAlign:"-0.125em"})]),g("content",`
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),g("suffix",`
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[P("icon",{verticalAlign:"-0.125em"})])])]),te=Object.assign(Object.assign({},D.props),{tabularNums:Boolean,label:String,value:[String,Number]}),se=O({name:"Statistic",props:te,setup(n){const{mergedClsPrefixRef:s,inlineThemeDisabled:d,mergedRtlRef:m}=S(n),u=D("Statistic","-statistic",ee,G,n,s),e=U("Statistic",m,s),r=T(()=>{const{self:{labelFontWeight:l,valueFontSize:R,valueFontWeight:A,valuePrefixTextColor:V,labelTextColor:x,valueSuffixTextColor:N,valueTextColor:j,labelFontSize:F},common:{cubicBezierEaseInOut:H}}=u.value;return{"--n-bezier":H,"--n-label-font-size":F,"--n-label-font-weight":l,"--n-label-text-color":x,"--n-value-font-weight":A,"--n-value-font-size":R,"--n-value-prefix-text-color":V,"--n-value-suffix-text-color":N,"--n-value-text-color":j}}),o=d?B("statistic",void 0,r,n):void 0;return{rtlEnabled:e,mergedClsPrefix:s,cssVars:d?void 0:r,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var n;const{mergedClsPrefix:s,$slots:{default:d,label:m,prefix:u,suffix:e}}=this;return(n=this.onRender)===null||n===void 0||n.call(this),v("div",{class:[`${s}-statistic`,this.themeClass,this.rtlEnabled&&`${s}-statistic--rtl`],style:this.cssVars},y(m,r=>v("div",{class:`${s}-statistic__label`},this.label||r)),v("div",{class:`${s}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?"tabular-nums":""}},y(u,r=>r&&v("span",{class:`${s}-statistic-value__prefix`},r)),this.value!==void 0?v("span",{class:`${s}-statistic-value__content`},this.value):y(d,r=>r&&v("span",{class:`${s}-statistic-value__content`},r)),y(e,r=>r&&v("span",{class:`${s}-statistic-value__suffix`},r))))}}),ae=O({__name:"rank",props:{rank:{}},setup(n){const s=n,d=C(async()=>await w(Object.assign({"../../../shared/assets/images/ranks/a+.svg":()=>t(()=>import("./a_-B_1WAD8z.js"),[],import.meta.url),"../../../shared/assets/images/ranks/a-.svg":()=>t(()=>import("./a--BICzKy-Y.js"),[],import.meta.url),"../../../shared/assets/images/ranks/a.svg":()=>t(()=>import("./a-DaV3DM5G.js"),[],import.meta.url),"../../../shared/assets/images/ranks/b+.svg":()=>t(()=>import("./b_-B6YbDT1j.js"),[],import.meta.url),"../../../shared/assets/images/ranks/b-.svg":()=>t(()=>import("./b--qHIuQCgX.js"),[],import.meta.url),"../../../shared/assets/images/ranks/b.svg":()=>t(()=>import("./b-C9M5d8M1.js"),[],import.meta.url),"../../../shared/assets/images/ranks/c+.svg":()=>t(()=>import("./c_-eVlLiVxL.js"),[],import.meta.url),"../../../shared/assets/images/ranks/c-.svg":()=>t(()=>import("./c--DasCfGDF.js"),[],import.meta.url),"../../../shared/assets/images/ranks/c.svg":()=>t(()=>import("./c-B4Hlmr2I.js"),[],import.meta.url),"../../../shared/assets/images/ranks/d+.svg":()=>t(()=>import("./d_-Di1wv7pH.js"),[],import.meta.url),"../../../shared/assets/images/ranks/d.svg":()=>t(()=>import("./d-B6G9Qcl3.js"),[],import.meta.url),"../../../shared/assets/images/ranks/s+.svg":()=>t(()=>import("./s_-DoD2uDfa.js"),[],import.meta.url),"../../../shared/assets/images/ranks/s-.svg":()=>t(()=>import("./s--B-xA9CF1.js"),[],import.meta.url),"../../../shared/assets/images/ranks/s.svg":()=>t(()=>import("./s-CNeWXMse.js"),[],import.meta.url),"../../../shared/assets/images/ranks/ss.svg":()=>t(()=>import("./ss-tqVEKLDu.js"),[],import.meta.url),"../../../shared/assets/images/ranks/u.svg":()=>t(()=>import("./u-Da1r6iHp.js"),[],import.meta.url),"../../../shared/assets/images/ranks/x.svg":()=>t(()=>import("./x-BTYG8EN1.js"),[],import.meta.url),"../../../shared/assets/images/ranks/z.svg":()=>t(()=>import("./z-B_3PWuVK.js"),[],import.meta.url)}),`../../../shared/assets/images/ranks/${s.rank}.svg`,8).then(m=>m.default));return(m,u)=>{const e=$;return f(),b(e,{src:_(d)},null,8,["src"])}}}),re={key:0,class:"text-right"},ie={class:"text-center"},he=O({__name:"_tetra-league",props:{rank:{},tr:{},glicko:{},rd:{},country:{},global_rank:{},country_rank:{},pps:{},apm:{},apl:{},vs:{},adpl:{},statistic:{},decaying:{type:Boolean},highest_rank:{}},setup(n){const s=n,d=C(async()=>await w(Object.assign({"../../../../shared/assets/images/ranks/a+.svg":()=>t(()=>import("./a_-B_1WAD8z.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/a-.svg":()=>t(()=>import("./a--BICzKy-Y.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/a.svg":()=>t(()=>import("./a-DaV3DM5G.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/b+.svg":()=>t(()=>import("./b_-B6YbDT1j.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/b-.svg":()=>t(()=>import("./b--qHIuQCgX.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/b.svg":()=>t(()=>import("./b-C9M5d8M1.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/c+.svg":()=>t(()=>import("./c_-eVlLiVxL.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/c-.svg":()=>t(()=>import("./c--DasCfGDF.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/c.svg":()=>t(()=>import("./c-B4Hlmr2I.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/d+.svg":()=>t(()=>import("./d_-Di1wv7pH.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/d.svg":()=>t(()=>import("./d-B6G9Qcl3.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/s+.svg":()=>t(()=>import("./s_-DoD2uDfa.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/s-.svg":()=>t(()=>import("./s--B-xA9CF1.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/s.svg":()=>t(()=>import("./s-CNeWXMse.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/ss.svg":()=>t(()=>import("./ss-tqVEKLDu.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/u.svg":()=>t(()=>import("./u-Da1r6iHp.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/x.svg":()=>t(()=>import("./x-BTYG8EN1.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/z.svg":()=>t(()=>import("./z-B_3PWuVK.js"),[],import.meta.url)}),`../../../../shared/assets/images/ranks/${s.highest_rank}.svg`,9).then(e=>e.default)),m=T(()=>M(s.country)?"NA":s.country.toUpperCase()),u=T(()=>{const e={depth:3,status:"default",arrow:{depth:3,status:"default"}};return s.decaying&&(delete e.arrow.depth,e.arrow.status="warning",s.rd>=98&&(e.arrow.status="error")),s.rd>=100&&(delete e.depth,e.status="error"),e});return(e,r)=>{const o=J,l=K,R=Z,A=$,V=Q,x=se;return f(),b(l,{wrap:!1},{default:a(()=>[i(V,{size:"small"},{default:a(()=>[i(l,{size:0,vertical:""},{default:a(()=>[i(l,{align:"center",justify:"space-between"},{default:a(()=>[i(l,{align:"center",size:"small"},{default:a(()=>[i(ae,{rank:s.rank,class:"[&>img]:size-15"},null,8,["rank"]),i(l,{size:0,vertical:""},{default:a(()=>[i(o,{class:"text-2xl fw-bold"},{default:a(()=>[c(p(e.tr)+" TR",1)]),_:1}),i(l,{size:0},{default:a(()=>[i(o,{depth:3},{default:a(()=>[c(p(e.glicko),1)]),_:1}),i(o,{depth:3},{default:a(()=>[c("±")]),_:1}),i(o,{depth:_(u).depth,type:_(u).status},{default:a(()=>[c(p(e.rd),1)]),_:1},8,["depth","type"]),e.decaying?(f(),b(o,{key:0,depth:_(u).arrow.depth,type:_(u).arrow.status,class:"text-4 font-[HUN]"},{default:a(()=>[c(" Ƿ ")]),_:1},8,["depth","type"])):h("",!0)]),_:1})]),_:1})]),_:1}),[e.global_rank,e.country_rank].some(_(E))?(f(),z("div",re,[i(l,{size:0,vertical:""},{default:a(()=>[_(E)(e.global_rank)?(f(),b(o,{key:0,class:"text-sm fw-bold",type:"success"},{default:a(()=>[c(" #"+p(e.global_rank),1)]),_:1})):h("",!0),_(E)(e.country)&&_(E)(e.country_rank)?(f(),b(o,{key:1,class:"text-sm fw-bold",type:"info"},{default:a(()=>[c(p(_(m))+"#"+p(e.country_rank),1)]),_:1})):h("",!0)]),_:1})])):h("",!0)]),_:1}),i(l,{size:0,align:"center",justify:"center"},{default:a(()=>[_(E)(e.statistic)?(f(),z(L,{key:0},[i(o,{depth:3,class:"text-sm"},{default:a(()=>[c(" 胜率: "+p(e.statistic.wins)+" / "+p(e.statistic.total)+" ("+p((e.statistic.wins/e.statistic.total*100).toFixed(2))+"%) ",1)]),_:1}),i(R,{vertical:""})],64)):h("",!0),_(E)(e.highest_rank)?(f(),z(L,{key:1},[i(o,{depth:3},{default:a(()=>[c("历史最高:")]),_:1}),i(A,{src:_(d),class:"[&>img]:size-4"},null,8,["src"])],64)):h("",!0)]),_:1})]),_:1})]),_:1}),i(V,{size:"small"},{default:a(()=>[W("div",ie,[i(l,{justify:"space-evenly"},{default:a(()=>[i(x,{value:e.pps,label:"PPS"},null,8,["value"]),i(x,{label:"APM"},{default:a(()=>[i(l,{size:0,vertical:""},{default:a(()=>[i(o,null,{default:a(()=>[c(p(e.apm),1)]),_:1}),i(o,{depth:3,class:"text-sm"},{default:a(()=>[c(" (x"+p(e.apl)+") ",1)]),_:1})]),_:1})]),_:1}),_(E)(e.vs)?(f(),b(x,{key:0,label:"VS"},{default:a(()=>[i(l,{size:0,vertical:""},{default:a(()=>[i(o,null,{default:a(()=>[c(p(e.vs),1)]),_:1}),_(E)(e.adpl)?(f(),b(o,{key:0,depth:3,class:"text-sm"},{default:a(()=>[c(" (x"+p(e.adpl)+") ",1)]),_:1})):h("",!0)]),_:1})]),_:1})):h("",!0)]),_:1})])]),_:1})]),_:1})}}});export{he as _,Z as a};
