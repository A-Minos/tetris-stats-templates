import{i as ce,p as Ee,c as T,o as de,d as H,h as c,T as Oe,t as ue,r as R,n as je,a as qe,u as De,b as Me,w as j,e as X,f as Ve,g as Ke}from"./index-wKj2FdAw.js";import{c as be,i as We,a as p,b as fe,d as I,e as d,u as he,f as M,g as pe,h as x,j as ie,k as ve,l as Ge,m as Le,n as Ae,o as Qe,p as t,q,r as Ye,s as ae,t as se,N as Ue,v as Xe,w as Ze,_ as Je,x as eo,y as oo,z as to}from"./dark-BuLzalxY.js";const le=be("n-form-item");function ro(e,{defaultSize:i="medium",mergedSize:s,mergedDisabled:l}={}){const r=ce(le,null);Ee(le,null);const h=T(s?()=>s(r):()=>{const{size:g}=e;if(g)return g;if(r){const{mergedSize:N}=r;if(N.value!==void 0)return N.value}return i}),$=T(l?()=>l(r):()=>{const{disabled:g}=e;return g!==void 0?g:r?r.disabled.value:!1}),z=T(()=>{const{status:g}=e;return g||(r==null?void 0:r.mergedValidationStatus.value)});return de(()=>{r&&r.restoreValidation()}),{mergedSizeRef:h,mergedDisabledRef:$,mergedStatusRef:z,nTriggerFormBlur(){r&&r.handleContentBlur()},nTriggerFormChange(){r&&r.handleContentChange()},nTriggerFormFocus(){r&&r.handleContentFocus()},nTriggerFormInput(){r&&r.handleContentInput()}}}const me=H({name:"BaseIconSwitchTransition",setup(e,{slots:i}){const s=We();return()=>c(Oe,{name:"icon-switch-transition",appear:s.value},i)}}),{cubicBezierEaseInOut:no}=fe;function J({originalTransform:e="",left:i=0,top:s=0,transition:l=`all .3s ${no} !important`}={}){return[p("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:i,top:s,opacity:0}),p("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:i,top:s,opacity:1}),p("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:i,top:s,transition:l})]}const io=p([p("@keyframes rotator",`
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`),I("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[d("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[J()]),d("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[J({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),d("container",`
 animation: rotator 3s linear infinite both;
 `,[d("icon",`
 height: 1em;
 width: 1em;
 `)])])]),Z="1.6s",ao={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},so=H({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},ao),setup(e){he("-base-loading",io,ue(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:i,strokeWidth:s,stroke:l,scale:r}=this,h=i/r;return c("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},c(me,null,{default:()=>this.show?c("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},c("div",{class:`${e}-base-loading__container`},c("svg",{class:`${e}-base-loading__icon`,viewBox:`0 0 ${2*h} ${2*h}`,xmlns:"http://www.w3.org/2000/svg",style:{color:l}},c("g",null,c("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${h} ${h};270 ${h} ${h}`,begin:"0s",dur:Z,fill:"freeze",repeatCount:"indefinite"}),c("circle",{class:`${e}-base-loading__icon`,fill:"none",stroke:"currentColor","stroke-width":s,"stroke-linecap":"round",cx:h,cy:h,r:i-s/2,"stroke-dasharray":5.67*i,"stroke-dashoffset":18.48*i},c("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${h} ${h};135 ${h} ${h};450 ${h} ${h}`,begin:"0s",dur:Z,fill:"freeze",repeatCount:"indefinite"}),c("animate",{attributeName:"stroke-dashoffset",values:`${5.67*i};${1.42*i};${5.67*i}`,begin:"0s",dur:Z,fill:"freeze",repeatCount:"indefinite"})))))):c("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}}),lo=I("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),co=H({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){he("-base-wave",lo,ue(e,"clsPrefix"));const i=R(null),s=R(!1);let l=null;return de(()=>{l!==null&&window.clearTimeout(l)}),{active:s,selfRef:i,play(){l!==null&&(window.clearTimeout(l),s.value=!1,l=null),je(()=>{var r;(r=i.value)===null||r===void 0||r.offsetHeight,s.value=!0,l=window.setTimeout(()=>{s.value=!1,l=null},1e3)})}}},render(){const{clsPrefix:e}=this;return c("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),{cubicBezierEaseInOut:_}=fe;function uo({duration:e=".2s",delay:i=".1s"}={}){return[p("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),p("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),p("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${_},
 max-width ${e} ${_} ${i},
 margin-left ${e} ${_} ${i},
 margin-right ${e} ${_} ${i};
 `),p("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${_} ${i},
 max-width ${e} ${_},
 margin-left ${e} ${_},
 margin-right ${e} ${_};
 `)]}const bo=M&&"chrome"in window;M&&navigator.userAgent.includes("Firefox");const fo=M&&navigator.userAgent.includes("Safari")&&!bo;function B(e){return pe(e,[255,255,255,.16])}function D(e){return pe(e,[0,0,0,.12])}const ho=be("n-button-group"),po=p([I("button",`
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[x("color",[d("border",{borderColor:"var(--n-border-color)"}),x("disabled",[d("border",{borderColor:"var(--n-border-color-disabled)"})]),ie("disabled",[p("&:focus",[d("state-border",{borderColor:"var(--n-border-color-focus)"})]),p("&:hover",[d("state-border",{borderColor:"var(--n-border-color-hover)"})]),p("&:active",[d("state-border",{borderColor:"var(--n-border-color-pressed)"})]),x("pressed",[d("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),x("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[d("border",{border:"var(--n-border-disabled)"})]),ie("disabled",[p("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[d("state-border",{border:"var(--n-border-focus)"})]),p("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[d("state-border",{border:"var(--n-border-hover)"})]),p("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[d("state-border",{border:"var(--n-border-pressed)"})]),x("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[d("state-border",{border:"var(--n-border-pressed)"})])]),x("loading","cursor: wait;"),I("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[x("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),M&&"MozBoxSizing"in document.createElement("div").style?p("&::moz-focus-inner",{border:0}):null,d("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),d("border",{border:"var(--n-border)"}),d("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),d("icon",`
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `,[I("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[J({top:"50%",originalTransform:"translateY(-50%)"})]),uo()]),d("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[p("~",[d("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),x("block",`
 display: flex;
 width: 100%;
 `),x("dashed",[d("border, state-border",{borderStyle:"dashed !important"})]),x("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),p("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),p("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),vo=Object.assign(Object.assign({},ve.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!fo}}),mo=H({name:"Button",props:vo,setup(e){const i=R(null),s=R(null),l=R(!1),r=Ge(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),h=ce(ho,{}),{mergedSizeRef:$}=ro({},{defaultSize:"medium",mergedSize:n=>{const{size:v}=e;if(v)return v;const{size:w}=h;if(w)return w;const{mergedSize:o}=n||{};return o?o.value:"medium"}}),z=T(()=>e.focusable&&!e.disabled),g=n=>{var v;z.value||n.preventDefault(),!e.nativeFocusBehavior&&(n.preventDefault(),!e.disabled&&z.value&&((v=i.value)===null||v===void 0||v.focus({preventScroll:!0})))},N=n=>{var v;if(!e.disabled&&!e.loading){const{onClick:w}=e;w&&Ze(w,n),e.text||(v=s.value)===null||v===void 0||v.play()}},ge=n=>{switch(n.key){case"Enter":if(!e.keyboard)return;l.value=!1}},ye=n=>{switch(n.key){case"Enter":if(!e.keyboard||e.loading){n.preventDefault();return}l.value=!0}},xe=()=>{l.value=!1},{inlineThemeDisabled:ee,mergedClsPrefixRef:V,mergedRtlRef:we}=Le(e),Ce=ve("Button","-button",po,Ae,e,V),_e=Qe("Button",we,V),oe=T(()=>{const n=Ce.value,{common:{cubicBezierEaseInOut:v,cubicBezierEaseOut:w},self:o}=n,{rippleDuration:K,opacityDisabled:F,fontWeight:W,fontWeightStrong:G}=o,y=$.value,{dashed:L,type:k,ghost:A,text:C,color:u,round:te,circle:Q,textColor:S,secondary:$e,tertiary:re,quaternary:ze,strong:ke}=e,Se={"font-weight":ke?G:W};let b={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const E=k==="tertiary",ne=k==="default",a=E?"default":k;if(C){const f=S||u;b={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":f||o[t("textColorText",a)],"--n-text-color-hover":f?B(f):o[t("textColorTextHover",a)],"--n-text-color-pressed":f?D(f):o[t("textColorTextPressed",a)],"--n-text-color-focus":f?B(f):o[t("textColorTextHover",a)],"--n-text-color-disabled":f||o[t("textColorTextDisabled",a)]}}else if(A||L){const f=S||u;b={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":u||o[t("rippleColor",a)],"--n-text-color":f||o[t("textColorGhost",a)],"--n-text-color-hover":f?B(f):o[t("textColorGhostHover",a)],"--n-text-color-pressed":f?D(f):o[t("textColorGhostPressed",a)],"--n-text-color-focus":f?B(f):o[t("textColorGhostHover",a)],"--n-text-color-disabled":f||o[t("textColorGhostDisabled",a)]}}else if($e){const f=ne?o.textColor:E?o.textColorTertiary:o[t("color",a)],m=u||f,O=k!=="default"&&k!=="tertiary";b={"--n-color":O?q(m,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":O?q(m,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":O?q(m,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":O?q(m,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":m,"--n-text-color-hover":m,"--n-text-color-pressed":m,"--n-text-color-focus":m,"--n-text-color-disabled":m}}else if(re||ze){const f=ne?o.textColor:E?o.textColorTertiary:o[t("color",a)],m=u||f;re?(b["--n-color"]=o.colorTertiary,b["--n-color-hover"]=o.colorTertiaryHover,b["--n-color-pressed"]=o.colorTertiaryPressed,b["--n-color-focus"]=o.colorSecondaryHover,b["--n-color-disabled"]=o.colorTertiary):(b["--n-color"]=o.colorQuaternary,b["--n-color-hover"]=o.colorQuaternaryHover,b["--n-color-pressed"]=o.colorQuaternaryPressed,b["--n-color-focus"]=o.colorQuaternaryHover,b["--n-color-disabled"]=o.colorQuaternary),b["--n-ripple-color"]="#0000",b["--n-text-color"]=m,b["--n-text-color-hover"]=m,b["--n-text-color-pressed"]=m,b["--n-text-color-focus"]=m,b["--n-text-color-disabled"]=m}else b={"--n-color":u||o[t("color",a)],"--n-color-hover":u?B(u):o[t("colorHover",a)],"--n-color-pressed":u?D(u):o[t("colorPressed",a)],"--n-color-focus":u?B(u):o[t("colorFocus",a)],"--n-color-disabled":u||o[t("colorDisabled",a)],"--n-ripple-color":u||o[t("rippleColor",a)],"--n-text-color":S||(u?o.textColorPrimary:E?o.textColorTertiary:o[t("textColor",a)]),"--n-text-color-hover":S||(u?o.textColorHoverPrimary:o[t("textColorHover",a)]),"--n-text-color-pressed":S||(u?o.textColorPressedPrimary:o[t("textColorPressed",a)]),"--n-text-color-focus":S||(u?o.textColorFocusPrimary:o[t("textColorFocus",a)]),"--n-text-color-disabled":S||(u?o.textColorDisabledPrimary:o[t("textColorDisabled",a)])};let Y={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};C?Y={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:Y={"--n-border":o[t("border",a)],"--n-border-hover":o[t("borderHover",a)],"--n-border-pressed":o[t("borderPressed",a)],"--n-border-focus":o[t("borderFocus",a)],"--n-border-disabled":o[t("borderDisabled",a)]};const{[t("height",y)]:U,[t("fontSize",y)]:Be,[t("padding",y)]:Te,[t("paddingRound",y)]:Pe,[t("iconSize",y)]:Re,[t("borderRadius",y)]:Ie,[t("iconMargin",y)]:He,waveOpacity:Ne}=o,Fe={"--n-width":Q&&!C?U:"initial","--n-height":C?"initial":U,"--n-font-size":Be,"--n-padding":Q||C?"initial":te?Pe:Te,"--n-icon-size":Re,"--n-icon-margin":He,"--n-border-radius":C?"initial":Q||te?U:Ie};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":v,"--n-bezier-ease-out":w,"--n-ripple-duration":K,"--n-opacity-disabled":F,"--n-wave-opacity":Ne},Se),b),Y),Fe)}),P=ee?Ye("button",T(()=>{let n="";const{dashed:v,type:w,ghost:o,text:K,color:F,round:W,circle:G,textColor:y,secondary:L,tertiary:k,quaternary:A,strong:C}=e;v&&(n+="a"),o&&(n+="b"),K&&(n+="c"),W&&(n+="d"),G&&(n+="e"),L&&(n+="f"),k&&(n+="g"),A&&(n+="h"),C&&(n+="i"),F&&(n+="j"+ae(F)),y&&(n+="k"+ae(y));const{value:u}=$;return n+="l"+u[0],n+="m"+w[0],n}),oe,e):void 0;return{selfElRef:i,waveElRef:s,mergedClsPrefix:V,mergedFocusable:z,mergedSize:$,showBorder:r,enterPressed:l,rtlEnabled:_e,handleMousedown:g,handleKeydown:ye,handleBlur:xe,handleKeyup:ge,handleClick:N,customColorCssVars:T(()=>{const{color:n}=e;if(!n)return null;const v=B(n);return{"--n-border-color":n,"--n-border-color-hover":v,"--n-border-color-pressed":D(n),"--n-border-color-focus":v,"--n-border-color-disabled":n}}),cssVars:ee?void 0:oe,themeClass:P==null?void 0:P.themeClass,onRender:P==null?void 0:P.onRender}},render(){const{mergedClsPrefix:e,tag:i,onRender:s}=this;s==null||s();const l=se(this.$slots.default,r=>r&&c("span",{class:`${e}-button__content`},r));return c(i,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&l,c(Ue,{width:!0},{default:()=>se(this.$slots.icon,r=>(this.loading||this.renderIcon||r)&&c("span",{class:`${e}-button__icon`,style:{margin:Xe(this.$slots.default)?"0":""}},c(me,null,{default:()=>this.loading?c(so,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):c("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():r)})))}),this.iconPlacement==="left"&&l,this.text?null:c(co,{ref:"waveElRef",clsPrefix:e}),this.showBorder?c("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?c("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),go={class:"absolute top-1/2 left-1/2 -translate-1/2"},wo=H({__name:"index",setup(e){const i=()=>{document.querySelector("template#data").innerHTML=JSON.stringify({user:{id:"5eb3a6530b29196c155074e8",name:"WOSHIZHAZHA120",avatar:"https://tetr.io/user-content/avatars/5eb3a6530b29196c155074e8.jpg",banner:"https://tetr.io/user-content/banners/605468e1d8bf2a23b076eba5.jpg",badges:["secretgrade","100player","20tsd"],country:"cn",xp:15033024,friend_count:184,playtime:"1079 小时",supporter_tier:3,bad_standing:!0,verified:!0,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",join_at:"2020/5/7 14:10:27"},tetra_league:{tr:24830.47,glicko:2806.04,rd:62.27,global_rank:327,country_rank:16,apm:119.32,pps:2.97,vs:234,statistic:{total:5700,wins:3004}},statistic:{total:7625,wins:3747},sprint:{time:"0:22.293",global_rank:367,play_at:"2024/3/13 17:05:49"},blitz:{score:389548,play_at:"2024/1/7 16:24:20"},zen:{score:13383165,level:209}}),document.querySelector("template#path").innerHTML="tetrio/info"};return(s,l)=>{const r=mo,h=oo,$=to,z=Je;return Me(),qe(z,{theme:De(eo)},{default:j(()=>[X($,{position:"absolute"},{default:j(()=>[X(h,{class:"h-full"},{default:j(()=>[Ve("div",go,[X(r,{onClick:i},{default:j(()=>[Ke("tetrio/info")]),_:1})])]),_:1})]),_:1})]),_:1},8,["theme"])}}});export{wo as default};
