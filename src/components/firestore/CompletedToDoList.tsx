import ToDoList from "./ToDoList";

const todos = [
  {
    id: "1",
    text: "Buy apples",
    completed: false,
  },
];

export function CompletedTodoList() {
  return <ToDoList title="Completed Todos" todos={todos} />;
}
