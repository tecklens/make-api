"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const f=require("react-hook-form"),l=require("@hookform/resolvers");var h=function(i,u){for(var o={};i.length;){var r=i[0],c=r.code,n=r.message,e=r.path.join(".");if(!o[e])if("unionErrors"in r){var s=r.unionErrors[0].errors[0];o[e]={message:s.message,type:s.code}}else o[e]={message:n,type:c};if("unionErrors"in r&&r.unionErrors.forEach(function(v){return v.errors.forEach(function(d){return i.push(d)})}),u){var t=o[e].types,a=t&&t[r.code];o[e]=f.appendErrors(e,u,o,c,a?[].concat(a,r.message):r.message)}i.shift()}return o},m=function(i,u,o){return o===void 0&&(o={}),function(r,c,n){try{return Promise.resolve(function(e,s){try{var t=Promise.resolve(i[o.mode==="sync"?"parse":"parseAsync"](r,u)).then(function(a){return n.shouldUseNativeValidation&&l.validateFieldsNatively({},n),{errors:{},values:o.raw?r:a}})}catch(a){return s(a)}return t&&t.then?t.then(void 0,s):t}(0,function(e){if(function(s){return s.errors!=null}(e))return{values:{},errors:l.toNestErrors(h(e.errors,!n.shouldUseNativeValidation&&n.criteriaMode==="all"),n)};throw e}))}catch(e){return Promise.reject(e)}}};exports.zodResolver=m;
//# sourceMappingURL=index.cjs5.js.map
