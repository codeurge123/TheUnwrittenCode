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
        leading-relaxed
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
        Building My Own npm Package: From Idea to 800+ Downloads
      </h1>

      {/* Date */}
      <p className="mt-4 text-sm text-gray-500 dark:text-zinc-400">
        Dec 2025
      </p>

      {/* Introduction */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        Introduction
      </h2>
      <p className="mt-4">
        Creating my own npm package was one of the most rewarding milestones in my
        development journey. What started as a small utility to visualize coding
        consistency eventually became a publicly published package used by
        hundreds of developers.
      </p>
      <p className="mt-4">
        This article walks through my journey of building and publishing the
        <strong> Leetcode Heatmap </strong> npm package, which has currently crossed
        <strong> 800+ downloads</strong>.
      </p>

      {/* Motivation */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        Why I Built This Package
      </h2>
      <p className="mt-4">
        While practicing DSA on LeetCode, I wanted a clean and customizable way to
        visualize daily problem-solving consistency, similar to GitHub’s
        contribution graph. Existing solutions were either tightly coupled or not
        flexible enough for modern React projects.
      </p>
      <p className="mt-4">
        Instead of repeatedly solving the same UI problem, I decided to extract
        the logic into a reusable npm package that anyone could plug into their
        project.
      </p>

      {/* Tech Stack */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        Tech Stack
      </h2>
      <ol className="mt-4 list-decimal list-inside space-y-2">
        <li>
          <strong>Language:</strong> JavaScript
        </li>
        <li>
          <strong>Framework:</strong> React
        </li>
        <li>
          <strong>Package Manager:</strong> npm
        </li>
        <li>
          <strong>Tooling:</strong> Babel, Rollup
        </li>
        <li>
          <strong>Version Control:</strong> Git & GitHub
        </li>
      </ol>

      {/* Development Process */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        Development Process
      </h2>
      <p className="mt-4">
        The development started with defining a minimal API that could accept
        LeetCode submission data and render a heatmap without imposing strict UI
        constraints. I focused on keeping the package lightweight, dependency-free,
        and easy to integrate.
      </p>
      <p className="mt-4">
        Special attention was given to documentation, default props, and edge
        cases, as a public package must be intuitive even for first-time users.
      </p>

      {/* Publishing to npm */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        Publishing to npm
      </h2>
      <p className="mt-4">
        Publishing the package involved setting up proper build scripts, versioning,
        and ensuring that the compiled output worked across different environments.
        Writing a clear README was just as important as writing clean code.
      </p>
      <p className="mt-4">
        Once published, I actively monitored downloads, issues, and feedback to
        continuously improve the package.
      </p>

      {/* Impact */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        Impact & Adoption
      </h2>
      <p className="mt-4">
        Seeing the package cross <strong>800+ downloads</strong> was a huge
        confidence boost. It validated that the problem I was solving was real and
        that developers found value in my solution.
      </p>
      <p className="mt-4">
        This experience also taught me how small, well-crafted tools can have a
        meaningful impact in the developer ecosystem.
      </p>

      {/* GitHub */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        Source Code
      </h2>
      <p className="mt-4">
        The complete source code, documentation, and usage examples are available
        on GitHub.
      </p>
      <p className="mt-2">
        🔗{" "}
        <a
          href="https://github.com/codeurge123/npm-LeetcodeHeatMap"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold"
        >
          GitHub Repository – npm Leetcode Heatmap
        </a>
      </p>

      {/* Lessons Learned */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        Lessons Learned
      </h2>
      <ol className="mt-4 list-decimal list-inside space-y-2">
        <li>Writing code for others is very different from personal projects</li>
        <li>Good documentation increases adoption drastically</li>
        <li>Backward compatibility and versioning matter</li>
        <li>Feedback-driven development leads to better design</li>
      </ol>

      {/* Final Thoughts */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        Final Thoughts
      </h2>
      <p className="mt-4">
        Building and publishing my own npm package helped me grow as a developer,
        not just technically but also in terms of product thinking. This journey
        gave me confidence to create tools that others can rely on and use in
        real-world applications.
      </p>
    </article>
  );
}
