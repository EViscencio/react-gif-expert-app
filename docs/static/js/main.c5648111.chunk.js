(this["webpackJsonp04-gif-expert-app"]=this["webpackJsonp04-gif-expert-app"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),u=a.n(c),i=a(1),l=a(8),o=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(i.a)(a,2),u=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u.trim().length>2&&(t((function(e){return[u].concat(Object(l.a)(e))})),o(""))}},r.a.createElement("input",{type:"text",onChange:function(e){o(e.target.value)},value:u}))},m=a(4),s=a.n(m),f=a(7),p=function(){var e=Object(f.a)(s.a.mark((function e(t){var a,n,r,c,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"Kyu5rWwGVJg2S6MUfPzvZ03PDWE3b2wC",a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=").concat("Kyu5rWwGVJg2S6MUfPzvZ03PDWE3b2wC"),e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,c=r.data,u=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",u);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){e.id;var t=e.title,a=e.url;return r.a.createElement("div",{className:"card animate__animated animate__fadeIn"},r.a.createElement("img",{src:a,alt:t}),r.a.createElement("p",null,t))},g=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){p(e).then((function(e){return c({data:e,loading:!1})}))}),[e]),r}(t),c=a.data,u=a.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"animate__animated animate__fadeIn"},t),u&&r.a.createElement("p",null,"Loading..."),r.a.createElement("div",{className:"card-grid"},c.map((function(e){return r.a.createElement(d,Object.assign({key:e.id},e))}))))},E=function(){var e=Object(n.useState)(["Dragon Ball Super"]),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"GifExpertApp"),r.a.createElement(o,{setCategories:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,a.map((function(e){return r.a.createElement(g,{key:e,category:e})}))))};a(15);u.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.c5648111.chunk.js.map