import { style, styleVariants } from "@vanilla-extract/css";

export const sizeVariant = styleVariants({
  sm: {
    height: 32,
    width: 32,
  },
  md: {
    height: 40,
    width: 40,
  },
});

export const iconButton = style({
  borderRadius: 4,
  background: "none",
  padding: 0,
  border: "1px solid",
  ":hover": {
    cursor: "pointer",
  },
  outline: "none",
});
