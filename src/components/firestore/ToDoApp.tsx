import React from "react";
import AddTodo from "./AddTodo";
import { MyTodoList } from "./MyToDoList";
import { UncompletedTodoList } from "./UncompletedToDoList";
import { CompletedTodoList } from "./CompletedToDoList";

export default function ToDoApp() {
  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold mb-4 text-center">To Do App</h1>
      <AddTodo />
      <div className="flex items-stretch justify-evenly content-stretch">
        <MyTodoList />
        <UncompletedTodoList />
        <CompletedTodoList />
      </div>
    </div>
  );
}
