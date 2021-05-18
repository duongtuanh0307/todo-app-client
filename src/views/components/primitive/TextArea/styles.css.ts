import { style, styleVariants } from "@vanilla-extract/css";
import { palette } from "../../../../globalTheme.css";

export const common = style({
  padding: "10px 12px",
  fontSize: "0.875rem",
  minWidth: 240,
  borderRadius: 6,
  border: `1px solid ${palette.grayMedium1}`,
  "::placeholder": {
    color: palette.grayMedium2,
  },
  ":hover": {
    outline: "none",
    borderColor: palette.greenMedium1,
  },
  ":focus": {
    outline: "none",
    borderColor: palette.greenPrimary,
  },
});

export const statusVariant = styleVariants({
  disabled: {
    background: palette.grayMedium4,
    cursor: "not-allowed",
    borderColor: palette.grayMedium2,
    ":hover": {
      borderColor: palette.grayMedium2,
    },
    ":focus": {
      borderColor: palette.grayMedium2,
    },
  },
  error: {
    borderColor: palette.redPrimary,
    color: palette.redPrimary,
    ":hover": {
      borderColor: palette.redMedium1,
    },
    ":focus": {
      borderColor: palette.redPrimary,
    },
  },
});
