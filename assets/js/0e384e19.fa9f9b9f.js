"use strict";(self.webpackChunkredocusaurus=self.webpackChunkredocusaurus||[]).push([[671],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1,slug:"/",title:"OpsAdmin API Reference"},o="Welcome To The OA API Reference",l={unversionedId:"intro",id:"intro",title:"OpsAdmin API Reference",description:"The OA API is still under heavy development, this documentation is a work in progress.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/redocusaurus/",draft:!1,editUrl:"https://github.com/matiugrin/redocusaurus/tree/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/",title:"OpsAdmin API Reference"},sidebar:"tutorialSidebar",next:{title:"OA API Accounts",permalink:"/redocusaurus/"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"What&#39;s New?",id:"whats-new",level:3},{value:"Release 2023-11",id:"release-2023-11",level:3},{value:"Release 2023-10",id:"release-2023-10",level:3},{value:"Release 2023-09",id:"release-2023-09",level:3},{value:"Release 2023-08",id:"release-2023-08",level:3},{value:"Release 2023-06",id:"release-2023-06",level:3},{value:"Release 2023-05",id:"release-2023-05",level:3}],d={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"welcome-to-the-oa-api-reference"},"Welcome To The OA API Reference"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The OA API is still under heavy development, this documentation is a work in progress. ")),(0,r.kt)("p",null,"Test link: ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/redocusaurus/api#tag/Customers/paths/~1api~1v1~1customers~1%7BcustomerId%7D~1enrollments/get"},"Get Customer Enrollments")),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"OA is an online software application that creates efficiencies for retail energy suppliers with its marketing, operations, and regulatory-centric tools."),(0,r.kt)("p",null,"This software is implemented by different retail companies and each one has its own API domain, set of credentials and permission access to certain API methods that will be provided when the participating retail companies start working in the integration."),(0,r.kt)("p",null,"Since each retail company has its own API domain, a generic one will be shown in the examples throughout the documentation."),(0,r.kt)("p",null,"It's possible to test the API and see the details of every endpoint (even the ones still not documented here) by accessing the url https://$HOSTNAME/Swagger/index.html"),(0,r.kt)("h3",{id:"whats-new"},"What's New?"),(0,r.kt)("p",null,"When new features are added to the API is recomended to contact the Retail Energy Company to confirm if any of the new features are going to be used or changed. Usually the these new features and parameters are incorporated in OA maintaining the existing system functionality, meaning that if they are not changed, the system will continue operating as before the update. "),(0,r.kt)("p",null,"If an agent changes the configuration, some endpoints of the API may start failing if the new validations are not met and will require the API user to adapt their applications."),(0,r.kt)("h3",{id:"release-2023-11"},"Release 2023-11"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This is a test post ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:3000/"},"Using a Batch File"),".")),(0,r.kt)("h3",{id:"release-2023-10"},"Release 2023-10"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Now it's possible to post payment and credit card information using a batch file, see ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:3000/"},"Using a Batch File"),".")),(0,r.kt)("h3",{id:"release-2023-09"},"Release 2023-09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("a",{parentName:"li",href:"http://localhost:3000/"},"#Get Plans Batch For Wizard")," endpoint no longer allows requesting plans without indicating at least one utility.")),(0,r.kt)("h3",{id:"release-2023-08"},"Release 2023-08"),(0,r.kt)("p",null,"The following properties were added to the ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"#Get extended information for a single plan")," endpoint:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added new ",(0,r.kt)("inlineCode",{parentName:"li"},"general_rules")," to the plan information: ",(0,r.kt)("inlineCode",{parentName:"li"},"allow_bypass_credit_check")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"allow_use_date_of_birth")," for the credit check process."),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"available_from_date")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"available_until_date")," properties to the plan information for plans that need to limit their contract dates to a certain future range."),(0,r.kt)("li",{parentName:"ul"},"Added ",(0,r.kt)("inlineCode",{parentName:"li"},"min_start_date_delay_days")," property to the plan information for plans that should have their contract start date delayed for a certain number of days in the future.")),(0,r.kt)("h3",{id:"release-2023-06"},"Release 2023-06"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added display properties to plan documents. See the ",(0,r.kt)("a",{parentName:"li",href:"/api#tag/Plans/paths/~1api~1v1~1plans~1docs~1%7BplanId%7D/get"},"#Get Plan Documents")," endpoint for details.")),(0,r.kt)("h3",{id:"release-2023-05"},"Release 2023-05"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Added property ",(0,r.kt)("inlineCode",{parentName:"li"},"customer.opted_marketing_coms")," to the ",(0,r.kt)("a",{parentName:"li",href:"/api#tag/Enrollments/paths/~1api~1v1~1enrollments~1create/post"},"#Create a new enrollment")," endpoint.")))}u.isMDXComponent=!0}}]);