(this["webpackJsonpsay-their-names"]=this["webpackJsonpsay-their-names"]||[]).push([[0],{184:function(e,t,a){e.exports=a(400)},189:function(e,t,a){},205:function(e,t){},207:function(e,t){},237:function(e,t){},238:function(e,t){},303:function(e,t){},400:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(178),s=a.n(i),r=(a(189),a(182)),l=a(58),o=a(179),m=a.n(o),d=a(77),u=a(183),h=a(35),p=a(402),f=a(403),E={detail:null,entries:[],search:"",view:"posters"},y=function(e,t){switch(t.type){case"ENTRIES":return Object(l.a)({},e,{entries:t.entries});case"SEARCH":return Object(l.a)({},e,{search:t.value});case"VIEW":return Object(l.a)({},e,{view:t.value});default:return e}};function v(e){return Object(d.map)(e,(function(e,t){var a=e.date||"";return a=Object(p.a)(a,"m/d/y",new Date),Object(l.a)({key:t},e,{date:a})}))}function w(){return c.a.createElement("div",null,"sdasf")}function g(e){return c.a.createElement("div",{className:"namelist__entry",key:e.key},c.a.createElement("div",{className:"namelist__line"},c.a.createElement("div",{className:"namelist__dot"})),c.a.createElement("div",{className:"namelist__date"},Object(f.a)(e.date,"m.d.yyyy")),c.a.createElement("div",{className:"namelist__details"},c.a.createElement("div",{className:"namelist__name"},e.name),c.a.createElement("div",{className:"namelist__age"},"Age ",e.age),c.a.createElement("div",{className:"namelist__location"},e.city,", ",e.state),!1))}var b=function(){var e=Object(n.useReducer)(y,E),t=Object(r.a)(e,2),a=t[0],i=(a.detail,a.entries),s=(a.search,a.view,t[1]);return Object(n.useEffect)((function(){m.a.init({key:"https://docs.google.com/spreadsheets/d/1ZWIpWwkm5C0pERHiRkmHsYTmReG4F3KC38ofquCLJZY/edit?usp=sharing",simpleSheet:!0}).then((function(e,t){s({type:"ENTRIES",entries:v(e)})}))}),[]),c.a.createElement(u.a,null,c.a.createElement("div",null,c.a.createElement("h1",null,"Say Their Names"),c.a.createElement("h2",null,"These are the names of black individuals murdered by police between 2013\xa0and 2020, concluding with George Floyd. They are typeset using ",c.a.createElement("a",{href:"https://www.vocaltype.co/history-of/martin"},"MARTIN"),", a typeface inspired by signage from the 1968 Memphis Sanitation Strike and designed by Tres Seal. Sources: ",c.a.createElement("a",{href:"https://www.washingtonpost.com/graphics/investigations/police-shootings-database"},"Washington Post"),", ",c.a.createElement("a",{href:"https://killedbypolice.net"},"Killed By Police"),", and NPR\u2019s Code Switch, ",c.a.createElement("a",{href:"https://www.npr.org/2020/05/29/865261916/a-decade-of-watching-black-people-die"},"A Decade of Watching Black People Die"),".  "),c.a.createElement("div",{className:"button",id:"side-button"},c.a.createElement("a",{href:"https://docs.google.com/document/d/1zh6reFJWkZRGBL5iIezTfA2tkKBB3X9JcMh2QYT8tWk/mobilebasic"},"What You Can Do")),c.a.createElement(h.c,null,c.a.createElement(h.a,{exact:!0,path:"/"},c.a.createElement("div",{className:"namelist"},function(e){return Object(d.map)(e,g)}(i))),c.a.createElement(h.a,{path:"/:id",children:c.a.createElement(w,{entries:i})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[184,1,2]]]);
//# sourceMappingURL=main.57a5cec0.chunk.js.map