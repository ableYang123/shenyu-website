"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[1758],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,y=d["".concat(p,".").concat(m)]||d[m]||l[m]||o;return t?r.createElement(y,i(i({ref:n},u),{},{components:t})):r.createElement(y,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5422:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],c={title:"Motan Proxy",description:"Motan Proxy"},p=void 0,s={unversionedId:"user-guide/motan-proxy",id:"version-2.4.0/user-guide/motan-proxy",isDocsHomePage:!1,title:"Motan Proxy",description:"Motan Proxy",source:"@site/versioned_docs/version-2.4.0/user-guide/motan-proxy.md",sourceDirName:"user-guide",slug:"/user-guide/motan-proxy",permalink:"/docs/user-guide/motan-proxy",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/website/versioned_docs/version-2.4.0/user-guide/motan-proxy.md",version:"2.4.0",frontMatter:{title:"Motan Proxy",description:"Motan Proxy"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"Http Proxy",permalink:"/docs/user-guide/http-proxy"},next:{title:"Application Client Access Config",permalink:"/docs/user-guide/register-center-access"}},u=[{value:"Add motan plugin in gateway",id:"add-motan-plugin-in-gateway",children:[]},{value:"Motan service access gateway",id:"motan-service-access-gateway",children:[]},{value:"User Request",id:"user-request",children:[]}],l={toc:u};function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This document is intended to help the ",(0,o.kt)("inlineCode",{parentName:"p"},"Motan")," service access the ",(0,o.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"Motan")," plugin to handle ",(0,o.kt)("inlineCode",{parentName:"p"},"motan")," service."),(0,o.kt)("p",null,"Before the connection, start ",(0,o.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," correctly, start ",(0,o.kt)("inlineCode",{parentName:"p"},"Motan")," plugin, and add related dependencies on the gateway and ",(0,o.kt)("inlineCode",{parentName:"p"},"Motan")," application client. Refer to the previous ",(0,o.kt)("a",{parentName:"p",href:"../quick-start/quick-start-motan"},"Quick start with Motan")," ."),(0,o.kt)("p",null,"For details about client access configuration, see ",(0,o.kt)("a",{parentName:"p",href:"./register-center-access"},"Application Client Access Config")," ."),(0,o.kt)("p",null,"For details about data synchronization configurations, see ",(0,o.kt)("a",{parentName:"p",href:"./use-data-sync"},"Data Synchronization Config")," ."),(0,o.kt)("h2",{id:"add-motan-plugin-in-gateway"},"Add motan plugin in gateway"),(0,o.kt)("p",null,"Add the following dependencies to the gateway's ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu motan plugin --\x3e\n          <dependency>\n              <groupId>org.apache.shenyu</groupId>\n              <artifactId>shenyu-spring-boot-starter-plugin-motan</artifactId>\n              <version>${project.version}</version>\n          </dependency>\n  \n          <dependency>\n              <groupId>com.weibo</groupId>\n              <artifactId>motan-core</artifactId>\n              <version>1.1.9</version>\n          </dependency>\n  \n          <dependency>\n              <groupId>com.weibo</groupId>\n              <artifactId>motan-registry-zookeeper</artifactId>\n              <version>1.1.9</version>\n          </dependency>\n  \n          <dependency>\n              <groupId>com.weibo</groupId>\n              <artifactId>motan-transport-netty4</artifactId>\n              <version>1.1.9</version>\n          </dependency>\n  \n          <dependency>\n              <groupId>com.weibo</groupId>\n              <artifactId>motan-springsupport</artifactId>\n              <version>1.1.9</version>\n          </dependency>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Restart your gateway service.")),(0,o.kt)("h2",{id:"motan-service-access-gateway"},"Motan service access gateway"),(0,o.kt)("p",null,"Please refer to: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/v2.4.0/shenyu-examples/shenyu-examples-motan"},"shenyu-examples-motan")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In the microservice built by ",(0,o.kt)("inlineCode",{parentName:"li"},"Motan"),", add the following dependencies:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-client-motan</artifactId>\n            <version>${shenyu.version}</version>\n        </dependency>\n")),(0,o.kt)("p",null,"Add ",(0,o.kt)("inlineCode",{parentName:"p"},"@ShenyuMotanClient")," annotation to the method of ",(0,o.kt)("inlineCode",{parentName:"p"},"Motan")," service interface implementation class, start your service provider, after successful registration, go to PluginList -> rpc proxy -> motan in the background management system, you will see automatic registration of selectors and rules information."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    @MotanService(export = "demoMotan:8002")\n    public class MotanDemoServiceImpl implements MotanDemoService {\n        @Override\n        @ShenyuMotanClient(path = "/hello")\n        public String hello(String name) {\n            return "hello " + name;\n        }\n    }\n')),(0,o.kt)("h2",{id:"user-request"},"User Request"),(0,o.kt)("p",null,"You can request your ",(0,o.kt)("inlineCode",{parentName:"p"},"motan")," service by Http. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway needs to have a route prefix which is the ",(0,o.kt)("inlineCode",{parentName:"p"},"contextPath")," configured by the access gateway. For example: ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:9195/motan/hello")," ."))}d.isMDXComponent=!0}}]);