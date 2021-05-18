import React, { FC } from "react";
import { iconButton, sizeVariant } from "./styles.css";

type Props = {
  size: "sm" | "md";
  iconStr: string;
  buttonCustomeStyle?: string;
  iconCustomeStyle?: string;
  additionText?: string;
  onClick: () => void;
};

export const IconButton: FC<Props> = ({
  size,
  iconStr,
  buttonCustomeStyle,
  iconCustomeStyle,
  additionText,
  onClick,
}) => {
  return (
    <button
      className={`${iconButton} ${sizeVariant[size]} ${buttonCustomeStyle}`}
      onClick={onClick}
    >
      <i className={`${iconStr} ${iconCustomeStyle}`}></i>
      {additionText}
    </button>
  );
};
