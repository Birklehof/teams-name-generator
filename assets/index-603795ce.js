(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function B(){}function Lt(t){return t()}function dt(){return Object.create(null)}function H(t){t.forEach(Lt)}function Se(t){return typeof t=="function"}function me(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function _n(t){return Object.keys(t).length===0}function bn(t){return t&&Se(t.destroy)?t.destroy:B}function D(t,e){t.appendChild(e)}function O(t,e,n){t.insertBefore(e,n||null)}function M(t){t.parentNode&&t.parentNode.removeChild(t)}function ue(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function ae(t){return document.createTextNode(t)}function j(){return ae(" ")}function F(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function w(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function wn(t){return Array.from(t.childNodes)}function ye(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function U(t,e){t.value=e??""}function se(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function ke(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}let he;function fe(t){he=t}function vn(){if(!he)throw new Error("Function called outside component initialization");return he}function Ce(t){vn().$$.on_mount.push(t)}const le=[],de=[],be=[],xe=[],yn=Promise.resolve();let Ke=!1;function En(){Ke||(Ke=!0,yn.then(Pt))}function ie(t){be.push(t)}function Ze(t){xe.push(t)}const Be=new Set;let _e=0;function Pt(){const t=he;do{for(;_e<le.length;){const e=le[_e];_e++,fe(e),In(e.$$)}for(fe(null),le.length=0,_e=0;de.length;)de.pop()();for(let e=0;e<be.length;e+=1){const n=be[e];Be.has(n)||(Be.add(n),n())}be.length=0}while(le.length);for(;xe.length;)xe.pop()();Ke=!1,Be.clear(),fe(t)}function In(t){if(t.fragment!==null){t.update(),H(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ie)}}const we=new Set;let Y;function Sn(){Y={r:0,c:[],p:Y}}function Cn(){Y.r||H(Y.c),Y=Y.p}function oe(t,e){t&&t.i&&(we.delete(t),t.i(e))}function pe(t,e,n,s){if(t&&t.o){if(we.has(t))return;we.add(t),Y.c.push(()=>{we.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function et(t,e,n,s){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,s===void 0&&n(t.$$.ctx[r]))}function tt(t){t&&t.c()}function Ae(t,e,n,s){const{fragment:r,after_update:i}=t.$$;r&&r.m(e,n),s||ie(()=>{const a=t.$$.on_mount.map(Lt).filter(Se);t.$$.on_destroy?t.$$.on_destroy.push(...a):H(a),t.$$.on_mount=[]}),i.forEach(ie)}function Te(t,e){const n=t.$$;n.fragment!==null&&(H(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function An(t,e){t.$$.dirty[0]===-1&&(le.push(t),En(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function De(t,e,n,s,r,i,a,o=[-1]){const l=he;fe(t);const c=t.$$={fragment:null,ctx:[],props:i,update:B,not_equal:r,bound:dt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:dt(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};a&&a(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(g,h,...v)=>{const p=v.length?v[0]:h;return c.ctx&&r(c.ctx[g],c.ctx[g]=p)&&(!c.skip_bound&&c.bound[g]&&c.bound[g](p),u&&An(t,g)),h}):[],c.update(),u=!0,H(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const g=wn(e.target);c.fragment&&c.fragment.l(g),g.forEach(M)}else c.fragment&&c.fragment.c();e.intro&&oe(t.$$.fragment),Ae(t,e.target,e.anchor,e.customElement),Pt()}fe(l)}class Me{$destroy(){Te(this,1),this.$destroy=B}$on(e,n){if(!Se(n))return B;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!_n(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Tn=async t=>{if("clipboard"in navigator)await navigator.clipboard.writeText(t);else{const e=document.createElement("input");e.type="text",e.disabled=!0,e.style.setProperty("position","fixed"),e.style.setProperty("z-index","-100"),e.style.setProperty("pointer-events","none"),e.style.setProperty("opacity","0"),e.value=t,document.body.appendChild(e),e.click(),e.select(),document.execCommand("copy"),document.body.removeChild(e)}},Dn=(t,e)=>{async function n(){if(r)try{await Tn(r),t.dispatchEvent(new CustomEvent("svelte-copy",{detail:r}))}catch(i){t.dispatchEvent(new CustomEvent("svelte-copy:error",{detail:i}))}}let s=typeof e=="string"?["click"]:[e.events].flat(1),r=typeof e=="string"?e:e.text;return s.forEach(i=>{t.addEventListener(i,n,!0)}),{update:i=>{const a=typeof i=="string"?["click"]:[i.events].flat(1),o=typeof i=="string"?i:i.text,l=a.filter(u=>!s.includes(u)),c=s.filter(u=>!a.includes(u));l.forEach(u=>{t.addEventListener(u,n,!0)}),c.forEach(u=>{t.removeEventListener(u,n,!0)}),s=a,r=o},destroy:()=>{s.forEach(i=>{t.removeEventListener(i,n,!0)})}}},re=[];function nt(t,e=B){let n;const s=new Set;function r(o){if(me(t,o)&&(t=o,n)){const l=!re.length;for(const c of s)c[1](),re.push(c,t);if(l){for(let c=0;c<re.length;c+=2)re[c][0](re[c+1]);re.length=0}}}function i(o){r(o(t))}function a(o,l=B){const c=[o,l];return s.add(c),s.size===1&&(n=e(r)||B),o(t),()=>{s.delete(c),s.size===0&&(n(),n=null)}}return{set:r,update:i,subscribe:a}}let $t=nt(["5","6","7","8","9","10","Q1","Q2"]),jt=nt([{name:"Bildende Kunst",abbreviation:"bk"},{name:"Biologie",abbreviation:"bio"},{name:"BNT",abbreviation:"bnt"},{name:"Mathematik",abbreviation:"m"},{name:"Chemie",abbreviation:"ch"},{name:"Deutsch",abbreviation:"d"},{name:"Englisch",abbreviation:"e"},{name:"Gemeinschaftskunde",abbreviation:"gk"},{name:"Geschichte",abbreviation:"g"},{name:"Geographie",abbreviation:"geo"},{name:"Physik",abbreviation:"ph"},{name:"Informatik",abbreviation:"inf"},{name:"Musik",abbreviation:"mu"},{name:"Sport",abbreviation:"sp"},{name:"Erlebnissport",abbreviation:"erl-sp"},{name:"Religion",abbreviation:"rel"},{name:"SIA",abbreviation:"sia"},{name:"Französisch",abbreviation:"f"},{name:"Latein",abbreviation:"l"},{name:"Spanisch",abbreviation:"span"},{name:"NWT",abbreviation:"nwt"},{name:"WBS",abbreviation:"wbs"},{name:"Drama",abbreviation:"drama"}]),st=nt(["Abl","Ba","Bb","Bo","Bc","Ca","DFs","Ha","Hd","Hs","Hauk","Ht","Hgt","HH","Hoh","It","Je","Keß","Kc","Kö","Ks","Kt","Mu","Np","CPol","MPol","Pr","Ru","Sl","Su","vS","Sk","Str","Vg","Wa","Wel","Ze","Bü","Hm","Hoff","Bs","Mo"]);function pt(t,e,n){const s=t.slice();return s[14]=e[n],s}function gt(t,e,n){const s=t.slice();return s[14]=e[n],s}function mt(t,e,n){const s=t.slice();return s[14]=e[n],s}function _t(t){let e,n=t[14]+"",s,r;return{c(){e=y("option"),s=ae(n),e.__value=r=t[14],e.value=e.__value},m(i,a){O(i,e,a),D(e,s)},p(i,a){a&1&&n!==(n=i[14]+"")&&ye(s,n),a&1&&r!==(r=i[14])&&(e.__value=r,e.value=e.__value)},d(i){i&&M(e)}}}function bt(t){let e,n=t[14].name+"",s,r;return{c(){e=y("option"),s=ae(n),e.__value=r=t[14].abbreviation,e.value=e.__value},m(i,a){O(i,e,a),D(e,s)},p(i,a){a&4&&n!==(n=i[14].name+"")&&ye(s,n),a&4&&r!==(r=i[14].abbreviation)&&(e.__value=r,e.value=e.__value)},d(i){i&&M(e)}}}function wt(t){let e,n;return{c(){e=y("option"),e.__value=n=t[14],e.value=e.__value},m(s,r){O(s,e,r)},p(s,r){r&2&&n!==(n=s[14])&&(e.__value=n,e.value=e.__value)},d(s){s&&M(e)}}}function Mn(t){let e,n,s,r,i,a,o,l,c,u,g,h,v,p,b,C,_=t[0],I=[];for(let f=0;f<_.length;f+=1)I[f]=_t(mt(t,_,f));let R=t[2],N=[];for(let f=0;f<R.length;f+=1)N[f]=bt(gt(t,R,f));let P=t[1],T=[];for(let f=0;f<P.length;f+=1)T[f]=wt(pt(t,P,f));return{c(){e=y("select"),n=y("option"),n.textContent="Klasse";for(let f=0;f<I.length;f+=1)I[f].c();s=j(),r=y("select"),i=y("option"),i.textContent="Fach";for(let f=0;f<N.length;f+=1)N[f].c();a=j(),o=y("select"),l=y("option"),l.textContent="Basisfach",c=y("option"),c.textContent="Leistungsfach",g=j(),h=y("input"),v=j(),p=y("datalist");for(let f=0;f<T.length;f+=1)T[f].c();n.__value="Klasse",n.value=n.__value,w(e,"class","select select-bordered w-full max-w-xs"),t[3]===void 0&&ie(()=>t[9].call(e)),i.__value="Fach",i.value=i.__value,w(r,"class","select select-bordered w-full max-w-xs"),t[4]===void 0&&ie(()=>t[10].call(r)),l.__value="bf",l.value=l.__value,c.__value="lf",c.value=c.__value,w(o,"class","select select-bordered w-full max-w-xs"),o.disabled=u=t[3]!="Q1"&&t[3]!="Q2",t[5]===void 0&&ie(()=>t[11].call(o)),w(h,"type","text"),w(h,"placeholder","Lehrerkürzel"),w(h,"class","input input-bordered w-full max-w-xs"),w(h,"list","teachers"),w(p,"id","teachers")},m(f,S){O(f,e,S),D(e,n);for(let d=0;d<I.length;d+=1)I[d].m(e,null);se(e,t[3]),O(f,s,S),O(f,r,S),D(r,i);for(let d=0;d<N.length;d+=1)N[d].m(r,null);se(r,t[4]),O(f,a,S),O(f,o,S),D(o,l),D(o,c),se(o,t[5]),O(f,g,S),O(f,h,S),U(h,t[6]),O(f,v,S),O(f,p,S);for(let d=0;d<T.length;d+=1)T[d].m(p,null);b||(C=[F(e,"change",t[9]),F(e,"change",t[7]),F(r,"change",t[10]),F(r,"change",t[7]),F(o,"change",t[11]),F(o,"change",t[7]),F(h,"input",t[12]),F(h,"input",t[7])],b=!0)},p(f,[S]){if(S&1){_=f[0];let d;for(d=0;d<_.length;d+=1){const A=mt(f,_,d);I[d]?I[d].p(A,S):(I[d]=_t(A),I[d].c(),I[d].m(e,null))}for(;d<I.length;d+=1)I[d].d(1);I.length=_.length}if(S&9&&se(e,f[3]),S&4){R=f[2];let d;for(d=0;d<R.length;d+=1){const A=gt(f,R,d);N[d]?N[d].p(A,S):(N[d]=bt(A),N[d].c(),N[d].m(r,null))}for(;d<N.length;d+=1)N[d].d(1);N.length=R.length}if(S&20&&se(r,f[4]),S&9&&u!==(u=f[3]!="Q1"&&f[3]!="Q2")&&(o.disabled=u),S&32&&se(o,f[5]),S&64&&h.value!==f[6]&&U(h,f[6]),S&2){P=f[1];let d;for(d=0;d<P.length;d+=1){const A=pt(f,P,d);T[d]?T[d].p(A,S):(T[d]=wt(A),T[d].c(),T[d].m(p,null))}for(;d<T.length;d+=1)T[d].d(1);T.length=P.length}},i:B,o:B,d(f){f&&M(e),ue(I,f),f&&M(s),f&&M(r),ue(N,f),f&&M(a),f&&M(o),f&&M(g),f&&M(h),f&&M(v),f&&M(p),ue(T,f),b=!1,H(C)}}}function On(){let t=new Date,e=t.getFullYear();return t.getMonth()<8?(e-1).toString().substr(2,2)+"/"+e.toString().substr(2,2):e.toString().substr(2,2)+"/"+(e+1).toString().substr(2,2)}function Nn(t,e,n){let s=[];$t.subscribe(_=>{n(0,s=_)});let r=[];st.subscribe(_=>{n(1,r=_.sort(function(I,R){return I.toLowerCase().localeCompare(R.toLowerCase())}))});let i=[];jt.subscribe(_=>{n(2,i=_)});let a="Klasse",o="Fach",l="bf",c="",u="Schuljahr",{name:g=""}=e;function h(){n(8,g=a+" "+(l=="lf"&&(a=="Q1"||a=="Q2")?o.toUpperCase():o)+" "+(a=="Q1"||a=="Q2"?l.toUpperCase()+" ":"")+c+" "+u)}Ce(async()=>{u=On(),h()});function v(){a=ke(this),n(3,a),n(0,s)}function p(){o=ke(this),n(4,o),n(2,i)}function b(){l=ke(this),n(5,l)}function C(){c=this.value,n(6,c)}return t.$$set=_=>{"name"in _&&n(8,g=_.name)},[s,r,i,a,o,l,c,h,g,v,p,b,C]}class Fn extends Me{constructor(e){super(),De(this,e,Nn,Mn,me,{name:8})}}function vt(t,e,n){const s=t.slice();return s[7]=e[n],s}function yt(t){let e,n;return{c(){e=y("option"),e.__value=n=t[7],e.value=e.__value},m(s,r){O(s,e,r)},p(s,r){r&1&&n!==(n=s[7])&&(e.__value=n,e.value=e.__value)},d(s){s&&M(e)}}}function kn(t){let e,n,s,r,i,a,o,l=t[0],c=[];for(let u=0;u<l.length;u+=1)c[u]=yt(vt(t,l,u));return{c(){e=y("input"),n=j(),s=y("input"),r=j(),i=y("datalist");for(let u=0;u<c.length;u+=1)c[u].c();w(e,"type","text"),w(e,"class","input input-bordered w-full max-w-xs"),w(s,"type","text"),w(s,"placeholder","Lehrerkürzel"),w(s,"class","input input-bordered w-full max-w-xs"),w(s,"list","teachers"),w(i,"id","teachers")},m(u,g){O(u,e,g),U(e,t[1]),O(u,n,g),O(u,s,g),U(s,t[2]),O(u,r,g),O(u,i,g);for(let h=0;h<c.length;h+=1)c[h].m(i,null);a||(o=[F(e,"input",t[5]),F(e,"input",t[3]),F(s,"input",t[6]),F(s,"input",t[3])],a=!0)},p(u,[g]){if(g&2&&e.value!==u[1]&&U(e,u[1]),g&4&&s.value!==u[2]&&U(s,u[2]),g&1){l=u[0];let h;for(h=0;h<l.length;h+=1){const v=vt(u,l,h);c[h]?c[h].p(v,g):(c[h]=yt(v),c[h].c(),c[h].m(i,null))}for(;h<c.length;h+=1)c[h].d(1);c.length=l.length}},i:B,o:B,d(u){u&&M(e),u&&M(n),u&&M(s),u&&M(r),u&&M(i),ue(c,u),a=!1,H(o)}}}function Bn(t,e,n){let s=[];st.subscribe(u=>{n(0,s=u.sort(function(g,h){return g.toLowerCase().localeCompare(h.toLowerCase())}))});let r="Name",i="",{name:a=""}=e;function o(){n(4,a="AG "+r.trim()+" "+i)}Ce(async()=>{o()});function l(){r=this.value,n(1,r)}function c(){i=this.value,n(2,i)}return t.$$set=u=>{"name"in u&&n(4,a=u.name)},[s,r,i,o,a,l,c]}class Rn extends Me{constructor(e){super(),De(this,e,Bn,kn,me,{name:4})}}function Ln(t){let e,n,s;return{c(){e=y("input"),w(e,"type","text"),w(e,"class","input input-bordered w-full max-w-xs")},m(r,i){O(r,e,i),U(e,t[0]),n||(s=[F(e,"input",t[3]),F(e,"input",t[1])],n=!0)},p(r,[i]){i&1&&e.value!==r[0]&&U(e,r[0])},i:B,o:B,d(r){r&&M(e),n=!1,H(s)}}}function Pn(t,e,n){let s="Name",{name:r=""}=e;function i(){n(2,r="IG "+s.trim())}Ce(async()=>{i()});function a(){s=this.value,n(0,s)}return t.$$set=o=>{"name"in o&&n(2,r=o.name)},[s,i,r,a]}class $n extends Me{constructor(e){super(),De(this,e,Pn,Ln,me,{name:2})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},jn=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],a=t[n++],o=t[n++],l=((r&7)<<18|(i&63)<<12|(a&63)<<6|o&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],a=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Vt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],a=r+1<t.length,o=a?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,u=i>>2,g=(i&3)<<4|o>>4;let h=(o&15)<<2|c>>6,v=c&63;l||(v=64,a||(h=64)),s.push(n[u],n[g],n[h],n[v])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ht(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jn(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],o=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const g=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||o==null||c==null||g==null)throw Error();const h=i<<2|o>>4;if(s.push(h),c!==64){const v=o<<4&240|c>>2;if(s.push(v),g!==64){const p=c<<6&192|g;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Hn=function(t){const e=Ht(t);return Vt.encodeByteArray(e,!0)},Ut=function(t){return Hn(t).replace(/\./g,"")},Vn=function(t){try{return Vt.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=()=>Un().__FIREBASE_DEFAULTS__,xn=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Kn=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Vn(t[1]);return e&&JSON.parse(e)},Wn=()=>{try{return zn()||xn()||Kn()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qn=()=>{var t;return(t=Wn())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}function zt(){try{return typeof indexedDB=="object"}catch{return!1}}function Jn(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn="FirebaseError";class W extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Yn,Object.setPrototypeOf(this,W.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Oe.prototype.create)}}class Oe{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?Qn(i,s):"Error",o=`${this.serviceName}: ${a} (${r}).`;return new W(r,o,s)}}function Qn(t,e){return t.replace(Xn,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Xn=/\{\$([^}]+)}/g;function We(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],a=e[r];if(Et(i)&&Et(a)){if(!We(i,a))return!1}else if(i!==a)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Et(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn=1e3,es=2,ts=4*60*60*1e3,ns=.5;function ss(t,e=Zn,n=es){const s=e*Math.pow(n,t),r=Math.round(ns*s*(Math.random()-.5)*2);return Math.min(ts,s+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(t){return t&&t._delegate?t._delegate:t}class X{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Gn;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(as(e))try{this.getOrInitializeService({instanceIdentifier:G})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=G){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=G){return this.instances.has(e)}getOptions(e=G){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);s===o&&a.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:is(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=G){return this.component?this.component.multipleInstances?e:G:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function is(t){return t===G?void 0:t}function as(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rs(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var E;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(E||(E={}));const cs={debug:E.DEBUG,verbose:E.VERBOSE,info:E.INFO,warn:E.WARN,error:E.ERROR,silent:E.SILENT},ls=E.INFO,us={[E.DEBUG]:"log",[E.VERBOSE]:"log",[E.INFO]:"info",[E.WARN]:"warn",[E.ERROR]:"error"},fs=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=us[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xt{constructor(e){this.name=e,this._logLevel=ls,this._logHandler=fs,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in E))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cs[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,E.DEBUG,...e),this._logHandler(this,E.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,E.VERBOSE,...e),this._logHandler(this,E.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,E.INFO,...e),this._logHandler(this,E.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,E.WARN,...e),this._logHandler(this,E.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,E.ERROR,...e),this._logHandler(this,E.ERROR,...e)}}const hs=(t,e)=>e.some(n=>t instanceof n);let It,St;function ds(){return It||(It=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ps(){return St||(St=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kt=new WeakMap,qe=new WeakMap,Wt=new WeakMap,Re=new WeakMap,rt=new WeakMap;function gs(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(z(t.result)),r()},a=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Kt.set(n,t)}).catch(()=>{}),rt.set(e,t),e}function ms(t){if(qe.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),r()},a=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});qe.set(t,e)}let Ge={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qe.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Wt.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return z(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _s(t){Ge=t(Ge)}function bs(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Le(this),e,...n);return Wt.set(s,e.sort?e.sort():[e]),z(s)}:ps().includes(t)?function(...e){return t.apply(Le(this),e),z(Kt.get(this))}:function(...e){return z(t.apply(Le(this),e))}}function ws(t){return typeof t=="function"?bs(t):(t instanceof IDBTransaction&&ms(t),hs(t,ds())?new Proxy(t,Ge):t)}function z(t){if(t instanceof IDBRequest)return gs(t);if(Re.has(t))return Re.get(t);const e=ws(t);return e!==t&&(Re.set(t,e),rt.set(e,t)),e}const Le=t=>rt.get(t);function qt(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const a=indexedDB.open(t,e),o=z(a);return s&&a.addEventListener("upgradeneeded",l=>{s(z(a.result),l.oldVersion,l.newVersion,z(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),o.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),o}const vs=["get","getKey","getAll","getAllKeys","count"],ys=["put","add","delete","clear"],Pe=new Map;function Ct(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pe.get(e))return Pe.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=ys.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||vs.includes(n)))return;const i=async function(a,...o){const l=this.transaction(a,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(o.shift())),(await Promise.all([c[n](...o),r&&l.done]))[0]};return Pe.set(e,i),i}_s(t=>({...t,get:(e,n,s)=>Ct(e,n)||t.get(e,n,s),has:(e,n)=>!!Ct(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Is(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Is(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Je="@firebase/app",At="0.9.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z=new xt("@firebase/app"),Ss="@firebase/app-compat",Cs="@firebase/analytics-compat",As="@firebase/analytics",Ts="@firebase/app-check-compat",Ds="@firebase/app-check",Ms="@firebase/auth",Os="@firebase/auth-compat",Ns="@firebase/database",Fs="@firebase/database-compat",ks="@firebase/functions",Bs="@firebase/functions-compat",Rs="@firebase/installations",Ls="@firebase/installations-compat",Ps="@firebase/messaging",$s="@firebase/messaging-compat",js="@firebase/performance",Hs="@firebase/performance-compat",Vs="@firebase/remote-config",Us="@firebase/remote-config-compat",zs="@firebase/storage",xs="@firebase/storage-compat",Ks="@firebase/firestore",Ws="@firebase/firestore-compat",qs="firebase",Gs="9.16.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="[DEFAULT]",Js={[Je]:"fire-core",[Ss]:"fire-core-compat",[As]:"fire-analytics",[Cs]:"fire-analytics-compat",[Ds]:"fire-app-check",[Ts]:"fire-app-check-compat",[Ms]:"fire-auth",[Os]:"fire-auth-compat",[Ns]:"fire-rtdb",[Fs]:"fire-rtdb-compat",[ks]:"fire-fn",[Bs]:"fire-fn-compat",[Rs]:"fire-iid",[Ls]:"fire-iid-compat",[Ps]:"fire-fcm",[$s]:"fire-fcm-compat",[js]:"fire-perf",[Hs]:"fire-perf-compat",[Vs]:"fire-rc",[Us]:"fire-rc-compat",[zs]:"fire-gcs",[xs]:"fire-gcs-compat",[Ks]:"fire-fst",[Ws]:"fire-fst-compat","fire-js":"fire-js",[qs]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee=new Map,Qe=new Map;function Ys(t,e){try{t.container.addComponent(e)}catch(n){Z.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ce(t){const e=t.name;if(Qe.has(e))return Z.debug(`There were multiple attempts to register component ${e}.`),!1;Qe.set(e,t);for(const n of Ee.values())Ys(n,t);return!0}function it(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},x=new Oe("app","Firebase",Qs);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new X("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw x.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=Gs;function Gt(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ye,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw x.create("bad-app-name",{appName:String(r)});if(n||(n=qn()),!n)throw x.create("no-options");const i=Ee.get(r);if(i){if(We(n,i.options)&&We(s,i.config))return i;throw x.create("duplicate-app",{appName:r})}const a=new os(r);for(const l of Qe.values())a.addComponent(l);const o=new Xs(n,s,a);return Ee.set(r,o),o}function er(t=Ye){const e=Ee.get(t);if(!e&&t===Ye)return Gt();if(!e)throw x.create("no-app",{appName:t});return e}function K(t,e,n){var s;let r=(s=Js[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Z.warn(o.join(" "));return}ce(new X(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr="firebase-heartbeat-database",nr=1,ge="firebase-heartbeat-store";let $e=null;function Jt(){return $e||($e=qt(tr,nr,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ge)}}}).catch(t=>{throw x.create("idb-open",{originalErrorMessage:t.message})})),$e}async function sr(t){try{return(await Jt()).transaction(ge).objectStore(ge).get(Yt(t))}catch(e){if(e instanceof W)Z.warn(e.message);else{const n=x.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Z.warn(n.message)}}}async function Tt(t,e){try{const s=(await Jt()).transaction(ge,"readwrite");return await s.objectStore(ge).put(e,Yt(t)),s.done}catch(n){if(n instanceof W)Z.warn(n.message);else{const s=x.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Z.warn(s.message)}}}function Yt(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=1024,ir=30*24*60*60*1e3;class ar{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cr(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Dt();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=ir}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Dt(),{heartbeatsToSend:n,unsentEntries:s}=or(this._heartbeatsCache.heartbeats),r=Ut(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Dt(){return new Date().toISOString().substring(0,10)}function or(t,e=rr){const n=[];let s=t.slice();for(const r of t){const i=n.find(a=>a.agent===r.agent);if(i){if(i.dates.push(r.date),Mt(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Mt(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class cr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zt()?Jn().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await sr(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Tt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Tt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Mt(t){return Ut(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(t){ce(new X("platform-logger",e=>new Es(e),"PRIVATE")),ce(new X("heartbeat",e=>new ar(e),"PRIVATE")),K(Je,At,t),K(Je,At,"esm2017"),K("fire-js","")}lr("");var ur="firebase",fr="9.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */K(ur,fr,"app");const hr={apiKey:"AIzaSyDGdpWSq4zcSck0N4iR_CYvVwMuCPJsv9w",authDomain:"birklehof-f1931.firebaseapp.com",projectId:"birklehof-f1931",storageBucket:"birklehof-f1931.appspot.com",messagingSenderId:"486146853469",appId:"1:486146853469:web:f16b5b52da0f47498ddbb4"},dr=Gt(hr),Qt="@firebase/installations",at="0.6.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt=1e4,Zt=`w:${at}`,en="FIS_v2",pr="https://firebaseinstallations.googleapis.com/v1",gr=60*60*1e3,mr="installations",_r="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ee=new Oe(mr,_r,br);function tn(t){return t instanceof W&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn({projectId:t}){return`${pr}/projects/${t}/installations`}function sn(t){return{token:t.token,requestStatus:2,expiresIn:vr(t.expiresIn),creationTime:Date.now()}}async function rn(t,e){const s=(await e.json()).error;return ee.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function an({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function wr(t,{refreshToken:e}){const n=an(t);return n.append("Authorization",yr(e)),n}async function on(t){const e=await t();return e.status>=500&&e.status<600?t():e}function vr(t){return Number(t.replace("s","000"))}function yr(t){return`${en} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Er({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=nn(t),r=an(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const a={fid:n,authVersion:en,appId:t.appId,sdkVersion:Zt},o={method:"POST",headers:r,body:JSON.stringify(a)},l=await on(()=>fetch(s,o));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:sn(c.authToken)}}else throw await rn("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=/^[cdef][\w-]{21}$/,Xe="";function Cr(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Ar(t);return Sr.test(n)?n:Xe}catch{return Xe}}function Ar(t){return Ir(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new Map;function un(t,e){const n=Ne(t);fn(n,e),Tr(n,e)}function fn(t,e){const n=ln.get(t);if(n)for(const s of n)s(e)}function Tr(t,e){const n=Dr();n&&n.postMessage({key:t,fid:e}),Mr()}let Q=null;function Dr(){return!Q&&"BroadcastChannel"in self&&(Q=new BroadcastChannel("[Firebase] FID Change"),Q.onmessage=t=>{fn(t.data.key,t.data.fid)}),Q}function Mr(){ln.size===0&&Q&&(Q.close(),Q=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or="firebase-installations-database",Nr=1,te="firebase-installations-store";let je=null;function ot(){return je||(je=qt(Or,Nr,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(te)}}})),je}async function Ie(t,e){const n=Ne(t),r=(await ot()).transaction(te,"readwrite"),i=r.objectStore(te),a=await i.get(n);return await i.put(e,n),await r.done,(!a||a.fid!==e.fid)&&un(t,e.fid),e}async function hn(t){const e=Ne(t),s=(await ot()).transaction(te,"readwrite");await s.objectStore(te).delete(e),await s.done}async function Fe(t,e){const n=Ne(t),r=(await ot()).transaction(te,"readwrite"),i=r.objectStore(te),a=await i.get(n),o=e(a);return o===void 0?await i.delete(n):await i.put(o,n),await r.done,o&&(!a||a.fid!==o.fid)&&un(t,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ct(t){let e;const n=await Fe(t.appConfig,s=>{const r=Fr(s),i=kr(t,r);return e=i.registrationPromise,i.installationEntry});return n.fid===Xe?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Fr(t){const e=t||{fid:Cr(),registrationStatus:0};return dn(e)}function kr(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(ee.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=Br(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Rr(t)}:{installationEntry:e}}async function Br(t,e){try{const n=await Er(t,e);return Ie(t.appConfig,n)}catch(n){throw tn(n)&&n.customData.serverCode===409?await hn(t.appConfig):await Ie(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Rr(t){let e=await Ot(t.appConfig);for(;e.registrationStatus===1;)await cn(100),e=await Ot(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await ct(t);return s||n}return e}function Ot(t){return Fe(t,e=>{if(!e)throw ee.create("installation-not-found");return dn(e)})}function dn(t){return Lr(t)?{fid:t.fid,registrationStatus:0}:t}function Lr(t){return t.registrationStatus===1&&t.registrationTime+Xt<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pr({appConfig:t,heartbeatServiceProvider:e},n){const s=$r(t,n),r=wr(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const a={installation:{sdkVersion:Zt,appId:t.appId}},o={method:"POST",headers:r,body:JSON.stringify(a)},l=await on(()=>fetch(s,o));if(l.ok){const c=await l.json();return sn(c)}else throw await rn("Generate Auth Token",l)}function $r(t,{fid:e}){return`${nn(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(t,e=!1){let n;const s=await Fe(t.appConfig,i=>{if(!pn(i))throw ee.create("not-registered");const a=i.authToken;if(!e&&Vr(a))return i;if(a.requestStatus===1)return n=jr(t,e),i;{if(!navigator.onLine)throw ee.create("app-offline");const o=zr(i);return n=Hr(t,o),o}});return n?await n:s.authToken}async function jr(t,e){let n=await Nt(t.appConfig);for(;n.authToken.requestStatus===1;)await cn(100),n=await Nt(t.appConfig);const s=n.authToken;return s.requestStatus===0?lt(t,e):s}function Nt(t){return Fe(t,e=>{if(!pn(e))throw ee.create("not-registered");const n=e.authToken;return xr(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Hr(t,e){try{const n=await Pr(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Ie(t.appConfig,s),n}catch(n){if(tn(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await hn(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ie(t.appConfig,s)}throw n}}function pn(t){return t!==void 0&&t.registrationStatus===2}function Vr(t){return t.requestStatus===2&&!Ur(t)}function Ur(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+gr}function zr(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function xr(t){return t.requestStatus===1&&t.requestTime+Xt<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kr(t){const e=t,{installationEntry:n,registrationPromise:s}=await ct(e);return s?s.catch(console.error):lt(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wr(t,e=!1){const n=t;return await qr(n),(await lt(n,e)).token}async function qr(t){const{registrationPromise:e}=await ct(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(t){if(!t||!t.options)throw He("App Configuration");if(!t.name)throw He("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw He(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function He(t){return ee.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn="installations",Jr="installations-internal",Yr=t=>{const e=t.getProvider("app").getImmediate(),n=Gr(e),s=it(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Qr=t=>{const e=t.getProvider("app").getImmediate(),n=it(e,gn).getImmediate();return{getId:()=>Kr(n),getToken:r=>Wr(n,r)}};function Xr(){ce(new X(gn,Yr,"PUBLIC")),ce(new X(Jr,Qr,"PRIVATE"))}Xr();K(Qt,at);K(Qt,at,"esm2017");const Ve="@firebase/remote-config",Ft="0.4.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn="remote-config";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei={"registration-window":"Undefined window object. This SDK only supports usage in a browser environment.","registration-project-id":"Undefined project identifier. Check Firebase app initialization.","registration-api-key":"Undefined API key. Check Firebase app initialization.","registration-app-id":"Undefined app identifier. Check Firebase app initialization.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.","fetch-client-network":"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-timeout":'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',"fetch-throttle":'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',"fetch-client-parse":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","indexed-db-unavailable":"Indexed DB is not supported by current browser"},k=new Oe("remoteconfig","Remote Config",ei);function ti(t,e){return t instanceof W&&t.code.indexOf(e)!==-1}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=!1,si="",kt=0,ri=["1","true","t","yes","y","on"];class Ue{constructor(e,n=si){this._source=e,this._value=n}asString(){return this._value}asBoolean(){return this._source==="static"?ni:ri.indexOf(this._value.toLowerCase())>=0}asNumber(){if(this._source==="static")return kt;let e=Number(this._value);return isNaN(e)&&(e=kt),e}getSource(){return this._source}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t=er()){return t=ne(t),it(t,mn).getImmediate()}async function ai(t){const e=ne(t),[n,s]=await Promise.all([e._storage.getLastSuccessfulFetchResponse(),e._storage.getActiveConfigEtag()]);return!n||!n.config||!n.eTag||n.eTag===s?!1:(await Promise.all([e._storageCache.setActiveConfig(n.config),e._storage.setActiveConfigEtag(n.eTag)]),!0)}function oi(t){const e=ne(t);return e._initializePromise||(e._initializePromise=e._storageCache.loadFromStorage().then(()=>{e._isInitializationComplete=!0})),e._initializePromise}async function ci(t){const e=ne(t),n=new Zr;setTimeout(async()=>{n.abort()},e.settings.fetchTimeoutMillis);try{await e._client.fetch({cacheMaxAgeMillis:e.settings.minimumFetchIntervalMillis,signal:n}),await e._storageCache.setLastFetchStatus("success")}catch(s){const r=ti(s,"fetch-throttle")?"throttle":"failure";throw await e._storageCache.setLastFetchStatus(r),s}}function ze(t,e){return li(ne(t),e).asString()}function li(t,e){const n=ne(t);n._isInitializationComplete||n._logger.debug(`A value was requested for key "${e}" before SDK initialization completed. Await on ensureInitialized if the intent was to get a previously activated value.`);const s=n._storageCache.getActiveConfig();return s&&s[e]!==void 0?new Ue("remote",s[e]):n.defaultConfig&&n.defaultConfig[e]!==void 0?new Ue("default",String(n.defaultConfig[e])):(n._logger.debug(`Returning static value for key "${e}". Define a default or remote value if this is unintentional.`),new Ue("static"))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n,s,r){this.client=e,this.storage=n,this.storageCache=s,this.logger=r}isCachedDataFresh(e,n){if(!n)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;const s=Date.now()-n,r=s<=e;return this.logger.debug(`Config fetch cache check. Cache age millis: ${s}. Cache max age millis (minimumFetchIntervalMillis setting): ${e}. Is cache hit: ${r}.`),r}async fetch(e){const[n,s]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(s&&this.isCachedDataFresh(e.cacheMaxAgeMillis,n))return s;e.eTag=s&&s.eTag;const r=await this.client.fetch(e),i=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return r.status===200&&i.push(this.storage.setLastSuccessfulFetchResponse(r)),await Promise.all(i),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(t=navigator){return t.languages&&t.languages[0]||t.language}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n,s,r,i,a){this.firebaseInstallations=e,this.sdkVersion=n,this.namespace=s,this.projectId=r,this.apiKey=i,this.appId=a}async fetch(e){const[n,s]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),i=`${window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com"}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,a={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":e.eTag||"*"},o={sdk_version:this.sdkVersion,app_instance_id:n,app_instance_id_token:s,app_id:this.appId,language_code:fi()},l={method:"POST",headers:a,body:JSON.stringify(o)},c=fetch(i,l),u=new Promise((C,_)=>{e.signal.addEventListener(()=>{const I=new Error("The operation was aborted.");I.name="AbortError",_(I)})});let g;try{await Promise.race([c,u]),g=await c}catch(C){let _="fetch-client-network";throw(C==null?void 0:C.name)==="AbortError"&&(_="fetch-timeout"),k.create(_,{originalErrorMessage:C==null?void 0:C.message})}let h=g.status;const v=g.headers.get("ETag")||void 0;let p,b;if(g.status===200){let C;try{C=await g.json()}catch(_){throw k.create("fetch-client-parse",{originalErrorMessage:_==null?void 0:_.message})}p=C.entries,b=C.state}if(b==="INSTANCE_STATE_UNSPECIFIED"?h=500:b==="NO_CHANGE"?h=304:(b==="NO_TEMPLATE"||b==="EMPTY_CONFIG")&&(p={}),h!==304&&h!==200)throw k.create("fetch-status",{httpStatus:h});return{status:h,eTag:v,config:p}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(t,e){return new Promise((n,s)=>{const r=Math.max(e-Date.now(),0),i=setTimeout(n,r);t.addEventListener(()=>{clearTimeout(i),s(k.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function pi(t){if(!(t instanceof W)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class gi{constructor(e,n){this.client=e,this.storage=n}async fetch(e){const n=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(e,n)}async attemptFetch(e,{throttleEndTimeMillis:n,backoffCount:s}){await di(e.signal,n);try{const r=await this.client.fetch(e);return await this.storage.deleteThrottleMetadata(),r}catch(r){if(!pi(r))throw r;const i={throttleEndTimeMillis:Date.now()+ss(s),backoffCount:s+1};return await this.storage.setThrottleMetadata(i),this.attemptFetch(e,i)}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=60*1e3,_i=12*60*60*1e3;class bi{constructor(e,n,s,r,i){this.app=e,this._client=n,this._storageCache=s,this._storage=r,this._logger=i,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:mi,minimumFetchIntervalMillis:_i},this.defaultConfig={}}get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(t,e){const n=t.target.error||void 0;return k.create(e,{originalErrorMessage:n&&(n==null?void 0:n.message)})}const J="app_namespace_store",wi="firebase_remote_config",vi=1;function yi(){return new Promise((t,e)=>{try{const n=indexedDB.open(wi,vi);n.onerror=s=>{e(ve(s,"storage-open"))},n.onsuccess=s=>{t(s.target.result)},n.onupgradeneeded=s=>{const r=s.target.result;switch(s.oldVersion){case 0:r.createObjectStore(J,{keyPath:"compositeKey"})}}}catch(n){e(k.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}})}class Ei{constructor(e,n,s,r=yi()){this.appId=e,this.appName=n,this.namespace=s,this.openDbPromise=r}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(e){return this.set("last_fetch_status",e)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(e){return this.set("last_successful_fetch_timestamp_millis",e)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(e){return this.set("last_successful_fetch_response",e)}getActiveConfig(){return this.get("active_config")}setActiveConfig(e){return this.set("active_config",e)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(e){return this.set("active_config_etag",e)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(e){return this.set("throttle_metadata",e)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}async get(e){const n=await this.openDbPromise;return new Promise((s,r)=>{const a=n.transaction([J],"readonly").objectStore(J),o=this.createCompositeKey(e);try{const l=a.get(o);l.onerror=c=>{r(ve(c,"storage-get"))},l.onsuccess=c=>{const u=c.target.result;s(u?u.value:void 0)}}catch(l){r(k.create("storage-get",{originalErrorMessage:l==null?void 0:l.message}))}})}async set(e,n){const s=await this.openDbPromise;return new Promise((r,i)=>{const o=s.transaction([J],"readwrite").objectStore(J),l=this.createCompositeKey(e);try{const c=o.put({compositeKey:l,value:n});c.onerror=u=>{i(ve(u,"storage-set"))},c.onsuccess=()=>{r()}}catch(c){i(k.create("storage-set",{originalErrorMessage:c==null?void 0:c.message}))}})}async delete(e){const n=await this.openDbPromise;return new Promise((s,r)=>{const a=n.transaction([J],"readwrite").objectStore(J),o=this.createCompositeKey(e);try{const l=a.delete(o);l.onerror=c=>{r(ve(c,"storage-delete"))},l.onsuccess=()=>{s()}}catch(l){r(k.create("storage-delete",{originalErrorMessage:l==null?void 0:l.message}))}})}createCompositeKey(e){return[this.appId,this.appName,this.namespace,e].join()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this.storage=e}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}async loadFromStorage(){const e=this.storage.getLastFetchStatus(),n=this.storage.getLastSuccessfulFetchTimestampMillis(),s=this.storage.getActiveConfig(),r=await e;r&&(this.lastFetchStatus=r);const i=await n;i&&(this.lastSuccessfulFetchTimestampMillis=i);const a=await s;a&&(this.activeConfig=a)}setLastFetchStatus(e){return this.lastFetchStatus=e,this.storage.setLastFetchStatus(e)}setLastSuccessfulFetchTimestampMillis(e){return this.lastSuccessfulFetchTimestampMillis=e,this.storage.setLastSuccessfulFetchTimestampMillis(e)}setActiveConfig(e){return this.activeConfig=e,this.storage.setActiveConfig(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(){ce(new X(mn,t,"PUBLIC").setMultipleInstances(!0)),K(Ve,Ft),K(Ve,Ft,"esm2017");function t(e,{instanceIdentifier:n}){const s=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();if(typeof window>"u")throw k.create("registration-window");if(!zt())throw k.create("indexed-db-unavailable");const{projectId:i,apiKey:a,appId:o}=s.options;if(!i)throw k.create("registration-project-id");if(!a)throw k.create("registration-api-key");if(!o)throw k.create("registration-app-id");n=n||"firebase";const l=new Ei(o,s.name,n),c=new Ii(l),u=new xt(Ve);u.logLevel=E.ERROR;const g=new hi(r,Zs,n,i,a,o),h=new gi(g,l),v=new ui(h,l,c,u),p=new bi(s,v,c,l,u);return oi(p),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(t){return t=ne(t),await ci(t),ai(t)}Si();function Bt(t,e,n){const s=t.slice();return s[11]=e[n],s}function Rt(t){let e,n,s=t[11]+"",r,i,a,o;function l(){return t[6](t[11])}return{c(){e=y("a"),n=y("b"),r=ae(s),w(e,"href","#"),w(e,"class",i=t[0]==t[11].toLocaleLowerCase()?"tab tab-active":"tab")},m(c,u){O(c,e,u),D(e,n),D(n,r),a||(o=F(e,"click",l),a=!0)},p(c,u){t=c,u&1&&i!==(i=t[0]==t[11].toLocaleLowerCase()?"tab tab-active":"tab")&&w(e,"class",i)},d(c){c&&M(e),a=!1,o()}}}function Ai(t){let e,n,s;function r(a){t[9](a)}let i={};return t[3]!==void 0&&(i.name=t[3]),e=new $n({props:i}),de.push(()=>et(e,"name",r,t[3])),{c(){tt(e.$$.fragment)},m(a,o){Ae(e,a,o),s=!0},p(a,o){const l={};!n&&o&8&&(n=!0,l.name=a[3],Ze(()=>n=!1)),e.$set(l)},i(a){s||(oe(e.$$.fragment,a),s=!0)},o(a){pe(e.$$.fragment,a),s=!1},d(a){Te(e,a)}}}function Ti(t){let e,n,s;function r(a){t[8](a)}let i={};return t[2]!==void 0&&(i.name=t[2]),e=new Rn({props:i}),de.push(()=>et(e,"name",r,t[2])),{c(){tt(e.$$.fragment)},m(a,o){Ae(e,a,o),s=!0},p(a,o){const l={};!n&&o&4&&(n=!0,l.name=a[2],Ze(()=>n=!1)),e.$set(l)},i(a){s||(oe(e.$$.fragment,a),s=!0)},o(a){pe(e.$$.fragment,a),s=!1},d(a){Te(e,a)}}}function Di(t){let e,n,s;function r(a){t[7](a)}let i={};return t[1]!==void 0&&(i.name=t[1]),e=new Fn({props:i}),de.push(()=>et(e,"name",r,t[1])),{c(){tt(e.$$.fragment)},m(a,o){Ae(e,a,o),s=!0},p(a,o){const l={};!n&&o&2&&(n=!0,l.name=a[1],Ze(()=>n=!1)),e.$set(l)},i(a){s||(oe(e.$$.fragment,a),s=!0)},o(a){pe(e.$$.fragment,a),s=!1},d(a){Te(e,a)}}}function Mi(t){let e,n,s,r,i=(t[0]=="schulfach"?t[1]:t[0]=="ag"?t[2]:t[0]=="ig"?t[3]:"Bitte einen Typen auswählen")+"",a,o,l,c,u,g,h,v,p,b,C,_,I=t[4]?"Kopiert":"Kopieren",R,N,P,T,f,S,d=t[5],A=[];for(let m=0;m<d.length;m+=1)A[m]=Rt(Bt(t,d,m));const ut=[Di,Ti,Ai],V=[];function ft(m,$){return m[0]=="schulfach"?0:m[0]=="ag"?1:m[0]=="ig"?2:-1}return~(p=ft(t))&&(b=V[p]=ut[p](t)),{c(){e=y("div"),n=y("div"),s=y("div"),r=y("h1"),a=ae(i),o=j(),l=y("div"),c=y("div");for(let m=0;m<A.length;m+=1)A[m].c();u=j(),g=y("div"),h=y("div"),v=y("div"),b&&b.c(),C=j(),_=y("button"),R=ae(I),w(r,"class","text-5xl font-bold min-w-sm"),w(s,"class","text-center w-2/3 hidden md:block"),w(c,"class","tabs tabs-boxed mb-5"),w(_,"class",N="btn + "+(t[4]?"btn-success":"btn-primary")),w(v,"class","card-body"),w(h,"class","card max-w-sm shadow-2xl bg-base-100"),w(g,"class","min-h-[336px]"),w(l,"class","w-full max-w-sm md:w-1/3"),w(n,"class","hero-content w-full"),w(e,"class","hero min-h-screen bg-base-200")},m(m,$){O(m,e,$),D(e,n),D(n,s),D(s,r),D(r,a),D(n,o),D(n,l),D(l,c);for(let q=0;q<A.length;q+=1)A[q].m(c,null);D(l,u),D(l,g),D(g,h),D(h,v),~p&&V[p].m(v,null),D(v,C),D(v,_),D(_,R),T=!0,f||(S=[bn(P=Dn.call(null,_,t[0]=="schulfach"?t[1]:t[0]=="ag"?t[2]:t[0]=="ig"?t[3]:"")),F(_,"svelte-copy",t[10])],f=!0)},p(m,[$]){if((!T||$&15)&&i!==(i=(m[0]=="schulfach"?m[1]:m[0]=="ag"?m[2]:m[0]=="ig"?m[3]:"Bitte einen Typen auswählen")+"")&&ye(a,i),$&33){d=m[5];let L;for(L=0;L<d.length;L+=1){const ht=Bt(m,d,L);A[L]?A[L].p(ht,$):(A[L]=Rt(ht),A[L].c(),A[L].m(c,null))}for(;L<A.length;L+=1)A[L].d(1);A.length=d.length}let q=p;p=ft(m),p===q?~p&&V[p].p(m,$):(b&&(Sn(),pe(V[q],1,1,()=>{V[q]=null}),Cn()),~p?(b=V[p],b?b.p(m,$):(b=V[p]=ut[p](m),b.c()),oe(b,1),b.m(v,C)):b=null),(!T||$&16)&&I!==(I=m[4]?"Kopiert":"Kopieren")&&ye(R,I),(!T||$&16&&N!==(N="btn + "+(m[4]?"btn-success":"btn-primary")))&&w(_,"class",N),P&&Se(P.update)&&$&15&&P.update.call(null,m[0]=="schulfach"?m[1]:m[0]=="ag"?m[2]:m[0]=="ig"?m[3]:"")},i(m){T||(oe(b),T=!0)},o(m){pe(b),T=!1},d(m){m&&M(e),ue(A,m),~p&&V[p].d(),f=!1,H(S)}}}function Oi(t,e,n){let s=["Schulfach","AG","IG"],r=!1,i="schulfach",a="",o="",l="";Ce(async()=>{const p=ii(dr);n(4,r=!1),typeof window<"u"&&(p.settings.minimumFetchIntervalMillis=6e5,Ci(p).then(()=>{const b=ze(p,"classes"),C=ze(p,"teacherAbbreviations"),_=ze(p,"subjects");b&&$t.set(JSON.parse(b)),C&&st.set(JSON.parse(C)),_&&jt.set(JSON.parse(_))}).catch(b=>{console.log(b)}))});const c=p=>{n(0,i=p.toLocaleLowerCase())};function u(p){a=p,n(1,a)}function g(p){o=p,n(2,o)}function h(p){l=p,n(3,l)}const v=()=>{n(4,r=!0)};return t.$$.update=()=>{t.$$.dirty&1&&n(4,r=!1),t.$$.dirty&2&&n(4,r=!1),t.$$.dirty&4&&n(4,r=!1),t.$$.dirty&8&&n(4,r=!1)},[i,a,o,l,r,s,c,u,g,h,v]}class Ni extends Me{constructor(e){super(),De(this,e,Oi,Mi,me,{})}}new Ni({target:document.getElementById("app")});
