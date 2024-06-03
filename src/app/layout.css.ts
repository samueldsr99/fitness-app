import { vars } from "@/ui/theme/index.css";
import { spacing } from "@/ui/theme/utils";

import { style } from "@vanilla-extract/css";

export const main = style({
  maxWidth: vars.breakpoint.mobile,
  margin: "0 auto",
  border: `1px solid ${vars.color.base[100]}`,
  borderRadius: vars.border.radius["2xl"],
  backgroundColor: vars.color.secondary.background,
  padding: spacing(4),

  minHeight: "min(844px, 100vh)",
});
