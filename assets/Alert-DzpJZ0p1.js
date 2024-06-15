import{N as M,O as u,W as p,b as P,J as V,c as x,g,a as y,d as q,u as _,h as J,_ as K,P as f,e as G}from"./light-VyWawr5E.js";import{N as Q}from"./Close-DPeFMSRG.js";import{a as U,r as X}from"./use-style-C-GJeiq0.js";import{N as Y}from"./FadeInExpandTransition-C10oAdxx.js";import{c as Z}from"./_common-Dh8oehso.js";import{N as D}from"./Icon-i4M3L0Ib.js";import{E as oo,W as eo,I as ro,S as no}from"./Warning-CswEaB5y.js";import{d as to,k as R,q as so,h as a,H as io}from"./index-d3Nv2PvX.js";const lo=r=>{const{lineHeight:o,borderRadius:s,fontWeightStrong:l,baseColor:t,dividerColor:b,actionColor:I,textColor1:d,textColor2:n,closeColorHover:c,closeColorPressed:v,closeIconColor:C,closeIconColorHover:$,closeIconColorPressed:i,infoColor:e,successColor:z,warningColor:S,errorColor:E,fontSize:T}=r;return Object.assign(Object.assign({},Z),{fontSize:T,lineHeight:o,titleFontWeight:l,borderRadius:s,border:`1px solid ${b}`,color:I,titleTextColor:d,iconColor:n,contentTextColor:n,closeBorderRadius:s,closeColorHover:c,closeColorPressed:v,closeIconColor:C,closeIconColorHover:$,closeIconColorPressed:i,borderInfo:`1px solid ${u(t,p(e,{alpha:.25}))}`,colorInfo:u(t,p(e,{alpha:.08})),titleTextColorInfo:d,iconColorInfo:e,contentTextColorInfo:n,closeColorHoverInfo:c,closeColorPressedInfo:v,closeIconColorInfo:C,closeIconColorHoverInfo:$,closeIconColorPressedInfo:i,borderSuccess:`1px solid ${u(t,p(z,{alpha:.25}))}`,colorSuccess:u(t,p(z,{alpha:.08})),titleTextColorSuccess:d,iconColorSuccess:z,contentTextColorSuccess:n,closeColorHoverSuccess:c,closeColorPressedSuccess:v,closeIconColorSuccess:C,closeIconColorHoverSuccess:$,closeIconColorPressedSuccess:i,borderWarning:`1px solid ${u(t,p(S,{alpha:.33}))}`,colorWarning:u(t,p(S,{alpha:.08})),titleTextColorWarning:d,iconColorWarning:S,contentTextColorWarning:n,closeColorHoverWarning:c,closeColorPressedWarning:v,closeIconColorWarning:C,closeIconColorHoverWarning:$,closeIconColorPressedWarning:i,borderError:`1px solid ${u(t,p(E,{alpha:.25}))}`,colorError:u(t,p(E,{alpha:.08})),titleTextColorError:d,iconColorError:E,contentTextColorError:n,closeColorHoverError:c,closeColorPressedError:v,closeIconColorError:C,closeIconColorHoverError:$,closeIconColorPressedError:i})},ao={name:"Alert",common:M,self:lo},{cubicBezierEaseInOut:m,cubicBezierEaseOut:co,cubicBezierEaseIn:go}=V;function ho({overflow:r="hidden",duration:o=".3s",originalTransition:s="",leavingDelay:l="0s",foldPadding:t=!1,enterToProps:b=void 0,leaveToProps:I=void 0,reverse:d=!1}={}){const n=d?"leave":"enter",c=d?"enter":"leave";return[P(`&.fade-in-height-expand-transition-${c}-from,
 &.fade-in-height-expand-transition-${n}-to`,Object.assign(Object.assign({},b),{opacity:1})),P(`&.fade-in-height-expand-transition-${c}-to,
 &.fade-in-height-expand-transition-${n}-from`,Object.assign(Object.assign({},I),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:t?"0 !important":void 0,paddingBottom:t?"0 !important":void 0})),P(`&.fade-in-height-expand-transition-${c}-active`,`
 overflow: ${r};
 transition:
 max-height ${o} ${m} ${l},
 opacity ${o} ${co} ${l},
 margin-top ${o} ${m} ${l},
 margin-bottom ${o} ${m} ${l},
 padding-top ${o} ${m} ${l},
 padding-bottom ${o} ${m} ${l}
 ${s?","+s:""}
 `),P(`&.fade-in-height-expand-transition-${n}-active`,`
 overflow: ${r};
 transition:
 max-height ${o} ${m},
 opacity ${o} ${go},
 margin-top ${o} ${m},
 margin-bottom ${o} ${m},
 padding-top ${o} ${m},
 padding-bottom ${o} ${m}
 ${s?","+s:""}
 `)]}const fo=x("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[g("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),y("closable",[x("alert-body",[g("title",`
 padding-right: 24px;
 `)])]),g("icon",{color:"var(--n-icon-color)"}),x("alert-body",{padding:"var(--n-padding)"},[g("title",{color:"var(--n-title-text-color)"}),g("content",{color:"var(--n-content-text-color)"})]),ho({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),g("icon",`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),g("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),y("show-icon",[x("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),y("right-adjust",[x("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),x("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[g("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[P("& +",[g("content",{marginTop:"9px"})])]),g("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),g("icon",{transition:"color .3s var(--n-bezier)"})]),mo=Object.assign(Object.assign({},_.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),zo=to({name:"Alert",inheritAttrs:!1,props:mo,setup(r){const{mergedClsPrefixRef:o,mergedBorderedRef:s,inlineThemeDisabled:l,mergedRtlRef:t}=q(r),b=_("Alert","-alert",fo,ao,r,o),I=J("Alert",t,o),d=R(()=>{const{common:{cubicBezierEaseInOut:i},self:e}=b.value,{fontSize:z,borderRadius:S,titleFontWeight:E,lineHeight:T,iconSize:B,iconMargin:H,iconMarginRtl:W,closeIconSize:w,closeBorderRadius:A,closeSize:O,closeMargin:j,closeMarginRtl:k,padding:L}=e,{type:h}=r,{left:N,right:F}=K(H);return{"--n-bezier":i,"--n-color":e[f("color",h)],"--n-close-icon-size":w,"--n-close-border-radius":A,"--n-close-color-hover":e[f("closeColorHover",h)],"--n-close-color-pressed":e[f("closeColorPressed",h)],"--n-close-icon-color":e[f("closeIconColor",h)],"--n-close-icon-color-hover":e[f("closeIconColorHover",h)],"--n-close-icon-color-pressed":e[f("closeIconColorPressed",h)],"--n-icon-color":e[f("iconColor",h)],"--n-border":e[f("border",h)],"--n-title-text-color":e[f("titleTextColor",h)],"--n-content-text-color":e[f("contentTextColor",h)],"--n-line-height":T,"--n-border-radius":S,"--n-font-size":z,"--n-title-font-weight":E,"--n-icon-size":B,"--n-icon-margin":H,"--n-icon-margin-rtl":W,"--n-close-size":O,"--n-close-margin":j,"--n-close-margin-rtl":k,"--n-padding":L,"--n-icon-margin-left":N,"--n-icon-margin-right":F}}),n=l?G("alert",R(()=>r.type[0]),d,r):void 0,c=so(!0),v=()=>{const{onAfterLeave:i,onAfterHide:e}=r;i&&i(),e&&e()};return{rtlEnabled:I,mergedClsPrefix:o,mergedBordered:s,visible:c,handleCloseClick:()=>{var i;Promise.resolve((i=r.onClose)===null||i===void 0?void 0:i.call(r)).then(e=>{e!==!1&&(c.value=!1)})},handleAfterLeave:()=>{v()},mergedTheme:b,cssVars:l?void 0:d,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var r;return(r=this.onRender)===null||r===void 0||r.call(this),a(Y,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:o,$slots:s}=this,l={class:[`${o}-alert`,this.themeClass,this.closable&&`${o}-alert--closable`,this.showIcon&&`${o}-alert--show-icon`,!this.title&&this.closable&&`${o}-alert--right-adjust`,this.rtlEnabled&&`${o}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?a("div",Object.assign({},io(this.$attrs,l)),this.closable&&a(Q,{clsPrefix:o,class:`${o}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&a("div",{class:`${o}-alert__border`}),this.showIcon&&a("div",{class:`${o}-alert__icon`,"aria-hidden":"true"},U(s.icon,()=>[a(D,{clsPrefix:o},{default:()=>{switch(this.type){case"success":return a(no,null);case"info":return a(ro,null);case"warning":return a(eo,null);case"error":return a(oo,null);default:return null}}})])),a("div",{class:[`${o}-alert-body`,this.mergedBordered&&`${o}-alert-body--bordered`]},X(s.header,t=>{const b=t||this.title;return b?a("div",{class:`${o}-alert-body__title`},b):null}),s.default&&a("div",{class:`${o}-alert-body__content`},s))):null}})}});export{zo as _};
