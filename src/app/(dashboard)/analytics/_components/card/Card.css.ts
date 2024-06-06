import { vars } from "@/ui/theme/index.css";
import { spacing } from "@/ui/theme/utils";

import { style } from "@vanilla-extract/css";

export const root = style({
  height: "fit-content",
  padding: spacing(3),
  borderRadius: vars.border.radius["xl"],
});

export const header = style({
  display: "flex",
  alignItems: "center",
  gap: spacing(2),
  marginBottom: spacing(3),
});

export const variantPurple = style({
  backgroundColor: vars.color.purple.light,
  color: vars.color.purple.main,
});

export const variantRed = style({
  backgroundColor: vars.color.red.light,
  color: vars.color.red.main,
});

export const variantBlue = style({
  backgroundColor: vars.color.blue.light,
  color: vars.color.blue.main,
});

export const variantSecondary = style({
  backgroundColor: vars.color.secondary.background,
  color: vars.color.secondary.foreground,
});
