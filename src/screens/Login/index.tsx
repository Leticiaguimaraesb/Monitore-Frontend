/* eslint-disable @typescript-eslint/no-explicit-any */
import "./styles.scss";
import monitoreLogo from "../../assets/sideBar/monitoreLogo.svg";
import iconLogin from "../../assets/loginPage/iconLogin.svg";
import Input from "../../components/Input";
import CustomCheckbox from "../../components/CustomCheckbox";
import Button from "../../components/Button";
import { useState, useContext } from "react";
import { AuthContext } from "../../controllers/contextController";

const LoginScreen = () => {
  const { login } = useContext(AuthContext);

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<any>();
  const [stayLogged, setStayLogged] = useState(false);

  const loginButtonHandler = async () => {
    try {
      await login(user, password, stayLogged);
    } catch (error: any) {
      if (error.message) {
        if (error.message === "User not Found") {
          setErrorMessage({ message: error.message, type: "login" });
        } else if (error.message === "Wrong Password") {
          setErrorMessage({
            message: error.message,
            type: "password",
          });
        } else {
          console.log(error.message);
        }
      }
    }
  };
  return (
    <div className="LoginPage">
      <div className="LoginContainer">
        <header>
          <img src={monitoreLogo} alt="Logomarca Monitore" />
        </header>
        <div className="DataContainer">
          <h1>Bem Vindo!</h1>
          <Input
            className={
              errorMessage?.type === "login"
                ? "TextInputError"
                : "TextInputDefault"
            }
            label="CPF/CNPJ"
            placeHolder="Apenas números"
            value={user}
            onChange={(event) => {
              setUser(event.target.value.replace(/\D/g, ""));
            }}
            errorMessage={errorMessage?.message}
          />
          <Input
            className={
              errorMessage?.type === "password"
                ? "TextInputError"
                : "TextInputDefault"
            }
            type="password"
            label="Senha"
            placeHolder="Digite sua senha aqui"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            errorMessage={errorMessage?.message}
          />
          <CustomCheckbox
            label="Manter Conectado"
            onChange={(event) => {
              setStayLogged(event.target.checked);
            }}
          />

          <Button
            text="Entrar"
            className="largeButton"
            iconRight={iconLogin}
            onClick={async () => {
              await loginButtonHandler();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
