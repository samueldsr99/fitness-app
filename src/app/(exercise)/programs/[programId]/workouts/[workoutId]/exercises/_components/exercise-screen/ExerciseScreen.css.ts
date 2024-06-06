import { vars } from "@/ui/theme/index.css";
import { spacing } from "@/ui/theme/utils";

import { style } from "@vanilla-extract/css";

export const root = style({});

export const title = style({
  marginTop: spacing(20),
  textAlign: "center",
});

export const subtitle = style({
  marginTop: spacing(2),
  ...vars.font["xl"],
  textAlign: "center",
});

export const video = style({
  width: "100%",
  height: "auto",
  borderRadius: vars.border.radius.lg,
});

export const footer = style({
  position: "absolute",
  bottom: 20,
  left: spacing(4),
  right: spacing(4),

  display: "flex",
  justifyContent: "center",
});
