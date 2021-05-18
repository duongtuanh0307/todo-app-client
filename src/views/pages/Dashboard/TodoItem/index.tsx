import React, { FC, useState, useContext } from "react";
import { ViewMode } from "./ViewMode";
import { EditMode } from "./EditMode";
import { updateTodo } from "../../../../services/TodoApi";
import { AuthContext } from "../../../../contexts/authContext";
import { TodoItem as TodoItemType } from "../../../../types/todo";

type Props = {
  todoItem: TodoItemType;
  handleDeleteTodo: (todoId: string) => void;
};

export const TodoItem: FC<Props> = ({
  todoItem: currentTodoItem,
  handleDeleteTodo,
}) => {
  const [isEdit, setEdit] = useState(false);
  const todoId = currentTodoItem.id.toString();
  const [todoItem, setTodoItem] = useState<TodoItemType>(currentTodoItem);
  const { authState } = useContext(AuthContext);
  const userId = authState.user.id;

  const handleSaveChange = async (updatedItem: {
    title: string;
    description: string;
    scheduleFor: string;
    category: string;
    priority: string;
  }) => {
    const res = await updateTodo(todoId, {
      content: updatedItem.title,
      note: updatedItem.description,
      scheduleFor: updatedItem.scheduleFor,
      category: updatedItem.category,
      priority: updatedItem.priority,
      userId,
    });
    const updatedTodoItem: TodoItemType = {
      id: parseInt(res.data.id),
      scheduleFor: res.data.scheduleFor.slice(0, 10),
      category: res.data.category.toLowerCase() as "work" | "private",
      priority: res.data.priority.toLowerCase() as "low" | "normal" | "high",
      title: res.data.content,
      description: res.data.note,
    };
    setTodoItem(updatedTodoItem);
    handleCancel();
  };
  const handleCancel = () => {
    setEdit(false);
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const handleDelete = () => {
    handleDeleteTodo(todoId);
  };

  return isEdit ? (
    <EditMode
      handleSaveChange={handleSaveChange}
      handleCancel={handleCancel}
      {...todoItem}
    />
  ) : (
    <ViewMode
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      {...todoItem}
    />
  );
};
