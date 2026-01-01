import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DevLogs from "../Logs";


function CardWithLabel({ label, theme = "amber",highlight = false, children }) {
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
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const username = "code_urgyb316_";

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch(
          `https://leetcode-stats-api.herokuapp.com/${username}`
        );

        if (!res.ok) throw new Error("Network response failed");

        const result = await res.json();
        if (result.status !== "success") {
          throw new Error("LeetCode user not found");
        }

        setData(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchStats();
  }, []);

  if (error) {
    return (
      <div className="text-sm text-red-400 font-mono text-center mt-14">
        {error}
      </div>
    );
  }

  if (!data) {
    return (
      <div className="text-sm text-zinc-400 font-mono text-center mt-14">
        Fetching LeetCode stats...
      </div>
    );
  }

  return (
    <div className="transition-colors  duration-300 px-4 sm:px-6">

      {/* LeetCode Stats */}
      <CardWithLabel label="LeetCode Stats" theme="amber" highlight>
        <p className="text-sm text-black sm:text-base leading-relaxed mb-6">
          This section tracks my <strong>LeetCode problem-solving journey</strong>.
          It reflects consistency, logical thinking, and progress across
          data structures, algorithms, and competitive programming challenges.
          I actively use LeetCode to sharpen problem-solving skills and
          prepare for technical interviews.
        </p>

        <div className="space-y-2 text-sm sm:text-base">
          <p>
            <span className="text-zinc-600">User:</span>{" "}
            <span className="font-semibold text-black">{username}</span>
          </p>

          <p>
            <span className="text-zinc-600">Global Rank:</span>{" "}
            <span className="font-semibold text-black">{data.ranking}</span>
          </p>

          <p>
            <span className="text-zinc-600">Total Solved:</span>{" "}
            <span className="text-emerald-600 font-semibold">
              {data.totalSolved}
            </span>
          </p>
        </div>

        <div className="mt-6">
          <a
            href={`https://leetcode.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              text-sm font-mono
              underline underline-offset-4
              hover:text-amber-700
              text-black
            "
          >
            View LeetCode Profile →
          </a>
        </div>
      </CardWithLabel>

      {/* Dev Logs Heading */}
      <div className="text-center mt-20">
        <p className="text-lg sm:text-xl font-mono">
          Dev - Logs
        </p>
      </div>

      {/* Dev Logs */}
      {DevLogs.filter(log => log.category === "leetcode").map(log => (
        <CardWithLabel
          key={log.id}
          label={log.date}
          theme="blue"
        >
          <p className="text-sm sm:text-base mb-6">
            {log.title}
          </p>

          <Link to={log.path}>
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

      <div>
        <p>Please Hit the Like Button</p>
        {/* Like Button */}
        <p>if you like my work/blog</p>
        <p>It Keeps me motivated</p>
      </div>


    </div>
  );
}
