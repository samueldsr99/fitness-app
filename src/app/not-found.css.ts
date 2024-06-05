import { spacing } from "@/ui/theme/utils";

import { style } from "@vanilla-extract/css";

export const root = style({
  marginTop: spacing(64),
  display: "grid",
  placeItems: "center",
});

export const goHomeLink = style({
  marginTop: spacing(16),
});
