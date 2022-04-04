import React, { useEffect } from "react";
import { getAllPosts, getDetailPost } from "../../api/post";
import { Post } from "../../types/post";
import NewPost from "../form/NewPost";
import DetailPost from "../organisms/DetailPost";

function Home() {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [post, setPost] = React.useState<Post>();

  const handleGetDetailPost = async (id: number) => {
    try {
      const res = await getDetailPost(id);
      console.log(res.data);
      setPost(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const onClickPost = (id: number) => {
    handleGetDetailPost(id);
  };

  const handleGetAllPosts = async () => {
    try {
      const res = await getAllPosts();
      console.log(res.data);
      setPosts(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleGetAllPosts();
  }, []);
  return (
    <div style={{ display: "flex", width: "100%", height: "100vh" }}>
      <div style={{ width: "300px", backgroundColor: "yellowgreen" }}>
        <NewPost handleGetAllPosts={handleGetAllPosts} />
        {posts.map((post) => (
          <div key={post.id} onClick={() => onClickPost(post.id)}>
            <p>{post.title}</p>
            <p>{post.createdAt}</p>
          </div>
        ))}
      </div>
      <DetailPost post={post} />
    </div>
  );
}

export default Home;
