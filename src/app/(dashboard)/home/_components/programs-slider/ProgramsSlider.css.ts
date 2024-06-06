import { vars } from "@/ui/theme/index.css";
import { spacing } from "@/ui/theme/utils";

import { style } from "@vanilla-extract/css";

export const root = style({
  position: "relative",
});

export const slider = style({
  gap: spacing(3),
});

export const sliderItem = style({
  padding: spacing(0, 3),
});

export const prevArrow = style({
  position: "absolute",
  left: spacing(3),
  top: "50%",
  transform: "translateY(-60%)",
  background: vars.color.transparent,
  bottom: 0,

  width: spacing(12),
  height: spacing(12),
  zIndex: 1,
});

export const nextArrow = style({
  position: "absolute",
  right: spacing(3),
  top: "50%",
  transform: "translateY(-60%)",
  background: vars.color.transparent,
  bottom: 0,

  width: spacing(12),
  height: spacing(12),
  zIndex: 1,
});
