import { useEffect, useState } from "react";
import * as firestore from "../../../lib/firestore";
import ToDoList from "./ToDoList";
import { useCurrentUser } from "../authentication/useCurrentUser";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export function MyTodoList() {
  const user = useCurrentUser();
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    if (user) {
      const userId = user.uid;
      const unsubsribe = firestore.myTodos(userId, (todos) => {
        setTodos(todos);
      });

      return () => unsubsribe();
    } else {
      setTodos([]);
    }
  }, [user]);

  return <ToDoList title="Created By Me" todos={todos} />;
}
