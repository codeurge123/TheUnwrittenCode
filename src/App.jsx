import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Leetcode from "./components/Leetcode";
import GitHub from "./components/GitHub"
import Create from "./components/Create";
import BlogArticle from "./blog/BlogArticle";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // apply/remove dark class on html
  useEffect(() => {
    const root = document.documentElement;
    // darkMode ? root.classList.add("dark") : root.classList.remove("dark");

    if(darkMode) {
      root.classList.remove("#f3e9dc");
      root.classList.add("dark");
    }
    else {
      root.classList.remove("dark");
      root.classList.add("#f3e9dc");
    }

  }, [darkMode]);

  

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-100 text-black dark:bg-zinc-900 dark:text-zinc-100 transition-colors duration-300 selection:bg-amber-400 selection:text-black dark:selection:text-zinc-900">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leetcode" element={<Leetcode />} />
          <Route path="/github" element={<GitHub />} />
          <Route path="/Article/:slug" element={<BlogArticle />} />
          <Route path="/create" element={<Create />} />
        </Routes>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed bottom-6 right-6 
                     font-mono px-4 py-2 
                     cursor-pointer
                      button-stl
                     shadow-black
                     border-2 rounded-md
                     bg-white dark:bg-zinc-800
                     border-black dark:border-zinc-400
                     hover:bg-black hover:text-white
                     dark:hover:bg-zinc-700
                     transition-all duration-200"
        >
          {darkMode ? "[ Light ]" : "[ Dark ]"}
        </button>

      </div>
    </BrowserRouter>
  );
}

export default App;
