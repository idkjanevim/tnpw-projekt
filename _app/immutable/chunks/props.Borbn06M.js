import{S as L,ag as Y,ah as Z,aa as y,ai as H,f as g,aj as v,ak as D,g as o,H as q,al as K,am as $,Z as z,an as G,ao as V,ap as W,aq as J,M as C,W as Q,ar as X,u as M,C as F,as as k,at as p,au as ee,av as re,aw as ae,ax as te,m as ne}from"./runtime.Ck00RN1C.js";function S(n,u=null,b){if(typeof n!="object"||n===null||L in n)return n;const P=$(n);if(P!==Y&&P!==Z)return n;var f=new Map,c=z(n),h=y(0);c&&f.set("length",y(n.length));var m;return new Proxy(n,{defineProperty(i,e,r){(!("value"in r)||r.configurable===!1||r.enumerable===!1||r.writable===!1)&&H();var a=f.get(e);return a===void 0?(a=y(r.value),f.set(e,a)):g(a,S(r.value,m)),!0},deleteProperty(i,e){var r=f.get(e);if(r===void 0)e in i&&f.set(e,y(v));else{if(c&&typeof e=="string"){var a=f.get("length"),t=Number(e);Number.isInteger(t)&&t<a.v&&g(a,t)}g(r,v),U(h)}return!0},get(i,e,r){var _;if(e===L)return n;var a=f.get(e),t=e in i;if(a===void 0&&(!t||(_=D(i,e))!=null&&_.writable)&&(a=y(S(t?i[e]:v,m)),f.set(e,a)),a!==void 0){var s=o(a);return s===v?void 0:s}return Reflect.get(i,e,r)},getOwnPropertyDescriptor(i,e){var r=Reflect.getOwnPropertyDescriptor(i,e);if(r&&"value"in r){var a=f.get(e);a&&(r.value=o(a))}else if(r===void 0){var t=f.get(e),s=t==null?void 0:t.v;if(t!==void 0&&s!==v)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return r},has(i,e){var s;if(e===L)return!0;var r=f.get(e),a=r!==void 0&&r.v!==v||Reflect.has(i,e);if(r!==void 0||q!==null&&(!a||(s=D(i,e))!=null&&s.writable)){r===void 0&&(r=y(a?S(i[e],m):v),f.set(e,r));var t=o(r);if(t===v)return!1}return a},set(i,e,r,a){var E;var t=f.get(e),s=e in i;if(c&&e==="length")for(var _=r;_<t.v;_+=1){var d=f.get(_+"");d!==void 0?g(d,v):_ in i&&(d=y(v),f.set(_+"",d))}t===void 0?(!s||(E=D(i,e))!=null&&E.writable)&&(t=y(void 0),g(t,S(r,m)),f.set(e,t)):(s=t.v!==v,g(t,S(r,m)));var w=Reflect.getOwnPropertyDescriptor(i,e);if(w!=null&&w.set&&w.set.call(a,r),!s){if(c&&typeof e=="string"){var N=f.get("length"),I=Number(e);Number.isInteger(I)&&I>=N.v&&g(N,I+1)}U(h)}return!0},ownKeys(i){o(h);var e=Reflect.ownKeys(i).filter(t=>{var s=f.get(t);return s===void 0||s.v!==v});for(var[r,a]of f)a.v!==v&&!(r in i)&&e.push(r);return e},setPrototypeOf(){K()}})}function U(n,u=1){g(n,n.v+u)}let A=!1;function ie(n){var u=A;try{return A=!1,[n(),A]}finally{A=u}}function j(n){for(var u=q,b=q;u!==null&&!(u.f&(W|J));)u=u.parent;try{return C(u),n()}finally{C(b)}}function se(n,u,b,P){var B;var f=(b&re)!==0,c=!Q||(b&X)!==0,h=(b&ae)!==0,m=(b&te)!==0,i=!1,e;h?[e,i]=ie(()=>n[u]):e=n[u];var r=(B=D(n,u))==null?void 0:B.set,a=P,t=!0,s=!1,_=()=>(s=!0,t&&(t=!1,m?a=M(P):a=P),a);e===void 0&&P!==void 0&&(r&&c&&G(),e=_(),r&&r(e));var d;if(c)d=()=>{var l=n[u];return l===void 0?_():(t=!0,s=!1,l)};else{var w=j(()=>(f?F:k)(()=>n[u]));w.f|=V,d=()=>{var l=o(w);return l!==void 0&&(a=void 0),l===void 0?a:l}}if(!(b&p))return d;if(r){var N=n.$$legacy;return function(l,R){return arguments.length>0?((!c||!R||N||i)&&r(R?d():l),l):d()}}var I=!1,E=!1,T=ne(e),O=j(()=>F(()=>{var l=d(),R=o(T);return I?(I=!1,E=!0,R):(E=!1,T.v=l)}));return f||(O.equals=ee),function(l,R){if(arguments.length>0){const x=R?o(O):c&&h?S(l):l;return O.equals(x)||(I=!0,g(T,x),s&&a!==void 0&&(a=x),M(()=>o(O))),l}return o(O)}}export{S as a,se as p};