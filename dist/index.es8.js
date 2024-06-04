import e from "react";
import { Input as r } from "./index.es4.js";
import { useFieldArray as o } from "react-hook-form";
import { CrossCircledIcon as n } from "@radix-ui/react-icons";
function u({ control: l, register: a }) {
  const { fields: s, append: m, remove: c } = o({
    control: l,
    name: "params"
  });
  return /* @__PURE__ */ e.createElement("div", { className: "flex flex-col space-y-1 w-full" }, /* @__PURE__ */ e.createElement("div", { className: "flex justify-start" }, /* @__PURE__ */ e.createElement("div", { className: "text-slate-700 text-sm font-semibold text-start" }, "Query Params")), /* @__PURE__ */ e.createElement(
    "div",
    {
      id: "make-api-params",
      className: "border rounded-lg p-2 text-sm flex flex-col space-y-1 h-[250px] overflow-y-auto"
    },
    /* @__PURE__ */ e.createElement("div", { className: "flex font-semibold space-x-1" }, /* @__PURE__ */ e.createElement("div", { className: "w-[140px] text-start" }, "Key"), /* @__PURE__ */ e.createElement("div", { className: "flex-1 text-start" }, "Value")),
    s.map((p, t) => /* @__PURE__ */ e.createElement("div", { className: "flex font-semibold space-x-1 text-xs", key: t }, /* @__PURE__ */ e.createElement("div", { className: "w-[140px] text-start" }, /* @__PURE__ */ e.createElement(r, { ...a(`params.${t}.key`, { required: !1 }), className: "py-0" })), /* @__PURE__ */ e.createElement("div", { className: "flex-1 text-start" }, /* @__PURE__ */ e.createElement(r, { ...a(`params.${t}.value`, { required: !1 }), className: "py-0" })), /* @__PURE__ */ e.createElement("button", { type: "button", onClick: () => c(t) }, /* @__PURE__ */ e.createElement(n, { color: "red" })))),
    /* @__PURE__ */ e.createElement(
      "div",
      {
        onClick: () => {
          m({
            key: "",
            value: ""
          });
        },
        className: "py-1 px-4 flex justify-center font-bold border rounded-lg cursor-pointer"
      },
      "Add params"
    )
  ));
}
export {
  u as Params
};
//# sourceMappingURL=index.es8.js.map
