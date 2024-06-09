import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{d as J,a as u,e as b,o as T,c as K,i as x,p as f,j as B,k as Q,u as A,q as U,t as X,v as g,l as Y}from"./light-DueRD9yG.js";import{N as Z}from"./Close-BjT3hswX.js";import{r as D,a as oo}from"./use-style-B8Q7O0Am.js";import{N as eo}from"./FadeInExpandTransition-D9gC-gHr.js";import{c as ro}from"./_common-Dh8oehso.js";import{N as no}from"./Icon-BR1L4Ibo.js";import{E as to,W as so,I as io,S as lo}from"./Warning-DnWp-WLY.js";import{d as ao,k as R,q as co,h as a,J as fo,o as ho,g as go,w as y,a as mo,b as P,m as H}from"./index-DaURy9nD.js";import{_ as po}from"./text-DOQSW7dW.js";import{_ as uo}from"./Flex-C2azvKPj.js";import"./light-CkuiA_xS.js";import"./use-compitable-BgiRhQq9.js";import"./_common-h0mJDxlK.js";const bo=r=>{const{lineHeight:o,borderRadius:n,fontWeightStrong:i,baseColor:t,dividerColor:p,actionColor:_,textColor1:d,textColor2:s,closeColorHover:c,closeColorPressed:v,closeIconColor:C,closeIconColorHover:$,closeIconColorPressed:l,infoColor:e,successColor:I,warningColor:z,errorColor:S,fontSize:E}=r;return Object.assign(Object.assign({},ro),{fontSize:E,lineHeight:o,titleFontWeight:i,borderRadius:n,border:`1px solid ${p}`,color:_,titleTextColor:d,iconColor:s,contentTextColor:s,closeBorderRadius:n,closeColorHover:c,closeColorPressed:v,closeIconColor:C,closeIconColorHover:$,closeIconColorPressed:l,borderInfo:`1px solid ${u(t,b(e,{alpha:.25}))}`,colorInfo:u(t,b(e,{alpha:.08})),titleTextColorInfo:d,iconColorInfo:e,contentTextColorInfo:s,closeColorHoverInfo:c,closeColorPressedInfo:v,closeIconColorInfo:C,closeIconColorHoverInfo:$,closeIconColorPressedInfo:l,borderSuccess:`1px solid ${u(t,b(I,{alpha:.25}))}`,colorSuccess:u(t,b(I,{alpha:.08})),titleTextColorSuccess:d,iconColorSuccess:I,contentTextColorSuccess:s,closeColorHoverSuccess:c,closeColorPressedSuccess:v,closeIconColorSuccess:C,closeIconColorHoverSuccess:$,closeIconColorPressedSuccess:l,borderWarning:`1px solid ${u(t,b(z,{alpha:.33}))}`,colorWarning:u(t,b(z,{alpha:.08})),titleTextColorWarning:d,iconColorWarning:z,contentTextColorWarning:s,closeColorHoverWarning:c,closeColorPressedWarning:v,closeIconColorWarning:C,closeIconColorHoverWarning:$,closeIconColorPressedWarning:l,borderError:`1px solid ${u(t,b(S,{alpha:.25}))}`,colorError:u(t,b(S,{alpha:.08})),titleTextColorError:d,iconColorError:S,contentTextColorError:s,closeColorHoverError:c,closeColorPressedError:v,closeIconColorError:C,closeIconColorHoverError:$,closeIconColorPressedError:l})},vo={name:"Alert",common:J,self:bo},{cubicBezierEaseInOut:m,cubicBezierEaseOut:Co,cubicBezierEaseIn:$o}=K;function xo({overflow:r="hidden",duration:o=".3s",originalTransition:n="",leavingDelay:i="0s",foldPadding:t=!1,enterToProps:p=void 0,leaveToProps:_=void 0,reverse:d=!1}={}){const s=d?"leave":"enter",c=d?"enter":"leave";return[T(`&.fade-in-height-expand-transition-${c}-from,
 &.fade-in-height-expand-transition-${s}-to`,Object.assign(Object.assign({},p),{opacity:1})),T(`&.fade-in-height-expand-transition-${c}-to,
 &.fade-in-height-expand-transition-${s}-from`,Object.assign(Object.assign({},_),{opacity:0,marginTop:"0 !important",marginBottom:"0 !important",paddingTop:t?"0 !important":void 0,paddingBottom:t?"0 !important":void 0})),T(`&.fade-in-height-expand-transition-${c}-active`,`
 overflow: ${r};
 transition:
 max-height ${o} ${m} ${i},
 opacity ${o} ${Co} ${i},
 margin-top ${o} ${m} ${i},
 margin-bottom ${o} ${m} ${i},
 padding-top ${o} ${m} ${i},
 padding-bottom ${o} ${m} ${i}
 ${n?","+n:""}
 `),T(`&.fade-in-height-expand-transition-${s}-active`,`
 overflow: ${r};
 transition:
 max-height ${o} ${m},
 opacity ${o} ${$o},
 margin-top ${o} ${m},
 margin-bottom ${o} ${m},
 padding-top ${o} ${m},
 padding-bottom ${o} ${m}
 ${n?","+n:""}
 `)]}const _o=x("alert",`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[f("border",`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),B("closable",[x("alert-body",[f("title",`
 padding-right: 24px;
 `)])]),f("icon",{color:"var(--n-icon-color)"}),x("alert-body",{padding:"var(--n-padding)"},[f("title",{color:"var(--n-title-text-color)"}),f("content",{color:"var(--n-content-text-color)"})]),xo({originalTransition:"transform .3s var(--n-bezier)",enterToProps:{transform:"scale(1)"},leaveToProps:{transform:"scale(0.9)"}}),f("icon",`
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
 `),f("close",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),B("show-icon",[x("alert-body",{paddingLeft:"calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"})]),B("right-adjust",[x("alert-body",{paddingRight:"calc(var(--n-close-size) + var(--n-padding) + 2px)"})]),x("alert-body",`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[f("title",`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[T("& +",[f("content",{marginTop:"9px"})])]),f("content",{transition:"color .3s var(--n-bezier)",fontSize:"var(--n-font-size)"})]),f("icon",{transition:"color .3s var(--n-bezier)"})]),Io=Object.assign(Object.assign({},A.props),{title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:"default"},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function}),zo=ao({name:"Alert",inheritAttrs:!1,props:Io,setup(r){const{mergedClsPrefixRef:o,mergedBorderedRef:n,inlineThemeDisabled:i,mergedRtlRef:t}=Q(r),p=A("Alert","-alert",_o,vo,r,o),_=U("Alert",t,o),d=R(()=>{const{common:{cubicBezierEaseInOut:l},self:e}=p.value,{fontSize:I,borderRadius:z,titleFontWeight:S,lineHeight:E,iconSize:W,iconMargin:w,iconMarginRtl:j,closeIconSize:k,closeBorderRadius:O,closeSize:N,closeMargin:L,closeMarginRtl:V,padding:F}=e,{type:h}=r,{left:M,right:q}=X(w);return{"--n-bezier":l,"--n-color":e[g("color",h)],"--n-close-icon-size":k,"--n-close-border-radius":O,"--n-close-color-hover":e[g("closeColorHover",h)],"--n-close-color-pressed":e[g("closeColorPressed",h)],"--n-close-icon-color":e[g("closeIconColor",h)],"--n-close-icon-color-hover":e[g("closeIconColorHover",h)],"--n-close-icon-color-pressed":e[g("closeIconColorPressed",h)],"--n-icon-color":e[g("iconColor",h)],"--n-border":e[g("border",h)],"--n-title-text-color":e[g("titleTextColor",h)],"--n-content-text-color":e[g("contentTextColor",h)],"--n-line-height":E,"--n-border-radius":z,"--n-font-size":I,"--n-title-font-weight":S,"--n-icon-size":W,"--n-icon-margin":w,"--n-icon-margin-rtl":j,"--n-close-size":N,"--n-close-margin":L,"--n-close-margin-rtl":V,"--n-padding":F,"--n-icon-margin-left":M,"--n-icon-margin-right":q}}),s=i?Y("alert",R(()=>r.type[0]),d,r):void 0,c=co(!0),v=()=>{const{onAfterLeave:l,onAfterHide:e}=r;l&&l(),e&&e()};return{rtlEnabled:_,mergedClsPrefix:o,mergedBordered:n,visible:c,handleCloseClick:()=>{var l;Promise.resolve((l=r.onClose)===null||l===void 0?void 0:l.call(r)).then(e=>{e!==!1&&(c.value=!1)})},handleAfterLeave:()=>{v()},mergedTheme:p,cssVars:i?void 0:d,themeClass:s==null?void 0:s.themeClass,onRender:s==null?void 0:s.onRender}},render(){var r;return(r=this.onRender)===null||r===void 0||r.call(this),a(eo,{onAfterLeave:this.handleAfterLeave},{default:()=>{const{mergedClsPrefix:o,$slots:n}=this,i={class:[`${o}-alert`,this.themeClass,this.closable&&`${o}-alert--closable`,this.showIcon&&`${o}-alert--show-icon`,!this.title&&this.closable&&`${o}-alert--right-adjust`,this.rtlEnabled&&`${o}-alert--rtl`],style:this.cssVars,role:"alert"};return this.visible?a("div",Object.assign({},fo(this.$attrs,i)),this.closable&&a(Z,{clsPrefix:o,class:`${o}-alert__close`,onClick:this.handleCloseClick}),this.bordered&&a("div",{class:`${o}-alert__border`}),this.showIcon&&a("div",{class:`${o}-alert__icon`,"aria-hidden":"true"},D(n.icon,()=>[a(no,{clsPrefix:o},{default:()=>{switch(this.type){case"success":return a(lo,null);case"info":return a(io,null);case"warning":return a(so,null);case"error":return a(to,null);default:return null}}})])),a("div",{class:[`${o}-alert-body`,this.mergedBordered&&`${o}-alert-body--bordered`]},oo(n.header,t=>{const p=t||this.title;return p?a("div",{class:`${o}-alert-body__title`},p):null}),n.default&&a("div",{class:`${o}-alert-body__content`},n))):null}})}}),So={},To={class:"text-center"};function yo(r,o){const n=po,i=uo,t=zo;return ho(),go(t,{"show-icon":!1,type:"error"},{default:y(()=>[mo("div",To,[P(i,{size:0,vertical:""},{default:y(()=>[P(n,{class:"text-2xl fw-bold"},{default:y(()=>[H("BAD STANDING")]),_:1}),P(n,{class:"my-2"},{default:y(()=>[H("近期有一次或多次违禁行为")]),_:1})]),_:1})])]),_:1})}const Fo=G(So,[["render",yo]]);export{Fo as default};
