import SideBar from "../SideBar";
import "./styles.scss";
import { Skeleton } from "@mui/material";

const Plot = () => {
  return (
    <div>
      <div className="cointainerPlot">
        <SideBar />
        <div className="mainContentPlot">
          <div className="margin86">
            <Skeleton
              variant="text"
              sx={{ bgcolor: "grey.400" }}
              width={1100}
              height={58}
            />
          </div>

          <Skeleton
            variant="rounded"
            sx={{ bgcolor: "grey.400" }}
            width={1100}
            height={183}
          />
          <div className="historic">
            <Skeleton
              variant="rounded"
              sx={{ bgcolor: "grey.400" }}
              width={437}
              height={500}
            />
            <Skeleton
              variant="rounded"
              sx={{ bgcolor: "grey.400" }}
              width={627}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plot;
