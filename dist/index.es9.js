import o, { useRef as s } from "react";
import a from "react-json-editor-ajrm";
import d from "./index.es17.js";
function u({ value: r, theme: l, onChange: c }) {
  const t = s();
  return /* @__PURE__ */ o.createElement("div", { className: "flex flex-col space-y-2" }, /* @__PURE__ */ o.createElement("div", { className: "text-sm font-semibold" }, "Body"), /* @__PURE__ */ o.createElement("div", { className: "border rounded-lg overflow-hidden" }, /* @__PURE__ */ o.createElement(
    a,
    {
      ref: t,
      id: "editor",
      placeholder: r,
      theme: l === "dark" ? "light_mitsuketa_tribute" : "dark_vscode_tribute",
      locale: d,
      height: "250px",
      width: "100%",
      onChange: (e, n) => {
        console.log(e), console.log(n);
      },
      onBlur: (e) => {
        console.log(e.jsObject), c(e.jsObject), console.log(t.current?.error);
      }
    }
  )));
}
export {
  u as Body
};
//# sourceMappingURL=index.es9.js.map
