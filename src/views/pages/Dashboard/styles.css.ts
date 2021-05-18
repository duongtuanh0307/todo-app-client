import { style } from "@vanilla-extract/css";
import { palette } from "../../../globalTheme.css";

export const dashboardWrapper = style({
  backgroundColor: palette.grayMedium5,
  paddingTop: 20,
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  overflowY: "scroll",
});
