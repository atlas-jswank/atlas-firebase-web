import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import * as firestore from "../../../lib/firestore";
import { auth } from "../../../firebaseConfig";

export default function AddTodo() {
  const [newTodo, setNewTodo] = useState("");
  const addTodo = async () => {
    try {
      await firestore.create(newTodo, auth.currentUser?.uid ?? "");
      setNewTodo("");
    } catch (error) {
      alert(error.message);
    }
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
