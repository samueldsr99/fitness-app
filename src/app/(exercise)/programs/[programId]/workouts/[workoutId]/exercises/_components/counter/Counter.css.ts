import { vars } from "@/ui/theme/index.css";
import { spacing } from "@/ui/theme/utils";

import { style } from "@vanilla-extract/css";

export const root = style({
  ...vars.font["4xl"],
  fontWeight: vars.font.bold,
  padding: spacing(15),
  backgroundColor: vars.color.primary.background,
  color: vars.color.primary.foreground,
  width: spacing(20),
  height: spacing(20),
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: vars.border.radius.lg,
});
