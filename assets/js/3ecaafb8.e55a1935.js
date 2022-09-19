"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[32857],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>d});var t=a(67294);function s(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){s(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,t,s=function(e,n){if(null==e)return{};var a,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(s[a]=e[a]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=t.createContext({}),p=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(a),d=s,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return a?t.createElement(h,l(l({ref:n},c),{},{components:a})):t.createElement(h,l({ref:n},c))}));function d(e,n){var a=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=a.length,l=new Array(o);l[0]=u;var r={};for(var i in n)hasOwnProperty.call(n,i)&&(r[i]=n[i]);r.originalType=e,r.mdxType="string"==typeof e?e:s,l[1]=r;for(var p=2;p<o;p++)l[p]=a[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},64303:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>i});var t=a(87462),s=(a(67294),a(3905));const o={sidebar_position:4,title:"K8s Deployment",keywords:["k8s"],description:"K8s Deployment"},l=void 0,r={unversionedId:"deployment/deployment-k8s",id:"deployment/deployment-k8s",isDocsHomePage:!1,title:"K8s Deployment",description:"K8s Deployment",source:"@site/docs/deployment/deployment-k8s.md",sourceDirName:"deployment",slug:"/deployment/deployment-k8s",permalink:"/docs/next/deployment/deployment-k8s",editUrl:"https://github.com/apache/shenyu-website/edit/main/docs/deployment/deployment-k8s.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"K8s Deployment",keywords:["k8s"],description:"K8s Deployment"},sidebar:"tutorialSidebar",previous:{title:"Docker Deployment",permalink:"/docs/next/deployment/deployment-docker"},next:{title:"Helm Deployment",permalink:"/docs/next/deployment/deployment-helm"}},i=[{value:"Example 1: Using h2 as a database",id:"example-1-using-h2-as-a-database",children:[{value:"1. Create Namespace and ConfigMap",id:"1-create-namespace-and-configmap",children:[]},{value:"2. Create shenyu-admin",id:"2-create-shenyu-admin",children:[]},{value:"3. Create shenyu-bootstrap",id:"3-create-shenyu-bootstrap",children:[]}]},{value:"Example 2: Use MySQL as the database",id:"example-2-use-mysql-as-the-database",children:[{value:"1. Create Namespace and ConfigMap",id:"1-create-namespace-and-configmap-1",children:[]},{value:"2. Create Endpoints to represent MySQL",id:"2-create-endpoints-to-represent-mysql",children:[]},{value:"3. Create shenyu-admin",id:"3-create-shenyu-admin",children:[]},{value:"4. Create shenyu-bootstrap",id:"4-create-shenyu-bootstrap",children:[]}]},{value:"Test Access",id:"test-access",children:[]}],p={toc:i};function c(e){let{components:n,...a}=e;return(0,s.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Before you read this document, you need to complete some preparations before deploying Shenyu according to the ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/deployment/deployment-before"},"Deployment Prerequisites document"),".")),(0,s.kt)("p",null,"This article introduces the use of ",(0,s.kt)("inlineCode",{parentName:"p"},"K8s")," to deploy the ",(0,s.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Catalog"),(0,s.kt)("p",{parentName:"blockquote"},"Example 1: Using h2 as a database"),(0,s.kt)("ol",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ol"},"create Namespace and ConfigMap"),(0,s.kt)("li",{parentName:"ol"},"deploying shenyu-admin"),(0,s.kt)("li",{parentName:"ol"},"deploy shenyu-bootstrap")),(0,s.kt)("p",{parentName:"blockquote"},"Example 2: Use MySQL as the database"),(0,s.kt)("p",{parentName:"blockquote"},"Similar to the h2 process, there are two points to note"),(0,s.kt)("ol",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ol"},"you need to load ",(0,s.kt)("a",{parentName:"li",href:"https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.18/mysql-connector-java-8.0.18.jar"},"mysql-connector.jar"),", the download command is executed when the container is started"),(0,s.kt)("li",{parentName:"ol"},"you need to specify an external MySQL database configuration to proxy the external MySQL database via Endpoints")),(0,s.kt)("p",{parentName:"blockquote"},"The process is as follows."),(0,s.kt)("ol",{parentName:"blockquote"},(0,s.kt)("li",{parentName:"ol"},"create Namespace and ConfigMap"),(0,s.kt)("li",{parentName:"ol"},"create Endpoints to proxy external MySQL"),(0,s.kt)("li",{parentName:"ol"},"deploy shenyu-admin"),(0,s.kt)("li",{parentName:"ol"},"deploy shenyu-bootstrap"))),(0,s.kt)("h2",{id:"example-1-using-h2-as-a-database"},"Example 1: Using h2 as a database"),(0,s.kt)("h3",{id:"1-create-namespace-and-configmap"},"1. Create Namespace and ConfigMap"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"create shenyu-ns.yaml")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Namespace\nmetadata:\n  name: shenyu\n  labels:\n    name: shenyu\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: shenyu-cm\n  namespace: shenyu\ndata:\n  shenyu-admin-application.yml: |\n    server:\n      port: 9095\n      address: 0.0.0.0\n    spring:\n      profiles:\n        active: h2\n      thymeleaf:\n        cache: true\n        encoding: utf-8\n        enabled: true\n        prefix: classpath:/static/\n        suffix: .html\n      mvc:\n        pathmatch:\n          matching-strategy: ant_path_matcher\n    mybatis:\n      config-location: classpath:/mybatis/mybatis-config.xml\n      mapper-locations: classpath:/mappers/*.xml\n    shenyu:\n      register:\n        registerType: http #http #zookeeper #etcd #nacos #consul\n        serverLists: #localhost:2181 #http://localhost:2379 #localhost:8848\n        props:\n          sessionTimeout: 5000\n          connectionTimeout: 2000\n          checked: true\n          zombieCheckTimes: 5\n          scheduledTime: 10\n          nacosNameSpace: ShenyuRegisterCenter\n      sync:\n        websocket:\n          enabled: true\n          messageMaxSize: 10240\n          allowOrigins: ws://shenyu-admin-svc.shenyu.svc.cluster.local:9095;ws://shenyu-bootstrap-svc.shenyu.svc.cluster.local:9195;\n      ldap:\n        enabled: false\n        url: ldap://xxxx:xxx\n        bind-dn: cn=xxx,dc=xxx,dc=xxx\n        password: xxxx\n        base-dn: ou=xxx,dc=xxx,dc=xxx\n        object-class: person\n        login-field: cn\n      jwt:\n        expired-seconds: 86400000\n      shiro:\n        white-list:\n          - /\n          - /favicon.*\n          - /static/**\n          - /index**\n          - /platform/login\n          - /websocket\n          - /error\n          - /actuator/health\n          - /swagger-ui.html\n          - /webjars/**\n          - /swagger-resources/**\n          - /v2/api-docs\n          - /csrf\n      swagger:\n        enable: true\n      apidoc:\n        gatewayUrl: http://127.0.0.1:9195\n        envProps:\n          - envLabel: Test environment\n            addressLabel: Request Address\n            addressUrl: http://127.0.0.1:9195\n          - envLabel: Prod environment\n            addressLabel: Request Address\n            addressUrl: http://127.0.0.1:9195\n    logging:\n      level:\n        root: info\n        org.springframework.boot: info\n        org.apache.ibatis: info\n        org.apache.shenyu.bonuspoint: info\n        org.apache.shenyu.lottery: info\n        org.apache.shenyu: info\n  shenyu-admin-application-h2.yml: |\n    shenyu:\n      database:\n        dialect: h2\n        init_script: "sql-script/h2/schema.sql"\n        init_enable: true\n    spring:\n      datasource:\n        url: jdbc:h2:mem:~/shenyu;DB_CLOSE_DELAY=-1;MODE=MySQL;\n        username: sa\n        password: sa\n        driver-class-name: org.h2.Driver\n  shenyu-bootstrap-application.yml: |\n    server:\n      port: 9195\n      address: 0.0.0.0\n    spring:\n      main:\n        allow-bean-definition-overriding: true\n        allow-circular-references: true\n      application:\n        name: shenyu-bootstrap\n      codec:\n        max-in-memory-size: 2MB\n      cloud:\n        discovery:\n          enabled: false\n        nacos:\n          discovery:\n            server-addr: 127.0.0.1:8848 # Spring Cloud Alibaba Dubbo use this.\n            enabled: false\n            namespace: ShenyuRegisterCenter\n    eureka:\n      client:\n        enabled: false\n        serviceUrl:\n          defaultZone: http://localhost:8761/eureka/\n      instance:\n        prefer-ip-address: true\n    management:\n      health:\n        defaults:\n          enabled: false\n    shenyu:\n      matchCache:\n        enabled: false\n        maxFreeMemory: 256 # 256MB\n      netty:\n        http:\n          # set to false, user can custom the netty tcp server config.\n          webServerFactoryEnabled: true\n          selectCount: 1\n          workerCount: 4\n          accessLog: false\n          serverSocketChannel:\n            soRcvBuf: 87380\n            soBackLog: 128\n            soReuseAddr: false\n            connectTimeoutMillis: 10000\n            writeBufferHighWaterMark: 65536\n            writeBufferLowWaterMark: 32768\n            writeSpinCount: 16\n            autoRead: false\n            allocType: "pooled"\n            messageSizeEstimator: 8\n            singleEventExecutorPerGroup: true\n          socketChannel:\n            soKeepAlive: false\n            soReuseAddr: false\n            soLinger: -1\n            tcpNoDelay: true\n            soRcvBuf: 87380\n            soSndBuf: 16384\n            ipTos: 0\n            allowHalfClosure: false\n            connectTimeoutMillis: 10000\n            writeBufferHighWaterMark: 65536\n            writeBufferLowWaterMark: 32768\n            writeSpinCount: 16\n            autoRead: false\n            allocType: "pooled"\n            messageSizeEstimator: 8\n            singleEventExecutorPerGroup: true\n      instance:\n        enabled: false\n        registerType: zookeeper #etcd #consul\n        serverLists: localhost:2181 #http://localhost:2379 #localhost:8848\n        props:\n      cross:\n        enabled: true\n        allowedHeaders:\n        allowedMethods: "*"\n        allowedAnyOrigin: true # the same of Access-Control-Allow-Origin: "*"\n        allowedExpose: ""\n        maxAge: "18000"\n        allowCredentials: true\n      switchConfig:\n        local: true\n      file:\n        enabled: true\n        maxSize : 10\n      sync:\n        websocket:\n          urls: ws://shenyu-admin-svc.shenyu.svc.cluster.local:9095/websocket\n          allowOrigin: ws://shenyu-bootstrap-svc.shenyu.svc.cluster.local:9195\n      exclude:\n        enabled: false\n        paths:\n          - /favicon.ico\n      fallback:\n        enabled: false\n        paths:\n          - /fallback/hystrix\n          - /fallback/resilience4j\n      health:\n        enabled: false\n        paths:\n          - /actuator/health\n          - /health_check\n      extPlugin:\n        path:\n        enabled: true\n        threads: 1\n        scheduleTime: 300\n        scheduleDelay: 30\n      scheduler:\n        enabled: false\n        type: fixed\n        threads: 16\n      upstreamCheck:\n        enabled: false\n        timeout: 3000\n        healthyThreshold: 1\n        unhealthyThreshold: 1\n        interval: 5000\n        printEnabled: true\n        printInterval: 60000\n      ribbon:\n        serverListRefreshInterval: 10000\n      metrics:\n        enabled: false\n        name : prometheus\n        host: 127.0.0.1\n        port: 8090\n        jmxConfig:\n        props:\n          jvm_enabled: true\n      local:\n        enabled: false\n        sha512Key: "BA3253876AED6BC22D4A6FF53D8406C6AD864195ED144AB5C87621B6C233B548BAEAE6956DF346EC8C17F5EA10F35EE3CBC514797ED7DDD3145464E2A0BAB413"\n    logging:\n      level:\n        root: info\n        org.springframework.boot: info\n        org.apache.ibatis: info\n        org.apache.shenyu.bonuspoint: info\n        org.apache.shenyu.lottery: info\n        org.apache.shenyu: info\n\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"execute ",(0,s.kt)("inlineCode",{parentName:"li"},"kubectl apply -f shenyu-ns.yaml"))),(0,s.kt)("h3",{id:"2-create-shenyu-admin"},"2. Create shenyu-admin"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"create shenyu-admin.yaml")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# Example of using the nodeport type to expose ports\napiVersion: v1\nkind: Service\nmetadata:\n  namespace: shenyu\n  name: shenyu-admin-svc\nspec:\n  selector:\n    app: shenyu-admin\n  type: NodePort\n  ports:\n  - protocol: TCP\n    port: 9095\n    targetPort: 9095\n    nodePort: 31095\n---\n# shenyu-admin\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  namespace: shenyu\n  name: shenyu-admin\nspec:\n  selector:\n    matchLabels:\n      app: shenyu-admin\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app: shenyu-admin\n    spec:\n      volumes:\n      - name: shenyu-admin-application\n        configMap:\n          name: shenyu-cm\n          items:\n          - key: shenyu-admin-application.yml\n            path: shenyu-admin-application.yml\n      - name: shenyu-admin-application-h2\n        configMap:\n          name: shenyu-cm\n          items:\n          - key: shenyu-admin-application-h2.yml\n            path: shenyu-admin-application-h2.yml\n      containers:\n      - name: shenyu-admin\n        image: apache/shenyu-admin:latest\n        imagePullPolicy: Always\n        ports:\n        - containerPort: 9095\n        env:\n        - name: 'TZ'\n          value: 'Asia/Beijing'\n        volumeMounts:\n        - name: shenyu-admin-application\n          mountPath: /opt/shenyu-admin/conf/application.yml\n          subPath: shenyu-admin-application.yml\n        - name: shenyu-admin-application-h2\n          mountPath: /opt/shenyu-admin/conf/application-h2.yml\n          subPath: shenyu-admin-application-h2.yml\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"execute",(0,s.kt)("inlineCode",{parentName:"li"},"kubectl apply -f shenyu-admin.yaml"))),(0,s.kt)("h3",{id:"3-create-shenyu-bootstrap"},"3. Create shenyu-bootstrap"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"create shenyu-bootstrap.yaml")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# Example of using the nodeport type to expose ports\napiVersion: v1\nkind: Service\nmetadata:\n  namespace: shenyu\n  name: shenyu-bootstrap-svc\nspec:\n  selector:\n    app: shenyu-bootstrap\n  type: NodePort\n  ports:\n  - protocol: TCP\n    port: 9195\n    targetPort: 9195\n    nodePort: 31195\n---\n# shenyu-bootstrap\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  namespace: shenyu\n  name: shenyu-bootstrap\nspec:\n  selector:\n    matchLabels:\n      app: shenyu-bootstrap\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app: shenyu-bootstrap\n    spec:\n      volumes:\n      - name: shenyu-bootstrap-application\n        configMap:\n          name: shenyu-cm\n          items:\n          - key: shenyu-bootstrap-application.yml\n            path: shenyu-bootstrap-application.yml\n      containers:\n      - name: shenyu-bootstrap\n        image: apache/shenyu-bootstrap:latest\n        ports:\n        - containerPort: 9195\n        env:\n        - name: TZ\n          value: Asia/Beijing\n        volumeMounts:\n        - name: shenyu-bootstrap-application\n          mountPath: /opt/shenyu-bootstrap/conf/application.yml\n          subPath: shenyu-bootstrap-application.yml\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"execute ",(0,s.kt)("inlineCode",{parentName:"li"},"kubectl apply -f shenyu-bootstrap.yaml"))),(0,s.kt)("h2",{id:"example-2-use-mysql-as-the-database"},"Example 2: Use MySQL as the database"),(0,s.kt)("h3",{id:"1-create-namespace-and-configmap-1"},"1. Create Namespace and ConfigMap"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"create shenyu-ns.yaml")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Namespace\nmetadata:\n  name: shenyu\n  labels:\n    name: shenyu\n---\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: shenyu-cm\n  namespace: shenyu\ndata:\n  shenyu-admin-application.yml: |\n    server:\n      port: 9095\n      address: 0.0.0.0\n    spring:\n      profiles:\n        active: mysql\n      thymeleaf:\n        cache: true\n        encoding: utf-8\n        enabled: true\n        prefix: classpath:/static/\n        suffix: .html\n      mvc:\n        pathmatch:\n          matching-strategy: ant_path_matcher\n    mybatis:\n      config-location: classpath:/mybatis/mybatis-config.xml\n      mapper-locations: classpath:/mappers/*.xml\n    shenyu:\n      register:\n        registerType: http #http #zookeeper #etcd #nacos #consul\n        serverLists: #localhost:2181 #http://localhost:2379 #localhost:8848\n        props:\n          sessionTimeout: 5000\n          connectionTimeout: 2000\n          checked: true\n          zombieCheckTimes: 5\n          scheduledTime: 10\n          nacosNameSpace: ShenyuRegisterCenter\n      sync:\n        websocket:\n          enabled: true\n          messageMaxSize: 10240\n          allowOrigins: ws://shenyu-admin-svc.shenyu.svc.cluster.local:9095;ws://shenyu-bootstrap-svc.shenyu.svc.cluster.local:9195;\n      ldap:\n        enabled: false\n        url: ldap://xxxx:xxx\n        bind-dn: cn=xxx,dc=xxx,dc=xxx\n        password: xxxx\n        base-dn: ou=xxx,dc=xxx,dc=xxx\n        object-class: person\n        login-field: cn\n      jwt:\n        expired-seconds: 86400000\n      shiro:\n        white-list:\n          - /\n          - /favicon.*\n          - /static/**\n          - /index**\n          - /platform/login\n          - /websocket\n          - /error\n          - /actuator/health\n          - /swagger-ui.html\n          - /webjars/**\n          - /swagger-resources/**\n          - /v2/api-docs\n          - /csrf\n      swagger:\n        enable: true\n      apidoc:\n        gatewayUrl: http://127.0.0.1:9195\n        envProps:\n          - envLabel: Test environment\n            addressLabel: Request Address\n            addressUrl: http://127.0.0.1:9195\n          - envLabel: Prod environment\n            addressLabel: Request Address\n            addressUrl: http://127.0.0.1:9195\n    logging:\n      level:\n        root: info\n        org.springframework.boot: info\n        org.apache.ibatis: info\n        org.apache.shenyu.bonuspoint: info\n        org.apache.shenyu.lottery: info\n        org.apache.shenyu: info\n  shenyu-admin-application-mysql.yml: |\n    shenyu:\n      database:\n        dialect: mysql\n        init_script: "sql-script/mysql/schema.sql"\n        init_enable: true\n    spring:\n      datasource:\n        url: jdbc:mysql://mysql.shenyu.svc.cluster.local:3306/shenyu?useUnicode=true&characterEncoding=utf-8&useSSL=false\n        username: {your_mysql_user}\n        password: {your_mysql_password}\n        driver-class-name: com.mysql.jdbc.Driver\n  shenyu-bootstrap-application.yml: |\n    server:\n      port: 9195\n      address: 0.0.0.0\n    spring:\n      main:\n        allow-bean-definition-overriding: true\n        allow-circular-references: true\n      application:\n        name: shenyu-bootstrap\n      codec:\n        max-in-memory-size: 2MB\n      cloud:\n        discovery:\n          enabled: false\n        nacos:\n          discovery:\n            server-addr: 127.0.0.1:8848 # Spring Cloud Alibaba Dubbo use this.\n            enabled: false\n            namespace: ShenyuRegisterCenter\n    eureka:\n      client:\n        enabled: false\n        serviceUrl:\n          defaultZone: http://localhost:8761/eureka/\n      instance:\n        prefer-ip-address: true\n    management:\n      health:\n        defaults:\n          enabled: false\n    shenyu:\n      matchCache:\n        enabled: false\n        maxFreeMemory: 256 # 256MB\n      netty:\n        http:\n          # set to false, user can custom the netty tcp server config.\n          webServerFactoryEnabled: true\n          selectCount: 1\n          workerCount: 4\n          accessLog: false\n          serverSocketChannel:\n            soRcvBuf: 87380\n            soBackLog: 128\n            soReuseAddr: false\n            connectTimeoutMillis: 10000\n            writeBufferHighWaterMark: 65536\n            writeBufferLowWaterMark: 32768\n            writeSpinCount: 16\n            autoRead: false\n            allocType: "pooled"\n            messageSizeEstimator: 8\n            singleEventExecutorPerGroup: true\n          socketChannel:\n            soKeepAlive: false\n            soReuseAddr: false\n            soLinger: -1\n            tcpNoDelay: true\n            soRcvBuf: 87380\n            soSndBuf: 16384\n            ipTos: 0\n            allowHalfClosure: false\n            connectTimeoutMillis: 10000\n            writeBufferHighWaterMark: 65536\n            writeBufferLowWaterMark: 32768\n            writeSpinCount: 16\n            autoRead: false\n            allocType: "pooled"\n            messageSizeEstimator: 8\n            singleEventExecutorPerGroup: true\n      instance:\n        enabled: false\n        registerType: zookeeper #etcd #consul\n        serverLists: localhost:2181 #http://localhost:2379 #localhost:8848\n        props:\n      cross:\n        enabled: true\n        allowedHeaders:\n        allowedMethods: "*"\n        allowedAnyOrigin: true # the same of Access-Control-Allow-Origin: "*"\n        allowedExpose: ""\n        maxAge: "18000"\n        allowCredentials: true\n      switchConfig:\n        local: true\n      file:\n        enabled: true\n        maxSize : 10\n      sync:\n        websocket:\n          urls: ws://shenyu-admin-svc.shenyu.svc.cluster.local:9095/websocket\n          allowOrigin: ws://shenyu-bootstrap-svc.shenyu.svc.cluster.local:9195\n      exclude:\n        enabled: false\n        paths:\n          - /favicon.ico\n      fallback:\n        enabled: false\n        paths:\n          - /fallback/hystrix\n          - /fallback/resilience4j\n      health:\n        enabled: false\n        paths:\n          - /actuator/health\n          - /health_check\n      extPlugin:\n        path:\n        enabled: true\n        threads: 1\n        scheduleTime: 300\n        scheduleDelay: 30\n      scheduler:\n        enabled: false\n        type: fixed\n        threads: 16\n      upstreamCheck:\n        enabled: false\n        timeout: 3000\n        healthyThreshold: 1\n        unhealthyThreshold: 1\n        interval: 5000\n        printEnabled: true\n        printInterval: 60000\n      ribbon:\n        serverListRefreshInterval: 10000\n      metrics:\n        enabled: false\n        name : prometheus\n        host: 127.0.0.1\n        port: 8090\n        jmxConfig:\n        props:\n          jvm_enabled: true\n      local:\n        enabled: false\n        sha512Key: "BA3253876AED6BC22D4A6FF53D8406C6AD864195ED144AB5C87621B6C233B548BAEAE6956DF346EC8C17F5EA10F35EE3CBC514797ED7DDD3145464E2A0BAB413"\n    logging:\n      level:\n        root: info\n        org.springframework.boot: info\n        org.apache.ibatis: info\n        org.apache.shenyu.bonuspoint: info\n        org.apache.shenyu.lottery: info\n        org.apache.shenyu: info\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"execute ",(0,s.kt)("inlineCode",{parentName:"li"},"kubectl apply -f shenyu-ns.yaml"))),(0,s.kt)("h3",{id:"2-create-endpoints-to-represent-mysql"},"2. Create Endpoints to represent MySQL"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Init database ",(0,s.kt)("a",{parentName:"p",href:"/docs/next/deployment/deployment-before"},"Deployment Prerequisites document"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"create shenyu-ep.yaml"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Service\napiVersion: v1\nmetadata:\n  name: mysql\n  namespace: shenyu\nspec:\n  ports:\n  - port: 3306\n    name: mysql\n    targetPort: {your_mysql_port}\n---\nkind: Endpoints\napiVersion: v1\nmetadata:\n  name: mysql\n  namespace: shenyu\nsubsets:\n- addresses:\n  - ip: {your_mysql_ip}\n  ports:\n  - port: {your_mysql_port}\n    name: mysql\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"execute ",(0,s.kt)("inlineCode",{parentName:"li"},"kubectl apply -f shenyu-ep.yaml"))),(0,s.kt)("h3",{id:"3-create-shenyu-admin"},"3. Create shenyu-admin"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"create shenyu-admin.yaml")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# Example of using the nodeport type to expose ports\napiVersion: v1\nkind: Service\nmetadata:\n  namespace: shenyu\n  name: shenyu-admin-svc\nspec:\n  selector:\n    app: shenyu-admin\n  type: NodePort\n  ports:\n  - protocol: TCP\n    port: 9095\n    targetPort: 9095\n    nodePort: 31095\n---\n# shenyu-admin\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  namespace: shenyu\n  name: shenyu-admin\nspec:\n  selector:\n    matchLabels:\n      app: shenyu-admin\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app: shenyu-admin\n    spec:\n      volumes:\n      - name: shenyu-admin-application\n        configMap:\n          name: shenyu-cm\n          items:\n          - key: shenyu-admin-application.yml\n            path: shenyu-admin-application.yml\n      - name: shenyu-admin-application-mysql\n        configMap:\n          name: shenyu-cm\n          items:\n          - key: shenyu-admin-application-mysql.yml\n            path: shenyu-admin-application-mysql.yml\n      - name: mysql-connector-volume\n        emptyDir: {}\n      initContainers:\n      - name: download-mysql-jar\n        image: busybox:1.35.0\n        command: [ \"sh\",\"-c\"]\n        args: [\"wget https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.23/mysql-connector-java-8.0.23.jar;\n            wget https://repo1.maven.org/maven2/mysql/mysql-connector-java/8.0.23/mysql-connector-java-8.0.23.jar.md5;\n            if [ $(md5sum mysql-connector-java-8.0.23.jar | cut -d ' ' -f1) = $(cat mysql-connector-java-8.0.23.jar.md5) ];\n            then echo success;\n            else echo failed;\n            exit 1;\n            fi;\n            mv /mysql-connector-java-8.0.23.jar /opt/shenyu-admin/ext-lib/mysql-connector-java.jar\" ]\n        volumeMounts:\n        - name: mysql-connector-volume\n          mountPath: /opt/shenyu-admin/ext-lib\n      containers:\n      - name: shenyu-admin\n        image: apache/shenyu-admin:latest\n        imagePullPolicy: Always\n        ports:\n        - containerPort: 9095\n        env:\n        - name: 'TZ'\n          value: 'Asia/Beijing'\n        - name: SPRING_PROFILES_ACTIVE\n          value: mysql\n        volumeMounts:\n        - name: shenyu-admin-application\n          mountPath: /opt/shenyu-admin/conf/application.yml\n          subPath: shenyu-admin-application.yml\n        - name: shenyu-admin-application-mysql\n          mountPath: /opt/shenyu-admin/conf/application-mysql.yml\n          subPath: shenyu-admin-application-mysql.yml\n        - name: mysql-connector-volume\n          mountPath: /opt/shenyu-admin/ext-lib\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"execute",(0,s.kt)("inlineCode",{parentName:"li"},"kubectl apply -f shenyu-admin.yaml"))),(0,s.kt)("h3",{id:"4-create-shenyu-bootstrap"},"4. Create shenyu-bootstrap"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"create shenyu-bootstrap.yaml")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# Example of using the nodeport type to expose ports\napiVersion: v1\nkind: Service\nmetadata:\n  namespace: shenyu\n  name: shenyu-bootstrap-svc\nspec:\n  selector:\n    app: shenyu-bootstrap\n  type: NodePort\n  ports:\n    - protocol: TCP\n      port: 9195\n      targetPort: 9195\n      nodePort: 31195\n---\n# shenyu-bootstrap\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  namespace: shenyu\n  name: shenyu-bootstrap\nspec:\n  selector:\n    matchLabels:\n      app: shenyu-bootstrap\n  replicas: 1\n  template:\n    metadata:\n      labels:\n        app: shenyu-bootstrap\n    spec:\n      volumes:\n        - name: shenyu-bootstrap-application\n          configMap:\n            name: shenyu-cm\n            items:\n              - key: shenyu-bootstrap-application.yml\n                path: shenyu-bootstrap-application.yml\n      containers:\n        - name: shenyu-bootstrap\n          image: apache/shenyu-bootstrap:latest\n          ports:\n            - containerPort: 9195\n          env:\n            - name: TZ\n              value: Asia/Beijing\n          volumeMounts:\n            - name: shenyu-bootstrap-application\n              mountPath: /opt/shenyu-bootstrap/conf/application.yml\n              subPath: shenyu-bootstrap-application.yml\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"execute ",(0,s.kt)("inlineCode",{parentName:"li"},"kubectl apply -f shenyu-bootstrap.yaml"))),(0,s.kt)("h2",{id:"test-access"},"Test Access"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Access Address"),"\uff1ahttp://{K8S_CLUSTER_IP}:31095/"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Account/password"),"\uff1aadmin/123456"))}c.isMDXComponent=!0}}]);