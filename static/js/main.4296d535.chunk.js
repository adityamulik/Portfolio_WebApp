(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{116:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){},153:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),o=n.n(a),i=n(8),s=n.n(i),r=n(26),l=n(9),d=n(32),j=n(185),p=n(53),m=(n(116),n(188)),b=n(189),u=n(191),x=n(197),h=n(81),f=n.n(h),O=n(199),g=n(190),w=n(187),k=Object(j.a)((function(e){return{root:{flexGrow:1},appbar:{backgroundColor:"white"},menuButton:{marginRight:e.spacing(2),color:"black"},menuitem:{color:"black"},flex:{flex:1},title:{flexGrow:1,justifyContent:"flex-right",marginLeft:"4px",marginTop:"4px"},navlink:{textDecoration:"none"},toolbarMargin:e.mixins.toolbar}})),N=Object(l.f)((function(e){var t=e.history,n=o.a.useState(null),a=Object(d.a)(n,2),i=a[0],s=a[1],l=Boolean(i),j=Object(p.a)(),h=Object(w.a)(j.breakpoints.down("sm")),N=k(),v=function(e){t.push(e),s(null)};return Object(c.jsxs)("div",{className:N.root,children:[Object(c.jsx)(m.a,{className:N.appbar,position:"fixed",elevation:0,children:Object(c.jsxs)(b.a,{className:N.headerClass,children:[Object(c.jsx)(g.a,{variant:"h4",className:N.title,children:Object(c.jsx)(r.b,{to:"/",style:{textDecoration:"none",color:"black"},children:"Aditya Mulik"})}),h?Object(c.jsxs)("div",{children:[Object(c.jsx)(u.a,{edge:"start",className:N.menuButton,color:"inherit","aria-label":"menu",onClick:function(e){s(e.currentTarget)},children:Object(c.jsx)(f.a,{})}),Object(c.jsx)("div",{className:"navbar-header",children:Object(c.jsxs)(x.a,{id:"menu-appbar",anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:function(){s(null)},children:[Object(c.jsx)(O.a,{className:N.menuitem,onClick:function(){return v("/")},children:"Home"}),Object(c.jsx)(O.a,{className:N.menuitem,onClick:function(){return v("/aboutme")},children:"About Me"}),Object(c.jsx)(O.a,{className:N.menuitem,onClick:function(){return v("/projects")},children:"My Work"}),Object(c.jsx)(O.a,{className:N.menuitem,onClick:function(){return v("/contact")},children:"Contact"})]})})]}):Object(c.jsxs)("div",{children:[Object(c.jsx)(r.b,{to:"/",className:"navlink",activeClassName:"is-active",exact:!0,children:"Home"}),Object(c.jsx)(r.b,{to:"/aboutme",className:"navlink",activeClassName:"is-active",style:{textDecoration:"none"},children:"About Me"}),Object(c.jsx)(r.b,{to:"/projects",className:"navlink",activeClassName:"is-active",style:{textDecoration:"none"},children:"My Work"}),Object(c.jsx)(r.b,{to:"/contact",className:"navlink",activeClassName:"is-active",style:{textDecoration:"none"},children:"Contact"})]})]})}),Object(c.jsx)("div",{className:N.toolbarMargin})]})})),v=(n(122),n(192)),C=n(82),y=n.n(C),A=n(193),S=n(198),T=n(83),B=(n(123),n(84)),M=n.p+"static/media/Aditya_Mulik_Resume.91d8e283.pdf",F=n(85),W=n.n(F),R=n(86),D=n.n(R),L=Object(j.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),I=function(e){var t=e.pdf,n=e.onCancel,a=e.visible,o=L();return Object(c.jsx)(S.a,{className:o.modal,open:a,onClose:n,maskClosable:!1,style:{top:20},width:"50%",children:Object(c.jsxs)("div",{className:"pdfWrapper",children:[Object(c.jsx)(T.a,{className:"pdf",file:t,onDocumentError:function(e){console.error("pdf viewer error:",e)}}),Object(c.jsxs)(u.a,{className:"downloadPdf",onClick:function(){Object(B.saveAs)(t,"Aditya_Mulik_Resume.pdf")},children:[Object(c.jsx)(W.a,{}),Object(c.jsx)("p",{className:"tooltip-download",children:"Download"})]}),Object(c.jsxs)(u.a,{className:"closePdf",onClick:n,children:[Object(c.jsx)(D.a,{}),Object(c.jsx)("p",{className:"tooltip-close",children:"Close"})]})]})})},_=n.p+"static/media/aditya.cd853795.png",P=function(){var e=Object(p.a)(),t=Object(w.a)(e.breakpoints.down("sm")),n=Object(a.useState)(!1),i=Object(d.a)(n,2),s=i[0],r=i[1];return Object(c.jsx)(o.a.Fragment,{children:Object(c.jsx)("div",{style:{padding:20},children:Object(c.jsxs)(v.a,{container:!0,xs:12,sm:12,md:12,direction:"column",spacing:5,justify:"space-evenly",alignContent:"center",style:{margin:0,width:"100%"},children:[Object(c.jsx)(v.a,{item:!0,style:{textAlign:"center"},children:Object(c.jsx)("img",{src:_,alt:"profile-pic",className:"profile-pic"})}),Object(c.jsx)(v.a,{item:!0,children:Object(c.jsx)(g.a,{children:Object(c.jsx)(y.a,{onInit:function(e){e.typeString("Hi, I'm Aditya Mulik & I'm a Software Developer!").pauseFor(2e3).deleteChars(25).typeString("I'm a passionate programmer!").start()}})})}),Object(c.jsxs)(v.a,{item:!0,style:{textAlign:"center"},children:[Object(c.jsx)(I,{pdf:M,onCancel:function(){return r(!1)},visible:s}),Object(c.jsx)(A.a,{onClick:function(){t?window.open(M):r(!s)},variant:"contained",color:"primary",style:{margin:"10px"},children:"Resume"}),Object(c.jsx)(A.a,{variant:"contained",color:"primary",style:{margin:"10px"},children:"Email Me!"})]})]})})})},E=n(98),H=n(97),J=n(194),z=n(196),G=n(195),U=Object(j.a)({root:{minWidth:275,backgroundColor:"#fafafa"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),q=function(e){var t=U();t.bullet;return Object(c.jsxs)(J.a,{className:t.root,children:[Object(c.jsxs)(G.a,{children:[Object(c.jsx)(g.a,{className:t.title,color:"textSecondary",gutterBottom:!0,children:e.project}),Object(c.jsx)(g.a,{variant:"h5",component:"h2",children:e.project}),Object(c.jsx)(g.a,{className:t.pos,color:"textSecondary",children:"adjective"}),Object(c.jsxs)(g.a,{variant:"body2",component:"p",children:[e.description,Object(c.jsx)("br",{}),e.project]})]}),Object(c.jsx)(z.a,{children:Object(c.jsxs)(A.a,{size:"small",placeholder:"Demo: ",children:["Demo: ",e.application]})})]})},K=function(){return Object(c.jsxs)(v.a,{container:!0,children:[Object(c.jsx)(v.a,{item:!0,xs:12,sm:12,md:12,children:Object(c.jsx)(E.a,{username:"adityamulik",children:Object(c.jsx)(H.a,{delayShow:50,html:!0})})}),Object(c.jsxs)(v.a,{item:!0,xs:3,sm:5,md:3,children:[Object(c.jsx)(q,{project:"Web Scrapping",description:"A simple web scrapping application created using Python.         It scrapes data"}),Object(c.jsx)(q,{project:"GeoLocation API App",description:"A simple web scrapping application created using Python.         It scrapes data"}),Object(c.jsx)(q,{project:"Task Management",description:"A simple web scrapping application created using Python.         It scrapes data"}),Object(c.jsx)(q,{project:"React Blog",description:"A Blog Web app created using the MERN stack.        Application created using NodeJS and ExpressJS on the backend,        ReactJS for the frontend and MongoDB to persist data.        Application is hosted lived on AWS.",application:"http://ec2-52-14-127-238.us-east-2.compute.amazonaws.com/"})]})]})},X=n(99),Z=n(33),Q=n(6),V="1730469387113255",Y="fe56d6b0e8bcb55aa9aefd134871beac",$=function(e){return Object(c.jsx)(v.a,Object(X.a)({item:!0,xs:12,sm:5,md:4},e))},ee=Object(Q.a)((function(e){return{root:{flexGrowth:1},insta:{padding:e.spacing(5),justify:"spaced-between"}}}))((function(e){var t=e.classes;return Object(c.jsxs)("div",{children:[Object(c.jsxs)(v.a,{container:!0,children:[Object(c.jsx)($,{className:t.insta,children:Object(c.jsx)(Z.a,{className:"insta-embed",url:"https://www.instagram.com/p/BtqgBFxnLEZ/",clientAccessToken:V+"|"+Y,maxWidth:320,hideCaption:!0,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){console.log("loaded")},onSuccess:function(){console.log("success")},onAfterRender:function(){console.log("rendered")},onFailure:function(){}})}),Object(c.jsx)($,{className:t.insta,children:Object(c.jsx)(Z.a,{className:"insta-embed",url:"https://www.instagram.com/p/B2_27CbnfFJ/",clientAccessToken:V+"|"+Y,maxWidth:320,hideCaption:!0,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){console.log("loaded")},onSuccess:function(){console.log("success")},onAfterRender:function(){console.log("rendered")},onFailure:function(){}})}),Object(c.jsx)($,{className:t.insta,children:Object(c.jsx)(Z.a,{className:"insta-embed",url:"https://www.instagram.com/p/B2HfJo1HoXh/",clientAccessToken:V+"|"+Y,maxWidth:320,hideCaption:!0,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){console.log("loaded")},onSuccess:function(){console.log("success")},onAfterRender:function(){console.log("rendered")},onFailure:function(){}})}),Object(c.jsx)($,{className:t.insta,children:Object(c.jsx)(Z.a,{className:"insta-embed",url:"https://www.instagram.com/p/BhhzCPlFB_a/",clientAccessToken:V+"|"+Y,maxWidth:320,hideCaption:!0,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){console.log("loaded")},onSuccess:function(){console.log("success")},onAfterRender:function(){console.log("rendered")},onFailure:function(){}})}),Object(c.jsx)($,{className:t.insta,children:Object(c.jsx)(Z.a,{className:"insta-embed",url:"https://www.instagram.com/p/5UwtU8g1fC/",clientAccessToken:V+"|"+Y,maxWidth:320,hideCaption:!0,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){console.log("loaded")},onSuccess:function(){console.log("success")},onAfterRender:function(){console.log("rendered")},onFailure:function(){}})}),Object(c.jsx)($,{className:t.insta,children:Object(c.jsx)(Z.a,{className:"insta-embed",url:"https://www.instagram.com/p/xbmd8KA1Wy/",clientAccessToken:V+"|"+Y,maxWidth:320,hideCaption:!0,containerTagName:"div",protocol:"",injectScript:!0,onLoading:function(){console.log("loaded")},onSuccess:function(){console.log("success")},onAfterRender:function(){console.log("rendered")},onFailure:function(){}})})]}),Object(c.jsx)("p",{children:"Twitter Feed Goes Here"})]})})),te=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("p",{children:"Contact Aditya Mulik."})})},ne=(n(152),n(93)),ce=n.n(ne),ae=n(94),oe=n.n(ae),ie=n(95),se=n.n(ie),re=n(96),le=n.n(re),de=Object(j.a)((function(e){return{text:{padding:e.spacing(2,2,0)},paper:{paddingBottom:50},icons:{marginLeft:e.spacing(2),cursor:"pointer",transition:"all 0.2s"},subheader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0,backgroundColor:"white"},grow:{flexGrow:1},customToolbar:{justifyContent:"center",minHeight:36,color:e.palette.text.primary},toolbarMargin:e.mixins.toolbar}})),je=function(){var e=de();return Object(c.jsx)(o.a.Fragment,{children:Object(c.jsx)(m.a,{position:"fixed",className:e.appBar,elevation:0,children:Object(c.jsxs)(b.a,{className:e.customToolbar,children:[Object(c.jsx)(ce.a,{onClick:function(){return window.open("https://www.github.com/adityamulik","_blank")},className:e.icons}),Object(c.jsx)(oe.a,{onClick:function(){return window.open("https://www.linkedin.com/in/adityamulik","_blank")},className:e.icons}),Object(c.jsx)(se.a,{onClick:function(){return window.open("https://www.twitter.com/adityamulik","_blank")},target:"_blank",className:e.icons}),Object(c.jsx)(le.a,{onClick:function(){return window.open("https://www.facebook.com/mulikaditya","_blank")},className:e.icons})]})})})},pe=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("p",{children:"Page not found (404 Error)"})})},me=function(){return Object(c.jsxs)(r.a,{children:[Object(c.jsx)(N,{}),Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{path:"/",component:P,exact:!0}),Object(c.jsx)(l.a,{path:"/projects",component:K}),Object(c.jsx)(l.a,{path:"/aboutme",component:ee}),Object(c.jsx)(l.a,{path:"/contact",component:te}),Object(c.jsx)(l.a,{component:pe})]}),Object(c.jsx)(je,{})]})},be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,200)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),o(e),i(e)}))};s.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(me,{})}),document.getElementById("root")),be()}},[[153,1,2]]]);
//# sourceMappingURL=main.4296d535.chunk.js.map