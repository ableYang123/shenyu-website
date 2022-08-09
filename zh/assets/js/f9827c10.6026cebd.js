"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[85264],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),m=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return i.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=m(n),c=a,s=u["".concat(p,".").concat(c)]||u[c]||k[c]||r;return n?i.createElement(s,l(l({ref:t},d),{},{components:n})):i.createElement(s,l({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var m=2;m<r;m++)l[m]=n[m];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},87316:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={title:"2.4.2",sidebar_position:2,keywords:["release-notes"],description:"release-notes"},l="2.4.2",o={unversionedId:"2.4.2-release",id:"2.4.2-release",isDocsHomePage:!1,title:"2.4.2",description:"release-notes",source:"@site/i18n/zh/docusaurus-plugin-content-docs-event/current/2.4.2-release.md",sourceDirName:".",slug:"/2.4.2-release",permalink:"/zh/event/2.4.2-release",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs-event/current/2.4.2-release.md",version:"current",lastUpdatedBy:"lonffreytu",lastUpdatedAt:1660035775,formattedLastUpdatedAt:"2022/8/9",sidebarPosition:2,frontMatter:{title:"2.4.2",sidebar_position:2,keywords:["release-notes"],description:"release-notes"}},p=[{value:"\u65b0\u529f\u80fd",id:"\u65b0\u529f\u80fd",children:[]},{value:"API \u66f4\u6539",id:"api-\u66f4\u6539",children:[]},{value:"\u589e\u5f3a",id:"\u589e\u5f3a",children:[]},{value:"\u91cd\u6784",id:"\u91cd\u6784",children:[]},{value:"\u9519\u8bef\u4fee\u590d",id:"\u9519\u8bef\u4fee\u590d",children:[]}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"242"},"2.4.2"),(0,a.kt)("h3",{id:"\u65b0\u529f\u80fd"},"\u65b0\u529f\u80fd"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"Mqtt")," \u63d2\u4ef6"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Shenyu-Agent")," \u6a21\u5757\u652f\u6301\u53ef\u89c2\u5bdf\u6027"),(0,a.kt)("li",{parentName:"ol"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"Shenyu-Agent")," \u6a21\u5757\u4e0a\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"opentelemetry")," \u63d2\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"Shenyu-Agent"),"\u6a21\u5757\u4e0a\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"li"},"jaeger"),"\u63d2\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"Shenyu-Agent"),"\u6a21\u5757\u4e0a\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"li"},"zipkin"),"\u63d2\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u652f\u6301",(0,a.kt)("inlineCode",{parentName:"li"},"zookeeper"),"\u6ce8\u518cShenyu\u5b9e\u4f8b"),(0,a.kt)("li",{parentName:"ol"},"\u652f\u6301\u54cd\u5e94\u6570\u636e\u81ea\u5b9a\u4e49\u683c\u5f0f"),(0,a.kt)("li",{parentName:"ol"},"\u652f\u6301 https \u8fdb\u884c\u4e0a\u6e38\u68c0\u67e5"),(0,a.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"RpcContextPlugin")," \u4ee5\u5c06\u6807\u5934\u4f20\u8f93\u5230 rpc \u4e0a\u4e0b\u6587"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"dubbo"),"\u63d2\u4ef6\u652f\u6301\u96c6\u7fa4\u6a21\u578b"),(0,a.kt)("li",{parentName:"ol"},"\u652f\u6301Shenyu ",(0,a.kt)("inlineCode",{parentName:"li"},"ETCD")," \u5b9e\u4f8b\u6ce8\u518c")),(0,a.kt)("h3",{id:"api-\u66f4\u6539"},"API \u66f4\u6539"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u589e\u52a0HTTP\u540c\u6b65\u6570\u636e\u7684\u914d\u7f6e\u5c5e\u6027")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4eceShenyu-admin\u7684\u767d\u540d\u5355\u754c\u9762\u53bb\u6389 '/shenyu-client/' , '/configs/' , '/plugin'\u63a5\u53e3"))),(0,a.kt)("h3",{id:"\u589e\u5f3a"},"\u589e\u5f3a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f18\u5316\u5168\u5c40\u9519\u8bef\u5904\u7406\u7a0b\u5e8f\u4ee5\u5b9e\u73b0\u7075\u6d3b\u5904\u7406"),(0,a.kt)("li",{parentName:"ol"},"\u4f18\u5316\u4e86\u5faa\u73af\u4e2d\u7684\u6570\u636e\u5e93\u8bbf\u95ee"),(0,a.kt)("li",{parentName:"ol"},"\u4f18\u5316\u7ed3\u679c\u5a92\u4f53\u7c7b\u578b\u548c\u91cd\u7f6e\u54cd\u5e94\u5934"),(0,a.kt)("li",{parentName:"ol"},"\u589e\u5f3a ",(0,a.kt)("inlineCode",{parentName:"li"},"crossfilter")," \u8fc7\u6ee4\u76f8\u540c\u7684\u6807\u5934"),(0,a.kt)("li",{parentName:"ol"},"\u4f18\u5316 Shenyu context \u6a21\u5757\u6570\u636e"),(0,a.kt)("li",{parentName:"ol"},"\u4f18\u5316 ",(0,a.kt)("inlineCode",{parentName:"li"},"dubbo"),"\u63d2\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u4f18\u5316",(0,a.kt)("inlineCode",{parentName:"li"},"admin db"),"\u64cd\u4f5c"),(0,a.kt)("li",{parentName:"ol"},"\u91cd\u6784\u54cd\u5e94\u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"Cryptor"),"\u63d2\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u4f18\u5316\u7ba1\u7406\u8d44\u6e90\u6743\u9650\u52a0\u8f7d\u5668"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"http"),"\u6ce8\u518c\u65f6\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"Shenyu admin"),"\u4e0a\u6dfb\u52a0\u8ba4\u8bc1"),(0,a.kt)("li",{parentName:"ol"},"\u4f18\u5316\u7f51\u7edc\u914d\u7f6e\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4f18\u5316\u8d44\u6e90\u3001\u6743\u9650\u7684SQL\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ol"},"\u4e3a\u9009\u62e9\u5668\u548c\u89c4\u5219\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"ExcludeOperatorJudge")),(0,a.kt)("li",{parentName:"ol"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"Shenyu-dist")," \u4e0a\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"li"},"docker-compose")),(0,a.kt)("li",{parentName:"ol"},"\u589e\u5f3a",(0,a.kt)("inlineCode",{parentName:"li"},"jwt"),"\u63d2\u4ef6\u7684\u80fd\u529b")),(0,a.kt)("h3",{id:"\u91cd\u6784"},"\u91cd\u6784"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5220\u9664 ",(0,a.kt)("inlineCode",{parentName:"li"},"SpEL")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"Groovy")," \u63d2\u4ef6"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"ExtensionLoader"),"\u4f18\u5316\u63d0\u793a"),(0,a.kt)("li",{parentName:"ol"},"\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"li"},"http"),"\u5ba2\u6237\u7aef\u7b56\u7565\u5c5e\u6027"),(0,a.kt)("li",{parentName:"ol"},"\u91cd\u6784 ",(0,a.kt)("inlineCode",{parentName:"li"},"Shenyu client"))),(0,a.kt)("h3",{id:"\u9519\u8bef\u4fee\u590d"},"\u9519\u8bef\u4fee\u590d"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590d ",(0,a.kt)("inlineCode",{parentName:"li"},"sentinel Plugin-exception number")," \u65e0\u6548"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590d ",(0,a.kt)("inlineCode",{parentName:"li"},"HttpClientProperties.javaresponseTimeout")," \u65e0\u6cd5\u5728 yaml \u4e2d\u914d\u7f6e"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590d\u7f51\u7edc\u5ba2\u6237\u7aef\u4e0a\u7684\u5bf9\u7b49\u5f02\u5e38\u91cd\u7f6e\u8fde\u63a5"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590d\u6ce8\u518c\u6570\u636e\u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"uri")," \u987a\u5e8f"),(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u6dfb\u52a0\u6309\u94ae\u65f6\u4fee\u590d",(0,a.kt)("inlineCode",{parentName:"li"},"admin")),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590d ",(0,a.kt)("inlineCode",{parentName:"li"},"Spi")," \u914d\u7f6e"),(0,a.kt)("li",{parentName:"ol"},"\u652f\u6301 ",(0,a.kt)("inlineCode",{parentName:"li"},"Dubbo")," \u63d2\u4ef6\u5355\u53c2\u6570\u57fa\u5143\u7c7b\u578b"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"etcd")," \u96c6\u7fa4\u540c\u6b65\u6570\u636e\u521d\u59cb\u5316\u5931\u8d25\u7684\u95ee\u9898"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590d ",(0,a.kt)("inlineCode",{parentName:"li"},"Shiro")," \u83b7\u53d6\u767d\u540d\u5355\u4e3a\u7a7a\u7684\u9519\u8bef"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590d ",(0,a.kt)("inlineCode",{parentName:"li"},"zookeeper")," \u540c\u6b65\u9519\u8bef\u5904\u7406\u4e8b\u4ef6\u7684 bug"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590d ",(0,a.kt)("inlineCode",{parentName:"li"},"modify-response-plugin")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"cryptor-response-plugin")," \u7ec4\u5408\u4f7f\u7528\uff0c\u6ca1\u6709\u8fd4\u56de\u4fe1\u606f\u7684\u9519\u8bef"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u590d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"h2")," \u52a0\u5bc6\u89c4\u5219\u5904\u7406\u7a0b\u5e8f\u4e2d\u7f3a\u5c11\u67d0\u4e9b\u5b57\u6bb5\u7684\u9519\u8bef")))}d.isMDXComponent=!0}}]);