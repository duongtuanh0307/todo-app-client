import React, { FC, ElementType } from "react";
import * as styles from "./styles.css";

type Props = {
  component?: ElementType;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "body1" | "body2" | "body3";
  color?: "primary" | "error" | "light";
  align?: "center" | "left" | "right";
};

export const Typography: FC<Props> = ({
  component = "p",
  children,
  variant = "body1",
  color,
  align = "left",
}) => {
  const CustomizeTag = component;
  const { common, variants, colorVariants, alignVariants } = styles;

  return (
    <CustomizeTag
      className={`${common} ${variants[variant]} ${
        color && colorVariants[color]
      } ${alignVariants[align]}`}
    >
      {children}
    </CustomizeTag>
  );
};
