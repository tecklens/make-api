import { appendErrors as v } from "react-hook-form";
import { validateFieldsNatively as d, toNestErrors as h } from "@hookform/resolvers";
var m = function(i, u) {
  for (var o = {}; i.length; ) {
    var r = i[0], c = r.code, n = r.message, e = r.path.join(".");
    if (!o[e])
      if ("unionErrors" in r) {
        var s = r.unionErrors[0].errors[0];
        o[e] = { message: s.message, type: s.code };
      } else
        o[e] = { message: n, type: c };
    if ("unionErrors" in r && r.unionErrors.forEach(function(f) {
      return f.errors.forEach(function(l) {
        return i.push(l);
      });
    }), u) {
      var t = o[e].types, a = t && t[r.code];
      o[e] = v(e, u, o, c, a ? [].concat(a, r.message) : r.message);
    }
    i.shift();
  }
  return o;
}, E = function(i, u, o) {
  return o === void 0 && (o = {}), function(r, c, n) {
    try {
      return Promise.resolve(function(e, s) {
        try {
          var t = Promise.resolve(i[o.mode === "sync" ? "parse" : "parseAsync"](r, u)).then(function(a) {
            return n.shouldUseNativeValidation && d({}, n), { errors: {}, values: o.raw ? r : a };
          });
        } catch (a) {
          return s(a);
        }
        return t && t.then ? t.then(void 0, s) : t;
      }(0, function(e) {
        if (function(s) {
          return s.errors != null;
        }(e))
          return { values: {}, errors: h(m(e.errors, !n.shouldUseNativeValidation && n.criteriaMode === "all"), n) };
        throw e;
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  };
};
export {
  E as zodResolver
};
//# sourceMappingURL=index.es5.js.map
