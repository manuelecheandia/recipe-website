(this["webpackJsonprecipe-website"]=this["webpackJsonprecipe-website"]||[]).push([[0],{15:function(e,t,a){e.exports=a(27)},21:function(e,t,a){},22:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(13),r=a.n(c),i=(a(21),a(22),a(7)),u=a(3),m=a(28);var o=function(){const[e,t]=Object(n.useState)(""),[a,c]=Object(n.useState)([]),r=Object(u.o)(),i=async()=>{const t=await m.a.get("https://api.spoonacular.com/recipes/complexSearch",{params:{apiKey:"3beb197c9690416e8301673e7a94b78d",query:e}});c(t.data.results)};return l.a.createElement("div",null,l.a.createElement("input",{type:"text",value:e,onChange:e=>t(e.target.value),onKeyPress:e=>"Enter"===e.key&&i()}),l.a.createElement("button",{onClick:i},"Search"),a.map(e=>l.a.createElement("div",{key:e.id,onClick:()=>r("/recipe/"+e.id)},l.a.createElement("img",{src:e.image,alt:e.title}),l.a.createElement("p",null,e.title))))};var s=function(){const{id:e}=Object(u.q)(),[t,a]=Object(n.useState)(null);return Object(n.useEffect)(()=>{(async()=>{const t=await m.a.get(`https://api.spoonacular.com/recipes/${e}/information`,{params:{apiKey:"3beb197c9690416e8301673e7a94b78d"}});a(t.data)})()},[e]),t?l.a.createElement("div",null,l.a.createElement("h1",null,t.title),l.a.createElement("img",{src:t.image,alt:t.title}),l.a.createElement("p",null,"Vegan: ",t.vegan?"Yes":"No"),l.a.createElement("p",null,"Dairy-free: ",t.dairyFree?"Yes":"No"),l.a.createElement("h2",null,"Ingredients"),l.a.createElement("ul",null,t.extendedIngredients.map(e=>l.a.createElement("li",{key:e.id},e.name," - ",e.amount," ",e.unit))),l.a.createElement("h2",null,"Instructions"),l.a.createElement("p",null,t.instructions)):l.a.createElement("div",null,"Loading...")};var p=function(){return l.a.createElement(i.a,null,l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/",element:l.a.createElement(o,null)}),l.a.createElement(u.a,{path:"/recipe/:id",element:l.a.createElement(s,null)})))};var E=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,29)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:c,getTTFB:r}=t;a(e),n(e),l(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null))),E()}},[[15,1,2]]]);
//# sourceMappingURL=main.dd53a4bf.chunk.js.map