import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (admin) => {
      if (admin) {
        setAdmin(admin);
      } else {
        setAdmin(null);
      }
    });
  }, []);

  function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  function logout() {
    signOut(auth)
      .then(() => {
        console.log("user Logged Out");
      })
      .catch((error) => {
        // An error happened.
      });
  }
  const payload = useMemo(() => ({ user, login, logout }), [user]);
  const payload = useMemo(() => ({ admin, login, logout }), [admin]);
  return (
    <AuthContext.Provider value={payload}>{children}</AuthContext.Provider>
  );
};
export const useAuthContext = () => useContext(AuthContext);
