import { style, styleVariants } from "@vanilla-extract/css";
import { palette } from "../../../../globalTheme.css";

export const label = style({
  padding: "2px 6px",
  borderRadius: 10,
  fontSize: "0.625rem",
  border: "1px solid",
  width: "fit-content",
  color: palette.lightPrimary,
});

export const categoryVariant = styleVariants({
  work: {
    background: palette.blueMedium1,
    borderColor: palette.blueMedium1,
  },
  private: {
    background: palette.blueMedium2,
    borderColor: palette.blueMedium2,
  },
});

export const priorityVariant = styleVariants({
  high: {
    background: palette.orangeMedium1,
    borderColor: palette.orangeMedium1,
  },
  normal: {
    background: palette.yellowMedium1,
    borderColor: palette.yellowMedium1,
  },
  low: {
    background: palette.greenMedium2,
    borderColor: palette.greenMedium2,
  },
});
