/*! For license information please see 82fea837.317d1a77.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[579989],{451397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=n(824246),r=n(511151);const s={id:"component-design-guidelines",title:"Component Design Guidelines",description:"Documentation on Design"},i=void 0,a={unversionedId:"dls/component-design-guidelines",id:"dls/component-design-guidelines",title:"Component Design Guidelines",description:"Documentation on Design",source:"@site/../docs/dls/component-design-guidelines.md",sourceDirName:"dls",slug:"/dls/component-design-guidelines",permalink:"/docs/dls/component-design-guidelines",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/dls/component-design-guidelines.md",tags:[],version:"current",frontMatter:{id:"component-design-guidelines",title:"Component Design Guidelines",description:"Documentation on Design"},sidebar:"docs",previous:{title:"Design",permalink:"/docs/dls/design"},next:{title:"Contributing to Storybook",permalink:"/docs/dls/contributing-to-storybook"}},c={},l=[{value:"\ud83c\udfd7\ufe0f Layout",id:"\ufe0f-layout",level:2},{value:"Color palette",id:"color-palette",level:2},{value:"Typography",id:"typography",level:2}];function u(e){const t=Object.assign({p:"p",ul:"ul",li:"li",h2:"h2",a:"a",code:"code",pre:"pre"},(0,r.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Be it a new component contribution, or plugin specific components, you'll want\nto follow these guidelines. We'll cover the three main subjects that define the\ngeneral look and feel of your components, all of which build on top of the\nMaterial-UI theme features:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Layout"}),"\n",(0,o.jsx)(t.li,{children:"Color palette"}),"\n",(0,o.jsx)(t.li,{children:"Typography"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"\ufe0f-layout",children:"\ud83c\udfd7\ufe0f Layout"}),"\n",(0,o.jsxs)(t.p,{children:["Layout refers to how you organize or stack content. Whenever possible, we want\nto use Backstage's components (check the ",(0,o.jsx)(t.a,{href:"http://backstage.io/storybook",children:"Storybook"})," for a list and demo)\nfirst, and otherwise fall back to Material-UI components (check the ",(0,o.jsx)(t.a,{href:"https://v4.mui.com/getting-started/supported-components/",children:"MUI docs"}),")."]}),"\n",(0,o.jsx)(t.p,{children:"If none of these fit your layout needs, then you can build your own components.\nHowever, using HTML+CSS directly is not recommended; it's better to use MUI\nlayout components to make your layout theme aware, meaning if someone changes\nthe theme, your layout would react to those changes without requiring updates\nto your code."}),"\n",(0,o.jsxs)(t.p,{children:["Specifically you want to look at these components that make use of the\n",(0,o.jsx)(t.code,{children:"theme.spacing()"})," function for margins, paddings and positions, as well as\ncolor palette and typography:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://v4.mui.com/components/container/",children:"Container"})," mostly at page level"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://v4.mui.com/components/box/",children:"Box"})," like a div that can be customized a lot"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://v4.mui.com/components/grid/",children:"Grid"})," for flexible grid layouts"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://v4.mui.com/components/paper/",children:"Paper"})," The base of a card, like it's background & padding on the borders"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://v4.mui.com/components/cards/",children:"Card"})," Card with support for title, description, buttons, images..."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"color-palette",children:"Color palette"}),"\n",(0,o.jsxs)(t.p,{children:["If you're using an existing component and want to tweak the colors it uses in\ngeneral in the whole application, you can use a ",(0,o.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/app-custom-theme",children:"Custom Theme"})," to override\nspecific styles for that component, that includes paddings, margins and colors."]}),"\n",(0,o.jsxs)(t.p,{children:["However when making a component from scratch you'll need to reference the theme\nas much as possible, make sure to use the theme's color palette. Most Backstage\ncomponents and all MUI components should use the theme's color palette by default,\nso unless you need explicit control on the color of a component (say when the\ncomponent was designed to use the primary color but you want to use the\nsecondary color instead), then the easiest way to access the color palette is\nto ",(0,o.jsx)(t.a,{href:"https://backstage.io/docs/getting-started/app-custom-theme#overriding-backstage-and-material-ui-components-styles",children:"Override the Component Styles"})," as suggested by Backstage."]}),"\n",(0,o.jsx)(t.p,{children:"It's not a very common use case to override a theme color in a MUI component\nbut let's say you have a custom Sidebar component with a Paper component that\nhighlights its content with a different color for a side menu or something\n(usually you use the elevation, but maybe the designer wanted a colorful app).\nYou can use the theme like this:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { makeStyles, Paper } from '@material-ui/core';\n\nconst useStyles = makeStyles((theme: Theme) => ({\n  sidebarPaper: {\n    backgroundColor: theme.palette.primary.main,\n    color: theme.palette.primary.contrastText,\n  },\n}));\n\nexport function Sidebar({ children }) {\n  const { sidebarPaper } = useStyles();\n  return <Paper className={sidebarPaper}>{children}</Paper>;\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Here is a link to the ",(0,o.jsx)(t.a,{href:"https://v4.mui.com/customization/palette/#default-values",children:"Default Palette values"})," you can use, the tokens will\nbe the same, what changes are the colors associated with those depending on your\napp theme color palette, there's also a ",(0,o.jsx)(t.a,{href:"https://v4.mui.com/customization/default-theme/#explore",children:"Default Theme Explorer"})," to look\nwhich tokens you can use as reference from the compiled theme."]}),"\n",(0,o.jsx)(t.h2,{id:"typography",children:"Typography"}),"\n",(0,o.jsxs)(t.p,{children:["Most of the time the components from MUI will use the ",(0,o.jsx)(t.code,{children:"<Typography />"})," component\nwhich will use the theme's typography properties like font family, size, weight\nand appropriate color from the palette for the context of that component. This applies for example to\nbuttons that use white font color for contained buttons, or the respective color\npassed on via props when not outlined for proper contrast (buttons in dark\ntheme adapt properly by using a dark font instead of white)."]}),"\n",(0,o.jsx)(t.p,{children:"However for those cases where the parent component of the content doesn't handle\nthe text, like when the parent component is a layout one, you use typography\ncomponent instead of the HTML counterparts, usually used for titles and\nparagraphs but it is valid for any type of text."}),"\n",(0,o.jsxs)(t.p,{children:["Check the ",(0,o.jsx)(t.a,{href:"https://v4.mui.com/customization/typography/",children:"Typography docs"})," for information on how to install, use,\ncustomize semantic elements and specially the recommendations about\naccessibility."]})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(u,e)})):u(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(r){return!1}}()?Object.assign:function(e,r){for(var s,i,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in s=Object(arguments[c]))n.call(s,l)&&(a[l]=s[l]);if(t){i=t(s);for(var u=0;u<i.length;u++)o.call(s,i[u])&&(a[i[u]]=s[i[u]])}}return a}},371426:(e,t,n)=>{n(862525);var o=n(827378),r=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;r=s("react.element"),t.Fragment=s("react.fragment")}var i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var o,s={},l=null,u=null;for(o in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,o)&&!c.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===s[o]&&(s[o]=t[o]);return{$$typeof:r,type:e,key:l,ref:u,props:s,_owner:i.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var o=n(862525),r=60103,s=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,a=60110,c=60112;t.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;r=p("react.element"),s=p("react.portal"),t.Fragment=p("react.fragment"),t.StrictMode=p("react.strict_mode"),t.Profiler=p("react.profiler"),i=p("react.provider"),a=p("react.context"),c=p("react.forward_ref"),t.Suspense=p("react.suspense"),l=p("react.memo"),u=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function g(){}function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=y.prototype;var b=v.prototype=new g;b.constructor=v,o(b,y.prototype),b.isPureReactComponent=!0;var w={current:null},j=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var o,s={},i=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)j.call(t,o)&&!k.hasOwnProperty(o)&&(s[o]=t[o]);var c=arguments.length-2;if(1===c)s.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];s.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===s[o]&&(s[o]=c[o]);return{$$typeof:r,type:e,key:i,ref:a,props:s,_owner:w.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var C=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,n,o,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case s:c=!0}}if(c)return i=i(c=e),e=""===o?"."+S(c,0):o,Array.isArray(i)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),O(i,t,n,"",(function(e){return e}))):null!=i&&(_(i)&&(i=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(C,"$&/")+"/")+e)),t.push(i)),1;if(c=0,o=""===o?".":o+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=o+S(a=e[l],l);c+=O(a,t,n,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(a=e.next()).done;)c+=O(a=a.value,t,n,u=o+S(a,l++),i);else if("object"===a)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function P(e,t,n){if(null==e)return e;var o=[],r=0;return O(e,o,"","",(function(e){return t.call(n,e,r++)})),o}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function R(){var e=$.current;if(null===e)throw Error(d(321));return e}var I={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:o};t.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(d(143));return e}},t.Component=y,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,n){if(null==e)throw Error(d(267,e));var s=o({},e.props),i=e.key,a=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,c=w.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)j.call(t,u)&&!k.hasOwnProperty(u)&&(s[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)s.children=n;else if(1<u){l=Array(u);for(var p=0;p<u;p++)l[p]=arguments[p+2];s.children=l}return{$$typeof:r,type:e.type,key:i,ref:a,props:s,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return R().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,n){return R().useReducer(e,t,n)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>s});var o=n(667294);const r=o.createContext({});function s(e){const t=o.useContext(r);return o.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||i:s(e),o.createElement(r.Provider,{value:a},t)}}}]);