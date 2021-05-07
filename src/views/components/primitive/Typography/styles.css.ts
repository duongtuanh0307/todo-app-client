import { style, styleVariants } from "@vanilla-extract/css";
import { palette } from "../../../../globalTheme.css";

export const common = style({});

export const variants = styleVariants({
  h1: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    lineHeight: "2.25rem",
  },
  h2: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    lineHeight: "1.875rem",
  },
  h3: {
    fontSize: "1rem",
    fontWeight: "bold",
    lineHeight: "1.5rem",
  },
  h4: {
    fontSize: "0.875rem",
    fontWeight: "bold",
    lineHeight: "1.25rem",
  },
  h5: {
    fontSize: "1rem",
    lineHeight: "1.5rem",
  },
  body1: {
    fontSize: "1rem",
    lineHeight: "1.5rem",
  },
  body2: {
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
  },
  body3: {
    fontSize: "0.75rem",
    lineHeight: "1rem",
  },
});

export const colorVariants = styleVariants({
  primary: {
    color: palette.greenPrimary,
  },
  error: {
    color: palette.redPrimary,
  },
});

export const alignVariants = styleVariants({
  center: {
    textAlign: "center",
  },
  left: {
    textAlign: "left",
  },
  right: {
    textAlign: "right",
  },
});
