import e from "react";
import m from "./index.es17.js";
import n from "react-json-editor-ajrm";
import { HttpStatusText as r } from "./index.es18.js";
import i from "lodash.get";
function f({ data: t, theme: l }) {
  return /* @__PURE__ */ e.createElement("div", { className: "flex flex-col mt-2 max-w-[100%]" }, /* @__PURE__ */ e.createElement("div", { className: "inline-flex justify-between space-x-2" }, /* @__PURE__ */ e.createElement("div", { className: "text-sm font-semibold" }, "Response"), t ? /* @__PURE__ */ e.createElement("div", { className: "inline-flex text-sm" }, /* @__PURE__ */ e.createElement("div", { className: "inline-flex space-x-1" }, /* @__PURE__ */ e.createElement("div", null, "Status:"), /* @__PURE__ */ e.createElement("div", { className: "text-green-500" }, t.status, " ", i(r, t.status)))) : null), t ? /* @__PURE__ */ e.createElement("div", { className: "w-full border rounded-lg mt-1 overflow-hidden" }, /* @__PURE__ */ e.createElement(
    n,
    {
      id: "api-response",
      placeholder: t.data,
      theme: l === "dark" ? "light_mitsuketa_tribute" : "dark_vscode_tribute",
      locale: m,
      height: "250px",
      width: "100%",
      viewOnly: !0,
      onChange: (s, a) => {
        console.log(s, a);
      }
    }
  )) : null);
}
export {
  f as ResponseData
};
//# sourceMappingURL=index.es10.js.map
