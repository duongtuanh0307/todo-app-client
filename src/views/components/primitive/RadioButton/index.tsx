import React, { FC } from "react";
import { radioIcon, radioButton, buttonLabel } from "./styles.css";

type Props = {
  name: string;
  value: string;
  label: string;
};

export const RadioButton: FC<Props> = ({ name, value, label }) => {
  return (
    <label className={radioButton}>
      <input
        type="radio"
        name={name}
        //onChange={onChange}
        className={radioIcon}
        value={value}
      />
      <span className={buttonLabel}>{label}</span>
    </label>
  );
};
