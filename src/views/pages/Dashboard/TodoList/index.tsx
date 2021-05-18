import React, { FC } from "react";
import { TodoItem as TodoItemType } from "../../../../types/todo";
import { Typography } from "../../../components/primitive";
import { TodoItem } from "../TodoItem";
import { todoListWrapper } from "./styles.css";

type Props = {
  items: TodoItemType[];
  handleDeleteTodo: (todoId: string) => void;
};

export const TodoList: FC<Props> = ({ items, handleDeleteTodo }) => {
  return (
    <div className={todoListWrapper}>
      {items ? (
        items.map((item) => {
          return (
            <TodoItem
              key={item.id}
              todoItem={item}
              handleDeleteTodo={handleDeleteTodo}
            />
          );
        })
      ) : (
        <Typography align='center' variant='h1'>
          NO ITEM TO DISPLAY
        </Typography>
      )}
    </div>
  );
};
