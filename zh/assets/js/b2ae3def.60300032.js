"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[2142],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,h=m["".concat(o,".").concat(d)]||m[d]||s[d]||a;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,l[1]=p;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},694:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],p={title:"Hystrix\u63d2\u4ef6",keywords:["Hystrix"],description:"hystrix\u63d2\u4ef6"},o=void 0,u={unversionedId:"plugin-center/fault-tolerance/hystrix-plugin",id:"version-2.4.0/plugin-center/fault-tolerance/hystrix-plugin",isDocsHomePage:!1,title:"Hystrix\u63d2\u4ef6",description:"hystrix\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.0/plugin-center/fault-tolerance/hystrix-plugin.md",sourceDirName:"plugin-center/fault-tolerance",slug:"/plugin-center/fault-tolerance/hystrix-plugin",permalink:"/zh/docs/plugin-center/fault-tolerance/hystrix-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/website/i18n/zh/docusaurus-plugin-content-docs/version-2.4.0/plugin-center/fault-tolerance/hystrix-plugin.md",version:"2.4.0",frontMatter:{title:"Hystrix\u63d2\u4ef6",keywords:["Hystrix"],description:"hystrix\u63d2\u4ef6"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"Tars\u63d2\u4ef6",permalink:"/zh/docs/plugin-center/rpc-proxy/tars-plugin"},next:{title:"RateLimiter\u63d2\u4ef6",permalink:"/zh/docs/plugin-center/fault-tolerance/rate-limiter-plugin"}},c=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u63d2\u4ef6\u8bbe\u7f6e",id:"\u63d2\u4ef6\u8bbe\u7f6e",children:[]},{value:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165 hystrix \u63d2\u4ef6",id:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165-hystrix-\u63d2\u4ef6",children:[]},{value:"hystrix \u63d2\u4ef6\u914d\u7f6e",id:"hystrix-\u63d2\u4ef6\u914d\u7f6e",children:[]}],s={toc:c};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hystrix"),"\u63d2\u4ef6\u662f\u7f51\u5173\u7528\u6765\u5bf9\u6d41\u91cf\u8fdb\u884c\u7194\u65ad\u7684\u6838\u5fc3\u5b9e\u73b0\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u9694\u79bb\u6a21\u5f0f\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"li"},"thread")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"semaphore")," \u3002")),(0,a.kt)("h2",{id:"\u63d2\u4ef6\u8bbe\u7f6e"},"\u63d2\u4ef6\u8bbe\u7f6e"),(0,a.kt)("p",null,"\u8bf7\u53c2\u8003\u8fd0\u7ef4\u90e8\u7f72\u7684\u5185\u5bb9\uff0c\u9009\u62e9\u4e00\u79cd\u65b9\u5f0f\u542f\u52a8",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u3002\u6bd4\u5982\uff0c\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"../../deployment/deployment-local"},"\u672c\u5730\u90e8\u7f72")," \u542f\u52a8",(0,a.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728 \u57fa\u7840\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"li"},"--\x3e"),"  \u63d2\u4ef6\u7ba1\u7406 ",(0,a.kt)("inlineCode",{parentName:"li"},"--\x3e")," ",(0,a.kt)("inlineCode",{parentName:"li"},"hystrix"),"\uff0c\u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002 \u5982\u679c\u7528\u6237\u4e0d\u4f7f\u7528\uff0c\u53ef\u4ee5\u5c06\u5176\u5173\u95ed\u3002")),(0,a.kt)("img",{src:"/img/shenyu/plugin/hystrix/hystrix_open.png",width:"80%",height:"80%"}),(0,a.kt)("h2",{id:"\u5728\u7f51\u5173\u4e2d\u5f15\u5165-hystrix-\u63d2\u4ef6"},"\u5728\u7f51\u5173\u4e2d\u5f15\u5165 hystrix \u63d2\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u7f51\u5173\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"pom.xml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"hystrix"),"\u7684\u4f9d\u8d56\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu hystrix plugin start--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-hystrix</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n        \x3c!-- apache shenyu hystrix plugin end--\x3e\n")),(0,a.kt)("h2",{id:"hystrix-\u63d2\u4ef6\u914d\u7f6e"},"hystrix \u63d2\u4ef6\u914d\u7f6e"),(0,a.kt)("p",null,"\u5173\u4e8e\u9009\u62e9\u5668\u548c\u89c4\u5219\u914d\u7f6e\u7684\u66f4\u591a\u8bf4\u660e\uff0c\u8bf7\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u7ba1\u7406"),"\uff0c \u8fd9\u91cc\u53ea\u5bf9\u90e8\u5206\u5b57\u6bb5\u8fdb\u884c\u4e86\u4ecb\u7ecd\u3002"),(0,a.kt)("h4",{id:"\u9009\u62e9\u5668\u914d\u7f6e"},"\u9009\u62e9\u5668\u914d\u7f6e"),(0,a.kt)("p",null,"\u7528\u4e8e\u5bf9\u6d41\u91cf\u7b2c\u4e00\u6b21\u7b5b\u9009\uff0c\u4e0d\u9700\u8981\u7279\u6b8a\u5904\u7406\u5b57\u6bb5\u3002"),(0,a.kt)("img",{src:"/img/shenyu/plugin/hystrix/selector.png",width:"80%",height:"80%"}),(0,a.kt)("h4",{id:"\u89c4\u5219\u914d\u7f6e"},"\u89c4\u5219\u914d\u7f6e"),(0,a.kt)("p",null,"\u7528\u4e8e\u5bf9\u6d41\u91cf\u6700\u7ec8\u7b5b\u9009\uff0c\u6709\u89c4\u5219\u5904\u7406\u903b\u8f91\uff0c\u9694\u79bb\u6a21\u5f0f\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"thread")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"semaphore")," \u3002"),(0,a.kt)("img",{src:"/img/shenyu/plugin/hystrix/rule.png",width:"80%",height:"80%"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"hystrix"),"\u5904\u7406\u8be6\u89e3\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8df3\u95f8\u6700\u5c0f\u8bf7\u6c42\u6570\u91cf\uff1a\u6700\u5c0f\u7684\u8bf7\u6c42\u91cf\uff0c\u81f3\u5c11\u8981\u8fbe\u5230\u8fd9\u4e2a\u91cf\u624d\u4f1a\u89e6\u53d1\u7194\u65ad\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u9519\u8bef\u767e\u5206\u6bd4\u9600\u503c\uff1a \u8fd9\u6bb5\u65f6\u95f4\u5185\uff0c\u53d1\u751f\u5f02\u5e38\u7684\u767e\u5206\u6bd4\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6700\u5927\u5e76\u53d1\u91cf\uff1a \u6700\u5927\u7684\u5e76\u53d1\u91cf\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8df3\u95f8\u4f11\u7720\u65f6\u95f4",(0,a.kt)("inlineCode",{parentName:"p"},"(ms)"),"\uff1a\u7194\u65ad\u4ee5\u540e\u6062\u590d\u7684\u65f6\u95f4\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5206\u7ec4",(0,a.kt)("inlineCode",{parentName:"p"},"Key"),"\uff1a \u4e00\u822c\u8bbe\u7f6e\u4e3a:",(0,a.kt)("inlineCode",{parentName:"p"},"contextPath")," \u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5931\u8d25\u964d\u7ea7",(0,a.kt)("inlineCode",{parentName:"p"},"URL"),"\uff1a \u9ed8\u8ba4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"/fallback/hystrix"),"\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u547d\u4ee4",(0,a.kt)("inlineCode",{parentName:"p"},"Key"),"\uff1a \u4e00\u822c\u8bbe\u7f6e\u4e3a\u5177\u4f53\u7684\u8def\u5f84\u63a5\u53e3\u3002"))))))}m.isMDXComponent=!0}}]);