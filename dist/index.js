"use strict";var f=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=f(function(x,s){
var l=require('@stdlib/ndarray-base-shape2strides/dist'),o=require('@stdlib/ndarray-base-strides2offset/dist'),m=require('@stdlib/ndarray-base-buffer/dist'),q=require('@stdlib/error-tools-fmtprodmsg/dist'),c=require('@stdlib/ndarray-base-ctor/dist'),d=require('@stdlib/ndarray-base-numel/dist');function g(e,r,u){var n,a,t,i;if(n=r.length,n>0?(t=d(r),i=l(r,u)):(t=1,i=[0]),a=m(e,t),a===null)throw new TypeError(q('0jl5K',e));return new c(e,a,r,i,o(r,i),u)}s.exports=g
});var b=v();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
