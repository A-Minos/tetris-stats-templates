import{d as y,k as L,h as m,F as I,o as h,g as x,w as r,b as i,u as v,m as f,t as _,c as A,e as k,a as W,_ as t}from"./index-CSXTTfR5.js";import{_ as w}from"./dynamic-import-helper-BheWnx7M.js";import{l as E}from"./chunk-GK5I7C4J-5krRHSV_.js";import{u as H}from"./chunk-YCOFVOXU-TAodfX1t.js";import{c as C}from"./index-A4t9TrwO.js";import{i as P,z,p,j as b,k as $,u as O,l as S,q as M}from"./light-BJiKkxf9.js";import{d as q,b as U}from"./light-LgTXGL92.js";import{a as T}from"./use-style-CmP4ySGV.js";import{_ as G}from"./Image-DMYgpMJf.js";import{_ as J}from"./text-CKaXVP0j.js";import{_ as K}from"./Flex-Bdg4Eric.js";import{_ as Q}from"./Card-BY40uRSr.js";const X=P("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[z("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[z("no-title",`
 display: flex;
 align-items: center;
 `)]),p("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),b("title-position-left",[p("line",[b("left",{width:"28px"})])]),b("title-position-right",[p("line",[b("right",{width:"28px"})])]),b("dashed",[p("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),b("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),p("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),z("dashed",[p("line",{backgroundColor:"var(--n-color)"})]),b("dashed",[p("line",{borderColor:"var(--n-color)"})]),b("vertical",{backgroundColor:"var(--n-color)"})]),Y=Object.assign(Object.assign({},O.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),Z=y({name:"Divider",props:Y,setup(o){const{mergedClsPrefixRef:a,inlineThemeDisabled:d}=$(o),u=O("Divider","-divider",X,q,o,a),g=L(()=>{const{common:{cubicBezierEaseInOut:s},self:{color:c,textColor:l,fontWeight:n}}=u.value;return{"--n-bezier":s,"--n-color":c,"--n-text-color":l,"--n-font-weight":n}}),e=d?S("divider",void 0,g,o):void 0;return{mergedClsPrefix:a,cssVars:d?void 0:g,themeClass:e==null?void 0:e.themeClass,onRender:e==null?void 0:e.onRender}},render(){var o;const{$slots:a,titlePlacement:d,vertical:u,dashed:g,cssVars:e,mergedClsPrefix:s}=this;return(o=this.onRender)===null||o===void 0||o.call(this),m("div",{role:"separator",class:[`${s}-divider`,this.themeClass,{[`${s}-divider--vertical`]:u,[`${s}-divider--no-title`]:!a.default,[`${s}-divider--dashed`]:g,[`${s}-divider--title-position-${d}`]:a.default&&d}],style:e},u?null:m("div",{class:`${s}-divider__line ${s}-divider__line--left`}),!u&&a.default?m(I,null,m("div",{class:`${s}-divider__title`},this.$slots),m("div",{class:`${s}-divider__line ${s}-divider__line--right`})):null)}}),ee=P("statistic",[p("label",`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),P("statistic-value",`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[p("prefix",`
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[P("icon",{verticalAlign:"-0.125em"})]),p("content",`
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),p("suffix",`
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[P("icon",{verticalAlign:"-0.125em"})])])]),te=Object.assign(Object.assign({},O.props),{tabularNums:Boolean,label:String,value:[String,Number]}),se=y({name:"Statistic",props:te,setup(o){const{mergedClsPrefixRef:a,inlineThemeDisabled:d,mergedRtlRef:u}=$(o),g=O("Statistic","-statistic",ee,U,o,a),e=M("Statistic",u,a),s=L(()=>{const{self:{labelFontWeight:l,valueFontSize:n,valueFontWeight:D,valuePrefixTextColor:V,labelTextColor:R,valueSuffixTextColor:j,valueTextColor:B,labelFontSize:N},common:{cubicBezierEaseInOut:F}}=g.value;return{"--n-bezier":F,"--n-label-font-size":N,"--n-label-font-weight":l,"--n-label-text-color":R,"--n-value-font-weight":D,"--n-value-font-size":n,"--n-value-prefix-text-color":V,"--n-value-suffix-text-color":j,"--n-value-text-color":B}}),c=d?S("statistic",void 0,s,o):void 0;return{rtlEnabled:e,mergedClsPrefix:a,cssVars:d?void 0:s,themeClass:c==null?void 0:c.themeClass,onRender:c==null?void 0:c.onRender}},render(){var o;const{mergedClsPrefix:a,$slots:{default:d,label:u,prefix:g,suffix:e}}=this;return(o=this.onRender)===null||o===void 0||o.call(this),m("div",{class:[`${a}-statistic`,this.themeClass,this.rtlEnabled&&`${a}-statistic--rtl`],style:this.cssVars},T(u,s=>m("div",{class:`${a}-statistic__label`},this.label||s)),m("div",{class:`${a}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?"tabular-nums":""}},T(g,s=>s&&m("span",{class:`${a}-statistic-value__prefix`},s)),this.value!==void 0?m("span",{class:`${a}-statistic-value__content`},this.value):T(d,s=>s&&m("span",{class:`${a}-statistic-value__content`},s)),T(e,s=>s&&m("span",{class:`${a}-statistic-value__suffix`},s))))}}),ae={key:0,class:"text-right"},re={class:"text-center"},fe=y({__name:"_tetra-league",props:{rank:{},tr:{},glicko:{},rd:{},country:{},global_rank:{},country_rank:{},pps:{},apm:{},apl:{},vs:{},adpl:{},statistic:{},highest_rank:{}},setup(o){const a=o,d=C(async()=>await w(Object.assign({"../../../../shared/assets/images/ranks/a+.svg":()=>t(()=>import("./a_-B_1WAD8z.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/a-.svg":()=>t(()=>import("./a--BICzKy-Y.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/a.svg":()=>t(()=>import("./a-DaV3DM5G.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/b+.svg":()=>t(()=>import("./b_-B6YbDT1j.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/b-.svg":()=>t(()=>import("./b--qHIuQCgX.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/b.svg":()=>t(()=>import("./b-C9M5d8M1.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/c+.svg":()=>t(()=>import("./c_-eVlLiVxL.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/c-.svg":()=>t(()=>import("./c--DasCfGDF.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/c.svg":()=>t(()=>import("./c-B4Hlmr2I.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/d+.svg":()=>t(()=>import("./d_-Di1wv7pH.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/d.svg":()=>t(()=>import("./d-B6G9Qcl3.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/s+.svg":()=>t(()=>import("./s_-DoD2uDfa.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/s-.svg":()=>t(()=>import("./s--B-xA9CF1.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/s.svg":()=>t(()=>import("./s-CNeWXMse.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/ss.svg":()=>t(()=>import("./ss-tqVEKLDu.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/u.svg":()=>t(()=>import("./u-Da1r6iHp.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/x.svg":()=>t(()=>import("./x-BTYG8EN1.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/z.svg":()=>t(()=>import("./z-B_3PWuVK.js"),[],import.meta.url)}),`../../../../shared/assets/images/ranks/${a.rank}.svg`,9).then(e=>e.default)),u=C(async()=>await w(Object.assign({"../../../../shared/assets/images/ranks/a+.svg":()=>t(()=>import("./a_-B_1WAD8z.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/a-.svg":()=>t(()=>import("./a--BICzKy-Y.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/a.svg":()=>t(()=>import("./a-DaV3DM5G.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/b+.svg":()=>t(()=>import("./b_-B6YbDT1j.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/b-.svg":()=>t(()=>import("./b--qHIuQCgX.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/b.svg":()=>t(()=>import("./b-C9M5d8M1.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/c+.svg":()=>t(()=>import("./c_-eVlLiVxL.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/c-.svg":()=>t(()=>import("./c--DasCfGDF.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/c.svg":()=>t(()=>import("./c-B4Hlmr2I.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/d+.svg":()=>t(()=>import("./d_-Di1wv7pH.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/d.svg":()=>t(()=>import("./d-B6G9Qcl3.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/s+.svg":()=>t(()=>import("./s_-DoD2uDfa.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/s-.svg":()=>t(()=>import("./s--B-xA9CF1.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/s.svg":()=>t(()=>import("./s-CNeWXMse.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/ss.svg":()=>t(()=>import("./ss-tqVEKLDu.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/u.svg":()=>t(()=>import("./u-Da1r6iHp.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/x.svg":()=>t(()=>import("./x-BTYG8EN1.js"),[],import.meta.url),"../../../../shared/assets/images/ranks/z.svg":()=>t(()=>import("./z-B_3PWuVK.js"),[],import.meta.url)}),`../../../../shared/assets/images/ranks/${a.rank}.svg`,9).then(e=>e.default)),g=L(()=>H(a.country)?"NA":a.country.toUpperCase());return(e,s)=>{const c=G,l=J,n=K,D=Z,V=Q,R=se;return h(),x(n,{vertical:""},{default:r(()=>[i(V,{size:"small"},{default:r(()=>[i(n,{size:0,vertical:""},{default:r(()=>[i(n,{align:"center",justify:"space-between"},{default:r(()=>[i(n,{align:"center",size:"small"},{default:r(()=>[i(c,{src:v(d),class:"[&>img]:size-15"},null,8,["src"]),i(n,{size:0,vertical:""},{default:r(()=>[i(l,{class:"text-2xl fw-bold"},{default:r(()=>[f(_(e.tr)+" TR",1)]),_:1}),i(l,{depth:3,class:"text-sm"},{default:r(()=>[f(_(e.glicko)+"±"+_(e.rd),1)]),_:1})]),_:1})]),_:1}),[e.global_rank,e.country_rank].some(v(E))?(h(),A("div",ae,[i(n,{size:0,vertical:""},{default:r(()=>[v(E)(e.global_rank)?(h(),x(l,{key:0,class:"text-sm fw-bold",type:"success"},{default:r(()=>[f(" #"+_(e.global_rank),1)]),_:1})):k("",!0),v(E)(e.country)&&v(E)(e.country_rank)?(h(),x(l,{key:1,class:"text-sm fw-bold",type:"info"},{default:r(()=>[f(_(v(g))+"#"+_(e.country_rank),1)]),_:1})):k("",!0)]),_:1})])):k("",!0)]),_:1}),i(n,{size:0,align:"center",justify:"center"},{default:r(()=>[v(E)(e.statistic)?(h(),A(I,{key:0},[i(l,{depth:3,class:"text-sm"},{default:r(()=>[f(" 胜率: "+_(e.statistic.wins)+" / "+_(e.statistic.total)+" ("+_((e.statistic.wins/e.statistic.total*100).toFixed(2))+"%) ",1)]),_:1}),i(D,{vertical:""})],64)):k("",!0),v(E)(e.highest_rank)?(h(),A(I,{key:1},[i(l,{depth:3},{default:r(()=>[f("历史最高:")]),_:1}),i(c,{src:v(u),class:"[&>img]:size-4"},null,8,["src"])],64)):k("",!0)]),_:1})]),_:1})]),_:1}),i(V,{size:"small"},{default:r(()=>[W("div",re,[i(n,{justify:"space-evenly"},{default:r(()=>[i(R,{value:e.pps,label:"PPS"},null,8,["value"]),i(R,{label:"APM"},{default:r(()=>[i(n,{size:0,vertical:""},{default:r(()=>[i(l,null,{default:r(()=>[f(_(e.apm),1)]),_:1}),i(l,{depth:3,class:"text-sm"},{default:r(()=>[f(" (x"+_(e.apl)+") ",1)]),_:1})]),_:1})]),_:1}),v(E)(e.vs)?(h(),x(R,{key:0,label:"VS"},{default:r(()=>[i(n,{size:0,vertical:""},{default:r(()=>[i(l,null,{default:r(()=>[f(_(e.vs),1)]),_:1}),v(E)(e.adpl)?(h(),x(l,{key:0,depth:3,class:"text-sm"},{default:r(()=>[f(" (x"+_(e.adpl)+") ",1)]),_:1})):k("",!0)]),_:1})]),_:1})):k("",!0)]),_:1})])]),_:1})]),_:1})}}});export{fe as _,Z as a};
