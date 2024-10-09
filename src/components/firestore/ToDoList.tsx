import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import * as firestore from "../../../lib/firestore";

type ToDo = {
  id: string;
  text: string;
  completed: boolean;
};

export default function ToDoList({
  title,
  todos,
}: {
  title: string;
  todos: ToDo[];
}) {
  function toggleTodo(id: string, completed: boolean) {
    firestore.updateCompleted(id, completed);
  }

  function removeTodo(id: string) {
    firestore.deleteTodo(id);
  }

  return (
    <div className="w-full mt-8 p-6 bg-card rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">{title}</h1>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-muted p-3 rounded-md"
          >
            <div className="flex items-center">
              <Checkbox
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onCheckedChange={() => toggleTodo(todo.id, !todo.completed)}
                className="mr-2"
              />
              <label
                htmlFor={`todo-${todo.id}`}
                className={`${
                  todo.completed ? "line-through text-muted-foreground" : ""
                }`}
              >
                {todo.text}
              </label>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => removeTodo(todo.id)}
              aria-label="Remove todo"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
