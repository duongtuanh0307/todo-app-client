import { style } from "@vanilla-extract/css";
import { palette } from "../../../globalTheme.css";

export const settingFieldWrapper = style({
  border: `1px solid ${palette.darkPrimary}`,
  borderRadius: 8,
  padding: 20,
  margin: "20px 10px",
  background: palette.lightPrimary,
});

export const settingPageWrapper = style({
  padding: 30,
  height: "100vh",
  overflowY: "scroll",
  background: palette.grayMedium5,
});
