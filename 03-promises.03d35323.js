function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var u=o("eWCmQ");function l(e,t){return new Promise(((n,r)=>{const o=Math.random()>.3;setTimeout((()=>{o&&n(`✅ Fulfilled promise ${e} in ${t}ms`),r(`❌ Rejected promise ${e} in ${t}ms`)}),t)}))}({button:document.querySelector("button"),formEl:document.querySelector("form"),input:document.querySelector("input")}).formEl.addEventListener("submit",(function(t){t.preventDefault();const{elements:{delay:n,step:r,amount:o}}=t.currentTarget;let i=Number(n.value);for(let t=0;t<Number(o.value);t+=1){l(t+1,i).then((t=>{e(u).Notify.success(t)})).catch((t=>{e(u).Notify.failure(t)})),i+=Number(r.value)}}));
//# sourceMappingURL=03-promises.03d35323.js.map
