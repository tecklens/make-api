import s, { forwardRef as d } from "react";
import { Slot as c } from "@radix-ui/react-slot";
import { cva as u } from "class-variance-authority";
import { cn as f } from "./index.es15.js";
const l = u(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary"
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), m = d(
  ({ className: e, variant: t, size: r, asChild: o = !1, ...n }, i) => {
    const a = o ? c : "button";
    return /* @__PURE__ */ s.createElement(
      a,
      {
        className: f(l({ variant: t, size: r, className: e })),
        ref: i,
        ...n
      }
    );
  }
);
m.displayName = "Button";
export {
  m as Button,
  l as buttonVariants
};
//# sourceMappingURL=index.es11.js.map
