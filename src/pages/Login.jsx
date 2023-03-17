import { useContext, useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { isAuth, handleLogin } = useContext(AuthContext);
  const [login, setlogin] = useState(isAuth);

  useEffect(() => {
    setlogin(isAuth);
    console.log(login, "login");
  }, [login]);

  function HandleClick() {
    if (!isAuth) {
      // log.current = isAuth;
      handleLogin();
      setlogin(isAuth);
      navigate("/users");
    }
  }

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={HandleClick}>Login</button>
    </div>
  );
}
