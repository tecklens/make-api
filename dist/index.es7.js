import n, { forwardRef as a } from "react";
import * as e from "@radix-ui/react-tabs";
import { cn as o } from "./index.es15.js";
const m = e.Root, r = a(({ className: t, ...i }, s) => /* @__PURE__ */ n.createElement(
  e.List,
  {
    ref: s,
    className: o(
      "inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
      t
    ),
    ...i
  }
));
r.displayName = e.List.displayName;
const c = a(({ className: t, ...i }, s) => /* @__PURE__ */ n.createElement(
  e.Trigger,
  {
    ref: s,
    className: o(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
      t
    ),
    ...i
  }
));
c.displayName = e.Trigger.displayName;
const l = a(({ className: t, ...i }, s) => /* @__PURE__ */ n.createElement(
  e.Content,
  {
    ref: s,
    className: o(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      t
    ),
    ...i
  }
));
l.displayName = e.Content.displayName;
export {
  m as Tabs,
  l as TabsContent,
  r as TabsList,
  c as TabsTrigger
};
//# sourceMappingURL=index.es7.js.map
