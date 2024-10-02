import React from "react";
import { Link } from "react-router-dom";

function PostComponent({ content, idd }) {
  console.log("Content ", content);
  if (content === "") return;
  return (
    <Link
      to={`/posts/${idd}`}
      className="bg-[#48aff0] p-6 rounded-xl m-5 block"
    >
      <div>{content}</div>
    </Link>
  );
}

export default PostComponent;
