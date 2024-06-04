import s, { createContext as f, forwardRef as i, useId as p, useContext as l } from "react";
import { Slot as I } from "@radix-ui/react-slot";
import { FormProvider as x, Controller as g, useFormContext as C } from "react-hook-form";
import { cn as a } from "./index.es15.js";
import { Label as v } from "./index.es16.js";
const L = x, F = f(
  {}
), P = ({
  ...e
}) => /* @__PURE__ */ s.createElement(F.Provider, { value: { name: e.name } }, /* @__PURE__ */ s.createElement(g, { ...e })), c = () => {
  const e = l(F), r = l(u), { getFieldState: t, formState: o } = C(), m = t(e.name, o);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: n } = r;
  return {
    id: n,
    name: e.name,
    formItemId: `${n}-form-item`,
    formDescriptionId: `${n}-form-item-description`,
    formMessageId: `${n}-form-item-message`,
    ...m
  };
}, u = f(
  {}
), E = i(({ className: e, ...r }, t) => {
  const o = p();
  return /* @__PURE__ */ s.createElement(u.Provider, { value: { id: o } }, /* @__PURE__ */ s.createElement("div", { ref: t, className: a("space-y-2", e), ...r }));
});
E.displayName = "FormItem";
const N = i(({ className: e, ...r }, t) => {
  const { error: o, formItemId: m } = c();
  return /* @__PURE__ */ s.createElement(
    v,
    {
      ref: t,
      className: a(o && "text-destructive", e),
      htmlFor: m,
      ...r
    }
  );
});
N.displayName = "FormLabel";
const y = i(({ ...e }, r) => {
  const { error: t, formItemId: o, formDescriptionId: m, formMessageId: n } = c();
  return /* @__PURE__ */ s.createElement(
    I,
    {
      ref: r,
      id: o,
      "aria-describedby": t ? `${m} ${n}` : `${m}`,
      "aria-invalid": !!t,
      ...e
    }
  );
});
y.displayName = "FormControl";
const b = i(({ className: e, ...r }, t) => {
  const { formDescriptionId: o } = c();
  return /* @__PURE__ */ s.createElement(
    "p",
    {
      ref: t,
      id: o,
      className: a("text-[0.8rem] text-muted-foreground", e),
      ...r
    }
  );
});
b.displayName = "FormDescription";
const $ = i(({ className: e, children: r, ...t }, o) => {
  const { error: m, formMessageId: n } = c(), d = m ? String(m?.message) : r;
  return d ? /* @__PURE__ */ s.createElement(
    "p",
    {
      ref: o,
      id: n,
      className: a("text-[0.8rem] font-medium text-destructive", e),
      ...t
    },
    d
  ) : null;
});
$.displayName = "FormMessage";
export {
  L as Form,
  y as FormControl,
  b as FormDescription,
  P as FormField,
  E as FormItem,
  N as FormLabel,
  $ as FormMessage,
  c as useFormField
};
//# sourceMappingURL=index.es3.js.map
