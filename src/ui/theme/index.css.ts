import { borders } from "./borders";
import { colors } from "./colors";
import { fonts } from "./fonts";
import { breakpoints, screens } from "./utils";

import { createTheme, globalStyle } from "@vanilla-extract/css";

const [themeClass, vars] = createTheme({
  color: colors,

  font: fonts,
  border: borders,
  screen: screens,
  breakpoint: breakpoints,
});

globalStyle("h1", {
  ...fonts["3xl"],

  "@media": {
    [screens.tablet]: {
      ...fonts["4xl"],
    },
  },
});

globalStyle("h2", {
  ...fonts["2xl"],
  fontWeight: fonts.semibold,

  "@media": {
    [screens.tablet]: {
      ...fonts["3xl"],
    },
  },
});

globalStyle("h3", {
  ...fonts.xl,
  fontWeight: fonts.medium,

  "@media": {
    [screens.tablet]: {
      ...fonts["2xl"],
    },
  },
});

globalStyle("h4", {
  ...fonts.lg,
  fontWeight: fonts.medium,
});

globalStyle("h5", {
  ...fonts.base,
  fontWeight: fonts.medium,
});

globalStyle("h6", {
  ...fonts.sm,
});

globalStyle("p", {
  ...fonts.base,
});

export { themeClass, vars };
