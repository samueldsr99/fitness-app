import { spacing } from "@/ui/theme/utils";

import { style } from "@vanilla-extract/css";

export const content = style({
  paddingBottom: spacing(24),
});

export const footer = style({
  position: "fixed",
  margin: "0 auto",
  maxWidth: 400,
  bottom: spacing(6),
  left: spacing(5),
  right: spacing(5),
  zIndex: 999,
});
