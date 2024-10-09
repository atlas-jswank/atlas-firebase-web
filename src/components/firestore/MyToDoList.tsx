import ToDoList from "./ToDoList";

const todos = [
  {
    id: "1",
    text: "Buy apples",
    completed: false,
  },
];

export function MyTodoList() {
  return <ToDoList title="Created By Me" todos={todos} />;
}
