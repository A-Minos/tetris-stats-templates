import{i as C,j as i,k as $,u as h,v as B,l as z}from"./light-V0Gqp6-o.js";import{t as T}from"./light-CRnQgOeB.js";import{u as _}from"./use-compitable-DByslNdI.js";import{d as R,k as c,h as l}from"./index-koh2UFBd.js";const S=C("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[i("strong",`
 font-weight: var(--n-font-weight-strong);
 `),i("italic",{fontStyle:"italic"}),i("underline",{textDecoration:"underline"}),i("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),k=Object.assign(Object.assign({},h.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),D=R({name:"Text",props:k,setup(e){const{mergedClsPrefixRef:s,inlineThemeDisabled:r}=$(e),o=h("Typography","-text",S,T,e,s),n=c(()=>{const{depth:a,type:d}=e,u=d==="default"?a===void 0?"textColor":`textColor${a}Depth`:B("textColor",d),{common:{fontWeightStrong:m,fontFamilyMono:g,cubicBezierEaseInOut:f},self:{codeTextColor:x,codeBorderRadius:b,codeColor:v,codeBorder:p,[u]:y}}=o.value;return{"--n-bezier":f,"--n-text-color":y,"--n-font-weight-strong":m,"--n-font-famliy-mono":g,"--n-code-border-radius":b,"--n-code-text-color":x,"--n-code-color":v,"--n-code-border":p}}),t=r?z("text",c(()=>`${e.type[0]}${e.depth||""}`),n,e):void 0;return{mergedClsPrefix:s,compitableTag:_(e,["as","tag"]),cssVars:r?void 0:n,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e,s,r;const{mergedClsPrefix:o}=this;(e=this.onRender)===null||e===void 0||e.call(this);const n=[`${o}-text`,this.themeClass,{[`${o}-text--code`]:this.code,[`${o}-text--delete`]:this.delete,[`${o}-text--strong`]:this.strong,[`${o}-text--italic`]:this.italic,[`${o}-text--underline`]:this.underline}],t=(r=(s=this.$slots).default)===null||r===void 0?void 0:r.call(s);return this.code?l("code",{class:n,style:this.cssVars},this.delete?l("del",null,t):t):this.delete?l("del",{class:n,style:this.cssVars},t):l(this.compitableTag||"span",{class:n,style:this.cssVars},t)}});export{D as _};
