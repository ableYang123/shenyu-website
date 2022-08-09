"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[6226],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=h(e,["components","mdxType","originalType","parentName"]),l=u(n),b=a,y=l["".concat(c,".").concat(b)]||l[b]||s[b]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=l;var h={};for(var c in t)hasOwnProperty.call(t,c)&&(h[c]=t[c]);h.originalType=e,h.mdxType="string"==typeof e?e:a,i[1]=h;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},37953:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>c,default:()=>l,frontMatter:()=>h,metadata:()=>u,toc:()=>p});var r=n(87462),a=n(67294),o=n(3905);const i=e=>{const[t,n]=(0,a.useState)([]);(0,a.useEffect)((()=>{var r;const a=null!=(r=e.repo)?r:"apache/incubator-shenyu";t&&0!==t.length||fetch("https://api.github.com/repos/"+a+"/contributors?page=1&per_page=10000").then((function(e){return e.json()})).then((e=>{n(e)}))}));let r="<table>";return t&&Array.isArray(t)&&t.forEach(((e,n)=>{n%5==0&&(n>0&&(r+="</tr>"),r+="<tr>"),r+='<td>\n                        <a href="'+e.html_url+'" target="_blank">\n                            <img src="'+e.avatar_url+'" height="20" /> \n                            <span style={{ whiteSpace: \'nowrap\' }}>@'+e.login+"</span>\n                        </a>\n                    </td>",n===t.length-1&&(r+="</tr>")})),r+="</table>",a.createElement("div",{dangerouslySetInnerHTML:{__html:r}})},h={title:"Contributors",sidebar_position:9,description:"Apache ShenYu Contributors",author:"xiaoyu",loadContributorList:!0,categories:"Apache ShenYu",tags:["ContributorList"]},c=void 0,u={unversionedId:"contributors",id:"contributors",isDocsHomePage:!1,title:"Contributors",description:"Apache ShenYu Contributors",source:"@site/community/9-contributors.mdx",sourceDirName:".",slug:"/contributors",permalink:"/community/contributors",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/community/9-contributors.mdx",version:"current",lastUpdatedBy:"lonffreytu",lastUpdatedAt:1660035775,formattedLastUpdatedAt:"8/9/2022",sidebarPosition:9,frontMatter:{title:"Contributors",sidebar_position:9,description:"Apache ShenYu Contributors",author:"xiaoyu",loadContributorList:!0,categories:"Apache ShenYu",tags:["ContributorList"]},sidebar:"community",previous:{title:"Release Guide",permalink:"/community/release-guide"},next:{title:"User Registration",permalink:"/community/user-registration"}},p=[{value:"Apache ShenYu",id:"apache-shenyu",children:[]},{value:"Apache ShenYu Dashboard",id:"apache-shenyu-dashboard",children:[]},{value:"Apache ShenYu Website",id:"apache-shenyu-website",children:[]},{value:"Apache ShenYu Helm Chart",id:"apache-shenyu-helm-chart",children:[]},{value:"Apache ShenYu Nginx",id:"apache-shenyu-nginx",children:[]},{value:"Apache ShenYu Client Python",id:"apache-shenyu-client-python",children:[]},{value:"Apache ShenYu Client Dotnet",id:"apache-shenyu-client-dotnet",children:[]},{value:"Apache ShenYu Client Golang",id:"apache-shenyu-client-golang",children:[]}],s={toc:p};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Hundreds of people have contributed articles and code to Apache ShenYu so far, thank you very much!"),(0,o.kt)("p",null,"If you want to contribute, you can go to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu/"},"Apache ShenYu")," and fork it."),(0,o.kt)("h3",{id:"apache-shenyu"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/incubator-shenyu"},"Apache ShenYu")),(0,o.kt)(i,{repo:"apache/incubator-shenyu",mdxType:"Contributors"}),(0,o.kt)("h3",{id:"apache-shenyu-dashboard"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/incubator-shenyu-dashboard"},"Apache ShenYu Dashboard")),(0,o.kt)(i,{repo:"apache/incubator-shenyu-dashboard",mdxType:"Contributors"}),(0,o.kt)("h3",{id:"apache-shenyu-website"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/incubator-shenyu-website"},"Apache ShenYu Website")),(0,o.kt)(i,{repo:"apache/incubator-shenyu-website",mdxType:"Contributors"}),(0,o.kt)("h3",{id:"apache-shenyu-helm-chart"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/incubator-shenyu-helm-chart"},"Apache ShenYu Helm Chart")),(0,o.kt)(i,{repo:"apache/incubator-shenyu-helm-chart",mdxType:"Contributors"}),(0,o.kt)("h3",{id:"apache-shenyu-nginx"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/incubator-shenyu-nginx"},"Apache ShenYu Nginx")),(0,o.kt)(i,{repo:"apache/incubator-shenyu-nginx",mdxType:"Contributors"}),(0,o.kt)("h3",{id:"apache-shenyu-client-python"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/incubator-shenyu-client-python"},"Apache ShenYu Client Python")),(0,o.kt)(i,{repo:"apache/incubator-shenyu-client-python",mdxType:"Contributors"}),(0,o.kt)("h3",{id:"apache-shenyu-client-dotnet"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/incubator-shenyu-client-dotnet"},"Apache ShenYu Client Dotnet")),(0,o.kt)(i,{repo:"apache/incubator-shenyu-client-dotnet",mdxType:"Contributors"}),(0,o.kt)("h3",{id:"apache-shenyu-client-golang"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/apache/incubator-shenyu-client-golang"},"Apache ShenYu Client Golang")),(0,o.kt)(i,{repo:"apache/incubator-shenyu-client-golang",mdxType:"Contributors"}))}l.isMDXComponent=!0}}]);