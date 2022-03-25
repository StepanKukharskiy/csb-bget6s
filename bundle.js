var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function u(){return t=" ",document.createTextNode(t);var t}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let d;function p(t){d=t}const m=[],h=[],g=[],$=[],b=Promise.resolve();let v=!1;function y(t){g.push(t)}const _=new Set;let x=0;function w(){const t=d;do{for(;x<m.length;){const t=m[x];x++,p(t),k(t.$$)}for(p(null),m.length=0,x=0;h.length;)h.pop()();for(let t=0;t<g.length;t+=1){const e=g[t];_.has(e)||(_.add(e),e())}g.length=0}while(m.length);for(;$.length;)$.pop()();v=!1,_.clear(),p(t)}function k(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(y)}}const E=new Set;let C;function M(t,e){t&&t.i&&(E.delete(t),t.i(e))}function A(t,n,s,c){const{fragment:l,on_mount:a,on_destroy:i,after_update:u}=t.$$;l&&l.m(n,s),c||y(()=>{const n=a.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]}),u.forEach(y)}function T(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function j(t,e){-1===t.$$.dirty[0]&&(m.push(t),v||(v=!0,b.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function q(e,r,s,c,l,i,u,f=[-1]){const m=d;p(e);const h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(m?m.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:r.target||m.$$.root};u&&u(h.root);let g=!1;if(h.ctx=s?s(e,r.props||{},(t,n,...o)=>{const r=o.length?o[0]:n;return h.ctx&&l(h.ctx[t],h.ctx[t]=r)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](r),g&&j(e,t)),n}):[],h.update(),g=!0,o(h.before_update),h.fragment=!!c&&c(h.ctx),r.target){if(r.hydrate){const t=($=r.target,Array.from($.childNodes));h.fragment&&h.fragment.l(t),t.forEach(a)}else h.fragment&&h.fragment.c();r.intro&&M(e.$$.fragment),A(e,r.target,r.anchor,r.customElement),w()}var $;p(m)}class H{$destroy(){T(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function L(e){let n;return{c(){(n=i("button")).textContent="Go to Kodiia",f(n,"class","svelte-ie3qvq")},m(t,e){l(t,n,e)},p:t,i:t,o:t,d(t){t&&a(n)}}}class N extends H{constructor(t){super(),q(this,t,null,L,s,{})}}function O(e){let n,o,r,s,d,p,m,h,g,$,b,v,y;return h=new N({}),{c(){var t;(n=i("header")).innerHTML='<img class="logo svelte-s0oper" src="./logo.png" alt="logo"/>',o=u(),r=i("main"),s=i("div"),(d=i("h1")).textContent="Explore the world through coding",p=u(),m=i("a"),(t=h.$$.fragment)&&t.c(),g=u(),($=i("div")).innerHTML='<iframe title="background_video" src="https://player.vimeo.com/video/692335404?background=1&amp;autoplay=1&amp;loop=1&amp;byline=0&amp;title=0" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" class="svelte-s0oper"></iframe>',b=u(),(v=i("footer")).innerHTML="<p>Copyright © 2022 Kodiia</p> \n<p>Made with ❤️ across the globe</p>",f(n,"class","svelte-s0oper"),f(d,"class","svelte-s0oper"),f(m,"href","https://kodiia.com"),f(m,"class","svelte-s0oper"),f($,"class","vimeo-wrapper svelte-s0oper"),f(s,"class","container svelte-s0oper"),f(r,"class","svelte-s0oper"),f(v,"class","svelte-s0oper")},m(t,e){l(t,n,e),l(t,o,e),l(t,r,e),c(r,s),c(s,d),c(s,p),c(s,m),A(h,m,null),c(s,g),c(s,$),l(t,b,e),l(t,v,e),y=!0},p:t,i(t){y||(M(h.$$.fragment,t),y=!0)},o(t){!function(t,e,n,o){if(t&&t.o){if(E.has(t))return;E.add(t),C.c.push(()=>{E.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}(h.$$.fragment,t),y=!1},d(t){t&&a(n),t&&a(o),t&&a(r),T(h),t&&a(b),t&&a(v)}}}return new class extends H{constructor(t){super(),q(this,t,null,O,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
