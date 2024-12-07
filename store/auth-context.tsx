import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (token: string) => {},
  logout: () => {},
});

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState("");

  const authenticate = (token: string) => {
    setToken(token);
    AsyncStorage.setItem("token", token);
  };

  const logout = () => {
    setToken("");
  };

  const value = {
    token,
    isAuthenticated: token.length > 0,
    authenticate,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
