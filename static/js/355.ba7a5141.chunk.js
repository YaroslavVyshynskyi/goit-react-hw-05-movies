"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[355],{1687:function(e,t,r){r.d(t,{Df:function(){return f},TP:function(){return v},ZF:function(){return p},tx:function(){return l},zv:function(){return _}});var n=r(5861),a=r(7757),c=r.n(a),u=r(4569),i=r.n(u),s="9c85c2414d8624d6e18c2da3e97d3f7e",o="https://api.themoviedb.org/3",f=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i().get("".concat(o,"/trending/movie/day?api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",[]);case 2:return e.next=4,i().get("".concat(o,"/search/movie?api_key=").concat(s,"&query=").concat(t));case 4:return r=e.sent,e.abrupt("return",r.data.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,i().get("".concat(o,"/movie/").concat(t,"?api_key=").concat(s));case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,i().get("".concat(o,"/movie/").concat(t,"/credits?api_key=").concat(s));case 4:return r=e.sent,e.abrupt("return",r.data.cast);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.next=4,i().get("".concat(o,"/movie/").concat(t,"/reviews?api_key=").concat(s));case 4:return r=e.sent,e.abrupt("return",r.data.results);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},5355:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(5861),a=r(885),c=r(7757),u=r.n(c),i=r(2791),s=r(6871),o=r(1687),f="MovieReviews_reviews__container__yxKsS",p="MovieReviews_reviews__list__QgYIj",v="MovieReviews_reviews__item__x5ioC",_="MovieReviews_reviews__author__3ONQl",l="MovieReviews_reviews__text__L5V0f",d=r(184),h=function(){var e=(0,s.UO)().movieId,t=(0,i.useState)([]),r=(0,a.Z)(t,2),c=r[0],h=r[1];return(0,i.useEffect)((function(){if(e){var t=function(){var t=(0,n.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.tx)(e);case 2:r=t.sent,h(r);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}}),[e]),(0,d.jsx)("div",{className:f,children:c.length?(0,d.jsx)("ul",{className:p,children:c.map((function(e){return(0,d.jsxs)("li",{className:v,children:[(0,d.jsxs)("p",{className:_,children:["Author: ",e.author]}),(0,d.jsx)("p",{className:l,children:e.content})]},e.id)}))}):"We don`t have any reviews for this movie"})}}}]);
//# sourceMappingURL=355.ba7a5141.chunk.js.map