import { useEffect, useState } from "react";
import * as firestore from "../../../lib/firestore";
import ToDoList from "./ToDoList";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export function UncompletedTodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const unsubsribe = firestore.allTodos((todos) => {
      setTodos(todos);
    });
    return () => unsubsribe();
  }, []);

  return <ToDoList title="Uncompleted" todos={todos} />;
}
