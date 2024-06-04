import { vars } from "@/ui/theme/index.css";
import { spacing } from "@/ui/theme/utils";

import { style } from "@vanilla-extract/css";

export const root = style({});

export const content = style({
  padding: spacing(4, 6),
});

export const title = style({
  color: vars.color.primary.foreground,
  textAlign: "center",
  ...vars.font["xl"],
  fontWeight: vars.font.semibold,
});

export const subtitle = style({
  marginTop: spacing(6),
  color: vars.color.primary.foreground,
  textAlign: "center",
  ...vars.font["lg"],
  fontWeight: vars.font.light,
});

export const bgImage = style({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "80%",
  objectFit: "cover",
  objectPosition: "center",
});

export const getStartedButtonLink = style({});

export const bottomSection = style({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: 440,

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: spacing(6, 4),
  paddingTop: spacing(38),

  backgroundColor: vars.color.white,

  background: `linear-gradient(180deg, ${vars.color.transparent} 0%, rgba(255, 255, 255, 0.8) 25%, ${vars.color.white} 37%)`,
});
