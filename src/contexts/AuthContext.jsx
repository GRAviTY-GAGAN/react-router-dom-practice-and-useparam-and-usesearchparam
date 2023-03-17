import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [isAuth, setIsAuth] = useState(true);

  function handleLogin(params) {
    setIsAuth(true);
  }

  function handleLogOut(params) {
    setIsAuth(false);
  }

  let value = { isAuth, handleLogin, handleLogOut };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
