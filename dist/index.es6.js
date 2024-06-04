import t, { forwardRef as n } from "react";
import { CaretSortIcon as i, ChevronUpIcon as p, ChevronDownIcon as u, CheckIcon as f } from "@radix-ui/react-icons";
import * as e from "@radix-ui/react-select";
import { cn as o } from "./index.es15.js";
const E = e.Root, v = e.Value, y = n(({ className: l, children: r, ...a }, s) => /* @__PURE__ */ t.createElement(
  e.Trigger,
  {
    ref: s,
    className: o(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      l
    ),
    ...a
  },
  r,
  /* @__PURE__ */ t.createElement(e.Icon, { asChild: !0 }, /* @__PURE__ */ t.createElement(i, { className: "h-4 w-4 opacity-50" }))
));
y.displayName = e.Trigger.displayName;
const c = n(({ className: l, ...r }, a) => /* @__PURE__ */ t.createElement(
  e.ScrollUpButton,
  {
    ref: a,
    className: o(
      "flex cursor-default items-center justify-center py-1",
      l
    ),
    ...r
  },
  /* @__PURE__ */ t.createElement(p, null)
));
c.displayName = e.ScrollUpButton.displayName;
const m = n(({ className: l, ...r }, a) => /* @__PURE__ */ t.createElement(
  e.ScrollDownButton,
  {
    ref: a,
    className: o(
      "flex cursor-default items-center justify-center py-1",
      l
    ),
    ...r
  },
  /* @__PURE__ */ t.createElement(u, null)
));
m.displayName = e.ScrollDownButton.displayName;
const g = n(({ className: l, children: r, position: a = "popper", ...s }, d) => /* @__PURE__ */ t.createElement(e.Portal, null, /* @__PURE__ */ t.createElement(
  e.Content,
  {
    ref: d,
    className: o(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      a === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      l
    ),
    position: a,
    ...s
  },
  /* @__PURE__ */ t.createElement(c, null),
  /* @__PURE__ */ t.createElement(
    e.Viewport,
    {
      className: o(
        "p-1",
        a === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
      )
    },
    r
  ),
  /* @__PURE__ */ t.createElement(m, null)
)));
g.displayName = e.Content.displayName;
const N = n(({ className: l, ...r }, a) => /* @__PURE__ */ t.createElement(
  e.Label,
  {
    ref: a,
    className: o("px-2 py-1.5 text-sm font-semibold", l),
    ...r
  }
));
N.displayName = e.Label.displayName;
const h = n(({ className: l, children: r, ...a }, s) => /* @__PURE__ */ t.createElement(
  e.Item,
  {
    ref: s,
    className: o(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      l
    ),
    ...a
  },
  /* @__PURE__ */ t.createElement("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center" }, /* @__PURE__ */ t.createElement(e.ItemIndicator, null, /* @__PURE__ */ t.createElement(f, { className: "h-4 w-4" }))),
  /* @__PURE__ */ t.createElement(e.ItemText, null, r)
));
h.displayName = e.Item.displayName;
const w = n(({ className: l, ...r }, a) => /* @__PURE__ */ t.createElement(
  e.Separator,
  {
    ref: a,
    className: o("-mx-1 my-1 h-px bg-muted", l),
    ...r
  }
));
w.displayName = e.Separator.displayName;
export {
  E as Select,
  g as SelectContent,
  h as SelectItem,
  N as SelectLabel,
  m as SelectScrollDownButton,
  c as SelectScrollUpButton,
  w as SelectSeparator,
  y as SelectTrigger,
  v as SelectValue
};
//# sourceMappingURL=index.es6.js.map
