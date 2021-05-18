import { style } from "@vanilla-extract/css";
import { palette } from "../../../../globalTheme.css";

export const headerWrapper = style({
  height: 60,
  width: "100%",
  background: palette.whitePrimary,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
});

export const navMenu = style({
  listStyle: "none",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
});

export const navItem = style({
  padding: "0px 10px",
  ":hover": {
    cursor: "pointer",
  },
});

export const navLabel = style({
  selectors: {
    [`${navItem}:hover &`]: {
      color: palette.greenMedium1,
    },
  },
});

export const navLabelActive = style({
  color: palette.greenPrimary,
  fontWeight: 500,
});

export const logout = style({
  padding: 10,
});

export const logoutIcon = style({
  fontSize: 18,
  selectors: {
    [`${logout}:hover &`]: {
      color: palette.greenMedium1,
      cursor: "pointer",
    },
  },
});
