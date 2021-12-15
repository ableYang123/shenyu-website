"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[8312],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,y=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36539:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"Run Integration Test Locally",sidebar_position:15,description:"Run Integration Test Locally",categories:"Apache ShenYu",tags:["integration test"]},s=void 0,c={unversionedId:"integration-test",id:"integration-test",isDocsHomePage:!1,title:"Run Integration Test Locally",description:"Run Integration Test Locally",source:"@site/community/14-integration-test.md",sourceDirName:".",slug:"/integration-test",permalink:"/community/integration-test",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/community/14-integration-test.md",version:"current",lastUpdatedBy:"xiaoyu",lastUpdatedAt:1639563318,formattedLastUpdatedAt:"12/15/2021",sidebarPosition:15,frontMatter:{title:"Run Integration Test Locally",sidebar_position:15,description:"Run Integration Test Locally",categories:"Apache ShenYu",tags:["integration test"]},sidebar:"community",previous:{title:"FAQ",permalink:"/community/faq"}},u=[{value:"Preparation",id:"preparation",children:[]},{value:"Start integration test locally",id:"start-integration-test-locally",children:[]}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"preparation"},"Preparation"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clone the code of ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/incubator-shenyu"},"Apache ShenYu"),"."),(0,o.kt)("li",{parentName:"ol"},"Install and start docker.")),(0,o.kt)("h3",{id:"start-integration-test-locally"},"Start integration test locally"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Build with Maven")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./mvnw -B clean install -Prelease,docker -Dmaven.javadoc.skip=true -Dmaven.test.skip=true\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Build examples")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./mvnw -B clean install -DskipTests -f ./shenyu-examples/pom.xml -Pdocker\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Build integrated tests")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./mvnw -B clean install -Pit -DskipTests -f ./shenyu-integrated-test/pom.xml\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Start docker compose")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose -f ./shenyu-integrated-test/${{ matrix.case }}/docker-compose.yml up -d\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You need to replace ",(0,o.kt)("inlineCode",{parentName:"p"},"${{ matrix.case }}")," with the exact directory, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"shenyu-integrated-test-http"),".")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Run test")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"./mvnw test -Pit -f ./shenyu-integrated-test/${{ matrix.case }}/pom.xml\n")))}m.isMDXComponent=!0}}]);