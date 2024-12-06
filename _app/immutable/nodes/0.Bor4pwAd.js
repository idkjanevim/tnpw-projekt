import{a as I,t as z}from"../chunks/disclose-version.BQE2J7p4.js";import{b as re,E as Y,c as te,n as C,D as ae,h as ie,d as oe,F as se,G as ne,e as de,u as X,T as ce,H as L,I as le,q as fe,J as he,K as ve,L as B,M as U,N as ue,l as pe,o as q,O as be,P as G,g as S,Q as _e,R as ge,C as me,k as R,w as H,z as w,y as m,B as k,U as ye,f as W,A as xe,V as D}from"../chunks/runtime.Cg1btAsl.js";import"../chunks/legacy.CG-OtaEp.js";import{a as $e,e as O,s as we}from"../chunks/render.BXJaE1tf.js";import{i as ke}from"../chunks/if.Bbjmznpf.js";import{s as x}from"../chunks/attributes.DpHvMqTc.js";import{o as Fe}from"../chunks/index-client.cI8iBx68.js";import{b as $}from"../chunks/paths.Dz85DYUq.js";function Te(t,e,...r){var o=t,a=C,i;re(()=>{a!==(a=e())&&(i&&(ae(i),i=null),i=te(()=>a(o,...r)))},Y),ie&&(o=oe)}const Ee=()=>performance.now(),F={tick:t=>requestAnimationFrame(t),now:()=>Ee(),tasks:new Set};function Z(t){F.tasks.forEach(e=>{e.c(t)||(F.tasks.delete(e),e.f())}),F.tasks.size!==0&&F.tick(Z)}function Ae(t){let e;return F.tasks.size===0&&F.tick(Z),{promise:new Promise(r=>{F.tasks.add(e={c:t,f:r})}),abort(){F.tasks.delete(e)}}}function N(t,e){t.dispatchEvent(new CustomEvent(e))}function Ce(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function K(t){const e={},r=t.split(";");for(const o of r){const[a,i]=o.split(":");if(!a||i===void 0)break;const d=Ce(a.trim());e[d]=i.trim()}return e}const Oe=t=>t;function J(t,e,r,o){var a=(t&ce)!==0,i=(t&he)!==0,d=a&&i,u=(t&ve)!==0,_=d?"both":a?"in":"out",s,c=e.inert,f,l;function y(){var h=ue,b=L;B(null),U(null);try{return s??(s=r()(e,(o==null?void 0:o())??{},{direction:_}))}finally{B(h),U(b)}}var g={is_global:u,in(){var h;if(e.inert=c,!a){l==null||l.abort(),(h=l==null?void 0:l.reset)==null||h.call(l);return}i||f==null||f.abort(),N(e,"introstart"),f=P(e,y(),l,1,()=>{N(e,"introend"),f==null||f.abort(),f=s=void 0})},out(h){if(!i){h==null||h(),s=void 0;return}e.inert=!0,N(e,"outrostart"),l=P(e,y(),f,0,()=>{N(e,"outroend"),h==null||h()})},stop:()=>{f==null||f.abort(),l==null||l.abort()}},v=L;if((v.transitions??(v.transitions=[])).push(g),a&&$e){var p=u;if(!p){for(var n=v.parent;n&&n.f&Y;)for(;(n=n.parent)&&!(n.f&se););p=!n||(n.f&ne)!==0}p&&de(()=>{X(()=>g.in())})}}function P(t,e,r,o,a){var i=o===1;if(le(e)){var d,u=!1;return fe(()=>{if(!u){var p=e({direction:i?"in":"out"});d=P(t,p,r,o,a)}}),{abort:()=>{u=!0,d==null||d.abort()},deactivate:()=>d.deactivate(),reset:()=>d.reset(),t:()=>d.t()}}if(r==null||r.deactivate(),!(e!=null&&e.duration))return a(),{abort:C,deactivate:C,reset:C,t:()=>o};const{delay:_=0,css:s,tick:c,easing:f=Oe}=e;var l=[];if(i&&r===void 0&&(c&&c(0,1),s)){var y=K(s(0,1));l.push(y,y)}var g=()=>1-o,v=t.animate(l,{duration:_});return v.onfinish=()=>{var p=(r==null?void 0:r.t())??1-o;r==null||r.abort();var n=o-p,h=e.duration*Math.abs(n),b=[];if(h>0){if(s)for(var E=Math.ceil(h/16.666666666666668),T=0;T<=E;T+=1){var A=p+n*f(T/E),j=s(A,1-A);b.push(K(j))}g=()=>{var M=v.currentTime;return p+n*f(M/h)},c&&Ae(()=>{if(v.playState!=="running")return!1;var M=g();return c(M,1-M),!0})}v=t.animate(b,{duration:h,fill:"forwards"}),v.onfinish=()=>{g=()=>o,c==null||c(o,1-o),a()}},{abort:()=>{v&&(v.cancel(),v.effect=null,v.onfinish=C)},deactivate:()=>{a=C},reset:()=>{o===0&&(c==null||c(1,0))},t:()=>g()}}function ee(t=!1){const e=be,r=e.l.u;if(!r)return;let o=()=>ge(e.s);if(t){let a=0,i={};const d=me(()=>{let u=!1;const _=e.s;for(const s in _)_[s]!==i[s]&&(i[s]=_[s],u=!0);return u&&a++,a});o=()=>S(d)}r.b.length&&pe(()=>{Q(e,o),G(r.b)}),q(()=>{const a=X(()=>r.m.map(_e));return()=>{for(const i of a)typeof i=="function"&&i()}}),r.a.length&&q(()=>{Q(e,o),G(r.a)})}function Q(t,e){if(t.l.s)for(const r of t.l.s)S(r);e()}const je=!0,Ke=Object.freeze(Object.defineProperty({__proto__:null,prerender:je},Symbol.toStringTag,{value:"Module"}));function Me(t){const e=t-1;return e*e*e+1}function V(t,{delay:e=0,duration:r=400,easing:o=Me,axis:a="y"}={}){const i=getComputedStyle(t),d=+i.opacity,u=a==="y"?"height":"width",_=parseFloat(i[u]),s=a==="y"?["top","bottom"]:["left","right"],c=s.map(n=>`${n[0].toUpperCase()}${n.slice(1)}`),f=parseFloat(i[`padding${c[0]}`]),l=parseFloat(i[`padding${c[1]}`]),y=parseFloat(i[`margin${c[0]}`]),g=parseFloat(i[`margin${c[1]}`]),v=parseFloat(i[`border${c[0]}Width`]),p=parseFloat(i[`border${c[1]}Width`]);return{delay:e,duration:r,easing:o,css:n=>`overflow: hidden;opacity: ${Math.min(n*20,1)*d};${u}: ${n*_}px;padding-${s[0]}: ${n*f}px;padding-${s[1]}: ${n*l}px;margin-${s[0]}: ${n*y}px;margin-${s[1]}: ${n*g}px;border-${s[0]}-width: ${n*v}px;border-${s[1]}-width: ${n*p}px;`}}var Ne=z('<div id="menu" class="flex flex-col space-y-2 mt-2 z-10 bg-secondary p-4 rounded-lg shadow-lg fade-in fade-in-enter svelte-dh5xi9"><a class="block transition duration-300 ease-in-out hover:text-highlight border-secondary hover:border-highlight border-2 p-2 rounded">Home</a> <a class="block transition duration-300 ease-in-out hover:text-highlight border-secondary hover:border-highlight border-2 p-2 rounded">About</a> <a class="block transition duration-300 ease-in-out hover:text-highlight border-secondary hover:border-highlight border-2 p-2 rounded">Projects</a> <a class="block transition duration-300 ease-in-out hover:text-highlight border-secondary hover:border-highlight border-2 p-2 rounded">Contact</a></div>'),Ie=z('<header id="header" class="bg-secondary text-text p-4 shadow-md"><nav class="flex justify-between items-center"><a class="text-xl font-bold">¯\\_(ツ)_/¯</a> <div class="flex items-center md:hidden"><button class="focus:outline-none" aria-label="Toggle menu"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg></button></div> <div class="hidden md:flex space-x-6"><a class="transition duration-300 ease-in-out hover:text-highlight border-secondary hover:border-highlight border-2 p-2 rounded">Home</a> <a class="transition duration-300 ease-in-out hover:text-highlight border-secondary hover:border-highlight border-2 p-2 rounded">About</a> <a class="transition duration-300 ease-in-out hover:text-highlight border-secondary hover:border-highlight border-2 p-2 rounded">Achievements</a> <a class="transition duration-300 ease-in-out hover:text-highlight border-secondary hover:border-highlight border-2 p-2 rounded">Projects</a> <a class="transition duration-300 ease-in-out hover:text-highlight border-secondary hover:border-highlight border-2 p-2 rounded">Contact</a></div></nav> <!></header>');function Se(t,e){R(e,!1);let r=ye(!1);function o(){W(r,!S(r))}function a(){W(r,!1)}function i(h){const b=document.getElementById("header");b&&!b.contains(h.target)&&a()}Fe(()=>(document.addEventListener("click",i),()=>{document.removeEventListener("click",i)})),ee();var d=Ie(),u=w(d),_=w(u);x(_,"href",`${$??""}/`);var s=m(_,2),c=w(s);k(s);var f=m(s,2),l=w(f);x(l,"href",`${$??""}/`);var y=m(l,2);x(y,"href",`${$??""}/about`);var g=m(y,2);x(g,"href",`${$??""}/achievements`);var v=m(g,2);x(v,"href",`${$??""}/projects`);var p=m(v,2);x(p,"href",`${$??""}/contact`),k(f),k(u);var n=m(u,2);ke(n,()=>S(r),h=>{var b=Ne(),E=w(b);x(E,"href",`${$??""}/`);var T=m(E,2);x(T,"href",`${$??""}/about`);var A=m(T,2);x(A,"href",`${$??""}/projects`);var j=m(A,2);x(j,"href",`${$??""}/contact`),k(b),O("click",E,a),O("click",T,a),O("click",A,a),O("click",j,a),J(1,b,()=>V,()=>({duration:300})),J(2,b,()=>V,()=>({duration:300})),I(h,b)}),k(d),O("click",c,o),I(t,d),H()}var ze=z('<footer class="flex flex-col md:flex-row justify-between items-center p-4 bg-secondary text-muted shadow-md space-y-4 md:space-y-0"><div class="text-sm text-center md:text-left"> <br> <br> this website was created as a semester project by Ondřej Hrzán</div> <div class="flex space-x-4"><a aria-label="GitHub" href="https://github.com" target="_blank" rel="noopener noreferrer" class="hover:text-highlight transition-colors"><i class="fab fa-github text-2xl"></i></a></div></footer>');function Pe(t,e){R(e,!1),ee();var r=ze(),o=w(r),a=w(o);xe(()=>we(a,`© ${new Date().getFullYear()??""} My Portfolio. All rights reserved. `)),D(4),k(o),D(2),k(r),I(t,r),H()}var Re=z('<div class="flex flex-col min-h-screen"><!> <main class="flex-grow"><!></main> <!></div>');function Je(t,e){R(e,!0);var r=Re(),o=w(r);Se(o,{});var a=m(o,2),i=w(a);Te(i,()=>e.children),k(a);var d=m(a,2);Pe(d,{}),k(r),I(t,r),H()}export{Je as component,Ke as universal};