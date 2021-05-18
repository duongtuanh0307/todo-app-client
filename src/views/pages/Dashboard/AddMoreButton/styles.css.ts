import { style } from "@vanilla-extract/css";
import { palette } from "../../../../globalTheme.css";

export const addMoreButton = style({
  width: "fit-content",
  padding: "0px 10px",
  borderColor: palette.darkGreen,
  color: palette.darkGreen,
  fontWeight: "bold",
  background: palette.lightPrimary,
  display: "flex",
  alignItems: "center",
});

export const addMoreIcon = style({
  color: palette.darkGreen,
  paddingRight: 6,
  background: palette.lightPrimary,
  fontSize: 16,
});

export const addButtonWrapper = style({
  display: "flex",
  justifyContent: "flex-end",
  width: "100%",
  padding: "0px 40px",
});
