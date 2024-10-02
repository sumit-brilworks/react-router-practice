import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";
import PostComponent from "./PostComponent.jsx";
import { superAxiosInstance } from "../services/superAxios";
import { Form } from "react-router-dom";
import "./Posts.css";
import { Button } from "@material-tailwind/react";

function Posts() {
  const [postsData, setPostsData] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [newPost, setNewPost] = useState("");
  const params = useParams();
  useEffect(() => {
    setIsLoading(true);
    superAxiosInstance.get("posts/list").then((data) => {
      console.log("Data", data);
      setPostsData(data.data.data);
      setIsLoading(false);
    });
    console.log("Inside useEffect", postsData);
  }, [setPostsData]);
  const handleAddPost = (e) => {
    e.preventDefault();
    setPostsData([{ content: newPost }, ...postsData]);
    superAxiosInstance.post("/posts/create", {
      content: newPost,
    });
  };
  if (loading) {
    return (
      <div className="bg-neutral-800 min-h-screen text-white">Loading ....</div>
    );
  }
  // const isAuthenticated = true;
  // if (isAuthenticated) {
  //   navigate("/blogs");
  // }

  return (
    <div className="bg-[#252525] text-white">
      <div className="py-10">
        <form
          className="flex justify-center space-x-4 text-black"
          onSubmit={handleAddPost}
        >
          <input
            placeholder="Add new post"
            className="outline-none p-2 rounded hover:border-purple-600"
            onChange={(e) => {
              setNewPost(e.target.value);
            }}
            type="text"
            name="post"
          />
          <Button
            color="blue"
            className="! bg-[blue] p-2 rounded hover:bg-purple-700"
            type="submit"
          >
            Add Post
          </Button>
        </form>
      </div>
      <div>
        {postsData?.map((item) => {
          return (
            <PostComponent
              key={item._id}
              idd={item._id}
              content={item.content}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Posts;

export const postsLoader = async ({ params, request }) => {
  console.log("Params and Request", params, request);
  const data = await superAxiosInstance.get("posts/list", { params: params });
  console.log("Data in loader", data);
  return data.data;
};
