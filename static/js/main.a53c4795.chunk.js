(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,function(e,a,t){e.exports={wrapper:"Greeting_wrapper__WTblo",input:"Greeting_input__1prz7",totalCount:"Greeting_totalCount__3WiDz",data:"Greeting_data__20AUG",usersWr:"Greeting_usersWr__5GcCU",userData:"Greeting_userData__1tHsd",userDataTitle:"Greeting_userDataTitle__24gyx",userDataContent:"Greeting_userDataContent__2cDcT",error:"Greeting_error__2tdC1",errorType:"Greeting_errorType__2JBP0",label:"Greeting_label__20hjJ"}},,function(e,a,t){e.exports={blue:"HW4_blue__3hkVW",textInput:"HW4_textInput__2ueNf",column:"HW4_column__3c2xA",deleteButton:"HW4_deleteButton__2y2nB",checkBoxWr:"HW4_checkBoxWr__3KlLx"}},function(e,a,t){e.exports={messageWrapper:"Message_messageWrapper__2Fuva",avatar:"Message_avatar__3lOsU",message:"Message_message__3AU61",time:"Message_time__15tBf",name:"Message_name__FxEFJ"}},function(e,a,t){e.exports={wrapper:"Affairs_wrapper__Hk_4K",buttonsWrapper:"Affairs_buttonsWrapper__eaoAO",allBtn:"Affairs_allBtn__1YriE",highBtn:"Affairs_highBtn__1Z0TC",middleBtn:"Affairs_middleBtn__wJ312",lowBtn:"Affairs_lowBtn__2DciK"}},,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__2u_kJ",errorInput:"SuperInputText_errorInput__24Pm0",superLabel:"SuperInputText_superLabel__iwihz",error:"SuperInputText_error__3acEh",label:"SuperInputText_label__B5nWN"}},,function(e,a,t){e.exports={wrapper:"Affair_wrapper__1_VIW",name:"Affair_name__111AP",button:"Affair_button__3x70C",priority:"Affair_priority__1wPXL"}},,function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__13vb7",spanClassName:"SuperCheckbox_spanClassName__16jdM",label:"SuperCheckbox_label__1qPgB"}},function(e,a,t){e.exports={default:"SuperButton_default__1gEbm",red:"SuperButton_red__1_o3c"}},,,function(e,a,t){e.exports={App:"App_App__2jjpI"}},,function(e,a,t){e.exports=t(23)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14),c=t.n(l),s=(t(22),t(15)),o=t.n(s),i=t(4),m=t.n(i);var u=function(e){return r.a.createElement("div",{className:m.a.messageWrapper},r.a.createElement("img",{className:m.a.avatar,src:e.avatar,alt:"Avatar"}),r.a.createElement("div",{className:m.a.message},r.a.createElement("span",{className:m.a.name},e.name),r.a.createElement("p",{className:m.a.content},e.message),r.a.createElement("span",{className:m.a.time},e.time)))},_="https://www.vikids.ru/images/default_avatar.png?avatar_cached_at=1562752082",p="Ivan",d="hello hello hello hello hello",h="22:00";var f=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(u,{avatar:_,name:p,message:d,time:h}),r.a.createElement("hr",null),r.a.createElement("hr",null))},E=t(2),b=t(9),g=t.n(b),v=t(6),N=t(12),k=t.n(N),C=function(e){var a=e.red,t=e.className,n=Object(v.a)(e,["red","className"]),l="".concat(a?k.a.red:""," ").concat(t);return r.a.createElement("button",Object.assign({className:"".concat(k.a.default," ").concat(l)},n))};var x=function(e){return r.a.createElement("div",{className:g.a.wrapper},r.a.createElement("div",{className:g.a.name},r.a.createElement("span",null,e.affair.name),r.a.createElement("span",{className:g.a.priority},"(",e.affair.priority,")")),r.a.createElement(C,{className:g.a.button,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"remove"))},w=t(5),y=t.n(w);var B=function(e){var a=e.data.map((function(a){return r.a.createElement(x,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:y.a.wrapper},a,r.a.createElement("div",{className:y.a.buttonsWrapper},r.a.createElement(C,{className:y.a.allBtn,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement(C,{className:y.a.highBtn,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement(C,{className:y.a.middleBtn,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement(C,{className:y.a.lowBtn,onClick:function(){e.setFilter("low")}},"Low")))},j=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var A=function(){var e=Object(n.useState)(j),a=Object(E.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),s=Object(E.a)(c,2),o=s[0],i=s[1],m=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,o);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(B,{data:m,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},O=t(16),W=t(1),T=t.n(W),I=t(7),S=t.n(I),D=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,s=e.className,o=e.spanClassName,i=Object(v.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),m="".concat(c?S.a.error:""," ").concat(o||""),u="".concat(S.a.superInput," ").concat(c?S.a.errorInput:""," ").concat(s||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:S.a.label},r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),"Enter"===e.key&&l&&l()},className:u},i)),c&&r.a.createElement("span",{className:"".concat(S.a.superLabel," ").concat(m)},c)))},G=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,s=e.users,o=l?T.a.error:T.a.success,i=s.map((function(e){return r.a.createElement("div",{className:T.a.usersWr,key:e._id},r.a.createElement("div",{className:T.a.userData},r.a.createElement("span",{className:T.a.userDataTitle},"public ID:"),r.a.createElement("span",{className:T.a.userDataContent},e._id)),r.a.createElement("div",{className:T.a.userData},r.a.createElement("span",{className:T.a.userDataTitle},"User name:"),r.a.createElement("span",{className:T.a.userDataContent},e.name)))}));return r.a.createElement("div",{className:T.a.wrapper},r.a.createElement("div",{className:T.a.input},r.a.createElement(D,{value:a,onChange:t,className:o,error:l,placeholder:"Enter your name"}),r.a.createElement(C,{onClick:n},"add"),r.a.createElement("span",{className:T.a.totalCount},c)),r.a.createElement("div",{className:T.a.data},r.a.createElement("h5",null,"Users list"),i))},U=t(25),F=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(E.a)(l,2),s=c[0],o=c[1],i=Object(n.useState)(""),m=Object(E.a)(i,2),u=m[0],_=m[1],p=a.length;return r.a.createElement(G,{name:s,setNameCallback:function(e){o(e.currentTarget.value),_("")},addUser:function(){s.trim()?(alert("Hello  ".concat(s,"!")),t(s,Object(U.a)()),o("")):(alert("\u041d\u0435, \u0442\u0430\u043a \u043d\u0435 \u043f\u043e\u0439\u0434\u0435\u0442, \u043d\u0430\u0434\u043e \u0447\u0442\u043e \u0442\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c"),_("\u041f\u043e\u043b\u0435 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"),o(""))},error:u,totalUsers:p,users:a})};var H=function(){var e=Object(n.useState)([]),a=Object(E.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(F,{users:t,addUserCallback:function(e,a){l([].concat(Object(O.a)(t),[{_id:a,name:e}]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},M=t(3),P=t.n(M),J=t(11),K=t.n(J),L=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(v.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(K.a.checkbox," ").concat(n||"");return r.a.createElement("label",{className:K.a.label},r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked),a&&a(e)},className:s},c)),l&&r.a.createElement("span",{className:K.a.spanClassName},l))};var z=function(){var e=Object(n.useState)(""),a=Object(E.a)(e,2),t=a[0],l=a[1],c=t?"":"\u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):(alert(t),l(""))},o=Object(n.useState)(!1),i=Object(E.a)(o,2),m=i[0],u=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:P.a.column},r.a.createElement(D,{value:t,onChangeText:l,onEnter:s,error:c,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442",className:"".concat(P.a.textInput," ").concat(P.a.blue)}),r.a.createElement(C,{red:!0,onClick:s,className:P.a.deleteButton},"delete "),r.a.createElement("div",{className:P.a.checkBoxWr},r.a.createElement(L,{checked:m,onChangeChecked:u,className:P.a.checkbox},"\u0437\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f "),r.a.createElement(L,{checked:m,onChange:function(e){return u(e.currentTarget.checked)},className:P.a.checkbox}))),r.a.createElement("hr",null),r.a.createElement("hr",null))};var V=function(){return r.a.createElement("div",{className:o.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(f,null),r.a.createElement(A,null),r.a.createElement(H,null),r.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.a53c4795.chunk.js.map