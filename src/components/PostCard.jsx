import {
  Fade,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import fallbackImage from "../assets/fallback.avif";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const truncate = (string, maxLength = -1) => {
  const x = string.split(" ");
  return maxLength !== -1 && x.length > maxLength
    ? `${x.slice(0, maxLength).join(" ")}...`
    : string;
};

export const PostCard = ({ post }) => {
  const { id, title, excerpt, _embedded } = post;

  const thumbnail =
    _embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? fallbackImage;
  const postExcerpt = truncate(excerpt.rendered, 15);

  return (
    <Fade in timeout={500}>
      <Card>
        {thumbnail && (
          <Link to={`/posts/${id}`}>
            <CardMedia
              component="img"
              alt={title.rendered}
              width="240"
              height="140"
              image={thumbnail}
            />
          </Link>
        )}
        <CardContent>
          <Typography
            variant="subtitle1"
            component="div"
            style={{ minHeight: "80px" }}
          >
            {title.rendered}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p
              style={{ minHeight: "80px" }}
              dangerouslySetInnerHTML={{ __html: postExcerpt }}
            />
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/posts/${id}`}>
            <Button size="small">Read more</Button>
          </Link>
        </CardActions>
      </Card>
    </Fade>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.shape({
      rendered: PropTypes.string.isRequired,
    }).isRequired,
    excerpt: PropTypes.shape({
      rendered: PropTypes.string.isRequired,
    }).isRequired,
    _embedded: PropTypes.shape({
      "wp:featuredmedia": PropTypes.arrayOf(
        PropTypes.shape({
          source_url: PropTypes.string,
        })
      ),
    }),
  }).isRequired,
};
