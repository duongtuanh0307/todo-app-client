import { style } from "@vanilla-extract/css";
import { palette } from "../../../../../globalTheme.css";

export const inputArea = style({
  display: "flex",
  overflowY: "auto",
  justifyContent: "space-between",
});

export const editTodoWrapper = style({
  display: "flex",
  flexDirection: "column",
  height: "auto",
  overflowY: "auto",
  padding: 20,
  margin: "0px 10px 20px",
  border: `1px solid ${palette.grayMedium2}`,
  borderRadius: 10,
  justifyContent: "space-between",
  background: "#ffffff",
});

export const itemDetail = style({
  display: "flex",
  flexDirection: "column",
  width: "80%",
});

export const detailInfo = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  marginBottom: 10,
});

export const metaInfo = style({
  padding: "0px 10px",
});

export const actionButton = style({
  margin: "0 5px",
});

export const buttonsGroup = style({
  display: "flex",
  width: "100%",
  justifyContent: "flex-end",
  marginTop: 10,
});

export const switchOptionStyle = style({
  margin: "10px 0px 20px",
});
