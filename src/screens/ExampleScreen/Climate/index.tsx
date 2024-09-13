import SideBar from "../SideBar";
import "./styles.scss";
import { Skeleton } from "@mui/material";

const Climate = () => {
  return (
    <div>
      <div className="cointainerClimate">
        <SideBar />
        <div className="mainContentClimate">
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
            height={200}
          />
          <Skeleton
            variant="rounded"
            sx={{ bgcolor: "grey.400" }}
            width={1100}
            height={424}
          />
          <Skeleton
            variant="rounded"
            sx={{ bgcolor: "grey.400" }}
            width={1100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Climate;
