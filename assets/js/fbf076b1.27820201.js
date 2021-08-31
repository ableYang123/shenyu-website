"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[5184],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(a,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=d;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:i,l[1]=u;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2102:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),l=["components"],u={sidebar_position:7,title:"A multilingual HTTP client",keywords:["soul"],description:"A multilingual HTTP client"},a=void 0,c={unversionedId:"developer-guide/developer-soul-client",id:"version-2.3.0/developer-guide/developer-soul-client",isDocsHomePage:!1,title:"A multilingual HTTP client",description:"A multilingual HTTP client",source:"@site/versioned_docs/version-2.3.0/developer-guide/developer-soul-client.md",sourceDirName:"developer-guide",slug:"/developer-guide/developer-soul-client",permalink:"/docs/2.3.0/developer-guide/developer-soul-client",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/website/versioned_docs/version-2.3.0/developer-guide/developer-soul-client.md",version:"2.3.0",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"A multilingual HTTP client",keywords:["soul"],description:"A multilingual HTTP client"},sidebar:"version-2.3.0/tutorialSidebar",previous:{title:"Custom Sign Algorithm",permalink:"/docs/2.3.0/developer-guide/custom-sign-algorithm"},next:{title:"Thread Model",permalink:"/docs/2.3.0/developer-guide/thread"}},s=[{value:"Description",id:"description",children:[]},{value:"Customize Http Client",id:"customize-http-client",children:[]}],p={toc:s};function d(e){var t=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This document focuses on how to access gateways for HTTP services in other languages."),(0,o.kt)("li",{parentName:"ul"},"How to customize the development of soul-http-client.")),(0,o.kt)("h2",{id:"customize-http-client"},"Customize Http Client"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Request Method: ",(0,o.kt)("inlineCode",{parentName:"li"},"POST")),(0,o.kt)("li",{parentName:"ul"},"Request Path: ",(0,o.kt)("inlineCode",{parentName:"li"},"http://soul-admin/soul-client/springmvc-register"),", soul-admin represents ",(0,o.kt)("inlineCode",{parentName:"li"},"IP + Port")," of admin"),(0,o.kt)("li",{parentName:"ul"},"Request Params\uff1apassing ",(0,o.kt)("inlineCode",{parentName:"li"},"JSON")," type parameters through the body.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "appName": "xxx", //required\n    "context": "/xxx", //required\n    "path": "xxx", //required\n    "pathDesc": "xxx", \n    "rpcType": "http", //required\n    "host": "xxx", //required\n    "port": xxx, //required\n    "ruleName": "xxx", //required\n    "enabled": "true", //required\n    "registerMetaData": "true" //required\n}\n')))}d.isMDXComponent=!0}}]);