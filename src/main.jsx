import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Posts from "./components/Posts.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { postsLoader } from "./components/Posts.jsx";
import SeperatePost from "./components/SeperatePost.jsx";
import Blogs from "./components/Blogs.jsx";
import IndexBlogs from "./components/IndexBlogs.jsx";
import { seperateLoader } from "./components/SeperatePost.jsx";
import { seperateAction } from "./components/SeperatePost.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="" element={<App />}></Route>
      <Route path="posts" element={<Posts />}></Route>
      <Route
        path="/posts/:id"
        element={<SeperatePost />}
        loader={seperateLoader}
        action={seperateAction}
      />
      <Route path="/blogs" element={<Blogs />}>
        <Route index={true} element={<IndexBlogs />}></Route>
      </Route>

      <Route
        path="*"
        element={<div>Fallback for all the invalid routes</div>}
      ></Route>
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
