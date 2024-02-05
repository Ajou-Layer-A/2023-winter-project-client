export type FontSizeType = keyof typeof fontSize; //display | title1 ...
export type LineHeightType = keyof typeof lineHeight; //display | title1 ...
export type ColorType = keyof typeof color; //display | title1 ...
export type SpaceType = keyof typeof space; //xTiny | tiny ....

const fontSize = {
  display: "2.5rem", // 40px
  title1: "2rem", // 32px
  title2: "1.5rem", // 24px
  title3: "1.3125rem", // 21px
  body1: "1.125rem", // 18px
  body2: "1rem", // 16px
  body3: "0.875rem", // 14px
  body4: "0.75rem", // 12px
  body5: "0.625rem", // 10px
};
const lineHeight = {
  display: "2.5rem",
  title1: "2rem",
  title2: "1.5rem",
  title3: "1.3125rem",
  body1: "1.125rem",
  body2: "1rem",
  body3: "0.875rem",
  body4: "0.75rem",
  body5: "0.625rem",
};

const color = {
  bg100: "#000000",
  bg90: "#101114",
  bg80: "#17181C",
  bg70: "#1E1F24",
  bg60: "#25262E",
  bg50: "#2C2D36",
  bg40: "#727274",
  bg30: "#98989A",
  bg20: "#BEBEC1",
  bg10: "#DFE0E1",
  bg0: "#FFFFFF",
  systemRed: "#FF3369",
  systemOrange: "#FF8833",
  systemGreen: "#00A533",
  systemBlue: "#007FFF",
  brandPurple30: "#7402FF",
  brandPurple20: "#8F33FF",
  brandPurple10: "#AB66FF",
  brandYellow30: "#BFFC00",
  brandYellow20: "#CEFF36",
  brandYellow10: "#DAFF66",
  transparent: "transparent",
};

const space = {
  xTiny: "4px",
  tiny: "8px",
  xSmall: "12px",
  small: "16px",
  sMedium: "20px",
  base: "24px",
  medium: "32px",
  mLarge: "40px",
  large: "48px",
  xLarge: "64px",
};

const theme = {
  fontSize,
  lineHeight,
  space,
  color,
};

export default theme;
