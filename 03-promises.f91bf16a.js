function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var u=r("eWCmQ");const l={button:document.querySelector("button"),formEl:document.querySelector("form"),input:document.querySelector("input")};let i=0,s=0,d=0,c=i;function f(e,t){return new Promise(((o,n)=>{const r=Math.random()>.3;setTimeout((()=>{r&&o(`✅ Fulfilled promise ${e} in ${t}ms`),n(`❌ Rejected promise ${e} in ${t}ms`)}),c)}))}l.formEl.addEventListener("submit",(t=>{t.preventDefault();const{elements:{delay:o,step:n,amount:r}}=t.currentTarget;i=Number(o.value),s=Number(n.value),d=Number(r.value);for(let t=0;t<d;t+=1){c+=s,f(t+1,c).then((t=>{console.log(t),e(u).Notify.success(t)})).catch((t=>{console.log(t),e(u).Notify.failure(t)}))}}));
//# sourceMappingURL=03-promises.f91bf16a.js.map
