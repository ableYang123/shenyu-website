"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[2665],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),s=r,b=d["".concat(o,".").concat(s)]||d[s]||m[s]||i;return n?a.createElement(b,p(p({ref:t},c),{},{components:n})):a.createElement(b,p({ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var u=2;u<i;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6325:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),p=["components"],l={title:"Dubbo Plugin",keywords:["dubbo"],description:"dubbo plugin"},o=void 0,u={unversionedId:"plugin-center/rpc-proxy/dubbo-plugin",id:"plugin-center/rpc-proxy/dubbo-plugin",isDocsHomePage:!1,title:"Dubbo Plugin",description:"dubbo plugin",source:"@site/docs/plugin-center/rpc-proxy/dubbo-plugin.md",sourceDirName:"plugin-center/rpc-proxy",slug:"/plugin-center/rpc-proxy/dubbo-plugin",permalink:"/docs/next/plugin-center/rpc-proxy/dubbo-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/website/docs/plugin-center/rpc-proxy/dubbo-plugin.md",version:"current",frontMatter:{title:"Dubbo Plugin",keywords:["dubbo"],description:"dubbo plugin"},sidebar:"tutorialSidebar",previous:{title:"Divide Plugin",permalink:"/docs/next/plugin-center/rpc-proxy/divide-plugin"},next:{title:"gRPC Plugin",permalink:"/docs/next/plugin-center/rpc-proxy/grpc-plugin"}},c=[{value:"Explanation",id:"explanation",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Metadata",id:"metadata",children:[]}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"explanation"},"Explanation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Dubbo is a plugin that converts ",(0,i.kt)("inlineCode",{parentName:"li"},"http protocol")," into ",(0,i.kt)("inlineCode",{parentName:"li"},"Dubbo protocol")," and it is also the key for gateway to realize dubbo generic service."),(0,i.kt)("li",{parentName:"ul"},"Dubbo plugin needs to cooperate with metadata to realize dubbo calls."),(0,i.kt)("li",{parentName:"ul"},"Apache Dubbo and Alibaba Dubbo users both use the same plugin.")),(0,i.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add related dependencies and enable plugin, please refer to: ",(0,i.kt)("a",{parentName:"p",href:"../../quick-start/quick-start-dubbo"},"Quick start with Dubbo")," .")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Dubbo")," client access, please refer to: ",(0,i.kt)("a",{parentName:"p",href:"../../user-guide/dubbo-proxy"},"Dubbo Proxy")," .")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Set selector and rule, please refer to: ",(0,i.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")," ."))),(0,i.kt)("h2",{id:"metadata"},"Metadata"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Every dubbo interface method corresponds to a piece of metadata, which can be found in ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig -> Metadata .")),(0,i.kt)("img",{src:"/img/shenyu/plugin/dubbo/dubbo-metadata-en.jpg",width:"50%"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"AppName: The name of the application to which this piece of metadata belongs.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"MethodName: The name of the method that needs to be called.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Path: your http request path.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"PathDescribe: Description of the path, for easy viewing.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"ParamsType: List of parameter types of dubbo interface, there are two declaration methods here:\ne.g. we have an interface ",(0,i.kt)("inlineCode",{parentName:"p"},"update(Integer id, String name, Integer age)")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Type list"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"java.lang.Integer,java.lang.String,java.lang.Integer\n")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"According to the order of the parameter types of the interface, separated by ",(0,i.kt)("inlineCode",{parentName:"p"},","))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When requesting to pass parameters, ",(0,i.kt)("strong",{parentName:"p"},"the parameters must be passed in strictly in accordance with the order of the parameter types"),", if a parameter without value use ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," as a placeholder."),(0,i.kt)("p",{parentName:"li"},"Request body example: ",(0,i.kt)("inlineCode",{parentName:"p"},'{"id":1,"name": null,"age":18}'))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Name mapping"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'{"id":"java.lang.Integer","name":"java.lang.String","age":"java.lang.Integer"}      \n')),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("inlineCode",{parentName:"p"},'"parameter name":"parameter type"')," to represent a parameter, set in order of interface parameter type, separated by ",(0,i.kt)("inlineCode",{parentName:"p"},","))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"No need to pay attention to the order when requesting, and no need to use null placeholders."),(0,i.kt)("p",{parentName:"li"},"Request body example: ",(0,i.kt)("inlineCode",{parentName:"p"},'{"name":"Mike","id":1}'))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"RpcExpand: corresponding to some configurations of dubbo interface; If you want to adjust, please modify here, which support json format like the following fields:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'{"timeout":10000,"group":"",version":"","loadbalance":"","retries":1}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Interface: The fully-qualified name for dubbo interface .")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"RpcType: Choose ",(0,i.kt)("inlineCode",{parentName:"p"},"dubbo")," ."))))}d.isMDXComponent=!0}}]);