import{o as n,i as f,a0 as U,j as i,p as d,x as X,y as Y,k as Z,u as S,q as ee,v as z,t as oe,l as re}from"./light-DueRD9yG.js";import{a as b,e as g}from"./use-style-B8Q7O0Am.js";import{c as te}from"./call-f2ri57Kd.js";import{c as ne}from"./light-Z26BXsqs.js";import{N as de}from"./Close-BjT3hswX.js";import{d as ae,k as y,h as s}from"./index-DaURy9nD.js";const ie=n([f("card",`
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[U({background:"var(--n-color-modal)"}),i("hoverable",[n("&:hover","box-shadow: var(--n-box-shadow);")]),i("content-segmented",[n(">",[d("content",{paddingTop:"var(--n-padding-bottom)"})])]),i("content-soft-segmented",[n(">",[d("content",`
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]),i("footer-segmented",[n(">",[d("footer",{paddingTop:"var(--n-padding-bottom)"})])]),i("footer-soft-segmented",[n(">",[d("footer",`
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]),n(">",[f("card-header",`
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `,[d("main",`
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `),d("extra",`
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `),d("close",`
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]),d("action",`
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `),d("content","flex: 1; min-width: 0;"),d("content, footer",`
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `,[n("&:first-child",{paddingTop:"var(--n-padding-bottom)"})]),d("action",`
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]),f("card-cover",`
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `,[n("img",`
 display: block;
 width: 100%;
 `)]),i("bordered",`
 border: 1px solid var(--n-border-color);
 `,[n("&:target","border-color: var(--n-color-target);")]),i("action-segmented",[n(">",[d("action",[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),i("content-segmented, content-soft-segmented",[n(">",[d("content",{transition:"border-color 0.3s var(--n-bezier)"},[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),i("footer-segmented, footer-soft-segmented",[n(">",[d("footer",{transition:"border-color 0.3s var(--n-bezier)"},[n("&:not(:first-child)",{borderTop:"1px solid var(--n-border-color)"})])])]),i("embedded",`
 background-color: var(--n-color-embedded);
 `)]),X(f("card",`
 background: var(--n-color-modal);
 `,[i("embedded",`
 background-color: var(--n-color-embedded-modal);
 `)])),Y(f("card",`
 background: var(--n-color-popover);
 `,[i("embedded",`
 background-color: var(--n-color-embedded-popover);
 `)]))]),se={title:[String,Function],contentClass:String,contentStyle:[Object,String],headerClass:String,headerStyle:[Object,String],headerExtraClass:String,headerExtraStyle:[Object,String],footerClass:String,footerStyle:[Object,String],embedded:Boolean,segmented:{type:[Boolean,Object],default:!1},size:{type:String,default:"medium"},bordered:{type:Boolean,default:!0},closable:Boolean,hoverable:Boolean,role:String,onClose:[Function,Array],tag:{type:String,default:"div"},cover:Function,content:[String,Function],footer:Function,action:Function,headerExtra:Function},le=Object.assign(Object.assign({},S.props),se),ve=ae({name:"Card",props:le,setup(o){const p=()=>{const{onClose:t}=o;t&&te(t)},{inlineThemeDisabled:h,mergedClsPrefixRef:e,mergedRtlRef:u}=Z(o),c=S("Card","-card",ie,ne,o,e),x=ee("Card",u,e),m=y(()=>{const{size:t}=o,{self:{color:r,colorModal:l,colorTarget:C,textColor:v,titleTextColor:k,titleFontWeight:$,borderColor:w,actionColor:_,borderRadius:E,lineHeight:T,closeIconColor:R,closeIconColorHover:B,closeIconColorPressed:P,closeColorHover:F,closeColorPressed:j,closeBorderRadius:O,closeIconSize:M,closeSize:I,boxShadow:V,colorPopover:H,colorEmbedded:N,colorEmbeddedModal:L,colorEmbeddedPopover:W,[z("padding",t)]:q,[z("fontSize",t)]:A,[z("titleFontSize",t)]:D},common:{cubicBezierEaseInOut:K}}=c.value,{top:G,left:J,bottom:Q}=oe(q);return{"--n-bezier":K,"--n-border-radius":E,"--n-color":r,"--n-color-modal":l,"--n-color-popover":H,"--n-color-embedded":N,"--n-color-embedded-modal":L,"--n-color-embedded-popover":W,"--n-color-target":C,"--n-text-color":v,"--n-line-height":T,"--n-action-color":_,"--n-title-text-color":k,"--n-title-font-weight":$,"--n-close-icon-color":R,"--n-close-icon-color-hover":B,"--n-close-icon-color-pressed":P,"--n-close-color-hover":F,"--n-close-color-pressed":j,"--n-border-color":w,"--n-box-shadow":V,"--n-padding-top":G,"--n-padding-bottom":Q,"--n-padding-left":J,"--n-font-size":A,"--n-title-font-size":D,"--n-close-size":I,"--n-close-icon-size":M,"--n-close-border-radius":O}}),a=h?re("card",y(()=>o.size[0]),m,o):void 0;return{rtlEnabled:x,mergedClsPrefix:e,mergedTheme:c,handleCloseClick:p,cssVars:h?void 0:m,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{segmented:o,bordered:p,hoverable:h,mergedClsPrefix:e,rtlEnabled:u,onRender:c,embedded:x,tag:m,$slots:a}=this;return c==null||c(),s(m,{class:[`${e}-card`,this.themeClass,x&&`${e}-card--embedded`,{[`${e}-card--rtl`]:u,[`${e}-card--content${typeof o!="boolean"&&o.content==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.content,[`${e}-card--footer${typeof o!="boolean"&&o.footer==="soft"?"-soft":""}-segmented`]:o===!0||o!==!1&&o.footer,[`${e}-card--action-segmented`]:o===!0||o!==!1&&o.action,[`${e}-card--bordered`]:p,[`${e}-card--hoverable`]:h}],style:this.cssVars,role:this.role},b(a.cover,t=>{const r=this.cover?g([this.cover()]):t;return r&&s("div",{class:`${e}-card-cover`,role:"none"},r)}),b(a.header,t=>{const{title:r}=this,l=r?g(typeof r=="function"?[r()]:[r]):t;return l||this.closable?s("div",{class:[`${e}-card-header`,this.headerClass],style:this.headerStyle,role:"heading"},s("div",{class:`${e}-card-header__main`,role:"heading"},l),b(a["header-extra"],C=>{const v=this.headerExtra?g([this.headerExtra()]):C;return v&&s("div",{class:[`${e}-card-header__extra`,this.headerExtraClass],style:this.headerExtraStyle},v)}),this.closable&&s(de,{clsPrefix:e,class:`${e}-card-header__close`,onClick:this.handleCloseClick,absolute:!0})):null}),b(a.default,t=>{const{content:r}=this,l=r?g(typeof r=="function"?[r()]:[r]):t;return l&&s("div",{class:[`${e}-card__content`,this.contentClass],style:this.contentStyle,role:"none"},l)}),b(a.footer,t=>{const r=this.footer?g([this.footer()]):t;return r&&s("div",{class:[`${e}-card__footer`,this.footerClass],style:this.footerStyle,role:"none"},r)}),b(a.action,t=>{const r=this.action?g([this.action()]):t;return r&&s("div",{class:`${e}-card__action`,role:"none"},r)}))}});export{ve as _};
