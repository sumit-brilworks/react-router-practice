import React, { useEffect, useState } from "react";
import { superAxiosInstance } from "../services/superAxios";
import { useLoaderData } from "react-router";
import { ArrowBigLeftDash, Pencil, Check } from "lucide-react";
import { Link, useFetcher } from "react-router-dom";

function SeperatePost() {
  const [isOpen, setIsOpen] = useState(true);
  const fetcher = useFetcher();
  const loaderData = useLoaderData();
  console.log("Loader Data", loaderData);
  const [inputData, setInputData] = useState("");
  useEffect(() => {
    setInputData(loaderData.data.data.content);
  }, []);
  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
      return;
    }
    console.log("Input Data", inputData);
  };
  return (
    <div>
      <div className="bg-neutral-700 min-h-screen flex justify-between flex-col text-white text-center">
        <div className="py-5 flex items-center gap-4 justify-center relative">
          <Link
            className="absolute left-2 flex items-center gap-2 text-md"
            to={"/posts"}
          >
            <ArrowBigLeftDash />{" "}
            <span className="text-3xl ">Return to Posts</span>
          </Link>
          <fetcher.Form
            method="put"
            action={`/posts/${loaderData.data.data._id}`}
            encType="application/x-www-form-urlencoded"
          >
            {isOpen ? (
              <div>{loaderData.data.data.content}</div>
            ) : (
              <input
                placeholder="Edit your post"
                className="outline-none !text-md bg-neutral-600 text-white p-2 rounded"
                type="text"
                name="content"
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
              />
            )}
            {isOpen ? (
              <div className="cursor-pointer" onClick={() => setIsOpen(false)}>
                <Pencil />
              </div>
            ) : (
              <button type="submit" onClick={handleClick}>
                <Check />
              </button>
            )}
          </fetcher.Form>
        </div>
        <img src="/SeperatePost.jpg" alt="Not fetched" />
      </div>
    </div>
  );
}

export default SeperatePost;
export const seperateAction = async ({ request }) => {
  const data = await request.formData();
  const keys = data.keys();
  console.log("Data in action");

  console.log("Inside Action", request, request.body, await request.formData());
  const formData = await request.formData();
  const content = formData.has("content");
  console.log(content);
};

export const seperateLoader = async ({ request, params }) => {
  let data = {};
  let error = false;
  try {
    console.log("params", params);
    const data1 = await superAxiosInstance.get(`/posts/get/${params.id}`);
    console.log("Data", data1);
    error = false;
    data = data1.data;

    return { data, error };
  } catch (err) {
    console.log("Error", err);
    error = true;
    data = null;
    return { data, error };
  }
};
