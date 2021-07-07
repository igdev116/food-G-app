import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import auth from "firebase/configs";

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [hasHeader, setHasHeader] = useState(true);
  const [user, setUser] = useState(null);
  const history = useHistory();

  // set user
  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({ displayName, email, uid, photoURL });
      }
    });

    return () => {
      unsubscribed();
    };
  }, [history]);

  return (
    <AuthContext.Provider value={{ user, setUser, hasHeader, setHasHeader }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
