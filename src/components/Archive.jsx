import { useState, useEffect } from "react";
import Axios from "axios";
import { PostSkeleton } from "./PostSkeleton";
import { PostCard } from "./PostCard";
import { Pagination, Typography } from "@mui/material";

export const Archive = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setLoadingState] = useState(true);

  useEffect(() => {
    Axios.get(`https://simplylearn.dev/wp-json/wp/v2/posts`, {
      params: {
        per_page: 5,
        page: currentPage,
      },
    }).then((res) => {
      setTotalPages(res.headers.get("X-WP-TotalPages"));
      setPosts(res.data);
      setLoadingState(false);
    });
  }, [currentPage]);

  const onPageChange = (event, newPage) => {
    setLoadingState(true);
    setPage(newPage);
  };

  const mainContentStyle = {
    marginBlock: "2rem",
  };

  const listingStyle = {
    marginBottom: "2rem",
  };

  const paginationStyles = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <section className="container" style={mainContentStyle}>
      <div className="grid-container" style={listingStyle}>
        {isLoading ? (
          <PostSkeleton listsToRender={5} />
        ) : (
          <>
            {posts.length > 0 ? (
              <>
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </>
            ) : (
              <Typography variant="body1">No posts found.</Typography>
            )}
          </>
        )}
      </div>
      <div style={paginationStyles}>
        <Pagination
          count={parseInt(totalPages)}
          page={currentPage}
          onChange={onPageChange}
          color="primary"
        />
      </div>
    </section>
  );
};
