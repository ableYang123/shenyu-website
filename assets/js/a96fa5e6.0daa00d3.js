"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[199],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=i,m=d["".concat(o,".").concat(g)]||d[g]||c[g]||a;return n?r.createElement(m,u(u({ref:t},p),{},{components:n})):r.createElement(m,u({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,u=new Array(a);u[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,u[1]=l;for(var s=2;s<a;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},373:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),u=["components"],l={title:"RequestPlugin",keywords:["RequestPlugin"],description:"RequestPlugin"},o=void 0,s={unversionedId:"plugin-center/http-handle/request-plugin",id:"plugin-center/http-handle/request-plugin",isDocsHomePage:!1,title:"RequestPlugin",description:"RequestPlugin",source:"@site/docs/plugin-center/http-handle/request-plugin.md",sourceDirName:"plugin-center/http-handle",slug:"/plugin-center/http-handle/request-plugin",permalink:"/docs/next/plugin-center/http-handle/request-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/website/docs/plugin-center/http-handle/request-plugin.md",version:"current",frontMatter:{title:"RequestPlugin",keywords:["RequestPlugin"],description:"RequestPlugin"},sidebar:"tutorialSidebar",previous:{title:"Redirect Plugin",permalink:"/docs/next/plugin-center/http-handle/redirect-plugin"},next:{title:"Rewrite Plugin",permalink:"/docs/next/plugin-center/http-handle/rewrite-plugin"}},p=[{value:"Explanation",id:"explanation",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Situation",id:"situation",children:[]}],c={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"explanation"},"Explanation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When ",(0,a.kt)("inlineCode",{parentName:"li"},"ShenYu")," gateway makes proxy call to target service, it also allows users to add, modify and remove request headers by using 'request' plugin to request parameters, request headers and cookies.")),(0,a.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In ",(0,a.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"request")," , set to enable."),(0,a.kt)("li",{parentName:"ul"},"Introduce ",(0,a.kt)("inlineCode",{parentName:"li"},"request")," support in the pox.xml file of the gateway."),(0,a.kt)("li",{parentName:"ul"},"If the user don't use, please disable the plugin in the background.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu request plugin start--\x3e\n  <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-plugin-request</artifactId>\n     <version>${project.version}</version>\n  </dependency>\n  \x3c!-- apache shenyu request plugin end--\x3e\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Selectors and rules, please refer to: ",(0,a.kt)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config"),"."),(0,a.kt)("li",{parentName:"ul"},"The custom request parameter modification function is performed only for matching requests.")),(0,a.kt)("h2",{id:"situation"},"Situation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"As the name implies, a request plugin is a custom modification of a ",(0,a.kt)("inlineCode",{parentName:"li"},"URI")," request parameter."),(0,a.kt)("li",{parentName:"ul"},"When a request is matched, the custom modification rule is set to change the parameters accepted by the downstream service.")))}d.isMDXComponent=!0}}]);