"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[1795],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),s=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,y=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?i.createElement(y,a(a({ref:t},u),{},{components:n})):i.createElement(y,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8283:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],c={title:"Custom Condition Match",keywords:["Condition"],description:"custom condition match"},l=void 0,s={unversionedId:"developer/spi/custom-condition-match",id:"version-2.4.0/developer/spi/custom-condition-match",isDocsHomePage:!1,title:"Custom Condition Match",description:"custom condition match",source:"@site/versioned_docs/version-2.4.0/developer/spi/custom-condition-match.md",sourceDirName:"developer/spi",slug:"/developer/spi/custom-condition-match",permalink:"/docs/developer/spi/custom-condition-match",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/website/versioned_docs/version-2.4.0/developer/spi/custom-condition-match.md",version:"2.4.0",frontMatter:{title:"Custom Condition Match",keywords:["Condition"],description:"custom condition match"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"Monitor Plugin",permalink:"/docs/plugin-center/observability/monitor-plugin"},next:{title:"Custom Filter",permalink:"/docs/developer/custom-filter"}},u=[{value:"Explanation",id:"explanation",children:[]},{value:"Extension",id:"extension",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"explanation"},"Explanation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Before custom development, please customize and build the gateway environment first, please refer to: ",(0,o.kt)("a",{parentName:"p",href:"../../deployment/deployment-custom"},"custom deployment"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"This article describes how to customize the extension of  ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.base.condition.strategy.MatchStrategy"),"."))),(0,o.kt)("h2",{id:"extension"},"Extension"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a new class ",(0,o.kt)("inlineCode",{parentName:"li"},"${you class}"),"\uff0cimplements ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.strategy.MatchStrategy"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"public class ${you class} implements MatchStrategy {\n    \n      @Override\n      public Boolean match(final List<ConditionData> conditionDataList, final ServerWebExchange exchange) {\n        //coding and return\n        return true;\n      }\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the project  ",(0,o.kt)("inlineCode",{parentName:"li"},"resources")," directory\uff0cCreate a new ",(0,o.kt)("inlineCode",{parentName:"li"},"META-INF/shenyu")," directory\uff0c and the new file name is : ",(0,o.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.strategy.MatchStrategy"),".\nadd ",(0,o.kt)("inlineCode",{parentName:"li"},"${you spi name}")," = ",(0,o.kt)("inlineCode",{parentName:"li"},"${you class path}"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"${you spi name} = ${you class path}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("inlineCode",{parentName:"li"},"Admin")," service ---\x3e BasicConfig ---\x3e Dictionary ,  Find the dictionary code as ",(0,o.kt)("inlineCode",{parentName:"li"},"MATCH_MODE"),", add a new piece of data, pay attention to the dictionary name: ",(0,o.kt)("inlineCode",{parentName:"li"},"${you spi name}"),".")),(0,o.kt)("img",{src:"/img/shenyu/custom/custom-condition-match-en.png",width:"40%",height:"30%"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Or execute the following custom ",(0,o.kt)("inlineCode",{parentName:"li"},"SQL")," statement\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT IGNORE INTO `shenyu_dict` (\n        `id`,\n        `type`,\n        `dict_code`,\n        `dict_name`,\n        `dict_value`,\n        `desc`,\n        `sort`,\n        `enabled`,\n        `date_created`,\n        `date_updated`\n    )\nVALUES (\n        'you id',\n        'matchMode',\n        'MATCH_MODE',\n        'you spi name',\n        'you value',\n        'you spi name',\n        0,\n        1,\n        '2021-05-30 19:29:10',\n        '2021-05-30 20:15:23'\n    );\n")))}d.isMDXComponent=!0}}]);