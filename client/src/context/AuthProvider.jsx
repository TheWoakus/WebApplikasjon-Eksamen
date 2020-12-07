import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  
  useEffect(() => {
      console.log(user);
  }, [user]);
  

  return(
    <Provider value={{user, setUser}}>
        {children}
    </Provider>
  )
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
