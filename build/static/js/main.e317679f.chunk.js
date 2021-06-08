(this["webpackJsonpplatzi-badges"]=this["webpackJsonpplatzi-badges"]||[]).push([[0],{21:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(15),c=a.n(r),i=(a(27),a(28),a(50)),o=a(52),l=a(51),d=a(3),j=a(4),b=a(6),h=a(5),u=(a(29),a.p+"static/media/logo.235d00e1.svg"),m=a(49),O=a(0),p=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"Navbar",children:Object(O.jsx)("div",{className:"container-fluid",children:Object(O.jsxs)(m.a,{className:"Navbar__brand",to:"/",children:[Object(O.jsx)("img",{className:"Navbar__brand-logo",src:u,alt:"Logo"}),Object(O.jsx)("span",{className:"font-weight-light",children:"Platzi"}),Object(O.jsx)("span",{className:"font-weight-bold",children:"Conf"})]})})})}}]),a}(s.a.Component);var f=function(e){return Object(O.jsxs)(s.a.Fragment,{children:[Object(O.jsx)(p,{}),e.children]})},g=(a(33),a.p+"static/media/platziconf-logo.c1d00c3e.svg"),v=a.p+"static/media/astronauts.ea532e99.svg",x=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"Home",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"Home__col col-12 col-md-4",children:[Object(O.jsx)("img",{src:g,alt:"Platzi Conf Logo",className:"img-fluid mb-2"}),Object(O.jsx)("h1",{children:"Badge Management System"}),Object(O.jsx)(m.a,{className:"btn btn-primary",to:"/badges",children:"Start"})]}),Object(O.jsx)("div",{className:"Home__col d-none d-md-block col-md-8",children:Object(O.jsx)("img",{src:v,alt:"Astronauts",className:"img-fluid p-4"})})]})})})}}]),a}(n.Component),N=a(7),w=a.n(N),y=a(9),C=(a(35),a.p+"static/media/badge-header.2c3af956.svg"),_=a(19),S=(a(36),a(11)),B=a.n(S);var k=function(e){var t=e.email,a=B()(t);return Object(O.jsx)("img",{className:e.className,src:"https://www.gravatar.com/avatar/".concat(a,"?d=identicon"),alt:"Avatar"})},T=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"BadgesListItem",children:[Object(O.jsx)(k,{className:"BadgesListItem__avatar",email:this.props.badge.email}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("strong",{children:[this.props.badge.firstName," ",this.props.badge.lastName]}),Object(O.jsx)("br",{}),"@",this.props.badge.twitter,Object(O.jsx)("br",{}),this.props.badge.jobTitle]})]})}}]),a}(s.a.Component);var I=function(e){var t=function(e){var t=s.a.useState(""),a=Object(_.a)(t,2),n=a[0],r=a[1],c=s.a.useState(e),i=Object(_.a)(c,2),o=i[0],l=i[1];return s.a.useMemo((function(){var t=e.filter((function(e){return"".concat(e.firstName," ").concat(e.lastName).toLowerCase().includes(n.toLowerCase())}));l(t)}),[e,n]),{query:n,setQuery:r,filteredBadges:o}}(e.badges),a=t.query,n=t.setQuery,r=t.filteredBadges;return 0===r.length?Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Filter Badges"}),Object(O.jsx)("input",{type:"text",className:"form-control",value:a,onChange:function(e){n(e.target.value)}})]}),Object(O.jsx)("h3",{children:"No badges were found"}),Object(O.jsx)(m.a,{className:"btn btn-primary",to:"/Badges/new",children:"Create new badge"})]}):Object(O.jsxs)("div",{className:"BadgesList",children:[Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Filter Badges"}),Object(O.jsx)("input",{type:"text",className:"form-control",value:a,onChange:function(e){n(e.target.value)}})]}),Object(O.jsx)("ul",{className:"list-unstyled",children:r.map((function(e){return Object(O.jsx)("li",{children:Object(O.jsx)(m.a,{className:"text-reset text-decoration-none",to:"/badges/".concat(e.id),children:Object(O.jsx)(T,{badge:e})})},e.id)}))})]})},M=(a(39),a(21),function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"lds-grid",children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]})}}]),a}(n.Component));var D=function(){return Object(O.jsx)("div",{className:"PageLoading",children:Object(O.jsx)(M,{})})};a(40);var A=function(e){return Object(O.jsx)("div",{className:"PageError",children:e.error.message})},E=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"lds-grid",children:[Object(O.jsx)("div",{}),Object(O.jsx)("div",{}),Object(O.jsx)("div",{})]})}}]),a}(n.Component),L="http://localhost:3001",F=function(e){return new Promise((function(t){return setTimeout(t,e)}))},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Math.floor(Math.random()*(t-e+1))+e},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:30,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500;return F(P(e,t))};function V(e){return z.apply(this,arguments)}function z(){return(z=Object(y.a)(w.a.mark((function e(t){var a,n,s,r,c=arguments;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>1&&void 0!==c[1]?c[1]:{},e.next=3,J();case 3:return a.headers={"Content-Type":"application/json",Accept:"application/json"},n=L+t,e.next=7,fetch(n,a);case 7:return s=e.sent,e.next=10,s.json();case 10:return r=e.sent,e.abrupt("return",r);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U={badges:{list:function(){return V("/badges")},create:function(e){return V("/badges",{method:"POST",body:JSON.stringify(e)})},read:function(e){return V("/badges/".concat(e))},update:function(e,t){return V("/badges/".concat(e),{method:"PUT",body:JSON.stringify(t)})},remove:function(e){return V("/badges/".concat(e),{method:"DELETE"})}}},R=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={loading:!0,error:null,data:void 0},e.fetchData=Object(y.a)(w.a.mark((function t(){var a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0,error:null}),t.prev=1,t.next=4,U.badges.list();case 4:a=t.sent,e.setState({loading:!1,data:a}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.setState({loading:!1,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.fetchData(),this.intervalId=setInterval(this.fetchData,5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){return!0!==this.state.loading||this.state.data?this.state.error?Object(O.jsx)(A,{error:this.state.error}):Object(O.jsxs)(s.a.Fragment,{children:[Object(O.jsx)("div",{className:"Badges",children:Object(O.jsx)("div",{className:"Badges__hero",children:Object(O.jsx)("div",{className:"Badges__container",children:Object(O.jsx)("img",{className:"Badges_conf-logo",src:C,alt:"Conf logo"})})})}),Object(O.jsxs)("div",{className:"Badges__container",children:[Object(O.jsx)("div",{className:"Badges__buttons",children:Object(O.jsx)(m.a,{to:"/badges/new",className:"btn btn-primary",children:"New Badge"})}),Object(O.jsx)(I,{badges:this.state.data}),this.state.loading&&Object(O.jsx)(E,{})]})]}):Object(O.jsx)(D,{})}}]),a}(s.a.Component),H=a(12),W=a(13),q=(a(41),a(42),function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"Badge",children:[Object(O.jsx)("div",{className:"Badge_header",children:Object(O.jsx)("img",{src:C,alt:"Logo de la conferencia"})}),Object(O.jsxs)("div",{className:"Badge_section-name",children:[Object(O.jsx)(k,{className:"Badge_avatar",email:this.props.email,alt:"Avatar"}),Object(O.jsxs)("h1",{children:[this.props.firstName," ",Object(O.jsx)("br",{})," ",this.props.lastName]})]}),Object(O.jsxs)("div",{className:"Badge_section-info",children:[Object(O.jsx)("h3",{children:this.props.jobTitle}),Object(O.jsxs)("div",{children:["@",this.props.twitter]})]}),Object(O.jsx)("div",{className:"Badge_footer",children:" #platziconf "})]})}}]),a}(s.a.Component)),Q=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).handleClick=function(e){console.log("Button was clicked")},e}return Object(j.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsxs)("form",{onSubmit:this.props.onSubmit,children:[Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"First Name"}),Object(O.jsx)("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"firstName",value:this.props.formValues.firstName})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Last Name"}),Object(O.jsx)("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"lastName",value:this.props.formValues.lastName})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Email"}),Object(O.jsx)("input",{onChange:this.props.onChange,className:"form-control",type:"email",name:"email",value:this.props.formValues.email})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Job Title"}),Object(O.jsx)("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"jobTitle",value:this.props.formValues.jobTitle})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Twitter"}),Object(O.jsx)("input",{onChange:this.props.onChange,className:"form-control",type:"text",name:"twitter",value:this.props.formValues.twitter})]}),Object(O.jsx)("button",{onClick:this.handleClick,className:"btn btn-primary",children:"Save"}),this.props.error&&Object(O.jsx)("p",{className:"text-danger",children:this.props.error.message})]})})}}]),a}(s.a.Component),Y=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={loading:!1,error:null,form:{firstName:"",lastName:"",email:"",jobTitle:"",twitter:""}},e.handleChange=function(t){e.setState({form:Object(W.a)(Object(W.a)({},e.state.form),{},Object(H.a)({},t.target.name,t.target.value))})},e.handleSubmit=function(){var t=Object(y.a)(w.a.mark((function t(a){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),e.state.form.avatarUrl="https://www.gravatar.com/avatar/".concat(B()(e.state.form.email),"?d=identicon"),e.setState({loading:!0,error:null}),t.prev=3,t.next=6,U.badges.create(e.state.form);case 6:e.setState({loading:!1}),e.props.history.push("/badges"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),e.setState({loading:!1,error:t.t0});case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(j.a)(a,[{key:"render",value:function(){return this.state.loading?Object(O.jsx)(D,{}):Object(O.jsxs)(s.a.Fragment,{children:[Object(O.jsx)("div",{className:"BadgeNew__hero",children:Object(O.jsx)("img",{className:"BadgeNew__hero-image img-fluid",src:g,alt:"Logo"})}),Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-6",children:Object(O.jsx)(q,{firstName:this.state.form.firstName||"FIRST_NAME",lastName:this.state.form.lastName||"LAST_NAME",twitter:this.state.form.twitter||"TWITTER",jobTitle:this.state.form.jobTitle||"JOB_TITLE",email:this.state.form.email||"EMAIL",avatarUrl:"https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"})}),Object(O.jsxs)("div",{className:"col-6",children:[Object(O.jsx)("h1",{children:"New Attendant"}),Object(O.jsx)(Q,{onChange:this.handleChange,onSubmit:this.handleSubmit,formValues:this.state.form,error:this.state.error})]})]})})]})}}]),a}(s.a.Component);a(43),a(44);var G=function(e){return e.isOpen?c.a.createPortal(Object(O.jsx)("div",{className:"Modal",children:Object(O.jsxs)("div",{className:"Modal__container",children:[Object(O.jsx)("button",{onClick:e.onClose,className:"Modal__close-button",children:"x"}),e.children]})}),document.getElementById("modal")):null};var K=function(e){return Object(O.jsx)(G,{isOpen:e.isOpen,onClose:e.onClose,children:Object(O.jsxs)("div",{className:"DeleteBadgeModal",children:[Object(O.jsx)("h1",{children:"Are You Sure?"}),Object(O.jsx)("p",{children:"You are about to delete this badge."}),Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{onClick:e.onDeleteBadge,className:"btn btn-danger mr-4",children:"Delete"}),Object(O.jsx)("button",{onClick:e.onClose,className:"btn btn-primary",children:"Cancel"})]})]})})};var X=function(e){var t=e.badge;return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{className:"BadgeDetails__hero",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-6",children:Object(O.jsx)("img",{src:g,alt:"Logo de la conferencia"})}),Object(O.jsx)("div",{className:"col-6 BadgeDetails__hero-attendant-name ",children:Object(O.jsxs)("h1",{children:[t.firstName," ",t.lastName]})})]})})}),Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col",children:Object(O.jsx)(q,{firstName:t.firstName,lastName:t.lastName,email:t.email,twitter:t.twitter,jobTitle:t.jobTitle})}),Object(O.jsxs)("div",{className:"col",children:[Object(O.jsx)("h2",{children:"Actions"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:Object(O.jsx)(m.a,{className:"btn btn-primary mb-4 ",to:"/badges/".concat(t.id,"/edit"),children:"Edit"})}),Object(O.jsxs)("div",{children:[Object(O.jsx)("button",{onClick:e.onOpenModal,className:"btn btn-danger",children:"Delete"}),Object(O.jsx)(K,{isOpen:e.modalIsOpen,onClose:e.onCloseModal,onDeleteBadge:e.onDeleteBadge})]})]})]})]})})]})},Z=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={loading:!0,error:null,data:void 0,modalIsOpen:!1},e.fetchData=Object(y.a)(w.a.mark((function t(){var a;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0,error:null}),t.prev=1,t.next=4,U.badges.read(e.props.match.params.badgeId);case 4:a=t.sent,e.setState({loading:!1,data:a}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.setState({loading:!1,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])}))),e.handleOpenModal=function(t){e.setState({modalIsOpen:!0})},e.handleCloseModal=function(t){e.setState({modalIsOpen:!1})},e.handleDeleteBadge=function(){var t=Object(y.a)(w.a.mark((function t(a){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0,error:null}),t.prev=1,t.next=4,U.badges.remove(e.props.match.params.badgeId);case 4:e.setState({loading:!1}),e.props.history.push("/badges"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.setState({loading:!1,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){if(this.state.loading)return Object(O.jsx)(D,{});if(this.state.error)return Object(O.jsx)(A,{error:this.state.error});this.state.data;return Object(O.jsx)(X,{onCloseModal:this.handleCloseModal,onOpenModal:this.handleOpenModal,modalIsOpen:this.state.modalIsOpen,onDeleteBadge:this.handleDeleteBadge,badge:this.state.data})}}]),a}(s.a.Component),$=(a(45),function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={loading:!0,error:null,form:{firstName:"",lastName:"",email:"",jobTitle:"",twitter:""}},e.fetchData=function(){var t=Object(y.a)(w.a.mark((function t(a){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({loading:!0,error:null}),t.prev=1,t.next=4,U.badges.read(e.props.match.params.badgeId);case 4:n=t.sent,e.setState({loading:!1,form:n}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.setState({loading:!1,error:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){e.setState({form:Object(W.a)(Object(W.a)({},e.state.form),{},Object(H.a)({},t.target.name,t.target.value))})},e.handleSubmit=function(){var t=Object(y.a)(w.a.mark((function t(a){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),e.state.form.avatarUrl="https://www.gravatar.com/avatar/".concat(B()(e.state.form.email),"?d=identicon"),e.setState({loading:!0,error:null}),t.prev=3,t.next=6,U.badges.update(e.props.match.params.badgeId,e.state.form);case 6:e.setState({loading:!1}),e.props.history.push("/badges"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(3),e.setState({loading:!1,error:t.t0});case 13:case"end":return t.stop()}}),t,null,[[3,10]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return this.state.loading?Object(O.jsx)(D,{}):Object(O.jsxs)(s.a.Fragment,{children:[Object(O.jsx)("div",{className:"BadgeEdit__hero",children:Object(O.jsx)("img",{className:"BadgeEdit__hero-image img-fluid",src:g,alt:"Logo"})}),Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-6",children:Object(O.jsx)(q,{firstName:this.state.form.firstName||"FIRST_NAME",lastName:this.state.form.lastName||"LAST_NAME",twitter:this.state.form.twitter||"TWITTER",jobTitle:this.state.form.jobTitle||"JOB_TITLE",email:this.state.form.email||"EMAIL",avatarUrl:"https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"})}),Object(O.jsxs)("div",{className:"col-6",children:[Object(O.jsx)("h1",{children:"Edit Attendant"}),Object(O.jsx)(Q,{onChange:this.handleChange,onSubmit:this.handleSubmit,formValues:this.state.form,error:this.state.error})]})]})})]})}}]),a}(s.a.Component));var ee=function(){return Object(O.jsx)("h1",{children:"404: Not Found"})};var te=function(){return Object(O.jsx)(i.a,{children:Object(O.jsx)(f,{children:Object(O.jsxs)(o.a,{children:[Object(O.jsx)(l.a,{exact:!0,path:"/",component:x}),Object(O.jsx)(l.a,{exact:!0,path:"/react",component:x}),Object(O.jsx)(l.a,{exact:!0,path:"/badges",component:R}),Object(O.jsx)(l.a,{exact:!0,path:"/badges/new",component:Y}),Object(O.jsx)(l.a,{exact:!0,path:"/badges/:badgeId",component:Z}),Object(O.jsx)(l.a,{exact:!0,path:"/badges/:badgeId/edit",component:$}),Object(O.jsx)(l.a,{component:ee})]})})})};c.a.render(Object(O.jsx)(te,{}),document.getElementById("app"))}},[[47,1,2]]]);
//# sourceMappingURL=main.e317679f.chunk.js.map