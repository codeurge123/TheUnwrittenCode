import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function LeetcodeArticle01() {
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
    bg-neutral-100
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

            {/* Date */}
            <p className="text-sm text-zinc-400">
                24 December 2025
            </p>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl mt-6 font-semibold">
                Solving LeetCode with a Clear Mindset
            </h1>

            {/* Content */}
            <p className="mt-8 leading-relaxed text-sm sm:text-base">
                When I first started solving LeetCode problems, my focus was purely
                on getting accepted solutions. Over time, I realized that rushing
                toward acceptance often led to shallow understanding and fragile logic.
            </p>

            <p className="mt-6 leading-relaxed text-sm sm:text-base">
                I now approach problems by slowing down. I try to understand constraints,
                think through edge cases, and reason about why a solution works before
                writing code. This mindset has helped me write cleaner and more reliable
                solutions.
            </p>

            <p className="mt-6 leading-relaxed text-sm sm:text-base">
                LeetCode has taught me that clarity beats speed. Calm reasoning,
                pattern recognition, and structured thinking matter far more than
                rushing toward results.
            </p>
        </article>
    );
}
