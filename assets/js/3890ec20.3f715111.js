"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[69298],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,d=p["".concat(s,".").concat(m)]||p[m]||h[m]||i;return n?o.createElement(d,a(a({ref:t},u),{},{components:n})):o.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},60984:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],l={title:"FAQ",sidebar_position:12,description:"FAQ",author:"xiaoyu",categories:"Apache ShenYu",tags:["community"]},s=void 0,c={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"FAQ",description:"FAQ",source:"@site/community/12-faq.md",sourceDirName:".",slug:"/faq",permalink:"/community/faq",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/community/12-faq.md",version:"current",lastUpdatedBy:"Sinsy",lastUpdatedAt:1655283671,formattedLastUpdatedAt:"6/15/2022",sidebarPosition:12,frontMatter:{title:"FAQ",sidebar_position:12,description:"FAQ",author:"xiaoyu",categories:"Apache ShenYu",tags:["community"]},sidebar:"community",previous:{title:"Create Git repository",permalink:"/community/create-repository"}},u=[{value:"1. Why named ShenYu?",id:"1-why-named-shenyu",children:[]},{value:"2. Apache ShenYu History?",id:"2-apache-shenyu-history",children:[]},{value:"3. In Windows environment,when cloning Apache Shenyu source code through Git, why prompt filename too long and how to solve it?",id:"3-in-windows-environmentwhen-cloning-apache-shenyu-source-code-through-git-why-prompt-filename-too-long-and-how-to-solve-it",children:[]}],h={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"1-why-named-shenyu"},"1. Why named ShenYu?"),(0,i.kt)("p",null,"ShenYu is the honorific name of Chinese ancient monarch Xia Yu (also known in later times as Da Yu),\nwho left behind the touching story of the three times he crossed the Yellow River for the benefit of the people and successfully managed the flooding of the river.\nHe is known as one of the three greatest kings of ancient China, along with Yao and Shun."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Firstly, the name ShenYu is to promote the traditional virtues of our Chinese civilisation."),(0,i.kt)("li",{parentName:"ul"},"Secondly, the most important thing about the gateway is the governance of the traffic."),(0,i.kt)("li",{parentName:"ul"},"Finally, the community will do things in a fair, just, open and meritocratic way, paying tribute to ShenYu while also conforming to the Apache Way.")),(0,i.kt)("h3",{id:"2-apache-shenyu-history"},"2. Apache ShenYu History?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2018, Create projects and open source. Excellent architectural ideas and code style, leading reactor programming, once opened sourced, it has attracted much attention."),(0,i.kt)("li",{parentName:"ul"},"2020, Community development. Continuous release of versions and open community governance have attracted a large number of community members to join."),(0,i.kt)("li",{parentName:"ul"},"2021, Donate to the Apache Foundation. The Apache Foundation passed the unanimous vote and entered the incubator smoothly.")),(0,i.kt)("h3",{id:"3-in-windows-environmentwhen-cloning-apache-shenyu-source-code-through-git-why-prompt-filename-too-long-and-how-to-solve-it"},"3. In Windows environment,when cloning Apache Shenyu source code through Git, why prompt filename too long and how to solve it?"),(0,i.kt)("p",null,"To ensure the readability of source code,the Apache Shenyu Coding Specification requires that the naming of classes,methods and variables be literal and avoid abbreviations,which may result in  Some source files have long names. "),(0,i.kt)("p",null,"Since the Git version of Windows is compiled using msys,it uses the old version of Windows Api,limiting the file name to no more than 260 characters. "),(0,i.kt)("p",null,"The solutions are as follows: "),(0,i.kt)("p",null,"Open cmd.exe (you need to add git to environment variables) and execute the following command to allow git supporting log paths: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git config --global core.longpaths true\n")),(0,i.kt)("p",null,"If we use windows 10, also need enable win32 log paths in registry editor or group strategy(need reboot):"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Create the registry key ",(0,i.kt)("inlineCode",{parentName:"p"},"HKLM\\SYSTEM\\CurrentControlSet\\Control\\FileSystem LongPathsEnabled")," (Type: REG_DWORD) in registry editor, and be set to 1.\nOr click \"setting\" button in system menu, print \"Group Policy\" to open a new window \"Edit Group Policy\", and then click 'Computer Configuration' > 'Administrative Templates' > 'System' > 'Filesystem', and then turn on 'Enable Win32 long paths' option.")),(0,i.kt)("p",null,"Reference material:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/windows/desktop/FileIO/naming-a-file"},"https://docs.microsoft.com/zh-cn/windows/desktop/FileIO/naming-a-file")))}p.isMDXComponent=!0}}]);