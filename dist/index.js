"use strict";var l=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw r=0,a}}};var v=l(function(w,s){"use strict";var f=require("@stdlib/ndarray-base-shape2strides"),m=require("@stdlib/ndarray-base-buffer"),o=require("@stdlib/ndarray-base-ctor"),q=require("@stdlib/ndarray-base-numel"),c=require("@stdlib/string-format");function g(e,r,a){var n,i,u,t;if(n=r.length,n>0?(u=q(r),t=f(r,a)):(u=1,t=[0]),i=m(e,u),i===null)throw new TypeError(c("invalid argument. First argument must be a recognized data type. Value: `%s`.",e));return new o(e,i,r,t,0,a)}s.exports=g});var b=v();module.exports=b;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
