import { Post } from "../types/post";
import client from "./client";

export const getAllPosts = () => {
  return client.get("/posts");
};

export const getDetailPost = (id: number) => {
  return client.get(`/posts/${id}`);
};

export const createPost = (params: Pick<Post, "title">) => {
  return client.post("/posts", params);
};

export const updatePost = (id: number, params: Pick<Post, "title">) => {
  return client.patch(`/posts/${id}`, params);
};

export const deletePost = (id: number) => {
  return client.delete(`/posts/${id}`);
};
