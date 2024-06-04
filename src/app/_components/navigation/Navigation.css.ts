import { vars } from "@/ui/theme/index.css";
import { spacing } from "@/ui/theme/utils";

import { style } from "@vanilla-extract/css";

export const root = style({
  position: "absolute",
  bottom: spacing(6),
  left: spacing(5),
  right: spacing(5),
  padding: spacing(3.5),
  backgroundColor: vars.color.primary.foreground,

  borderRadius: vars.border.radius["3xl"],

  display: "flex",
  justifyContent: "space-between",
  gap: spacing(4),

  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
});

export const navItem = style({
  padding: spacing(2, 4),
  borderRadius: vars.border.radius["3xl"],
  ...vars.font.sm,

  backgroundColor: vars.color.secondary.background,
  color: vars.color.secondary.foreground,

  display: "flex",
  alignItems: "center",
  gap: spacing(2),

  // transition: "width 1s ease-out, background-color 100ms ease-out, color 100ms ease-out, transform 100ms ease-out",
});

export const navItemActive = style({
  maxWidth: "fit-content",
  backgroundColor: vars.color.primary.background,
  color: vars.color.primary.foreground,
});
