import { spacing } from "@/ui/theme/utils";

import { style } from "@vanilla-extract/css";

export const popularPrograms = style({
  marginTop: spacing(5),
});

export const popularProgramsSlides = style({
  marginTop: spacing(3),
  overflowX: "auto",
  display: "flex",
  gap: 20,
});
