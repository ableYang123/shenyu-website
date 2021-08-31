"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[1432],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9075:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"Monitor Plugin",keywords:["monitor"],description:"monitor plugin"},p=void 0,s={unversionedId:"plugin-center/observability/monitor-plugin",id:"plugin-center/observability/monitor-plugin",isDocsHomePage:!1,title:"Monitor Plugin",description:"monitor plugin",source:"@site/docs/plugin-center/observability/monitor-plugin.md",sourceDirName:"plugin-center/observability",slug:"/plugin-center/observability/monitor-plugin",permalink:"/docs/next/plugin-center/observability/monitor-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/website/docs/plugin-center/observability/monitor-plugin.md",version:"current",frontMatter:{title:"Monitor Plugin",keywords:["monitor"],description:"monitor plugin"},sidebar:"tutorialSidebar",previous:{title:"Logging Plugin",permalink:"/docs/next/plugin-center/observability/logging-plugin"},next:{title:"Custom Condition Match",permalink:"/docs/next/developer/spi/custom-condition-match"}},u=[{value:"Description",id:"description",children:[]},{value:"Technical Solutions",id:"technical-solutions",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Metrics Detail",id:"metrics-detail",children:[]},{value:"Collect metrics",id:"collect-metrics",children:[]},{value:"Panel Display",id:"panel-display",children:[]}],c={toc:u};function m(e){var t=e.components,o=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Monitor plugin is used to monitor its own running status(JVM-related) by gateway, include request response delay, QPS, TPS, and other related metrics.")),(0,i.kt)("h2",{id:"technical-solutions"},"Technical Solutions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Flow Diagram\n",(0,i.kt)("img",{src:n(5729).Z}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Make even tracking in ShenYu Gateway by asynchronous or synchronous mode.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"prometheus")," server pulls metrics' through http request, and then displays it by ",(0,i.kt)("inlineCode",{parentName:"p"},"Grafana"),"."))),(0,i.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},"shenyu-admin"),"--\x3e BasicConfig --\x3e Plugin --\x3e monitor, set to enable."),(0,i.kt)("li",{parentName:"ul"},"Add the following configuration in the monitor plugin.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'{"metricsName":"prometheus","host":"localhost","port":"9190","async":"true"}\n\n# port : Pulled ports for exposing to prometheus service.\n# host : If not filled in, it is the host of Apache ShenYu Gateway.\n# async :"true" is asynchronous event tracking\uff0c false is synchronous event tracking.\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the user don't use, please disable the plugin in the background."),(0,i.kt)("li",{parentName:"ul"},"Introduce ",(0,i.kt)("inlineCode",{parentName:"li"},"monitor")," dependency in the pom.xml file of the gateway.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- apache shenyu monitor plugin start--\x3e\n  <dependency>\n      <groupId>org.apache.shenyu</groupId>\n      <artifactId>shenyu-spring-boot-starter-plugin-monitor</artifactId>\n      <version>${project.version}</version>\n  </dependency>\n  \x3c!-- apache shenyu monitor plugin end--\x3e\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Selectors and rules, please refer to: ",(0,i.kt)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config"),"."),(0,i.kt)("li",{parentName:"ul"},"Only when the url is matched, the url will request event tracking.")),(0,i.kt)("h2",{id:"metrics-detail"},"Metrics Detail"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"All JVM\uff0cthread\uff0cmemory\uff0cand other related information will be made event tracking\uff0cyou can add a JVM module in the Grafana' panel, and it will be fully displayed, please refer to\uff1a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/prometheus/jmx_exporter"},"https://github.com/prometheus/jmx_exporter"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"There are also the following custom ",(0,i.kt)("inlineCode",{parentName:"p"},"metrics")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"target"),(0,i.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"request_total"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Counter"),(0,i.kt)("td",{parentName:"tr",align:"left"},"none"),(0,i.kt)("td",{parentName:"tr",align:"left"},"collecting all requests of Apache ShenYu Gateway")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"http_request_total"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Counter"),(0,i.kt)("td",{parentName:"tr",align:"left"},"path,type"),(0,i.kt)("td",{parentName:"tr",align:"left"},"collecting all matched requests of monitor")))),(0,i.kt)("h2",{id:"collect-metrics"},"Collect metrics"),(0,i.kt)("p",null,"Users need to install ",(0,i.kt)("inlineCode",{parentName:"p"},"Prometheus")," service to collect"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Choose the corresponding environment ",(0,i.kt)("a",{parentName:"p",href:"https://prometheus.io/download/"},"download address")," to install")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Modify configuration file: ",(0,i.kt)("inlineCode",{parentName:"p"},"prometheus.yml")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"scrape_configs:\n  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.\n  - job_name: 'prometheus'\n    # metrics_path defaults to '/metrics'\n    # scheme defaults to 'http'.\n    static_configs:\n    - targets: ['localhost:9190']\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Note:")," The ",(0,i.kt)("inlineCode",{parentName:"p"},"job_name")," corresponds to the ",(0,i.kt)("inlineCode",{parentName:"p"},"metricsName")," of the ",(0,i.kt)("inlineCode",{parentName:"p"},"monitor")," plug-in configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After the configuration is completed, you can directly double-click ",(0,i.kt)("inlineCode",{parentName:"p"},"prometheus.exe")," in the window to start. The default boot port is ",(0,i.kt)("inlineCode",{parentName:"p"},"9090"),", Success can be verified at http://localhost:9090/"))),(0,i.kt)("h2",{id:"panel-display"},"Panel Display"),(0,i.kt)("p",null,"It is recommended to use ",(0,i.kt)("inlineCode",{parentName:"p"},"Grafana"),", Users can customize the query to personalize the display panel."),(0,i.kt)("p",null,"Here's how to install and deploy ",(0,i.kt)("inlineCode",{parentName:"p"},"Grafana for Windows")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install Grafana")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://dl.grafana.com/oss/release/grafana-7.4.2.windows-amd64.zip"},"download")," Unzip it and enter the ",(0,i.kt)("inlineCode",{parentName:"p"},"bin")," directory and ",(0,i.kt)("inlineCode",{parentName:"p"},"double-click")," ",(0,i.kt)("inlineCode",{parentName:"p"},"grafana-server.exe")," to run it. Go to http://localhost:3000/?orgId=1 ",(0,i.kt)("inlineCode",{parentName:"p"},"admin/admin")," to verify the success"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Config Prometheus DataSource")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3622).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Config JVM Dashboard")),(0,i.kt)("p",null,"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Create")," - ",(0,i.kt)("inlineCode",{parentName:"p"},"Import")," and enter the dashboards ID (8563 recommended)."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3870).Z})),(0,i.kt)("p",null,"The final JVM monitor panel looks like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6519).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Config Custom Metric Dashboard ",(0,i.kt)("inlineCode",{parentName:"li"},"request_total"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"http_request_total"))),(0,i.kt)("p",null,"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Create")," - ",(0,i.kt)("inlineCode",{parentName:"p"},"Import")," and enter the ",(0,i.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/img/shenyu/monitor/request_metric_dashboard.json"},"panel config json")),(0,i.kt)("p",null,"The final custom HTTP request monitoring panel looks like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3829).Z})))}m.isMDXComponent=!0},3870:function(e,t,n){t.Z=n.p+"assets/images/jvm-import-07851d0a4298b838f4940e1255a4b27b.png"},6519:function(e,t,n){t.Z=n.p+"assets/images/jvm-4ec37708e8560160feeece11efe12ac5.png"},3622:function(e,t,n){t.Z=n.p+"assets/images/prometheus-datasource-dc030a55d003f5aec547dd0756f94da1.png"},3829:function(e,t,n){t.Z=n.p+"assets/images/request-metric-668b020e651affd9dfd0399da7c8e008.png"},5729:function(e,t,n){t.Z=n.p+"assets/images/shenyu-metrics-805b9a2539e9808d934caae9b3a1404f.png"}}]);