import Skeleton from "@mui/material/Skeleton";
import PropTypes from "prop-types";

export const PostSkeleton = ({ listsToRender }) => {
  return (
    <>
      {Array(listsToRender)
        .fill(1)
        .map((_card, i) => (
          <div key={i}>
            <Skeleton
              variant="rectangular"
              width="100%"
              animation="wave"
              height={140}
            />
            <div>
              <Skeleton
                variant="text"
                width="100%"
                height={80}
                style={{ marginBottom: "8px" }}
                animation="wave"
              />
              <Skeleton
                variant="text"
                width="100%"
                style={{ minHeight: "80px" }}
                animation="wave"
              />
              <Skeleton
                variant="text"
                width="50%"
                height={80}
                animation="wave"
              />
            </div>
          </div>
        ))}
    </>
  );
};

PostSkeleton.propTypes = {
  listsToRender: PropTypes.number,
};
