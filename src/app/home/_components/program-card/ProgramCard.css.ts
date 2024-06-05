import { vars } from "@/ui/theme/index.css";
import { spacing } from "@/ui/theme/utils";

import { style } from "@vanilla-extract/css";

export const root = style({
  display: "block",
  position: "relative",
  borderRadius: vars.border.radius["2xl"],
  minWidth: 330,
  width: "100%",
  height: 200,

  transition: "transform 0.2s",
  ":active": {
    transform: "scale(0.95)",
  },
});

export const image = style({
  zIndex: 1,
  position: "absolute",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: vars.border.radius["2xl"],
});

export const content = style({
  position: "relative",
  zIndex: 2,
  padding: spacing(5),
  borderRadius: vars.border.radius["2xl"],
  height: "100%",

  background: `linear-gradient(-45deg, rgb(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.7) 100%)`,
});

export const title = style({
  ...vars.font.xl,
  fontWeight: vars.font.medium,
  color: vars.color.primary.background,
  width: "60%",
});

export const difficulty = style({
  display: "inline-block",
  marginTop: spacing(2),
  padding: spacing(1, 2),
  borderRadius: vars.border.radius["base"],
  backgroundColor: vars.color.primary.background,
  color: vars.color.primary.foreground,
  ...vars.font.sm,
  fontWeight: vars.font.light,
});
