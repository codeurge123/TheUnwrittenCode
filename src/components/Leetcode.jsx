import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBlogs } from "../services/blogApi";


function CardWithLabel({ label, theme = "amber", highlight = false, children }) {
  const themes = {
    amber: {
      labelBg: "bg-amber-300 dark:bg-amber-500",
      border: "border-amber-500 dark:border-amber-400",
      cardBg: "bg-amber-50 dark:bg-amber-100",
    },
    blue: {
      labelBg: "bg-blue-100 dark:bg-blue-900",
      border: "border-blue-500 dark:border-blue-400",
      cardBg: "bg-blue-50 dark:bg-zinc-800",
    },
  };

  const t = themes[theme];

  return (
    <div className={`relative max-w-6xl mx-auto mt-14 px-2 sm:px-0
        ${highlight ? 'card-stl' : ''}
    `}>
      {/* Floating Label */}
      <span
        className={`
          absolute -top-4 hover:rotate-2 hover:scale-110 transition-all duration-150 left-4 sm:left-8
          px-4 py-1
          text-xs sm:text-sm
          font-mono
          border-2 ${t.border}
          ${t.labelBg}
          z-10
        `}
      >
        {label}
      </span>

      {/* Card */}
      <div
        className={`
          border-2 ${t.border}
          ${t.cardBg}
          p-6 sm:p-10
          font-mono
        `}
      >
        {children}
      </div>
    </div>
  );
}


export default function Leetcode() {
  const [blogs, setBlogs] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadBlogs() {
      try {
        const data = await getBlogs("leetcode");
        if (!isMounted) return;
        setBlogs(data);
        setStatus("ready");
      } catch (loadError) {
        if (!isMounted) return;
        setError(loadError.message);
        setStatus("error");
      }
    }

    loadBlogs();
    return () => {
      isMounted = false;
    };
  }, []);

  //   const [data, setData] = useState(null);
  //   const [error, setError] = useState(null);
  //   const username = "";

  //   useEffect(() => {
  //     const controller = new AbortController();
  //     const timeout = 10000; // 30 seconds

  //     const fetchStats = async () => {
  //       try {
  //         const timeoutId = setTimeout(() => {
  //           controller.abort(); // cancel request after 30 sec
  //         }, timeout);

  //         const res = await fetch(
  //           `https://leetcode-stats-api.herokuapp.com/${username}`,
  //           { signal: controller.signal }
  //         );

  //         clearTimeout(timeoutId); // clear timeout if response comes early

  //         if (!res.ok) throw new Error("Network response failed");

  //         const result = await res.json();

  //         if (result.status !== "success") {
  //           throw new Error("LeetCode user not found");
  //         }

  //         setData(result);
  //       } catch (err) {
  //         if (err.name === "AbortError") {
  //           setError("Request took too long (30s). Please try again.");
  //         } else {
  //           setError(err.message);
  //         }
  //       }
  //     };

  //     fetchStats();

  //   }, []);

  // if (!data) {
  //   return (
  //     <div className="text-sm text-zinc-400 font-mono text-center mt-14">
  //       Fetching LeetCode stats...
  //     </div>
  //   );
  // }

  return (
    <div className="transition-colors  duration-300 px-4 sm:px-6">

      {/* LeetCode Stats */}
      <CardWithLabel label="LeetCode Journey" theme="amber" highlight>
        <p className="text-sm text-black sm:text-base leading-relaxed mb-6">
          My LeetCode journey represents a continuous process of growth,
          discipline, and problem-solving excellence. Through consistent practice,
          I have strengthened my understanding of data structures and algorithms,
          improved analytical thinking, and developed the ability to approach
          complex problems with structured logic.

          Solving diverse challenges across arrays, strings, recursion, dynamic
          programming, graphs, and advanced algorithmic patterns has enhanced my
          coding efficiency and debugging skills. LeetCode has played a key role
          in building confidence for technical interviews and sharpening my
          competitive programming mindset.
        </p>
      </CardWithLabel>

      {/* Dev Logs Heading */}
      <div className="text-center mt-20">
        <p className="text-lg sm:text-xl font-mono">
          Dev - Logs
        </p>
      </div>

      {status === "loading" && (
        <p className="text-center mt-10 font-mono text-sm">Loading blogs...</p>
      )}

      {status === "error" && (
        <p className="text-center mt-10 font-mono text-sm text-red-700">
          Could not load blogs: {error}
        </p>
      )}

      {status === "ready" && blogs.map(blog => (
          <CardWithLabel
            key={blog.slug}
            label={blog.date}
            theme="blue"
          >
            <p className="text-sm sm:text-base mb-6">
              {blog.title}
            </p>

            <Link to={`/Article/${blog.slug}`}>
              <span className="text-xl">[</span>
              <span className="
              border-b-2 border-blue-400
              hover:border-blue-700
              dark:border-blue-400 dark:hover:border-blue-300
              transition
            ">
                Read Article
              </span>
              <span className="text-xl">]</span>
            </Link>
          </CardWithLabel>
        ))}

      {/* Footer */}
      <div className="
        text-sm mt-24 py-6
        flex justify-center
        font-mono
        text-blue-500 hover:text-blue-800
      ">
        <Link
          to="https://github.com/codeurge123"
          target="_blank"
        >
          <span>[</span>
          <span>GitHub</span>
          <span>]</span>
        </Link>
      </div>

    </div >
  );
}
