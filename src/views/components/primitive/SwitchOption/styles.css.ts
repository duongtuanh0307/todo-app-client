import { style, styleVariants } from "@vanilla-extract/css";
import { palette } from "../../../../globalTheme.css";

export const switchOptionWrapper = style({
  display: "flex",
  fontSize: "0.625rem",
  border: "1px solid",
  borderRadius: 8,
  overflow: "hidden",
  width: "fit-content",
});

export const optionStyle = style({
  padding: "4px 8px",
  ":hover": {
    cursor: "pointer",
  },
  selectors: {
    "&:not(:last-of-type)": {
      borderRight: `1px solid ${palette.darkPrimary}`,
    },
  },
});

export const activeOption = styleVariants({
  private: {
    background: palette.blueMedium2,
    color: palette.lightPrimary,
  },
  work: {
    background: palette.blueMedium1,
    color: palette.lightPrimary,
  },
  low: {
    background: palette.greenMedium2,
    color: palette.lightPrimary,
  },
  normal: {
    background: palette.yellowMedium1,
    color: palette.lightPrimary,
  },
  high: {
    background: palette.orangeMedium1,
    color: palette.lightPrimary,
  },
});
