import React from "react";
import { createPost } from "../../api/post";

type Props = {
  handleGetAllPosts: () => Promise<void>;
};

const NewPost: React.FC<Props> = ({ handleGetAllPosts }) => {
  const [value, setValue] = React.useState({
    title: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await createPost(value);
      console.log(res.data);
      handleGetAllPosts();
    } catch (e) {
      console.log(e);
    }
    setValue({
      title: "",
    });
  };
  return (
    <form>
      <input
        name="title"
        value={value.title}
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder="title"
      />
      <button type="submit" onClick={(e) => handleSubmit(e)}>
        作成
      </button>
    </form>
  );
};

export default NewPost;
