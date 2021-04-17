import React, { createContext, useState, useContext } from "react";

interface IAuthContext {
  logged: boolean;
  signIn(email: string, password: string): void;
  signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

// Provider
const AuthProvider: React.FC = ({ children }) => {
  // Carregar o estado auth inicial do localstorage
  const [logged, setLogged] = useState<boolean>(() => {
    const isLogged = localStorage.getItem("@tractian:logged");
    return !!isLogged;
  });
  const signIn = (email: string, password: string) => {
    if (email === "teste1@tractian.com" && password === "1234") {
      localStorage.setItem("@tractian:logged", "true");
      setLogged(true);
    } else {
      alert("Senha ou usuário inválido");
    }
  };

  const signOut = () => {
    localStorage.removeItem("@tractian:logged");
    setLogged(false);
  };
  return (
    <AuthContext.Provider value={{ logged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
