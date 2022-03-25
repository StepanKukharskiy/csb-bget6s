var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function u(){return t=" ",document.createTextNode(t);var t}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let d;function p(t){d=t}const h=[],m=[],g=[],$=[],b=Promise.resolve();let v=!1;function y(t){g.push(t)}const _=new Set;let x=0;function w(){const t=d;do{for(;x<h.length;){const t=h[x];x++,p(t),j(t.$$)}for(p(null),h.length=0,x=0;m.length;)m.pop()();for(let t=0;t<g.length;t+=1){const e=g[t];_.has(e)||(_.add(e),e())}g.length=0}while(h.length);for(;$.length;)$.pop()();v=!1,_.clear(),p(t)}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(y)}}const k=new Set;let E;function C(t,e){t&&t.i&&(k.delete(t),t.i(e))}function M(t,n,l,c){const{fragment:s,on_mount:a,on_destroy:i,after_update:u}=t.$$;s&&s.m(n,l),c||y(()=>{const n=a.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]}),u.forEach(y)}function A(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function T(t,e){-1===t.$$.dirty[0]&&(h.push(t),v||(v=!0,b.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function q(e,r,l,c,s,i,u,f=[-1]){const h=d;p(e);const m=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(h?h.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:r.target||h.$$.root};u&&u(m.root);let g=!1;if(m.ctx=l?l(e,r.props||{},(t,n,...o)=>{const r=o.length?o[0]:n;return m.ctx&&s(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),g&&T(e,t)),n}):[],m.update(),g=!0,o(m.before_update),m.fragment=!!c&&c(m.ctx),r.target){if(r.hydrate){const t=($=r.target,Array.from($.childNodes));m.fragment&&m.fragment.l(t),t.forEach(a)}else m.fragment&&m.fragment.c();r.intro&&C(e.$$.fragment),M(e,r.target,r.anchor,r.customElement),w()}var $;p(h)}class H{$destroy(){A(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function L(e){let n;return{c(){(n=i("button")).textContent="Go to Kodiia",f(n,"class","svelte-ie3qvq")},m(t,e){s(t,n,e)},p:t,i:t,o:t,d(t){t&&a(n)}}}class N extends H{constructor(t){super(),q(this,t,null,L,l,{})}}function O(e){let n,o,r,l,d,p,h,m,g,$,b,v,y;return m=new N({}),{c(){var t;(n=i("header")).innerHTML='<img class="logo svelte-1ll4h0j" src="./logo.png" alt="logo"/>',o=u(),r=i("main"),l=i("div"),(d=i("h1")).textContent="Explore the world through coding",p=u(),h=i("a"),(t=m.$$.fragment)&&t.c(),g=u(),($=i("div")).innerHTML='<iframe title="background_video" src="https://player.vimeo.com/video/692335404?background=1&amp;autoplay=1&amp;loop=1&amp;byline=0&amp;title=0" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" class="svelte-1ll4h0j"></iframe>',b=u(),(v=i("footer")).innerHTML="<p>Copyright © 2022 Kodiia</p> \n<p>Made with 💜 across the globe</p>",f(n,"class","svelte-1ll4h0j"),f(d,"class","svelte-1ll4h0j"),f(h,"href","https://kodiia.com"),f(h,"class","svelte-1ll4h0j"),f($,"class","vimeo-wrapper svelte-1ll4h0j"),f(l,"class","container svelte-1ll4h0j"),f(r,"class","svelte-1ll4h0j"),f(v,"class","svelte-1ll4h0j")},m(t,e){s(t,n,e),s(t,o,e),s(t,r,e),c(r,l),c(l,d),c(l,p),c(l,h),M(m,h,null),c(l,g),c(l,$),s(t,b,e),s(t,v,e),y=!0},p:t,i(t){y||(C(m.$$.fragment,t),y=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(k.has(t))return;k.add(t),E.c.push(()=>{k.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}(m.$$.fragment,t),y=!1},d(t){t&&a(n),t&&a(o),t&&a(r),A(m),t&&a(b),t&&a(v)}}}return new class extends H{constructor(t){super(),q(this,t,null,O,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
