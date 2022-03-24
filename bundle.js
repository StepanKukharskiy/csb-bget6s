var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let s,u;function i(t,n){t.appendChild(n)}function a(t,n,e){t.insertBefore(n,e||null)}function l(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function d(){return t=" ",document.createTextNode(t);var t}function p(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function h(t){u=t}const $=[],g=[],m=[],b=[],y=Promise.resolve();let _=!1;function v(t){m.push(t)}const x=new Set;let k=0;function E(){const t=u;do{for(;k<$.length;){const t=$[k];k++,h(t),j(t.$$)}for(h(null),$.length=0,k=0;g.length;)g.pop()();for(let t=0;t<m.length;t+=1){const n=m[t];x.has(n)||(x.add(n),n())}m.length=0}while($.length);for(;b.length;)b.pop()();_=!1,x.clear(),h(t)}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(v)}}const w=new Set;let A;function C(t,n){t&&t.i&&(w.delete(t),t.i(n))}function N(t,e,c,s){const{fragment:u,on_mount:i,on_destroy:a,after_update:l}=t.$$;u&&u.m(e,c),s||v(()=>{const e=i.map(n).filter(r);a?a.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(v)}function O(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function L(t,n){-1===t.$$.dirty[0]&&($.push(t),_||(_=!0,y.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function S(n,r,c,s,i,a,f,d=[-1]){const p=u;h(n);const $=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(p?p.$$.context:[])),callbacks:e(),dirty:d,skip_bound:!1,root:r.target||p.$$.root};f&&f($.root);let g=!1;if($.ctx=c?c(n,r.props||{},(t,e,...o)=>{const r=o.length?o[0]:e;return $.ctx&&i($.ctx[t],$.ctx[t]=r)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](r),g&&L(n,t)),e}):[],$.update(),g=!0,o($.before_update),$.fragment=!!s&&s($.ctx),r.target){if(r.hydrate){const t=(m=r.target,Array.from(m.childNodes));$.fragment&&$.fragment.l(t),t.forEach(l)}else $.fragment&&$.fragment.c();r.intro&&C(n.$$.fragment),N(n,r.target,r.anchor,r.customElement),E()}var m;h(p)}class q{$destroy(){O(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function B(n){let e,o,r;return{c(){(e=f("button")).textContent="Go to Kodiia",p(e,"class","svelte-bstu1n")},m(t,c){var s,u,i,l;a(t,e,c),o||(s=e,u="click",i=n[0],s.addEventListener(u,i,l),r=(()=>s.removeEventListener(u,i,l)),o=!0)},p:t,i:t,o:t,d(t){t&&l(e),o=!1,r()}}}function G(t){return[function(){}]}class K extends q{constructor(t){super(),S(this,t,G,B,c,{})}}function M(n){let e,o,r,c,u,h,$,g,m,b;return m=new K({}),{c(){var t,n,i;e=f("main"),o=f("div"),r=f("img"),u=d(),(h=f("h1")).textContent="Explore the world through coding",$=d(),g=f("a"),(t=m.$$.fragment)&&t.c(),p(r,"class","logo svelte-139njks"),n=r.src,i=c="./logo.png",s||(s=document.createElement("a")),s.href=i,n!==s.href&&p(r,"src","./logo.png"),p(r,"alt","logo"),p(h,"class","svelte-139njks"),p(g,"href","https://kodiia.com"),p(o,"class","container svelte-139njks"),p(e,"class","svelte-139njks")},m(t,n){a(t,e,n),i(e,o),i(o,r),i(o,u),i(o,h),i(o,$),i(o,g),N(m,g,null),b=!0},p:t,i(t){b||(C(m.$$.fragment,t),b=!0)},o(t){!function(t,n,e,o){if(t&&t.o){if(w.has(t))return;w.add(t),A.c.push(()=>{w.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}(m.$$.fragment,t),b=!1},d(t){t&&l(e),O(m)}}}return new class extends q{constructor(t){super(),S(this,t,null,M,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
