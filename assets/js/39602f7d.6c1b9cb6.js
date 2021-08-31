"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[2632],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=c(n),m=r,d=f["".concat(l,".").concat(m)]||f[m]||s[m]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6389:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],p={title:"Sofa Plugin",keywords:["sofa"],description:"sofa access shenyu gateway"},l=void 0,c={unversionedId:"plugin-center/rpc-proxy/sofa-plugin",id:"version-2.4.0/plugin-center/rpc-proxy/sofa-plugin",isDocsHomePage:!1,title:"Sofa Plugin",description:"sofa access shenyu gateway",source:"@site/versioned_docs/version-2.4.0/plugin-center/rpc-proxy/sofa-plugin.md",sourceDirName:"plugin-center/rpc-proxy",slug:"/plugin-center/rpc-proxy/sofa-plugin",permalink:"/docs/plugin-center/rpc-proxy/sofa-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/website/versioned_docs/version-2.4.0/plugin-center/rpc-proxy/sofa-plugin.md",version:"2.4.0",frontMatter:{title:"Sofa Plugin",keywords:["sofa"],description:"sofa access shenyu gateway"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"Motan Plugin",permalink:"/docs/plugin-center/rpc-proxy/motan-plugin"},next:{title:"Spring Cloud Plugin",permalink:"/docs/plugin-center/rpc-proxy/spring-cloud-plugin"}},u=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Metadata",id:"metadata",children:[]}],s={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The sofa plugin is a plugin that converts the Http protocol into the sofa protocol, and it is also the key to the gateway to realize the sofa generalization call."),(0,i.kt)("li",{parentName:"ul"},"The sofa plugin needs to cooperate with metadata to realize the call of Sofa.")),(0,i.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add related dependencies and enable plugin, please refer to: ",(0,i.kt)("a",{parentName:"p",href:"../../quick-start/quick-start-sofa"},"Quick start with Sofa")," .")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Sofa")," client access, please refer to: ",(0,i.kt)("a",{parentName:"p",href:"../../user-guide/sofa-proxy"},"Sofa Proxy")," .")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Set selector and rule, please refer to: ",(0,i.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")," ."))),(0,i.kt)("h2",{id:"metadata"},"Metadata"),(0,i.kt)("p",null,"Each ",(0,i.kt)("inlineCode",{parentName:"p"},"sofa")," interface method, will correspond to a metadata, when the ",(0,i.kt)("inlineCode",{parentName:"p"},"sofa")," application client access to the ",(0,i.kt)("inlineCode",{parentName:"p"},"ShenYu")," gateway, will be automatically registered, can be viewed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," background management system of the BasicConfig --\x3e Metadata management."),(0,i.kt)("img",{src:"/img/shenyu/plugin/sofa/metadata_en.png",width:"80%"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"AppName: specifies the name of the application to which the metadata belongs.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"MethodName: the name of the method to call.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Path: http request path.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"PathDescribe: the description of the path is easy to view.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ParamsType: the parameters are separated by commas (,) in the order of interface parameter types.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"RpcExpand: other configurations of the ",(0,i.kt)("inlineCode",{parentName:"p"},"sofa")," interface, which support the ",(0,i.kt)("inlineCode",{parentName:"p"},"JSON")," format, are as follows:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'{"loadbalance":"hash","retries":3,"timeout":-1}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Interface: The fully qualified class name of the ",(0,i.kt)("inlineCode",{parentName:"p"},"sofa")," interface.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"RpcType\uff1achoose ",(0,i.kt)("inlineCode",{parentName:"p"},"sofa"),"."))))}f.isMDXComponent=!0}}]);