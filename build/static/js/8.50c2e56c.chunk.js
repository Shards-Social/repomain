(this.webpackJsonpShards=this.webpackJsonpShards||[]).push([[8],{165:function(e,t,n){"use strict";var c=n(7),r=n(3),s=n.n(r),i=n(5),a=n(1),o=n(19),u=(n(169),n(174),n(172)),l=n(173),j=n(2),d=Object(a.forwardRef)((function(e,t){var n=e.setValue,r=Object(a.useRef)();Object(a.useImperativeHandle)(t,(function(){return{close:function(){return d(!1)}}}));var s=Object(a.useState)(!1),i=Object(c.a)(s,2),o=i[0],d=i[1];return Object(a.useEffect)((function(){var e=r.current,t=function(e){n((function(t){return t+e.detail.unicode}))};return e.addEventListener("emoji-click",t),function(){e.removeEventListener("emoji-click",t)}}),[n]),Object(j.jsxs)("div",{className:"emoji-picker",children:[Object(j.jsx)("div",{className:"opener",onClick:function(){return d((function(e){return!e}))},children:o?Object(j.jsx)(u.b,{}):Object(j.jsx)(l.a,{})}),Object(j.jsx)("div",{className:o?"picker open":"picker",children:Object(j.jsx)("emoji-picker",{ref:r})})]})}));t.a=function(e){var t=e.placeholder,n=e.handler,r=e.showEmoji,u=e.initialValue,l=void 0===u?"":u,b=function(){var e=Object(i.a)(s.a.mark((function e(t){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),null===(c=v.current)||void 0===c||c.close(),O.trim()&&n(O.trim()),m("");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=Object(a.useState)(l),h=Object(c.a)(f,2),O=h[0],m=h[1],v=Object(a.useRef)();return Object(a.useEffect)((function(){m(l)}),[l]),Object(j.jsxs)("form",{className:"input__box",onSubmit:b,children:[r&&Object(j.jsx)(d,{setValue:m,ref:v}),Object(j.jsx)("input",{type:"text",placeholder:t,value:O,onChange:function(e){return m(e.target.value)},onFocus:function(){var e;return null===(e=v.current)||void 0===e?void 0:e.close()}}),Object(j.jsx)("button",{type:"submit","aria-label":"submit",children:Object(j.jsx)("img",{src:o.l,alt:"send"})})]})}},166:function(e,t,n){"use strict";var c=n(7),r=n(1),s=n(19),i=(n(170),n(2));t.a=function(e){var t=e.options,n=e.id,a=void 0===n?"":n,o=Object(r.useState)(!1),u=Object(c.a)(o,2),l=u[0],j=u[1];Object(r.useEffect)((function(){var e=function(e){e.target.id!=="options"+a&&e.target.id!=="options__icon"+a&&j(!1)};return document.body.addEventListener("click",e),function(){return document.body.removeEventListener("click",e)}}),[a]);return Object(i.jsxs)("div",{className:"options",id:"options"+a,onClick:function(){return j((function(e){return!e}))},children:[Object(i.jsx)("img",{src:s.j,alt:"options",className:"options__icon",id:"options__icon"+a}),Object(i.jsx)("ul",{className:l?"show":"",children:Object.entries(t).map((function(e,t){var n=Object(c.a)(e,2),r=n[0],s=n[1];return Object(i.jsx)("li",{onClick:function(){return function(e){j(!1),e()}(s)},children:r},t)}))})]})}},167:function(e,t,n){"use strict";var c=n(7),r=n(1),s=n(48),i=(n(171),n(2)),a=function(e){var t=e.show,n=e.toggleShow,c=e.text,r=e.onSuccess;return Object(i.jsx)(s.a,{show:t,onClose:n,children:Object(i.jsxs)("div",{className:"confirmation",children:[Object(i.jsx)("h2",{children:c}),Object(i.jsxs)("div",{className:"btn-group",children:[Object(i.jsx)("button",{onClick:n,children:"Cancel"}),Object(i.jsx)("button",{className:"danger",onClick:function(){n(),r()},children:"Yes, I'm sure"})]})]})})};t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Are Your sure ?",n=Object(r.useState)(!1),s=Object(c.a)(n,2),o=s[0],u=s[1],l=function(){return u(!o)},j=Object(i.jsx)(a,{show:o,onSuccess:e,text:t,toggleShow:l});return{toggleShow:l,Confirmation:j}}},168:function(e,t,n){"use strict";var c=["January","February","March","April","May","June","July","August","September","October","November","December"];t.a=function(e){if(!e)return"";var t=new Date(e);return t="".concat(t.getDate()," ").concat(c[t.getMonth()]," ").concat(t.getFullYear())}},169:function(e,t,n){},170:function(e,t,n){},171:function(e,t,n){},179:function(e,t,n){},180:function(e,t,n){},182:function(e,t,n){"use strict";var c=n(3),r=n.n(c),s=n(5),i=n(1),a=n(23),o=n(10),u=n(30),l=n(168),j=(n(179),n(2)),d=function(e){var t,n,c=e.message,r=e.index,s=e.messages,i=new Date,a=new Date(c.createdAt),o=s[r-1]&&new Date(null===(t=s[r-1])||void 0===t?void 0:t.createdAt),u=i.getDate()-a.getDate(),d=Object(l.a)(a),b=1===u?"YESTERDAY":0===u?"TODAY":d,f=!o||a.getDate()-o.getDate()>0,h=2===c.text.length&&!c.text.match(/\w/);return Object(j.jsxs)(j.Fragment,{children:[f&&Object(j.jsx)("h4",{children:b}),Object(j.jsx)("div",{className:c.send?"chat__sent":"chat__recieve",children:Object(j.jsxs)("p",{className:h?"emoji message":"message",children:[c.text,(null===(n=s[r+1])||void 0===n?void 0:n.send)!==c.send&&Object(j.jsx)("span",{className:"time",children:"".concat(a.getHours(),":").concat(a.getMinutes()>9?a.getMinutes():"0"+a.getMinutes())})]})})]})},b=n(165),f=n(19),h=(n(180),n(166)),O=n(167);t.a=function(){var e,t=Object(o.c)((function(e){return e})),n=t.user.id,c=t.message,l=c.messages,m=c.conversationID,v=c.to,x=c.chats,g=t.socket.socket,p=t.users.usersOnline,w=(null===x||void 0===x||null===(e=x.find((function(e){return e._id===m})))||void 0===e?void 0:e.userDetails)||{},_=Object(a.a)(),k=Object(o.b)(),D=Object(i.useRef)();Object(i.useEffect)((function(){D.current&&(D.current.scrollTop=D.current.scrollHeight)}),[l]);var N=function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:g.emit("send message",t,v,m,n),k(Object(u.a)({text:t,send:!0})),k(Object(u.g)({id:v,lastMessage:t,customFetch:_}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=Object(O.a)((function(){g.emit("delete chat",m,v),k(Object(u.e)(m))}),"Are you sure, you want to delete this chat"),y=S.Confirmation,C=S.toggleShow,E=Object(O.a)((function(){g.emit("clear chat",m,v),k(Object(u.b)({conversationID:m}))}),"Are you sure, you want to clear this chat"),A=E.Confirmation,M={"Delete Chat":C,"Clear Chat":E.toggleShow};return Object(j.jsx)("section",{className:"chat__page__messenger",children:m?Object(j.jsxs)(j.Fragment,{children:[y,A,Object(j.jsxs)("header",{children:[Object(j.jsx)("img",{src:w.profileImage||f.f,alt:"chatIcon",className:"chat__page__dp"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:w.name}),p.some((function(e){return e.id===w._id}))&&Object(j.jsx)("p",{children:"Online"})]}),Object(j.jsx)(h.a,{options:M})]}),Object(j.jsx)("main",{ref:D,children:Object(j.jsx)("div",{className:"messenger",children:l.map((function(e,t,n){return Object(j.jsx)(d,{message:e,index:t,messages:n},t)}))})}),Object(j.jsx)("footer",{children:Object(j.jsx)(b.a,{placeholder:"Type a message...",handler:N,showEmoji:!0})})]}):Object(j.jsx)("h4",{children:"Select a conversation"})})}},204:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(182),s=n(6),i=n(2);t.default=function(){var e=Object(s.o)();return Object(c.useEffect)((function(){window.innerWidth>800&&e("/chat")})),Object(i.jsx)("div",{style:{height:"calc(100vh - 9rem)",borderRadius:"10px",overflow:"hidden"},children:Object(i.jsx)(r.a,{})})}}}]);
//# sourceMappingURL=8.50c2e56c.chunk.js.map