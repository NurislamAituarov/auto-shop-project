"use strict";(self.webpackChunkauto_shop=self.webpackChunkauto_shop||[]).push([[417],{4604:function(e,n,i){i.d(n,{N:function(){return a}});var a=function(e,n){var i;return function(){for(var a=arguments.length,t=new Array(a),s=0;s<a;s++)t[s]=arguments[s];clearTimeout(i),i=setTimeout((function(){return e.apply(void 0,t)}),n)}}},2569:function(e,n,i){i.d(n,{L:function(){return s}});var a=i(885),t=i(2791);function s(){var e=t.useState(""),n=(0,a.Z)(e,2),i=n[0],s=n[1];return{valuePhone:i,setValuePhone:s,onChange:function(e){var n=e.replace(/\D/g,"");s(n)}}}},8417:function(e,n,i){i.r(n),i.d(n,{default:function(){return Y}});var a=i(4942),t=i(1413),s=i(885),l="Application_section__9aT0O",c="Application_wrapper__Utedk",r="Application_wrapper__settings__nam21",u="Application_setting__SGi4c",o="Application_setting__select__kAvo9",_="Application_setting__select_item__1I01y",p="Application_select__popUpList__NeWCr",d="Application_active__Xeugc",v="Application_down__UyYKI",h="Application_setting__view__V-tu7",m="Application_setting__view__container__HQn8n",x="Application_active_credit__DgoFG",f="Application_active_hr__szdde",j="Application_active_sum__ybq2D",g="Application_setting__price__f+fi0",A="Application_setting__price_slider__nCbW1",N="Application_setting__price_title__DYrVy",Z="Application_setting__price_rub__z5GAB",b="Application_fillForm__UnNdk",C="Application_hr__8DCnW",y="Application_hr__mobile__xgdbB",k="Application_br__3z0U2",w=i(2791),D=i(4135),P=i(1694),S=i.n(P),I=i(5836),U=i(5684),V=i(6633),z=i(2982),E=i(8693),L=i(6030),G=i(216),R=i(8967),T=i(184),W=[{name:"\u041c\u0430\u0440\u043a\u0430",list:[]},{name:"\u041c\u043e\u0434\u0435\u043b\u044c",list:["1","2","3","4"]},{name:"\u041a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0430\u0446\u0438\u044f",list:["\u0411\u0430\u0437\u043e\u0432\u0430\u044f","\u0421\u0440\u0435\u0434\u043d\u044f\u044f","\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f"]}],X=(0,w.memo)((function(){var e=(0,D.C)((function(e){return e.reducer})),n=e.listItems,i=(0,w.useState)(""),t=(0,s.Z)(i,2),l=t[0],c=t[1],r=(0,w.useState)(W),u=(0,s.Z)(r,2),h=u[0],m=u[1],x=(0,w.useRef)([]),f=(0,L.I0)();(0,w.useEffect)((function(){m([{name:"\u041c\u0430\u0440\u043a\u0430",list:n}].concat((0,z.Z)(W.slice(1))))}),[n]);var j={visible:{transition:{when:"beforeChildren",staggerChildren:.1}},hidden:{}},g={visible:{opacity:1},hidden:{opacity:0}};return(0,T.jsx)("div",{className:o,children:h.map((function(e,n){return(0,T.jsxs)(E.E.div,{layout:!0,variants:j,initial:"hidden",animate:l===e.name?"visible":"hidden",onClick:function(i){return function(e,n,i){var a;c(l===n?"":n),null!==(a=x.current[i])&&void 0!==a&&a.contains(e.target)&&c("")}(i,e.name,n)},className:S()(_,(0,a.Z)({},v,l===e.name)),children:[(0,T.jsx)("p",{children:e.name}),(0,T.jsx)(G.Rk,{}),(0,T.jsx)("ul",{ref:function(e){return x.current[n]=e},className:S()(p,(0,a.Z)({},d,l===e.name)),children:e.list.map((function(e,i){var a="string"===typeof e?e:e.name_car;return(0,T.jsx)(E.E.div,{variants:g,children:(0,T.jsx)("li",{onClick:function(){!function(e,n){h.forEach((function(i,a){n===a&&(i.name=e)}))}(a,n),"string"!==typeof e&&f((0,R.Xh)(e))},children:a})},i)}))})]},n)}))})})),B=i(4604),F=i(2569),O={value1:0,value2:12,value3:0,name:""};function Y(){var e=(0,D.C)((function(e){return e.reducer})).brandList,n=(0,w.useState)(O),i=(0,s.Z)(n,2),o=i[0],_=i[1],p=(0,w.useRef)(null),d=(0,F.L)(),v=d.valuePhone,P=d.setValuePhone,z=d.onChange,E=(0,L.I0)();function G(n){var i;(n.preventDefault(),v&&e.name_car)?(E((0,R.tX)("a discount")),_((0,t.Z)((0,t.Z)({},o),{},{name:""})),P("")):null===(i=p.current)||void 0===i||i.focus()}var W=(0,B.N)((function(e){_((0,t.Z)((0,t.Z)({},o),{},{value1:e.target.value})),_((function(e){return(0,t.Z)((0,t.Z)({},e),{},{value3:e.value1/10})}))}),200),Y=(0,B.N)((function(e){_((0,t.Z)((0,t.Z)({},o),{},{value2:e.target.value}))}),200);return(0,T.jsx)("section",{id:"Application",className:l,children:(0,T.jsxs)("div",{className:c,children:[(0,T.jsx)("h2",{children:"\u0417\u0430\u044f\u0432\u043a\u0430 \u043d\u0430 \u0430\u0432\u0442\u043e\u043a\u0440\u0435\u0434\u0438\u0442"}),(0,T.jsxs)("div",{className:r,children:[(0,T.jsxs)("div",{className:u,children:[(0,T.jsx)(X,{}),(0,T.jsxs)("div",{className:h,children:[e.name_car?(0,T.jsx)("img",{src:e.url_img,alt:"\u0444\u043e\u0442\u043e \u043c\u0430\u0448\u0438\u043d\u044b",width:"424"}):(0,T.jsx)("img",{src:U,alt:"car"}),(0,T.jsxs)("div",{className:m,children:[(0,T.jsxs)("div",{className:S()((0,a.Z)({},x,o.value3)),children:[(0,T.jsxs)("p",{children:[o.value3,o.value1>0&&" \u0440\u0443\u0431."]}),(0,T.jsxs)("p",{children:[o.value1-o.value3," ",o.value1>0&&" \u0440\u0443\u0431."]})]}),(0,T.jsx)("hr",{className:S()((0,a.Z)({},f,o.value3))}),(0,T.jsxs)("div",{className:S()((0,a.Z)({},j,o.value3)),children:[(0,T.jsx)("p",{children:"\u041f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u0437\u043d\u043e\u0441"}),(0,T.jsx)("p",{children:"\u041e\u0441\u0442\u0430\u0442\u043e\u043a \u043f\u043e \u043a\u0440\u0435\u0434\u0438\u0442\u0443"})]})]})]}),(0,T.jsx)("hr",{className:y}),(0,T.jsxs)("div",{className:g,children:[(0,T.jsxs)("div",{className:N,children:[(0,T.jsx)("p",{children:"\u0421\u0443\u043c\u043c\u0430 \u043a\u0440\u0435\u0434\u0438\u0442\u0430, \u0440\u0443\u0431"}),(0,T.jsxs)("strong",{children:[o.value1,o.value1<1e6&&o.value1>=0?"\u0442":"\u043c"]})]}),(0,T.jsxs)("div",{className:A,children:[(0,T.jsx)(V.ZP,{sx:{color:"#CA0100"},max:3e6,onChange:function(e){W(e)},"aria-label":"Default"}),(0,T.jsx)("div",{children:[0,"300\u0442","600\u0442","1\u043c","1,3\u043c","1,6\u043c","1,9\u043c","2,2\u043c","2,6\u043c","3\u043c"].map((function(e){return(0,T.jsx)("p",{children:e},e)}))})]}),(0,T.jsxs)("div",{className:N,children:[(0,T.jsx)("p",{children:"\u0421\u0440\u043e\u043a \u043a\u0440\u0435\u0434\u0438\u0442\u0430, \u043c\u0435\u0441."}),(0,T.jsxs)("strong",{children:[o.value2," \u043c\u0435\u0441."]})]}),(0,T.jsxs)("div",{className:A,children:[(0,T.jsx)(V.ZP,{sx:{color:"#CA0100"},onChange:Y,min:6,max:84,"aria-label":"Default",defaultValue:12}),(0,T.jsx)("div",{children:[6,12,24,36,48,60,72,84].map((function(e){return(0,T.jsx)("p",{children:e},e)}))})]}),(0,T.jsxs)("div",{className:Z,children:[(0,T.jsx)("p",{children:"\u041f\u0435\u0440\u0432\u043e\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u0437\u043d\u043e\u0441, \u0440\u0443\u0431"}),(0,T.jsx)("input",{type:"text",placeholder:"0",readOnly:!0,value:o.value3})]})]})]}),(0,T.jsx)("hr",{className:C}),(0,T.jsxs)("div",{className:b,children:[(0,T.jsxs)("h2",{children:["\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0432\u044b\u0433\u043e\u0434\u0443 ",(0,T.jsx)("br",{className:k})," ",(0,T.jsx)("span",{children:"300 000 \u20bd"})]}),(0,T.jsxs)("form",{onSubmit:G,children:[(0,T.jsx)("input",{type:"text",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",value:o.name,onChange:function(e){return _((0,t.Z)((0,t.Z)({},o),{},{name:e.target.value}))}}),(0,T.jsx)("input",{ref:p,type:"tel",placeholder:"\u0412\u0430\u0448 \u0442\u0435\u043b\u0435\u0444\u043e\u043d",value:v,onChange:function(e){return z(e.target.value)}}),(0,T.jsx)(I.z,{title:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435",click:function(e){return G(e)}})]}),(0,T.jsx)("p",{children:"\u041d\u0430\u0436\u0438\u043c\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0443 \u201c\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u043a\u0438\u0434\u043a\u0443\u201d \u0412\u044b \u0434\u0430\u0435\u0442\u0435 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435 \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u0441\u0432\u043e\u0438\u0445 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"})]})]})]})})}},5684:function(e,n,i){e.exports=i.p+"static/media/car-skeleton.d61155ee9eb25f6b70c2.png"}}]);
//# sourceMappingURL=417.846ea29f.chunk.js.map