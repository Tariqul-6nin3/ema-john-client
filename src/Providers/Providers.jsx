import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const myContext = createContext(null);
const Providers = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logedOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsuscribe;
    };
  }, []);
  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    signIn,
    logedOut,
  };
  return <myContext.Provider value={authInfo}>{children}</myContext.Provider>;
};

export default Providers;
