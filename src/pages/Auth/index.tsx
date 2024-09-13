/* eslint-disable no-empty */
import Login from "../../screens/Login";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../controllers/contextController";
import Home from "../Home";
const AuthPage = () => {
  const { userData, validateToken } = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      validateToken(localStorage.getItem("token"));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (userData?.token) return <Home />;
  else return <Login />;
};

export default AuthPage;
