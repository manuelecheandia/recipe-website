(this["webpackJsonprecipe-website"]=this["webpackJsonprecipe-website"]||[]).push([[0],{10:function(e,a,t){e.exports=t(24)},17:function(e,a,t){},18:function(e,a){Object({NODE_ENV:"production",PUBLIC_URL:"/recipe-website",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).SPOONACULAR_API_KEY},19:function(e,a,t){},24:function(e,a,t){"use strict";t.r(a);var l=t(2),n=t.n(l),i=t(9),r=t.n(i),c=(t(17),t(18),t(19),t(26));var u=function(){const[e,a]=Object(l.useState)(""),[t,i]=Object(l.useState)([]),[r,u]=Object(l.useState)(!1),[s,o]=Object(l.useState)(null),[b,p]=Object(l.useState)(1),[m]=Object(l.useState)(5),[v,d]=Object(l.useState)(""),[E,h]=Object(l.useState)(0),[S,f]=Object(l.useState)(0);Object(l.useEffect)(()=>{_()},[b,v]);var g=`https://api.spoonacular.com/recipes/complexSearch?apiKey=3beb197c9690416e8301673e7a94b78d${e?"&query="+e:""}&number=${m}&offset=${(b-1)*m}${v?"&cuisine="+v:""}`;const _=async()=>{u(!0),o(null);try{const e=await c.a.get(g);e.data&&e.data.results?(i(e.data.results),h(e.data.totalResults),f(Math.ceil(e.data.totalResults/m))):(i([]),h(0),f(0))}catch(s){o("Failed to fetch recipes"),console.error("Error fetching recipes",s)}finally{u(!1)}};return n.a.createElement("div",{className:"app"},n.a.createElement("h1",null,"Recipe Website"),n.a.createElement("form",{className:"app__searchForm",onSubmit:e=>{e.preventDefault(),p(1),_()}},n.a.createElement("input",{type:"text",className:"app__input",placeholder:"Enter ingredient",value:e,onChange:e=>a(e.target.value)}),n.a.createElement("select",{value:v,onChange:e=>d(e.target.value),className:"app__cuisineSelect"},n.a.createElement("option",{value:""},"All Cuisines"),[{label:"African",value:"African"},{label:"Asian",value:"Asian"},{label:"American",value:"American"},{label:"British",value:"British"},{label:"Cajun",value:"Cajun"},{label:"Caribbean",value:"Caribbean"},{label:"Chinese",value:"Chinese"},{label:"Eastern European",value:"Eastern European"},{label:"European",value:"European"},{label:"French",value:"French"},{label:"German",value:"German"},{label:"Greek",value:"Greek"},{label:"Indian",value:"Indian"},{label:"Irish",value:"Irish"},{label:"Italian",value:"Italian"},{label:"Japanese",value:"Japanese"},{label:"Jewish",value:"Jewish"},{label:"Korean",value:"Korean"},{label:"Latin American",value:"Latin American"},{label:"Mediterranean",value:"Mediterranean"},{label:"Mexican",value:"Mexican"},{label:"Middle Eastern",value:"Middle Eastern"},{label:"Nordic",value:"Nordic"},{label:"Southern",value:"Southern"},{label:"Spanish",value:"Spanish"},{label:"Thai",value:"Thai"},{label:"Vietnamese",value:"Vietnamese"}].map(e=>n.a.createElement("option",{key:e.value,value:e.value},e.label))),n.a.createElement("input",{className:"app__submit",type:"submit",value:"Search"})),r&&n.a.createElement("p",null,"Loading..."),s&&n.a.createElement("p",null,s),n.a.createElement("div",{className:"app__recipes"},t.map(e=>n.a.createElement("div",{key:e.id},n.a.createElement("h3",null,e.title),n.a.createElement("img",{src:e.image,alt:e.title,style:{width:"100px"}})))),n.a.createElement("div",{className:"pagination-info"},n.a.createElement("p",null,"Page ",b," of ",S),n.a.createElement("p",null,"Total Results: ",E)),n.a.createElement("div",{className:"pagination"},n.a.createElement("button",{onClick:()=>p(e=>Math.max(e-1,1)),disabled:1===b},"Prev"),n.a.createElement("button",{onClick:()=>p(e=>e+1),disabled:t.length<m},"Next")))};var s=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,27)).then(a=>{let{getCLS:t,getFID:l,getFCP:n,getLCP:i,getTTFB:r}=a;t(e),l(e),n(e),i(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(u,null))),s()}},[[10,1,2]]]);
//# sourceMappingURL=main.2e05712c.chunk.js.map