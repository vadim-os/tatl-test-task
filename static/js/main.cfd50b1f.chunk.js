(this["webpackJsonptatl-test-task"]=this["webpackJsonptatl-test-task"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),l=n(3),u=n.n(l),c=(n(14),n(1)),s=n(4),o=n(5),i=n(7),m=n(6),p=n(8),d=n(18),E=(n(15),function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(i.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(r)))).state={students:[],popup:!1,name:"",rating:"",isSortedBy:null},n.togglePopUp=function(){n.setState((function(t){return{popup:!t.popup}}))},n.addStudent=function(){n.setState((function(t){return{students:[].concat(Object(c.a)(t.students),[{id:Object(d.a)(),name:t.name,rating:+t.rating}]),name:"",rating:""}})),n.togglePopUp()},n.sortBy=function(t){if(t===n.state.isSortedBy)n.setState((function(t){return{students:Object(c.a)(t.students).reverse()}}));else{switch(t){case"name":n.setState((function(t){return{students:Object(c.a)(t.students).sort((function(t,e){return t.name.localeCompare(e.name)}))}}));break;case"rating":n.setState((function(t){return{students:Object(c.a)(t.students).sort((function(t,e){return t.rating-e.rating}))}}));break;default:n.setState((function(t){return{students:Object(c.a)(t.students).sort((function(t,e){return t.id-e.id}))}}))}n.setState({isSortedBy:t})}},n}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this,e=this.state,n=e.students,a=e.popup,l=e.name,u=e.rating;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"TATL Technology test task"),r.a.createElement("button",{type:"button",className:"btn",onClick:this.togglePopUp},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c"),r.a.createElement("hr",null),a&&r.a.createElement("div",{className:"popup"},r.a.createElement("div",{className:"popup_inner"},r.a.createElement("button",{type:"button",className:"btn red darken-4",onClick:this.togglePopUp},"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"),r.a.createElement("h4",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c"),r.a.createElement("div",null,r.a.createElement("label",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043c\u0438\u043b\u0438\u044e \u0438 \u0438\u043c\u044f:\xa0",r.a.createElement("input",{type:"text",value:l,onChange:function(e){return t.setState({name:e.target.value})},placeholder:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f, \u0418\u043c\u044f"}))),r.a.createElement("div",null,r.a.createElement("label",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0440\u0435\u0439\u0442\u0438\u043d\u0433 \u043e\u0442 0 \u0434\u043e 100:\xa0",r.a.createElement("input",{type:"number",min:"0",max:"100",value:u,onChange:function(e){return t.setState({rating:e.target.value})},placeholder:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 (0-100)"})),l.trim()&&u&&u>=0&&u<=100&&r.a.createElement("button",{type:"button",className:"btn",onClick:this.addStudent},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0440\u0435\u0439\u0442\u0438\u043d\u0433")))),!!n.length&&r.a.createElement("table",{className:"centered striped"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u2116 \u043f/\u043f"),r.a.createElement("th",null,r.a.createElement("span",{className:"sort",onClick:function(){return t.sortBy("name")}},"\u0424\u0430\u043c\u0438\u043b\u0438\u044f, \u0418\u043c\u044f")),r.a.createElement("th",null,r.a.createElement("span",{className:"sort",onClick:function(){return t.sortBy("rating")}}," ","\u0420\u0435\u0439\u0442\u0438\u043d\u0433")))),r.a.createElement("tbody",null,n.map((function(t,e){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,e+1),r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.rating))})))),!n.length&&r.a.createElement("h4",null,"\u041f\u043e\u043a\u0430 \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u043d\u0435\u0442"))}}]),e}(r.a.Component));u.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(t,e,n){t.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.cfd50b1f.chunk.js.map