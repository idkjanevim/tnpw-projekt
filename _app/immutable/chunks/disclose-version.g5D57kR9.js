import{a8 as f,X as i,aJ as v,aK as p,h as s,d as o,Y as h,H as u,a as E}from"./runtime.Ck00RN1C.js";function T(n){var t=document.createElement("template");return t.innerHTML=n,t.content}function r(n,t){var e=u;e.nodes_start===null&&(e.nodes_start=n,e.nodes_end=t)}function w(n,t){var e=(t&v)!==0,_=(t&p)!==0,a,c=!n.startsWith("<!>");return()=>{if(s)return r(o,null),o;a===void 0&&(a=T(c?n:"<!>"+n),e||(a=f(a)));var d=_?document.importNode(a,!0):a.cloneNode(!0);if(e){var m=f(d),l=d.lastChild;r(m,l)}else r(d,d);return d}}function M(n=""){if(!s){var t=i(n+"");return r(t,t),t}var e=o;return e.nodeType!==3&&(e.before(e=i()),h(e)),r(e,e),e}function N(){if(s)return r(o,null),o;var n=document.createDocumentFragment(),t=document.createComment(""),e=i();return n.append(t,e),r(t,e),n}function x(n,t){if(s){u.nodes_end=o,E();return}n!==null&&n.before(t)}const g="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(g);export{x as a,M as b,N as c,r as d,w as t};
