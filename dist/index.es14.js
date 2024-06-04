import e from "react";
import { Input as l } from "./index.es4.js";
import { useFieldArray as o } from "react-hook-form";
import { CrossCircledIcon as d } from "@radix-ui/react-icons";
function u({ control: r, register: a }) {
  const { fields: s, append: m, remove: c } = o({
    control: r,
    name: "headers"
  });
  return /* @__PURE__ */ e.createElement("div", { className: "flex flex-col space-y-1 w-full" }, /* @__PURE__ */ e.createElement("div", { className: "flex justify-start" }, /* @__PURE__ */ e.createElement("div", { className: "text-slate-700 text-sm font-semibold text-start" }, "Headers")), /* @__PURE__ */ e.createElement(
    "div",
    {
      id: "make-api-params",
      className: "border rounded-lg p-2 text-sm flex flex-col space-y-1 h-[250px] overflow-y-auto"
    },
    /* @__PURE__ */ e.createElement("div", { className: "flex font-semibold space-x-1" }, /* @__PURE__ */ e.createElement("div", { className: "w-[140px] text-start" }, "Key"), /* @__PURE__ */ e.createElement("div", { className: "flex-1 text-start" }, "Value")),
    s.map((n, t) => /* @__PURE__ */ e.createElement("div", { className: "flex font-semibold space-x-1 text-xs", key: t }, /* @__PURE__ */ e.createElement("div", { className: "w-[140px] text-start" }, /* @__PURE__ */ e.createElement(l, { ...a(`headers.${t}.key`, { required: !1 }), className: "py-0" })), /* @__PURE__ */ e.createElement("div", { className: "flex-1 text-start" }, /* @__PURE__ */ e.createElement(l, { ...a(`headers.${t}.value`, { required: !1 }), className: "py-0" })), /* @__PURE__ */ e.createElement("button", { type: "button", onClick: () => c(t) }, /* @__PURE__ */ e.createElement(d, { color: "red" })))),
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
  u as Headers
};
//# sourceMappingURL=index.es14.js.map
