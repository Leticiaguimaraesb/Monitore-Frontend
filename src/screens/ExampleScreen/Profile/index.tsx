import SideBar from "../SideBar";
import "./styles.scss";
import { Skeleton } from "@mui/material";

const Profile = () => {
  return (
    <div className="cointainerProfile">
      <SideBar />
      <div className="mainContentProfile">
        <Skeleton
          variant="text"
          sx={{ bgcolor: "grey.400" }}
          width={1100}
          height={58}
        />
        <Skeleton
          variant="rounded"
          sx={{ bgcolor: "grey.400" }}
          width={1100}
          height={700}
        />
      </div>
    </div>
  );
};

export default Profile;
