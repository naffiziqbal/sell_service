import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider()

const UserContext = ({ children }) => {
    const [user, setUser] = useState([]);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logInUser =(email, password)=>{
    return signInWithEmailAndPassword(auth, email,password)
  }

  const googleLogIn =()=>{
return signInWithRedirect(auth, provider)
  }


const userLogOut =()=>{
    return signOut(auth)
}
  const updateUserProfile = (profile)=>{
    return updateProfile(auth.currentUser, profile)
  }




  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const value = { user, createUser,logInUser,googleLogIn,updateUserProfile,userLogOut };
  return (
    <div>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </div>
  );
};

export default UserContext;
