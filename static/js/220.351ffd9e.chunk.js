"use strict";(self.webpackChunkauto_shop=self.webpackChunkauto_shop||[]).push([[220],{2926:function(e,t,n){n.d(t,{I:function(){return o}});var a="Input_input__k5Ctk",l=n(184);function o(e){var t=e.placeholder,n=e.value,o=e.onChange,c=e.refInput,r=e.type;return(0,l.jsx)(l.Fragment,{children:"tel"===r?(0,l.jsx)("input",{className:a,ref:c,type:r,placeholder:"8 (____) ____ - __ - __",value:n,onChange:function(e){return o&&o(e.target.value)}}):(0,l.jsx)("input",{className:a,ref:c,type:r,placeholder:t,value:n,onChange:function(e){return o&&o(e.target.value)}})})}},9822:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(885),l=n(2791),o=n(4722),c=n(6030),r={modal__content:"PopUpBackCall_modal__content__aTsNE",modal__content_img:"PopUpBackCall_modal__content_img__yc6hJ",modal__content_fon:"PopUpBackCall_modal__content_fon__Kqqmk",modal__content_inf:"PopUpBackCall_modal__content_inf__f1Uo-",modal__content_title:"PopUpBackCall_modal__content_title__IeNsQ",modal__close:"PopUpBackCall_modal__close__Z6j13",modal__sent:"PopUpBackCall_modal__sent__i8INf"},s=n(8867),i=n(5836),_=n(2771),u=n(2368),d=n(2926),f=n(184);function p(e){var t=e.setSent,n=e.title,a=e.button,o=(0,u.L)(),c=o.valuePhone,s=o.onChange,_=(0,l.useRef)(null);function p(e){var n;(e.preventDefault(),c)?t(!0):null===(n=_.current)||void 0===n||n.focus()}return(0,f.jsxs)("form",{onSubmit:p,className:r.modal__content_inf,children:[(0,f.jsxs)("div",{className:r.modal__content_title,children:[(0,f.jsx)("h2",{children:n[0]}),(0,f.jsx)("p",{children:n[1]})]}),(0,f.jsx)("input",{type:"text",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f"}),(0,f.jsx)(d.I,{placeholder:"\u0412\u0430\u0448 \u0442\u0435\u043b\u0435\u0444\u043e\u043d",type:"tel",refInput:_,value:c,onChange:s}),(0,f.jsx)(i.z,{click:p,title:a}),(0,f.jsxs)("p",{children:["\u041d\u0430\u0436\u0438\u043c\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0443 \u201c\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435\u201d \u0412\u044b \u0434\u0430\u0435\u0442\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0441\u0432\u043e\u0438\u0445",(0,f.jsx)("span",{children:" \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"})]})]})}var h=n(8879),m=n(7087);function j(e){var t=e.popUpBlock,n=e.title,u=e.button,d=(0,_.C)((function(e){return e.reducer})).brandList,j=l.useState(!1),x=(0,a.Z)(j,2),v=x[0],g=x[1],k=l.useState(!1),C=(0,a.Z)(k,2),b=C[0],N=C[1],y=(0,c.I0)();function I(){g(!1),y((0,s.tX)("")),N(!1)}l.useEffect((function(){t&&g(!0),"offer"!==t&&"a discount"!==t||N(!0)}),[t]);var P=t&&function(e){switch(e){case"back call":return h.Fg;case"a discount":return d.url_img;case"offer":return h.hY;case"credit":return h.Rp;default:return}}(t);return(0,f.jsx)("div",{className:r.container,children:(0,f.jsx)(o.Z,{open:v,onClose:I,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:b?(0,f.jsxs)("div",{className:r.modal__sent,children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("img",{src:h.K5,alt:"tiguan",width:"235"}),(0,f.jsx)("img",{src:h._k,alt:"rio",width:"366"})]}),(0,f.jsx)("h2",{children:"\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u043e\u0431\u0440\u0430\u0449\u0435\u043d\u0438\u0435!"}),(0,f.jsx)("p",{children:"\u041d\u0430\u0448 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0441\u0432\u044f\u0436\u0435\u0442\u0441\u044f \u0441 \u0412\u0430\u043c\u0438 \u0432 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f"}),(0,f.jsx)(i.z,{title:"ok",click:I})]}):(0,f.jsxs)("div",{className:r.modal__content,children:[(0,f.jsx)(p,{setSent:N,title:n,button:u}),(0,f.jsx)("div",{className:r.modal__content_img,children:(0,f.jsx)(m.LazyLoadImage,{effect:"blur",src:P,alt:"\u0444\u043e\u0442\u043e \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430",width:"100%",height:"100%"})}),(0,f.jsx)("div",{className:r.modal__content_fon,children:(0,f.jsx)(m.LazyLoadImage,{effect:"blur",src:h.FB,alt:"\u0437\u0430\u0434\u043d\u0438\u0439 \u0444\u043e\u043d",width:"100%",height:"100%"})}),(0,f.jsxs)("div",{onClick:I,className:r.modal__close,children:[(0,f.jsx)("p",{}),(0,f.jsx)("p",{})]})]})})})}},2368:function(e,t,n){n.d(t,{L:function(){return o}});var a=n(885),l=n(2791);function o(){var e=l.useState(""),t=(0,a.Z)(e,2),n=t[0],o=t[1];return{valuePhone:n,setValuePhone:o,onChange:function(e){var t=e.replace(/\D/g,"");o(t)}}}},627:function(e,t){t.Z=function(e){return"string"===typeof e}}}]);
//# sourceMappingURL=220.351ffd9e.chunk.js.map