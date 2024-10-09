import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { list } from "firebase/storage";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
  createdBy: string;
};

const todos = collection(db, "todos");

const todosQuery = query(todos, where("completed", "==", false));
const completedTodosQuery = query(todos, where("completed", "==", true));
const myToDosQuery = (userId: string) =>
  query(todos, where("createdBy", "==", userId));

export function create(todo: string, userId: string) {
  return addDoc(todos, {
    text: todo,
    completed: false,
    createdBy: userId,
  });
}

export async function updateCompleted(id: string, completed: boolean) {
  await updateDoc(doc(todos, id), {
    completed,
  });
}

export async function deleteTodo(id: string) {
  await deleteDoc(doc(todos, id));
}

export function allTodos(cb: (todos: Todo[]) => void) {
  return onSnapshot(todosQuery, (snapshot) => {
    const todos: Todo[] = [];
    snapshot.forEach((doc) => {
      todos.push({ ...doc.data(), id: doc.id });
    });
    cb(todos);
  });
}

export function myTodos(userId: string, cb: (todos: Todo[]) => void) {
  return onSnapshot(myToDosQuery(userId), (snapshot) => {
    const todos: Todo[] = [];
    snapshot.forEach((doc) => {
      todos.push({ ...doc.data(), id: doc.id });
    });
    cb(todos);
  });
}

export function completedTodos(cb: (todos: Todo[]) => void) {
  return onSnapshot(completedTodosQuery, (snapshot) => {
    const todos: Todo[] = [];
    snapshot.forEach((doc) => {
      todos.push({ ...doc.data(), id: doc.id });
    });
    cb(todos);
  });
}

export function getAllTodos() {
  return getDocs(todosQuery).then((snapshot) => {
    const todos: Todo[] = [];
    snapshot.forEach((doc) => {
      todos.push({ ...doc.data(), id: doc.id });
    });
    return todos;
  });
}
