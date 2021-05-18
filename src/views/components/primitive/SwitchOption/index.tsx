import React, { FC } from "react";
import { Option } from "../../../../types/todo";
import { switchOptionWrapper, optionStyle, activeOption } from "./styles.css";

type Props = {
  options: Option[];
  handleChangeOption: (nextValue: string) => void;
  customeStyle?: string;
  currentOption: string;
};

export const SwitchOption: FC<Props> = ({
  options,
  handleChangeOption,
  customeStyle,
  currentOption,
}) => {
  const _currentOption = currentOption as
    | "work"
    | "private"
    | "low"
    | "normal"
    | "high";
  return (
    <div className={`${switchOptionWrapper} ${customeStyle}`}>
      {options.map((option) => (
        <div
          key={option.id}
          className={`${optionStyle} ${
            option.value === currentOption && activeOption[_currentOption]
          }`}
          onClick={() => handleChangeOption(option.value)}
        >
          {option.value.toUpperCase()}
        </div>
      ))}
    </div>
  );
};
