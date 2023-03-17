import { useContext, useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Home(params) {
  const log = useRef(false);
  const navigate = useNavigate();
  const { isAuth, handleLogOut } = useContext(AuthContext);
  const [logout, setlogout] = useState(isAuth);
  useEffect(() => {
    setlogout(isAuth);
    console.log(logout, "Home");
  }, [logout]);

  function handleClick() {
    handleLogOut();
    if (!isAuth) {
      log.current = isAuth;
      setlogout(isAuth);
      navigate("/login");
    }
  }

  return (
    <div>
      <h1>HOME</h1>
      {isAuth && <button onClick={handleClick}>LogOut</button>}
    </div>
  );
}
