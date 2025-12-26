import React from "react";
import { Link } from "react-router-dom";
import DevLogs from "../Logs";

/* ---------------------------------------
   Reusable Floating Card
--------------------------------------- */
function CardWithLabel({ label, children }) {
  return (
    <div className="relative max-w-6xl mx-auto mt-14 px-2 sm:px-0">

      {/* Floating Label */}
      <span
        className="
          absolute -top-4 left-4 sm:left-8
          px-4 py-1
          text-xs sm:text-sm
          font-mono
          bg-blue-100 border-2 border-blue-500
          dark:bg-blue-900 dark:border-blue-400
          z-10
        "
      >
        {label}
      </span>

      {/* Card */}
      <div
        className="
          border-2 border-blue-500
          bg-blue-50
          dark:bg-zinc-800 dark:border-blue-400
          p-6 sm:p-8
          font-mono
        "
      >
        {children}
      </div>
    </div>
  );
}

/* ---------------------------------------
   GitHub Logs Page
--------------------------------------- */
export default function Leetcode() {
  return (
    <div className="transition-colors duration-300 px-4 sm:px-6">

      {/* Dev Logs Heading */}
      <div className="text-center mt-10">
        <p className="text-lg sm:text-xl font-mono">
          Dev - Logs
        </p>
      </div>

      {/* Logs */}
      {DevLogs.filter(log => log.category === "github").map(log => (
        <CardWithLabel key={log.id} label={log.date}>
          <p className="text-sm sm:text-base mb-6">
            {log.title}
          </p>

          <Link to={log.path}>
            <span className="text-xl">[</span>
            <span className="
              border-b-2 border-blue-300
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

    </div>
  );
}
