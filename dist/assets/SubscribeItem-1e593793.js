import{d as i,c as p,o as l,a as n,b as c,t as b,n as r,p as h,e as g,_ as m,r as v,w as f,f as k,g as S,h as y,i as u}from"./index-38fd917c.js";const V=t=>(h("data-v-5e9d3c2d"),t=t(),g(),t),I={class:"checkbox__label"},x=["checked"],C=V(()=>c("span",{class:"checkbox__custom"},null,-1)),P=i({__name:"Checkbox",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(t,{emit:e}){const s=t;function o(a){const d=a.target.checked;e("update:modelValue",!!d)}const _=p(()=>s.modelValue?"Subscribed":"Unsubscribed");return(a,d)=>(l(),n("div",{class:r(["checkbox",{active:a.modelValue}])},[c("p",null,b(_.value),1),c("label",I,[c("input",{type:"checkbox",checked:a.modelValue,class:"visually-hidden",onInput:o},null,40,x),C])],2))}});const w=m(P,[["__scopeId","data-v-5e9d3c2d"]]),B=["alt"],$=i({__name:"Image",props:{imagePath:{type:String},imageSite:{type:String}},setup(t){const e=t,s=v();return f(async()=>{s.value=(await k(()=>import(`../assets/img/${e.imagePath}`),[])).default}),(o,_)=>{const a=S("lazy");return y((l(),n("img",{alt:e.imageSite},null,8,B)),[[a,{src:s.value}]])}}}),D=["innerHTML"],E=i({__name:"SubscribeItem",props:{item:{}},setup(t){return(e,s)=>(l(),n("div",{class:r(["subscribe__item",{active:e.item.subscribed}])},[u(w,{modelValue:e.item.subscribed,"onUpdate:modelValue":s[0]||(s[0]=o=>e.item.subscribed=o)},null,8,["modelValue"]),u($,{imagePath:e.item.img,imageSite:e.item.site},null,8,["imagePath","imageSite"]),c("p",{innerHTML:e.item.text},null,8,D)],2))}});const L=m(E,[["__scopeId","data-v-f3c66a49"]]);export{L as default};
