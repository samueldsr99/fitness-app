import { spacing } from "@/ui/theme/utils";

import { style } from "@vanilla-extract/css";

export const programs = style({
  marginTop: spacing(8),

  display: "flex",
  flexDirection: "column",
  gap: spacing(8),
});
