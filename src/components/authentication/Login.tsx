import { FormEvent } from "react";
import { auth } from "../../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useCurrentUser } from "./useCurrentUser";

interface Elements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

interface Form extends HTMLFormElement {
  readonly elements: Elements;
}

export function Login() {
  const user = useCurrentUser();
  async function handleSubmit(e: FormEvent<Form>) {
    e.preventDefault();

    const target = e.currentTarget.elements;
    const email = target.email.value;
    const password = target.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch {
      alert("Invalid email or password");
    }
  }

  function handleSignOut() {
    auth.signOut();
  }

  if (user) {
    return (
      <div className="flex flex-col gap-4">
        <div>Logged in as {user.email}</div>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    );
  }

  return (
    <div className="max-w-96 mx-auto">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold">Login</h2>
        <input
          name="email"
          className="input"
          type="email"
          placeholder="Email"
        />
        <input
          name="password"
          className="input"
          type="password"
          placeholder="Password"
        />
        <button className="bg-gray-300 p-2 rounded-md">Login</button>
      </form>
    </div>
  );
}
