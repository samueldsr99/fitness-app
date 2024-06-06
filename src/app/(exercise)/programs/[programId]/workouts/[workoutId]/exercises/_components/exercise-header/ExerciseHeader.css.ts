import { vars } from "@/ui/theme/index.css";
import { spacing } from "@/ui/theme/utils";

import { style } from "@vanilla-extract/css";

export const root = style({
  paddingBottom: spacing(4),
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const closeButton = style({
  border: "none",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  cursor: "pointer",

  padding: spacing(2),
  borderRadius: vars.border.radius.full,

  transition: "transform 0.2s",
  ":active": {
    transform: "scale(0.9)",
  },
});
