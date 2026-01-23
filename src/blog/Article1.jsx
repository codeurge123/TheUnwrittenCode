import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Article() {
  const navigate = useNavigate();
  const [shift, setShift] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const maxShift = 100;
      setShift(Math.min(y / 5, maxShift));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <article
      className="
    relative
    max-w-4xl mx-auto
    px-4 sm:px-6
    py-12 sm:py-16
    font-mono
    text-gray-900 dark:text-zinc-100
    transition-colors duration-300
    text-justify
  "
    >
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        style={{ transform: `translateX(-${shift}px)` }}
        className="
          sticky top-4
          inline-flex items-center
          mb-8
          border-2 px-3 py-1
          text-sm sm:text-base
          rounded-md
          font-mono
          transition-all duration-300 ease-out
          hover:bg-black hover:text-white
          dark:hover:bg-white dark:hover:text-black
        "
      >
        ← Back
      </button>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
        CreatX: Building My First Interactive UI Playground
      </h1>

      {/* Date */}
      <p className="mt-4 text-sm text-gray-500 dark:text-zinc-400">
        December 26, 2025
      </p>

      {/* Introduction */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        Introduction
      </h2>
      <p className="mt-4">
        Over the past few weeks, I have been working on a project called{" "}
        <strong>CreatX</strong>. The motivation behind this project was simple —
        understanding UI animations is much easier when you can see and interact
        with them rather than just reading code.
      </p>
      <p className="mt-4">
        CreatX is designed as a playground where developers can explore
        animations, inspect their structure, and understand how HTML, CSS, and
        JavaScript work together to create smooth UI interactions.
      </p>

      {/* Why CreatX */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        Why CreatX?
      </h2>
      <p className="mt-4">
        While learning frontend development, I noticed that most animation
        resources either provide static snippets or overly complex setups.
        CreatX aims to solve this by offering live, interactive components that
        can be studied and modified in real time.
      </p>
      <p className="mt-4">
        Instead of copying code blindly, users can observe how animations behave,
        tweak values, and understand the reasoning behind each design decision.
      </p>

      {/* Architecture */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        Project Architecture
      </h2>
      <p className="mt-4">
        CreatX follows a simple card-based architecture. Each card represents a
        single UI animation or component and contains everything needed to render
        it.
      </p>

      <ol className="mt-4 list-decimal list-inside space-y-2">
        <li><strong>HTML Structure:</strong> Defines the layout and elements</li>
        <li><strong>CSS Styling:</strong> Handles animations and transitions</li>
        <li><strong>JavaScript Logic:</strong> Adds interactivity</li>
      </ol>

      {/* Rendering Flow */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        Rendering Flow
      </h2>
      <p className="mt-4">
        When a user selects a card, CreatX dynamically injects the HTML into a
        preview container. The CSS is scoped so that it affects only the previewed
        component, and JavaScript is executed in a controlled environment.
      </p>

      {/* Code Visibility */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        Code Visibility & Learning
      </h2>
      <p className="mt-4">
        A core goal of CreatX is transparency. Alongside every live preview, the
        complete source code is displayed with syntax highlighting.
      </p>

      {/* Current Status */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        Current Status
      </h2>
      <p className="mt-4">
        CreatX is actively under development. New animations, improved previews,
        and better tooling are being added incrementally.
      </p>

      {/* Project Links */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        Project Links
      </h2>
      <p className="mt-4">
        You can explore the live version of CreatX or review the complete source
        code using the links below.
      </p>

      <div className="mt-4 space-y-2">
        <p>
          🔗{" "}
          <a
            href="https://github.com/codeurge123/Creatx"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold"
          >
            GitHub Repository
          </a>
        </p>
        <p>
          🚀{" "}
          <a
            href="https://creatxui.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold"
          >
            Live Demo
          </a>
        </p>
      </div>

      {/* Future Plans */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        The Future
      </h2>
      <ol className="mt-4 list-decimal list-inside space-y-2">
        <li>More advanced animation examples</li>
        <li>Customization controls</li>
        <li>Better performance & isolation</li>
        <li>Improved organization</li>
      </ol>

      {/* Closing */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        Bye-Bye!
      </h2>
      <p className="mt-4">
        Thanks for reading. All future articles will dive deeper into CreatX and
        the lessons learned while building it.
      </p>
    </article>
  );
}
