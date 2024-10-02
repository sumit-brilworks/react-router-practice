import { StrictMode } from "react";
import Layout from "./components/Layout.jsx";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Blogs from "./components/Blogs.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/blogs" element={<Blogs />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
