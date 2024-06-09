import{l as g}from"./chunk-GK5I7C4J-5krRHSV_.js";import{u as A}from"./chunk-YCOFVOXU-TAodfX1t.js";import{i as y,z as P,p,j as h,k as T,u as R,l as j,q as W}from"./light-DaiOxNRC.js";import{d as M,b as H}from"./light-v5HjJJJB.js";import{d as N,k as C,h as d,F as B,o as b,g as k,w as i,b as a,u as v,m as _,t as o,c as V,e as x,a as I}from"./index-DbNJ8oGP.js";import{a as w}from"./use-style-QdHn__x-.js";import{_ as L}from"./Image-zx1nwPHm.js";import{_ as q}from"./text-CovD31Ls.js";import{_ as U}from"./Flex-DjhWFQCK.js";import{_ as G}from"./Card-DEiEEglS.js";const J=y("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[P("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[P("no-title",`
 display: flex;
 align-items: center;
 `)]),p("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),h("title-position-left",[p("line",[h("left",{width:"28px"})])]),h("title-position-right",[p("line",[h("right",{width:"28px"})])]),h("dashed",[p("line",`
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
 `),p("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),P("dashed",[p("line",{backgroundColor:"var(--n-color)"})]),h("dashed",[p("line",{borderColor:"var(--n-color)"})]),h("vertical",{backgroundColor:"var(--n-color)"})]),K=Object.assign(Object.assign({},R.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),Q=N({name:"Divider",props:K,setup(l){const{mergedClsPrefixRef:s,inlineThemeDisabled:c}=T(l),u=R("Divider","-divider",J,M,l,s),m=C(()=>{const{common:{cubicBezierEaseInOut:t},self:{color:f,textColor:n,fontWeight:r}}=u.value;return{"--n-bezier":t,"--n-color":f,"--n-text-color":n,"--n-font-weight":r}}),e=c?j("divider",void 0,m,l):void 0;return{mergedClsPrefix:s,cssVars:c?void 0:m,themeClass:e==null?void 0:e.themeClass,onRender:e==null?void 0:e.onRender}},render(){var l;const{$slots:s,titlePlacement:c,vertical:u,dashed:m,cssVars:e,mergedClsPrefix:t}=this;return(l=this.onRender)===null||l===void 0||l.call(this),d("div",{role:"separator",class:[`${t}-divider`,this.themeClass,{[`${t}-divider--vertical`]:u,[`${t}-divider--no-title`]:!s.default,[`${t}-divider--dashed`]:m,[`${t}-divider--title-position-${c}`]:s.default&&c}],style:e},u?null:d("div",{class:`${t}-divider__line ${t}-divider__line--left`}),!u&&s.default?d(B,null,d("div",{class:`${t}-divider__title`},this.$slots),d("div",{class:`${t}-divider__line ${t}-divider__line--right`})):null)}}),X=y("statistic",[p("label",`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),y("statistic-value",`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[p("prefix",`
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[y("icon",{verticalAlign:"-0.125em"})]),p("content",`
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),p("suffix",`
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[y("icon",{verticalAlign:"-0.125em"})])])]),Y=Object.assign(Object.assign({},R.props),{tabularNums:Boolean,label:String,value:[String,Number]}),Z=N({name:"Statistic",props:Y,setup(l){const{mergedClsPrefixRef:s,inlineThemeDisabled:c,mergedRtlRef:u}=T(l),m=R("Statistic","-statistic",X,H,l,s),e=W("Statistic",u,s),t=C(()=>{const{self:{labelFontWeight:n,valueFontSize:r,valueFontWeight:S,valuePrefixTextColor:$,labelTextColor:z,valueSuffixTextColor:E,valueTextColor:F,labelFontSize:O},common:{cubicBezierEaseInOut:D}}=m.value;return{"--n-bezier":D,"--n-label-font-size":O,"--n-label-font-weight":n,"--n-label-text-color":z,"--n-value-font-weight":S,"--n-value-font-size":r,"--n-value-prefix-text-color":$,"--n-value-suffix-text-color":E,"--n-value-text-color":F}}),f=c?j("statistic",void 0,t,l):void 0;return{rtlEnabled:e,mergedClsPrefix:s,cssVars:c?void 0:t,themeClass:f==null?void 0:f.themeClass,onRender:f==null?void 0:f.onRender}},render(){var l;const{mergedClsPrefix:s,$slots:{default:c,label:u,prefix:m,suffix:e}}=this;return(l=this.onRender)===null||l===void 0||l.call(this),d("div",{class:[`${s}-statistic`,this.themeClass,this.rtlEnabled&&`${s}-statistic--rtl`],style:this.cssVars},w(u,t=>d("div",{class:`${s}-statistic__label`},this.label||t)),d("div",{class:`${s}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?"tabular-nums":""}},w(m,t=>t&&d("span",{class:`${s}-statistic-value__prefix`},t)),this.value!==void 0?d("span",{class:`${s}-statistic-value__content`},this.value):w(c,t=>t&&d("span",{class:`${s}-statistic-value__content`},t)),w(e,t=>t&&d("span",{class:`${s}-statistic-value__suffix`},t))))}}),ee={key:0,class:"text-right"},te={class:"text-center"},fe=N({__name:"_tetra-league",props:{rank:{},tr:{},glicko:{},rd:{},country:{},global_rank:{},country_rank:{},pps:{},apm:{},apl:{},vs:{},adpl:{},statistic:{},highest_rank:{}},setup(l){const s=l,c=C(()=>`https://tetr.io/res/league-ranks/${s.rank}.png`),u=C(()=>`https://tetr.io/res/league-ranks/${s.highest_rank}.png`),m=C(()=>A(s.country)?"NA":s.country.toUpperCase());return(e,t)=>{const f=L,n=q,r=U,S=Q,$=G,z=Z;return b(),k(r,{vertical:""},{default:i(()=>[a($,{size:"small"},{default:i(()=>[a(r,{size:0,vertical:""},{default:i(()=>[a(r,{align:"center",justify:"space-between"},{default:i(()=>[a(r,{align:"center",size:"small"},{default:i(()=>[a(f,{src:v(c),class:"[&>img]:size-15"},null,8,["src"]),a(r,{size:0,vertical:""},{default:i(()=>[a(n,{class:"text-2xl fw-bold"},{default:i(()=>[_(o(e.tr)+" TR",1)]),_:1}),a(n,{depth:3,class:"text-sm"},{default:i(()=>[_(o(e.glicko)+"±"+o(e.rd),1)]),_:1})]),_:1})]),_:1}),[e.global_rank,e.country_rank].some(v(g))?(b(),V("div",ee,[a(r,{size:0,vertical:""},{default:i(()=>[v(g)(e.global_rank)?(b(),k(n,{key:0,class:"text-sm fw-bold",type:"success"},{default:i(()=>[_(" #"+o(e.global_rank),1)]),_:1})):x("",!0),v(g)(e.country)&&v(g)(e.country_rank)?(b(),k(n,{key:1,class:"text-sm fw-bold",type:"info"},{default:i(()=>[_(o(v(m))+"#"+o(e.country_rank),1)]),_:1})):x("",!0)]),_:1})])):x("",!0)]),_:1}),a(r,{size:0,align:"center",justify:"center"},{default:i(()=>[v(g)(e.statistic)?(b(),V(B,{key:0},[a(n,{depth:3,class:"text-sm"},{default:i(()=>[_(" 胜率: "+o(e.statistic.total)+" / "+o(e.statistic.wins)+" ("+o((e.statistic.wins/e.statistic.total).toFixed(2))+"%) ",1)]),_:1}),a(S,{vertical:""})],64)):x("",!0),v(g)(e.highest_rank)?(b(),V(B,{key:1},[a(n,{depth:3},{default:i(()=>[_("历史最高:")]),_:1}),a(f,{src:v(u),class:"[&>img]:size-4"},null,8,["src"])],64)):x("",!0)]),_:1})]),_:1})]),_:1}),a($,{size:"small"},{default:i(()=>[I("div",te,[a(r,{justify:"space-evenly"},{default:i(()=>[a(z,{value:e.pps,label:"PPS"},null,8,["value"]),a(z,{label:"APM"},{default:i(()=>[a(r,{size:0,vertical:""},{default:i(()=>[a(n,null,{default:i(()=>[_(o(e.apm),1)]),_:1}),a(n,{depth:3,class:"text-sm"},{default:i(()=>[_(" (x"+o(e.apl)+") ",1)]),_:1})]),_:1})]),_:1}),v(g)(e.vs)?(b(),k(z,{key:0,label:"VS"},{default:i(()=>[a(r,{size:0,vertical:""},{default:i(()=>[a(n,null,{default:i(()=>[_(o(e.vs),1)]),_:1}),v(g)(e.adpl)?(b(),k(n,{key:0,depth:3,class:"text-sm"},{default:i(()=>[_(" (x"+o(e.adpl)+") ",1)]),_:1})):x("",!0)]),_:1})]),_:1})):x("",!0)]),_:1})])]),_:1})]),_:1})}}});export{fe as _,Q as a};
