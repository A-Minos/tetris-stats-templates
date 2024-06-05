import{c as le,I as h,L as de,H as R,O as c,Z as ce,J as x,K as re,R as ue,u as Ee,Q as Fe,am as Oe,$ as je,a1 as t,_ as j,V as De}from"./dark-BJanYT68.js";import{i as qe,u as be,d as q,e as ne,r as ie,N as Me,a as Ke,c as Ve}from"./FadeInExpandTransition-CscT7YNx.js";import{l as fe,K as We,k as B,C as he,d as H,h as d,N as Ge,M as pe,q as I,E as Le,o as Qe,g as Ae,w as Ye,n as Ze,t as Je,u as Ue}from"./index-DFjQp6eR.js";const ae=le("n-form-item");function Xe(e,{defaultSize:i="medium",mergedSize:s,mergedDisabled:l}={}){const n=fe(ae,null);We(ae,null);const p=B(s?()=>s(n):()=>{const{size:g}=e;if(g)return g;if(n){const{mergedSize:N}=n;if(N.value!==void 0)return N.value}return i}),_=B(l?()=>l(n):()=>{const{disabled:g}=e;return g!==void 0?g:n?n.disabled.value:!1}),P=B(()=>{const{status:g}=e;return g||(n==null?void 0:n.mergedValidationStatus.value)});return he(()=>{n&&n.restoreValidation()}),{mergedSizeRef:p,mergedDisabledRef:_,mergedStatusRef:P,nTriggerFormBlur(){n&&n.handleContentBlur()},nTriggerFormChange(){n&&n.handleContentChange()},nTriggerFormFocus(){n&&n.handleContentFocus()},nTriggerFormInput(){n&&n.handleContentInput()}}}const ve=H({name:"BaseIconSwitchTransition",setup(e,{slots:i}){const s=qe();return()=>d(Ge,{name:"icon-switch-transition",appear:s.value},i)}}),{cubicBezierEaseInOut:eo}=de;function J({originalTransform:e="",left:i=0,top:s=0,transition:l=`all .3s ${eo} !important`}={}){return[h("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to",{transform:e+" scale(0.75)",left:i,top:s,opacity:0}),h("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from",{transform:`scale(1) ${e}`,left:i,top:s,opacity:1}),h("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active",{transformOrigin:"center",position:"absolute",left:i,top:s,transition:l})]}const oo=h([h("@keyframes rotator",`
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
 `,[c("transition-wrapper",`
 position: absolute;
 width: 100%;
 height: 100%;
 `,[J()]),c("placeholder",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[J({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),c("container",`
 animation: rotator 3s linear infinite both;
 `,[c("icon",`
 height: 1em;
 width: 1em;
 `)])])]),Z="1.6s",to={strokeWidth:{type:Number,default:28},stroke:{type:String,default:void 0}},ro=H({name:"BaseLoading",props:Object.assign({clsPrefix:{type:String,required:!0},show:{type:Boolean,default:!0},scale:{type:Number,default:1},radius:{type:Number,default:100}},to),setup(e){be("-base-loading",oo,pe(e,"clsPrefix"))},render(){const{clsPrefix:e,radius:i,strokeWidth:s,stroke:l,scale:n}=this,p=i/n;return d("div",{class:`${e}-base-loading`,role:"img","aria-label":"loading"},d(ve,null,{default:()=>this.show?d("div",{key:"icon",class:`${e}-base-loading__transition-wrapper`},d("div",{class:`${e}-base-loading__container`},d("svg",{class:`${e}-base-loading__icon`,viewBox:`0 0 ${2*p} ${2*p}`,xmlns:"http://www.w3.org/2000/svg",style:{color:l}},d("g",null,d("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${p} ${p};270 ${p} ${p}`,begin:"0s",dur:Z,fill:"freeze",repeatCount:"indefinite"}),d("circle",{class:`${e}-base-loading__icon`,fill:"none",stroke:"currentColor","stroke-width":s,"stroke-linecap":"round",cx:p,cy:p,r:i-s/2,"stroke-dasharray":5.67*i,"stroke-dashoffset":18.48*i},d("animateTransform",{attributeName:"transform",type:"rotate",values:`0 ${p} ${p};135 ${p} ${p};450 ${p} ${p}`,begin:"0s",dur:Z,fill:"freeze",repeatCount:"indefinite"}),d("animate",{attributeName:"stroke-dashoffset",values:`${5.67*i};${1.42*i};${5.67*i}`,begin:"0s",dur:Z,fill:"freeze",repeatCount:"indefinite"})))))):d("div",{key:"placeholder",class:`${e}-base-loading__placeholder`},this.$slots)}))}}),no=R("base-wave",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`),io=H({name:"BaseWave",props:{clsPrefix:{type:String,required:!0}},setup(e){be("-base-wave",no,pe(e,"clsPrefix"));const i=I(null),s=I(!1);let l=null;return he(()=>{l!==null&&window.clearTimeout(l)}),{active:s,selfRef:i,play(){l!==null&&(window.clearTimeout(l),s.value=!1,l=null),Le(()=>{var n;(n=i.value)===null||n===void 0||n.offsetHeight,s.value=!0,l=window.setTimeout(()=>{s.value=!1,l=null},1e3)})}}},render(){const{clsPrefix:e}=this;return d("div",{ref:"selfRef","aria-hidden":!0,class:[`${e}-base-wave`,this.active&&`${e}-base-wave--active`]})}}),{cubicBezierEaseInOut:$}=de;function ao({duration:e=".2s",delay:i=".1s"}={}){return[h("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to",{opacity:1}),h("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from",`
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
 `)]}const so=q&&"chrome"in window;q&&navigator.userAgent.includes("Firefox");const lo=q&&navigator.userAgent.includes("Safari")&&!so;function S(e){return ce(e,[255,255,255,.16])}function D(e){return ce(e,[0,0,0,.12])}const co=le("n-button-group"),uo=h([R("button",`
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
 `,[x("color",[c("border",{borderColor:"var(--n-border-color)"}),x("disabled",[c("border",{borderColor:"var(--n-border-color-disabled)"})]),re("disabled",[h("&:focus",[c("state-border",{borderColor:"var(--n-border-color-focus)"})]),h("&:hover",[c("state-border",{borderColor:"var(--n-border-color-hover)"})]),h("&:active",[c("state-border",{borderColor:"var(--n-border-color-pressed)"})]),x("pressed",[c("state-border",{borderColor:"var(--n-border-color-pressed)"})])])]),x("disabled",{backgroundColor:"var(--n-color-disabled)",color:"var(--n-text-color-disabled)"},[c("border",{border:"var(--n-border-disabled)"})]),re("disabled",[h("&:focus",{backgroundColor:"var(--n-color-focus)",color:"var(--n-text-color-focus)"},[c("state-border",{border:"var(--n-border-focus)"})]),h("&:hover",{backgroundColor:"var(--n-color-hover)",color:"var(--n-text-color-hover)"},[c("state-border",{border:"var(--n-border-hover)"})]),h("&:active",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[c("state-border",{border:"var(--n-border-pressed)"})]),x("pressed",{backgroundColor:"var(--n-color-pressed)",color:"var(--n-text-color-pressed)"},[c("state-border",{border:"var(--n-border-pressed)"})])]),x("loading","cursor: wait;"),R("base-wave",`
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `,[x("active",{zIndex:1,animationName:"button-wave-spread, button-wave-opacity"})]),q&&"MozBoxSizing"in document.createElement("div").style?h("&::moz-focus-inner",{border:0}):null,c("border, state-border",`
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `),c("border",{border:"var(--n-border)"}),c("state-border",{border:"var(--n-border)",borderColor:"#0000",zIndex:1}),c("icon",`
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
 `,[J({top:"50%",originalTransform:"translateY(-50%)"})]),ao()]),c("content",`
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `,[h("~",[c("icon",{margin:"var(--n-icon-margin)",marginRight:0})])]),x("block",`
 display: flex;
 width: 100%;
 `),x("dashed",[c("border, state-border",{borderStyle:"dashed !important"})]),x("disabled",{cursor:"not-allowed",opacity:"var(--n-opacity-disabled)"})]),h("@keyframes button-wave-spread",{from:{boxShadow:"0 0 0.5px 0 var(--n-ripple-color)"},to:{boxShadow:"0 0 0.5px 4.5px var(--n-ripple-color)"}}),h("@keyframes button-wave-opacity",{from:{opacity:"var(--n-wave-opacity)"},to:{opacity:0}})]),bo=Object.assign(Object.assign({},ue.props),{color:String,textColor:String,text:Boolean,block:Boolean,loading:Boolean,disabled:Boolean,circle:Boolean,size:String,ghost:Boolean,round:Boolean,secondary:Boolean,tertiary:Boolean,quaternary:Boolean,strong:Boolean,focusable:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},tag:{type:String,default:"button"},type:{type:String,default:"default"},dashed:Boolean,renderIcon:Function,iconPlacement:{type:String,default:"left"},attrType:{type:String,default:"button"},bordered:{type:Boolean,default:!0},onClick:[Function,Array],nativeFocusBehavior:{type:Boolean,default:!lo}}),fo=H({name:"Button",props:bo,setup(e){const i=I(null),s=I(null),l=I(!1),n=Ee(()=>!e.quaternary&&!e.tertiary&&!e.secondary&&!e.text&&(!e.color||e.ghost||e.dashed)&&e.bordered),p=fe(co,{}),{mergedSizeRef:_}=Xe({},{defaultSize:"medium",mergedSize:r=>{const{size:v}=e;if(v)return v;const{size:w}=p;if(w)return w;const{mergedSize:o}=r||{};return o?o.value:"medium"}}),P=B(()=>e.focusable&&!e.disabled),g=r=>{var v;P.value||r.preventDefault(),!e.nativeFocusBehavior&&(r.preventDefault(),!e.disabled&&P.value&&((v=i.value)===null||v===void 0||v.focus({preventScroll:!0})))},N=r=>{var v;if(!e.disabled&&!e.loading){const{onClick:w}=e;w&&Ve(w,r),e.text||(v=s.value)===null||v===void 0||v.play()}},me=r=>{switch(r.key){case"Enter":if(!e.keyboard)return;l.value=!1}},ge=r=>{switch(r.key){case"Enter":if(!e.keyboard||e.loading){r.preventDefault();return}l.value=!0}},ye=()=>{l.value=!1},{inlineThemeDisabled:U,mergedClsPrefixRef:M,mergedRtlRef:xe}=Fe(e),we=ue("Button","-button",uo,Oe,e,M),Ce=je("Button",xe,M),X=B(()=>{const r=we.value,{common:{cubicBezierEaseInOut:v,cubicBezierEaseOut:w},self:o}=r,{rippleDuration:K,opacityDisabled:E,fontWeight:V,fontWeightStrong:W}=o,y=_.value,{dashed:G,type:z,ghost:L,text:C,color:u,round:ee,circle:Q,textColor:k,secondary:$e,tertiary:oe,quaternary:ze,strong:ke}=e,Se={"font-weight":ke?W:V};let b={"--n-color":"initial","--n-color-hover":"initial","--n-color-pressed":"initial","--n-color-focus":"initial","--n-color-disabled":"initial","--n-ripple-color":"initial","--n-text-color":"initial","--n-text-color-hover":"initial","--n-text-color-pressed":"initial","--n-text-color-focus":"initial","--n-text-color-disabled":"initial"};const F=z==="tertiary",te=z==="default",a=F?"default":z;if(C){const f=k||u;b={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":"#0000","--n-text-color":f||o[t("textColorText",a)],"--n-text-color-hover":f?S(f):o[t("textColorTextHover",a)],"--n-text-color-pressed":f?D(f):o[t("textColorTextPressed",a)],"--n-text-color-focus":f?S(f):o[t("textColorTextHover",a)],"--n-text-color-disabled":f||o[t("textColorTextDisabled",a)]}}else if(L||G){const f=k||u;b={"--n-color":"#0000","--n-color-hover":"#0000","--n-color-pressed":"#0000","--n-color-focus":"#0000","--n-color-disabled":"#0000","--n-ripple-color":u||o[t("rippleColor",a)],"--n-text-color":f||o[t("textColorGhost",a)],"--n-text-color-hover":f?S(f):o[t("textColorGhostHover",a)],"--n-text-color-pressed":f?D(f):o[t("textColorGhostPressed",a)],"--n-text-color-focus":f?S(f):o[t("textColorGhostHover",a)],"--n-text-color-disabled":f||o[t("textColorGhostDisabled",a)]}}else if($e){const f=te?o.textColor:F?o.textColorTertiary:o[t("color",a)],m=u||f,O=z!=="default"&&z!=="tertiary";b={"--n-color":O?j(m,{alpha:Number(o.colorOpacitySecondary)}):o.colorSecondary,"--n-color-hover":O?j(m,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-pressed":O?j(m,{alpha:Number(o.colorOpacitySecondaryPressed)}):o.colorSecondaryPressed,"--n-color-focus":O?j(m,{alpha:Number(o.colorOpacitySecondaryHover)}):o.colorSecondaryHover,"--n-color-disabled":o.colorSecondary,"--n-ripple-color":"#0000","--n-text-color":m,"--n-text-color-hover":m,"--n-text-color-pressed":m,"--n-text-color-focus":m,"--n-text-color-disabled":m}}else if(oe||ze){const f=te?o.textColor:F?o.textColorTertiary:o[t("color",a)],m=u||f;oe?(b["--n-color"]=o.colorTertiary,b["--n-color-hover"]=o.colorTertiaryHover,b["--n-color-pressed"]=o.colorTertiaryPressed,b["--n-color-focus"]=o.colorSecondaryHover,b["--n-color-disabled"]=o.colorTertiary):(b["--n-color"]=o.colorQuaternary,b["--n-color-hover"]=o.colorQuaternaryHover,b["--n-color-pressed"]=o.colorQuaternaryPressed,b["--n-color-focus"]=o.colorQuaternaryHover,b["--n-color-disabled"]=o.colorQuaternary),b["--n-ripple-color"]="#0000",b["--n-text-color"]=m,b["--n-text-color-hover"]=m,b["--n-text-color-pressed"]=m,b["--n-text-color-focus"]=m,b["--n-text-color-disabled"]=m}else b={"--n-color":u||o[t("color",a)],"--n-color-hover":u?S(u):o[t("colorHover",a)],"--n-color-pressed":u?D(u):o[t("colorPressed",a)],"--n-color-focus":u?S(u):o[t("colorFocus",a)],"--n-color-disabled":u||o[t("colorDisabled",a)],"--n-ripple-color":u||o[t("rippleColor",a)],"--n-text-color":k||(u?o.textColorPrimary:F?o.textColorTertiary:o[t("textColor",a)]),"--n-text-color-hover":k||(u?o.textColorHoverPrimary:o[t("textColorHover",a)]),"--n-text-color-pressed":k||(u?o.textColorPressedPrimary:o[t("textColorPressed",a)]),"--n-text-color-focus":k||(u?o.textColorFocusPrimary:o[t("textColorFocus",a)]),"--n-text-color-disabled":k||(u?o.textColorDisabledPrimary:o[t("textColorDisabled",a)])};let A={"--n-border":"initial","--n-border-hover":"initial","--n-border-pressed":"initial","--n-border-focus":"initial","--n-border-disabled":"initial"};C?A={"--n-border":"none","--n-border-hover":"none","--n-border-pressed":"none","--n-border-focus":"none","--n-border-disabled":"none"}:A={"--n-border":o[t("border",a)],"--n-border-hover":o[t("borderHover",a)],"--n-border-pressed":o[t("borderPressed",a)],"--n-border-focus":o[t("borderFocus",a)],"--n-border-disabled":o[t("borderDisabled",a)]};const{[t("height",y)]:Y,[t("fontSize",y)]:Be,[t("padding",y)]:Te,[t("paddingRound",y)]:_e,[t("iconSize",y)]:Pe,[t("borderRadius",y)]:Re,[t("iconMargin",y)]:Ie,waveOpacity:He}=o,Ne={"--n-width":Q&&!C?Y:"initial","--n-height":C?"initial":Y,"--n-font-size":Be,"--n-padding":Q||C?"initial":ee?_e:Te,"--n-icon-size":Pe,"--n-icon-margin":Ie,"--n-border-radius":C?"initial":Q||ee?Y:Re};return Object.assign(Object.assign(Object.assign(Object.assign({"--n-bezier":v,"--n-bezier-ease-out":w,"--n-ripple-duration":K,"--n-opacity-disabled":E,"--n-wave-opacity":He},Se),b),A),Ne)}),T=U?De("button",B(()=>{let r="";const{dashed:v,type:w,ghost:o,text:K,color:E,round:V,circle:W,textColor:y,secondary:G,tertiary:z,quaternary:L,strong:C}=e;v&&(r+="a"),o&&(r+="b"),K&&(r+="c"),V&&(r+="d"),W&&(r+="e"),G&&(r+="f"),z&&(r+="g"),L&&(r+="h"),C&&(r+="i"),E&&(r+="j"+ne(E)),y&&(r+="k"+ne(y));const{value:u}=_;return r+="l"+u[0],r+="m"+w[0],r}),X,e):void 0;return{selfElRef:i,waveElRef:s,mergedClsPrefix:M,mergedFocusable:P,mergedSize:_,showBorder:n,enterPressed:l,rtlEnabled:Ce,handleMousedown:g,handleKeydown:ge,handleBlur:ye,handleKeyup:me,handleClick:N,customColorCssVars:B(()=>{const{color:r}=e;if(!r)return null;const v=S(r);return{"--n-border-color":r,"--n-border-color-hover":v,"--n-border-color-pressed":D(r),"--n-border-color-focus":v,"--n-border-color-disabled":r}}),cssVars:U?void 0:X,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender}},render(){const{mergedClsPrefix:e,tag:i,onRender:s}=this;s==null||s();const l=ie(this.$slots.default,n=>n&&d("span",{class:`${e}-button__content`},n));return d(i,{ref:"selfElRef",class:[this.themeClass,`${e}-button`,`${e}-button--${this.type}-type`,`${e}-button--${this.mergedSize}-type`,this.rtlEnabled&&`${e}-button--rtl`,this.disabled&&`${e}-button--disabled`,this.block&&`${e}-button--block`,this.enterPressed&&`${e}-button--pressed`,!this.text&&this.dashed&&`${e}-button--dashed`,this.color&&`${e}-button--color`,this.secondary&&`${e}-button--secondary`,this.loading&&`${e}-button--loading`,this.ghost&&`${e}-button--ghost`],tabindex:this.mergedFocusable?0:-1,type:this.attrType,style:this.cssVars,disabled:this.disabled,onClick:this.handleClick,onBlur:this.handleBlur,onMousedown:this.handleMousedown,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},this.iconPlacement==="right"&&l,d(Me,{width:!0},{default:()=>ie(this.$slots.icon,n=>(this.loading||this.renderIcon||n)&&d("span",{class:`${e}-button__icon`,style:{margin:Ke(this.$slots.default)?"0":""}},d(ve,null,{default:()=>this.loading?d(ro,{clsPrefix:e,key:"loading",class:`${e}-icon-slot`,strokeWidth:20}):d("div",{key:"icon",class:`${e}-icon-slot`,role:"none"},this.renderIcon?this.renderIcon():n)})))}),this.iconPlacement==="left"&&l,this.text?null:d(io,{ref:"waveElRef",clsPrefix:e}),this.showBorder?d("div",{"aria-hidden":!0,class:`${e}-button__border`,style:this.customColorCssVars}):null,this.showBorder?d("div",{"aria-hidden":!0,class:`${e}-button__state-border`,style:this.customColorCssVars}):null)}}),se="v2/tetrio/info",mo=H({__name:"tetrio_info",setup(e){const i=()=>{document.querySelector("template#data").innerHTML=JSON.stringify({user:{id:"5eb3a6530b29196c155074e8",name:"WOSHIZHAZHA120",avatar:"https://tetr.io/user-content/avatars/5eb3a6530b29196c155074e8.jpg",banner:"https://tetr.io/user-content/banners/605468e1d8bf2a23b076eba5.jpg",badges:["secretgrade","100player","20tsd"],country:"cn",xp:15033024,friend_count:184,playtime:"1079 小时",supporter_tier:3,bad_standing:!0,verified:!0,bio:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",join_at:"2020/5/7 14:10:27"},tetra_league:{rank:"x",tr:24830.47,glicko:2806.04,rd:62.27,global_rank:327,country_rank:16,apm:119.32,pps:2.97,vs:234,statistic:{total:5700,wins:3004}},statistic:{total:7625,wins:3747},sprint:{time:"0:22.293",global_rank:367,play_at:"2024/3/13 17:05:49"},blitz:{score:389548,play_at:"2024/1/7 16:24:20"},zen:{score:13383165,level:209}}),document.querySelector("template#path").innerHTML=se};return(s,l)=>(Qe(),Ae(Ue(fo),{onClick:i},{default:Ye(()=>[Ze("测试 "+Je(se))]),_:1}))}});export{mo as default};
