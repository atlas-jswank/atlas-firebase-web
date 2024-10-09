import ToDoList from "./ToDoList";

const todos = [
  {
    id: "1",
    text: "Buy apples",
    completed: false,
  },
];
export function UncompletedTodoList() {
  return <ToDoList title="Uncompleted" todos={todos} />;
}
