"use strict";(self.webpackChunkauto_shop=self.webpackChunkauto_shop||[]).push([[558],{5558:function(e,n,t){t.r(n),t.d(n,{default:function(){return $}});var a=t(885),i="Application_section__9aT0O",s="Application_wrapper__Utedk",r="Application_wrapper__settings__nam21",l="Application_setting__SGi4c",c="Application_setting__select__kAvo9",u="Application_setting__select_item__1I01y",o="Application_select__popUpList__NeWCr",_="Application_active__Xeugc",d="Application_down__UyYKI",v="Application_hr__8DCnW",p="Application_hr__mobile__xgdbB",h=t(2791),f=t(2771),m=t(4942),x=t(2982),j=t(8693),g=t(6030),y=t(1694),N=t.n(y),C=t(4891),Z=t(8867),b=t(184),A=[{name:"\u041c\u0430\u0440\u043a\u0430",list:[]},{name:"\u041c\u043e\u0434\u0435\u043b\u044c",list:["1","2","3","4"]},{name:"\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0430\u0446\u0438\u044f",list:["\u0411\u0430\u0437\u043e\u0432\u0430\u044f","\u0421\u0440\u0435\u0434\u043d\u044f\u044f","\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f"]}],k={visible:{transition:{when:"beforeChildren",staggerChildren:.1}},hidden:{}},w={visible:{opacity:1},hidden:{opacity:0}},L=(0,h.memo)((function(){var e=(0,f.C)((function(e){return e.reducer})),n=e.listItems,t=(0,h.useState)(""),i=(0,a.Z)(t,2),s=i[0],r=i[1],l=(0,h.useState)(A),v=(0,a.Z)(l,2),p=v[0],y=v[1],L=(0,h.useRef)([]),S=(0,h.useRef)(null),I=(0,g.I0)();(0,h.useEffect)((function(){y([{name:"\u041c\u0430\u0440\u043a\u0430",list:n}].concat((0,x.Z)(A.slice(1))))}),[n]),(0,h.useEffect)((function(){return document.addEventListener("click",V,!0),function(){document.removeEventListener("click",V,!0)}}));var V=function(e){S.current&&!S.current.contains(e.target)&&r("")};return(0,b.jsx)("div",{className:c,ref:S,children:p.map((function(e,n){return(0,b.jsxs)(j.E.div,{layout:!0,variants:k,initial:"hidden",animate:s===e.name?"visible":"hidden",onClick:function(t){return function(e,n,t){var a;L.current[0].scrollTop=0,r(s===n?"":n),null!==(a=L.current[t])&&void 0!==a&&a.contains(e.target)&&r("")}(t,e.name,n)},className:N()(u,(0,m.Z)({},d,s===e.name)),children:[(0,b.jsx)("p",{children:e.name}),(0,b.jsx)(C.Rk,{}),(0,b.jsx)("ul",{ref:function(e){return L.current[n]=e},className:N()(o,(0,m.Z)({},_,s===e.name)),children:e.list.map((function(e,t){var a="string"===typeof e?e:e.name_car;return(0,b.jsx)(j.E.div,{variants:w,children:(0,b.jsx)("li",{onClick:function(){!function(e,n){p.forEach((function(t,a){n===a&&(t.name=e)}))}(a,n),"string"!==typeof e&&I((0,Z.Xh)(e))},children:a})},t)}))})]},n)}))})})),S=t(1413),I=t(2368),V=t(5836),E=t(2926),D="styles_setting__price__xDrJr",T="styles_setting__price_slider__4K365",P="styles_setting__price_title__Hj2GS",R="styles_setting__price_rub__i4OiH",U="styles_fillForm__0KtEl",B="styles_setting__view__YE3jM",F="styles_setting__view__container__n9TpT",H="styles_active_credit__Tip0Q",K="styles_active_hr__7SfH9",O="styles_active_sum__LUwQC",X="styles_br__dDj4B";function G(e){var n=e.setValue,t=e.value,a=e.brandList,i=(0,h.useRef)(null),s=(0,I.L)(),r=s.valuePhone,l=s.setValuePhone,c=s.onChange,u=(0,g.I0)();function o(e){var s;(e.preventDefault(),r&&a.name_car)?(u((0,Z.tX)("a discount")),n((0,S.Z)((0,S.Z)({},t),{},{name:""})),l("")):null===(s=i.current)||void 0===s||s.focus()}return(0,b.jsxs)("div",{className:U,children:[(0,b.jsxs)("h2",{children:["\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0432\u044b\u0433\u043e\u0434\u0443 ",(0,b.jsx)("br",{className:X})," ",(0,b.jsx)("span",{children:"300 000 \u20bd"})]}),(0,b.jsxs)("form",{onSubmit:o,children:[(0,b.jsx)("input",{type:"text",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",value:t.name,onChange:function(e){return n((0,S.Z)((0,S.Z)({},t),{},{name:e.target.value}))}}),(0,b.jsx)(E.I,{placeholder:"\u0412\u0430\u0448 \u0442\u0435\u043b\u0435\u0444\u043e\u043d",type:"tel",refInput:i,value:r,onChange:c}),(0,b.jsx)(V.z,{title:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435",click:function(e){return o(e)}})]}),(0,b.jsx)("p",{children:"\u041d\u0430\u0436\u0438\u043c\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0443 \u201c\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u043a\u0438\u0434\u043a\u0443\u201d \u0412\u044b \u0434\u0430\u0435\u0442\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0441\u0432\u043e\u0438\u0445 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"})]})}var Q=t(6633),W=t(4426),Y=(0,h.memo)((function(e){var n=e.setValue,t=e.value,a=e.typeSlider,i=(0,W.N)((function(e){n((0,S.Z)((0,S.Z)({},t),{},{value1:e.target.value})),n((function(e){return(0,S.Z)((0,S.Z)({},e),{},{value3:e.value1/10})}))}),200),s=(0,W.N)((function(e){n((0,S.Z)((0,S.Z)({},t),{},{value2:e.target.value}))}),200);return(0,b.jsx)(b.Fragment,{children:"price"===a?(0,b.jsxs)("div",{className:T,children:[(0,b.jsx)(Q.ZP,{sx:{color:"#CA0100"},max:3e6,onChange:function(e){i(e)},"aria-label":"Default"}),(0,b.jsx)("div",{children:[0,"300\u0442","600\u0442","1\u043c","1,3\u043c","1,6\u043c","1,9\u043c","2,2\u043c","2,6\u043c","3\u043c"].map((function(e){return(0,b.jsx)("p",{children:e},e)}))})]}):(0,b.jsxs)("div",{className:T,children:[(0,b.jsx)(Q.ZP,{sx:{color:"#CA0100"},onChange:s,min:6,max:84,"aria-label":"Default",defaultValue:12}),(0,b.jsx)("div",{children:[6,12,24,36,48,60,72,84].map((function(e){return(0,b.jsx)("p",{children:e},e)}))})]})})}));function z(e){var n=e.value,t=e.setValue;return(0,b.jsxs)("div",{className:D,children:[(0,b.jsxs)("div",{className:P,children:[(0,b.jsx)("p",{children:"\u0421\u0443\u043c\u043c\u0430 \u043a\u0440\u0435\u0434\u0438\u0442\u0430, \u0440\u0443\u0431"}),(0,b.jsxs)("strong",{children:[n.value1,n.value1<1e6&&n.value1>=0?"\u0442":"\u043c"]})]}),(0,b.jsx)(Y,{setValue:t,value:n,typeSlider:"price"}),(0,b.jsxs)("div",{className:P,children:[(0,b.jsx)("p",{children:"\u0421\u0440\u043e\u043a \u043a\u0440\u0435\u0434\u0438\u0442\u0430, \u043c\u0435\u0441."}),(0,b.jsxs)("strong",{children:[n.value2," \u043c\u0435\u0441."]})]}),(0,b.jsx)(Y,{setValue:t,value:n,typeSlider:"month"}),(0,b.jsxs)("div",{className:R,children:[(0,b.jsx)("p",{children:"\u041f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u0437\u043d\u043e\u0441, \u0440\u0443\u0431"}),(0,b.jsx)("input",{type:"text",placeholder:"0",readOnly:!0,value:n.value3})]})]})}var J=t(8879);function M(e){var n=e.brandList,t=e.value;return(0,b.jsxs)("div",{className:B,children:[null!==n&&void 0!==n&&n.url_img?(0,b.jsx)("img",{src:n.url_img,alt:"\u0444\u043e\u0442\u043e \u043c\u0430\u0448\u0438\u043d\u044b",width:"424"}):(0,b.jsx)("img",{src:J.ZB,alt:"car"}),(0,b.jsxs)("div",{className:F,children:[(0,b.jsxs)("div",{className:N()((0,m.Z)({},H,t.value3)),children:[(0,b.jsxs)("p",{children:[t.value3,t.value1>0&&" \u0440\u0443\u0431."]}),(0,b.jsxs)("p",{children:[t.value1-t.value3," ",t.value1>0&&" \u0440\u0443\u0431."]})]}),(0,b.jsx)("hr",{className:N()((0,m.Z)({},K,t.value3))}),(0,b.jsxs)("div",{className:N()((0,m.Z)({},O,t.value3)),children:[(0,b.jsx)("p",{children:"\u041f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u0437\u043d\u043e\u0441"}),(0,b.jsx)("p",{children:"\u041e\u0441\u0442\u0430\u0442\u043e\u043a \u043f\u043e \u043a\u0440\u0435\u0434\u0438\u0442\u0443"})]})]})]})}var q={value1:0,value2:12,value3:0,name:""};function $(e){var n=e.refApplication,t=(0,f.C)((function(e){return e.reducer})).brandList,c=(0,h.useState)(q),u=(0,a.Z)(c,2),o=u[0],_=u[1];return(0,b.jsx)("section",{ref:n,className:i,children:(0,b.jsxs)("div",{className:s,children:[(0,b.jsx)("h2",{children:"\u0417\u0430\u044f\u0432\u043a\u0430 \u043d\u0430 \u0430\u0432\u0442\u043e\u043a\u0440\u0435\u0434\u0438\u0442"}),(0,b.jsxs)("div",{className:r,children:[(0,b.jsxs)("div",{className:l,children:[(0,b.jsx)(L,{}),(0,b.jsx)(M,{brandList:t,value:o}),(0,b.jsx)("hr",{className:p}),(0,b.jsx)(z,{value:o,setValue:_})]}),(0,b.jsx)("hr",{className:v}),(0,b.jsx)(G,{setValue:_,value:o,brandList:t})]})]})})}},2926:function(e,n,t){t.d(n,{I:function(){return s}});var a="Input_input__k5Ctk",i=t(184);function s(e){var n=e.placeholder,t=e.value,s=e.onChange,r=e.refInput,l=e.type;return(0,i.jsx)(i.Fragment,{children:"tel"===l?(0,i.jsx)("input",{className:a,ref:r,type:l,placeholder:"8 (____) ____ - __ - __",value:t,onChange:function(e){return s&&s(e.target.value)}}):(0,i.jsx)("input",{className:a,ref:r,type:l,placeholder:n,value:t,onChange:function(e){return s&&s(e.target.value)}})})}},4426:function(e,n,t){t.d(n,{N:function(){return a}});var a=function(e,n){var t;return function(){for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];clearTimeout(t),t=setTimeout((function(){return e.apply(void 0,i)}),n)}}},2368:function(e,n,t){t.d(n,{L:function(){return s}});var a=t(885),i=t(2791);function s(){var e=i.useState(""),n=(0,a.Z)(e,2),t=n[0],s=n[1];return{valuePhone:t,setValuePhone:s,onChange:function(e){var n=e.replace(/\D/g,"");s(n)}}}}}]);
//# sourceMappingURL=558.2adc51ff.chunk.js.map