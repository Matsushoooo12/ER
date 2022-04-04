import React from "react";
import { Post } from "../../types/post";

type Props = {
  post: Post | undefined;
};

const DetailPost: React.FC<Props> = ({ post }) => {
  return (
    <div style={{ backgroundColor: "red", width: "100%" }}>
      <p>{post?.title}</p>
    </div>
  );
};

export default DetailPost;
