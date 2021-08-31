"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[4822],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=p(n),g=i,h=d["".concat(o,".").concat(g)]||d[g]||s[g]||a;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:i,l[1]=u;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8475:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],u={title:"Rewrite Plugin",keywords:["rewrite"],description:"rewrite plugin"},o=void 0,p={unversionedId:"plugin-center/http-handle/rewrite-plugin",id:"version-2.4.0/plugin-center/http-handle/rewrite-plugin",isDocsHomePage:!1,title:"Rewrite Plugin",description:"rewrite plugin",source:"@site/versioned_docs/version-2.4.0/plugin-center/http-handle/rewrite-plugin.md",sourceDirName:"plugin-center/http-handle",slug:"/plugin-center/http-handle/rewrite-plugin",permalink:"/docs/plugin-center/http-handle/rewrite-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/website/versioned_docs/version-2.4.0/plugin-center/http-handle/rewrite-plugin.md",version:"2.4.0",frontMatter:{title:"Rewrite Plugin",keywords:["rewrite"],description:"rewrite plugin"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"RequestPlugin",permalink:"/docs/plugin-center/http-handle/request-plugin"},next:{title:"WebSocket Plugin",permalink:"/docs/plugin-center/http-handle/websocket-plugin"}},c=[{value:"Explanation",id:"explanation",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Situation",id:"situation",children:[]}],s={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"explanation"},"Explanation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When making proxy invokes to the target service, Apache ShenYu gateway also allows users to rewrite the request path using the ",(0,a.kt)("inlineCode",{parentName:"li"},"rewrite")," plugin.")),(0,a.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In ",(0,a.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"rewrite")," , set to enable."),(0,a.kt)("li",{parentName:"ul"},"Add ",(0,a.kt)("inlineCode",{parentName:"li"},"rewrite")," support in the ",(0,a.kt)("inlineCode",{parentName:"li"},"pom.xml")," file of the gateway."),(0,a.kt)("li",{parentName:"ul"},"If the user don't use, please disable the plugin in the background.")),(0,a.kt)("img",{src:"/img/shenyu/plugin/rewrite/rewrite_open_en.png",width:"80%",height:"80%"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu rewrite plugin start--\x3e\n  <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-plugin-rewrite</artifactId>\n     <version>${project.version}</version>\n  </dependency>\n  \x3c!-- apache shenyu rewrite plugin end--\x3e\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Selectors and rules, please refer to: ",(0,a.kt)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config"),"."),(0,a.kt)("li",{parentName:"ul"},"Only those matched request will be rewritten.")),(0,a.kt)("h2",{id:"situation"},"Situation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"As the name suggests, rewrite is a redefinition of URI.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When the request is matched, set the user-defined path, and the user-defined path will overwrite the previous real path.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When invoking, the user-defined path will be used."))))}d.isMDXComponent=!0}}]);