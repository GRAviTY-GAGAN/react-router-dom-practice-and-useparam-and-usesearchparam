import { useContext, useRef } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function PrivateRoute(props) {
  const { isAuth } = useContext(AuthContext);

  console.log(isAuth);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return props.children;
}
