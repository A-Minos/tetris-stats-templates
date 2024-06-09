import{n as le,o as h,c as ce,i as R,p as d,a as de,j as x,z as re,u as ue,k as Fe,q as Ne,v as t,e as j,l as Oe}from"./light-DaiOxNRC.js";import{i as je,a as D}from"./use-is-mounted-DD1D6MtX.js";import{u as qe}from"./_common-Du7BCn3n.js";import{l as be,I as De,k as B,C as fe,d as H,h as c,R as Me,P as he,q as I,E as Ke,o as Ve,g as We,w as Ge,m as Le,t as Ae}from"./index-DbNJ8oGP.js";import{c as Qe}from"./dark-DCBm84oJ.js";import{c as ne}from"./color-to-class-B0iQgAn2.js";import{u as pe,a as ie,i as Ye}from"./use-style-QdHn__x-.js";import{N as Ue}from"./FadeInExpandTransition-Ct0BK3Un.js";import{c as Xe}from"./call-f2ri57Kd.js";import"./_common-Dh8oehso.js";import"./light-C_FkSiLt.js";import"./light-6OZBgaqD.js";import"./light-v5HjJJJB.js";import"./_common-h0mJDxlK.js";import"./light-BfHg9XYH.js";import"./light-CMzGT_JB.js";import"./light-CQiVtk-f.js";const ae=le("n-form-item");function Ze(e,{defaultSize:i="medium",mergedSize:s,mergedDisabled:l}={}){const r=be(ae,null);De(ae,null);const p=B(s?()=>s(r):()=>{const{size:g}=e;if(g)return g;if(r){const{mergedSize:E}=r;if(E.value!==void 0)return E.value}return i}),_=B(l?()=>l(r):()=>{const{disabled:g}=e;return g!==void 0?g:r?r.disabled.value:!1}),P=B(()=>{const{status:g}=e;return g||(r==null?void 0:r.mergedValidationStatus.value)});return fe(()=>{r&&r.restoreValidation()}),{mergedSizeRef:p,mergedDisabledRef:_,mergedStatusRef:P,nTriggerFormBlur(){r&&r.handleContentBlur()},nTriggerFormChange(){r&&r.handleContentChange()},nTriggerFormFocus(){r&&r.handleContentFocus()},nTriggerFormInput(){r&&r.handleContentInput()}}}const me=H({name:"BaseIconSwitchTransition",setup(e,{slots:i}){const s=je();return()=>c(Me,{name:"icon-switch-transition",appear:s.value},i)}}),{cubicBezierEaseInOut:Je}=ce;function X({originalTransform:e="",left:i=0,top:s=0,transition:l=`all .3s ${Je} !important`}={}){return[h("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:i,top:s,opacity:0}),h("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:i,top:s,opacity:1}),h("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:i,top:s,transition:l})]}const eo=h([h("@keyframes rotator",`
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`),R("base-loading",`
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `,[d("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[X()]),d("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[X({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),d("container",`
 animation: rotator 3s linear infinite both;
 `,[d("icon",`
 height: 1em;
 width: 1em;
 `)])])]),U="1.6s",oo={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},to=H({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},oo),setup(e){pe("-base-loading",eo,he(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:i,strokeWidth:s,stroke:l,scale:r}=this,p=i/r;return c("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},c(me,null,{default:()=>this.show?c("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},c("div",{class:`${e}-base-loading__container`},c("svg",{class:`${e}-base-loading__icon`,viewBox:`0 0 ${2*p} ${2*p}`,xmlns:"http://www.w3.org/2000/svg",style:{color:l}},c("g",null,c("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${p} ${p};270 ${p} ${p}`,begin:"0s",dur:U,fill:"freeze",repeatCount:"indefinite"}),c("circle",{class:`${e}-base-loading__icon`,fill:"none",stroke:"currentColor","stroke-width":s,"stroke-linecap":"round",cx:p,cy:p,r:i-s/2,"stroke-dasharray":5.67*i,"stroke-dashoffset":18.48*i},c("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${p} ${p};135 ${p} ${p};450 ${p} ${p}`,begin:"0s",dur:U,fill:"freeze",repeatCount:"indefinite"}),c("animate",{attributeName:"stroke-dashoffset",values:`${5.67*i};${1.42*i};${5.67*i}`,begin:"0s",dur:U,fill:"freeze",repeatCount:"indefinite"})))))):c("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}}),ro=R("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),no=H({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){pe("-base-wave",ro,he(e,"clsPrefix"));const i=I(null),s=I(!1);let l=null;return fe(()=>{l!==null&&window.clearTimeout(l)}),{active:s,selfRef:i,play(){l!==null&&(window.clearTimeout(l),s.value=!1,l=null),Ke(()=>{var r;(r=i.value)===null||r===void 0||r.offsetHeight,s.value=!0,l=window.setTimeout(()=>{s.value=!1,l=null},1e3)})}}},render(){const{clsPrefix:e}=this;return c("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),{cubicBezierEaseInOut:$}=ce;function io({duration:e=".2s",delay:i=".1s"}={}){return[h("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),h("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `),h("&.fade-in-width-expand-transition-leave-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${$},
 max-width ${e} ${$} ${i},
 margin-left ${e} ${$} ${i},
 margin-right ${e} ${$} ${i};
 `),h("&.fade-in-width-expand-transition-enter-active",`
 overflow: hidden;
 transition:
 opacity ${e} ${$} ${i},
 max-width ${e} ${$},
 margin-left ${e} ${$},
 margin-right ${e} ${$};
 `)]}const ao=D&&"chrome"in window;D&&navigator.userAgent.includes("Firefox");const so=D&&navigator.userAgent.includes("Safari")&&!ao;function S(e){return de(e,[255,255,255,.16])}function q(e){return de(e,[0,0,0,.12])}const lo=le("n-button-group"),co=h([R("button",`
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
 `,[x("color",[d("border",{borderColor:"var(--n-border-color)"}),x("disabled",[d("border",{borderColor:"var(--n-border-color-disabled)"})]),re("disabled",[h("&:focus",[d("state-border",{borderColor:"var(--n-border-color-focus)"})]),h("&:hover",[d("state-border",{borderColor:"var(--n-border-color-hover)"})]),h("&:active",[d("state-border",{borderColor:"var(--n-border-color-pressed)"})]),x("pressed",[d("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),x("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[d("border",{border:"var(--n-border-disabled)"})]),re("disabled",[h("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[d("state-border",{border:"var(--n-border-focus)"})]),h("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[d("state-border",{border:"var(--n-border-hover)"})]),h("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[d("state-border",{border:"var(--n-border-pressed)"})]),x("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[d("state-border",{border:"var(--n-border-pressed)"})])]),x("loading","cursor: wait;"),R("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[x("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),D&&"MozBoxSizing"in document.createElement("div").style?h("&::moz-focus-inner",{border:0}):null,d("border, state-border",`
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
 `,[R("icon-slot",`
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `,[X({top:"50%",originalTransform:"translateY(-50%)"})]),io()]),d("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[h("~",[d("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),x("block",`
 display: flex;
 width: 100%;
 `),x("dashed",[d("border, state-border",{borderStyle:"dashed !important"})]),x("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),h("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),h("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),uo=Object.assign(Object.assign({},ue.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!so}}),bo=H({name:"Button",props:uo,setup(e){const i=I(null),s=I(null),l=I(!1),r=qe(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),p=be(lo,{}),{mergedSizeRef:_}=Ze({},{defaultSize:"medium",mergedSize:n=>{const{size:m}=e;if(m)return m;const{size:w}=p;if(w)return w;const{mergedSize:o}=n||{};return o?o.value:"medium"}}),P=B(()=>e.focusable&&!e.disabled),g=n=>{var m;P.value||n.preventDefault(),!e.nativeFocusBehavior&&(n.preventDefault(),!e.disabled&&P.value&&((m=i.value)===null||m===void 0||m.focus({preventScroll:!0})))},E=n=>{var m;if(!e.disabled&&!e.loading){const{onClick:w}=e;w&&Xe(w,n),e.text||(m=s.value)===null||m===void 0||m.play()}},ve=n=>{switch(n.key){case"Enter":if(!e.keyboard)return;l.value=!1}},ge=n=>{switch(n.key){case"Enter":if(!e.keyboard||e.loading){n.preventDefault();return}l.value=!0}},ye=()=>{l.value=!1},{inlineThemeDisabled:Z,mergedClsPrefixRef:M,mergedRtlRef:xe}=Fe(e),we=ue("Button","-button",co,Qe,e,M),Ce=Ne("Button",xe,M),J=B(()=>{const n=we.value,{common:{cubicBezierEaseInOut:m,cubicBezierEaseOut:w},self:o}=n,{rippleDuration:K,opacityDisabled:F,fontWeight:V,fontWeightStrong:W}=o,y=_.value,{dashed:G,type:k,ghost:L,text:C,color:u,round:ee,circle:A,textColor:z,secondary:$e,tertiary:oe,quaternary:ke,strong:ze}=e,Se={"font-weight":ze?W:V};let b={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const N=k==="tertiary",te=k==="default",a=N?"default":k;if(C){const f=z||u;b={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":f||o[t("textColorText",a)],"--n-text-color-hover":f?S(f):o[t("textColorTextHover",a)],"--n-text-color-pressed":f?q(f):o[t("textColorTextPressed",a)],"--n-text-color-focus":f?S(f):o[t("textColorTextHover",a)],"--n-text-color-disabled":f||o[t("textColorTextDisabled",a)]}}else if(L||G){const f=z||u;b={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":u||o[t("rippleColor",a)],"--n-text-color":f||o[t("textColorGhost",a)],"--n-text-color-hover":f?S(f):o[t("textColorGhostHover",a)],"--n-text-color-pressed":f?q(f):o[t("textColorGhostPressed",a)],"--n-text-color-focus":f?S(f):o[t("textColorGhostHover",a)],"--n-text-color-disabled":f||o[t("textColorGhostDisabled",a)]}}else if($e){const f=te?o.textColor:N?o.textColorTertiary:o[t("color",a)],v=u||f,O=k!=="default"&&k!=="tertiary";b={"--n-color":O?j(v,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":O?j(v,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":O?j(v,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":O?j(v,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":v,"--n-text-color-hover":v,"--n-text-color-pressed":v,"--n-text-color-focus":v,"--n-text-color-disabled":v}}else if(oe||ke){const f=te?o.textColor:N?o.textColorTertiary:o[t("color",a)],v=u||f;oe?(b["--n-color"]=o.colorTertiary,b["--n-color-hover"]=o.colorTertiaryHover,b["--n-color-pressed"]=o.colorTertiaryPressed,b["--n-color-focus"]=o.colorSecondaryHover,b["--n-color-disabled"]=o.colorTertiary):(b["--n-color"]=o.colorQuaternary,b["--n-color-hover"]=o.colorQuaternaryHover,b["--n-color-pressed"]=o.colorQuaternaryPressed,b["--n-color-focus"]=o.colorQuaternaryHover,b["--n-color-disabled"]=o.colorQuaternary),b["--n-ripple-color"]="#0000",b["--n-text-color"]=v,b["--n-text-color-hover"]=v,b["--n-text-color-pressed"]=v,b["--n-text-color-focus"]=v,b["--n-text-color-disabled"]=v}else b={"--n-color":u||o[t("color",a)],"--n-color-hover":u?S(u):o[t("colorHover",a)],"--n-color-pressed":u?q(u):o[t("colorPressed",a)],"--n-color-focus":u?S(u):o[t("colorFocus",a)],"--n-color-disabled":u||o[t("colorDisabled",a)],"--n-ripple-color":u||o[t("rippleColor",a)],"--n-text-color":z||(u?o.textColorPrimary:N?o.textColorTertiary:o[t("textColor",a)]),"--n-text-color-hover":z||(u?o.textColorHoverPrimary:o[t("textColorHover",a)]),"--n-text-color-pressed":z||(u?o.textColorPressedPrimary:o[t("textColorPressed",a)]),"--n-text-color-focus":z||(u?o.textColorFocusPrimary:o[t("textColorFocus",a)]),"--n-text-color-disabled":z||(u?o.textColorDisabledPrimary:o[t("textColorDisabled",a)])};let Q={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};C?Q={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:Q={"--n-border":o[t("border",a)],"--n-border-hover":o[t("borderHover",a)],"--n-border-pressed":o[t("borderPressed",a)],"--n-border-focus":o[t("borderFocus",a)],"--n-border-disabled":o[t("borderDisabled",a)]};const{[t("height",y)]:Y,[t("fontSize",y)]:Be,[t("padding",y)]:Te,[t("paddingRound",y)]:_e,[t("iconSize",y)]:Pe,[t("borderRadius",y)]:Re,[t("iconMargin",y)]:Ie,waveOpacity:He}=o,Ee={"--n-width":A&&!C?Y:"initial","--n-height":C?"initial":Y,"--n-font-size":Be,"--n-padding":A||C?"initial":ee?_e:Te,"--n-icon-size":Pe,"--n-icon-margin":Ie,"--n-border-radius":C?"initial":A||ee?Y:Re};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":m,"--n-bezier-ease-out":w,"--n-ripple-duration":K,"--n-opacity-disabled":F,"--n-wave-opacity":He},Se),b),Q),Ee)}),T=Z?Oe("button",B(()=>{let n="";const{dashed:m,type:w,ghost:o,text:K,color:F,round:V,circle:W,textColor:y,secondary:G,tertiary:k,quaternary:L,strong:C}=e;m&&(n+="a"),o&&(n+="b"),K&&(n+="c"),V&&(n+="d"),W&&(n+="e"),G&&(n+="f"),k&&(n+="g"),L&&(n+="h"),C&&(n+="i"),F&&(n+="j"+ne(F)),y&&(n+="k"+ne(y));const{value:u}=_;return n+="l"+u[0],n+="m"+w[0],n}),J,e):void 0;return{selfElRef:i,waveElRef:s,mergedClsPrefix:M,mergedFocusable:P,mergedSize:_,showBorder:r,enterPressed:l,rtlEnabled:Ce,handleMousedown:g,handleKeydown:ge,handleBlur:ye,handleKeyup:ve,handleClick:E,customColorCssVars:B(()=>{const{color:n}=e;if(!n)return null;const m=S(n);return{"--n-border-color":n,"--n-border-color-hover":m,"--n-border-color-pressed":q(n),"--n-border-color-focus":m,"--n-border-color-disabled":n}}),cssVars:Z?void 0:J,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const{mergedClsPrefix:e,tag:i,onRender:s}=this;s==null||s();const l=ie(this.$slots.default,r=>r&&c("span",{class:`${e}-button__content`},r));return c(i,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&l,c(Ue,{width:!0},{default:()=>ie(this.$slots.icon,r=>(this.loading||this.renderIcon||r)&&c("span",{class:`${e}-button__icon`,style:{margin:Ye(this.$slots.default)?"0":""}},c(me,null,{default:()=>this.loading?c(to,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):c("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():r)})))}),this.iconPlacement==="left"&&l,this.text?null:c(no,{ref:"waveElRef",clsPrefix:e}),this.showBorder?c("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?c("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),se="v2/tetrio/info",Po=H({__name:"tetrio_info",setup(e){const i=()=>{document.querySelector("template#data").innerHTML=JSON.stringify({user:{id:"5eb3a6530b29196c155074e8",name:"WOSHIZHAZHA120",avatar:"https://tetr.io/user-content/avatars/5eb3a6530b29196c155074e8.jpg",banner:"https://tetr.io/user-content/banners/605468e1d8bf2a23b076eba5.jpg",badges:["secretgrade","100player","20tsd"],country:"cn",xp:15033024,friend_count:184,playtime:"1079 小时",supporter_tier:3,bad_standing:!0,verified:!0,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",join_at:"2020/5/7 14:10:27"},tetra_league:{rank:"x",highest_rank:"x",tr:24830.47,glicko:2806.04,rd:62.27,global_rank:327,country_rank:16,pps:2.97,apm:119.32,apl:1.67,vs:234,adpl:1.96,statistic:{total:5700,wins:3004}},statistic:{total:7625,wins:3747},sprint:{time:"0:22.293",global_rank:367,play_at:"2024/3/13 17:05:49"},blitz:{score:389548,play_at:"2024/1/7 16:24:20"},zen:{score:13383165,level:209}}),document.querySelector("template#path").innerHTML=se};return(s,l)=>{const r=bo;return Ve(),We(r,{onClick:i},{default:Ge(()=>[Le("测试 "+Ae(se))]),_:1})}}});export{Po as default};
