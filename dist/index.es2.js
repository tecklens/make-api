import e, { useState as y, useEffect as S } from "react";
import { Form as C, FormField as u, FormItem as d, FormControl as i, FormMessage as f } from "./index.es3.js";
import { Input as F } from "./index.es4.js";
import { useForm as H } from "react-hook-form";
import { z as t } from "zod";
import { zodResolver as k } from "./index.es5.js";
import { Select as T, SelectTrigger as R, SelectValue as V, SelectContent as w, SelectItem as B } from "./index.es6.js";
import { Tabs as L, TabsList as j, TabsTrigger as E, TabsContent as p } from "./index.es7.js";
import { Params as I } from "./index.es8.js";
import { Body as P } from "./index.es9.js";
import { ResponseData as U } from "./index.es10.js";
import { Button as z } from "./index.es11.js";
import { ListHeaderCommon as D } from "./index.es12.js";
import { defaultHeader as g } from "./index.es13.js";
import { Headers as M } from "./index.es14.js";
import A from "axios";
const Y = t.object({
  method: t.string(),
  url: t.string().url({ message: "Your url is invalid" }),
  params: t.array(t.object({
    key: t.string(),
    value: t.string()
  }), { message: "Params not valid" }).optional(),
  headers: t.array(t.object({
    key: t.string(),
    value: t.string()
  })).optional(),
  body: t.any().optional()
}), me = (l) => {
  const [v, b] = y(null), [x, h] = y(!1), { control: m, register: o, ...n } = H({
    resolver: k(Y),
    defaultValues: {
      url: "",
      method: "get",
      headers: g,
      body: null
    }
  });
  async function N(a) {
    h(!0);
    const r = await A({
      method: a.method,
      url: a.url,
      params: a.params?.reduce((c, s) => ({
        ...c,
        [s.key]: s.value
      }), {}),
      data: a.body,
      headers: a.headers?.reduce((c, s) => ({
        ...c,
        [s.key]: s.value
      }), {})
    });
    h(!1), b(r);
  }
  return S(() => {
    l && (n.reset({
      method: l.method,
      url: l.url,
      params: l.params,
      body: l.defaultBody,
      headers: l.defaultHeaders
    }), l.defaultHeaders == null && l.useDefaultHeader !== !1 && n.setValue("headers", g));
  }, [l]), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement(C, { ...n, control: m, register: o }, /* @__PURE__ */ e.createElement("form", { onSubmit: n.handleSubmit(N), className: "flex flex-col space-y-2" }, /* @__PURE__ */ e.createElement("div", { className: "flex space-x-0 sm:space-x-1" }, /* @__PURE__ */ e.createElement(
    u,
    {
      control: m,
      name: "method",
      render: ({ field: a }) => /* @__PURE__ */ e.createElement(d, { className: "w-[120px] mr-3" }, /* @__PURE__ */ e.createElement(i, null, /* @__PURE__ */ e.createElement(T, { value: a.value, onValueChange: a.onChange }, /* @__PURE__ */ e.createElement(R, { className: "" }, /* @__PURE__ */ e.createElement(V, { placeholder: "method" }, a.value?.toUpperCase())), /* @__PURE__ */ e.createElement(w, null, D.map((r) => /* @__PURE__ */ e.createElement(B, { value: r, key: r }, /* @__PURE__ */ e.createElement("div", { className: "flex gap-x-4 px-2 py-1" }, r.toUpperCase())))))), /* @__PURE__ */ e.createElement(f, null))
    }
  ), /* @__PURE__ */ e.createElement(
    u,
    {
      control: m,
      name: "url",
      render: ({ field: a }) => /* @__PURE__ */ e.createElement(d, { className: "flex-1 w-full" }, /* @__PURE__ */ e.createElement(i, null, /* @__PURE__ */ e.createElement(F, { placeholder: "Enter URL", ...a })), /* @__PURE__ */ e.createElement(f, { className: "!mt-0" }))
    }
  )), /* @__PURE__ */ e.createElement(L, { defaultValue: "params", className: "flex flex-col space-y-1" }, /* @__PURE__ */ e.createElement(j, { className: "" }, /* @__PURE__ */ e.createElement(E, { value: "params", className: "flex-1" }, "Params"), /* @__PURE__ */ e.createElement(E, { value: "headers", className: "flex-1" }, "Headers"), /* @__PURE__ */ e.createElement(E, { value: "body", className: "flex-1" }, "Body")), /* @__PURE__ */ e.createElement(p, { value: "params", className: "space-y-4" }, /* @__PURE__ */ e.createElement(I, { control: m, register: o })), /* @__PURE__ */ e.createElement(p, { value: "headers", className: "space-y-4" }, /* @__PURE__ */ e.createElement(M, { control: m, register: o })), /* @__PURE__ */ e.createElement(p, { value: "body", className: "space-y-4" }, /* @__PURE__ */ e.createElement(
    u,
    {
      control: m,
      name: "body",
      render: ({ field: a }) => /* @__PURE__ */ e.createElement(d, { className: "flex-1 w-full" }, /* @__PURE__ */ e.createElement(i, null, /* @__PURE__ */ e.createElement(P, { value: a.value, theme: l.theme, onChange: (r) => a.onChange(r) })), /* @__PURE__ */ e.createElement(f, { className: "!mt-0" }))
    }
  ))), /* @__PURE__ */ e.createElement(z, { disabled: x }, "Send"))), /* @__PURE__ */ e.createElement(U, { data: v, theme: l.theme }));
};
export {
  me as MakeApi
};
//# sourceMappingURL=index.es2.js.map
