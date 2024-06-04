"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("react"),r=require("./index.cjs4.js"),n=require("react-hook-form"),o=require("@radix-ui/react-icons");function d({control:s,register:a}){const{fields:l,append:c,remove:m}=n.useFieldArray({control:s,name:"headers"});return e.createElement("div",{className:"flex flex-col space-y-1 w-full"},e.createElement("div",{className:"flex justify-start"},e.createElement("div",{className:"text-slate-700 text-sm font-semibold text-start"},"Headers")),e.createElement("div",{id:"make-api-params",className:"border rounded-lg p-2 text-sm flex flex-col space-y-1 h-[250px] overflow-y-auto"},e.createElement("div",{className:"flex font-semibold space-x-1"},e.createElement("div",{className:"w-[140px] text-start"},"Key"),e.createElement("div",{className:"flex-1 text-start"},"Value")),l.map((i,t)=>e.createElement("div",{className:"flex font-semibold space-x-1 text-xs",key:t},e.createElement("div",{className:"w-[140px] text-start"},e.createElement(r.Input,{...a(`headers.${t}.key`,{required:!1}),className:"py-0"})),e.createElement("div",{className:"flex-1 text-start"},e.createElement(r.Input,{...a(`headers.${t}.value`,{required:!1}),className:"py-0"})),e.createElement("button",{type:"button",onClick:()=>m(t)},e.createElement(o.CrossCircledIcon,{color:"red"})))),e.createElement("div",{onClick:()=>{c({key:"",value:""})},className:"py-1 px-4 flex justify-center font-bold border rounded-lg cursor-pointer"},"Add params")))}exports.Headers=d;
//# sourceMappingURL=index.cjs14.js.map