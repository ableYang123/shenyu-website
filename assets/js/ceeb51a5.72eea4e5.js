"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[488],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,k=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1407:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],i={sidebar_position:1,title:"Environment Setup",keywords:["soul"],description:"Environment Setup"},u=void 0,s={unversionedId:"users-guide/soul-set-up",id:"version-2.3.0/users-guide/soul-set-up",isDocsHomePage:!1,title:"Environment Setup",description:"Environment Setup",source:"@site/versioned_docs/version-2.3.0/users-guide/soul-set-up.md",sourceDirName:"users-guide",slug:"/users-guide/soul-set-up",permalink:"/docs/2.3.0/users-guide/soul-set-up",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/website/versioned_docs/version-2.3.0/users-guide/soul-set-up.md",version:"2.3.0",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Environment Setup",keywords:["soul"],description:"Environment Setup"},sidebar:"version-2.3.0/tutorialSidebar",previous:{title:"Selector Detailed Explanation",permalink:"/docs/2.3.0/admin/selector-and-rule"},next:{title:"Integrate Http with soul gateway",permalink:"/docs/2.3.0/users-guide/http-proxy"}},p=[{value:"Features",id:"features",children:[]},{value:"Soul-Admin",id:"soul-admin",children:[{value:"remote download",id:"remote-download",children:[]},{value:"docker",id:"docker",children:[]},{value:"local",id:"local",children:[]}]},{value:"Soul-Bootstrap",id:"soul-bootstrap",children:[{value:"remote download",id:"remote-download-1",children:[]},{value:"docker",id:"docker-1",children:[]},{value:"local",id:"local-1",children:[]}]},{value:"Build your own gateway\uff08recommend\uff09",id:"build-your-own-gatewayrecommend",children:[]}],d={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Soul is an open source plugin framework, which is flexibility and extensibility since 2.2.0 version.\nWith soul you can easily create application with your own gateway."),(0,o.kt)("li",{parentName:"ul"},"System Requirement: JDK 1.8+, Mysql 5.5.20 +.")),(0,o.kt)("h2",{id:"soul-admin"},"Soul-Admin"),(0,o.kt)("h3",{id:"remote-download"},"remote download"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/dromara/soul/releases/tag/2.3.0"},"2.3.0")," download ",(0,o.kt)("inlineCode",{parentName:"p"},"soul-admin-bin-2.3.0-RELEASE.tar.gz"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"tar ",(0,o.kt)("inlineCode",{parentName:"p"},"soul-admin-bin-2.3.0-RELEASE.tar.gz"),". cd ",(0,o.kt)("inlineCode",{parentName:"p"},"/bin"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"use ",(0,o.kt)("inlineCode",{parentName:"p"},"h2")," store."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> windwos : start.bat --spring.profiles.active = h2\n\n> linux : ./start.sh --spring.profiles.active = h2\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"use ",(0,o.kt)("inlineCode",{parentName:"li"},"mysql")," store.  cd ",(0,o.kt)("inlineCode",{parentName:"li"},"/conf")," and then modify ",(0,o.kt)("inlineCode",{parentName:"li"},"mysql")," config in  ",(0,o.kt)("inlineCode",{parentName:"li"},"application.yaml"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> windwos : start.bat \n\n> linux : ./start.sh \n")),(0,o.kt)("h3",{id:"docker"},"docker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> docker pull dromara/soul-admin\n> docker network create soul\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"use ",(0,o.kt)("inlineCode",{parentName:"li"},"h2")," store")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> docker run -d -p 9095:9095 --net soul dromara/soul-admin\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"use ",(0,o.kt)("inlineCode",{parentName:"li"},"mysql")," store.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'> docker run -e "SPRING_PROFILES_ACTIVE=mysql" -d -p 9095:9095 --net soul dromara/soul-admin\n')),(0,o.kt)("p",null,"If you want to override environment variables, you can do like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'docker run -e "SPRING_PROFILES_ACTIVE=mysql" -e "spring.datasource.url=jdbc:mysql://192.168.1.9:3306/soul?useUnicode=true&characterEncoding=utf-8&useSSL=false" -e "spring.datasource.password=123456" -d -p 9095:9095 --net soul dromara/soul-admin\n')),(0,o.kt)("p",null,"Another way, bind volume and mounts"),(0,o.kt)("p",null,"Put your ",(0,o.kt)("inlineCode",{parentName:"p"},"application.yml")," in xxx directory, then run like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -v D:\\tmp\\conf:/opt/soul-admin/conf/ -d -p 9095:9095 --net soul dromara/soul-admin\n")),(0,o.kt)("h3",{id:"local"},"local"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"download")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> git clone https://github.com/dromara/soul.git\n> cd soul\n> mvn clean install -Dmaven.javadoc.skip=true -B -Drat.skip=true -Djacoco.skip=true -DskipITs -DskipTests\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"setup for  ",(0,o.kt)("inlineCode",{parentName:"p"},"SoulAdminBootstrap"),"."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"if use h2 store please set env  ",(0,o.kt)("inlineCode",{parentName:"p"},"--spring.profiles.active = h2"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"if use mysql store, please modify ",(0,o.kt)("inlineCode",{parentName:"p"},"mysql")," config in  ",(0,o.kt)("inlineCode",{parentName:"p"},"application.yaml"),"."))))),(0,o.kt)("p",null,"Visit ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:9095/index.html ")," default username\uff1aadmin  password: 123456."),(0,o.kt)("h2",{id:"soul-bootstrap"},"Soul-Bootstrap"),(0,o.kt)("h3",{id:"remote-download-1"},"remote download"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/dromara/soul/releases/tag/2.3.0"},"2.3.0")," download ",(0,o.kt)("inlineCode",{parentName:"p"},"soul-bootstrap-bin-2.3.0-RELEASE.tar.gz"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"tar ",(0,o.kt)("inlineCode",{parentName:"p"},"soul-bootstrap-bin-2.3.0-RELEASE.tar.gz"),", ant then cd ",(0,o.kt)("inlineCode",{parentName:"p"},"/bin"),"."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> windwos : start.bat \n\n> linux : ./start.sh \n")),(0,o.kt)("h3",{id:"docker-1"},"docker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> docker network create soul\n> docker pull dromara/soul-bootstrap\n> docker run -d -p 9195:9195 --net soul dromara/soul-bootstrap\n")),(0,o.kt)("h3",{id:"local-1"},"local"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> git clone https://github.com/dromara/soul.git\n> cd soul\n> mvn clean install -Dmaven.javadoc.skip=true -B -Drat.skip=true -Djacoco.skip=true -DskipITs -DskipTests\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"setup for ",(0,o.kt)("inlineCode",{parentName:"li"},"SoulBootstrap"),".")),(0,o.kt)("h2",{id:"build-your-own-gatewayrecommend"},"Build your own gateway\uff08recommend\uff09"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"First of all, create a new Spring Boot project. You can refer to the way how you start the soul-bootstrap, or visit ",(0,o.kt)("a",{parentName:"p",href:"https://spring.io/quickstart"},"Spring Initializer"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Add these JAR into your Maven pom.xml:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"  <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-webflux</artifactId>\n        <version>2.2.2.RELEASE</version>\n  </dependency>\n\n  <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-actuator</artifactId>\n        <version>2.2.2.RELEASE</version>\n  </dependency>\n\n  \x3c!--soul gateway start--\x3e\n  <dependency>\n        <groupId>org.dromara</groupId>\n        <artifactId>soul-spring-boot-starter-gateway</artifactId>\n        <version>${last.version}</version>\n  </dependency>\n  \n   \x3c!--soul data sync start use websocket--\x3e\n   <dependency>\n        <groupId>org.dromara</groupId>\n        <artifactId>soul-spring-boot-starter-sync-data-websocket</artifactId>\n        <version>${last.version}</version>\n   </dependency>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add these config values into your ",(0,o.kt)("inlineCode",{parentName:"li"},"application.yaml"),"\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  main:\n    allow-bean-definition-overriding: true\n\nmanagement:\n  health:\n    defaults:\n      enabled: false\nsoul :\n  sync:\n    websocket :\n      urls: ws://localhost:9095/websocket  // set your soul-admin address\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Environment Setup has finished, now your project is launched.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note that only the gateway has been set up, but no plugins have been add. For example, to access HTTP requests, you need to add the Divide plugin, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/projects/shenyu-2.3.0/http-proxy/"},"Http Plugin")," . To access the Dubbo service, you need to add the Dubbo plugin, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/projects/shenyu-2.3.0/dubbo-proxy/"},"Dubbo Plugin")," .")))}c.isMDXComponent=!0}}]);