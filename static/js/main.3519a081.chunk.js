(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{20:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),s=(n(16),n(11)),i=n(2),u=n(5),l=n.n(u),b=n(22),j=n(8),d=n.n(j),m=n(0);var _=function(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1],s=Object(a.useState)(""),u=Object(i.a)(s,2),l=u[0],b=u[1],j=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":o(a);break;case"number":b(a);break;default:console.log("\u0423\u043f\u0441, \u043f\u0440\u0438 \u0432\u0432\u043e\u0434\u0435 \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a")}};return Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=e.target.name.value,a=e.target.number.value;t(n,a),o(""),b("")},className:d.a.form,children:[Object(m.jsxs)("label",{children:[Object(m.jsx)("span",{children:"Name"}),Object(m.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:j})]}),Object(m.jsxs)("label",{children:[Object(m.jsx)("span",{children:"Number"}),Object(m.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:l,onChange:j})]}),Object(m.jsx)("button",{type:"submit",className:d.a.btnSend,children:"Add contact"})]})},h=n(3),f=n.n(h);function O(e){var t=e.data,n=e.onChange;return Object(m.jsx)("ul",{className:f.a.contact__list,children:t.map((function(e){return Object(m.jsxs)("li",{className:f.a.contact__item,children:[Object(m.jsxs)("span",{className:f.a.contact__name,children:[e.name,":"]}),Object(m.jsx)("span",{className:f.a.contact__number,children:e.number}),Object(m.jsx)("button",{type:"button",className:f.a.contact__button,onClick:function(){return n(e.id)},children:"D"})]},e.id)}))})}var p=n(9),v=n.n(p);function x(e){var t=e.value,n=e.onChange;return Object(m.jsxs)("label",{children:["Filter by name",Object(m.jsx)("input",{type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:t,onChange:n})]})}x.popTypes={value:v.a.string.isRequired,onChange:v.a.func.isRequired};var g=function(e,t){var n=Object(a.useState)((function(){var n;return JSON.parse(null!==(n=localStorage.getItem(e))&&void 0!==n?n:t)})),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(a.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(r))}),[e,r]),[r,o]};var C=function(){var e=g("contacts",""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),u=o[0],j=o[1];return Object(m.jsxs)("div",{className:l.a.phonebook,children:[Object(m.jsx)("h1",{className:l.a.title,children:"Phonebook"}),Object(m.jsx)(_,{onSubmit:function(e,t){if(!n.find((function(t){return t.name===e})))return c((function(n){return[{name:e,number:t,id:Object(b.a)()}].concat(Object(s.a)(n))}));alert("".concat(e," is already in the contacts"))}}),Object(m.jsxs)("div",{className:"contacts",children:[Object(m.jsx)("h2",{className:l.a.title,children:"Contacts"}),Object(m.jsx)(x,{value:u,onChange:function(e){var t=e.currentTarget,n=t.name,a=t.value;"filter"===n&&j(a)}}),Object(m.jsx)("div",{className:l.a.containerOverflow,children:0!==n.length?Object(m.jsx)(O,{data:function(){var e=u.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),onChange:function(e){c(n.filter((function(t){return t.id!==e})))}}):Object(m.jsx)("p",{children:"There is nothing here yet"})})]})]})};o.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={contact__list:"ContactList_contact__list__3JAIS",contact__item:"ContactList_contact__item__Bxlrc",contact__number:"ContactList_contact__number__32Qwy",contact__button:"ContactList_contact__button__1ggPB"}},5:function(e,t,n){e.exports={phonebook:"App_phonebook__2XvLf",title:"App_title__1XfS-",containerOverflow:"App_containerOverflow__36SqO"}},8:function(e,t,n){e.exports={form:"Form_form__yDq9-",btnSend:"Form_btnSend__3Lr1r"}}},[[20,1,2]]]);
//# sourceMappingURL=main.3519a081.chunk.js.map