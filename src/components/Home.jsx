import React from "react";
import { Link } from "react-router-dom";
import DevLogs from "../Logs.js";


function CardWithLabel({ label, theme = "amber", children }) {
  const themes = {
    amber: {
      labelBg: "bg-amber-300 dark:bg-amber-500",
      border: "border-amber-400 dark:border-zinc-600",
      cardBg: "bg-amber-100 dark:bg-zinc-800",
    },
    slate: {
      labelBg: "bg-slate-200 dark:bg-zinc-700",
      border: "border-slate-300 dark:border-zinc-600",
      cardBg: "bg-slate-100 dark:bg-zinc-800",
    },
    blue: {
      labelBg: "bg-blue-100 dark:bg-blue-900",
      border: "border-blue-500 dark:border-blue-400",
      cardBg: "bg-blue-50 dark:bg-zinc-800",
    },
  };

  const t = themes[theme];

  return (
    <div className="relative max-w-6xl mx-auto mt-14 px-2 sm:px-0">
      {/* Floating Label */}
      <span
        className={`
          absolute -top-4 left-4 sm:left-8
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


export default function Home() {
  return (
    <div className="transition-colors duration-300 px-4 sm:px-6">

      {/* Notice Board */}
      <CardWithLabel label="Notice Board" theme="amber">
        <p className="text-sm sm:text-base mb-8">
          This space is where I share updates about my learning journey,
          experiments, and code explorations. You’ll find short notes,
          progress logs, and insights from building projects, solving
          problems, and understanding concepts deeply.
          Consider this board as a public log of growth — raw, honest,
          and continuously evolving.
        </p>

        <Link to="/Article/blog0">
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

      {/* Welcome */}
      <CardWithLabel label="Welcome" theme="slate">
        <p className="text-sm sm:text-base mb-6">
          <span className="font-semibold block mb-2">
            Welcome to The Unwritten Code.
          </span>
          This blog is a personal space where I document my coding journey —
          from first principles to real-world projects. I write to clarify my
          own understanding and to help others who are learning along the way.
          Expect posts on problem-solving, web development, data structures,
          and lessons learned through building and breaking things.
        </p>

        <p>~ Yash Bansal</p>
      </CardWithLabel>

      {/* Dev Logs Heading */}
      <div className="text-center mt-20">
        <p className="text-lg sm:text-xl font-mono">
          Dev - Logs
        </p>
      </div>

      {/* Dev Logs Cards */}
      {DevLogs.map((log) => (
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
          to="https://github.com"
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
