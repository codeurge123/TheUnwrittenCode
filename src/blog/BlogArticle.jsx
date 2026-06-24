import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getBlog } from "../services/blogApi";
import { renderMarkdown } from "../utils/markdown.jsx";

export default function BlogArticle() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");
  const [shift, setShift] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setShift(Math.min(y / 5, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function loadBlog() {
      try {
        setStatus("loading");
        const data = await getBlog(slug);
        if (!isMounted) return;
        setBlog(data);
        setStatus("ready");
      } catch (loadError) {
        if (!isMounted) return;
        setError(loadError.message);
        setStatus("error");
      }
    }

    loadBlog();
    return () => {
      isMounted = false;
    };
  }, [slug]);

  return (
    <article className="relative max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 font-mono text-gray-900 dark:text-zinc-100 bg-neutral-100 dark:bg-zinc-900 transition-colors duration-300 text-justify">
      <button
        onClick={() => navigate("/")}
        style={{ transform: `translateX(-${shift}px)` }}
        className="sticky top-4 inline-flex items-center gap-2 mb-8 border-2 px-3 py-1 text-sm sm:text-base rounded-md font-mono transition-all duration-300 ease-out hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5" />
          <path d="M12 19l-7-7 7-7" />
        </svg>
        Back
      </button>

      {status === "loading" && (
        <p className="border-2 border-black dark:border-zinc-400 bg-white dark:bg-zinc-800 p-6">
          Loading blog...
        </p>
      )}

      {status === "error" && (
        <div className="border-2 border-black dark:border-zinc-400 bg-white dark:bg-zinc-800 p-6">
          <p className="text-sm text-blue-700 dark:text-blue-300 mb-3">
            [ Missing Post ]
          </p>
          <h1 className="text-3xl font-bold mb-4">Blog not found</h1>
          <p className="mb-6 text-zinc-700 dark:text-zinc-300">{error}</p>
          <Link to="/" className="border-b-2 border-blue-400">
            Back to home
          </Link>
        </div>
      )}

      {status === "ready" && blog && (
        <>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            {blog.title}
          </h1>
          <p className="mt-4 text-sm text-gray-500 dark:text-zinc-400">
            {blog.date}
          </p>
          {blog.description && (
            <p className="mt-6 text-zinc-700 dark:text-zinc-300">
              {blog.description}
            </p>
          )}

          <div className="mt-8">{renderMarkdown(blog.content)}</div>
        </>
      )}
    </article>
  );
}
