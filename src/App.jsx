import { useEffect } from "react";
import { Link, redirect, redirectDocument, useMatches } from "react-router-dom";

function App() {
  console.log();
  const matches = useMatches();
  console.log("Matches ", matches);

  return (
    <>
      <div>
        <Link
          className="underline hover:text-sky-600 border-none"
          to={"/posts"}
        >
          Posts page
        </Link>
      </div>
      <div>
        <Link
          className="underline hover:text-sky-600 border-none"
          to={"/blogs"}
        >
          Blogs
        </Link>
      </div>
      <div>
        <Link
          className="underline hover:text-sky-600 border-none"
          to={"/blogs?index"}
        >
          Index Blogs
        </Link>
      </div>
      <div>
        <Link
          className="underline hover:text-sky-600 border-none"
          to={"/scrollrestoration"}
        >
          Scroll restoration
        </Link>
      </div>
    </>
  );
}

export default App;
