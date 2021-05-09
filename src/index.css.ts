import { globalStyle } from "@vanilla-extract/css";
import { palette } from "./globalTheme.css";

globalStyle("body", {
  margin: 0,
});

globalStyle("*", {
  boxSizing: "border-box",
  MozBoxSizing: "border-box",
  WebkitBoxSizing: "border-box",
  fontFamily: `'Roboto', sans-serif`,
  color: palette.darkPrimary,
});
