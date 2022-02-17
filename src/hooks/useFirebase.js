/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  getIdToken,
} from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState("");
  const auth = getAuth();

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const registerUser = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setAuthError("");
        const newUser = { email, displayName: name };
        setUser(newUser);

        // save user to database
        saveUser(email, name, "POST");
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        navigate("/");
      })
      .catch((e) => {
        setAuthError(e.message);
      })
      .finally(() => setIsLoading(false));
  };

  const signInUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const destination = location?.state?.from || "/";
        navigate(destination);
        setAuthError("");
      })
      .catch((e) => setAuthError(e.message))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
      });
  }, [user?.email]);

  const logOut = () => {
    setIsLoading(true);
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  const saveUser = (email, displayName, methodName) => {
    const user = { email, displayName };
    fetch("http://localhost:5000/users", {
      method: `${methodName}`,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };

  //   observed user state
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);

        getIdToken(user).then((idToken) => {
          setToken(idToken);
        });

        setAuthError("");
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);
  return {
    user,
    admin,
    token,
    setAuthError,
    setIsLoading,
    authError,
    signInWithGoogle,
    registerUser,
    signInUser,
    logOut,
    isLoading,
    saveUser,
  };
};

export default useFirebase;
