import { spacing } from "@/ui/theme/utils";

import { style } from "@vanilla-extract/css";

export const popularPrograms = style({
  marginTop: spacing(5),
});

export const popularProgramsSlides = style({
  marginTop: spacing(3),
});

export const workoutsOfTheDay = style({
  marginTop: spacing(3),
});

export const workoutsOfTheDayList = style({
  marginTop: spacing(3),
  display: "flex",
  flexDirection: "column",
  gap: spacing(3),
});
