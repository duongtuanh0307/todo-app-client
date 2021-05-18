import React, { FC, useState, useContext, useEffect } from "react";
import { PageTitle } from "../../components/compound";
import { dashboardWrapper } from "./styles.css";
import { AddMoreTodo } from "./AddMoreButton";
import { AddTodoForm } from "./AddTodoForm";
import { TodoList } from "./TodoList";
import { AuthContext } from "../../../contexts/authContext";
import { addTodo, getTodoList, deleteTodo } from "../../../services/TodoApi";

const Dashboard: FC = () => {
  const [displayAddTodoForm, setDisplayAddTodo] = useState(false);
  const [todoList, setTodoList] = useState<any[]>([]);
  const { authState } = useContext(AuthContext);
  const userId = authState.user.id;

  useEffect(() => {
    getAllTodo(userId);
  }, [userId]);

  const toggleAddTodoForm = () => {
    setDisplayAddTodo(!displayAddTodoForm);
  };

  const handleCancel = () => {
    setDisplayAddTodo(false);
  };

  const handleDeleteTodo = async (todoId: string) => {
    await deleteTodo(todoId);
    setTodoList(todoList.filter((todo) => todo.id !== todoId));
    window.location.reload();
  };

  const handleCreateTodo = async (todoItem: {
    title: string;
    description: string;
    scheduleFor: string;
    category: string;
    priority: string;
  }) => {
    const res = await addTodo({
      content: todoItem.title,
      note: todoItem.description,
      scheduleFor: todoItem.scheduleFor,
      category: todoItem.category,
      priority: todoItem.priority,
      userId: userId,
    });
    const newTodo = {
      id: res.data.id,
      userId: res.data.userId,
      scheduleFor: res.data.scheduleFor.slice(0, 10),
      category: res.data.category.toLowerCase(),
      priority: res.data.priority.toLowerCase(),
      title: res.data.content,
      description: res.data.note,
    };
    setTodoList([...todoList, newTodo]);
    handleCancel();
  };

  const getAllTodo = async (userId: string) => {
    const res = await getTodoList(userId);
    const todos = res.data.map((todo) => ({
      id: todo.id,
      userId: todo.userId,
      scheduleFor: todo.scheduleFor.slice(0, 10),
      category: todo.category.toLowerCase(),
      priority: todo.priority.toLowerCase(),
      title: todo.content,
      description: todo.note,
    }));
    setTodoList(todos);
  };

  return (
    <div className={dashboardWrapper}>
      <PageTitle>TO DO LIST</PageTitle>
      {displayAddTodoForm ? (
        <AddTodoForm
          handleCancel={handleCancel}
          handleCreateTodo={handleCreateTodo}
        />
      ) : (
        <AddMoreTodo toggleAddTodoForm={toggleAddTodoForm} />
      )}
      <TodoList handleDeleteTodo={handleDeleteTodo} items={todoList} />
    </div>
  );
};

export default Dashboard;
