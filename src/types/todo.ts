export type TodoItem = {
  id: number;
  title: string;
  description: string;
  scheduleFor: string;
  category: "work" | "private";
  priority: "high" | "normal" | "low";
};

export type Option = {
  id: number;
  value: string;
};
