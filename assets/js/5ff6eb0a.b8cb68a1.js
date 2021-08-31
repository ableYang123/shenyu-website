"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[8096],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return b}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),l=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=l(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(t),b=r,m=d["".concat(u,".").concat(b)]||d[b]||c[b]||i;return t?a.createElement(m,o(o({ref:n},s),{},{components:t})):a.createElement(m,o({ref:n},s))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var p={};for(var u in n)hasOwnProperty.call(n,u)&&(p[u]=n[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8727:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],p={title:"Dubbo Proxy",keywords:["Dubbo"],description:"Dubbo Client Access"},u=void 0,l={unversionedId:"user-guide/dubbo-proxy",id:"user-guide/dubbo-proxy",isDocsHomePage:!1,title:"Dubbo Proxy",description:"Dubbo Client Access",source:"@site/docs/user-guide/dubbo-proxy.md",sourceDirName:"user-guide",slug:"/user-guide/dubbo-proxy",permalink:"/docs/next/user-guide/dubbo-proxy",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/website/docs/user-guide/dubbo-proxy.md",version:"current",frontMatter:{title:"Dubbo Proxy",keywords:["Dubbo"],description:"Dubbo Client Access"},sidebar:"tutorialSidebar",previous:{title:"Client Property Config",permalink:"/docs/next/user-guide/property-config/client-property-config"},next:{title:"gRPC Proxy",permalink:"/docs/next/user-guide/grpc-proxy"}},s=[{value:"Add dubbo plugin in gateway",id:"add-dubbo-plugin-in-gateway",children:[]},{value:"Dubbo service access gateway",id:"dubbo-service-access-gateway",children:[]},{value:"Dubbo configuration",id:"dubbo-configuration",children:[{value:"Configure the interface with gateway",id:"configure-the-interface-with-gateway",children:[]},{value:"Dubbo user request and parameter explanation.",id:"dubbo-user-request-and-parameter-explanation",children:[]}]},{value:"Service governance",id:"service-governance",children:[]},{value:"Http --&gt; Gateway --&gt; Dubbo Provider",id:"http----gateway----dubbo-provider",children:[]}],c={toc:s};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This document is intended to help the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dubbo")," service access the ",(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dubbo")," plugin to handle ",(0,i.kt)("inlineCode",{parentName:"p"},"dubbo")," service."),(0,i.kt)("p",null,"Support Alibaba Dubbo(< 2.7.x) and Apache Dubbo (>=2.7.x)."),(0,i.kt)("p",null,"Before the connection, start ",(0,i.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," correctly, start ",(0,i.kt)("inlineCode",{parentName:"p"},"Dubbo")," plugin, and add related dependencies on the gateway and ",(0,i.kt)("inlineCode",{parentName:"p"},"Dubbo")," application client. Refer to the previous ",(0,i.kt)("a",{parentName:"p",href:"../quick-start/quick-start-dubbo"},"Quick start with Dubbo")," ."),(0,i.kt)("p",null,"For details about client access configuration, see ",(0,i.kt)("a",{parentName:"p",href:"./register-center-access"},"Application Client Access Config")," ."),(0,i.kt)("p",null,"For details about data synchronization configurations, see ",(0,i.kt)("a",{parentName:"p",href:"./use-data-sync"},"Data Synchronization Config")," ."),(0,i.kt)("h2",{id:"add-dubbo-plugin-in-gateway"},"Add dubbo plugin in gateway"),(0,i.kt)("p",null,"Add these dependencies in gateway's ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml"),"."),(0,i.kt)("p",null,"Alibaba dubbo user, configure the dubbo version and registry center with yours."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- apache shenyu alibaba dubbo plugin start--\x3e\n<dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-plugin-alibaba-dubbo</artifactId>\n   <version>${project.version}</version>\n</dependency>\n\x3c!-- apache shenyu  alibaba dubbo plugin end--\x3e\n<dependency>\n  <groupId>com.alibaba</groupId>\n  <artifactId>dubbo</artifactId>\n  <version>2.6.5</version>\n</dependency>\n<dependency>\n  <groupId>org.apache.curator</groupId>\n  <artifactId>curator-client</artifactId>\n  <version>4.0.1</version>\n</dependency>\n<dependency>\n  <groupId>org.apache.curator</groupId>\n  <artifactId>curator-framework</artifactId>\n  <version>4.0.1</version>\n</dependency>\n<dependency>\n  <groupId>org.apache.curator</groupId>\n  <artifactId>curator-recipes</artifactId>\n  <version>4.0.1</version>\n</dependency>\n")),(0,i.kt)("p",null,"Apache dubbo user, configure the dubbo version and registry center with yours."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!-- apache shenyu apache dubbo plugin start--\x3e\n<dependency>\n   <groupId>org.apache.shenyu</groupId>\n   <artifactId>shenyu-spring-boot-starter-plugin-apache-dubbo</artifactId>\n   <version>${project.version}</version>\n</dependency>\n\x3c!-- apache shenyu apache dubbo plugin end--\x3e\n\n<dependency>\n   <groupId>org.apache.dubbo</groupId>\n   <artifactId>dubbo</artifactId>\n   <version>2.7.5</version>\n</dependency>\n\x3c!-- Dubbo Nacos registry dependency start --\x3e\n<dependency>\n   <groupId>org.apache.dubbo</groupId>\n   <artifactId>dubbo-registry-nacos</artifactId>\n   <version>2.7.5</version>\n</dependency>\n<dependency>\n   <groupId>com.alibaba.nacos</groupId>\n   <artifactId>nacos-client</artifactId>\n   <version>1.1.4</version>\n</dependency>\n\x3c!-- Dubbo Nacos registry dependency  end--\x3e\n\n\x3c!-- Dubbo zookeeper registry dependency start--\x3e\n<dependency>\n   <groupId>org.apache.curator</groupId>\n   <artifactId>curator-client</artifactId>\n   <version>4.0.1</version>\n</dependency>\n<dependency>\n   <groupId>org.apache.curator</groupId>\n   <artifactId>curator-framework</artifactId>\n   <version>4.0.1</version>\n</dependency>\n<dependency>\n   <groupId>org.apache.curator</groupId>\n   <artifactId>curator-recipes</artifactId>\n   <version>4.0.1</version>\n</dependency>\n\x3c!-- Dubbo zookeeper registry dependency end --\x3e\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"restart gateway service.")),(0,i.kt)("h2",{id:"dubbo-service-access-gateway"},"Dubbo service access gateway"),(0,i.kt)("p",null,"Dubbo integration with gateway, please refer to : ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/tree/v2.4.0/shenyu-examples/shenyu-examples-dubbo"},"shenyu-examples-dubbo")," ."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Alibaba Dubbo User"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"SpringBoot"),(0,i.kt)("p",{parentName:"li"},"   Add these dependencies:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n     <groupId>org.apache.shenyu</groupId>\n     <artifactId>shenyu-spring-boot-starter-client-alibaba-dubbo</artifactId>\n     <version>${shenyu.version}</version>\n</dependency>\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Spring"),(0,i.kt)("p",{parentName:"li"},"Add these dependencies\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"   <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-client-alibaba-dubbo</artifactId>\n      <version>${shenyu.version}</version>\n   </dependency>\n")),(0,i.kt)("p",{parentName:"li"},"Inject these properties into your Spring beans XML file\uff1a"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<bean id ="alibabaDubboServiceBeanPostProcessor" class ="org.apache.shenyu.client.alibaba.dubbo.AlibabaDubboServiceBeanPostProcessor">\n     <constructor-arg  ref="shenyuRegisterCenterConfig"/>\n</bean>\n\n<bean id="shenyuRegisterCenterConfig" class="org.apache.shenyu.register.common.config.ShenyuRegisterCenterConfig">\n   <property name="registerType" value="http"/>\n   <property name="serverList" value="http://localhost:9095"/>\n   <property name="props">\n       <map>\n           <entry key="contextPath" value="/your contextPath"/>\n           <entry key="appName" value="your name"/>\n           <entry key="isFull" value="false"/>\n       </map>\n    </property>\n </bean>\n'))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Apache Dubbo User"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"SpringBoot"),(0,i.kt)("p",{parentName:"li"},"Add these dependencies:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"}," <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-client-apache-dubbo</artifactId>\n      <version>${shenyu.version}</version>\n </dependency>\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Spring"),(0,i.kt)("p",{parentName:"li"},"Add these dependencies:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"   <dependency>\n       <groupId>org.apache.shenyu</groupId>\n       <artifactId>shenyu-client-apache-dubbo</artifactId>\n       <version>${shenyu.version}</version>\n    </dependency>\n")),(0,i.kt)("p",{parentName:"li"},"Injecct these properties into your Spring beans XML file:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<bean id ="apacheDubboServiceBeanPostProcessor" class ="org.apache.shenyu.client.apache.dubbo.ApacheDubboServiceBeanPostProcessor">\n   <constructor-arg  ref="shenyuRegisterCenterConfig"/>\n</bean>\n\n<bean id="shenyuRegisterCenterConfig" class="org.apache.shenyu.register.common.config.ShenyuRegisterCenterConfig">\n   <property name="registerType" value="http"/>\n   <property name="serverList" value="http://localhost:9095"/>\n   <property name="props">\n        <map>\n             <entry key="contextPath" value="/your contextPath"/>\n             <entry key="appName" value="your name"/>\n             <entry key="isFull" value="false"/>\n        </map>\n   </property>\n</bean>\n')))))),(0,i.kt)("h2",{id:"dubbo-configuration"},"Dubbo configuration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enable ",(0,i.kt)("inlineCode",{parentName:"li"},"dubbo")," option in ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-admin"),"."),(0,i.kt)("li",{parentName:"ul"},"Configure your registry address in ",(0,i.kt)("inlineCode",{parentName:"li"},"dubbo"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'{"register":"zookeeper://localhost:2181"}   or {"register":"nacos://localhost:8848"}\n')),(0,i.kt)("h3",{id:"configure-the-interface-with-gateway"},"Configure the interface with gateway"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"you can add the annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"@ShenyuDubboClient")," to your dubbo service implementation class, so that the interface method will be configured with gateway.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Start your provider. After successful startup, go to PluginList -> rpc Proxy -> dubbo in the backend management system. You will see auto-registered selectors and rules information."))),(0,i.kt)("h3",{id:"dubbo-user-request-and-parameter-explanation"},"Dubbo user request and parameter explanation."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Communicate with dubbo service through Http transport protocol."),(0,i.kt)("li",{parentName:"ul"},"Apache ShenYu gateway need a route prefix which configured when accessing the project.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# for example: you have an order service and it has a interface, registry address: /order/test/save\n\n# now we can communicate with gateway through POST request http://localhost:9195/order/test/save\n\n# localhost:9195 is gateway's ip port\uff0cdefault port is 9195 \uff0c/order is the contextPath you set through gateway.\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"parameter deliver:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"communicate with gateway through body or json of http post request."),(0,i.kt)("li",{parentName:"ul"},"more parameter types, please refer to the interface definition in  ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-shenyu/tree/v2.4.0/shenyu-examples/shenyu-examples-dubbo"},"shenyu-examples-dubbo")," and parameter passing\nmethod."))),(0,i.kt)("li",{parentName:"ul"},"Single java bean parameter type (",(0,i.kt)("inlineCode",{parentName:"li"},"default"),")."),(0,i.kt)("li",{parentName:"ul"},"Multi-parameter type support, add this config value in gateway's yaml file:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  dubbo:\n    parameter: multi\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support for customized multi-parameter type"),(0,i.kt)("li",{parentName:"ul"},"Create a new implementation class ",(0,i.kt)("inlineCode",{parentName:"li"},"MyDubboParamResolveService")," in your gateway project of ",(0,i.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.web.dubbo.DubboParamResolveService"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public interface DubboParamResolveService {\n\n   /**\n    * Build parameter pair.\n    * this is Resolve http body to get dubbo param.\n    *\n    * @param body           the body\n    * @param parameterTypes the parameter types\n    * @return the pair\n    */\n   Pair<String[], Object[]> buildParameter(String body, String parameterTypes);\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"body")," is the json string in http request."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"parameterTypes"),": the list of method parameter types that are matched\uff0csplit with ",(0,i.kt)("inlineCode",{parentName:"li"},","),"."),(0,i.kt)("li",{parentName:"ul"},"in Pair\uff0cleft is parmeter type\uff0cright is parameter value, it's the standard of dubbo generalization calls."),(0,i.kt)("li",{parentName:"ul"},"Inject your class into Spring bean, cover the default implementation.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic DubboParamResolveService myDubboParamResolveService() {\n      return new MyDubboParamResolveService();\n}\n")),(0,i.kt)("h2",{id:"service-governance"},"Service governance"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Tag route"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"Dubbo_Tag_Route")," when send request, the current request will be routed to the provider of the specified tag, which is only valid for the current request."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Explicit Target"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Set the ",(0,i.kt)("inlineCode",{parentName:"li"},"url")," property in the annotation ",(0,i.kt)("inlineCode",{parentName:"li"},"@ShenyuDubboClient"),"."),(0,i.kt)("li",{parentName:"ul"},"Update the configuration in Admin."),(0,i.kt)("li",{parentName:"ul"},"It's valid for all request."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Param valid and ShenyuException"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Set ",(0,i.kt)("inlineCode",{parentName:"p"},'validation="shenyuValidation"'),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"When ",(0,i.kt)("inlineCode",{parentName:"p"},"ShenyuException")," is thrown in the interface, exception information will be returned. It should be noted that ",(0,i.kt)("inlineCode",{parentName:"p"},"ShenyuException")," is thrown explicitly."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Service(validation = "shenyuValidation")\npublic class TestServiceImpl implements TestService {\n\n        @Override\n        @ShenyuDubboClient(path = "/test", desc = "test method")\n        public String test(@Valid HelloServiceRequest name) throws ShenyuException {\n            if (true){\n                throw new ShenyuException("Param binding error.");\n            }\n            return "Hello " + name.getName();\n        }\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Request param"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java"},'    public class HelloServiceRequest implements Serializable {\n\n        private static final long serialVersionUID = -5968745817846710197L;\n\n        @NotEmpty(message = "name cannot be empty")\n        private String name;\n\n        @NotNull(message = "age cannot be null")\n        private Integer age;\n\n        public String getName() {\n            return name;\n        }\n\n        public void setName(String name) {\n            this.name = name;\n        }\n\n        public Integer getAge() {\n            return age;\n        }\n\n        public void setAge(Integer age) {\n            this.age = age;\n        }\n    }\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Send request"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": ""\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Response"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 500,\n    "message": "Internal Server Error",\n    "data": "name cannot be empty,age cannot be null"\n}\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Error message"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": 500,\n    "message": "Internal Server Error",\n    "data": "Param binding error."\n}\n')))))),(0,i.kt)("h2",{id:"http----gateway----dubbo-provider"},"Http --\x3e Gateway --\x3e Dubbo Provider"),(0,i.kt)("p",null,"It basically switches from HTTP request to Dubbo protocol, then invoke Dubbo service and return to the result.\nTwo things need to notice after intgeration with gateway, one is the added annoation ",(0,i.kt)("inlineCode",{parentName:"p"},"@ShenyuDubboClient"),", another is a path used to speicify the request path.\nAnd you added a config value of ",(0,i.kt)("inlineCode",{parentName:"p"},"contextPath"),"."),(0,i.kt)("p",null,"If you have a function like this, the config value in contextPath is ",(0,i.kt)("inlineCode",{parentName:"p"},"/dubbo")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    @ShenyuDubboClient(path = "/insert", desc = "insert data")\n    public DubboTest insert(final DubboTest dubboTest) {\n        return dubboTest;\n    }\n')),(0,i.kt)("p",null,"So our request path is: http://localhost:9195/dubbo/insert, localhost:9195 is the gateway's domain name,if you changed before,so does with yours here.."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"DubboTest")," is a java bean object\uff0chas 2 parameters, id and name, so we can transfer the value's json type through request body."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{"id":"1234","name":"XIAO5y"}\n')),(0,i.kt)("p",null,"If your interface has no parameter, then the value is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"{}\n")),(0,i.kt)("p",null,"If the interface has multiple parameters, refer to the multi-parameter type support described above."))}d.isMDXComponent=!0}}]);