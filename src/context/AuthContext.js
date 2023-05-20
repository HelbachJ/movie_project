import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import { auth } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContextProvider value={{ signUp, signIn, logOut, user }}>
      {children}
    </AuthContextProvider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
