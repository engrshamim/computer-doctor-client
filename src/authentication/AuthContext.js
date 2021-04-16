import React, { createContext, useContext, useEffect, useState } from "react";
import { app, auth } from "./firebaseInit";

const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}
const setUserToken = async () => {
  const token = await app.auth().currentUser?.getIdToken();
  sessionStorage.setItem("authToken", token);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setUserToken();
    });
    return unsubscribe;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
