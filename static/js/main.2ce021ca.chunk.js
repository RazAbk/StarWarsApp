(this.webpackJsonpstarwars=this.webpackJsonpstarwars||[]).push([[0],{64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),r=n(30),s=n.n(r),a=n(15),o=n(3),l=n(10),j=n.n(l),d=n(14),u=n(16),v=n(31),b=n(19),h=n(1),m=function(e){var t=e.setMobileMenu,n=e.currentMovie,c=e.onToggleFavorite;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(v.a,{className:"mobile-hamburger-btn",onClick:function(){t((function(e){return!e}))}}),Object(h.jsxs)("div",{className:"movie-details",children:[Object(h.jsx)("div",{className:"background-image"}),n&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"movie-details-top",children:[Object(h.jsx)("h2",{children:n.title}),n.isFavorite?Object(h.jsx)(b.a,{className:"favorite-icon",onClick:function(){c(n.episode_id)}}):Object(h.jsx)(b.b,{className:"favorite-icon",onClick:function(){c(n.episode_id)}})]}),Object(h.jsxs)("div",{className:"movie-meta-info",children:[Object(h.jsxs)("h4",{children:["Director: ",n.director]}),Object(h.jsxs)("h4",{children:["Producer: ",n.producer]}),Object(h.jsxs)("h4",{children:["Release date: ",n.release_date]})]}),Object(h.jsx)("p",{children:n.opening_crawl})]})]})]})},p=function(e){var t=e.movies,n=e.showMobileMenu,c=e.setMobileMenu,i=e.setCurrentMovie,r=function(e){i(e),c(!1)},s=t.filter((function(e){return e.isFavorite})),a=t.filter((function(e){return!e.isFavorite}));return Object(h.jsxs)("div",{className:"movies-sidebar ".concat(n?"show":""),children:[Object(h.jsx)("h2",{children:"Movies"}),Object(h.jsxs)("div",{className:"movies-list",children:[s.length>0&&Object(h.jsx)("p",{children:"My favorites"}),s.map((function(e,t){return Object(h.jsxs)("div",{className:"movie-preview",onClick:function(){r(e)},children:[Object(h.jsxs)("h3",{children:[e.title," (",e.release_date.split("-")[0],")"]}),Object(h.jsx)("h5",{children:e.director})]},"movie_".concat(t))})),a.length>0&&s.length>0&&Object(h.jsx)("p",{children:"Movies"}),a.map((function(e,t){return Object(h.jsxs)("div",{className:"movie-preview",onClick:function(){r(e)},children:[Object(h.jsxs)("h3",{children:[e.title," (",e.release_date.split("-")[0],")"]}),Object(h.jsx)("h5",{children:e.director})]},"movie_".concat(t))}))]})]})},O=n(32),x=n.n(O),f={load:function(e){var t=localStorage.getItem(e);return JSON.parse(t)},save:function(e,t){localStorage.setItem(e,JSON.stringify(t))},remove:function(e){localStorage.removeItem(e)}};var g={getMovies:function(){return N.apply(this,arguments)},toggleFavorite:function(e){var t=f.load(M)||[],n=t.findIndex((function(t){return t.episode_id===e}));return t[n].isFavorite=!t[n].isFavorite,f.save(M,t),{movies:t,currentMovie:t[n]}}},w="https://swapi.dev/api/films",M="sw_movies";function N(){return(N=Object(d.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((t=f.load(M)||[])&&t.length>0)){e.next=3;break}return e.abrupt("return",t);case 3:return e.prev=3,e.next=6,x.a.get(w);case 6:return n=e.sent,t=n.data.results,f.save(M,t),e.abrupt("return",t);case 12:e.prev=12,e.t0=e.catch(3),console.log("error while getting movies:",e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})))).apply(this,arguments)}var k=function(e){var t=e.isOpen,n=e.exitScreen;return Object(h.jsx)("div",{onClick:function(){n(!1)},className:"screen ".concat(t?"screen-active":"")})};function F(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(null),s=Object(u.a)(r,2),a=s[0],o=s[1],l=Object(c.useState)(!1),v=Object(u.a)(l,2),b=v[0],O=v[1];Object(c.useEffect)((function(){var e=function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getMovies();case 2:t=e.sent,i(t),o(t[0]);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);return Object(h.jsxs)("div",{className:"starwars-app",children:[Object(h.jsxs)("div",{className:"app-container",children:[Object(h.jsx)(p,{movies:n,showMobileMenu:b,setMobileMenu:O,setCurrentMovie:o}),Object(h.jsx)(m,{setMobileMenu:O,currentMovie:a,onToggleFavorite:function(e){var t=g.toggleFavorite(e);i(t.movies),o(t.currentMovie)}})]}),Object(h.jsx)(k,{isOpen:b,exitScreen:O})]})}var S=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(a.b,{to:"/movies",className:"movies-btn",children:"Go to movies"}),Object(h.jsxs)("div",{className:"home-page",children:[Object(h.jsx)("div",{className:"fade"}),Object(h.jsx)("section",{className:"star-wars",children:Object(h.jsxs)("div",{className:"crawl",children:[Object(h.jsxs)("div",{className:"title",children:[Object(h.jsx)("p",{children:"Episode IV"}),Object(h.jsx)("h1",{children:"A New Episode"})]}),Object(h.jsx)("p",{children:"Hey, I'm Raz,"}),Object(h.jsx)("p",{children:"a Full-Stack / Front-End developer"}),Object(h.jsx)("p",{children:"I\u2019m looking for a meaningful position, a one that will challenge me and allow me to create value for others."}),Object(h.jsx)("p",{children:"I am a dedicated employee, a quick learner and willing to envole."}),Object(h.jsx)("p",{children:"Creative, flexible and a problem solver, I love working with people and believe I have a lot to contribute to a team."})]})})]})]})};var I=function(){return Object(h.jsx)(a.a,{children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/movies",component:F}),Object(h.jsx)(o.a,{exact:!0,path:"/",component:S})]})})};n(64);s.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(I,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.2ce021ca.chunk.js.map