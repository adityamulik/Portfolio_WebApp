(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{117:function(e,t,n){},118:function(e,t,n){},124:function(e,t,n){},153:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),o=n.n(a),i=n(8),s=n.n(i),r=(n(117),n(26)),l=n(10),d=n(33),j=(n(118),n(185)),m=n(37),u=n(188),p=n(189),b=n(191),h=n(199),x=n(82),f=n.n(x),g=n(200),O=n(190),w=n(187),k=Object(j.a)((function(e){return{root:{flexGrow:1},appbar:{backgroundColor:"white"},menuButton:{marginRight:e.spacing(2),color:"black"},menuitem:{color:"black"},flex:{flex:1},title:{flexGrow:1,justifyContent:"flex-right",marginLeft:"4px",marginTop:"4px"},navlink:{textDecoration:"none"},toolbarMargin:e.mixins.toolbar}})),v=Object(l.f)((function(e){var t=e.history,n=o.a.useState(null),a=Object(d.a)(n,2),i=a[0],s=a[1],l=Boolean(i),j=Object(m.a)(),x=Object(w.a)(j.breakpoints.down("sm")),v=k(),N=function(e){t.push(e),s(null)};return Object(c.jsxs)("div",{className:v.root,children:[Object(c.jsx)(u.a,{className:v.appbar,position:"fixed",elevation:0,children:Object(c.jsxs)(p.a,{className:v.headerClass,children:[Object(c.jsx)(O.a,{variant:"h4",className:v.title,children:Object(c.jsx)(r.b,{to:"/",style:{textDecoration:"none",color:"black"},children:"Aditya Mulik"})}),x?Object(c.jsxs)("div",{children:[Object(c.jsx)(b.a,{edge:"start",className:v.menuButton,color:"inherit","aria-label":"menu",onClick:function(e){s(e.currentTarget)},children:Object(c.jsx)(f.a,{})}),Object(c.jsx)("div",{className:"navbar-header",children:Object(c.jsxs)(h.a,{id:"menu-appbar",anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:function(){s(null)},children:[Object(c.jsx)(g.a,{className:v.menuitem,onClick:function(){return N("/")},children:"Home"}),Object(c.jsx)(g.a,{className:v.menuitem,onClick:function(){return N("/projects")},children:"My Work"}),Object(c.jsx)(g.a,{className:v.menuitem,onClick:function(){return N("/aboutme")},children:"About Me"}),Object(c.jsx)(g.a,{className:v.menuitem,onClick:function(){return N("/contact")},children:"Contact"})]})})]}):Object(c.jsxs)("div",{children:[Object(c.jsx)(r.b,{to:"/",className:"navlink",activeClassName:"is-active",exact:!0,children:"Home"}),Object(c.jsx)(r.b,{to:"/projects",className:"navlink",activeClassName:"is-active",style:{textDecoration:"none"},children:"My Work"}),Object(c.jsx)(r.b,{to:"/aboutme",className:"navlink",activeClassName:"is-active",style:{textDecoration:"none"},children:"About Me"}),Object(c.jsx)(r.b,{to:"/contact",className:"navlink",activeClassName:"is-active",style:{textDecoration:"none"},children:"Contact"})]})]})}),Object(c.jsx)("div",{className:v.toolbarMargin})]})})),N=(n(124),n(83)),y=n(84),C=n(48),A=n(198),S=n(192),T=n(156),B=n(85),I=n.n(B),F=n(86),M=n.n(F),R=Object(j.a)((function(e){return{app:{display:"flex",border:"none",alignItems:"center",width:"100%",justifyContent:"center",outline:0},modal:{position:"relative",display:"flex",overflowX:"auto",border:"none",boxShadow:"none",justifyContent:"center",marginTop:5,marginBottom:5,outline:0},modalcontainer:{position:"relative",outline:0},button:{display:"flex",alignItems:"center",justifyContent:"center",zIndex:1,position:"absolute",top:15,right:0,padding:"2px"},downloadPdf:{},closePdf:{"&:hover":{}}}})),W=function(e){var t=e.pdf,n=e.onCancel,a=e.visible,o=(e.type,e.color,R());return Object(c.jsx)("div",{className:o.app,children:Object(c.jsx)(A.a,{className:o.modal,open:a,onClose:n,maskClosable:!1,closeAfterTransition:!0,BackdropComponent:S.a,BackdropProps:{timeout:500},children:Object(c.jsx)(T.a,{in:a,children:Object(c.jsxs)("div",{className:o.modalcontainer,children:[Object(c.jsxs)("div",{className:o.button,children:[Object(c.jsxs)(b.a,{className:o.downloadPdf,onClick:function(){Object(N.saveAs)(t,"Aditya_Mulik_Resume.pdf")},children:[Object(c.jsx)(I.a,{"data-tip":"Download PDF"}),Object(c.jsx)(C.a,{})]}),Object(c.jsxs)(b.a,{className:o.closePdf,onClick:n,children:[Object(c.jsx)(M.a,{"data-tip":"Close"}),Object(c.jsx)(C.a,{})]})]}),Object(c.jsx)(y.a,{className:o.pdf,file:t,onDocumentError:function(e){console.error("pdf viewer error:",e)},onPageRenderSuccess:function(){console.log("test")}})]})})})})},D=n.p+"static/media/Aditya_Mulik_Resume.91d8e283.pdf",P=n.p+"static/media/aditya.cd853795.png",L=n(87),_=n.n(L),E=n(193),H=n(194),J=function(){var e=Object(m.a)(),t=Object(w.a)(e.breakpoints.down("sm")),n=Object(a.useState)(!1),i=Object(d.a)(n,2),s=i[0],r=i[1];return Object(c.jsx)(o.a.Fragment,{children:Object(c.jsx)("div",{style:{padding:20},children:Object(c.jsxs)(E.a,{container:!0,direction:"column",spacing:5,justify:"space-evenly",alignContent:"center",style:{margin:0,width:"100%"},children:[Object(c.jsx)(E.a,{item:!0,style:{textAlign:"center"},children:Object(c.jsx)("img",{src:P,alt:"profile-pic",className:"profile-pic"})}),Object(c.jsx)(E.a,{item:!0,children:Object(c.jsx)(O.a,{children:Object(c.jsx)(_.a,{onInit:function(e){e.typeString("Hi, I'm Aditya Mulik & I'm a Software Developer!").pauseFor(2e3).deleteChars(25).typeString("I'm a passionate programmer!").start()}})})}),Object(c.jsxs)(E.a,{item:!0,style:{textAlign:"center"},children:[Object(c.jsx)(W,{pdf:D,onCancel:function(){return r(!1)},visible:s}),Object(c.jsx)(H.a,{onClick:function(){t?window.open(D):r(!s)},variant:"contained",color:"primary",style:{margin:"10px"},children:"Resume"}),Object(c.jsx)(H.a,{onClick:function(){window.location.href="mailto:aditya.mulik@gmail.com"},variant:"contained",color:"primary",style:{margin:"10px"},children:"Email Me!"})]})]})})})},z=n(98),G=n(195),U=n(197),q=n(196),X=Object(j.a)({root:{minWidth:275,backgroundColor:"#fafafa"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),K=function(e){var t=X();t.bullet;return Object(c.jsxs)(G.a,{className:t.root,children:[Object(c.jsxs)(q.a,{children:[Object(c.jsx)(O.a,{className:t.title,color:"textSecondary",gutterBottom:!0,children:e.project}),Object(c.jsx)(O.a,{variant:"h5",component:"h2",children:e.project}),Object(c.jsx)(O.a,{className:t.pos,color:"textSecondary",children:"adjective"}),Object(c.jsxs)(O.a,{variant:"body2",component:"p",children:[e.description,Object(c.jsx)("br",{}),e.project]})]}),Object(c.jsx)(U.a,{children:Object(c.jsx)(H.a,{size:"small",onClick:function(){window.location.href="".concat(e.url)},children:"Demo"})})]})},Z=Object(j.a)((function(e){return{calendar:{justifyContent:"center"},cardItem:{minWidth:275,float:"left",marginRight:10},card:{minWidth:275,float:"left",marginRight:10}}})),Q=function(){var e=Z();return Object(c.jsxs)(E.a,{container:!0,direction:"row",justify:"center",children:[Object(c.jsxs)(E.a,{item:!0,className:e.calendar,xs:11,sm:9,md:8,children:[Object(c.jsx)(O.a,{}),Object(c.jsx)(z.a,{username:"adityamulik",className:e.calendar,children:Object(c.jsx)(C.a,{delayShow:50,html:!0})})]}),Object(c.jsx)(E.a,{item:!0,direction:"row",justify:"center",alignItems:"center",className:e.cardItem,xs:9,sm:4,md:4,children:Object(c.jsx)(K,{style:{maxHeight:"300px"},project:"Web Scrapping",description:"A simple web scrapping application created using Python.          It scrapes data from a website of prices of a product          and as soon as the price reduces to a certain limit defined,          it emails the user about the updated price."})}),Object(c.jsx)(E.a,{item:!0,direction:"row",justify:"center",alignItems:"center",className:e.cardItem,xs:9,sm:4,md:4,children:Object(c.jsx)(K,{className:e.card,project:"GeoLocation API App",description:"A Geolocation app built using Django Web Framework,          it use's mapquest's API which returns the co-ordinates          of the location uploaded in a excel csv file.",url:"https://geolocationapidjangoapp.herokuapp.com/"})}),Object(c.jsx)(E.a,{item:!0,direction:"row",justify:"center",alignItems:"center",className:e.cardItem,xs:9,sm:4,md:4,children:Object(c.jsx)(K,{project:"Task Management",description:"Task Management Application built using Python's Django Web Framework.          Basic CRUD application functionality to create projects and tasks. Using          Django REST Framework, APIs exposed of the application which are consumed          by ReactJS on the frontend.",url:"https://django-task-management-app.herokuapp.com"})}),Object(c.jsx)(E.a,{item:!0,direction:"row",justify:"center",alignItems:"center",className:e.cardItem,xs:9,sm:4,md:4,children:Object(c.jsx)(K,{project:"React Blog",description:"A Blog Web app created using the MERN stack.          Application created using NodeJS and ExpressJS on the backend,          ReactJS for the frontend and MongoDB to persist data.          Application is hosted lived on AWS.",url:"http://ec2-52-14-127-238.us-east-2.compute.amazonaws.com/"})})]})},V=n(99),Y=n(34),$=n(6),ee="1730469387113255",te="fe56d6b0e8bcb55aa9aefd134871beac",ne=function(e){return Object(c.jsx)(E.a,Object(V.a)({item:!0,xs:12,sm:5,md:4},e))},ce=Object($.a)((function(e){return{root:{flexGrowth:1},insta:{padding:e.spacing(5),justify:"spaced-between"}}}))((function(e){var t=e.classes;return Object(c.jsxs)("div",{children:[Object(c.jsxs)(E.a,{container:!0,children:[Object(c.jsx)(ne,{className:t.insta,children:Object(c.jsx)(Y.a,{className:"insta-embed",url:"https://www.instagram.com/p/BtqgBFxnLEZ/",clientAccessToken:ee+"|"+te,maxWidth:320,hideCaption:!0,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){console.log("loaded")},onSuccess:function(){console.log("success")},onAfterRender:function(){console.log("rendered")},onFailure:function(){}})}),Object(c.jsx)(ne,{className:t.insta,children:Object(c.jsx)(Y.a,{className:"insta-embed",url:"https://www.instagram.com/p/B2_27CbnfFJ/",clientAccessToken:ee+"|"+te,maxWidth:320,hideCaption:!0,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){console.log("loaded")},onSuccess:function(){console.log("success")},onAfterRender:function(){console.log("rendered")},onFailure:function(){}})}),Object(c.jsx)(ne,{className:t.insta,children:Object(c.jsx)(Y.a,{className:"insta-embed",url:"https://www.instagram.com/p/B2HfJo1HoXh/",clientAccessToken:ee+"|"+te,maxWidth:320,hideCaption:!0,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){console.log("loaded")},onSuccess:function(){console.log("success")},onAfterRender:function(){console.log("rendered")},onFailure:function(){}})}),Object(c.jsx)(ne,{className:t.insta,children:Object(c.jsx)(Y.a,{className:"insta-embed",url:"https://www.instagram.com/p/BhhzCPlFB_a/",clientAccessToken:ee+"|"+te,maxWidth:320,hideCaption:!0,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){console.log("loaded")},onSuccess:function(){console.log("success")},onAfterRender:function(){console.log("rendered")},onFailure:function(){}})}),Object(c.jsx)(ne,{className:t.insta,children:Object(c.jsx)(Y.a,{className:"insta-embed",url:"https://www.instagram.com/p/5UwtU8g1fC/",clientAccessToken:ee+"|"+te,maxWidth:320,hideCaption:!0,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){console.log("loaded")},onSuccess:function(){console.log("success")},onAfterRender:function(){console.log("rendered")},onFailure:function(){}})}),Object(c.jsx)(ne,{className:t.insta,children:Object(c.jsx)(Y.a,{className:"insta-embed",url:"https://www.instagram.com/p/xbmd8KA1Wy/",clientAccessToken:ee+"|"+te,maxWidth:320,hideCaption:!0,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){console.log("loaded")},onSuccess:function(){console.log("success")},onAfterRender:function(){console.log("rendered")},onFailure:function(){}})})]}),Object(c.jsx)("p",{children:"Twitter Feed Goes Here"})]})})),ae=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("p",{children:"Contact Aditya Mulik."})})},oe=n(94),ie=n.n(oe),se=n(95),re=n.n(se),le=n(96),de=n.n(le),je=n(97),me=n.n(je),ue=Object(j.a)((function(e){return{text:{padding:e.spacing(2,2,0)},paper:{paddingBottom:50},icons:{marginLeft:e.spacing(2),cursor:"pointer",transition:"all 0.2s"},subheader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0,backgroundColor:"white"},grow:{flexGrow:1},customToolbar:{justifyContent:"center",minHeight:36,color:e.palette.text.primary},toolbarMargin:e.mixins.toolbar}})),pe=function(){var e=ue();return Object(c.jsxs)(o.a.Fragment,{children:[Object(c.jsx)(u.a,{position:"fixed",className:e.appBar,elevation:0,children:Object(c.jsxs)(p.a,{className:e.customToolbar,children:[Object(c.jsx)(ie.a,{onClick:function(){return window.open("https://www.github.com/adityamulik","_blank")},className:e.icons}),Object(c.jsx)(re.a,{onClick:function(){return window.open("https://www.linkedin.com/in/adityamulik","_blank")},className:e.icons}),Object(c.jsx)(de.a,{onClick:function(){return window.open("https://www.twitter.com/adityamulik","_blank")},target:"_blank",className:e.icons}),Object(c.jsx)(me.a,{onClick:function(){return window.open("https://www.facebook.com/mulikaditya","_blank")},className:e.icons})]})}),Object(c.jsx)("div",{className:e.toolbarMargin})]})},be=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("p",{children:"Page not found (404 Error)"})})},he=function(){return Object(c.jsxs)(r.a,{children:[Object(c.jsx)(v,{}),Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{path:"/",component:J,exact:!0}),Object(c.jsx)(l.a,{path:"/projects",component:Q}),Object(c.jsx)(l.a,{path:"/aboutme",component:ce}),Object(c.jsx)(l.a,{path:"/contact",component:ae}),Object(c.jsx)(l.a,{component:be})]}),Object(c.jsx)(pe,{})]})},xe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,201)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};s.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(he,{})}),document.getElementById("root")),xe()}},[[153,1,2]]]);
//# sourceMappingURL=main.3525dea1.chunk.js.map