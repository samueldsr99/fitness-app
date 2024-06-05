import { vars } from "@/ui/theme/index.css";
import { spacing } from "@/ui/theme/utils";

import { style } from "@vanilla-extract/css";

export const header = style({
  padding: spacing(3, 0),
  display: "flex",
  alignItems: "center",
});

export const previewImage = style({
  width: "100%",
  height: "auto",
  borderRadius: vars.border.radius["2xl"],
});

export const description = style({
  marginTop: spacing(2),
  color: vars.color.base[200],
});

export const workoutsSection = style({
  marginTop: spacing(6),
});

export const workoutsSectionHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const workoutsList = style({
  marginTop: spacing(2),
  display: "flex",
  flexDirection: "column",
  gap: spacing(2),
});
