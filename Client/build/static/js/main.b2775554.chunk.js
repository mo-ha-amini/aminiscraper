(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{26:function(e,t,c){},52:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c(22),n=c.n(r),s=(c(26),c(15)),i=c(5),o=c(18),l=c(0),d=function(e){var t=e.history,c=Object(a.useState)(""),r=Object(o.a)(c,2),n=r[0],s=r[1];return Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n.trim()?t.push("/search/".concat(n)):t.push("/")},class:"header_search_form clearfix",children:[Object(l.jsx)("input",{type:"search",required:"required",class:"header_search_input",placeholder:"Search for jobs...",onChange:function(e){return s(e.target.value)}}),Object(l.jsx)("button",{type:"submit",class:"header_search_button trans_300",value:"Submit",children:Object(l.jsx)("img",{src:"https://res.cloudinary.com/dxfq3iotg/image/upload/v1560918770/search.png",alt:""})})]})},j=(c(52),function(){return Object(l.jsx)(a.Fragment,{children:Object(l.jsx)("div",{class:"super_container",children:Object(l.jsxs)("header",{class:"header",children:[Object(l.jsx)("div",{class:"top_bar",children:Object(l.jsx)("div",{class:"container",children:Object(l.jsx)("div",{class:"row",children:Object(l.jsxs)("div",{class:"col d-flex flex-row",children:[Object(l.jsxs)("div",{class:"top_bar_contact_item",children:[Object(l.jsx)("div",{class:"top_bar_icon "}),Object(l.jsx)("a",{href:"/",children:"MohammadHasan Amini"})]}),Object(l.jsxs)("div",{class:"top_bar_contact_item",children:[Object(l.jsx)("div",{class:"top_bar_icon"}),Object(l.jsx)("a",{href:"/",children:"StudentNumber : 976003195"})]})]})})})}),Object(l.jsx)("div",{class:"header_main",children:Object(l.jsx)("div",{class:"container",children:Object(l.jsxs)("div",{class:"row",children:[Object(l.jsx)("div",{class:"col-lg-2 col-sm-3 col-3 order-1",children:Object(l.jsx)("div",{class:"logo_container",children:Object(l.jsx)("div",{class:"logo",children:Object(l.jsx)("a",{href:"/",children:"Scraper"})})})}),Object(l.jsx)("div",{class:"\r col-lg-6 col-12\r order-lg-2 order-3\r text-lg-left text-right\r ",children:Object(l.jsx)("div",{class:"header_search ",children:Object(l.jsx)("div",{class:"header_search_content",children:Object(l.jsx)("div",{class:"header_search_form_container",children:Object(l.jsx)(i.a,{render:function(e){var t=e.history;return Object(l.jsx)(d,{history:t})}})})})})})]})})})]})})})}),b=function(){return Object(l.jsx)(a.Fragment,{children:Object(l.jsx)("footer",{className:"py-1",children:Object(l.jsx)("p",{className:"text-center mt-1",children:"Mo.Ha.Amini   2021-2022, All Rights Reserved"})})})},u=c(40),O=c.n(u),p=c(41),h=c.n(p),x=function(){return Object(l.jsx)("div",{className:"d-flex justify-content-center m-5",children:Object(l.jsx)(h.a,{className:"m-5",type:"spinningBubbles",color:"#0e8ce4",height:"10%",width:"10%"})})},m=c(12),f=c(6),v=c.n(f),g=c(13),y=c(14),_=c.n(y),D="ALL_JOBS_REQUEST",E="ALL_JOBS_SUCCESS",S="ALL_JOBS_FAIL",w="JOB_DETAILS_REQUEST",L="JOB_DETAILS_SUCCESS",N="JOB_DETAILS_FAIL",A="DELETE_ALLJOB_REQUEST",T="DELETE_ALLJOB_SUCCESS",C="DELETE_ALLJOB_RESET",J="DELETE_ALLJOB_FAIL",P="SCRAPEDATA_REQUEST",R="SCRAPEDATA_SUCCESS",k="SCRAPEDATA_RESET",B="SCRAPEDATA_FAIL",U="DOWNLOAD_JOB_REQUEST",F="DOWNLOAD_JOB_SUCCESS",I="DOWNLOAD_JOB_FAIL",W="DOWNLOAD_JOB_RESET",Q="DOWNLOAD_PROJECT_REQUEST",q="DOWNLOAD_PROJECT_SUCCESS",M="DOWNLOAD_PROJECT_FAIL",G="DOWNLOAD_PROJECT_RESET",H="CLEAR_ERRORS";var z=function(e){var t=e.job;return Object(l.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-3 my-3",children:Object(l.jsxs)("div",{className:"card p-4 rounded",children:[Object(l.jsx)("img",{className:"card-img-top pic-size",src:t.imageUrl,alt:"pimg"}),Object(l.jsxs)("div",{className:"card-body d-flex flex-column",children:[Object(l.jsx)("h5",{className:"card-title",children:Object(l.jsx)(s.b,{to:"/jobs/".concat(t._id),children:t.title})}),Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"ratings mt-auto",children:[Object(l.jsx)("div",{className:"rating-outer",children:Object(l.jsx)("div",{className:"rating-inner"})}),Object(l.jsx)("span",{id:"no_of_reviews"}),Object(l.jsxs)("p",{className:"card-text",children:["\u0646\u0648\u0639 \u0622\u06af\u0647\u06cc : ",t.type]}),Object(l.jsxs)("p",{className:"card-text",children:[t.company,t.expireDay]}),Object(l.jsxs)("p",{className:"card-text",children:[t.city,t.deadline]}),Object(l.jsx)("p",{className:"card-text",children:t.JobType}),Object(l.jsxs)("p",{className:"card-text",children:["\u0645\u0647\u0627\u0631\u062a \u0647\u0627\u06cc \u0645\u0648\u0631\u062f \u0646\u06cc\u0627\u0632  : ",t.skills[0],"-",t.skills[1],"-",t.skills[2]]}),Object(l.jsxs)("p",{className:"card-text",children:["\u062d\u0642\u0648\u0642/\u0628\u0648\u062f\u062d\u0647  :",t.salary,t.budget]}),Object(l.jsx)(s.b,{to:"/jobs/".concat(t._id),id:"view_btn",className:"btn btn-primary",children:"\u0645\u0634\u0627\u0647\u062f\u0647"})]})]})]})})},K=function(e){var t=e.match,c=Object(a.useState)(1),r=Object(o.a)(c,2),n=r[0],s=r[1],i=Object(m.b)(),d=Object(m.c)((function(e){return e.jobs})),j=d.loading,b=d.jobs,u=d.jobsCount,p=d.resPerPage,h=Object(m.c)((function(e){return e.scrapeData})),f=h.scrapeLoading,y=h.isScraped,w=Object(m.c)((function(e){return e.deleteAlldata})),L=w.Dloading,N=w.isDeleted,A=Object(m.c)((function(e){return e.downloadJob})),T=A.JDLoading,J=A.isDownloaded,H=Object(m.c)((function(e){return e.downloadPro})),K=H.PDLoading,V=H.isDownloaded,X=t.params.keyword;Object(a.useEffect)((function(){i(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,c=arguments.length>2?arguments[2]:void 0;return function(){var a=Object(g.a)(v.a.mark((function a(r){var n,s,i;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r({type:D}),n="/data?keyword=".concat(e,"&page=").concat(t),c&&(n="/data?keyword=".concat(e,"&page=").concat(t,"&type=").concat(c)),a.next=6,_.a.get(n);case 6:s=a.sent,i=s.data,r({type:E,payload:i}),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(0),r({type:S,payload:a.t0.response.data.message});case 14:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}()}(X,n)),y&&i({type:k}),N&&i({type:C}),J&&i({type:W}),V&&i({type:G})}),[i,n,X,y,N,J,V]);var Y=Object(a.useState)(""),Z=Object(o.a)(Y,2),$=Z[0],ee=Z[1];function te(){i(function(){var e=Object(g.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t({type:U}),_()({url:"/download/jobexcel",method:"GET",responseType:"blob"}).then((function(e){var t=window.URL.createObjectURL(new Blob([e.data])),c=document.createElement("a");c.href=t,c.setAttribute("download","job.csv"),document.body.appendChild(c),c.click()})),t({type:F})}catch(c){t({type:I,payload:c.response.data.message})}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}function ce(){i(function(){var e=Object(g.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t({type:Q}),_()({url:"/download/proexcel",method:"GET",responseType:"blob"}).then((function(e){var t=window.URL.createObjectURL(new Blob([e.data])),c=document.createElement("a");c.href=t,c.setAttribute("download","project.csv"),document.body.appendChild(c),c.click()})),t({type:q})}catch(c){t({type:M,payload:c.response.data.message})}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}return Object(l.jsx)(a.Fragment,{children:j||f||L||T||K?Object(l.jsx)(x,{}):Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)("hr",{}),Object(l.jsxs)("h5",{children:["count : ",u]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("form",{onSubmit:function(){i(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(){var t=Object(g.a)(v.a.mark((function t(c){var a,r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:P}),t.next=4,_.a.get("/scrapdata/".concat(e));case 4:return t.next=6,_.a.get("/data");case 6:a=t.sent,r=a.data,c({type:R,payload:r}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),c({type:B,payload:t.t0.response.data.message});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}($))},class:"clearfix mb-2 mt-2",children:[Object(l.jsx)("label",{className:"mr-2",for:"ScapeInput",children:"Number of page : "}),Object(l.jsx)("input",{className:"pl-2",type:"number",min:"1",id:"ScapeInput",required:"required",placeholder:"page",onChange:function(e){return ee(e.target.value)}}),Object(l.jsxs)("button",{type:"submit",class:"btn btn-primary ml-2",value:"Submit",children:["Scrape ",Object(l.jsx)("i",{className:"fa fa-file"})]})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h5",{className:"ml-2",children:"from jobinja.ir and karlancer.com"}),Object(l.jsx)("hr",{})]}),Object(l.jsxs)("button",{className:"btn btn-success ml-2 ",onClick:function(){return te()},disabled:!u||0===u,children:["Download jobs csv ",Object(l.jsx)("i",{className:"fa fa-file-excel-o"})]}),Object(l.jsxs)("button",{className:"btn btn-success ml-2 ",onClick:function(){return ce()},disabled:!u||0===u,children:["Download Projects csv ",Object(l.jsx)("i",{className:"fa fa-file-excel-o"})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("section",{id:"jobs",className:"container mt-5",children:Object(l.jsx)("div",{className:"row",children:b&&b.map((function(e){return Object(l.jsx)(z,{job:e},e._id)}))})}),Object(l.jsx)("div",{className:"d-flex justify-content-center mt-5",children:Object(l.jsx)(O.a,{activePage:n,itemsCountPerPage:p,totalItemsCount:u,onChange:function(e){s(e)},nextPageText:">",prevPageText:"<",firstPageText:"First",lastPageText:"Last",itemClass:"page-item",linkClass:"page-link"})})]})})},V=c(42),X=function(e){var t=e.title;return Object(l.jsx)(V.a,{children:Object(l.jsx)("title",{children:"".concat(t," - MhaminiScraper")})})},Y=function(e){var t=e.match,c=Object(m.b)(),r=Object(m.c)((function(e){return e.jobDetails})),n=r.loading,s=r.job;return Object(a.useEffect)((function(){var e;c((e=t.params.id,function(){var t=Object(g.a)(v.a.mark((function t(c){var a,r;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:w}),t.next=4,_.a.get("/data/".concat(e));case 4:a=t.sent,r=a.data,c({type:L,payload:r.job}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),c({type:N,payload:t.t0.response.data.message});case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()))}),[c,t.params.id]),Object(l.jsx)(a.Fragment,{children:n?Object(l.jsx)(x,{}):Object(l.jsxs)(a.Fragment,{children:[Object(l.jsx)(X,{title:s.title}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{className:"row d-flex justify-content-center",children:Object(l.jsxs)("div",{className:"col-12 col-lg-5 mt-5",children:[Object(l.jsx)("img",{className:"w-40 text-center",src:s.imageUrl,alt:s.title}),Object(l.jsx)("hr",{}),Object(l.jsx)("h3",{children:s.title}),Object(l.jsxs)("p",{id:"product_id",children:[" (\u0634\u063a\u0644 \u06cc\u0627 \u067e\u0631\u0648\u0698\u0647)# ",s._id]}),Object(l.jsx)("hr",{}),Object(l.jsxs)("p",{id:"product_price",children:[s.company,s.expireDay]}),Object(l.jsx)("hr",{}),Object(l.jsx)("p",{id:"product_price",children:Object(l.jsxs)("p",{className:"card-text",children:[s.city,s.deadline]})}),Object(l.jsx)("hr",{}),Object(l.jsx)("p",{id:"product_price",children:Object(l.jsx)("p",{className:"card-text",children:s.JobType})}),Object(l.jsx)("hr",{}),Object(l.jsx)("h4",{className:"mt-2",children:"\u062d\u0642\u0648\u0642 \u06cc\u0627 \u0628\u0648\u062f\u062c\u0647"}),Object(l.jsxs)("p",{id:"product_price",children:[s.salary,s.budget]}),Object(l.jsx)("hr",{}),Object(l.jsx)("h4",{className:"mt-2",children:"\u062a\u0648\u0636\u06cc\u062d\u0627\u062a:"}),Object(l.jsxs)("p",{children:[s.JobDes,s.projectDesc]}),Object(l.jsx)("hr",{}),Object(l.jsx)("a",{href:s.url,id:"view_btn",className:"btn btn-primary",children:"\u0645\u0634\u0627\u0647\u062f\u0647 \u062f\u0631 \u0633\u0627\u06cc\u062a"}),Object(l.jsx)("hr",{})]})}),Object(l.jsx)("hr",{})]})})};var Z=function(){return Object(l.jsx)(s.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),Object(l.jsx)(i.a,{path:"/",component:K,exact:!0}),Object(l.jsx)(i.a,{path:"/jobs/:id",component:Y,exact:!0}),Object(l.jsx)(i.a,{path:"/search/:keyword",component:K}),Object(l.jsx)(b,{})]})})},$=c(19),ee=c(45),te=c(46),ce=c(3),ae=Object($.combineReducers)({jobs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{jobs:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return{loading:!0,jobs:[]};case E:return{loading:!1,jobs:t.payload.jobs,jobsCount:t.payload.jobsCount,resPerPage:t.payload.resPerPage};case S:return{loading:!1,error:t.payload};case H:return Object(ce.a)(Object(ce.a)({},e),{},{error:null});default:return e}},jobDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{job:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(ce.a)(Object(ce.a)({},e),{},{loading:!0});case L:return{loading:!1,job:t.payload};case N:return{loading:!1,error:t.payload};case H:return Object(ce.a)(Object(ce.a)({},e),{},{error:null});default:return e}},scrapeData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(ce.a)(Object(ce.a)({},e),{},{scrapeLoading:!0});case R:return{scapeLoading:!1,isScraped:t.payload};case B:return{scapeLoading:!1,error:t.payload};case k:return Object(ce.a)(Object(ce.a)({},e),{},{isScraped:!0});case H:return Object(ce.a)(Object(ce.a)({},e),{},{error:null});default:return e}},deleteAlldata:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(ce.a)({Dloading:!0},e);case T:return{Dloading:!1,isDeleted:t.payload};case J:return{Dloading:!1,error:t.payload};case C:return Object(ce.a)(Object(ce.a)({},e),{},{isDeleted:!0});case H:return Object(ce.a)(Object(ce.a)({},e),{},{error:null});default:return e}},downloadJob:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(ce.a)(Object(ce.a)({},e),{},{JDLoading:!0});case F:return{JDLoading:!1,isJDownloaded:t.payload};case I:return{JDLoading:!1,error:t.payload};case W:return Object(ce.a)(Object(ce.a)({},e),{},{isJDownloaded:!0});case H:return Object(ce.a)(Object(ce.a)({},e),{},{error:null});default:return e}},downloadPro:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return Object(ce.a)(Object(ce.a)({},e),{},{PDLoading:!0});case q:return{PDLoading:!1,isPDownloaded:t.payload};case M:return{PDLoading:!1,error:t.payload};case G:return Object(ce.a)(Object(ce.a)({},e),{},{isPDownloaded:!0});case H:return Object(ce.a)(Object(ce.a)({},e),{},{error:null});default:return e}}}),re=[ee.a],ne=Object($.createStore)(ae,{},Object(te.composeWithDevTools)($.applyMiddleware.apply(void 0,re)));n.a.render(Object(l.jsx)(m.a,{store:ne,children:Object(l.jsx)(Z,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.b2775554.chunk.js.map