"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[28865],{3905:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>d});var r=l(67294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var l=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(l),d=n,h=c["".concat(o,".").concat(d)]||c[d]||m[d]||a;return l?r.createElement(h,i(i({ref:t},p),{},{components:l})):r.createElement(h,i({ref:t},p))}));function d(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=l.length,i=new Array(a);i[0]=c;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var s=2;s<a;s++)i[s]=l[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,l)}c.displayName="MDXCreateElement"},91316:(e,t,l)=>{l.r(t),l.d(t,{contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>o});var r=l(87462),n=(l(67294),l(3905));const a={title:"Issue And Pull Request",sidebar_position:2,description:"Apache ShenYu Issue And Pull Request",author:"xiaoyu",categories:"Apache ShenYu",tags:["Issue-PR"]},i=void 0,u={unversionedId:"issue-pr",id:"issue-pr",isDocsHomePage:!1,title:"Issue And Pull Request",description:"Apache ShenYu Issue And Pull Request",source:"@site/community/2-issue-pr.md",sourceDirName:".",slug:"/issue-pr",permalink:"/community/issue-pr",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/community/2-issue-pr.md",version:"current",lastUpdatedBy:"gouzixing",lastUpdatedAt:1656202105,formattedLastUpdatedAt:"6/26/2022",sidebarPosition:2,frontMatter:{title:"Issue And Pull Request",sidebar_position:2,description:"Apache ShenYu Issue And Pull Request",author:"xiaoyu",categories:"Apache ShenYu",tags:["Issue-PR"]},sidebar:"community",previous:{title:"Code Suggestions",permalink:"/community/code-suggestions"},next:{title:"Contributor Guide",permalink:"/community/contributor-guide"}},o=[{value:"Create Issues",id:"create-issues",children:[]},{value:"Commit Messages",id:"commit-messages",children:[]},{value:"Pull Request",id:"pull-request",children:[]},{value:"Issue Label",id:"issue-label",children:[]},{value:"Merged Pull Request",id:"merged-pull-request",children:[]}],s={toc:o};function p(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"create-issues"},"Create Issues"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you have any problems, you can choose to create an issue to describe."),(0,n.kt)("li",{parentName:"ul"},"It has 4 types which are: Bug Report, Feature Request, Question and Task."),(0,n.kt)("li",{parentName:"ul"},"Please follow the template for each type, if the more detailed your information is, the more it will help to solve your problem.")),(0,n.kt)("h2",{id:"commit-messages"},"Commit Messages"),(0,n.kt)("p",null,"Format is : ",(0,n.kt)("inlineCode",{parentName:"p"},"<type> (<module>) : <body>"),"."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"<type>"),": Define your modify type, Including but not limited to the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"refactor"),(0,n.kt)("li",{parentName:"ul"},"fix"),(0,n.kt)("li",{parentName:"ul"},"docs"),(0,n.kt)("li",{parentName:"ul"},"test"),(0,n.kt)("li",{parentName:"ul"},"feature\n...")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"<module>"),": Any of the modules belonging to the Apache ShenYu project,Please strictly follow the name of the project, Including but not limited to the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"admin"),(0,n.kt)("li",{parentName:"ul"},"client"),(0,n.kt)("li",{parentName:"ul"},"common"),(0,n.kt)("li",{parentName:"ul"},"metrics"),(0,n.kt)("li",{parentName:"ul"},"spi"),(0,n.kt)("li",{parentName:"ul"},"plugin-grpc"),(0,n.kt)("li",{parentName:"ul"},"plugin-alibaba-dubbo"),(0,n.kt)("li",{parentName:"ul"},"register-client-nacos\n...")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"<body>"),":Short description for commit messages. Please note the following rules:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"No need for any capitalized words")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Please end with ",(0,n.kt)("inlineCode",{parentName:"p"},".")))),(0,n.kt)("p",null,"for example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"refactor admin : modify some error log."),(0,n.kt)("li",{parentName:"ul"},"fix plugin-grpc :\xa0modify\xa0 \xa0result error."),(0,n.kt)("li",{parentName:"ul"},"feature plugin-alibaba-dubbo : add request for tag router.")),(0,n.kt)("h2",{id:"pull-request"},"Pull Request"),(0,n.kt)("p",null,"First of all, before Pull Request, you have to create issueNo Format is : ","[ISSUE #{issue number}]"," ",(0,n.kt)("inlineCode",{parentName:"p"},"<body>"),"."),(0,n.kt)("p",null,"Please note the following rules:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A space is required between ISSUE and issue number."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"<body>")," : The first word needs to be capitalized, Other words no longer appear in capital letters.")),(0,n.kt)("p",null,"for example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"[ISSUE #123]"," Support spring cloud grayscale release.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"[ISSUE #456]"," Fix dubbo plugin have some error."))),(0,n.kt)("h2",{id:"issue-label"},"Issue Label"),(0,n.kt)("p",null,"We need to Label to all issues. All of Apache ShenYu community's lists are here : ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dromara/shenyu/labels"},"https://github.com/dromara/shenyu/labels"),"."),(0,n.kt)("p",null,"In general, an issue should be marked with 2 Label. One is the type of issue, and the other is the project module to which the issue belongs."),(0,n.kt)("p",null,"Except for the following Labels:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"[type: build]"),(0,n.kt)("li",{parentName:"ul"},"[type: community]"),(0,n.kt)("li",{parentName:"ul"},"[type: discussion]"),(0,n.kt)("li",{parentName:"ul"},"[type: duplicate]"),(0,n.kt)("li",{parentName:"ul"},"[TODO-LIST]"),(0,n.kt)("li",{parentName:"ul"},"[status: wontfix]","\n...")),(0,n.kt)("h2",{id:"merged-pull-request"},"Merged Pull Request"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"All pull request must be approve and review.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Give appropriate advice whenever possible.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"In general, pull\xa0request\xa0 \xa0should be marked with 2 Lable and must set milestone.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"After the merge is completed, need to check if the associated issueNo is closed."))))}p.isMDXComponent=!0}}]);