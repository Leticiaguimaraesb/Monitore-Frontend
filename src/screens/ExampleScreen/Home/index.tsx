import { Skeleton } from "@mui/material";
import "./styles.scss";
import SideBar from "../SideBar";

const HomeLoading = () => {
  return (
    <div className="cointainerHomeLoading">
      <SideBar />
      <div className="mainContentHome">
        <div>
          <Skeleton
            variant="text"
            sx={{ bgcolor: "grey.400" }}
            width={304}
            height={58}
          />
          <Skeleton
            variant="rounded"
            sx={{ bgcolor: "grey.400" }}
            width={1100}
            height={112}
          />
          <Skeleton
            variant="text"
            sx={{ bgcolor: "grey.400" }}
            width={304}
            height={58}
          />
        </div>

        <div className="cointainerInputs">
          <div className="leftInput">
            <Skeleton
              variant="text"
              sx={{ bgcolor: "grey.400" }}
              width={320}
              height={58}
            />
            <Skeleton
              variant="rounded"
              sx={{ bgcolor: "grey.400" }}
              width={216}
              height={52}
            />
          </div>

          <Skeleton
            variant="rounded"
            sx={{ bgcolor: "grey.400" }}
            width={203}
            height={50}
          />
        </div>

        <Skeleton
          variant="rounded"
          sx={{ bgcolor: "grey.400" }}
          width={1100}
          height={112}
        />
        <Skeleton
          variant="rounded"
          sx={{ bgcolor: "grey.400" }}
          width={1100}
          height={112}
        />
        <Skeleton
          variant="rounded"
          sx={{ bgcolor: "grey.400" }}
          width={1100}
          height={112}
        />
      </div>
    </div>
  );
};

export default HomeLoading;
