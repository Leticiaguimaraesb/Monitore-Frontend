import "./styles.scss";
import SideBar from "../../components/SideBar";
import Title from "../../components/Title";
import UserDatas from "../../components/UserDatas";
import { useContext } from "react";
import { AuthContext } from "../../controllers/contextController";

const Profile = () => {
  const { userData } = useContext(AuthContext); //busca de dados do usuário
  if (userData?.token) {
    return (
      <div className="profileContainer">
        <SideBar />
        <div className="dataProfileContainer">
          <div className="profileTitle">
            <Title fontSize="" fontWeight="" text="Perfil" hasIcon hasLine />
          </div>
          <UserDatas  userID={userData.info.id} />
        </div>
      </div>
    );
  } else {
    window.location.href = "/";
  }
};

export default Profile;
