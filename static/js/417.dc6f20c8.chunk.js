"use strict";(self.webpackChunkauto_shop=self.webpackChunkauto_shop||[]).push([[417],{8417:function(e,i,n){n.r(i),n.d(i,{default:function(){return Y}});var s=n(4942),a=n(1413),t=n(885),l="Application_section__9aT0O",c="Application_wrapper__Utedk",r="Application_wrapper__settings__nam21",_="Application_setting__SGi4c",d="Application_setting__select__kAvo9",p="Application_setting__select_item__1I01y",u="Application_select__popUpList__NeWCr",o="Application_active__Xeugc",h="Application_down__UyYKI",v="Application_setting__view__V-tu7",x="Application_setting__view__container__HQn8n",m="Application_active_credit__DgoFG",j="Application_active_hr__szdde",f="Application_active_sum__ybq2D",g="Application_setting__price__f+fi0",N="Application_setting__price_slider__nCbW1",A="Application_setting__price_title__DYrVy",b="Application_setting__price_rub__z5GAB",Z="Application_fillForm__UnNdk",y="Application_hr__8DCnW",C="Application_hr__mobile__xgdbB",k="Application_br__3z0U2",w=n(2791),D=n(4135),I=n(1694),U=n.n(I),z=n(5836),E=n(5684),S=n(6633),G=n(2982),V=n(8693),W=n(6030),B=n(216),F=n(8967),L=n(184),O=[{name:"\u041c\u0430\u0440\u043a\u0430",list:[]},{name:"\u041c\u043e\u0434\u0435\u043b\u044c",list:["1","2","3","4"]},{name:"\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0430\u0446\u0438\u044f",list:["\u0411\u0430\u0437\u043e\u0432\u0430\u044f","\u0421\u0440\u0435\u0434\u043d\u044f\u044f","\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f"]}],P=(0,w.memo)((function(){var e=(0,D.C)((function(e){return e.reducer})),i=e.listItems,n=(0,w.useState)(""),a=(0,t.Z)(n,2),l=a[0],c=a[1],r=(0,w.useState)(O),_=(0,t.Z)(r,2),v=_[0],x=_[1],m=(0,w.useRef)([]),j=(0,W.I0)();(0,w.useEffect)((function(){x([{name:"\u041c\u0430\u0440\u043a\u0430",list:i}].concat((0,G.Z)(O.slice(1))))}),[i]);var f={visible:{transition:{when:"beforeChildren",staggerChildren:.1}},hidden:{}},g={visible:{opacity:1},hidden:{opacity:0}};return(0,L.jsx)("div",{className:d,children:v.map((function(e,i){return(0,L.jsxs)(V.E.div,{layout:!0,variants:f,initial:"hidden",animate:l===e.name?"visible":"hidden",onClick:function(n){return function(e,i,n){var s;c(l===i?"":i),null!==(s=m.current[n])&&void 0!==s&&s.contains(e.target)&&c("")}(n,e.name,i)},className:U()(p,(0,s.Z)({},h,l===e.name)),children:[(0,L.jsx)("p",{children:e.name}),(0,L.jsx)(B.Rk,{}),(0,L.jsx)("ul",{ref:function(e){return m.current[i]=e},className:U()(u,(0,s.Z)({},o,l===e.name)),children:e.list.map((function(e,n){var s="string"===typeof e?e:e.name_car;return(0,L.jsx)(V.E.div,{variants:g,children:(0,L.jsx)("li",{onClick:function(){!function(e,i){v.forEach((function(n,s){i===s&&(n.name=e)}))}(s,i),"string"!==typeof e&&j((0,F.Xh)(e))},children:s})},n)}))})]},i)}))})})),R=n(4604),X={value1:0,value2:6,value3:0};function Y(){var e=(0,D.C)((function(e){return e.reducer})).brandList,i=(0,w.useState)(X),n=(0,t.Z)(i,2),d=n[0],p=n[1],u=(0,W.I0)(),o=(0,R.N)((function(e){p((0,a.Z)((0,a.Z)({},d),{},{value1:e.target.value})),p((function(e){return(0,a.Z)((0,a.Z)({},e),{},{value3:e.value1/10})}))}),200),h=(0,R.N)((function(e){p((0,a.Z)((0,a.Z)({},d),{},{value2:e.target.value}))}),200);return(0,L.jsx)("section",{className:l,children:(0,L.jsxs)("div",{className:c,children:[(0,L.jsx)("h2",{children:"\u0417\u0430\u044f\u0432\u043a\u0430 \u043d\u0430 \u0430\u0432\u0442\u043e\u043a\u0440\u0435\u0434\u0438\u0442"}),(0,L.jsxs)("div",{className:r,children:[(0,L.jsxs)("div",{className:_,children:[(0,L.jsx)(P,{}),(0,L.jsxs)("div",{className:v,children:[e.name_car?(0,L.jsx)("img",{src:e.url_img,alt:"\u0444\u043e\u0442\u043e \u043c\u0430\u0448\u0438\u043d\u044b",width:"424"}):(0,L.jsx)("img",{src:E,alt:"car"}),(0,L.jsxs)("div",{className:x,children:[(0,L.jsxs)("div",{className:U()((0,s.Z)({},m,d.value3)),children:[(0,L.jsxs)("p",{children:[d.value3,d.value1>0&&" \u0440\u0443\u0431."]}),(0,L.jsxs)("p",{children:[d.value1-d.value3," ",d.value1>0&&" \u0440\u0443\u0431."]})]}),(0,L.jsx)("hr",{className:U()((0,s.Z)({},j,d.value3))}),(0,L.jsxs)("div",{className:U()((0,s.Z)({},f,d.value3)),children:[(0,L.jsx)("p",{children:"\u041f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u0437\u043d\u043e\u0441"}),(0,L.jsx)("p",{children:"\u041e\u0441\u0442\u0430\u0442\u043e\u043a \u043f\u043e \u043a\u0440\u0435\u0434\u0438\u0442\u0443"})]})]})]}),(0,L.jsx)("hr",{className:C}),(0,L.jsxs)("div",{className:g,children:[(0,L.jsxs)("div",{className:A,children:[(0,L.jsx)("p",{children:"\u0421\u0443\u043c\u043c\u0430 \u043a\u0440\u0435\u0434\u0438\u0442\u0430, \u0440\u0443\u0431"}),(0,L.jsxs)("strong",{children:[d.value1,d.value1<1e6&&d.value1>=0?"\u0442":"\u043c"]})]}),(0,L.jsxs)("div",{className:N,children:[(0,L.jsx)(S.ZP,{max:3e6,onChange:function(e){o(e)},"aria-label":"Default"}),(0,L.jsx)("div",{children:[0,"300\u0442","600\u0442","1\u043c","1,3\u043c","1,6\u043c","1,9\u043c","2,2\u043c","2,6\u043c","3\u043c"].map((function(e){return(0,L.jsx)("p",{children:e},e)}))})]}),(0,L.jsxs)("div",{className:A,children:[(0,L.jsx)("p",{children:"\u0421\u0440\u043e\u043a \u043a\u0440\u0435\u0434\u0438\u0442\u0430, \u043c\u0435\u0441."}),(0,L.jsxs)("strong",{children:[d.value2," \u043c\u0435\u0441."]})]}),(0,L.jsxs)("div",{className:N,children:[(0,L.jsx)(S.ZP,{onChange:h,max:84,"aria-label":"Default",defaultValue:6}),(0,L.jsx)("div",{children:[6,12,24,36,48,60,72,84].map((function(e){return(0,L.jsx)("p",{children:e},e)}))})]}),(0,L.jsxs)("div",{className:b,children:[(0,L.jsx)("p",{children:"\u041f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u0437\u043d\u043e\u0441, \u0440\u0443\u0431"}),(0,L.jsx)("input",{type:"text",placeholder:"0",readOnly:!0,value:d.value3})]})]})]}),(0,L.jsx)("hr",{className:y}),(0,L.jsxs)("div",{className:Z,children:[(0,L.jsxs)("h2",{children:["\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0432\u044b\u0433\u043e\u0434\u0443 ",(0,L.jsx)("br",{className:k})," ",(0,L.jsx)("span",{children:"300 000 \u20bd"})]}),(0,L.jsxs)("div",{children:[(0,L.jsx)("input",{type:"text",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f"}),(0,L.jsx)("input",{type:"text",placeholder:"\u0412\u0430\u0448 \u0442\u0435\u043b\u0435\u0444\u043e\u043d"}),(0,L.jsx)(z.z,{title:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435",click:function(){return e.name_car&&u((0,F.vt)("a discount"))}})]}),(0,L.jsx)("p",{children:"\u041d\u0430\u0436\u0438\u043c\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0443 \u201c\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u043a\u0438\u0434\u043a\u0443\u201d \u0412\u044b \u0434\u0430\u0435\u0442\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0441\u0432\u043e\u0438\u0445 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"})]})]})]})})}},5684:function(e,i,n){e.exports=n.p+"static/media/car-skeleton.d61155ee9eb25f6b70c2.png"}}]);
//# sourceMappingURL=417.dc6f20c8.chunk.js.map