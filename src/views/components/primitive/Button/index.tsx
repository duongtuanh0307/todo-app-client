import React, { FC } from "react";
import * as styles from "./styles.css";

type Props = {
  onClick: () => void;
  variant: "primary" | "default" | "disabled" | "danger";
  size: "sm" | "md" | "lg";
  customeClass?: string;
};

export const Button: FC<Props> = ({
  onClick,
  children,
  variant,
  size,
  customeClass,
}) => {
  const { colorVariants, sizeVariants, common } = styles;
  return (
    <button
      onClick={onClick}
      className={`${common} ${colorVariants[variant]} ${sizeVariants[size]} ${customeClass}`}
    >
      {children}
    </button>
  );
};
