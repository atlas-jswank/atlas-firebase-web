import { FormEvent } from "react";

interface Elements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

interface Form extends HTMLFormElement {
  readonly elements: Elements;
}

export function Login() {
  const user = undefined;
  async function handleSubmit(e: FormEvent<Form>) {
    e.preventDefault();

    const target = e.currentTarget.elements;
    const email = target.email.value;
    const password = target.password.value;

    alert(`Logged in as ${email} and password is ${password}`);
  }

  if (user) {
    return (
      <div className="flex flex-col gap-4">
        <div>Logged in as {user.email}</div>
        <button onClick={() => alert("Sign Out")}>Sign Out</button>
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
