import { Skeleton } from "@mui/material";
import "./styles.scss";
// animation="wave"

const Login = () => {
  return (
    <div className="cointainerLogin">
      <div className="itemsLogin">
        <Skeleton
          variant="rounded"
          sx={{ bgcolor: "grey.500" }}
          width={124}
          height={51}
        />

        <div className="left">
          <Skeleton
            variant="text"
            sx={{ bgcolor: "grey.500" }}
            width={133}
            height={29}
          />
        </div>

        <Skeleton
          variant="rounded"
          sx={{ bgcolor: "grey.500" }}
          width={316}
          height={50}
        />
        <Skeleton
          variant="rounded"
          sx={{ bgcolor: "grey.400" }}
          width={316}
          height={50}
        />
        <div className="left noGap">
          <Skeleton
            variant="rectangular"
            sx={{ bgcolor: "grey.500" }}
            width={30}
            height={30}
          />
        </div>
        <Skeleton
          variant="rounded"
          sx={{ bgcolor: "grey.500" }}
          width={316}
          height={50}
        />
      </div>
    </div>
  );
};

export default Login;
