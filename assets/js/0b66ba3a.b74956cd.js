"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[97634],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,g=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return t?a.createElement(g,p(p({ref:n},s),{},{components:t})):a.createElement(g,p({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,p=new Array(i);p[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var u=2;u<i;u++)p[u]=t[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},17563:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var a=t(87462),r=(t(67294),t(3905));const i={title:"ParamMapping Plugin",keywords:["paramMapping-plugin"],description:"paramMapping-plugin"},p=void 0,l={unversionedId:"plugin-center/http-process/parammapping-plugin",id:"plugin-center/http-process/parammapping-plugin",isDocsHomePage:!1,title:"ParamMapping Plugin",description:"paramMapping-plugin",source:"@site/docs/plugin-center/http-process/parammapping-plugin.md",sourceDirName:"plugin-center/http-process",slug:"/plugin-center/http-process/parammapping-plugin",permalink:"/docs/next/plugin-center/http-process/parammapping-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/docs/plugin-center/http-process/parammapping-plugin.md",version:"current",frontMatter:{title:"ParamMapping Plugin",keywords:["paramMapping-plugin"],description:"paramMapping-plugin"},sidebar:"tutorialSidebar",previous:{title:"ModifyResponse Plugin",permalink:"/docs/next/plugin-center/http-process/modifyresponse-plugin"},next:{title:"Redirect Plugin",permalink:"/docs/next/plugin-center/http-process/redirect-plugin"}},o=[{value:"Description",id:"description",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Plugin Use",id:"plugin-use",children:[]},{value:"ParamMappingPlugin Guide",id:"parammappingplugin-guide",children:[]}],u={toc:o};function s(e){let{components:n,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"paramMapping")," is a native plugin of Apache ShenYu Gateway and is used to edit your request param.")),(0,r.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig --\x3e Plugin --\x3e ",(0,r.kt)("inlineCode",{parentName:"li"},"paramMapping")," , set to enable.")),(0,r.kt)("h2",{id:"plugin-use"},"Plugin Use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Introduce ",(0,r.kt)("inlineCode",{parentName:"li"},"paramMapping")," dependency in the pom.xml file of the gateway.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu param_mapping plugin start--\x3e\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-param-mapping</artifactId>\n  <version>${project.version}</version>\n</dependency>\n        \x3c!-- apache shenyu param_mapping plugin end--\x3e\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Selectors and rules, please refer to:",(0,r.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config"),"\u3002"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Only those matched requests can be modified your request body.")))),(0,r.kt)("h2",{id:"parammappingplugin-guide"},"ParamMappingPlugin Guide"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1.Configuration selector"),(0,r.kt)("li",{parentName:"ul"},"2.Configuration rule"),(0,r.kt)("li",{parentName:"ul"},"3.modify request body\n",(0,r.kt)("img",{src:t(64591).Z})),(0,r.kt)("li",{parentName:"ul"},"param details:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"addParameterKeys"),": add a new ",(0,r.kt)("inlineCode",{parentName:"li"},"key-value")," on body"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"replaceParameterKeys"),": replace request body's ",(0,r.kt)("inlineCode",{parentName:"li"},"key")," \uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"key")," is the value to be replaced\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"value")," is the value after replacement"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"removeParameterKeys"),": remove a body ",(0,r.kt)("inlineCode",{parentName:"li"},"key"))))),(0,r.kt)("p",null,"param_mapping modify the request body is achieved through ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONPath")," , ",(0,r.kt)("inlineCode",{parentName:"p"},"$.")," represents the root directory."),(0,r.kt)("p",null,"use the configuration\uff0cunopened the plugin\uff0crequest body is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"id":3,"data":{"value":"18","age":"36"}}\n')),(0,r.kt)("p",null,"open the plugin\uff0cthe final request body is"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"name":"shenyu","userId":3,"data":{"age":"36"}}\n')),(0,r.kt)("p",null,"add a new key-value ",(0,r.kt)("inlineCode",{parentName:"p"},"name:shenyu"),",replace the key ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"userId"),", remove the key ",(0,r.kt)("inlineCode",{parentName:"p"},"data.value")," ."))}s.isMDXComponent=!0},64591:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/param-mapping-48f0bc50c54e2044a1904fe4870ba9b5.png"}}]);