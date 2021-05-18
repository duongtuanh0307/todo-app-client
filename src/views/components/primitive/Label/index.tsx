import React, { FC } from "react";
import { label, categoryVariant, priorityVariant } from "./styles.css";

type Props = {
  customeClass?: string;
  category?: "work" | "private";
  priority?: "high" | "low" | "normal";
};

export const Label: FC<Props> = ({ customeClass, category, priority }) => {
  if (category)
    return (
      <div className={`${customeClass} ${label} ${categoryVariant[category]}`}>
        {category.toUpperCase()}
      </div>
    );
  if (priority)
    return (
      <div
        className={`${customeClass} ${label} ${
          category && categoryVariant[category]
        } ${priorityVariant[priority]}`}
      >
        {priority.toUpperCase()}
      </div>
    );
  return null;
};
