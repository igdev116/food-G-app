import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { auth } from "firebase/configs";
import useFirestoreProducts from "hooks/useFirestoreProducts";

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [hasHeader, setHasHeader] = useState(true);
  const [user, setUser] = useState(null);

  const history = useHistory();
  const { pathname } = useLocation();

  const { addToFirestore } = useFirestoreProducts();

  // set user
  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({ displayName, email, uid, photoURL });

        addToFirestore(uid);

        // if user tries to login then redirect to home
        if (pathname.includes("login")) {
          history.push("/home");
        }
      }
    });

    return () => unsubscribed;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        hasHeader,
        setHasHeader,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
export { AuthContext };
