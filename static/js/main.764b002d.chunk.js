(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(9),o=a(2),s=a(7),c=a(5),l=a(1),u=(a(14),a(0)),d=function(e){var t=e.user;return Object(u.jsx)("a",{className:"UserInfo",href:"mailto:".concat(null===t||void 0===t?void 0:t.email),children:null===t||void 0===t?void 0:t.name})},m=function(e){var t=e.todo;return Object(u.jsxs)("article",{className:t.completed?"TodoInfo TodoInfo--completed":"TodoInfo","data-id":t.id,children:[Object(u.jsx)("h2",{className:"TodoInfo__title",children:t.title}),Object(u.jsx)(d,{user:t.user?t.user:null})]})},j=function(e){var t=e.todos;return Object(u.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(u.jsx)(m,{todo:e},e.id)}))})},b=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];function h(e){return b.find((function(t){return t.id===e}))||null}var O=function(e){var t=e.onSubmit,a=Object(l.useState)(""),n=Object(o.a)(a,2),i=n[0],r=n[1],s=Object(l.useState)(!1),c=Object(o.a)(s,2),d=c[0],m=c[1],j=Object(l.useState)(!1),O=Object(o.a)(j,2),p=O[0],f=O[1],x=Object(l.useState)(0),v=Object(o.a)(x,2),S=v[0],y=v[1];return Object(u.jsxs)("form",{action:"./api/todos",method:"POST",onSubmit:function(e){e.preventDefault(),m(!i),f(!S),i&&S&&(t({id:0,title:i,userId:S,completed:!1,user:h(S)}),r(""),y(0),m(!1),f(!1))},children:[Object(u.jsx)("label",{htmlFor:"title",children:"Title: "}),Object(u.jsx)("input",{type:"text",name:"title",id:"title",value:i,"data-cy":"titleInput",placeholder:"Enter a title",onChange:function(e){r(e.target.value),m(!1)}}),d&&Object(u.jsx)("span",{className:"error",children:"Please enter a title"}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{htmlFor:"users",children:"User: "}),Object(u.jsxs)("select",{name:"users",id:"users",value:S,"data-cy":"userSelect",onChange:function(e){y(+e.target.value),f(!1)},children:[Object(u.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),b.map((function(e){return Object(u.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),p&&Object(u.jsx)("span",{className:"error",children:"Please choose a user"}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]})},p=["id"],f=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:h(e.userId)})}));var x=function(){var e=Object(l.useState)(f),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{className:"App__title",children:"Add todo form"}),Object(u.jsx)(O,{onSubmit:function(e){var t,i=e.id,o=Object(r.a)(e,p),l=Object(c.a)({id:i||(t=a,Math.max.apply(Math,Object(s.a)(t.map((function(e){return e.id}))))+1)},o);n((function(e){return[].concat(Object(s.a)(e),[l])}))}}),Object(u.jsx)(j,{todos:a})]})};i.a.render(Object(u.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.764b002d.chunk.js.map