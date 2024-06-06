import { spacing } from "@/ui/theme/utils";

import { style } from "@vanilla-extract/css";

export const paragraph = style({
  marginTop: spacing(6),
});

export const link = style({
  padding: spacing(0, 1),
  textDecoration: "underline",
});
