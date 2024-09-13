/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";
import auth from "../services/auth";
import { UserData } from "../types/authTypes";
import api from "../services/api";

export const AuthContext = createContext<any>(undefined);

const AuthProvider = ({ children }: any) => {
  const [userData, setUserData] = useState<UserData>();

  const login = async (
    cpf_cnpj: string,
    password: string,
    stayLogged: boolean
  ) => {
    const token = await auth.loginUser({ cpf_cnpj, password });

    if (stayLogged) localStorage.setItem("token", token);

    if (token?.message) {
      throw new Error(token.message);
    } else {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const user = await auth.getUserData(cpf_cnpj);
      setUserData({ token, info: user });
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUserData(undefined);
    delete api.defaults.headers.common["Authorization"];
  };

  const validateToken = async (token: string) => {
    try {
      const result = await auth.validateToken(token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      const user = await auth.getUserData(result.cpf_cnpj);

      setUserData({ token, info: user });
    } catch (error) {
      localStorage.clear();
      setUserData(undefined);
      delete api.defaults.headers.common["Authorization"];
    }
  };

  return (
    <AuthContext.Provider value={{ userData, login, logout, validateToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
