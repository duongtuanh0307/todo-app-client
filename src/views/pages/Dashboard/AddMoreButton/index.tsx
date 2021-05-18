import React, { FC } from "react";
import { IconButton } from "../../../components/primitive";
import { addMoreIcon, addMoreButton, addButtonWrapper } from "./styles.css";

type Props = {
  toggleAddTodoForm: () => void;
};

export const AddMoreTodo: FC<Props> = ({ toggleAddTodoForm }) => {
  return (
    <div className={addButtonWrapper}>
      <IconButton
        buttonCustomeStyle={addMoreButton}
        iconCustomeStyle={addMoreIcon}
        iconStr='fas fa-plus'
        size='md'
        additionText='Add Todo'
        onClick={toggleAddTodoForm}
      />
    </div>
  );
};
