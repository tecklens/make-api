"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("react"),g=require("@radix-ui/react-slot"),c=require("react-hook-form"),i=require("./index.cjs15.js"),C=require("./index.cjs16.js"),b=c.FormProvider,l=e.createContext({}),v=({...r})=>e.createElement(l.Provider,{value:{name:r.name}},e.createElement(c.Controller,{...r})),a=()=>{const r=e.useContext(l),o=e.useContext(F),{getFieldState:t,formState:m}=c.useFormContext(),n=t(r.name,m);if(!r)throw new Error("useFormField should be used within <FormField>");const{id:s}=o;return{id:s,name:r.name,formItemId:`${s}-form-item`,formDescriptionId:`${s}-form-item-description`,formMessageId:`${s}-form-item-message`,...n}},F=e.createContext({}),u=e.forwardRef(({className:r,...o},t)=>{const m=e.useId();return e.createElement(F.Provider,{value:{id:m}},e.createElement("div",{ref:t,className:i.cn("space-y-2",r),...o}))});u.displayName="FormItem";const f=e.forwardRef(({className:r,...o},t)=>{const{error:m,formItemId:n}=a();return e.createElement(C.Label,{ref:t,className:i.cn(m&&"text-destructive",r),htmlFor:n,...o})});f.displayName="FormLabel";const I=e.forwardRef(({...r},o)=>{const{error:t,formItemId:m,formDescriptionId:n,formMessageId:s}=a();return e.createElement(g.Slot,{ref:o,id:m,"aria-describedby":t?`${n} ${s}`:`${n}`,"aria-invalid":!!t,...r})});I.displayName="FormControl";const p=e.forwardRef(({className:r,...o},t)=>{const{formDescriptionId:m}=a();return e.createElement("p",{ref:t,id:m,className:i.cn("text-[0.8rem] text-muted-foreground",r),...o})});p.displayName="FormDescription";const x=e.forwardRef(({className:r,children:o,...t},m)=>{const{error:n,formMessageId:s}=a(),d=n?String(n?.message):o;return d?e.createElement("p",{ref:m,id:s,className:i.cn("text-[0.8rem] font-medium text-destructive",r),...t},d):null});x.displayName="FormMessage";exports.Form=b;exports.FormControl=I;exports.FormDescription=p;exports.FormField=v;exports.FormItem=u;exports.FormLabel=f;exports.FormMessage=x;exports.useFormField=a;
//# sourceMappingURL=index.cjs3.js.map