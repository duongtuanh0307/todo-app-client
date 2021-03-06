import React, { FC, FormEvent } from "react";
import * as styles from "./styles.css";

type Props = {
  placeHolder?: string;
  disabled?: boolean;
  error?: boolean;
  customeClass?: string;
  value?: string;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
};

export const InputText: FC<Props> = ({
  placeHolder,
  disabled,
  error,
  customeClass,
  value,
  onChange,
}) => {
  const { common, statusVariant } = styles;
  return (
    <input
      disabled={disabled}
      className={`${common} ${disabled && statusVariant["disabled"]} ${
        error && statusVariant["error"]
      } ${customeClass}
      `}
      type='text'
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
    />
  );
};
