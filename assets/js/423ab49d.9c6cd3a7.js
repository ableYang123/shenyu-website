"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[8925],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4207:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={title:"Quick start with Tars",description:"Quick start with Tars"},l=void 0,p={unversionedId:"quick-start/quick-start-tars",id:"version-2.3.0/quick-start/quick-start-tars",isDocsHomePage:!1,title:"Quick start with Tars",description:"Quick start with Tars",source:"@site/versioned_docs/version-2.3.0/quick-start/quick-start-tars.md",sourceDirName:"quick-start",slug:"/quick-start/quick-start-tars",permalink:"/docs/2.3.0/quick-start/quick-start-tars",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/website/versioned_docs/version-2.3.0/quick-start/quick-start-tars.md",version:"2.3.0",frontMatter:{title:"Quick start with Tars",description:"Quick start with Tars"},sidebar:"version-2.3.0/tutorialSidebar",previous:{title:"Quick start with SpringCloud",permalink:"/docs/2.3.0/quick-start/quick-start-springcloud"},next:{title:"Divide Plugin",permalink:"/docs/2.3.0/plugins/divide-plugin"}},c=[{value:"Environment to prepare",id:"environment-to-prepare",children:[]},{value:"Run the soul-examples-tars project",id:"run-the-soul-examples-tars-project",children:[]},{value:"Tars plugin settings",id:"tars-plugin-settings",children:[]},{value:"Testing",id:"testing",children:[]}],u={toc:c};function m(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document introduces how to quickly access the Soul Gateway using Tars. You can get the code example of this document by clicking ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dromara/soul/tree/2.3.0/soul-examples/soul-examples-tars"},"here"),"."),(0,i.kt)("h2",{id:"environment-to-prepare"},"Environment to prepare"),(0,i.kt)("p",null,"Please refer to the ",(0,i.kt)("a",{parentName:"p",href:"../users-guide/soul-set-up"},"setup")," and launch ",(0,i.kt)("inlineCode",{parentName:"p"},"soul-admin")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"soul-bootstrap"),"."),(0,i.kt)("p",null,"Note: ",(0,i.kt)("inlineCode",{parentName:"p"},"soul-bootstrap")," need to import tars dependencies"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.dromara</groupId>\n    <artifactId>soul-spring-boot-starter-plugin-tars</artifactId>\n    <version>${project.version}</version>\n</dependency>\n\n<dependency>\n    <groupId>com.tencent.tars</groupId>\n    <artifactId>tars-client</artifactId>\n    <version>1.7.2</version>\n</dependency>\n")),(0,i.kt)("h2",{id:"run-the-soul-examples-tars-project"},"Run the soul-examples-tars project"),(0,i.kt)("p",null,"Download ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dromara/soul/tree/2.3.0/soul-examples/soul-examples-tars"},"soul-examples-tars")),(0,i.kt)("p",null,"Modify ",(0,i.kt)("inlineCode",{parentName:"p"},"host")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"application.yml")," to be your local IP"),(0,i.kt)("p",null,"Modify config ",(0,i.kt)("inlineCode",{parentName:"p"},"src/main/resources/SoulExampleServer.SoulExampleApp.config.conf"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It is recommended to make clear the meaning of the main configuration items of config, ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/TarsCloud/TarsJava/blob/master/docs/tars_java_user_guide.md"},"refer to the development guide")),(0,i.kt)("li",{parentName:"ul"},"bind IP in config should pay attention to providing cost machine"),(0,i.kt)("li",{parentName:"ul"},"local=..., Indicates the open port that the native machine connects to the tarsnode. If there is no tarsnode, this configuration can be dropped"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"locator"),": Indicates the address (frame address) of the main control center, which is used to obtain the IP list according to the service name, If Registry is not required to locate the service, this configuration can be dropped"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"node=tars.tarsnode.ServerObj@xxxx"),", Indicates the address of the connected tarsnode. If there is no tarsnode locally, this configuration can be removed")),(0,i.kt)("p",null,"More config configuration instructions, Please refer to",(0,i.kt)("a",{parentName:"p",href:"https://github.com/TarsCloud/TarsJava/blob/master/docs/tars_java_user_guide.md"},"TARS Official Documentation")),(0,i.kt)("p",null,"Execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"org.dromara.soul.examples.tars.SoulTestTarsApplication")," main method to start project."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," The ",(0,i.kt)("inlineCode",{parentName:"p"},"configuration file address")," needs to be specified in the startup command when the service starts ",(0,i.kt)("strong",{parentName:"p"},"-Dconfig=xxx/SoulExampleServer.SoulExampleApp.config.conf")),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"-Dconfig")," parameter is not added, the configuration may throw the following exceptions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"com.qq.tars.server.config.ConfigurationException: error occurred on load server config\n    at com.qq.tars.server.config.ConfigurationManager.loadServerConfig(ConfigurationManager.java:113)\n    at com.qq.tars.server.config.ConfigurationManager.init(ConfigurationManager.java:57)\n    at com.qq.tars.server.core.Server.loadServerConfig(Server.java:90)\n    at com.qq.tars.server.core.Server.<init>(Server.java:42)\n    at com.qq.tars.server.core.Server.<clinit>(Server.java:38)\n    at com.qq.tars.spring.bean.PropertiesListener.onApplicationEvent(PropertiesListener.java:37)\n    at com.qq.tars.spring.bean.PropertiesListener.onApplicationEvent(PropertiesListener.java:31)\n    at org.springframework.context.event.SimpleApplicationEventMulticaster.doInvokeListener(SimpleApplicationEventMulticaster.java:172)\n    at org.springframework.context.event.SimpleApplicationEventMulticaster.invokeListener(SimpleApplicationEventMulticaster.java:165)\n    at org.springframework.context.event.SimpleApplicationEventMulticaster.multicastEvent(SimpleApplicationEventMulticaster.java:139)\n    at org.springframework.context.event.SimpleApplicationEventMulticaster.multicastEvent(SimpleApplicationEventMulticaster.java:127)\n    at org.springframework.boot.context.event.EventPublishingRunListener.environmentPrepared(EventPublishingRunListener.java:76)\n    at org.springframework.boot.SpringApplicationRunListeners.environmentPrepared(SpringApplicationRunListeners.java:53)\n    at org.springframework.boot.SpringApplication.prepareEnvironment(SpringApplication.java:345)\n    at org.springframework.boot.SpringApplication.run(SpringApplication.java:308)\n    at org.springframework.boot.SpringApplication.run(SpringApplication.java:1226)\n    at org.springframework.boot.SpringApplication.run(SpringApplication.java:1215)\n    at org.dromara.soul.examples.tars.SoulTestTarsApplication.main(SoulTestTarsApplication.java:38)\nCaused by: java.lang.NullPointerException\n    at java.io.FileInputStream.<init>(FileInputStream.java:130)\n    at java.io.FileInputStream.<init>(FileInputStream.java:93)\n    at com.qq.tars.common.util.Config.parseFile(Config.java:211)\n    at com.qq.tars.server.config.ConfigurationManager.loadServerConfig(ConfigurationManager.java:63)\n    ... 17 more\nThe exception occurred at load server config\n")),(0,i.kt)("p",null,"The following log appears when the startup is successful:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'[SERVER] server starting at tcp -h 127.0.0.1 -p 21715 -t 60000...\n[SERVER] server started at tcp -h 127.0.0.1 -p 21715 -t 60000...\n[SERVER] server starting at tcp -h 127.0.0.1 -p 21714 -t 3000...\n[SERVER] server started at tcp -h 127.0.0.1 -p 21714 -t 3000...\n[SERVER] The application started successfully.\nThe session manager service started...\n[SERVER] server is ready...\n2021-02-09 13:28:24.643  INFO 16016 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 55290 (http) with context path \'\'\n2021-02-09 13:28:24.645  INFO 16016 --- [           main] o.d.s.e.tars.SoulTestTarsApplication     : Started SoulTestTarsApplication in 4.232 seconds (JVM running for 5.1)\n2021-02-09 13:28:24.828  INFO 16016 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : tars client register success: {"appName":"127.0.0.1:21715","contextPath":"/tars","path":"/tars/helloInt","pathDesc":"","rpcType":"tars","serviceName":"SoulExampleServer.SoulExampleApp.HelloObj","methodName":"helloInt","ruleName":"/tars/helloInt","parameterTypes":"int,java.lang.String","rpcExt":"{\\"methodInfo\\":[{\\"methodName\\":\\"helloInt\\",\\"params\\":[{},{}],\\"returnType\\":\\"java.lang.Integer\\"},{\\"methodName\\":\\"hello\\",\\"params\\":[{},{}],\\"returnType\\":\\"java.lang.String\\"}]}","enabled":true} \n2021-02-09 13:28:24.837  INFO 16016 --- [pool-2-thread-1] o.d.s.client.common.utils.RegisterUtils  : tars client register success: {"appName":"127.0.0.1:21715","contextPath":"/tars","path":"/tars/hello","pathDesc":"","rpcType":"tars","serviceName":"SoulExampleServer.SoulExampleApp.HelloObj","methodName":"hello","ruleName":"/tars/hello","parameterTypes":"int,java.lang.String","rpcExt":"{\\"methodInfo\\":[{\\"methodName\\":\\"helloInt\\",\\"params\\":[{},{}],\\"returnType\\":\\"java.lang.Integer\\"},{\\"methodName\\":\\"hello\\",\\"params\\":[{},{}],\\"returnType\\":\\"java.lang.String\\"}]}","enabled":true} \n')),(0,i.kt)("h2",{id:"tars-plugin-settings"},"Tars plugin settings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"enabled the ",(0,i.kt)("inlineCode",{parentName:"li"},"tars")," plugin in the ",(0,i.kt)("inlineCode",{parentName:"li"},"soul-admin")," plugin management.")),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"soul-examples-tars")," project will automatically register interface methods annotated with ",(0,i.kt)("inlineCode",{parentName:"p"},"@SoulTarsClient")," in the soul gateway after successful startup."),(0,i.kt)("p",null,"Open Plugin Management -> tars to see the list of plugin rule configurations"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1080).Z})),(0,i.kt)("p",null,"Use PostMan to simulate HTTP to request your tars service"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1173).Z})))}m.isMDXComponent=!0},1173:function(e,t,n){t.Z=n.p+"assets/images/postman-test-71e1f81f98f8a0547421fddce8ae259a.png"},1080:function(e,t,n){t.Z=n.p+"assets/images/rule-list-bb247d24aa2f5e009b4749dd447e9018.png"}}]);