import React, { createContext, useState, useContext, useEffect } from 'react';
import { getUserInfo } from '../utils/authService';

const AuthContext = createContext();

const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserdata = async () => {
      if (user === null) {
        const { data } = await getUserInfo();
        if (data.success) {
          const currentUser = data.data;
          setUser(currentUser);
        } else {
          setUser(null);
        }
      }
    };

    fetchUserdata();
  }, [user]);

  return (
    <Provider
      value={{
        isAdmin: user?.role === 'admin' || user?.role === 'super',
        isLoggedIn: !!user,
        user,
        setUser,
      }}
    >
      {children}
    </Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider;
