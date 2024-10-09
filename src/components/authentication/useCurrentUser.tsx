import { User } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { useEffect, useState } from "react";

export function useCurrentUser() {
  const [user, setUser] = useState<User | null>(auth.currentUser);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);
  return user;
}
