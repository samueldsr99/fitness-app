import { vars } from "@/ui/theme/index.css";
import { spacing } from "@/ui/theme/utils";

import { style } from "@vanilla-extract/css";

export const root = style({
  listStyle: "none",
});

export const link = style({
  width: "100%",
  padding: spacing(2, 6, 2, 3),
  backgroundColor: vars.color.secondary.background,
  borderRadius: vars.border.radius.xl,

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  transition: "transform 0.2s",

  ":active": {
    transform: "scale(0.95)",
  },
});

export const leftContent = style({
  display: "flex",
  gap: spacing(2),
});

export const name = style({
  color: vars.color.secondary.foreground,
  display: "flex",
  alignItems: "center",
});

export const difficulty = style({
  background: vars.color.primary.background,
  color: vars.color.primary.foreground,
  padding: spacing(0.5, 1),
  borderRadius: vars.border.radius.sm,
  marginLeft: spacing(2),

  ...vars.font.xs,
});

export const previewImage = style({
  flexShrink: 0,
  objectFit: "cover",
  borderRadius: vars.border.radius.lg,
});

export const playIcon = style({
  color: vars.color.primary.background,
});

export const duration = style({
  marginTop: spacing(2),
  display: "flex",
  gap: spacing(1),
  alignItems: "center",
  color: vars.color.secondary.foreground,
});
