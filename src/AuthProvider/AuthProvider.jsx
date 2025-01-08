import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);
  const [inputValue, setInputValue] = useState([]);

  const handelGoogleLogin = () => {
    return signInWithPopup(auth, provider);
  };
  // Profile
  const userProfile = (name, userPhoto) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: userPhoto,
    });
  };
  // end Profile
  // user Register
  const usersignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // user Register End
  // user Login
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // user Login End
  // LogOut
  const logOut = () => {
    return signOut(auth);
  };
  // LogOut End
  const handelForgotPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  //  Paser barir bt
  useEffect(() => {
    const unSubscrive = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoding(false);
    });
    return () => {
      unSubscrive();
    };
  }, []);
  //  Paser barir bt End
  const data = {
    usersignUp,
    userLogin,
    logOut,
    user,
    loding,
    handelGoogleLogin,
    userProfile,
    setUser,
    setInputValue,
    inputValue,
    handelForgotPass,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
