import { style } from "@vanilla-extract/css";
import { palette } from "../../../../globalTheme.css";

export const pageTitle = style({
  background: palette.greenPrimary,
  borderRadius: 4,
  width: "fit-content",
  height: "fit-content",
  padding: "4px 10px",
  margin: "0px auto",
  color: palette.lightPrimary,
});
