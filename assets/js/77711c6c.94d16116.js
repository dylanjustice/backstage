/*! For license information please see 77711c6c.94d16116.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[354946],{988633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(824246),o=n(511151);const a={id:"adding-templates",title:"Adding your own Templates",description:"Documentation on Adding your own Templates"},i=void 0,s={unversionedId:"features/software-templates/adding-templates",id:"features/software-templates/adding-templates",title:"Adding your own Templates",description:"Documentation on Adding your own Templates",source:"@site/../docs/features/software-templates/adding-templates.md",sourceDirName:"features/software-templates",slug:"/features/software-templates/adding-templates",permalink:"/docs/features/software-templates/adding-templates",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-templates/adding-templates.md",tags:[],version:"current",frontMatter:{id:"adding-templates",title:"Adding your own Templates",description:"Documentation on Adding your own Templates"},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/features/software-templates/configuration"},next:{title:"Writing Templates",permalink:"/docs/features/software-templates/writing-templates"}},c={},l=[];function u(e){const t=Object.assign({p:"p",strong:"strong",code:"code",pre:"pre",a:"a",blockquote:"blockquote"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Templates are stored in the ",(0,r.jsx)(t.strong,{children:"Software Catalog"})," under a kind ",(0,r.jsx)(t.code,{children:"Template"}),". The\nminimum that is needed to define a template is a ",(0,r.jsx)(t.code,{children:"template.yaml"})," file, but it\nwould be good to also have some files in there that can be templated in."]}),"\n",(0,r.jsxs)(t.p,{children:["A simple ",(0,r.jsx)(t.code,{children:"template.yaml"})," definition might look something like this:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"apiVersion: scaffolder.backstage.io/v1beta3\nkind: Template\n# some metadata about the template itself\nmetadata:\n  name: v1beta3-demo\n  title: Test Action template\n  description: scaffolder v1beta3 template demo\nspec:\n  owner: backstage/techdocs-core\n  type: service\n\n  # these are the steps which are rendered in the frontend with the form input\n  parameters:\n    - title: Fill in some steps\n      required:\n        - name\n      properties:\n        name:\n          title: Name\n          type: string\n          description: Unique name of the component\n          ui:autofocus: true\n          ui:options:\n            rows: 5\n    - title: Choose a location\n      required:\n        - repoUrl\n      properties:\n        repoUrl:\n          title: Repository Location\n          type: string\n          ui:field: RepoUrlPicker\n          ui:options:\n            allowedHosts:\n              - github.com\n\n  # here's the steps that are executed in series in the scaffolder backend\n  steps:\n    - id: fetch-base\n      name: Fetch Base\n      action: fetch:template\n      input:\n        url: ./template\n        values:\n          name: ${{ parameters.name }}\n\n    - id: fetch-docs\n      name: Fetch Docs\n      action: fetch:plain\n      input:\n        targetPath: ./community\n        url: https://github.com/backstage/community/tree/main/backstage-community-sessions\n\n    - id: publish\n      name: Publish\n      action: publish:github\n      input:\n        allowedHosts: ['github.com']\n        description: This is ${{ parameters.name }}\n        repoUrl: ${{ parameters.repoUrl }}\n\n    - id: register\n      name: Register\n      action: catalog:register\n      input:\n        repoContentsUrl: ${{ steps['publish'].output.repoContentsUrl }}\n        catalogInfoPath: '/catalog-info.yaml'\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format#kind-template",children:"Template Entity"}),"\ncontains more information about the required fields."]}),"\n",(0,r.jsxs)(t.p,{children:["Once we have a ",(0,r.jsx)(t.code,{children:"template.yaml"})," ready, we can then add it to the software catalog\nfor use by the scaffolder."]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["Note: When you add or modify a template, you will need to refresh the location entity.\nOtherwise, Backstage won't display the template in the available templates,\nor it will keep showing the old template. You can refresh the location instance by\ngoing into ",(0,r.jsx)(t.code,{children:"Catalog"})," web page, choosing ",(0,r.jsx)(t.code,{children:"Locations"})," instead of ",(0,r.jsx)(t.code,{children:"Components"}),', and selecting the correct location entity.\nFrom there, you can click on the refresh icon representing "Scheduled entity refresh" action.\nAfterwards, you should see your template updated.']}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["You can add the template files to the catalog through\n",(0,r.jsx)(t.a,{href:"/docs/features/software-catalog/configuration#static-location-configuration",children:"static location configuration"}),",\nfor example:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"catalog:\n  locations:\n    - type: url\n      target: https://github.com/backstage/software-templates/blob/main/scaffolder-templates/react-ssr-template/template.yaml\n      rules:\n        - allow: [Template]\n    - type: file\n      target: template.yaml # Backstage will expect the file to be in packages/backend/template.yaml\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Or you can add the template using the ",(0,r.jsx)(t.code,{children:"catalog-import"})," plugin, which unless\nconfigured differently should be running on ",(0,r.jsx)(t.code,{children:"/catalog-import"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["For information about writing your own templates, you can check out the docs\n",(0,r.jsx)(t.a,{href:"/docs/features/software-templates/writing-templates",children:"here"})]})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var a,i,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in a=Object(arguments[c]))n.call(a,l)&&(s[l]=a[l]);if(t){i=t(a);for(var u=0;u<i.length;u++)r.call(a,i[u])&&(s[i[u]]=a[i[u]])}}return s}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;o=a("react.element"),t.Fragment=a("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,a={},l=null,u=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,r)&&!c.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:u,props:a,_owner:i.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var r=n(862525),o=60103,a=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,s=60110,c=60112;t.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),a=f("react.portal"),t.Fragment=f("react.fragment"),t.StrictMode=f("react.strict_mode"),t.Profiler=f("react.profiler"),i=f("react.provider"),s=f("react.context"),c=f("react.forward_ref"),t.Suspense=f("react.suspense"),l=f("react.memo"),u=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function y(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}function g(){}function b(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||m}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=y.prototype;var w=b.prototype=new g;w.constructor=b,r(w,y.prototype),w.isPureReactComponent=!0;var v={current:null},j=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,a={},i=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,r)&&!_.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:i,ref:s,props:a,_owner:v.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,r,i){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case a:c=!0}}if(c)return i=i(c=e),e=""===r?"."+C(c,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(O,"$&/")+"/"),S(i,t,n,"",(function(e){return e}))):null!=i&&(x(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(O,"$&/")+"/")+e)),t.push(i)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=r+C(s=e[l],l);c+=S(s,t,n,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(s=e.next()).done;)c+=S(s=s.value,t,n,u=r+C(s,l++),i);else if("object"===s)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function E(e,t,n){if(null==e)return e;var r=[],o=0;return S(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function $(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function R(){var e=P.current;if(null===e)throw Error(d(321));return e}var T={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:v,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:E,forEach:function(e,t,n){E(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return E(e,(function(){t++})),t},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error(d(143));return e}},t.Component=y,t.PureComponent=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,n){if(null==e)throw Error(d(267,e));var a=r({},e.props),i=e.key,s=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,c=v.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)j.call(t,u)&&!_.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){l=Array(u);for(var f=0;f<u;f++)l[f]=arguments[f+2];a.children=l}return{$$typeof:o,type:e.type,key:i,ref:s,props:a,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return R().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,n){return R().useReducer(e,t,n)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>a});var r=n(667294);const o=r.createContext({});function a(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||i:a(e),r.createElement(o.Provider,{value:s},t)}}}]);