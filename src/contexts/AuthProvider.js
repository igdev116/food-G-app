import React, { useEffect, useState } from "react";

import { auth } from "firebase/configs";
import useFirestoreProducts from "hooks/useFirestoreProducts";

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [hasHeader, setHasHeader] = useState(true);
  const [user, setUser] = useState(null);

  const { addToFirestore } = useFirestoreProducts();

  // set user
  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({ displayName, email, uid, photoURL });

        addToFirestore(uid);
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
