var On=Array.isArray,Sn=Array.from,gn=Object.defineProperty,it=Object.getOwnPropertyDescriptor,$t=Object.getOwnPropertyDescriptors,Nn=Object.prototype,Dn=Array.prototype,Zt=Object.getPrototypeOf;function xn(t){return typeof t=="function"}const Cn=()=>{};function bn(t){return t()}function pt(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,ht=4,M=8,et=16,y=32,Z=64,S=128,U=256,p=512,k=1024,H=2048,C=4096,Y=8192,zt=16384,dt=32768,qn=65536,Jt=1<<18,Et=1<<19,ft=Symbol("$state"),Fn=Symbol("");function yt(t){return t===this.v}function Wt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Tt(t){return!Wt(t,this.v)}function Xt(t){throw new Error("effect_in_teardown")}function Qt(){throw new Error("effect_in_unowned_derived")}function tn(t){throw new Error("effect_orphan")}function nn(){throw new Error("effect_update_depth_exceeded")}function Pn(){throw new Error("hydration_failed")}function Ln(t){throw new Error("props_invalid_value")}function Mn(){throw new Error("state_descriptors_fixed")}function Hn(){throw new Error("state_prototype_fixed")}function rn(){throw new Error("state_unsafe_local_read")}function en(){throw new Error("state_unsafe_mutation")}let z=!1;function Yn(){z=!0}function st(t){return{f:0,v:t,reactions:null,equals:yt,version:0}}function jn(t){return wt(st(t))}function sn(t,n=!1){var e;const r=st(t);return n||(r.equals=Tt),z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Bn(t,n=!1){return wt(sn(t,n))}function wt(t){return o!==null&&o.f&m&&(E===null?Tn([t]):E.push(t)),t}function Un(t,n){return o!==null&&ut()&&o.f&(m|et)&&(E===null||!E.includes(t))&&en(),an(t,n)}function an(t,n){return t.equals(n)||(t.v=n,t.version=jt(),mt(t,k),ut()&&u!==null&&u.f&p&&!(u.f&y)&&(_!==null&&_.includes(t)?(T(u,k),W(u)):I===null?wn([t]):I.push(t))),n}function mt(t,n){var r=t.reactions;if(r!==null)for(var e=ut(),s=r.length,a=0;a<s;a++){var l=r[a],i=l.f;i&k||!e&&l===u||(T(l,n),i&(p|S)&&(i&m?mt(l,H):W(l)))}}const Vn=1,Gn=2,Kn=16,$n=1,Zn=2,zn=4,Jn=8,Wn=16,Xn=1,Qn=2,tr=4,nr=1,rr=2,ln="[",un="[!",on="]",At={},er=Symbol();function It(t){console.warn("hydration_mismatch")}let O=!1;function sr(t){O=t}let d;function F(t){if(t===null)throw It(),At;return d=t}function ar(){return F(g(d))}function lr(t){if(O){if(g(d)!==null)throw It(),At;d=t}}function ur(t=1){if(O){for(var n=t,r=d;n--;)r=g(r);d=r}}function or(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===on){if(t===0)return n;t-=1}else(r===ln||r===un)&&(t+=1)}var e=g(n);n.remove(),n=e}}var _t,kt,Rt;function ir(){if(_t===void 0){_t=window;var t=Element.prototype,n=Node.prototype;kt=it(n,"firstChild").get,Rt=it(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function X(t=""){return document.createTextNode(t)}function Q(t){return kt.call(t)}function g(t){return Rt.call(t)}function fr(t,n){if(!O)return Q(t);var r=Q(d);if(r===null)r=d.appendChild(X());else if(n&&r.nodeType!==3){var e=X();return r==null||r.before(e),F(e),e}return F(r),r}function _r(t,n){if(!O){var r=Q(t);return r instanceof Comment&&r.data===""?g(r):r}return d}function cr(t,n=1,r=!1){let e=O?d:t;for(;n--;)e=g(e);if(!O)return e;var s=e.nodeType;if(r&&s!==3){var a=X();return e==null||e.before(a),F(a),a}return F(e),e}function vr(t){t.textContent=""}function fn(t){var n=m|k;u===null?n|=S:u.f|=Et;const r={children:null,ctx:f,deps:null,equals:yt,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(o!==null&&o.f&m){var e=o;(e.children??(e.children=[])).push(r)}return r}function pr(t){const n=fn(t);return n.equals=Tt,n}function Ot(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&m?at(e):q(e)}}}function St(t){var n,r=u;$(t.parent);try{Ot(t),n=Bt(t)}finally{$(r)}return n}function gt(t){var n=St(t),r=(N||t.f&S)&&t.deps!==null?H:p;T(t,r),t.equals(n)||(t.v=n,t.version=jt())}function at(t){Ot(t),L(t,0),T(t,Y),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Nt(t){u===null&&o===null&&tn(),o!==null&&o.f&S&&Qt(),lt&&Xt()}function _n(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function b(t,n,r,e=!0){var s=(t&Z)!==0,a=u,l={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|k,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=D;try{ct(!0),J(l),l.f|=zt}catch(c){throw q(l),c}finally{ct(i)}}else n!==null&&W(l);var w=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&Et)===0;if(!w&&!s&&e&&(a!==null&&_n(l,a),o!==null&&o.f&m)){var A=o;(A.children??(A.children=[])).push(l)}return l}function hr(t){const n=b(M,null,!1);return T(n,p),n.teardown=t,n}function dr(t){Nt();var n=u!==null&&(u.f&y)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=Dt(t);return e}}function Er(t){return Nt(),cn(t)}function yr(t){const n=b(Z,t,!0);return()=>{q(n)}}function Dt(t){return b(ht,t,!1)}function cn(t){return b(M,t,!0)}function Tr(t){return vn(t)}function vn(t,n=0){return b(M|et|n,t,!0)}function wr(t,n=!0){return b(M|y,t,!0,n)}function xt(t){var n=t.teardown;if(n!==null){const r=lt,e=o;vt(!0),K(null);try{n.call(null)}finally{vt(r),K(e)}}}function Ct(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)at(n[r])}}function bt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;q(r,n),r=e}}function pn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&y||q(n),n=r}}function q(t,n=!0){var r=!1;if((n||t.f&Jt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:g(e);e.remove(),e=a}r=!0}bt(t,n&&!r),Ct(t),L(t,0),T(t,Y);var l=t.transitions;if(l!==null)for(const w of l)w.stop();xt(t);var i=t.parent;i!==null&&i.first!==null&&qt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function qt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function mr(t,n){var r=[];Ft(t,r,!0),hn(r,()=>{q(t),n&&n()})}function hn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Ft(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&dt)!==0||(e.f&y)!==0;Ft(e,n,a?r:!1),e=s}}}function Ar(t){Pt(t,!0)}function Pt(t,n){if(t.f&C){j(t)&&J(t),t.f^=C;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&dt)!==0||(r.f&y)!==0;Pt(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const dn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let V=!1,G=!1,tt=[],nt=[];function Lt(){V=!1;const t=tt.slice();tt=[],pt(t)}function Mt(){G=!1;const t=nt.slice();nt=[],pt(t)}function Ir(t){V||(V=!0,queueMicrotask(Lt)),tt.push(t)}function kr(t){G||(G=!0,dn(Mt)),nt.push(t)}function En(){V&&Lt(),G&&Mt()}const Ht=0,yn=1;let B=Ht,P=!1,D=!1,lt=!1;function ct(t){D=t}function vt(t){lt=t}let R=[],x=0;let o=null;function K(t){o=t}let u=null;function $(t){u=t}let E=null;function Tn(t){E=t}let _=null,h=0,I=null;function wn(t){I=t}let Yt=0,N=!1,f=null;function jt(){return++Yt}function ut(){return!z||f!==null&&f.l===null}function j(t){var l,i;var n=t.f;if(n&k)return!0;if(n&H){var r=t.deps,e=(n&S)!==0;if(r!==null){var s;if(n&U){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(t);t.f^=U}for(s=0;s<r.length;s++){var a=r[s];if(j(a)&&gt(a),e&&u!==null&&!N&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||T(t,p)}return!1}function mn(t,n,r){throw t}function Bt(t){var ot;var n=_,r=h,e=I,s=o,a=N,l=E,i=f,w=t.f;_=null,h=0,I=null,o=w&(y|Z)?null:t,N=!D&&(w&S)!==0,E=null,f=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(L(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!N)for(v=h;v<c.length;v++)((ot=c[v]).reactions??(ot.reactions=[])).push(t)}else c!==null&&h<c.length&&(L(t,h),c.length=h);return A}finally{_=n,h=r,I=e,o=s,N=a,E=l,f=i}}function An(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&m&&(_===null||!_.includes(n))&&(T(n,H),n.f&(S|U)||(n.f^=U),L(n,0))}function L(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)An(t,r[e])}function J(t){var n=t.f;if(!(n&Y)){T(t,p);var r=u;u=t;try{n&et?pn(t):bt(t),Ct(t),xt(t);var e=Bt(t);t.teardown=typeof e=="function"?e:null,t.version=Yt}catch(s){mn(s)}finally{u=r}}}function Ut(){x>1e3&&(x=0,nn()),x++}function Vt(t){var n=t.length;if(n!==0){Ut();var r=D;D=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];Gt(s,a),In(a)}}finally{D=r}}}function In(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(Y|C))&&j(e)&&(J(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?qt(e):e.fn=null))}}function kn(){if(P=!1,x>1001)return;const t=R;R=[],Vt(t),P||(x=0)}function W(t){B===Ht&&(P||(P=!0,queueMicrotask(kn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(Z|y)){if(!(r&p))return;n.f^=p}}R.push(n)}function Gt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&y)!==0,l=a&&(s&p)!==0;if(!l&&!(s&C))if(s&M){a?r.f^=p:j(r)&&J(r);var i=r.first;if(i!==null){r=i;continue}}else s&ht&&e.push(r);var w=r.next;if(w===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=w}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Gt(i,n)}function Kt(t){var n=B,r=R;try{Ut();const s=[];B=yn,R=s,P=!1,Vt(r);var e=t==null?void 0:t();return En(),(R.length>0||s.length>0)&&Kt(),x=0,e}finally{B=n,R=r}}async function Rr(){await Promise.resolve(),Kt()}function Or(t){var i;var n=t.f,r=(n&m)!==0;if(r&&n&Y){var e=St(t);return at(t),e}if(o!==null){E!==null&&E.includes(t)&&rn();var s=o.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),I!==null&&u!==null&&u.f&p&&!(u.f&y)&&I.includes(t)&&(T(u,k),W(u))}else if(r&&t.deps===null){var a=t,l=a.parent;l!==null&&!((i=l.deriveds)!=null&&i.includes(a))&&(l.deriveds??(l.deriveds=[])).push(a)}return r&&(a=t,j(a)&&gt(a)),t.v}function Sr(t){const n=o;try{return o=null,t()}finally{o=n}}const Rn=~(k|H|p);function T(t,n){t.f=t.f&Rn|n}function gr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},z&&!n&&(f.l={s:null,u:null,r1:[],r2:st(!1)})}function Nr(t){const n=f;if(n!==null){const l=n.e;if(l!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];$(a.effect),K(a.reaction),Dt(a.fn)}}finally{$(r),K(e)}}f=n.p,n.m=!0}return{}}function Dr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ft in t)rt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ft in r&&rt(r)}}}function rt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{rt(t[e],n)}catch{}const r=Zt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=$t(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{un as $,Tr as A,lr as B,fn as C,q as D,dt as E,et as F,zt as G,u as H,xn as I,Qn as J,tr as K,K as L,$ as M,o as N,f as O,pt as P,bn as Q,Dr as R,ft as S,Xn as T,Bn as U,ur as V,z as W,X,F as Y,On as Z,Sn as _,ar as a,or as a0,sr as a1,C as a2,Ar as a3,an as a4,Ft as a5,vr as a6,hn as a7,Q as a8,on as a9,ln as aA,At as aB,It as aC,Pn as aD,yr as aE,$t as aF,kr as aG,Fn as aH,Yn as aI,nr as aJ,rr as aK,st as aa,Gn as ab,Vn as ac,Kn as ad,g as ae,ut as af,Nn as ag,Dn as ah,Mn as ai,er as aj,it as ak,Hn as al,Zt as am,Ln as an,qn as ao,y as ap,Z as aq,Zn as ar,pr as as,zn as at,Tt as au,$n as av,Jn as aw,Wn as ax,hr as ay,ir as az,vn as b,wr as c,d,Dt as e,Un as f,Or as g,O as h,Kt as i,gn as j,gr as k,Er as l,sn as m,Cn as n,dr as o,mr as p,Ir as q,cn as r,Wt as s,Rr as t,Sr as u,_r as v,Nr as w,jn as x,cr as y,fr as z};