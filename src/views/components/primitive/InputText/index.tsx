import React, { FC } from "react";
import * as styles from "./styles.css";

type Props = {
  placeHolder: string;
  disabled?: boolean;
  error?: boolean;
};

export const InputText: FC<Props> = ({ placeHolder, disabled, error }) => {
  const { common, statusVariant } = styles;
  return (
    <input
      disabled={disabled}
      className={`${common} ${disabled && statusVariant["disabled"]} ${
        error && statusVariant["error"]
      }`}
      type="text"
      placeholder={placeHolder}
    />
  );
};
