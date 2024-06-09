import{d as w,k as O,h as c,F as L,o as h,g as x,w as s,b as r,u as n,m as _,t as u,e as E,c as A,a as H,_ as t}from"./index-koh2UFBd.js";import{_ as C}from"./dynamic-import-helper-BheWnx7M.js";import{l as b}from"./chunk-GK5I7C4J-5krRHSV_.js";import{u as W}from"./chunk-YCOFVOXU-TAodfX1t.js";import{c as $}from"./index-BjBpgaq9.js";import{i as V,z as I,p as v,j as k,k as S,u as D,l as B,q as M}from"./light-V0Gqp6-o.js";import{d as U,b as q}from"./light-NP852Bau.js";import{a as T}from"./use-style-DZu6tUTz.js";import{_ as G}from"./Image-D7k4g8Yj.js";import{_ as J}from"./text-CLKrZIZ1.js";import{_ as K}from"./Flex-DJNnMvYm.js";import{_ as Q}from"./Card-B1_NCxQa.js";const X=V("divider",`
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
 `)]),v("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),k("title-position-left",[v("line",[k("left",{width:"28px"})])]),k("title-position-right",[v("line",[k("right",{width:"28px"})])]),k("dashed",[v("line",`
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
 `),v("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),I("dashed",[v("line",{backgroundColor:"var(--n-color)"})]),k("dashed",[v("line",{borderColor:"var(--n-color)"})]),k("vertical",{backgroundColor:"var(--n-color)"})]),Y=Object.assign(Object.assign({},D.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),Z=w({name:"Divider",props:Y,setup(i){const{mergedClsPrefixRef:a,inlineThemeDisabled:m}=S(i),p=D("Divider","-divider",X,U,i,a),g=O(()=>{const{common:{cubicBezierEaseInOut:e},self:{color:f,textColor:R,fontWeight:l}}=p.value;return{"--n-bezier":e,"--n-color":f,"--n-text-color":R,"--n-font-weight":l}}),o=m?B("divider",void 0,g,i):void 0;return{mergedClsPrefix:a,cssVars:m?void 0:g,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var i;const{$slots:a,titlePlacement:m,vertical:p,dashed:g,cssVars:o,mergedClsPrefix:e}=this;return(i=this.onRender)===null||i===void 0||i.call(this),c("div",{role:"separator",class:[`${e}-divider`,this.themeClass,{[`${e}-divider--vertical`]:p,[`${e}-divider--no-title`]:!a.default,[`${e}-divider--dashed`]:g,[`${e}-divider--title-position-${m}`]:a.default&&m}],style:o},p?null:c("div",{class:`${e}-divider__line ${e}-divider__line--left`}),!p&&a.default?c(L,null,c("div",{class:`${e}-divider__title`},this.$slots),c("div",{class:`${e}-divider__line ${e}-divider__line--right`})):null)}}),ee=V("statistic",[v("label",`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),V("statistic-value",`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[v("prefix",`
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[V("icon",{verticalAlign:"-0.125em"})]),v("content",`
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),v("suffix",`
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[V("icon",{verticalAlign:"-0.125em"})])])]),te=Object.assign(Object.assign({},D.props),{tabularNums:Boolean,label:String,value:[String,Number]}),se=w({name:"Statistic",props:te,setup(i){const{mergedClsPrefixRef:a,inlineThemeDisabled:m,mergedRtlRef:p}=S(i),g=D("Statistic","-statistic",ee,q,i,a),o=M("Statistic",p,a),e=O(()=>{const{self:{labelFontWeight:R,valueFontSize:l,valueFontWeight:d,valuePrefixTextColor:z,labelTextColor:y,valueSuffixTextColor:P,valueTextColor:N,labelFontSize:j},common:{cubicBezierEaseInOut:F}}=g.value;return{"--n-bezier":F,"--n-label-font-size":j,"--n-label-font-weight":R,"--n-label-text-color":y,"--n-value-font-weight":d,"--n-value-font-size":l,"--n-value-prefix-text-color":z,"--n-value-suffix-text-color":P,"--n-value-text-color":N}}),f=m?B("statistic",void 0,e,i):void 0;return{rtlEnabled:o,mergedClsPrefix:a,cssVars:m?void 0:e,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender}},render(){var i;const{mergedClsPrefix:a,$slots:{default:m,label:p,prefix:g,suffix:o}}=this;return(i=this.onRender)===null||i===void 0||i.call(this),c("div",{class:[`${a}-statistic`,this.themeClass,this.rtlEnabled&&`${a}-statistic--rtl`],style:this.cssVars},T(p,e=>c("div",{class:`${a}-statistic__label`},this.label||e)),c("div",{class:`${a}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?"tabular-nums":""}},T(g,e=>e&&c("span",{class:`${a}-statistic-value__prefix`},e)),this.value!==void 0?c("span",{class:`${a}-statistic-value__content`},this.value):T(m,e=>e&&c("span",{class:`${a}-statistic-value__content`},e)),T(o,e=>e&&c("span",{class:`${a}-statistic-value__suffix`},e))))}}),ae={key:0,class:"text-right"},re={class:"text-center"},fe=w({__name:"_tetra-league",props:{rank:{},tr:{},glicko:{},rd:{},country:{},global_rank:{},country_rank:{},pps:{},apm:{},apl:{},vs:{},adpl:{},statistic:{},decaying:{type:Boolean},highest_rank:{}},setup(i){const a=i,m=$(async()=>await C(Object.assign({"../../../../shared/assets/images/ranks/a+.svg":()=>t(()=>import("./a_-B_1WAD8z.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/a-.svg":()=>t(()=>import("./a--BICzKy-Y.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/a.svg":()=>t(()=>import("./a-DaV3DM5G.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/b+.svg":()=>t(()=>import("./b_-B6YbDT1j.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/b-.svg":()=>t(()=>import("./b--qHIuQCgX.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/b.svg":()=>t(()=>import("./b-C9M5d8M1.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/c+.svg":()=>t(()=>import("./c_-eVlLiVxL.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/c-.svg":()=>t(()=>import("./c--DasCfGDF.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/c.svg":()=>t(()=>import("./c-B4Hlmr2I.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/d+.svg":()=>t(()=>import("./d_-Di1wv7pH.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/d.svg":()=>t(()=>import("./d-B6G9Qcl3.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/s+.svg":()=>t(()=>import("./s_-DoD2uDfa.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/s-.svg":()=>t(()=>import("./s--B-xA9CF1.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/s.svg":()=>t(()=>import("./s-CNeWXMse.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/ss.svg":()=>t(()=>import("./ss-tqVEKLDu.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/u.svg":()=>t(()=>import("./u-Da1r6iHp.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/x.svg":()=>t(()=>import("./x-BTYG8EN1.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/z.svg":()=>t(()=>import("./z-B_3PWuVK.js"),[],import.meta.url)}),`../../../../shared/assets/images/ranks/${a.rank}.svg`,9).then(e=>e.default)),p=$(async()=>await C(Object.assign({"../../../../shared/assets/images/ranks/a+.svg":()=>t(()=>import("./a_-B_1WAD8z.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/a-.svg":()=>t(()=>import("./a--BICzKy-Y.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/a.svg":()=>t(()=>import("./a-DaV3DM5G.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/b+.svg":()=>t(()=>import("./b_-B6YbDT1j.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/b-.svg":()=>t(()=>import("./b--qHIuQCgX.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/b.svg":()=>t(()=>import("./b-C9M5d8M1.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/c+.svg":()=>t(()=>import("./c_-eVlLiVxL.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/c-.svg":()=>t(()=>import("./c--DasCfGDF.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/c.svg":()=>t(()=>import("./c-B4Hlmr2I.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/d+.svg":()=>t(()=>import("./d_-Di1wv7pH.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/d.svg":()=>t(()=>import("./d-B6G9Qcl3.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/s+.svg":()=>t(()=>import("./s_-DoD2uDfa.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/s-.svg":()=>t(()=>import("./s--B-xA9CF1.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/s.svg":()=>t(()=>import("./s-CNeWXMse.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/ss.svg":()=>t(()=>import("./ss-tqVEKLDu.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/u.svg":()=>t(()=>import("./u-Da1r6iHp.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/x.svg":()=>t(()=>import("./x-BTYG8EN1.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/z.svg":()=>t(()=>import("./z-B_3PWuVK.js"),[],import.meta.url)}),`../../../../shared/assets/images/ranks/${a.highest_rank}.svg`,9).then(e=>e.default)),g=O(()=>W(a.country)?"NA":a.country.toUpperCase()),o=O(()=>{const e={depth:3,status:"default",arrow:{depth:3,status:"default"}};return a.decaying&&(delete e.arrow.depth,e.arrow.status="warning",a.rd>=98&&(e.arrow.status="error")),a.rd>=100&&(delete e.depth,e.status="error"),e});return(e,f)=>{const R=G,l=J,d=K,z=Z,y=Q,P=se;return h(),x(d,{vertical:""},{default:s(()=>[r(y,{size:"small"},{default:s(()=>[r(d,{size:0,vertical:""},{default:s(()=>[r(d,{align:"center",justify:"space-between"},{default:s(()=>[r(d,{align:"center",size:"small"},{default:s(()=>[r(R,{src:n(m),class:"[&>img]:size-15"},null,8,["src"]),r(d,{size:0,vertical:""},{default:s(()=>[r(l,{class:"text-2xl fw-bold"},{default:s(()=>[_(u(e.tr)+" TR",1)]),_:1}),r(d,{size:0},{default:s(()=>[r(l,{depth:3},{default:s(()=>[_(u(e.glicko),1)]),_:1}),r(l,{depth:3},{default:s(()=>[_("±")]),_:1}),r(l,{depth:n(o).depth,type:n(o).status},{default:s(()=>[_(u(e.rd),1)]),_:1},8,["depth","type"]),e.decaying?(h(),x(l,{key:0,depth:n(o).arrow.depth,type:n(o).arrow.status,class:"text-4 font-[HUN]"},{default:s(()=>[_(" Ƿ ")]),_:1},8,["depth","type"])):E("",!0)]),_:1})]),_:1})]),_:1}),[e.global_rank,e.country_rank].some(n(b))?(h(),A("div",ae,[r(d,{size:0,vertical:""},{default:s(()=>[n(b)(e.global_rank)?(h(),x(l,{key:0,class:"text-sm fw-bold",type:"success"},{default:s(()=>[_(" #"+u(e.global_rank),1)]),_:1})):E("",!0),n(b)(e.country)&&n(b)(e.country_rank)?(h(),x(l,{key:1,class:"text-sm fw-bold",type:"info"},{default:s(()=>[_(u(n(g))+"#"+u(e.country_rank),1)]),_:1})):E("",!0)]),_:1})])):E("",!0)]),_:1}),r(d,{size:0,align:"center",justify:"center"},{default:s(()=>[n(b)(e.statistic)?(h(),A(L,{key:0},[r(l,{depth:3,class:"text-sm"},{default:s(()=>[_(" 胜率: "+u(e.statistic.wins)+" / "+u(e.statistic.total)+" ("+u((e.statistic.wins/e.statistic.total*100).toFixed(2))+"%) ",1)]),_:1}),r(z,{vertical:""})],64)):E("",!0),n(b)(e.highest_rank)?(h(),A(L,{key:1},[r(l,{depth:3},{default:s(()=>[_("历史最高:")]),_:1}),r(R,{src:n(p),class:"[&>img]:size-4"},null,8,["src"])],64)):E("",!0)]),_:1})]),_:1})]),_:1}),r(y,{size:"small"},{default:s(()=>[H("div",re,[r(d,{justify:"space-evenly"},{default:s(()=>[r(P,{value:e.pps,label:"PPS"},null,8,["value"]),r(P,{label:"APM"},{default:s(()=>[r(d,{size:0,vertical:""},{default:s(()=>[r(l,null,{default:s(()=>[_(u(e.apm),1)]),_:1}),r(l,{depth:3,class:"text-sm"},{default:s(()=>[_(" (x"+u(e.apl)+") ",1)]),_:1})]),_:1})]),_:1}),n(b)(e.vs)?(h(),x(P,{key:0,label:"VS"},{default:s(()=>[r(d,{size:0,vertical:""},{default:s(()=>[r(l,null,{default:s(()=>[_(u(e.vs),1)]),_:1}),n(b)(e.adpl)?(h(),x(l,{key:0,depth:3,class:"text-sm"},{default:s(()=>[_(" (x"+u(e.adpl)+") ",1)]),_:1})):E("",!0)]),_:1})]),_:1})):E("",!0)]),_:1})])]),_:1})]),_:1})}}});export{fe as _,Z as a};
