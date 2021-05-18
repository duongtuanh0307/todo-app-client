import httpRequest from "./adapter";
import { getToken } from "../utility/cookies";

type TodoItem = {
  content: string;
  note: string;
  scheduleFor: string;
  userId?: string;
  priority: string;
  category: string;
};

type AddTodoResponse = {
  id: string;
  content: string;
  note: string;
  createdAt: string;
  updatedAt: string;
  scheduleFor: string;
  userId: string;
  priority: "high" | "normal" | "low";
  category: "work" | "private";
};

const addTodo = async (todoItem: TodoItem) => {
  const token = getToken();
  const res = await httpRequest<AddTodoResponse>({
    method: "POST",
    url: "/todos/add",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      ...todoItem,
    },
  });
  return res;
};

const deleteTodo = async (todoId: string) => {
  const token = getToken();
  const res = await httpRequest<{}>({
    method: "DELETE",
    url: `/todos/${todoId}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

const updateTodo = async (todoId: string, todoItem: TodoItem) => {
  const token = getToken();
  const res = await httpRequest<AddTodoResponse>({
    method: "PUT",
    url: `/todos/${todoId}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      ...todoItem,
    },
  });
  return res;
};

const getTodoList = async (userId: string) => {
  const token = getToken();
  const res = await httpRequest<AddTodoResponse[]>({
    method: "GET",
    url: `/todos/${userId}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res;
};

export { getTodoList, addTodo, updateTodo, deleteTodo };
