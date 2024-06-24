import{d as $,k as O,h as u,F as T,o as f,g as E,w as a,b as i,m as p,t as _,u as v,c as w,e as b,a as j,_ as o}from"./index-DIvyLPQk.js";import{_ as F}from"./dynamic-import-helper-BheWnx7M.js";import{_ as W,a as H}from"./tetra_rating.vue_vue_type_script_setup_true_lang-CDVjKg8i.js";import{l as g}from"./chunk-GK5I7C4J-5krRHSV_.js";import{e as M}from"./chunk-SQKQXXQG-kVuZRh9F.js";import{c as q}from"./index-CfVCUatC.js";import{o as z,z as C,y as m,p as h,u as D,a as V,q as A,b as U}from"./light-CeDe_9BJ.js";import{d as G,b as J}from"./light-BHTPlRhb.js";import{a as P}from"./use-style-DNKA51TA.js";import{_ as K}from"./text-BXDgLm01.js";import{_ as Q}from"./Flex-DfL_fAzs.js";import{_ as X}from"./Image-P-g0WNHT.js";import{_ as Y}from"./Card-QBEwN5mv.js";const Z=z("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[C("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[C("no-title",`
 display: flex;
 align-items: center;
 `)]),m("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),h("title-position-left",[m("line",[h("left",{width:"28px"})])]),h("title-position-right",[m("line",[h("right",{width:"28px"})])]),h("dashed",[m("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),h("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),m("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),C("dashed",[m("line",{backgroundColor:"var(--n-color)"})]),h("dashed",[m("line",{borderColor:"var(--n-color)"})]),h("vertical",{backgroundColor:"var(--n-color)"})]),ee=Object.assign(Object.assign({},V.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),te=$({name:"Divider",props:ee,setup(l){const{mergedClsPrefixRef:s,inlineThemeDisabled:d}=D(l),c=V("Divider","-divider",Z,G,l,s),t=O(()=>{const{common:{cubicBezierEaseInOut:e},self:{color:r,textColor:k,fontWeight:x}}=c.value;return{"--n-bezier":e,"--n-color":r,"--n-text-color":k,"--n-font-weight":x}}),n=d?A("divider",void 0,t,l):void 0;return{mergedClsPrefix:s,cssVars:d?void 0:t,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var l;const{$slots:s,titlePlacement:d,vertical:c,dashed:t,cssVars:n,mergedClsPrefix:e}=this;return(l=this.onRender)===null||l===void 0||l.call(this),u("div",{role:"separator",class:[`${e}-divider`,this.themeClass,{[`${e}-divider--vertical`]:c,[`${e}-divider--no-title`]:!s.default,[`${e}-divider--dashed`]:t,[`${e}-divider--title-position-${d}`]:s.default&&d}],style:n},c?null:u("div",{class:`${e}-divider__line ${e}-divider__line--left`}),!c&&s.default?u(T,null,u("div",{class:`${e}-divider__title`},this.$slots),u("div",{class:`${e}-divider__line ${e}-divider__line--right`})):null)}}),se=z("statistic",[m("label",`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),z("statistic-value",`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[m("prefix",`
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[z("icon",{verticalAlign:"-0.125em"})]),m("content",`
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),m("suffix",`
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[z("icon",{verticalAlign:"-0.125em"})])])]),ae=Object.assign(Object.assign({},V.props),{tabularNums:Boolean,label:String,value:[String,Number]}),ie=$({name:"Statistic",props:ae,setup(l){const{mergedClsPrefixRef:s,inlineThemeDisabled:d,mergedRtlRef:c}=D(l),t=V("Statistic","-statistic",se,J,l,s),n=U("Statistic",c,s),e=O(()=>{const{self:{labelFontWeight:k,valueFontSize:x,valueFontWeight:R,valuePrefixTextColor:y,labelTextColor:I,valueSuffixTextColor:L,valueTextColor:S,labelFontSize:B},common:{cubicBezierEaseInOut:N}}=t.value;return{"--n-bezier":N,"--n-label-font-size":B,"--n-label-font-weight":k,"--n-label-text-color":I,"--n-value-font-weight":R,"--n-value-font-size":x,"--n-value-prefix-text-color":y,"--n-value-suffix-text-color":L,"--n-value-text-color":S}}),r=d?A("statistic",void 0,e,l):void 0;return{rtlEnabled:n,mergedClsPrefix:s,cssVars:d?void 0:e,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var l;const{mergedClsPrefix:s,$slots:{default:d,label:c,prefix:t,suffix:n}}=this;return(l=this.onRender)===null||l===void 0||l.call(this),u("div",{class:[`${s}-statistic`,this.themeClass,this.rtlEnabled&&`${s}-statistic--rtl`],style:this.cssVars},P(c,e=>u("div",{class:`${s}-statistic__label`},this.label||e)),u("div",{class:`${s}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?"tabular-nums":""}},P(t,e=>e&&u("span",{class:`${s}-statistic-value__prefix`},e)),this.value!==void 0?u("span",{class:`${s}-statistic-value__content`},this.value):P(d,e=>e&&u("span",{class:`${s}-statistic-value__content`},e)),P(n,e=>e&&u("span",{class:`${s}-statistic-value__suffix`},e))))}}),re={key:0,class:"text-right"},oe={class:"text-center"},ke=$({__name:"_tetra-league",props:{rank:{},tr:{},glicko:{},rd:{},country:{},global_rank:{},country_rank:{},pps:{},apm:{},apl:{},vs:{},adpl:{},statistic:{},decaying:{type:Boolean},highest_rank:{}},setup(l){const s=l,d=q(async()=>await F(Object.assign({"../../../../../shared/assets/images/ranks/a+.svg":()=>o(()=>import("./a_-B_1WAD8z.js"),[],import.meta.url),"../../../../../shared/assets/images/ranks/a-.svg":()=>o(()=>import("./a--BICzKy-Y.js"),[],import.meta.url),"../../../../../shared/assets/images/ranks/a.svg":()=>o(()=>import("./a-DaV3DM5G.js"),[],import.meta.url),"../../../../../shared/assets/images/ranks/b+.svg":()=>o(()=>import("./b_-B6YbDT1j.js"),[],import.meta.url),"../../../../../shared/assets/images/ranks/b-.svg":()=>o(()=>import("./b--qHIuQCgX.js"),[],import.meta.url),"../../../../../shared/assets/images/ranks/b.svg":()=>o(()=>import("./b-C9M5d8M1.js"),[],import.meta.url),"../../../../../shared/assets/images/ranks/c+.svg":()=>o(()=>import("./c_-eVlLiVxL.js"),[],import.meta.url),"../../../../../shared/assets/images/ranks/c-.svg":()=>o(()=>import("./c--DasCfGDF.js"),[],import.meta.url),"../../../../../shared/assets/images/ranks/c.svg":()=>o(()=>import("./c-B4Hlmr2I.js"),[],import.meta.url),"../../../../../shared/assets/images/ranks/d+.svg":()=>o(()=>import("./d_-Di1wv7pH.js"),[],import.meta.url),"../../../../../shared/assets/images/ranks/d.svg":()=>o(()=>import("./d-B6G9Qcl3.js"),[],import.meta.url),"../../../../../shared/assets/images/ranks/s+.svg":()=>o(()=>import("./s_-DoD2uDfa.js"),[],import.meta.url),"../../../../../shared/assets/images/ranks/s-.svg":()=>o(()=>import("./s--B-xA9CF1.js"),[],import.meta.url),"../../../../../shared/assets/images/ranks/s.svg":()=>o(()=>import("./s-CNeWXMse.js"),[],import.meta.url),"../../../../../shared/assets/images/ranks/ss.svg":()=>o(()=>import("./ss-tqVEKLDu.js"),[],import.meta.url),"../../../../../shared/assets/images/ranks/u.svg":()=>o(()=>import("./u-Da1r6iHp.js"),[],import.meta.url),"../../../../../shared/assets/images/ranks/x.svg":()=>o(()=>import("./x-BTYG8EN1.js"),[],import.meta.url),"../../../../../shared/assets/images/ranks/z.svg":()=>o(()=>import("./z-B_3PWuVK.js"),[],import.meta.url)}),`../../../../../shared/assets/images/ranks/${s.highest_rank}.svg`,10).then(t=>t.default)),c=O(()=>{if(!M(s.country))return s.country.toUpperCase()});return(t,n)=>{const e=K,r=Q,k=te,x=X,R=Y,y=ie;return f(),E(r,{wrap:!1},{default:a(()=>[i(R,{size:"small"},{default:a(()=>[i(r,{size:0,vertical:""},{default:a(()=>[i(r,{align:"center",justify:"space-between"},{default:a(()=>[i(r,{align:"center",size:"small"},{default:a(()=>[i(W,{rank:s.rank,class:"[&>img]:size-15"},null,8,["rank"]),i(r,{size:0,vertical:""},{default:a(()=>[i(e,{class:"text-2xl fw-bold"},{default:a(()=>[p(_(t.tr)+" TR",1)]),_:1}),i(H,{decaying:t.decaying,glicko:t.glicko,rd:t.rd},null,8,["decaying","glicko","rd"])]),_:1})]),_:1}),[t.global_rank,t.country_rank].some(v(g))?(f(),w("div",re,[i(r,{size:0,vertical:""},{default:a(()=>[v(g)(t.global_rank)?(f(),E(e,{key:0,class:"text-sm fw-bold",type:"success"},{default:a(()=>[p(" #"+_(t.global_rank),1)]),_:1})):b("",!0),v(g)(t.country)&&v(g)(t.country_rank)?(f(),E(e,{key:1,class:"text-sm fw-bold",type:"info"},{default:a(()=>[p(_(v(c))+"#"+_(t.country_rank),1)]),_:1})):b("",!0)]),_:1})])):b("",!0)]),_:1}),i(r,{size:0,align:"center",justify:"center"},{default:a(()=>[v(g)(t.statistic)?(f(),w(T,{key:0},[i(e,{depth:3,class:"text-sm"},{default:a(()=>[p(" 胜率: "+_(t.statistic.wins)+" / "+_(t.statistic.total)+" ("+_((t.statistic.wins/t.statistic.total*100).toFixed(2))+"%) ",1)]),_:1}),i(k,{vertical:""})],64)):b("",!0),v(g)(t.highest_rank)?(f(),w(T,{key:1},[i(e,{depth:3},{default:a(()=>[p("历史最高:")]),_:1}),i(x,{src:v(d),class:"[&>img]:size-4"},null,8,["src"])],64)):b("",!0)]),_:1})]),_:1})]),_:1}),i(R,{size:"small"},{default:a(()=>[j("div",oe,[i(r,{justify:"space-evenly"},{default:a(()=>[i(y,{value:t.pps,label:"PPS"},null,8,["value"]),i(y,{label:"APM"},{default:a(()=>[i(r,{size:0,vertical:""},{default:a(()=>[i(e,null,{default:a(()=>[p(_(t.apm),1)]),_:1}),i(e,{depth:3,class:"text-sm"},{default:a(()=>[p(" (x"+_(t.apl)+") ",1)]),_:1})]),_:1})]),_:1}),v(g)(t.vs)?(f(),E(y,{key:0,label:"VS"},{default:a(()=>[i(r,{size:0,vertical:""},{default:a(()=>[i(e,null,{default:a(()=>[p(_(t.vs),1)]),_:1}),v(g)(t.adpl)?(f(),E(e,{key:0,depth:3,class:"text-sm"},{default:a(()=>[p(" (x"+_(t.adpl)+") ",1)]),_:1})):b("",!0)]),_:1})]),_:1})):b("",!0)]),_:1})])]),_:1})]),_:1})}}});export{ke as _,te as a};
