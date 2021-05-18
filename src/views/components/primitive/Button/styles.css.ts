import { style, styleVariants } from "@vanilla-extract/css";
import { palette } from "../../../../globalTheme.css";

export const common = style({
  border: "none",
  fontWeight: 500,
  ":hover": {
    cursor: "pointer",
  },
  outline: "none",
});

export const colorVariants = styleVariants({
  primary: {
    background: palette.greenPrimary,
    color: palette.lightPrimary,
    ":hover": {
      background: palette.greenMedium1,
    },
    ":focus": {
      background: palette.darkGreen,
    },
  },
  default: {
    background: palette.lightPrimary,
    border: `1px solid ${palette.darkPrimary}`,
    ":hover": {
      background: palette.grayMedium4,
    },
    ":focus": {
      background: palette.grayMedium3,
    },
  },
  disabled: {
    background: palette.grayMedium1,
    color: palette.lightPrimary,
    ":hover": {
      cursor: "not-allowed",
    },
  },
  danger: {
    background: palette.redPrimary,
    color: palette.lightPrimary,
    ":hover": {
      background: palette.redMedium1,
    },
    ":focus": {
      background: palette.darkRed,
    },
  },
});

export const sizeVariants = styleVariants({
  sm: {
    height: 24,
    padding: "2px 8px",
    borderRadius: 4,
  },
  md: {
    height: 32,
    padding: "4px 12px",
    borderRadius: 6,
  },
  lg: {
    height: 40,
    padding: "4px 12px",
    borderRadius: 6,
  },
});
