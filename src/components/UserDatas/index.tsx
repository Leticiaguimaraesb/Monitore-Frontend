import "./styles.scss";
import { User, UserDataProps } from "../../types/userDataTypes";
import DataTableRow from "../DataTableRow";
import { useEffect, useState } from "react";
import { userById } from "../../services/users";

const UserDatas = ({ userID }: UserDataProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    userById(userID)
      .then((result) => {
        setUser(result);
      })
      .catch((error) => {
        alert(error);
      });
  }, [userID]);

  return (
    <div className="userDataContainer">
      {user && (
        <table>
          <DataTableRow title="Nome" text={user.name} />
          <DataTableRow title="CPF/CNPJ" text={user.cpf_cnpj} />
          <DataTableRow title="Número de contato" text={user.celphone} />
          <DataTableRow title="E-mail" text={user.email} />
          <DataTableRow title="Tipo de conta" text={user.userType} />
        </table>
      )}
    </div>
  );
};

export default UserDatas;
