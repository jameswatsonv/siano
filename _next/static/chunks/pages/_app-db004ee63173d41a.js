(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(5558)}])},7233:function(e,r,n){"use strict";var t=n(5893),o=n(1664),a=n.n(o);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}r.Z=function(e){return(0,t.jsx)(a(),function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){i(e,r,n[r])}))}return e}({},e))}},1551:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(t=n.next()).done)&&(a.push(t.value),!r||a.length!==r);i=!0);}catch(c){l=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var a,i=(a=n(7294))&&a.__esModule?a:{default:a},l=n(1003),c=n(880),u=n(9246);function f(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s={};function d(e,r,n,t){if(e&&l.isLocalURL(r)){e.prefetch(r,n,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;s[r+"%"+n+(o?"%"+o:"")]=!0}}var p=i.default.forwardRef((function(e,r){var n,t=e.legacyBehavior,a=void 0===t?!0!==Boolean(!1):t,p=e.href,h=e.as,y=e.children,v=e.prefetch,m=e.passHref,b=e.replace,g=e.shallow,j=e.scroll,_=e.locale,x=e.onClick,w=e.onMouseEnter,O=f(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=y,a&&"string"===typeof n&&(n=i.default.createElement("a",null,n));var S,C=!1!==v,L=c.useRouter(),k=i.default.useMemo((function(){var e=o(l.resolveHref(L,p,!0),2),r=e[0],n=e[1];return{href:r,as:h?l.resolveHref(L,h):n||r}}),[L,p,h]),E=k.href,A=k.as,N=i.default.useRef(E),P=i.default.useRef(A);a&&(S=i.default.Children.only(n));var M=a?S&&"object"===typeof S&&S.ref:r,I=o(u.useIntersection({rootMargin:"200px"}),3),F=I[0],R=I[1],H=I[2],U=i.default.useCallback((function(e){P.current===A&&N.current===E||(H(),P.current=A,N.current=E),F(e),M&&("function"===typeof M?M(e):"object"===typeof M&&(M.current=e))}),[A,M,E,H,F]);i.default.useEffect((function(){var e=R&&C&&l.isLocalURL(E),r="undefined"!==typeof _?_:L&&L.locale,n=s[E+"%"+A+(r?"%"+r:"")];e&&!n&&d(L,E,A,{locale:r})}),[A,E,R,_,C,L]);var D={ref:U,onClick:function(e){a||"function"!==typeof x||x(e),a&&S.props&&"function"===typeof S.props.onClick&&S.props.onClick(e),e.defaultPrevented||function(e,r,n,t,o,a,i,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),r[o?"replace":"push"](n,t,{shallow:a,locale:c,scroll:i}))}(e,L,E,A,b,g,j,_)},onMouseEnter:function(e){a||"function"!==typeof w||w(e),a&&S.props&&"function"===typeof S.props.onMouseEnter&&S.props.onMouseEnter(e),l.isLocalURL(E)&&d(L,E,A,{priority:!0})}};if(!a||m||"a"===S.type&&!("href"in S.props)){var B="undefined"!==typeof _?_:L&&L.locale,T=L&&L.isLocaleDomain&&l.getDomainLocale(A,B,L&&L.locales,L&&L.domainLocales);D.href=T||l.addBasePath(l.addLocale(A,B,L&&L.defaultLocale))}return a?i.default.cloneElement(S,D):i.default.createElement("a",Object.assign({},O,D),n)}));r.default=p,("function"===typeof r.default||"object"===typeof r.default&&null!==r.default)&&(Object.assign(r.default,r),e.exports=r.default)},9246:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(t=n.next()).done)&&(a.push(t.value),!r||a.length!==r);i=!0);}catch(c){l=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,n=e.rootMargin,t=e.disabled||!l,f=a.useRef(),s=o(a.useState(!1),2),d=s[0],p=s[1],h=o(a.useState(r?r.current:null),2),y=h[0],v=h[1],m=a.useCallback((function(e){f.current&&(f.current(),f.current=void 0),t||d||e&&e.tagName&&(f.current=function(e,r,n){var t=function(e){var r,n={root:e.root||null,margin:e.rootMargin||""},t=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));t?r=c.get(t):(r=c.get(n),u.push(n));if(r)return r;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return c.set(n,r={id:n,observer:a,elements:o}),r}(n),o=t.id,a=t.observer,i=t.elements;return i.set(e,r),a.observe(e),function(){if(i.delete(e),a.unobserve(e),0===i.size){a.disconnect(),c.delete(o);var r=u.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));r>-1&&u.splice(r,1)}}}(e,(function(e){return e&&p(e)}),{root:y,rootMargin:n}))}),[t,y,n,d]),b=a.useCallback((function(){p(!1)}),[]);return a.useEffect((function(){if(!l&&!d){var e=i.requestIdleCallback((function(){return p(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){r&&v(r.current)}),[r]),[m,d,b]};var a=n(7294),i=n(4686),l="undefined"!==typeof IntersectionObserver;var c=new Map,u=[];("function"===typeof r.default||"object"===typeof r.default&&null!==r.default)&&(Object.assign(r.default,r),e.exports=r.default)},5558:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return w}});var t=n(5893),o=(n(6774),n(9008)),a=n.n(o),i=n(1163),l=n(7233),c=n(3695),u=n.n(c);function f(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function s(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(t=n.next()).done)&&(a.push(t.value),!r||a.length!==r);i=!0);}catch(c){l=!0,o=c}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return f(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var d={Home:"/",About:"/about",Puppies:"/puppies","Contact Us":"/contact"},p=function(){var e=(0,i.useRouter)().pathname,r=function(r){var n,o=r.text,a=r.href,i=null!==(n=u().navLink)&&void 0!==n?n:"";return e===a&&(i+=" ".concat(u().activeNavLink)),(0,t.jsx)(l.Z,{href:a,children:(0,t.jsx)("a",{className:i,children:o})})},n=Object.entries(d).map((function(e){var n=s(e,2),o=n[0],a=n[1];return(0,t.jsx)(r,{text:o,href:a},a)}));return(0,t.jsx)("nav",{className:u().headerNav,children:n})},h=function(e){var r=e.phone,n=void 0===r?{}:r,o=n.number,a=n.display;return(0,t.jsx)("div",{className:u().headerBar,children:(0,t.jsxs)("div",{children:["Call Us! ",(0,t.jsx)("a",{href:"tel:+1".concat(o),children:a})]})})};var y=function(e){var r=e.data.contact,n=(void 0===r?{}:r).phone;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a(),{children:[(0,t.jsx)("title",{children:"San Diego Frenchies"}),(0,t.jsx)("meta",{name:"description",content:"French bulldog adoption in San Diego"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsx)(h,{phone:n}),(0,t.jsx)("header",{className:u().header,children:(0,t.jsxs)("div",{className:u().container,children:[(0,t.jsx)(l.Z,{href:"/",children:(0,t.jsx)("a",{className:u().headerLogoLink,children:"SDFrenchie"})}),(0,t.jsx)(p,{})]})})]})},v=n(9134),m=n.n(v),b=function(e){var r,n,o,a=e.data.contact,i=null!==(r=null===a||void 0===a?void 0:a.phone.display)&&void 0!==r?r:"",l=(n=null===a||void 0===a?void 0:a.phone.number,null!==(o=null===a||void 0===a?void 0:a.email)&&void 0!==o?o:"");return(0,t.jsxs)("footer",{className:m().footer,children:[(0,t.jsxs)("div",{className:m().footerContent,children:[(0,t.jsxs)("section",{children:[(0,t.jsx)("h4",{children:"About"}),(0,t.jsx)("p",{children:"As a small in-home kennel with a limited but well-planned breeding program, we are confident we have the best prices in San Diego for high quality Frenchies."})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h4",{children:"Contact"}),(0,t.jsx)("p",{children:i}),(0,t.jsx)("p",{children:l})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h4",{children:"Follow"}),(0,t.jsx)("a",{children:"Follow Us on Social Media"})]})]}),(0,t.jsx)("div",{className:m().footerFooter,children:"\xa9 SDFrenchie. All Rights Reserved. 2022"})]})};function g(e){var r=e.children,n=e.data;return(0,t.jsxs)("div",{className:m().page,children:[(0,t.jsx)(y,{data:n}),(0,t.jsx)("main",{className:m().pageContainer,children:r}),(0,t.jsx)(b,{data:n})]})}function j(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function _(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){j(e,r,n[r])}))}return e}var x={puppies:[{name:"Puppy 1",color:"Color 1",gender:"Male",id:"puppy1",imageSrc:["/puppy1/1.jpg"],description:"Playful and friendly!"},{name:"Puppy 2",color:"Color 2",gender:"Male",id:"puppy2",imageSrc:["/puppy1/1.jpg"],description:"Playful and friendly!"},{name:"Puppy 3",color:"Color 3",gender:"Male",id:"puppy3",imageSrc:["/puppy1/1.jpg"]},{name:"Puppy 4",color:"Color 4",gender:"Male",id:"puppy4",imageSrc:["/puppy1/1.jpg"]}],contact:{phone:{number:9163467460,display:"(916) 346-7460"},email:"renerene.7512@yahoo.com"}};var w=function(e){var r=e.Component,n=e.pageProps;return(0,t.jsx)(g,{data:x,children:(0,t.jsx)(r,_({},n,{data:x}))})}},3695:function(e){e.exports={header:"Header_header__VYZ3G",headerBar:"Header_headerBar__n2_C9",container:"Header_container__B90GU",headerNav:"Header_headerNav__5glql",headerLogoLink:"Header_headerLogoLink__LzlwB",navLink:"Header_navLink__1cl8b",activeNavLink:"Header_activeNavLink___6irD"}},9134:function(e){e.exports={page:"Layout_page__FdxFd",pageContainer:"Layout_pageContainer__dTzxA",footer:"Layout_footer__mj7GQ",footerContent:"Layout_footerContent__hEmXi",footerFooter:"Layout_footerFooter__jZqEF",logo:"Layout_logo__dBXl_"}},6774:function(){},9008:function(e,r,n){e.exports=n(3121)},1664:function(e,r,n){e.exports=n(1551)},1163:function(e,r,n){e.exports=n(880)}},function(e){var r=function(r){return e(e.s=r)};e.O(0,[774,179],(function(){return r(1118),r(880)}));var n=e.O();_N_E=n}]);