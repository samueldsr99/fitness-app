import { vars } from "@/ui/theme/index.css";
import { spacing } from "@/ui/theme/utils";

import { style } from "@vanilla-extract/css";

export const root = style({
  border: "none",
  fontFamily: "inherit",
  cursor: "pointer",
  borderRadius: vars.border.radius["3xl"],

  transition: "background-color 0.2s, outline 0.1s, transform 0.1s",

  ":active": {
    transform: "scale(0.95)",
  },
});

// Variants
export const variantPrimary = style({
  backgroundColor: vars.color.primary.background,
  color: vars.color.primary.foreground,

  ":hover": {
    backgroundColor: vars.color.primary.hover,
  },

  ":focus": {
    outline: `2px solid ${vars.color.primary.background}`,
    outlineOffset: "2px",
  },
});

export const variantSecondary = style({
  backgroundColor: vars.color.secondary.background,
  color: vars.color.secondary.foreground,

  ":focus": {
    outline: `2px solid ${vars.color.base[100]}`,
    outlineOffset: "2px",
  },
});

// Sizes
export const sizeSm = style({
  padding: `${spacing(1, 2)}`,
  ...vars.font.sm,
  fontWeight: vars.font.light,
});

export const sizeMd = style({
  padding: `${spacing(2, 4)}`,
  ...vars.font.base,
  fontWeight: vars.font.medium,
});

export const sizeLg = style({
  padding: `${spacing(3, 6)}`,
  ...vars.font.lg,
  fontWeight: vars.font.semibold,
});

export const fullWidth = style({
  width: "100%",
});
