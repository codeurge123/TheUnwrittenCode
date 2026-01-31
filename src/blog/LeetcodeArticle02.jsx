import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function DSATracking() {
  const navigate = useNavigate();
  const [shift, setShift] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;

      // limit max shift so it doesn't go too far
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
    bg-neutral-100
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

      {/* Date */}
      <p className="text-sm text-zinc-400">
        23 December 2025
      </p>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl mt-6 font-semibold">
        How I Track My Daily DSA Practice
      </h1>

      {/* Content */}
      <p className="mt-8 leading-relaxed text-sm sm:text-base">
        Consistency is the hardest part of learning data structures and
        algorithms. Motivation fluctuates, but discipline creates progress.
        This article reflects how I track my practice without burnout.
      </p>

      <p className="mt-6 leading-relaxed text-sm sm:text-base">
        I don’t force myself to solve a fixed number of problems every day.
        Some days are about solving something new, others are about revisiting
        old mistakes and strengthening fundamentals.
      </p>

      <p className="mt-6 leading-relaxed text-sm sm:text-base">
        Tracking progress has helped me identify weak areas early and focus
        on understanding rather than speed. Over time, this habit has made
        problem-solving feel natural and sustainable.
      </p>
    </article>
  );
}
