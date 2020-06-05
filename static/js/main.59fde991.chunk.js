(this["webpackJsonpsay-their-names"]=this["webpackJsonpsay-their-names"]||[]).push([[0],{20:function(e,t,n){e.exports=n(28)},25:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),s=n(18),l=n.n(s),c=(n(25),n(19)),o=n(8),r=n(16),d=n(31),m=n(32),h={detail:null,entries:[],search:"",view:"posters"},u=function(e,t){switch(t.type){case"ENTRIES":return Object(o.a)({},e,{entries:t.entries});case"SEARCH":return Object(o.a)({},e,{search:t.value});case"VIEW":return Object(o.a)({},e,{view:t.value});default:return e}};function f(e){return Object(r.map)(e,(function(e,t){var n=e.date||"";return n=Object(d.a)(n,"m/d/y",new Date),Object(o.a)({key:t},e,{date:n})}))}function p(e){return i.a.createElement("div",{className:"namelist__entry",key:e.key,onClick:function(){return function(e){(e.article.startsWith("http://")||e.article.startsWith("htttps://"))&&window.open(e.article)}(e)}},i.a.createElement("div",{className:"namelist__line"},i.a.createElement("div",{className:"namelist__dot"})),i.a.createElement("div",{className:"namelist__date"},Object(m.a)(e.date,"m.d.yyyy")),i.a.createElement("div",{className:"namelist__details"},i.a.createElement("div",{className:"namelist__name"},e.name),parseInt(e.age,10)>0&&i.a.createElement("div",{className:"namelist__age"},"Age ",e.age),i.a.createElement("div",{className:"namelist__location"},e.city,", ",e.state),!1))}var w,b,E=0,v=0,y=!1;window.addEventListener("scroll",(function(){v!=window.scrollY&&window.scrollY>0&&(E=200)})),"undefined"!==typeof document.hidden?(w="hidden",b="visibilitychange"):"undefined"!==typeof document.msHidden?(w="msHidden",b="msvisibilitychange"):"undefined"!==typeof document.webkitHidden&&(w="webkitHidden",b="webkitvisibilitychange"),document.addEventListener(b,(function(){document[w]?y=!0:(E=30,y=!1)}),!1);var g=function(){var e=Object(a.useReducer)(u,h),t=Object(c.a)(e,2),n=t[0],s=(n.detail,n.entries),l=(n.search,n.view,t[1]);return Object(a.useEffect)((function(){fetch("names.json").then((function(e){return e.json()})).then((function(e){l({type:"ENTRIES",entries:f(e)}),function e(){window.requestAnimationFrame((function(){E>0?E-=1:y||(v=window.scrollY+2,window.scroll(0,v)),e()}))}()}))}),[]),i.a.createElement("div",null,i.a.createElement("header",null,i.a.createElement("h1",null,"Say Their Names"),i.a.createElement("h2",null,"These are the names of known black individuals killed by the police between 2013 and 2020, concluding with George Floyd. It is almost impossible to scroll through the sheer volume of names listed here. Of equal importance are the names not listed: those of the friends, family, and loved ones left behind. ",i.a.createElement("br",null),i.a.createElement("br",null),"This violence extends well beyond the past seven years; the data does not."),i.a.createElement("h3",null,"Sources: ",i.a.createElement("a",{href:"https://mappingpoliceviolence.org/"},"Mapping Police Violence"),", ",i.a.createElement("a",{href:"https://www.washingtonpost.com/graphics/investigations/police-shootings-database/"},"Washington Post"),", ",i.a.createElement("a",{href:"https://killedbypolice.net/"},"Killed By Police"),", and \u201c",i.a.createElement("a",{href:"https://www.npr.org/2020/05/29/865261916/a-decade-of-watching-black-people-die"},"A Decade of Watching Black People Die"),",\u201d an episode of NPR\u2019s Code Switch. Names are typeset in ",i.a.createElement("a",{href:"https://www.vocaltype.co/history-of/martin"},"MARTIN")," inspired by signage from the 1968 Memphis Sanitation Strike and designed by Tr\xe9s Seals.",i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("a",{href:"mailto:saytheirnames.us@gmail.com"},"Talk with us.")),i.a.createElement("div",{class:"date-exp"},"data begins",i.a.createElement("br",null),"2013")),i.a.createElement("div",{className:"button",id:"side-button"},i.a.createElement("a",{href:"https://docs.google.com/document/d/1zh6reFJWkZRGBL5iIezTfA2tkKBB3X9JcMh2QYT8tWk/mobilebasic"},"What You Can Do")),i.a.createElement("div",{className:"namelist"},function(e){return Object(r.map)(e,p)}(s)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.59fde991.chunk.js.map