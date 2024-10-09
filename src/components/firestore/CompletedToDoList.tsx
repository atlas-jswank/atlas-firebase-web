import { useEffect, useState } from "react";
import * as firestore from "../../../lib/firestore";
import ToDoList from "./ToDoList";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export function CompletedTodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const unsubsribe = firestore.completedTodos((todos) => {
      setTodos(todos);
    });

    return () => unsubsribe();
  }, []);

  return <ToDoList title="Completed Todos" todos={todos} />;
}
