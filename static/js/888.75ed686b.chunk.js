"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[888],{1687:function(e,t,n){n.d(t,{Df:function(){return l},TP:function(){return v},ZF:function(){return u},tx:function(){return m},zv:function(){return d}});var i=n(5861),r=n(7757),a=n.n(r),s=n(4569),o=n.n(s),c="9c85c2414d8624d6e18c2da3e97d3f7e",_="https://api.themoviedb.org/3",l=function(){var e=(0,i.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("".concat(_,"/trending/movie/day?api_key=").concat(c));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,i.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",[]);case 2:return e.next=4,o().get("".concat(_,"/search/movie?api_key=").concat(c,"&query=").concat(t));case 4:return n=e.sent,e.abrupt("return",n.data.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,i.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,o().get("".concat(_,"/movie/").concat(t,"?api_key=").concat(c));case 4:return n=e.sent,e.abrupt("return",n.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,i.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,o().get("".concat(_,"/movie/").concat(t,"/credits?api_key=").concat(c));case 4:return n=e.sent,e.abrupt("return",n.data.cast);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,i.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,o().get("".concat(_,"/movie/").concat(t,"/reviews?api_key=").concat(c));case 4:return n=e.sent,e.abrupt("return",n.data.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},8888:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var i=n(5861),r=n(885),a=n(7757),s=n.n(a),o=n(2791),c=n(6871),_=n(501),l=n(3061),u=n(1687),v={movieDetails__container:"MovieDetails_movieDetails__container__Iaylr",back__btn:"MovieDetails_back__btn__8VP+7",back__link:"MovieDetails_back__link__xbqz3",movieDetails__wrap:"MovieDetails_movieDetails__wrap__EUdQq",movieDetails__poster:"MovieDetails_movieDetails__poster__KnEKw",movie__poster:"MovieDetails_movie__poster__D4cM7",movieAdditionalInfo__container:"MovieDetails_movieAdditionalInfo__container__rF7tY",movieAdditionalInfo__list:"MovieDetails_movieAdditionalInfo__list__mSk0K",movieAdditionalInfo__title:"MovieDetails_movieAdditionalInfo__title__hxkxk",movieAdditionalInfo__item:"MovieDetails_movieAdditionalInfo__item__x8+wX"},d=n(184),m=function(){var e=(0,c.UO)().movieId,t=(0,o.useState)({}),n=(0,r.Z)(t,2),a=n[0],m=n[1];(0,o.useEffect)((function(){if(e){var t=function(){var t=(0,i.Z)(s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.TP)(e);case 2:n=t.sent,m(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}}),[e]);var p=new Date(a.release_date).getFullYear(),f=(a.genres||[]).map((function(e){return e.name})),h=a.poster_path?"http://image.tmdb.org/t/p/w500/".concat(a.poster_path):"https://cdn.vectorstock.com/i/1000x1000/60/33/film-clip-black-silhouette-icon-vector-20326033.webp";return(0,d.jsxs)("div",{className:v.movieDetails__container,children:[(0,d.jsxs)("button",{type:"button",className:v.back__btn,children:[(0,d.jsx)(l.PjY,{}),(0,d.jsx)(_.rU,{to:"/",className:v.back__link,children:"Go back"})]}),(0,d.jsxs)("div",{className:v.movieDetails__wrap,children:[(0,d.jsx)("div",{className:v.movieDetails__poster,children:(0,d.jsx)("img",{src:h,alt:a.title,className:v.movie__poster})}),(0,d.jsxs)("div",{className:v.movieDetails__info,children:[(0,d.jsxs)("h1",{className:v.movie__title,children:[a.title," (",p,")"]}),(0,d.jsxs)("p",{className:v.movieDetails__text,children:["User Score: ",Math.round(10*a.vote_average),"%"]}),(0,d.jsx)("h2",{className:v.movieDetails__title,children:"Overview"}),(0,d.jsx)("p",{className:v.movieDetails__text,children:a.overview}),(0,d.jsx)("h2",{className:v.movieDetails__title,children:"Genres"}),(0,d.jsx)("p",{className:v.movieDetails__text,children:f.join(", ")})]})]}),(0,d.jsxs)("div",{className:v.movieAdditionalInfo__container,children:[(0,d.jsx)("h2",{className:v.movieAdditionalInfo__title,children:"Additional information"}),(0,d.jsxs)("ul",{className:v.movieAdditionalInfo__list,children:[(0,d.jsx)("li",{className:v.movieAdditionalInfo__item,children:(0,d.jsx)(_.rU,{to:"cast",className:v.movieAdditionalInfo__link,children:"Cast"})}),(0,d.jsx)("li",{className:v.movieAdditionalInfo__item,children:(0,d.jsx)(_.rU,{to:"reviews",className:v.movieAdditionalInfo__link,children:"Reviews"})})]})]}),(0,d.jsx)(c.j3,{})]})}}}]);
//# sourceMappingURL=888.75ed686b.chunk.js.map