import { vars } from "@/ui/theme/index.css";
import { spacing } from "@/ui/theme/utils";

import { style } from "@vanilla-extract/css";

export const previewImage = style({
  width: "100%",
  height: "auto",
  borderRadius: vars.border.radius["2xl"],
});

export const difficulty = style({
  display: "inline-block",
  marginTop: spacing(2),
  padding: spacing(1.5, 2.5),
  borderRadius: vars.border.radius.base,
  backgroundColor: vars.color.primary.background,
});

export const imageWrapper = style({
  position: "relative",
});

export const duration = style({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: spacing(2),
  borderRadius: vars.border.radius.base,

  width: spacing(20),
  padding: spacing(2),
  margin: "0 auto",
  transform: "translateY(40%)",

  backgroundColor: vars.color.primary.foreground,
  color: vars.color.primary.background,
});

export const durationText = style({
  ...vars.font.xl,
});

export const exercisesList = style({
  marginTop: spacing(6),
  padding: 0,
});
