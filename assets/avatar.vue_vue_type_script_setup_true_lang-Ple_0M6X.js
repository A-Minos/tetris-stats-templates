import{t as W,I as A}from"./chunk-SFZGYJFI-BJOfxVXo.js";import{o as V,i as K}from"./Image-acebR6Jb.js";import{u as _,v as w,c as P,y as N,b as S,z as G,g as E,d as U,i as q,e as D}from"./light-Ur-C4r2M.js";import{a as X}from"./light-CitHUQxH.js";import{c as Y}from"./color-to-class-B0iQgAn2.js";import{a as J,r as Q}from"./use-style-D5bDmKQN.js";import{V as Z}from"./_common-D_mJB24-.js";import{d as I,q as z,l as T,k as b,s as ee,B as oe,C as re,A as te,h as O,o as ne,g as ae,u as se}from"./index-CUoTq5C_.js";const ie={color:Object,type:{type:String,default:"default"},round:Boolean,size:{type:String,default:"medium"},closable:Boolean,disabled:{type:Boolean,default:void 0}};Object.assign(Object.assign(Object.assign({},_.props),ie),{bordered:{type:Boolean,default:void 0},checked:Boolean,checkable:Boolean,strong:Boolean,triggerClickOnClose:Boolean,onClose:[Array,Function],onMouseenter:Function,onMouseleave:Function,"onUpdate:checked":Function,onUpdateChecked:Function,internalCloseFocusable:{type:Boolean,default:!0},internalCloseIsButtonTag:{type:Boolean,default:!0},onCheckedChange:Function});const le=w("n-tag"),ce=w("n-avatar-group"),de=P("avatar",`
 width: var(--n-merged-size);
 height: var(--n-merged-size);
 color: #FFF;
 font-size: var(--n-font-size);
 display: inline-flex;
 position: relative;
 overflow: hidden;
 text-align: center;
 border: var(--n-border);
 border-radius: var(--n-border-radius);
 --n-merged-color: var(--n-color);
 background-color: var(--n-merged-color);
 transition:
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[N(S("&","--n-merged-color: var(--n-color-modal);")),G(S("&","--n-merged-color: var(--n-color-popover);")),S("img",`
 width: 100%;
 height: 100%;
 `),E("text",`
 white-space: nowrap;
 display: inline-block;
 position: absolute;
 left: 50%;
 top: 50%;
 `),P("icon",`
 vertical-align: bottom;
 font-size: calc(var(--n-merged-size) - 6px);
 `),E("text","line-height: 1.25")]),ue=Object.assign(Object.assign({},_.props),{size:[String,Number],src:String,circle:{type:Boolean,default:void 0},objectFit:String,round:{type:Boolean,default:void 0},bordered:{type:Boolean,default:void 0},onError:Function,fallbackSrc:String,intersectionObserverOptions:Object,lazy:Boolean,onLoad:Function,renderPlaceholder:Function,renderFallback:Function,imgProps:Object,color:String}),fe=I({name:"Avatar",props:ue,setup(o){const{mergedClsPrefixRef:n,inlineThemeDisabled:l}=U(o),c=z(!1);let d=null;const s=z(null),u=z(null),B=()=>{const{value:e}=s;if(e&&(d===null||d!==e.innerHTML)){d=e.innerHTML;const{value:r}=u;if(r){const{offsetWidth:t,offsetHeight:i}=r,{offsetWidth:a,offsetHeight:C}=e,x=.9,R=Math.min(t/a*x,i/C*x,1);e.style.transform=`translateX(-50%) translateY(-50%) scale(${R})`}}},p=T(ce,null),f=b(()=>{const{size:e}=o;if(e)return e;const{size:r}=p||{};return r||"medium"}),v=_("Avatar","-avatar",de,X,o,n),y=T(le,null),m=b(()=>{if(p)return!0;const{round:e,circle:r}=o;return e!==void 0||r!==void 0?e||r:y?y.roundRef.value:!1}),g=b(()=>p?!0:o.bordered||!1),k=b(()=>{const e=f.value,r=m.value,t=g.value,{color:i}=o,{self:{borderRadius:a,fontSize:C,color:x,border:R,colorModal:H,colorPopover:$},common:{cubicBezierEaseInOut:M}}=v.value;let j;return typeof e=="number"?j=`${e}px`:j=v.value.self[q("height",e)],{"--n-font-size":C,"--n-border":t?R:"none","--n-border-radius":r?"50%":a,"--n-color":i||x,"--n-color-modal":i||H,"--n-color-popover":i||$,"--n-bezier":M,"--n-merged-size":`var(--n-avatar-size-override, ${j})`}}),h=l?D("avatar",b(()=>{const e=f.value,r=m.value,t=g.value,{color:i}=o;let a="";return e&&(typeof e=="number"?a+=`a${e}`:a+=e[0]),r&&(a+="b"),t&&(a+="c"),i&&(a+=Y(i)),a}),k,o):void 0,F=z(!o.lazy);ee(()=>{if(o.lazy&&o.intersectionObserverOptions){let e;const r=oe(()=>{e==null||e(),e=void 0,o.lazy&&(e=V(u.value,o.intersectionObserverOptions,F))});re(()=>{r(),e==null||e()})}}),te(()=>{var e;return o.src||((e=o.imgProps)===null||e===void 0?void 0:e.src)},()=>{c.value=!1});const L=z(!o.lazy);return{textRef:s,selfRef:u,mergedRoundRef:m,mergedClsPrefix:n,fitTextTransform:B,cssVars:l?void 0:k,themeClass:h==null?void 0:h.themeClass,onRender:h==null?void 0:h.onRender,hasLoadError:c,shouldStartLoading:F,loaded:L,mergedOnError:e=>{if(!F.value)return;c.value=!0;const{onError:r,imgProps:{onError:t}={}}=o;r==null||r(e),t==null||t(e)},mergedOnLoad:e=>{const{onLoad:r,imgProps:{onLoad:t}={}}=o;r==null||r(e),t==null||t(e),L.value=!0}}},render(){var o,n;const{$slots:l,src:c,mergedClsPrefix:d,lazy:s,onRender:u,loaded:B,hasLoadError:p,imgProps:f={}}=this;u==null||u();let v;const y=!B&&!p&&(this.renderPlaceholder?this.renderPlaceholder():(n=(o=this.$slots).placeholder)===null||n===void 0?void 0:n.call(o));return this.hasLoadError?v=this.renderFallback?this.renderFallback():J(l.fallback,()=>[O("img",{src:this.fallbackSrc,style:{objectFit:this.objectFit}})]):v=Q(l.default,m=>{if(m)return O(Z,{onResize:this.fitTextTransform},{default:()=>O("span",{ref:"textRef",class:`${d}-avatar__text`},m)});if(c||f.src){const g=this.src||f.src;return O("img",Object.assign(Object.assign({},f),{loading:K&&!this.intersectionObserverOptions&&s?"lazy":"eager",src:s&&this.intersectionObserverOptions?this.shouldStartLoading?g:void 0:g,"data-image-src":g,onLoad:this.mergedOnLoad,onError:this.mergedOnError,style:[f.style||"",{objectFit:this.objectFit},y?{height:"0",width:"0",visibility:"hidden",position:"absolute"}:""]}))}}),O("span",{ref:"selfRef",class:[`${d}-avatar`,this.themeClass],style:this.cssVars},v,s&&y)}}),Oe=I({__name:"avatar",props:{avatar:{}},setup(o){const n=o,l=b(()=>{if(W(n.avatar))return n.avatar;switch(n.avatar.type){case"identicon":return`data:image/svg+xml;base64,${new A(n.avatar.hash,{background:[8,10,6,255],margin:.15,size:300,brightness:.48,saturation:.65,format:"svg"}).toString()}`}});return(c,d)=>{const s=fe;return ne(),ae(s,{src:se(l)},null,8,["src"])}}});export{Oe as _};
