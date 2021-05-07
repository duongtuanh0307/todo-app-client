import { style } from "@vanilla-extract/css";
import { palette } from "../../../../globalTheme.css";

export const radioButton = style({
  display: "flex",
  alignItems: "center",
});

export const buttonLabel = style({
  paddingLeft: 4,
});

export const radioIcon = style({
  appearance: "none",
  position: "relative",
  height: 24,
  width: 24,
  cursor: "pointer",
  borderRadius: "50%",
  border: `1px solid ${palette.grayMedium1}`,
  selectors: {
    "&::before": {
      position: "absolute",
      content: '""',
    },
    "&::after": {
      position: "absolute",
      content: '""',
    },
    "&:checked::before": {
      position: "absolute",
      top: 6,
      left: 6,
      width: 10,
      height: 10,
      background: palette.lightPrimary,
      borderRadius: "50%",
    },
    [`${radioButton}:hover &`]: {
      borderColor: palette.greenPrimary,
    },
  },
  ":checked": {
    background: palette.greenPrimary,
    border: `1px solid ${palette.greenPrimary}`,
  },
});
