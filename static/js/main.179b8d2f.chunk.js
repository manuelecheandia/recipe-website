(this["webpackJsonprecipe-website"]=this["webpackJsonprecipe-website"]||[]).push([[0],{13:function(e,a){Object({NODE_ENV:"production",PUBLIC_URL:"/recipe-website",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).SPOONACULAR_API_KEY},16:function(e,a,t){e.exports=t(28)},22:function(e,a,t){},23:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),i=t(14),c=t.n(i),r=(t(22),t(9)),u=t(3),s=(t(13),t(23),t(29));var o=function(){const{id:e}=Object(u.q)(),[a,t]=Object(l.useState)(null),[i,c]=Object(l.useState)(!1),[r,o]=Object(l.useState)(null);return Object(l.useEffect)(()=>{const a=a,l=`https://api.spoonacular.com/recipes/${e}/information?apiKey=${a}`;(async()=>{c(!0);try{const{data:e}=await s.a.get(l);t(e)}catch(r){console.error("Failed to fetch recipe",r),o("Failed to load recipe details.")}finally{c(!1)}})()},[e]),i?n.a.createElement("div",null,"Loading..."):r?n.a.createElement("div",null,"Error: ",r):a?n.a.createElement("div",null,n.a.createElement("h1",null,a.title),n.a.createElement("img",{src:a.image,alt:a.title}),n.a.createElement("p",null,"Servings: ",a.servings),n.a.createElement("p",null,"Ready in: ",a.readyInMinutes," minutes")):n.a.createElement("div",null,"Recipe not found")};var m=function e(){const[a,t]=Object(l.useState)(""),[i,c]=Object(l.useState)([]),[m,p]=Object(l.useState)(!1),[b,v]=Object(l.useState)(null),[E,d]=Object(l.useState)(1),[h]=Object(l.useState)(5),[S,f]=Object(l.useState)(""),[g,O]=Object(l.useState)(0),[_,C]=Object(l.useState)(0);Object(l.useEffect)(()=>{y()},[E,S]);var j=`https://api.spoonacular.com/recipes/complexSearch?apiKey=3beb197c9690416e8301673e7a94b78d${a?"&query="+a:""}&number=${h}&offset=${(E-1)*h}${S?"&cuisine="+S:""}`;const y=async()=>{p(!0),v(null);try{const e=await s.a.get(j);e.data&&e.data.results?(c(e.data.results),O(e.data.totalResults),C(Math.ceil(e.data.totalResults/h))):(c([]),O(0),C(0))}catch(b){v("Failed to fetch recipes"),console.error("Error fetching recipes",b)}finally{p(!1)}};return n.a.createElement(r.a,null,n.a.createElement("div",{className:"app"},n.a.createElement("h1",null,"Recipe Website"),n.a.createElement("form",{className:"app__searchForm",onSubmit:e=>{e.preventDefault(),d(1),y()}},n.a.createElement("input",{type:"text",className:"app__input",placeholder:"Enter ingredient",value:a,onChange:e=>t(e.target.value)}),n.a.createElement("select",{value:S,onChange:e=>f(e.target.value),className:"app__cuisineSelect"},n.a.createElement("option",{value:""},"All Cuisines"),[{label:"African",value:"African"},{label:"Asian",value:"Asian"},{label:"American",value:"American"},{label:"British",value:"British"},{label:"Cajun",value:"Cajun"},{label:"Caribbean",value:"Caribbean"},{label:"Chinese",value:"Chinese"},{label:"Eastern European",value:"Eastern European"},{label:"European",value:"European"},{label:"French",value:"French"},{label:"German",value:"German"},{label:"Greek",value:"Greek"},{label:"Indian",value:"Indian"},{label:"Irish",value:"Irish"},{label:"Italian",value:"Italian"},{label:"Japanese",value:"Japanese"},{label:"Jewish",value:"Jewish"},{label:"Korean",value:"Korean"},{label:"Latin American",value:"Latin American"},{label:"Mediterranean",value:"Mediterranean"},{label:"Mexican",value:"Mexican"},{label:"Middle Eastern",value:"Middle Eastern"},{label:"Nordic",value:"Nordic"},{label:"Southern",value:"Southern"},{label:"Spanish",value:"Spanish"},{label:"Thai",value:"Thai"},{label:"Vietnamese",value:"Vietnamese"}].map(e=>n.a.createElement("option",{key:e.value,value:e.value},e.label))),n.a.createElement("input",{className:"app__submit",type:"submit",value:"Search"})),b&&n.a.createElement("p",null,b),n.a.createElement("div",{className:"app__recipes"},i.map(e=>n.a.createElement(r.b,{key:e.id},n.a.createElement("img",{className:"recipe__image",src:e.image,alt:e.title}),n.a.createElement("h6",{className:"recipe__name"},e.title)))),n.a.createElement("div",{className:"pagination-info"},n.a.createElement("p",null,"Page ",E," of ",_),n.a.createElement("p",null,"Total Results: ",g)),n.a.createElement("div",{className:"pagination"},n.a.createElement("button",{onClick:()=>d(e=>Math.max(e-1,1)),disabled:1===E},"Prev"),n.a.createElement("button",{onClick:()=>d(e=>e+1),disabled:i.length<h},"Next")),n.a.createElement(u.c,null,n.a.createElement(u.a,{path:"/",element:n.a.createElement(e,null)}),n.a.createElement(u.a,{path:"/recipe/:id",element:n.a.createElement(o,null)}))))};var p=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,30)).then(a=>{let{getCLS:t,getFID:l,getFCP:n,getLCP:i,getTTFB:c}=a;t(e),l(e),n(e),i(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(m,null))),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.179b8d2f.chunk.js.map