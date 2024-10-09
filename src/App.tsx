import "./App.css";
import { Login } from "./components/authentication/Login";
import { ImageGrid } from "./components/storage/ImageGrid";
import ToDoApp from "./components/firestore/ToDoApp";

function App() {
  return (
    <>
      <Login />
      <ToDoApp />
      <ImageGrid />
    </>
  );
}

export default App;
