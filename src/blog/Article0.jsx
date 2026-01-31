import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";

export default function Article0() {
  const navigate = useNavigate();
  const [shift, setShift] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      // limit max shift so it doesn't go too far --> ye yaad rakhna hai accha sa
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
    bg-neutral-100
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
        style={{
          transform: `translateX(-${shift}px)`
        }}
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
        Article 0: Why I Started Writing This Blog
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
        This is not a tutorial. This is not a guide. This is just me, writing
        things down before I forget them.
      </p>
      <p className="mt-4">
        I realized that most of my learning happens in my head, inside random
        browser tabs, half-written notes, and broken projects. This blog is my
        attempt to give those thoughts a permanent place.
      </p>

      {/* Why This Blog */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        Why “The Unwritten Code”?
      </h2>
      <p className="mt-4">
        Every developer writes code. Very few write about <em>why</em> they wrote
        it. The mistakes, the confusion, the weird hacks — those parts usually
        remain unwritten.
      </p>
      <p className="mt-4">
        This blog is about those parts. The thinking that happens before the code
        works and after it breaks.
      </p>

      {/* What to Expect */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        What You’ll Find Here
      </h2>
      <p className="mt-4">
        Don’t expect polished articles every time. Expect dev logs, experiments,
        half-ideas, and lessons learned the hard way.
      </p>

      <ol className="mt-4 list-decimal list-inside space-y-2">
        <li>Project breakdowns (like CreatX)</li>
        <li>Things I struggled with and finally understood</li>
        <li>Bad ideas that somehow worked</li>
        <li>Good ideas that completely failed</li>
      </ol>

      {/* Writing Style */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        How I Write
      </h2>
      <p className="mt-4">
        I write in simple language, mostly for myself. If future-me can
        understand it, present-me did a good job.
      </p>
      <p className="mt-4">
        If someone else finds it useful — that’s a bonus.
      </p>

      {/* No Promises */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        No Big Promises
      </h2>
      <p className="mt-4">
        This blog won’t follow a strict schedule. Some weeks will have multiple
        posts, some months none.
      </p>
      <p className="mt-4">
        The only rule is this: if I build something interesting or learn
        something valuable, it probably ends up here.
      </p>

      {/* Closing */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        Bye-Bye!
      </h2>
      <p className="mt-4">
        This was Article 0 — a starting point. The next articles will be more
        technical, more detailed, and sometimes more chaotic.
      </p>
      <p className="mt-4">
        If you’re reading this, welcome aboard.
      </p>

      <p className="mt-6">
        ~ Yash Bansal
      </p>
    </article>
  );
}
