(this["webpackJsonprecipe-website"]=this["webpackJsonprecipe-website"]||[]).push([[0],{15:function(e,a,t){e.exports=t(28)},21:function(e,a,t){},22:function(e,a){Object({NODE_ENV:"production",PUBLIC_URL:"/recipe-website",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).SPOONACULAR_API_KEY},23:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),i=t(13),c=t.n(i),r=(t(21),t(9)),u=t(3),s=(t(22),t(23),t(29));var o=function(){const{id:e}=Object(u.q)(),[a,t]=Object(l.useState)(null),[i]=Object(l.useState)(!1),[c,r]=Object(l.useState)(null);return Object(l.useEffect)(()=>{const a=`https://api.spoonacular.com/recipes/${e}/information?apiKey=3beb197c9690416e8301673e7a94b78d&includeNutrition=true`;(async()=>{i(!0);try{const{data:e}=await s.a.get(a);t(e)}catch(c){console.error("Failed to fetch recipe",c),r("Failed to load recipe details.")}finally{i(!1)}})()},[e]),c?n.a.createElement("div",null,"Error: ",c):a?n.a.createElement("div",{className:"recipe-detail-container"},n.a.createElement("div",{className:"recipe-image"},n.a.createElement("img",{src:a.image,alt:a.title})),n.a.createElement("div",{className:"recipe-info"},n.a.createElement("h1",null,a.title),n.a.createElement("div",null,n.a.createElement("h3",null,"Health Information"),n.a.createElement("ul",null,a.vegan&&n.a.createElement("li",null,"Vegan"),a.dairyFree&&n.a.createElement("li",null,"Dairy Free"),a.glutenFree&&n.a.createElement("li",null,"Gluten Free"))),n.a.createElement("div",null,n.a.createElement("h3",null,"Ingredients"),n.a.createElement("ul",null,a.extendedIngredients.map(e=>n.a.createElement("li",{key:e.id},e.name," - ",e.measures.us.amount," ",e.measures.us.unitShort)))),n.a.createElement("div",null,n.a.createElement("h3",null,"Cooking Instructions"),n.a.createElement("div",{className:"recipe__instructions"},a.instructions||"No specific cooking instructions provided.")))):n.a.createElement("div",null,"Recipe not found")};var m=function(){const[e,a]=Object(l.useState)(""),[t,i]=Object(l.useState)([]),[c,m]=Object(l.useState)(!1),[p,b]=Object(l.useState)(null),[d,E]=Object(l.useState)(1),[v]=Object(l.useState)(5),[h,g]=Object(l.useState)(""),[S,f]=Object(l.useState)(0),[_,O]=Object(l.useState)(0);Object(l.useEffect)(()=>{C()},[d,h]);var N=`https://api.spoonacular.com/recipes/complexSearch?apiKey=3beb197c9690416e8301673e7a94b78d${e?"&query="+e:""}&number=${v}&offset=${(d-1)*v}${h?"&cuisine="+h:""}`;const C=async()=>{m(!0),b(null);try{const e=await s.a.get(N);e.data&&e.data.results?(i(e.data.results),f(e.data.totalResults),O(Math.ceil(e.data.totalResults/v))):(i([]),f(0),O(0))}catch(p){b("Failed to fetch recipes"),console.error("Error fetching recipes",p)}finally{m(!1)}};return n.a.createElement(r.a,null,n.a.createElement("div",{className:"app"},n.a.createElement("h1",null,"Recipe Website"),n.a.createElement("form",{className:"app__searchForm",onSubmit:e=>{e.preventDefault(),E(1),C()}},n.a.createElement("input",{type:"text",className:"app__input",placeholder:"Enter ingredient",value:e,onChange:e=>a(e.target.value)}),n.a.createElement("select",{value:h,onChange:e=>g(e.target.value),className:"app__cuisineSelect"},n.a.createElement("option",{value:""},"All Cuisines"),[{label:"African",value:"African"},{label:"Asian",value:"Asian"},{label:"American",value:"American"},{label:"British",value:"British"},{label:"Cajun",value:"Cajun"},{label:"Caribbean",value:"Caribbean"},{label:"Chinese",value:"Chinese"},{label:"Eastern European",value:"Eastern European"},{label:"European",value:"European"},{label:"French",value:"French"},{label:"German",value:"German"},{label:"Greek",value:"Greek"},{label:"Indian",value:"Indian"},{label:"Irish",value:"Irish"},{label:"Italian",value:"Italian"},{label:"Japanese",value:"Japanese"},{label:"Jewish",value:"Jewish"},{label:"Korean",value:"Korean"},{label:"Latin American",value:"Latin American"},{label:"Mediterranean",value:"Mediterranean"},{label:"Mexican",value:"Mexican"},{label:"Middle Eastern",value:"Middle Eastern"},{label:"Nordic",value:"Nordic"},{label:"Southern",value:"Southern"},{label:"Spanish",value:"Spanish"},{label:"Thai",value:"Thai"},{label:"Vietnamese",value:"Vietnamese"}].map(e=>n.a.createElement("option",{key:e.value,value:e.value},e.label))),n.a.createElement("input",{className:"app__submit",type:"submit",value:"Search"})),p&&n.a.createElement("p",null,p),n.a.createElement("div",{className:"app__recipes"},t.map(e=>n.a.createElement(r.b,{to:"/recipe/"+e.id,key:e.id},n.a.createElement("img",{className:"recipe__image",src:e.image,alt:e.title}),n.a.createElement("h6",{className:"recipe__name"},e.title)))),n.a.createElement("div",{className:"pagination-info"},n.a.createElement("p",null,"Page ",d," of ",_),n.a.createElement("p",null,"Total Results: ",S)),n.a.createElement("div",{className:"pagination"},n.a.createElement("button",{onClick:()=>E(e=>Math.max(e-1,1)),disabled:1===d},"Prev"),n.a.createElement("button",{onClick:()=>E(e=>e+1),disabled:t.length<v},"Next")),n.a.createElement(u.c,null,n.a.createElement(u.a,{path:"/recipe/:id",element:n.a.createElement(o,null)}))))};var p=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,30)).then(a=>{let{getCLS:t,getFID:l,getFCP:n,getLCP:i,getTTFB:c}=a;t(e),l(e),n(e),i(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(m,null))),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.e0062959.chunk.js.map