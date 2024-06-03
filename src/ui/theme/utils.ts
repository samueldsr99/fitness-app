const SPACING_UNIT = 4;

export const spacing = (...args: number[]): string => {
  switch (args.length) {
    case 1:
      return `${args[0] * SPACING_UNIT}px`;
    case 2:
      return `${args[0] * SPACING_UNIT}px ${args[1] * SPACING_UNIT}px`;
    case 3:
      return `${args[0] * SPACING_UNIT}px ${args[1] * SPACING_UNIT}px ${args[2] * SPACING_UNIT}px`;
    case 4:
      return `${args[0] * SPACING_UNIT}px ${args[1] * SPACING_UNIT}px ${args[2] * SPACING_UNIT}px ${args[3] * SPACING_UNIT}px`;
    default:
      return "0";
  }
};

export const breakpoints = {
  mobile: "430px",
  tablet: "768px",
  desktop: "1280px",
  desktopLg: "1440px",
  desktopXl: "1920px",
} as const;

export const screens = {
  tablet: `screen and (min-width: ${breakpoints.tablet}px)`,
  desktop: `screen and (min-width: ${breakpoints.desktop}px)`,
} as const;

export const gridColumns = (columns: number): string => {
  return `repeat(${columns}, minmax(0, 1fr))`;
};
