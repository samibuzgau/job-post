import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export const SinglePost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setLoadingState] = useState(true);

  const apiUrl = `https://simplylearn.dev`;

  useEffect(() => {
    Axios.get(`${apiUrl}/wp-json/wp/v2/posts/${postId}`).then((res) => {
      setPost(res.data);
      setLoadingState(false);
    });
  }, [apiUrl, postId]);

  const mainContentStyle = {
    marginBlock: "2rem",
  };

  return (
    <div>
      {isLoading ? (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      ) : (
        <section className="container" style={mainContentStyle}>
          <h2>{post.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </section>
      )}
    </div>
  );
};
