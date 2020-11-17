(this.webpackJsonprestapi=this.webpackJsonprestapi||[]).push([[0],{56:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(0),r=a.n(s),i=a(18),c=a.n(i),l=(a(56),a(12)),o=a(13),h=a(8),d=a(15),j=a(14),b=a(31),u=a.n(b),p=a(86),m=a(82),O=a(83),x=a(81),f=a(50),v=a(89),C=a(84),g=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsxs)(p.a,{show:!0,onHide:this.props.handleClose,children:[Object(n.jsx)(p.a.Header,{closeButton:!0,children:Object(n.jsx)(p.a.Title,{children:this.props.phone.name})}),Object(n.jsx)(p.a.Body,{children:Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"Manufacturer: "}),this.props.phone.manufacturer]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"Description: "}),this.props.phone.description]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"Color: "}),this.props.phone.color]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"Screen: "}),this.props.phone.screen]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"Processor: "}),this.props.phone.processor]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"RAM: "}),this.props.phone.ram]}),Object(n.jsxs)("li",{children:[Object(n.jsx)("b",{children:"Price: "}),this.props.phone.price," \u20ac"]})]})})]})})}}]),a}(s.Component),y=a(24),k=a(87),S=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={counter:0,paramsToUpdate:{},invalidname:!0,invalidmanufacturer:!0,invalidcolor:!0,invaliddescription:!0,invalidscreen:!0,invalidimagefile:!0,invalidprocessor:!0,invalidram:!0,invalidprice:!0},n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n.charsCounter=n.charsCounter.bind(Object(h.a)(n)),n.handleChange=n.handleChange.bind(Object(h.a)(n)),n}return Object(o.a)(a,[{key:"handleChange",value:function(e){var t,a=e.target.value,n={};n[e.target.name]="invalid"+e.target.name;var s=this.state.paramsToUpdate;"imagefile"!==e.target.name&&(s[e.target.name]=a),this.setState((t={},Object(y.a)(t,n[e.target.name],!1),Object(y.a)(t,"paramsToUpdate",s),t)),"ram"!==e.target.name&&"price"!==e.target.name||parseInt(a)<0&&this.setState(Object(y.a)({},n[e.target.name],!0)),0===a.length&&this.setState(Object(y.a)({},n[e.target.name],!0)),"imagefile"===e.target.name&&(s.imageFileName=e.target.value)}},{key:"handleSubmit",value:function(e){e.preventDefault(),9===Object.keys(this.state.paramsToUpdate).length?this.props.createPhone(this.state.paramsToUpdate):alert("You have to fill every field")}},{key:"charsCounter",value:function(){var e=this.description.value.length;this.setState({counter:e})}},{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsxs)(p.a,{show:!0,onHide:this.props.handleClose,children:[Object(n.jsx)(p.a.Header,{closeButton:!0,children:Object(n.jsx)(p.a.Title,{children:"Create a new phone"})}),Object(n.jsx)(p.a.Body,{children:Object(n.jsxs)(k.a,{onSubmit:this.handleSubmit,children:[Object(n.jsxs)(k.a.Group,{as:x.a,children:[Object(n.jsx)(k.a.Label,{column:!0,sm:"2",children:"Name"}),Object(n.jsxs)(f.a,{sm:"10",children:[Object(n.jsx)(k.a.Control,{type:"text",name:"name",isInvalid:this.state.invalidname,onChange:this.handleChange}),Object(n.jsx)(k.a.Control.Feedback,{type:"invalid",children:"Required"})]})]}),Object(n.jsxs)(k.a.Group,{as:x.a,children:[Object(n.jsx)(k.a.Label,{column:!0,sm:"3",children:"Manufacturer"}),Object(n.jsxs)(f.a,{sm:"9",children:[Object(n.jsx)(k.a.Control,{type:"text",name:"manufacturer",isInvalid:this.state.invalidmanufacturer,onChange:this.handleChange}),Object(n.jsx)(k.a.Control.Feedback,{type:"invalid",children:"Required"})]})]}),Object(n.jsxs)(k.a.Group,{children:[Object(n.jsx)(k.a.Label,{children:"Description:"}),Object(n.jsx)(k.a.Control,{rows:"5",isInvalid:this.state.invaliddescription,name:"description",onChange:(this.charsCounter,this.handleChange)}),Object(n.jsxs)(k.a.Text,{muted:!0,children:[1234-this.state.counter," characters left"]}),Object(n.jsx)(k.a.Control.Feedback,{type:"invalid",children:"Required"})]}),Object(n.jsxs)(k.a.Group,{as:x.a,children:[Object(n.jsx)(k.a.Label,{column:!0,sm:"2",children:"Color"}),Object(n.jsxs)(f.a,{sm:"10",children:[Object(n.jsx)(k.a.Control,{type:"text",name:"color",isInvalid:this.state.invalidcolor,onChange:this.handleChange}),Object(n.jsx)(k.a.Control.Feedback,{type:"invalid",children:"Required"})]})]}),Object(n.jsxs)(k.a.Group,{as:x.a,children:[Object(n.jsx)(k.a.Label,{column:!0,sm:"2",children:"Price"}),Object(n.jsxs)(f.a,{sm:"8",children:[Object(n.jsx)(k.a.Control,{type:"number",name:"price",isInvalid:this.state.invalidprice,min:"0",onChange:this.handleChange}),Object(n.jsx)(k.a.Control.Feedback,{type:"invalid",children:"Must be a positive number"})]}),Object(n.jsx)(k.a.Label,{column:!0,sm:"2",children:"\u20ac"})]}),Object(n.jsxs)(k.a.Group,{as:x.a,children:[Object(n.jsx)(k.a.Label,{column:!0,sm:"3",children:"Image URL"}),Object(n.jsxs)(f.a,{sm:"9",children:[Object(n.jsx)(k.a.Control,{type:"url",name:"imagefile",isInvalid:this.state.invalidimagefile,onChange:this.handleChange}),Object(n.jsx)(k.a.Control.Feedback,{type:"invalid",children:"Required"})]})]}),Object(n.jsxs)(k.a.Group,{as:x.a,children:[Object(n.jsx)(k.a.Label,{column:!0,sm:"2",children:"Screen"}),Object(n.jsxs)(f.a,{sm:"10",children:[Object(n.jsx)(k.a.Control,{type:"text",name:"screen",isInvalid:this.state.invalidscreen,onChange:this.handleChange}),Object(n.jsx)(k.a.Control.Feedback,{type:"invalid",children:"Required"})]})]}),Object(n.jsxs)(k.a.Group,{as:x.a,children:[Object(n.jsx)(k.a.Label,{column:!0,sm:"2",children:"Processor"}),Object(n.jsxs)(f.a,{sm:"10",children:[Object(n.jsx)(k.a.Control,{type:"text",name:"processor",isInvalid:this.state.invalidprocessor,onChange:this.handleChange}),Object(n.jsx)(k.a.Control.Feedback,{type:"invalid",children:"Required"})]})]}),Object(n.jsxs)(k.a.Group,{as:x.a,children:[Object(n.jsx)(k.a.Label,{column:!0,sm:"2",children:"Ram"}),Object(n.jsxs)(f.a,{sm:"8",children:[Object(n.jsx)(k.a.Control,{type:"number",isInvalid:this.state.invalidram,min:"0",name:"ram",onChange:this.handleChange}),Object(n.jsx)(k.a.Control.Feedback,{type:"invalid",children:"Must be a positive number"})]}),Object(n.jsx)(k.a.Label,{column:!0,sm:"2",children:"GB"})]}),Object(n.jsx)(k.a.Group,{children:Object(n.jsx)(m.a,{variant:"outline-success",type:"submit",onClick:this.handleSubmit,children:"Create"})})]})})]})})}}]),a}(s.Component),P=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={counter:0},n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n.charsCounter=n.charsCounter.bind(Object(h.a)(n)),n}return Object(o.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault();var t={};this.description.value&&(t.description=this.description.value),this.name.value&&(t.name=this.name.value),this.manufacturer.value&&(t.manufacturer=this.manufacturer.value),this.color.value&&(t.color=this.color.value),this.screen.value&&(t.screen=this.screen.value),this.price.value&&(t.price=this.price.value),this.processor.value&&(t.processor=this.processor.value),this.ram.value&&(t.ram=this.ram.value),this.image.value&&(t.imageFileName=this.image.value),this.props.updatePhone(this.props.phone.id,t)}},{key:"charsCounter",value:function(){var e=this.description.value.length;this.setState({counter:e})}},{key:"render",value:function(){var e=this;return Object(n.jsx)("div",{children:Object(n.jsxs)(p.a,{show:!0,onHide:this.props.handleClose,children:[Object(n.jsx)(p.a.Header,{closeButton:!0,children:Object(n.jsx)(p.a.Title,{children:"Update the phone information"})}),Object(n.jsx)(p.a.Body,{children:Object(n.jsxs)(k.a,{onSubmit:this.handleSubmit,children:[Object(n.jsxs)(k.a.Group,{as:x.a,children:[Object(n.jsx)(k.a.Label,{column:!0,sm:"2",children:"Name"}),Object(n.jsx)(f.a,{sm:"10",children:Object(n.jsx)(k.a.Control,{required:!0,type:"text",ref:function(t){return e.name=t},placeholder:this.props.phone.name})})]}),Object(n.jsxs)(k.a.Group,{as:x.a,children:[Object(n.jsx)(k.a.Label,{column:!0,sm:"3",children:"Manufacturer"}),Object(n.jsx)(f.a,{sm:"9",children:Object(n.jsx)(k.a.Control,{required:!0,type:"text",ref:function(t){return e.manufacturer=t},placeholder:this.props.phone.manufacturer})})]}),Object(n.jsxs)(k.a.Group,{children:[Object(n.jsx)(k.a.Label,{children:"Description:"}),Object(n.jsx)(k.a.Control,{required:!0,as:"textarea",rows:"5",ref:function(t){return e.description=t},onChange:this.charsCounter,placeholder:this.props.phone.description}),Object(n.jsxs)(k.a.Text,{muted:!0,children:[1234-this.state.counter," characters left"]})]}),Object(n.jsxs)(k.a.Group,{as:x.a,children:[Object(n.jsx)(k.a.Label,{column:!0,sm:"2",children:"Color"}),Object(n.jsx)(f.a,{sm:"10",children:Object(n.jsx)(k.a.Control,{required:!0,type:"text",ref:function(t){return e.color=t},placeholder:this.props.phone.color})})]}),Object(n.jsxs)(k.a.Group,{as:x.a,children:[Object(n.jsx)(k.a.Label,{column:!0,sm:"2",children:"Price"}),Object(n.jsx)(f.a,{sm:"8",children:Object(n.jsx)(k.a.Control,{required:!0,type:"text",ref:function(t){return e.price=t},placeholder:this.props.phone.price})}),Object(n.jsx)(k.a.Label,{column:!0,sm:"2",children:"\u20ac"})]}),Object(n.jsxs)(k.a.Group,{as:x.a,children:[Object(n.jsx)(k.a.Label,{column:!0,sm:"2",children:"Image"}),Object(n.jsx)(f.a,{sm:"10",children:Object(n.jsx)(k.a.Control,{required:!0,type:"text",ref:function(t){return e.image=t},placeholder:this.props.phone.imageFileName})})]}),Object(n.jsxs)(k.a.Group,{as:x.a,children:[Object(n.jsx)(k.a.Label,{column:!0,sm:"2",children:"Screen"}),Object(n.jsx)(f.a,{sm:"10",children:Object(n.jsx)(k.a.Control,{required:!0,type:"text",ref:function(t){return e.screen=t},placeholder:this.props.phone.screen})})]}),Object(n.jsxs)(k.a.Group,{as:x.a,children:[Object(n.jsx)(k.a.Label,{column:!0,sm:"2",children:"Processor"}),Object(n.jsx)(f.a,{sm:"10",children:Object(n.jsx)(k.a.Control,{required:!0,type:"text",ref:function(t){return e.processor=t},placeholder:this.props.phone.processor})})]}),Object(n.jsxs)(k.a.Group,{as:x.a,children:[Object(n.jsx)(k.a.Label,{column:!0,sm:"2",children:"Ram"}),Object(n.jsx)(f.a,{sm:"8",children:Object(n.jsx)(k.a.Control,{required:!0,type:"text",ref:function(t){return e.ram=t},placeholder:this.props.phone.ram})}),Object(n.jsx)(k.a.Label,{column:!0,sm:"2",children:"GB"})]}),Object(n.jsx)(k.a.Group,{children:Object(n.jsx)(m.a,{variant:"outline-success",onClick:this.handleSubmit,children:"Update"})})]})})]})})}}]),a}(s.Component),N=a(37),T=a(39),L=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(h.a)(n)),n.createPhone=n.createPhone.bind(Object(h.a)(n)),n.updatePhone=n.updatePhone.bind(Object(h.a)(n)),n.deletePhoneConfirmation=n.deletePhoneConfirmation.bind(Object(h.a)(n)),n.deletePhone=n.deletePhone.bind(Object(h.a)(n)),n.handleCloseConfirmation=n.handleCloseConfirmation.bind(Object(h.a)(n)),n}return Object(o.a)(a,[{key:"handleClick",value:function(e,t){this.props.handleClick(e,t)}},{key:"handleCloseConfirmation",value:function(){this.props.handleClick()}},{key:"displayText",value:function(e){return e.length<=200?e:e.substring(0,200)+" ..."}},{key:"createPhone",value:function(e){this.props.handleChangeOfState(null,e)}},{key:"updatePhone",value:function(e,t){this.props.handleChangeOfState(e,t)}},{key:"deletePhone",value:function(e){this.props.deletePhone(e)}},{key:"deletePhoneConfirmation",value:function(){this.props.deletePhoneConfirmed(this.props.selected)}},{key:"render",value:function(){var e,t,a=this;this.props.info?e=Object(n.jsx)(g,{phone:this.props.selected,handleClose:this.handleClick}):this.props.formCreate?e=Object(n.jsx)(S,{handleClose:this.handleClick,createPhone:this.createPhone}):this.props.formUpdate&&(e=Object(n.jsx)(P,{phone:this.props.selected,handleClose:this.handleClick,updatePhone:this.updatePhone})),this.props.confirm&&(t=Object(n.jsxs)(p.a,{show:!0,onHide:this.handleCloseConfirmation,children:[Object(n.jsx)(p.a.Header,{closeButton:!0,children:Object(n.jsx)(p.a.Title,{children:"Confirm your action please"})}),Object(n.jsx)(p.a.Body,{children:Object(n.jsx)("p",{children:"You are about to delete a phone. Are you sure?"})}),Object(n.jsxs)(p.a.Footer,{children:[" ",Object(n.jsx)(m.a,{onClick:function(){return a.deletePhoneConfirmation()},variant:"outline-success",children:"Yes, I'm sure."})]})]}));var s,r=this.props.phones.length;return s=0==r?Object(n.jsx)(O.a,{children:Object(n.jsx)(x.a,{children:Object(n.jsx)(f.a,{xs:8,sm:6,md:4,lg:3,className:"col-personalized",children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(x.a,{className:"card-img-personalized",children:Object(n.jsx)(v.a.Img,{src:"add.png",className:"phone-img"})}),Object(n.jsxs)(x.a,{className:"card-body-personalized",children:[Object(n.jsxs)(v.a.Body,{children:[Object(n.jsx)(v.a.Title,{children:"Add a new phone"}),Object(n.jsx)("div",{className:"line-card"}),Object(n.jsx)("br",{}),Object(n.jsx)(v.a.Text,{children:"Click here to add a new phone into the catalogue."})]}),Object(n.jsx)(v.a.Footer,{className:"card-footer-personalized",children:Object(n.jsx)(m.a,{variant:"outline-primary",className:"btn-add",size:"lg",onClick:function(){return a.props.handleClick(null,"create")},children:"Add phone"})})]})]})},-1)})}):Object(n.jsx)(O.a,{children:Object(n.jsx)(x.a,{children:Object(n.jsx)(C.a,{children:this.props.phones.map((function(e,t){return Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsx)(f.a,{xs:8,sm:6,md:4,lg:3,className:"col-personalized",children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(x.a,{className:"card-img-personalized",children:Object(n.jsx)(v.a.Img,{src:e.imageFileName,className:"phone-img"})}),Object(n.jsxs)(x.a,{className:"card-body-personalized",children:[Object(n.jsxs)(v.a.Body,{children:[Object(n.jsx)(v.a.Title,{children:e.name}),Object(n.jsx)("div",{className:"line-card"}),Object(n.jsx)(v.a.Subtitle,{children:e.manufacturer}),Object(n.jsx)("br",{}),Object(n.jsx)(v.a.Text,{children:a.displayText(e.description)})]}),Object(n.jsxs)(v.a.Footer,{className:"card-footer-personalized",children:[Object(n.jsxs)(m.a,{variant:"link",onClick:function(){return a.handleClick(e,"info")},children:[">"," More info"]}),Object(n.jsx)(m.a,{variant:"link",onClick:function(){return a.handleClick(e,"update")},children:Object(n.jsx)(N.a,{icon:T.a})}),Object(n.jsx)(m.a,{variant:"link",onClick:function(){return a.deletePhone(e.id)},children:Object(n.jsx)(N.a,{icon:T.b})})]})]})]})},t),t+1===r&&Object(n.jsx)(f.a,{xs:8,sm:6,md:4,lg:3,className:"col-personalized",children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(x.a,{className:"card-img-personalized",children:Object(n.jsx)(v.a.Img,{src:"add.png",className:"phone-img"})}),Object(n.jsxs)(x.a,{className:"card-body-personalized",children:[Object(n.jsxs)(v.a.Body,{children:[Object(n.jsx)(v.a.Title,{children:"Add a new phone"}),Object(n.jsx)("div",{className:"line-card"}),Object(n.jsx)("br",{}),Object(n.jsx)(v.a.Text,{children:"Click here to add a new phone into the catalogue."})]}),Object(n.jsx)(v.a.Footer,{className:"card-footer-personalized",children:Object(n.jsx)(m.a,{variant:"outline-primary",className:"btn-add",size:"lg",onClick:function(){return a.props.handleClick(null,"create")},children:"Add phone"})})]})]})},t+1)]})}))})})}),Object(n.jsxs)("div",{className:"catalogue",children:[Object(n.jsxs)("div",{className:"catalogue-header",children:[Object(n.jsx)("h1",{children:"Phone catalogue"}),Object(n.jsx)("div",{className:"line-title"}),Object(n.jsx)("p",{children:"Know more about our phones!"})]}),s,e,t]})}}]),a}(s.Component),F=a(85),G=a(88),I=a(78),w=(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SERVICE,window.location.href),U=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={phones:[],loading:null,selected:null,info:null,formCreate:null,formUpdate:null,delete:!1,error:!1,confirm:null},n.handleClick=n.handleClick.bind(Object(h.a)(n)),n.handleChangeOfState=n.handleChangeOfState.bind(Object(h.a)(n)),n.deletePhone=n.deletePhone.bind(Object(h.a)(n)),n.deletePhoneConfirmed=n.deletePhoneConfirmed.bind(Object(h.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),u.a.get(I(w,"/phones")).then((function(t){e.setState({loading:null,phones:t.data})})).catch((function(t){e.setState({loading:null,error:!0}),console.log(t)}))}},{key:"handleClick",value:function(e,t){switch(t){case"create":this.setState({formCreate:!0});break;case"info":this.setState({selected:e,info:!0});break;case"update":this.setState({selected:e,formUpdate:!0});break;default:this.setState({formCreate:null,formUpdate:null,info:null,confirm:null})}}},{key:"deletePhone",value:function(e){this.setState({selected:e,confirm:!0})}},{key:"deletePhoneConfirmed",value:function(e){var t,a=this,n=this.state.phones.slice();new FormData;this.setState({loading:!0,selected:null,confirm:null});for(var s=0;s<n.length;s++)if(n[s].id===e){t=s;break}u.a.delete(I(w,"/phones/",e.toString())).then((function(e){e.data,n.splice(t,1),a.setState({phones:n,loading:null})})).catch((function(e){a.setState({loading:null,error:!0}),console.log(e)}))}},{key:"handleChangeOfState",value:function(e,t){var a,n=this,s=this.state.phones.slice(),r=new FormData;this.setState({loading:!0,selected:null,formCreate:null,formUpdate:null});var i="";if(e){i=e;for(var c=0;c<s.length;c++)if(s[c].id===e){a=c;break}}else a=s.length,t.countPhones=s.length;r.append("body",JSON.stringify({phoneId:i,paramsToUpdate:t})),u.a.post(I(w,"/phones"),r,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){var r;null===(r=t.data)?(n.setState({loading:null}),alert("The phone you are trying to insert already exists.")):(e?(s[a].id=r[1][0].id,s[a].name=r[1][0].name,s[a].manufacturer=r[1][0].manufacturer,s[a].description=r[1][0].description,s[a].color=r[1][0].color,s[a].screen=r[1][0].screen,s[a].processor=r[1][0].processor,s[a].imageFileName=r[1][0].imageFileName,s[a].ram=r[1][0].ram,s[a].price=r[1][0].price):s.push(r),n.setState({phones:s,loading:null}))})).catch((function(e){n.setState({loading:null,error:!0}),console.log(e)}))}},{key:"render",value:function(){var e;return!0===this.state.loading?e=Object(n.jsx)("div",{className:"spinner",children:Object(n.jsx)(F.a,{animation:"border",role:"status",children:Object(n.jsx)("span",{className:"sr-only",children:"Loading..."})})}):this.state.error||(e=Object(n.jsxs)("div",{children:[Object(n.jsx)(L,{phones:this.state.phones,selected:this.state.selected,info:this.state.info,formCreate:this.state.formCreate,formUpdate:this.state.formUpdate,handleClick:this.handleClick,handleChangeOfState:this.handleChangeOfState,deletePhone:this.deletePhone,deletePhoneConfirmed:this.deletePhoneConfirmed,confirm:this.state.confirm}),Object(n.jsxs)("div",{className:"footer",children:[Object(n.jsx)("p",{children:"Irene Garc\xeda L\xf3pez"}),Object(n.jsx)("p",{children:"November 2020"})]})]})),Object(n.jsxs)("div",{children:[this.state.error&&Object(n.jsxs)(G.a,{variant:"danger",children:[Object(n.jsx)(G.a.Heading,{children:"Oh snap, there has been an error!"}),Object(n.jsx)("p",{children:"Error connecting to the server. Try again later."})]}),e]})}}]),a}(s.Component);c.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(U,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.15131399.chunk.js.map