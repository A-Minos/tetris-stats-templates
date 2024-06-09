import{o as P,i as o,j as x,k as V,u as T,v as I,l as Y}from"./light-DNPe8-ex.js";import{f as w}from"./format-length-B-p6aW7q.js";import{N as A}from"./Icon-C_u4DuO-.js";import{S as L,E as X,W as j,I as G}from"./Warning-DllX4CW0.js";import{d as k,k as b,h as r,o as H,g as E,w as R,b as D,a as W,m as F,t as q,u as M}from"./index-CWAO9-WI.js";import{p as K}from"./light-DXKMJdUT.js";import{_ as Z}from"./text-C4nRQwhD.js";import{_ as J}from"./Flex-D4tWtCBN.js";import{_ as Q}from"./Card-DRHStz4o.js";const U=P([o("progress",{display:"inline-block"},[o("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),x("line",`
 width: 100%;
 display: block;
 `,[o("progress-content",`
 display: flex;
 align-items: center;
 `,[o("progress-graph",{flex:1})]),o("progress-custom-content",{marginLeft:"14px"}),o("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[x("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),x("circle, dashboard",{width:"120px"},[o("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),o("progress-text",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),o("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),x("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[o("progress-text",`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),o("progress-content",{position:"relative"}),o("progress-graph",{position:"relative"},[o("progress-graph-circle",[P("svg",{verticalAlign:"bottom"}),o("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[x("empty",{opacity:0})]),o("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),o("progress-graph-line",[x("indicator-inside",[o("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[o("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),o("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),x("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[o("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),o("progress-graph-line-indicator",`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),o("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[o("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[x("processing",[P("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),P("@keyframes progress-processing-animation",`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),ee={success:r(L,null),error:r(X,null),warning:r(j,null),info:r(G,null)},re=k({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:String,status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:g}){const u=b(()=>w(e.height)),n=b(()=>e.railBorderRadius!==void 0?w(e.railBorderRadius):e.height!==void 0?w(e.height,{c:.5}):""),i=b(()=>e.fillBorderRadius!==void 0?w(e.fillBorderRadius):e.railBorderRadius!==void 0?w(e.railBorderRadius):e.height!==void 0?w(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:s,railColor:f,railStyle:a,percentage:d,unit:l,indicatorTextColor:h,status:p,showIndicator:m,fillColor:t,processing:y,clsPrefix:c}=e;return r("div",{class:`${c}-progress-content`,role:"none"},r("div",{class:`${c}-progress-graph`,"aria-hidden":!0},r("div",{class:[`${c}-progress-graph-line`,{[`${c}-progress-graph-line--indicator-${s}`]:!0}]},r("div",{class:`${c}-progress-graph-line-rail`,style:[{backgroundColor:f,height:u.value,borderRadius:n.value},a]},r("div",{class:[`${c}-progress-graph-line-fill`,y&&`${c}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,backgroundColor:t,height:u.value,lineHeight:u.value,borderRadius:i.value}},s==="inside"?r("div",{class:`${c}-progress-graph-line-indicator`,style:{color:h}},g.default?g.default():`${d}${l}`):null)))),m&&s==="outside"?r("div",null,g.default?r("div",{class:`${c}-progress-custom-content`,style:{color:h},role:"none"},g.default()):p==="default"?r("div",{role:"none",class:`${c}-progress-icon ${c}-progress-icon--as-text`,style:{color:h}},d,l):r("div",{class:`${c}-progress-icon`,"aria-hidden":!0},r(A,{clsPrefix:c},{default:()=>ee[p]}))):null)}}}),te={success:r(L,null),error:r(X,null),warning:r(j,null),info:r(G,null)},ie=k({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:String,railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:g}){function u(n,i,s){const{gapDegree:f,viewBoxWidth:a,strokeWidth:d}=e,l=50,h=0,p=l,m=0,t=2*l,y=50+d/2,c=`M ${y},${y} m ${h},${p}
      a ${l},${l} 0 1 1 ${m},${-t}
      a ${l},${l} 0 1 1 ${-m},${t}`,$=Math.PI*2*l,S={stroke:s,strokeDasharray:`${n/100*($-f)}px ${a*8}px`,strokeDashoffset:`-${f/2}px`,transformOrigin:i?"center":void 0,transform:i?`rotate(${i}deg)`:void 0};return{pathString:c,pathStyle:S}}return()=>{const{fillColor:n,railColor:i,strokeWidth:s,offsetDegree:f,status:a,percentage:d,showIndicator:l,indicatorTextColor:h,unit:p,gapOffsetDegree:m,clsPrefix:t}=e,{pathString:y,pathStyle:c}=u(100,0,i),{pathString:$,pathStyle:S}=u(d,f,n),v=100+s;return r("div",{class:`${t}-progress-content`,role:"none"},r("div",{class:`${t}-progress-graph`,"aria-hidden":!0},r("div",{class:`${t}-progress-graph-circle`,style:{transform:m?`rotate(${m}deg)`:void 0}},r("svg",{viewBox:`0 0 ${v} ${v}`},r("g",null,r("path",{class:`${t}-progress-graph-circle-rail`,d:y,"stroke-width":s,"stroke-linecap":"round",fill:"none",style:c})),r("g",null,r("path",{class:[`${t}-progress-graph-circle-fill`,d===0&&`${t}-progress-graph-circle-fill--empty`],d:$,"stroke-width":s,"stroke-linecap":"round",fill:"none",style:S}))))),l?r("div",null,g.default?r("div",{class:`${t}-progress-custom-content`,role:"none"},g.default()):a!=="default"?r("div",{class:`${t}-progress-icon`,"aria-hidden":!0},r(A,{clsPrefix:t},{default:()=>te[a]})):r("div",{class:`${t}-progress-text`,style:{color:h},role:"none"},r("span",{class:`${t}-progress-text__percentage`},d),r("span",{class:`${t}-progress-text__unit`},p))):null)}}});function O(e,g,u=100){return`m ${u/2} ${u/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const oe=k({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:g}){const u=b(()=>e.percentage.map((i,s)=>`${Math.PI*i/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*s)-e.circleGap*s)*2}, ${e.viewBoxWidth*8}`));return()=>{const{viewBoxWidth:n,strokeWidth:i,circleGap:s,showIndicator:f,fillColor:a,railColor:d,railStyle:l,percentage:h,clsPrefix:p}=e;return r("div",{class:`${p}-progress-content`,role:"none"},r("div",{class:`${p}-progress-graph`,"aria-hidden":!0},r("div",{class:`${p}-progress-graph-circle`},r("svg",{viewBox:`0 0 ${n} ${n}`},h.map((m,t)=>r("g",{key:t},r("path",{class:`${p}-progress-graph-circle-rail`,d:O(n/2-i/2*(1+2*t)-s*t,i,n),"stroke-width":i,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:d[t]},l[t]]}),r("path",{class:[`${p}-progress-graph-circle-fill`,m===0&&`${p}-progress-graph-circle-fill--empty`],d:O(n/2-i/2*(1+2*t)-s*t,i,n),"stroke-width":i,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:u.value[t],strokeDashoffset:0,stroke:a[t]}})))))),f&&g.default?r("div",null,r("div",{class:`${p}-progress-text`},g.default())):null)}}}),ne=Object.assign(Object.assign({},T.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),se=k({name:"Progress",props:ne,setup(e){const g=b(()=>e.indicatorPlacement||e.indicatorPosition),u=b(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:n,inlineThemeDisabled:i}=V(e),s=T("Progress","-progress",U,K,e,n),f=b(()=>{const{status:d}=e,{common:{cubicBezierEaseInOut:l},self:{fontSize:h,fontSizeCircle:p,railColor:m,railHeight:t,iconSizeCircle:y,iconSizeLine:c,textColorCircle:$,textColorLineInner:S,textColorLineOuter:v,lineBgProcessing:_,fontWeightCircle:z,[I("iconColor",d)]:B,[I("fillColor",d)]:C}}=s.value;return{"--n-bezier":l,"--n-fill-color":C,"--n-font-size":h,"--n-font-size-circle":p,"--n-font-weight-circle":z,"--n-icon-color":B,"--n-icon-size-circle":y,"--n-icon-size-line":c,"--n-line-bg-processing":_,"--n-rail-color":m,"--n-rail-height":t,"--n-text-color-circle":$,"--n-text-color-line-inner":S,"--n-text-color-line-outer":v}}),a=i?Y("progress",b(()=>e.status[0]),f,e):void 0;return{mergedClsPrefix:n,mergedIndicatorPlacement:g,gapDeg:u,cssVars:i?void 0:f,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{type:e,cssVars:g,indicatorTextColor:u,showIndicator:n,status:i,railColor:s,railStyle:f,color:a,percentage:d,viewBoxWidth:l,strokeWidth:h,mergedIndicatorPlacement:p,unit:m,borderRadius:t,fillBorderRadius:y,height:c,processing:$,circleGap:S,mergedClsPrefix:v,gapDeg:_,gapOffsetDegree:z,themeClass:B,$slots:C,onRender:N}=this;return N==null||N(),r("div",{class:[B,`${v}-progress`,`${v}-progress--${e}`,`${v}-progress--${i}`],style:g,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":d,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?r(ie,{clsPrefix:v,status:i,showIndicator:n,indicatorTextColor:u,railColor:s,fillColor:a,railStyle:f,offsetDegree:this.offsetDegree,percentage:d,viewBoxWidth:l,strokeWidth:h,gapDegree:_===void 0?e==="dashboard"?75:0:_,gapOffsetDegree:z,unit:m},C):e==="line"?r(re,{clsPrefix:v,status:i,showIndicator:n,indicatorTextColor:u,railColor:s,fillColor:a,railStyle:f,percentage:d,processing:$,indicatorPlacement:p,unit:m,fillBorderRadius:y,railBorderRadius:t,height:c},C):e==="multiple-circle"?r(oe,{clsPrefix:v,strokeWidth:h,railColor:s,fillColor:a,railStyle:f,viewBoxWidth:l,percentage:d,showIndicator:n,circleGap:S},C):null)}}),ae={class:"text-center"},le={class:"w-1/2 mx-auto"},ye=k({__name:"_xp",props:{value:{}},setup(e){const g=e,u=b(()=>Math.pow(g.value/500,.6)+g.value/(5e3+Math.max(0,g.value-4e6)/5e3)+1),n=b(()=>Math.trunc(u.value%1*100));return(i,s)=>{const f=Z,a=se,d=J,l=Q;return H(),E(l,{size:"small"},{default:R(()=>[D(d,{vertical:""},{default:R(()=>[W("div",ae,[D(f,{class:"fw-bold"},{default:R(()=>[F(q(Math.trunc(M(u)))+" 级 ("+q(new Intl.NumberFormat("zh-CN").format(i.value))+" XP) ",1)]),_:1})]),W("div",le,[D(a,{percentage:M(n),"indicator-placement":"inside"},null,8,["percentage"])])]),_:1})]),_:1})}}});export{ye as _};
