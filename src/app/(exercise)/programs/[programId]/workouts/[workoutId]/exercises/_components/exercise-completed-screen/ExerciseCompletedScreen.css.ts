import { spacing } from "@/ui/theme/utils";

import { style } from "@vanilla-extract/css";

export const root = style({
  marginTop: spacing(70),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: spacing(4),
});
