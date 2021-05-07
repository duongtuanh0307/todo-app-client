import React, { FC } from "react";
import * as styles from "./styles.css";

type Props = {
  variant: "primary" | "default" | "disabled" | "danger";
  size: "sm" | "md" | "lg";
};

export const Button: FC<Props> = ({ children, variant, size }) => {
  const { colorVariants, sizeVariants, common } = styles;
  return (
    <button
      className={`${common} ${colorVariants[variant]} ${sizeVariants[size]}`}
    >
      {children}
    </button>
  );
};
