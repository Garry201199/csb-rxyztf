(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var i=c(1),a=c.n(i),r=c(12),n=c(9),s=c(4),l=c.p+"static/media/sh1.7347ab56.jpg",o=c.p+"static/media/sh2.17ee7c2b.jpg",d=c.p+"static/media/sh3.c086c37e.jpg",j=c.p+"static/media/sh4.c26fad24.jpg",b=c.p+"static/media/sh5.d503e70e.jpg",m=c.p+"static/media/sh6.9c957af4.jpg",x=c.p+"static/media/sh7.7eacf918.jpg",u=c.p+"static/media/sh8.d61248d4.jpg",h=c.p+"static/media/sh9.bd25fa3a.jpg",f=[{id:1,name:"Black Dawn",price:2370,image:l,inStock:2,rating:4,fastDelivery:!0},{id:2,name:"What Will You Do When",price:2234,image:o,inStock:0,rating:3,fastDelivery:!0},{id:3,name:"Point of No Return",price:1300,image:d,inStock:0,rating:2,fastDelivery:!1},{id:4,name:"Great Dictator, The",price:934,image:j,inStock:6,rating:1,fastDelivery:!0},{id:5,name:"Captain Phillips",price:4011,image:b,inStock:3,rating:3,fastDelivery:!0},{id:6,name:"Belly of an Architect, The",price:3144,image:m,inStock:6,rating:4,fastDelivery:!1},{id:7,name:"Big Snit, The",price:2447,image:x,inStock:4,rating:3,fastDelivery:!0},{id:8,name:"Galaxy of Terror (Quest)",price:4067,image:u,inStock:4,rating:4,fastDelivery:!1},{id:9,name:"I Drink Your Blood",price:4925,image:h,inStock:4,rating:1,fastDelivery:!1},{id:10,name:"Steppenwolf",price:2333,inStock:5,rating:2,image:l,fastDelivery:!1},{id:11,name:"Chambre en ville, Une (Room in Town, A)",price:4715,inStock:4,rating:2,image:o,fastDelivery:!0},{id:12,name:"Ju Dou",price:3279,inStock:0,rating:1,image:d,fastDelivery:!0},{id:13,name:"Little Lord Fauntleroy",price:1464,inStock:2,rating:5,image:j,fastDelivery:!0},{id:14,name:"First Love",price:1107,inStock:2,rating:4,image:b,fastDelivery:!0},{id:15,name:"Getting In",price:1026,inStock:3,rating:4,image:m,fastDelivery:!0},{id:16,name:"Green Years, The",price:2441,inStock:4,rating:2,image:x,fastDelivery:!0},{id:17,name:"Love Meetings (Comizi d'amore)",price:1870,inStock:5,rating:2,image:x,fastDelivery:!1},{id:18,name:"Holiday (Jour de f\xeate)",price:3201,inStock:6,rating:4,image:u,fastDelivery:!1},{id:19,name:"Broadcast News",price:665,inStock:0,rating:5,image:h,fastDelivery:!0},{id:20,name:"I Love You, Alice B. Toklas!",price:4167,inStock:1,rating:4,image:h,fastDelivery:!0}],p=c(6),g=c(3),y=function(e,t){switch(t.type){case"AddToCart":return Object(g.a)(Object(g.a)({},e),{},{cart:[].concat(Object(p.a)(e.cart),[Object(g.a)(Object(g.a)({},t.payload),{},{qty:1})])});case"RemoveFromCart":return Object(g.a)(Object(g.a)({},e),{},{cart:Object(p.a)(e.cart.filter((function(e){return e.id!==t.payload.id})))});case"ChangeCartQty":return Object(g.a)(Object(g.a)({},e),{},{cart:Object(p.a)(e.cart.filter((function(e){return e.id===t.payload.id?e.qty=t.payload.qty:e.qty})))});default:return e}},O=function(e,t){switch(t.type){case"SORT_BY_PRICE":return Object(g.a)(Object(g.a)({},e),{},{sort:t.payload});case"FILTER_BY_STOCK":return Object(g.a)(Object(g.a)({},e),{},{byStock:!e.byStock});case"FILTER_BY_DELIVERY":return Object(g.a)(Object(g.a)({},e),{},{byFastDelivery:!e.byFastDelivery});case"FILTER_BY_RATING":return Object(g.a)(Object(g.a)({},e),{},{byRating:t.payload});case"FILTER_BY_SEARCH":return Object(g.a)(Object(g.a)({},e),{},{searchQuery:t.payload});case"CLEAR_FILTERS":return{byStock:!1,byFastDelivery:!1,byRating:0};default:return e}},v=c(0),w=Object(i.createContext)(),k=function(e){var t=e.children,c=Object(i.useState)(f),a=Object(s.a)(c,2),r=a[0],n=(a[1],Object(i.useReducer)(y,{products:r,cart:[]})),l=Object(s.a)(n,2),o=l[0],d=l[1],j=Object(i.useReducer)(O,{byFastDelivery:!1,byStock:!1,searchQuery:"",byRating:0}),b=Object(s.a)(j,2),m=b[0],x=b[1];return Object(v.jsx)(w.Provider,{value:{state:o,dispatch:d,filterState:m,Filterdispatch:x},children:t})},N=w,S=c(2),C=c(7),R=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),c=t[0],a=t[1],r=Object(S.f)(),l=Object(i.useContext)(N),o=l.state.cart,d=l.dispatch,j=l.filterState.searchQuery,b=l.Filterdispatch;return Object(v.jsx)("div",{className:"bg-gray-900  sticky top-0 z-50 ",children:Object(v.jsx)("div",{className:"px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8",children:Object(v.jsxs)("div",{className:"relative flex items-center justify-between",children:[Object(v.jsx)(n.b,{to:"/",children:Object(v.jsxs)("div",{title:"Company",className:"inline-flex items-center",children:[Object(v.jsxs)("svg",{className:"w-8 text-teal-400",viewBox:"0 0 24 24",strokeLinejoin:"round",strokeWidth:"2",strokeLinecap:"round",strokeMiterlimit:"10",stroke:"currentColor",fill:"none",children:[Object(v.jsx)("rect",{x:"3",y:"1",width:"7",height:"12"}),Object(v.jsx)("rect",{x:"3",y:"17",width:"7",height:"6"}),Object(v.jsx)("rect",{x:"14",y:"1",width:"7",height:"6"}),Object(v.jsx)("rect",{x:"14",y:"11",width:"7",height:"12"})]}),Object(v.jsxs)("span",{className:"ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase",children:[Object(v.jsx)("span",{className:"text-3xl font-semibold ",children:"G"}),"-cart"]})]})}),Object(v.jsx)("div",{className:"flex  flex-1 justify-center items-center hidden space-x-8 lg:flex",children:Object(v.jsx)("input",{type:"text",value:j,onChange:function(e){return b({type:"FILTER_BY_SEARCH",payload:e.target.value})},placeholder:"search a product...",className:"w-[60%] outline-none rounded-md  border-2 focus:border-teal-300 h-12 px-4 bg-gray-100 "})}),Object(v.jsxs)("button",{onClick:function(){return a(!c)},className:"flex relative items-center text-red-500 px-4 py-2 rounded bg-gray-600  hover:bg-gray-500 transition duration-300 space-x-8 lg:flex",children:[Object(v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 ",fill:"none",viewBox:"0 0 24 24",stroke:"#fafafa",children:Object(v.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})}),Object(v.jsx)("span",{className:"absolute font-semibold top-1 right-1 text-teal-200 rounded-full w-6 h-6 flex justify-center\r bg-gray-900  ",children:null===o||void 0===o?void 0:o.length})]}),c&&Object(v.jsx)("div",{className:"absolute  top-14 right-0 min-w-[40%] md:w-96   ",children:Object(v.jsx)("div",{className:"p-5 bg-white  border rounded shadow-sm",children:Object(v.jsx)("div",{className:"items-center ",children:o.length>0?Object(v.jsxs)(v.Fragment,{children:[o.map((function(e){var t;return Object(v.jsx)("div",{children:Object(v.jsxs)("div",{className:"w-full p-3 flex mb-4 gap-x-4 justify-between items-center\n                        rounded-lg  bg-[#d3d3d3]  ",children:[Object(v.jsx)("div",{children:Object(v.jsx)("img",{className:" rounded-full object-cover w-20 h-20 ",src:e.image,alt:"bjsd"})}),Object(v.jsxs)("div",{className:"flex gap-y-3  flex-col",children:[Object(v.jsx)("h1",{className:"font-semibold",children:(null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t.length)>14?(null===e||void 0===e?void 0:e.name.slice(0,10))+" ...":null===e||void 0===e?void 0:e.name}),Object(v.jsxs)("h1",{className:"text-slate-800 font-semibold",children:[" ","\u20b9 ",e.price," "]})]}),Object(v.jsx)("div",{children:Object(v.jsx)(C.a,{className:"cursor-pointer",onClick:function(){return d({type:"RemoveFromCart",payload:e})},size:30})})]})},e.id)})),Object(v.jsx)("div",{children:Object(v.jsx)("button",{className:"px-4 py-2 w-full text-green-800 hover:text-green-100 font-bold  transition \r duration-200 rounded-lg bg-green-400 hover:bg-green-600\r focus:outline-none \r focus:shadow-outline",onClick:function(){a(!c),r("/cart")},children:"Go To Cart"})})," "]}):"Cart is Empty"})})})]})})})},D=a.a.memo(R),T=(c(22),function(){var e=Object(i.useContext)(N),t=e.filterState,c=t.byFastDelivery,a=t.byStock,r=t.sort,n=t.searchQuery,s=t.byRating,l=e.Filterdispatch;return console.log(c,n,a,r,s),Object(v.jsxs)("div",{className:"flex flex-col overflow-y-auto overflow-x-hidden  gap-y-3 md:p-1",children:[Object(v.jsx)("h1",{className:"text-gray-900  text-xl md:text-[2rem] font-semibold",children:"Filter Products"}),Object(v.jsxs)("div",{className:"flex flex-col gap-y-4",children:[Object(v.jsxs)("div",{className:"flex md:text-xl justify-between",children:[Object(v.jsx)("h1",{className:"text-[1rem] md:text-xl  ",children:"Ascending"}),Object(v.jsx)("input",{checked:"lowToHigh"===r,onChange:function(){return l({type:"SORT_BY_PRICE",payload:"lowToHigh"})},type:"radio"})," "]}),Object(v.jsxs)("div",{className:"flex md:text-xl justify-between",children:[Object(v.jsx)("h1",{className:"text-[1rem] md:text-xl  ",children:"Descending"}),Object(v.jsx)("input",{checked:"highToLow"===r,onChange:function(){return l({type:"SORT_BY_PRICE",payload:"highToLow"})},type:"radio"})," "]})]}),Object(v.jsx)("div",{className:"w-full border-1 border-t "}),Object(v.jsxs)("div",{className:"flex flex-col gap-y-4",children:[Object(v.jsxs)("div",{className:"flex md:text-xl justify-between",children:[Object(v.jsx)("h1",{className:"text-[1rem] md:text-xl",children:"Include Out of Stock"}),Object(v.jsx)("input",{type:"checkbox",onChange:function(){return l({type:"FILTER_BY_STOCK"})},checked:a})," "]}),Object(v.jsxs)("div",{className:"flex md:text-xl justify-between",children:[Object(v.jsx)("h1",{className:"text-[1rem] md:text-xl",children:" Fast Delivery Only"}),Object(v.jsx)("input",{type:"checkbox",onChange:function(){return l({type:"FILTER_BY_DELIVERY"})},checked:c})," "]})]}),Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"flex flex-wrap ",children:[" ",Object(v.jsx)("label",{className:"text-lg",children:"Rating : "}),Object(v.jsx)("div",{className:"flex ml-3 align-center items-center",children:Object(p.a)(Array(5)).map((function(e,t){return Object(v.jsx)("button",{onClick:function(){return l({type:"FILTER_BY_RATING",payload:t+1})},children:s>t?Object(v.jsx)(C.b,{size:20}):Object(v.jsx)(C.c,{size:20})},t)}))})]})}),Object(v.jsx)("button",{onClick:function(){return l({type:"CLEAR_FILTERS"})},className:"px-3 py-2 rounded-md bg-slate-200 ",children:"Clear Filters"})]})}),F=a.a.memo(T),L=function(e){var t=e.i,c=Object(i.useContext)(N),a=c.state.cart,r=c.dispatch;return Object(v.jsx)("div",{children:Object(v.jsxs)("div",{className:"max-w-56 md:w-60 p-3 flex flex-col gap-y-2 rounded-tl-[50px] \n        rounded-lg p-2 bg-gray-300  ",children:[Object(v.jsx)("img",{className:" rounded-tl-[50px] rounded-lg rounded-br-[50px]",src:t.image,alt:"bjsd"}),Object(v.jsxs)("div",{className:"flex justify-between",children:[" ",Object(v.jsx)("h1",{className:"font-semibold",children:(null===t||void 0===t?void 0:t.name.length)>14?(null===t||void 0===t?void 0:t.name.slice(0,10))+" ...":null===t||void 0===t?void 0:t.name}),t.inStock<=3&&0!==t.inStock?Object(v.jsxs)("span",{className:"px-2  text-base font-semibold  md:font-bold bg-red-100 rounded-full text-red-500",children:[" ","only ",t.inStock," left"]}):""]}),Object(v.jsxs)("h1",{children:[" \u20b9 ",t.price," "]}),Object(v.jsx)("h1",{children:t.fastDelivery?"Fast Delivery":"4 Days delivery"}),Object(v.jsxs)("div",{className:"flex",children:[Object(p.a)(Array(t.rating)).map((function(e,t){return Object(v.jsx)(C.b,{},t)})),Object(p.a)(Array(5-t.rating)).map((function(e,t){return Object(v.jsx)(C.c,{},t)}))]}),a.find((function(e){return e.id===t.id}))?Object(v.jsx)("button",{onClick:function(){return r({type:"RemoveFromCart",payload:t})},className:"px-3 py-2 bg-red-500 hover:bg-red-600\n                  rounded-md text-white ",children:"Remove from cart"}):Object(v.jsx)("button",{disabled:0===t.inStock,onClick:function(){return r({type:"AddToCart",payload:t})},className:"px-3 py-2  ".concat(0===t.inStock?"bg-gray-700 ":"bg-blue-700 hover:bg-blue-600","  \n          rounded-md text-white  "),children:0===t.inStock?"Out of stock":" Add to cart"})]})})},E=a.a.memo(L),_=function(){var e=Object(i.useContext)(N),t=e.state.products,c=e.filterState,a=c.byFastDelivery,r=c.byStock,n=c.sort,s=c.searchQuery,l=c.byRating;return Object(v.jsxs)("div",{className:"flex ",children:[Object(v.jsx)("div",{className:" fixed w-[45%] md:w-[25%] overflow-hidden bg-slate-500 p-4 min-h-screen  ",children:Object(v.jsx)(F,{})}),Object(v.jsx)("div",{className:" ml-[45%] md:ml-[25%] flex-1 p-4 overflow-y-hidden min-h-screen",children:Object(v.jsx)("div",{className:"flex items-center justify-center  flex-wrap gap-8",children:function(){var e=t;return n&&(e=e.sort((function(e,t){return"lowToHigh"===n?e.price-t.price:t.price-e.price}))),r||(e=e.filter((function(e){return 0!==e.inStock}))),a&&(e=e.filter((function(e){return e.fastDelivery}))),l&&(e=e.filter((function(e){return e.rating>=l}))),s&&(e=e.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}))),e}().map((function(e,t){return Object(v.jsx)(E,{i:e},e.id)}))})})]})},I=a.a.memo(_),B=function(){var e=Object(i.useContext)(N).state.cart,t=Object(i.useState)(0),c=Object(s.a)(t,2),a=c[0],r=c[1];return Object(i.useEffect)((function(){r(e.reduce((function(e,t){return e+Number(t.price)*t.qty}),0))}),[e]),Object(v.jsxs)("div",{className:"flex gap-4 flex-col",children:[Object(v.jsxs)("h1",{className:"text-[1.5rem] text-center  font-semibold md:text-[2rem] ",children:[" ","SubTotal (",e.length,") items"," "]}),Object(v.jsxs)("h1",{className:"font-semibold ",children:["Total : ",a," "]}),Object(v.jsx)("button",{className:"px-3 py-2 rounded-md font-semibold text-gray-200 \r hover:bg-blue-700 bg-blue-600 ",children:"Proceed to Checkout"})]})},A=a.a.memo(B),Y=function(e){var t,c,a=e.i,r=Object(i.useState)(!1),n=Object(s.a)(r,2),l=n[0],o=n[1],d=Object(i.useContext)(N).dispatch;return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:" px-3 py-2 md:px-9 md:py-4 w-full gap-y-2 rounded-xl justify-center \r md:justify-between items-center\r md:items-start flex md:flex-row flex-col bg-slate-200",children:[Object(v.jsx)("img",{className:" h-[90px] w-[90px] md:w-[150px] justify-self-center md:h-[150px] rounded-lg ",src:a.image,alt:a.name}),Object(v.jsx)("h1",{className:"font-bold  text-lg",children:(null===a||void 0===a||null===(t=a.name)||void 0===t?void 0:t.length)>14?(null===a||void 0===a||null===(c=a.name)||void 0===c?void 0:c.slice(0,10))+" ...":null===a||void 0===a?void 0:a.name}),Object(v.jsxs)("h1",{className:"font-semibold  text-base",children:["\u20b9 ",a.price]}),Object(v.jsxs)("div",{className:"flex",children:[Object(p.a)(Array(a.rating)).map((function(e,t){return Object(v.jsx)(C.b,{},t)})),Object(p.a)(Array(5-a.rating)).map((function(e,t){return Object(v.jsx)(C.c,{},t)}))]}),Object(v.jsxs)("div",{className:"self-center md:self-start ",children:[Object(v.jsxs)("button",{onClick:function(){return o(!l)},className:"relative text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",type:"button",children:[a.qty,Object(v.jsx)("svg",{className:"ml-2 w-4 h-4","aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Object(v.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})]}),l&&Object(v.jsx)("div",{id:"dropdown",className:" absolute z-10 w-32 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700",children:Object(v.jsx)("ul",{className:"py-1 text-sm text-gray-700 dark:text-gray-200",children:Object(p.a)(Array(a.inStock)).map((function(e,t){return Object(v.jsx)("li",{onClick:function(){d({type:"ChangeCartQty",payload:{id:a.id,qty:t+1}}),o(!l)},className:" py-2 px-4 \r hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:t+1})}))})})]}),Object(v.jsx)("button",{className:"px-2 py-1 bg-gray-400 rounded-xl ",children:Object(v.jsx)(C.a,{size:30,onClick:function(){return d({type:"RemoveFromCart",payload:a})}})})]})})},z=a.a.memo(Y),G=function(){var e=Object(i.useContext)(N).state.cart;return console.log(e),Object(v.jsxs)("div",{className:"flex ",children:[Object(v.jsx)("div",{className:" mr-[40%] md:mr-[25%] flex-1 p-4 overflow-y-hidden min-h-screen",children:Object(v.jsx)("div",{className:"flex flex-col  items-center justify-center border-1 border-white gap-y-8",children:e.map((function(e){return Object(v.jsx)(z,{i:e},e.id)}))})}),Object(v.jsx)("div",{className:" fixed right-0 w-[40%]  md:w-[25%] overflow-hidden bg-slate-200 p-4 min-h-screen  ",children:Object(v.jsx)(A,{})})]})},H=a.a.memo(G),M=function(){return Object(v.jsxs)("div",{className:"  App",children:[Object(v.jsx)(D,{}),Object(v.jsxs)(S.c,{children:[Object(v.jsx)(S.a,{path:"/",exact:!0,element:Object(v.jsx)(I,{})}),Object(v.jsx)(S.a,{path:"/cart",element:Object(v.jsx)(H,{})})]})]})},P=a.a.memo(M),Q=document.getElementById("root");Object(r.createRoot)(Q).render(Object(v.jsx)(i.StrictMode,{children:Object(v.jsx)(k,{children:Object(v.jsx)(n.a,{children:Object(v.jsx)(P,{})})})}))}},[[23,1,2]]]);
//# sourceMappingURL=main.7b1fb1e7.chunk.js.map