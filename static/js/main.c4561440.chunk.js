(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{21:function(t,e,a){t.exports={enter:"telBook_enter__1Pt3B",enterActive:"telBook_enterActive__27L32",exit:"telBook_exit__1rAiO",exitActive:"telBook_exitActive__2DrLk",appear:"telBook_appear__2Bksu",appearActive:"telBook_appearActive__3P04R",alert:"telBook_alert__3HghW",body:"telBook_body__2xRYD",title:"telBook_title__3dcK1",form:"telBook_form__2XgCA"}},35:function(t,e,a){t.exports={enter:"contactList_enter__ZOWop",enterActive:"contactList_enterActive__wujHn",exit:"contactList_exit__2Qj9v",exitActive:"contactList_exitActive__2uBVP",listItems:"contactList_listItems__3HlZ6",text:"contactList_text__24GwT"}},56:function(t,e,a){t.exports={enter:"contactListFind_enter__cr-TL",enterActive:"contactListFind_enterActive__2umbc",exit:"contactListFind_exit__2b4K4",exitActive:"contactListFind_exitActive__21_VY"}},66:function(t,e,a){t.exports=a(93)},93:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(7),o=a.n(r),i=a(125),s=a(127),u=a(126),l=a(13),m=a(35),d=a.n(m),f=a(10),b=a(40),_=a.n(b),p=a(57),v=a(30),E=Object(v.b)({name:"@contacts",initialState:{contacts:{items:[],filter:""}},reducers:{getContacts:function(t,e){e.type;var a=e.payload;return{contacts:Object(f.a)(Object(f.a)({},t.contacts),{},{items:a})}},addContacts:function(t,e){e.type;var a=e.payload;return{contacts:Object(f.a)(Object(f.a)({},t.contacts),{},{items:[].concat(Object(p.a)(t.contacts.items),[a])})}},deleteContacts:function(t,e){e.type;var a=e.payload;return{contacts:Object(f.a)(Object(f.a)({},t.contacts),{},{items:t.contacts.items.filter((function(t){return t.id!==a}))})}},filterContacts:function(t,e){e.type;var a=e.payload;return{contacts:Object(f.a)(Object(f.a)({},t.contacts),{},{filter:a})}},addRequest:function(t){return Object(f.a)(Object(f.a)({},t),{},{loading:!0})},addSuccess:function(t){return Object(f.a)(Object(f.a)({},t),{},{loading:!1})},addError:function(t){return Object(f.a)(Object(f.a)({},t),{},{loading:!1})}}}),j=function(t){return function(e){var a=E.actions,n=a.addContacts,c=a.addRequest,r=a.addSuccess,o=a.addError;e(c()),_.a.post("https://reacthw7.firebaseio.com/contacts.json",t).then((function(a){e(n(Object(f.a)(Object(f.a)({},t),{},{id:a.data.name}))),e(r())})).catch((function(t){return e(o())}))}},O=function(){return function(t){var e=E.actions,a=e.getContacts,n=e.addRequest,c=e.addSuccess,r=e.addError;t(n()),_.a.get("https://reacthw7.firebaseio.com/contacts.json").then((function(e){var n=Object.keys(e.data).map((function(t){return Object(f.a)({id:t},e.data[t])}));t(a(n)),t(c())})).catch((function(e){return t(r())}))}},h=function(t){return function(e){var a=E.actions,n=a.deleteContacts,c=a.addRequest,r=a.addSuccess,o=a.addError;e(c()),_.a.delete("https://reacthw7.firebaseio.com/contacts/".concat(t,".json")).then((function(){e(n(t)),e(r())})).catch((function(t){return e(o())}))}},g=a(16),x=function(t){return t.contacts.items},y=Object(g.a)([x,function(t){return t.contacts.filter}],(function(t,e){return e?t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})):t}));var C=Object(l.b)((function(t){return{contacts:y(t)}}))((function(t){var e=t.contacts,a=Object(l.c)();return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{component:"ul"},e.map((function(t){return c.a.createElement(u.a,{classNames:d.a,key:t.id,timeout:250},c.a.createElement("li",{key:t.id,className:d.a.listItems},c.a.createElement("p",{className:d.a.text},t.name),c.a.createElement("p",{className:d.a.text},t.number),c.a.createElement(i.a,{type:"button",variant:"contained",color:"secondary",onClick:function(){return a(h(t.id))}},"DELETE")))}))))})),k=a(124),A=a(123),L=a(56),B=a.n(L),N=E.reducer,w=Object(v.a)({reducer:N}),F=Object(A.a)((function(t){return{root:{"& > *":{margin:t.spacing(1),width:"400px",display:"flex"}}}}));var S=Object(l.b)((function(t){return{contacts:x(t)}}))((function(t){var e=t.onChange,a=F();return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{classNames:B.a,timeout:500,unmountOnExit:!0,in:w.getState().contacts.items.length>1},c.a.createElement(k.a,{className:a.root,id:"outlined-basic",label:"Find contacts by name",variant:"outlined",name:"filter",onChange:e})))})),R=a(21),T=a.n(R),q=a(41),D=Object(A.a)((function(t){return{root:{"& > *":{width:"400px",display:"flex"}}}}));function I(t){var e=D();return c.a.createElement(c.a.Fragment,null,c.a.createElement(k.a,{className:e.root,style:{width:200,margin:10},id:"outlined-basic",label:t.name,variant:"outlined",name:t.name,onChange:t.onChange,value:t.value}))}var P=Object(A.a)((function(t){return{root:{"& > *":{margin:t.spacing(1),width:"400px",display:"flex"}}}}));var H=Object(l.b)((function(t){return{contacts:x(t)}}))((function(t){var e=t.contacts;console.log("ContactForm Rerender");var a=Object(n.useState)(!1),r=Object(q.a)(a,2),o=r[0],s=r[1],m=Object(n.useState)(""),d=Object(q.a)(m,2),f=d[0],b=d[1],_=Object(n.useState)(""),p=Object(q.a)(_,2),v=p[0],E=p[1],O=P(),h=Object(l.c)();function g(t){var e=t.target,a=e.name,n=e.value;"name"===a?b(n):"number"===a&&E(n)}return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,{timeout:5e3,classNames:T.a,in:o},c.a.createElement("div",{className:T.a.alert},c.a.createElement("p",null,"This contact already in phonebook"))),c.a.createElement("form",{noValidate:!0,autoComplete:"off",onSubmit:function(t){t.preventDefault(),e.find((function(t){return t.name===f}))?(s(!0),setTimeout((function(){s(!1)}),3e3),b(""),E("")):(h(j({name:f,number:v})),b(""),E(""))},className:O.root},c.a.createElement(I,{name:"name",onChange:g,value:f}),c.a.createElement(I,{name:"number",onChange:g,value:v}),c.a.createElement(i.a,{variant:"contained",color:"primary",type:"input"},"Add contact")))}));var V=function(){var t=Object(l.c)(),e=E.actions.filterContacts;return Object(n.useEffect)((function(){t(O())}),[]),c.a.createElement("div",{className:T.a.body},c.a.createElement(u.a,{timeout:500,classNames:T.a,appear:!0,unmountOnExit:!0,in:!0},c.a.createElement("div",null,c.a.createElement("h2",{className:T.a.title},"Phonebook"))),c.a.createElement(H,null),c.a.createElement("h2",{className:T.a.title},"Contacts"),c.a.createElement(S,{onChange:function(a){return t(e(a.target.value))}}),c.a.createElement(C,null))};var J=function(){return c.a.createElement(n.Fragment,null,c.a.createElement(V,null))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l.a,{store:w},c.a.createElement(J,null))),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.c4561440.chunk.js.map