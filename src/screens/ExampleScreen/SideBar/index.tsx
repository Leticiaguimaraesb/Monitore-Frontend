import "./styles.scss";
import { Skeleton } from "@mui/material";

const SideBar = () => {
  return (
    <div className="sideBarLoading">
      <Skeleton
        variant="rounded"
        sx={{ bgcolor: "grey.400" }}
        width={124}
        height={51}
      />
      <div className="linksSideBar">
        <Skeleton
          variant="rectangular"
          sx={{ bgcolor: "grey.400" }}
          width={187}
          height={42}
        />
        <Skeleton
          variant="rectangular"
          sx={{ bgcolor: "grey.400" }}
          width={187}
          height={42}
        />
        <Skeleton
          variant="rectangular"
          sx={{ bgcolor: "grey.400" }}
          width={187}
          height={42}
        />
      </div>
      <Skeleton
        variant="rectangular"
        sx={{ bgcolor: "grey.400" }}
        width={187}
        height={42}
      />
    </div>
  );
};

export default SideBar;
