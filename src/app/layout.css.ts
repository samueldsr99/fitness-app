import { vars } from "@/ui/theme/index.css";

import { style } from "@vanilla-extract/css";

export const root = style({
  position: "relative",
  maxWidth: vars.breakpoint.mobile,
  margin: "0 auto",
  border: `2px solid ${vars.color.base[100]}`,
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  borderRadius: vars.border.radius["2xl"],
  backgroundColor: vars.color.white,

  minHeight: "min(844px, 100vh)",
  maxHeight: "100vh",
});
