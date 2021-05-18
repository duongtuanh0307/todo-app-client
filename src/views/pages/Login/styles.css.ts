import { style } from "@vanilla-extract/css";
import { palette } from "../../../globalTheme.css";

export const loginWrapper = style({
  padding: 40,
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: palette.grayMedium4,
});

export const submitButton = style({
  margin: "4px 0 4px 4px",
});

export const actionsWrapper = style({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: 16,
});

export const loginForm = style({
  width: 500,
  display: "flex",
  flexDirection: "column",
  padding: 20,
  border: `1px solid ${palette.greenPrimary}`,
  borderRadius: 6,
  background: palette.lightPrimary,
  margin: "20px 0px 40px 0px",
});

export const disabledForm = style({
  borderColor: palette.grayMedium3,
});
