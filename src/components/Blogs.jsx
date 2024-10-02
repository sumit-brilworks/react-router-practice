import React from "react";
import {
  Outlet,
  useHref,
  useLocation,
  useMatches,
  useOutlet,
} from "react-router";

function Blogs() {
  const outlet = useOutlet();
  const location = useLocation();
  const href = useHref();
  const matches = useMatches();
  console.log("Using matches", matches);
  console.log("Hreff", href);
  console.log(location);
  console.log("Outlet ", outlet);
  return <>{location.search === "?index" ? outlet : <div> Blogs page </div>}</>;
}

export default Blogs;
