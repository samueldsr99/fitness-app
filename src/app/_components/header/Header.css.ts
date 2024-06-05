import { spacing } from "@/ui/theme/utils";

import { style } from "@vanilla-extract/css";

export const link = style({
  padding: spacing(4, 0),

  display: "flex",
  alignItems: "center",
  gap: spacing(2),
});
