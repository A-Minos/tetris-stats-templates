import{c as V}from"./xp-DcIV9PTz.js";import{h as P,c as o,d as b,u as Y,e as M,i as W,f as H}from"./light-C_Y72ozn.js";import{f as w}from"./format-length-B-p6aW7q.js";import{N as A}from"./Icon-B_NBGtOQ.js";import{S as L,E as X,W as j,I as G}from"./Warning-DFttjIfK.js";import{d as k,k as x,h as r,o as E,g as F,w as R,a as D,b as I,m as K,t as q,u as O}from"./index-B32syGsN.js";import{p as Z}from"./light-DuEY182E.js";import{_ as J}from"./text-DT38BxH-.js";import{_ as Q}from"./Flex-Cqn8l9ab.js";import{_ as U}from"./Card-BwhAo0Gp.js";const ee=P([o("progress",{display:"inline-block"},[o("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),b("line",`
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
 `,[b("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),b("circle, dashboard",{width:"120px"},[o("progress-custom-content",`
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
 `)]),b("multiple-circle",`
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
 `,[b("empty",{opacity:0})]),o("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),o("progress-graph-line",[b("indicator-inside",[o("progress-graph-line-rail",`
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
 `)])]),b("indicator-inside-label",`
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
 `,[b("processing",[P("&::after",`
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
 `)]),re={success:r(L,null),error:r(X,null),warning:r(j,null),info:r(G,null)},te=k({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:String,status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:p}){const g=x(()=>w(e.height)),n=x(()=>e.railBorderRadius!==void 0?w(e.railBorderRadius):e.height!==void 0?w(e.height,{c:.5}):""),i=x(()=>e.fillBorderRadius!==void 0?w(e.fillBorderRadius):e.railBorderRadius!==void 0?w(e.railBorderRadius):e.height!==void 0?w(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:s,railColor:f,railStyle:a,percentage:d,unit:l,indicatorTextColor:h,status:u,showIndicator:m,fillColor:t,processing:y,clsPrefix:c}=e;return r("div",{class:`${c}-progress-content`,role:"none"},r("div",{class:`${c}-progress-graph`,"aria-hidden":!0},r("div",{class:[`${c}-progress-graph-line`,{[`${c}-progress-graph-line--indicator-${s}`]:!0}]},r("div",{class:`${c}-progress-graph-line-rail`,style:[{backgroundColor:f,height:g.value,borderRadius:n.value},a]},r("div",{class:[`${c}-progress-graph-line-fill`,y&&`${c}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,backgroundColor:t,height:g.value,lineHeight:g.value,borderRadius:i.value}},s==="inside"?r("div",{class:`${c}-progress-graph-line-indicator`,style:{color:h}},p.default?p.default():`${d}${l}`):null)))),m&&s==="outside"?r("div",null,p.default?r("div",{class:`${c}-progress-custom-content`,style:{color:h},role:"none"},p.default()):u==="default"?r("div",{role:"none",class:`${c}-progress-icon ${c}-progress-icon--as-text`,style:{color:h}},d,l):r("div",{class:`${c}-progress-icon`,"aria-hidden":!0},r(A,{clsPrefix:c},{default:()=>re[u]}))):null)}}}),ie={success:r(L,null),error:r(X,null),warning:r(j,null),info:r(G,null)},oe=k({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:String,railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:p}){function g(n,i,s){const{gapDegree:f,viewBoxWidth:a,strokeWidth:d}=e,l=50,h=0,u=l,m=0,t=2*l,y=50+d/2,c=`M ${y},${y} m ${h},${u}
      a ${l},${l} 0 1 1 ${m},${-t}
      a ${l},${l} 0 1 1 ${-m},${t}`,$=Math.PI*2*l,S={stroke:s,strokeDasharray:`${n/100*($-f)}px ${a*8}px`,strokeDashoffset:`-${f/2}px`,transformOrigin:i?"center":void 0,transform:i?`rotate(${i}deg)`:void 0};return{pathString:c,pathStyle:S}}return()=>{const{fillColor:n,railColor:i,strokeWidth:s,offsetDegree:f,status:a,percentage:d,showIndicator:l,indicatorTextColor:h,unit:u,gapOffsetDegree:m,clsPrefix:t}=e,{pathString:y,pathStyle:c}=g(100,0,i),{pathString:$,pathStyle:S}=g(d,f,n),v=100+s;return r("div",{class:`${t}-progress-content`,role:"none"},r("div",{class:`${t}-progress-graph`,"aria-hidden":!0},r("div",{class:`${t}-progress-graph-circle`,style:{transform:m?`rotate(${m}deg)`:void 0}},r("svg",{viewBox:`0 0 ${v} ${v}`},r("g",null,r("path",{class:`${t}-progress-graph-circle-rail`,d:y,"stroke-width":s,"stroke-linecap":"round",fill:"none",style:c})),r("g",null,r("path",{class:[`${t}-progress-graph-circle-fill`,d===0&&`${t}-progress-graph-circle-fill--empty`],d:$,"stroke-width":s,"stroke-linecap":"round",fill:"none",style:S}))))),l?r("div",null,p.default?r("div",{class:`${t}-progress-custom-content`,role:"none"},p.default()):a!=="default"?r("div",{class:`${t}-progress-icon`,"aria-hidden":!0},r(A,{clsPrefix:t},{default:()=>ie[a]})):r("div",{class:`${t}-progress-text`,style:{color:h},role:"none"},r("span",{class:`${t}-progress-text__percentage`},d),r("span",{class:`${t}-progress-text__unit`},u))):null)}}});function T(e,p,g=100){return`m ${g/2} ${g/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const ne=k({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:p}){const g=x(()=>e.percentage.map((i,s)=>`${Math.PI*i/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*s)-e.circleGap*s)*2}, ${e.viewBoxWidth*8}`));return()=>{const{viewBoxWidth:n,strokeWidth:i,circleGap:s,showIndicator:f,fillColor:a,railColor:d,railStyle:l,percentage:h,clsPrefix:u}=e;return r("div",{class:`${u}-progress-content`,role:"none"},r("div",{class:`${u}-progress-graph`,"aria-hidden":!0},r("div",{class:`${u}-progress-graph-circle`},r("svg",{viewBox:`0 0 ${n} ${n}`},h.map((m,t)=>r("g",{key:t},r("path",{class:`${u}-progress-graph-circle-rail`,d:T(n/2-i/2*(1+2*t)-s*t,i,n),"stroke-width":i,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:d[t]},l[t]]}),r("path",{class:[`${u}-progress-graph-circle-fill`,m===0&&`${u}-progress-graph-circle-fill--empty`],d:T(n/2-i/2*(1+2*t)-s*t,i,n),"stroke-width":i,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:g.value[t],strokeDashoffset:0,stroke:a[t]}})))))),f&&p.default?r("div",null,r("div",{class:`${u}-progress-text`},p.default())):null)}}}),se=Object.assign(Object.assign({},M.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),ae=k({name:"Progress",props:se,setup(e){const p=x(()=>e.indicatorPlacement||e.indicatorPosition),g=x(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:n,inlineThemeDisabled:i}=Y(e),s=M("Progress","-progress",ee,Z,e,n),f=x(()=>{const{status:d}=e,{common:{cubicBezierEaseInOut:l},self:{fontSize:h,fontSizeCircle:u,railColor:m,railHeight:t,iconSizeCircle:y,iconSizeLine:c,textColorCircle:$,textColorLineInner:S,textColorLineOuter:v,lineBgProcessing:_,fontWeightCircle:z,[W("iconColor",d)]:B,[W("fillColor",d)]:C}}=s.value;return{"--n-bezier":l,"--n-fill-color":C,"--n-font-size":h,"--n-font-size-circle":u,"--n-font-weight-circle":z,"--n-icon-color":B,"--n-icon-size-circle":y,"--n-icon-size-line":c,"--n-line-bg-processing":_,"--n-rail-color":m,"--n-rail-height":t,"--n-text-color-circle":$,"--n-text-color-line-inner":S,"--n-text-color-line-outer":v}}),a=i?H("progress",x(()=>e.status[0]),f,e):void 0;return{mergedClsPrefix:n,mergedIndicatorPlacement:p,gapDeg:g,cssVars:i?void 0:f,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{type:e,cssVars:p,indicatorTextColor:g,showIndicator:n,status:i,railColor:s,railStyle:f,color:a,percentage:d,viewBoxWidth:l,strokeWidth:h,mergedIndicatorPlacement:u,unit:m,borderRadius:t,fillBorderRadius:y,height:c,processing:$,circleGap:S,mergedClsPrefix:v,gapDeg:_,gapOffsetDegree:z,themeClass:B,$slots:C,onRender:N}=this;return N==null||N(),r("div",{class:[B,`${v}-progress`,`${v}-progress--${e}`,`${v}-progress--${i}`],style:p,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":d,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?r(oe,{clsPrefix:v,status:i,showIndicator:n,indicatorTextColor:g,railColor:s,fillColor:a,railStyle:f,offsetDegree:this.offsetDegree,percentage:d,viewBoxWidth:l,strokeWidth:h,gapDegree:_===void 0?e==="dashboard"?75:0:_,gapOffsetDegree:z,unit:m},C):e==="line"?r(te,{clsPrefix:v,status:i,showIndicator:n,indicatorTextColor:g,railColor:s,fillColor:a,railStyle:f,percentage:d,processing:$,indicatorPlacement:u,unit:m,fillBorderRadius:y,railBorderRadius:t,height:c},C):e==="multiple-circle"?r(ne,{clsPrefix:v,strokeWidth:h,railColor:s,fillColor:a,railStyle:f,viewBoxWidth:l,percentage:d,showIndicator:n,circleGap:S},C):null)}}),le={class:"flex flex-col justify-center items-center h-full"},ce={class:"text-center"},de={class:"w-full mx-auto"},$e=k({__name:"_xp",props:{value:{}},setup(e){const p=e,g=x(()=>V(p.value)),n=x(()=>Math.trunc(g.value%1*100));return(i,s)=>{const f=J,a=ae,d=Q,l=U;return E(),F(l,{size:"small"},{default:R(()=>[D("div",le,[I(d,{vertical:""},{default:R(()=>[D("div",ce,[I(f,{class:"fw-bold"},{default:R(()=>[K(q(Math.trunc(O(g)))+" 级 ("+q(new Intl.NumberFormat("zh-CN").format(i.value))+" XP) ",1)]),_:1})]),D("div",de,[I(a,{percentage:O(n),"indicator-placement":"inside","indicator-text-color":"white"},null,8,["percentage"])])]),_:1})])]),_:1})}}});export{$e as _};
