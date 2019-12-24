import{S as t,i as s,s as e,B as n,e as r,t as l,u as a,c as o,a as i,b as c,d as f,w as h,f as u,g as p,l as g,M as d,h as m,j as v,C as $,D as y,y as E,z as w,N as D,O as b,k as T,P as j,r as N,E as S,v as k,x as I,A as M,m as x,Q as O,R as q,T as A,q as C}from"./stores.98ee9b36.js";function R({dataTransfer:{files:t,items:s}}){return t.length?[...t]:s.filter(({kind:t})=>"file"===t).map(({getAsFile:t})=>t())}function z({target:t}){const s=t.files?[...t.files]:[];return t.value="",s}const W=t=>({dragging:2&t}),B=t=>({dragging:t[1]});function V(t){let s,e,b,T,j,N,S,k,I;const M=t[7].default,x=n(M,t,t[6],B);return{c(){s=r("label"),x||(e=r("div"),b=l("Drag & Drop your file(s) or\r\n      "),T=r("strong"),j=l("browse.")),x&&x.c(),N=a(),S=r("input"),this.h()},l(t){s=o(t,"LABEL",{class:!0});var n=i(s);if(!x){e=o(n,"DIV",{});var r=i(e);b=c(r,"Drag & Drop your file(s) or\r\n      "),T=o(r,"STRONG",{});var l=i(T);j=c(l,"browse."),l.forEach(f),r.forEach(f)}x&&x.l(n),N=h(n),S=o(n,"INPUT",{type:!0,multiple:!0,class:!0}),n.forEach(f),this.h()},h(){u(S,"type","file"),S.multiple=t[0],u(S,"class","svelte-159k8ii"),u(s,"class","svelte-159k8ii"),p(s,"dragging",t[1]),I=[g(S,"input",t[4](z)),g(s,"drop",d(t[4](R))),g(s,"dragover",d(t[2])),g(s,"dragleave",d(t[3]))]},m(t,n){m(t,s,n),x||(v(s,e),v(e,b),v(e,T),v(T,j)),x&&x.m(s,null),v(s,N),v(s,S),k=!0},p(t,[e]){x&&x.p&&66&e&&x.p($(M,t,t[6],B),y(M,t[6],e,W)),(!k||1&e)&&(S.multiple=t[0]),2&e&&p(s,"dragging",t[1])},i(t){k||(E(x,t),k=!0)},o(t){w(x,t),k=!1},d(t){t&&f(s),x&&x.d(t),D(I)}}}function Z(t,s,e){let{multiple:n=!0}=s,r=!1;const l=b();function a(){e(1,r=!1)}let{$$slots:o={},$$scope:i}=s;return t.$set=t=>{"multiple"in t&&e(0,n=t.multiple),"$$scope"in t&&e(6,i=t.$$scope)},[n,r,function(){e(1,r=!0)},a,t=>s=>{a();const e=t(s);e.length&&l("input",{files:n?e:e[0]})},l,i,o]}class F extends t{constructor(t){super(),s(this,t,Z,V,e,{multiple:0})}}const{Map:P}=q;function U(t,s,e){const n=t.slice();return n[15]=s[e][0],n[16]=s[e][1],n}function H(t,s,e){const n=t.slice();return n[11]=s[e][0],n[12]=s[e][1],n}function G(t,s,e){const n=t.slice();return n[7]=s[e][0],n[8]=s[e][1],n}function J(t){let s,e,n,a,h,p;return{c(){s=r("section"),e=r("h1"),n=l("Zip Compiler"),a=l("\n    Drag & Drop your file(s) or\n    "),h=r("strong"),p=l("browse."),this.h()},l(t){s=o(t,"SECTION",{class:!0});var r=i(s);e=o(r,"H1",{class:!0});var l=i(e);n=c(l,"Zip Compiler"),l.forEach(f),a=c(r,"\n    Drag & Drop your file(s) or\n    "),h=o(r,"STRONG",{});var u=i(h);p=c(u,"browse."),u.forEach(f),r.forEach(f),this.h()},h(){u(e,"class","svelte-n9vosq"),u(s,"class","file-uploader svelte-n9vosq")},m(t,r){m(t,s,r),v(s,e),v(e,n),v(s,a),v(s,h),v(h,p)},d(t){t&&f(s)}}}function L(t,s){let e,n,p,g,d,$=s[15]+"",y=s[16]+"";return{key:t,first:null,c(){e=r("div"),n=l($),p=a(),g=r("span"),d=l(y),this.h()},l(t){e=o(t,"DIV",{});var s=i(e);n=c(s,$),p=h(s),g=o(s,"SPAN",{class:!0});var r=i(g);d=c(r,y),r.forEach(f),s.forEach(f),this.h()},h(){u(g,"class","text--light svelte-n9vosq"),this.first=e},m(t,s){m(t,e,s),v(e,n),v(e,p),v(e,g),v(g,d)},p(t,s){1&s&&$!==($=t[15]+"")&&T(n,$),1&s&&y!==(y=t[16]+"")&&T(d,y)},d(t){t&&f(e)}}}function X(t,s){let e,n,p,g,d,$=s[11]+"",y=[],E=new P,w=[...s[12]];const D=t=>t[15];for(let t=0;t<w.length;t+=1){let e=U(s,w,t),n=D(e);E.set(n,y[t]=L(n,e))}return{key:t,first:null,c(){e=r("div"),n=r("h3"),p=l($),g=a(),d=r("div");for(let t=0;t<y.length;t+=1)y[t].c();this.h()},l(t){e=o(t,"DIV",{class:!0});var s=i(e);n=o(s,"H3",{});var r=i(n);p=c(r,$),r.forEach(f),g=h(s),d=o(s,"DIV",{class:!0});var l=i(d);for(let t=0;t<y.length;t+=1)y[t].l(l);l.forEach(f),s.forEach(f),this.h()},h(){u(d,"class","file-section svelte-n9vosq"),u(e,"class","folder-section svelte-n9vosq"),this.first=e},m(t,s){m(t,e,s),v(e,n),v(n,p),v(e,g),v(e,d);for(let t=0;t<y.length;t+=1)y[t].m(d,null)},p(t,s){1&s&&$!==($=t[11]+"")&&T(p,$);const e=[...t[12]];y=j(y,s,D,1,t,e,E,d,A,L,null,U)},d(t){t&&f(e);for(let t=0;t<y.length;t+=1)y[t].d()}}}function Q(t,s){let e,n,p,g,d,$=s[7]+"",y=[],E=new P,w=[...s[8]];const D=t=>t[11];for(let t=0;t<w.length;t+=1){let e=H(s,w,t),n=D(e);E.set(n,y[t]=X(n,e))}return{key:t,first:null,c(){e=r("h2"),n=l($),p=a(),g=r("section");for(let t=0;t<y.length;t+=1)y[t].c();d=a(),this.h()},l(t){e=o(t,"H2",{});var s=i(e);n=c(s,$),s.forEach(f),p=h(t),g=o(t,"SECTION",{class:!0});var r=i(g);for(let t=0;t<y.length;t+=1)y[t].l(r);d=h(r),r.forEach(f),this.h()},h(){u(g,"class","game-section svelte-n9vosq"),this.first=e},m(t,s){m(t,e,s),v(e,n),m(t,p,s),m(t,g,s);for(let t=0;t<y.length;t+=1)y[t].m(g,null);v(g,d)},p(t,s){1&s&&$!==($=t[7]+"")&&T(n,$);const e=[...t[8]];y=j(y,s,D,1,t,e,E,g,A,X,d,H)},d(t){t&&f(e),t&&f(p),t&&f(g);for(let t=0;t<y.length;t+=1)y[t].d()}}}function K(t){let s,e,n,p,d,$,y,b,T,x,O,q,C,R=[],z=new P;const W=new F({props:{$$slots:{default:[J]},$$scope:{ctx:t}}});W.$on("input",t[2]);let B=[...t[0]];const V=t=>t[7];for(let s=0;s<B.length;s+=1){let e=G(t,B,s),n=V(e);z.set(n,R[s]=Q(n,e))}return{c(){s=r("script"),n=a(),N(W.$$.fragment),p=a(),d=r("button"),$=l("Download"),y=a(),b=r("button"),T=l("Reset"),x=a();for(let t=0;t<R.length;t+=1)R[t].c();O=S(),this.h()},l(t){s=o(t,"SCRIPT",{src:!0,integrity:!0,crossorigin:!0}),i(s).forEach(f),n=h(t),k(W.$$.fragment,t),p=h(t),d=o(t,"BUTTON",{type:!0});var e=i(d);$=c(e,"Download"),e.forEach(f),y=h(t),b=o(t,"BUTTON",{type:!0});var r=i(b);T=c(r,"Reset"),r.forEach(f),x=h(t);for(let s=0;s<R.length;s+=1)R[s].l(t);O=S(),this.h()},h(){document.title="Zip Compiler",s.src!==(e="https://cdn.jsdelivr.net/npm/jszip@3.2.2/dist/jszip.min.js")&&u(s,"src","https://cdn.jsdelivr.net/npm/jszip@3.2.2/dist/jszip.min.js"),u(s,"integrity","sha256-gy5W5/rXWluWXFRvMWFFMVhocfpBe7Tf4SW2WMfjs4E="),u(s,"crossorigin","anonymous"),u(d,"type","button"),u(b,"type","button"),C=[g(d,"click",t[3]),g(b,"click",t[1])]},m(t,e){v(document.head,s),m(t,n,e),I(W,t,e),m(t,p,e),m(t,d,e),v(d,$),m(t,y,e),m(t,b,e),v(b,T),m(t,x,e);for(let s=0;s<R.length;s+=1)R[s].m(t,e);m(t,O,e),q=!0},p(t,[s]){const e={};524288&s&&(e.$$scope={dirty:s,ctx:t}),W.$set(e);const n=[...t[0]];R=j(R,s,V,1,t,n,z,O.parentNode,A,Q,O,G)},i(t){q||(E(W.$$.fragment,t),q=!0)},o(t){w(W.$$.fragment,t),q=!1},d(t){f(s),t&&f(n),M(W,t),t&&f(p),t&&f(d),t&&f(y),t&&f(b),t&&f(x);for(let s=0;s<R.length;s+=1)R[s].d(t);t&&f(O),D(C)}}}function Y(t,s){return s.slice(s.lastIndexOf(t)+1)}function _(t,s,e){let n,r;x(t,C,t=>e(5,n=t));let l=new Map;function a(){r=new JSZip,e(0,l=new Map)}async function o(t){(await JSZip.loadAsync(t)).forEach(async(s,e)=>{if(e.dir)return;const a=Y("/",s),o=Y(".",a),i=n[o];if(!i)return;l.has(n.game)||l.set(n.game,new Map);const c=l.get(n.game);c.has(i)||c.set(i,new Map),c.get(i).set(a,t.name),r.file(`${n.game}\\${i}\\${a}`,await e.async("Uint8Array"))}),e(0,l)}return O(a),[l,a,function(t){t.detail.files.forEach(o)},async function(){const t=await r.generateAsync({type:"base64"});window.location="data:application/zip;base64,"+t}]}export default class extends t{constructor(t){super(),s(this,t,_,K,e,{})}}
