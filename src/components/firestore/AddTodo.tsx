import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";

export default function AddTodo() {
  const [newTodo, setNewTodo] = useState("");

  const addTodo = async () => {
    alert("Add todo " + newTodo);
    setNewTodo("");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-card rounded-lg shadow-lg">
      <div className="flex mb-4">
        <Input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
          className="mr-2"
        />
        <Button onClick={addTodo}>Add</Button>
      </div>
    </div>
  );
}
