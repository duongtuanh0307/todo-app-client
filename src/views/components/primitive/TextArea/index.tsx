import React, { FC, FormEvent } from "react";
import * as styles from "./styles.css";

type Props = {
  placeHolder?: string;
  disabled?: boolean;
  error?: boolean;
  customeClass?: string;
  rows: number;
  value: string;
  onChange: (e: FormEvent<HTMLTextAreaElement>) => void;
};

export const TextArea: FC<Props> = ({
  placeHolder,
  disabled,
  error,
  customeClass,
  rows,
  onChange,
  value,
}) => {
  const { common, statusVariant } = styles;
  return (
    <textarea
      disabled={disabled}
      className={`${common} ${disabled && statusVariant["disabled"]} ${
        error && statusVariant["error"]
      } ${customeClass}
      `}
      placeholder={placeHolder}
      rows={rows}
      onChange={onChange}
      value={value}
    />
  );
};
