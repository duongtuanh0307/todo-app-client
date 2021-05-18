import { style } from "@vanilla-extract/css";
import { palette } from "../../../../../globalTheme.css";

export const todoItemWrapper = style({
  display: "flex",
  minHeight: 120,
  height: "fit-content",
  padding: 20,
  margin: "0px 10px 20px",
  border: `1px solid ${palette.grayMedium2}`,
  borderRadius: 10,
  alignItems: "center",
  justifyContent: "space-between",
  background: "#ffffff",
});

export const itemDetail = style({
  width: "80%",
});

export const metaInfo = style({
  display: "flex",
  flexDirection: "column",
  paddingLeft: 10,
});

export const actionButtons = style({
  display: "flex",
  justifyContent: "flex-end",
});

export const detailInfo = style({
  display: "flex",
  alignItems: "flex-start",
  padding: 4,
});

export const deleteButton = style({
  margin: "0px 4px",
  color: palette.redPrimary,
  ":hover": {
    color: palette.redMedium2,
  },
});

export const deleteIcon = style({
  color: palette.redPrimary,
  fontSize: 18,
  selectors: {
    [`${deleteButton}:hover &`]: {
      color: palette.redMedium2,
    },
  },
});

export const editButton = style({
  margin: "0px 4px",
  color: palette.greenPrimary,
  ":hover": {
    color: palette.greenMedium1,
  },
});

export const editIcon = style({
  color: palette.greenPrimary,
  fontSize: 16,
  selectors: {
    [`${editButton}:hover &`]: {
      color: palette.greenMedium1,
    },
  },
});

export const descriptionArea = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
});

export const toggleExpandButton = style({
  background: "transparent",
  fontSize: "0.75rem",
  color: palette.darkGreen,
  width: "fit-content",
  padding: "0px 4px",
  borderRadius: 4,
  border: `1px solid ${palette.darkGreen}`,
  ":hover": {
    color: palette.greenMedium1,
    cursor: "pointer",
    borderColor: palette.greenMedium1,
  },
});

export const viewAllButton = style({
  marginLeft: 4,
});

export const customeLabel = style({
  margin: "10px 0px",
});

export const showLessButton = style({
  marginTop: 4,
});
