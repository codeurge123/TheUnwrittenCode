import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {

    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

    return (
        <div className="
            bg-blue-600
            min-h-16
            px-4
            flex
            flex-col sm:flex-row
            items-center
            justify-center sm:justify-around
            gap-2 sm:gap-0
        ">
            <p className="
                text-white
                text-xl sm:text-2xl
                font-mono
                font-normal
            ">
                <NavLink to="/"
                onClick={scrollToTop}
                >
                    The Unwritten Code
                </NavLink>
            </p>

            <div className="
                text-white
                font-extralight
                font-mono
                space-x-2 sm:space-x-3
                text-sm sm:text-base
                flex
            ">
                <NavLink to="/"
                onClick={scrollToTop}
                >
                    <span className="text-lg sm:text-xl">[</span>
                    <span className="border-b-1 text-md border-white hover:border-b-2 hover:border-yellow-500 transition-all duration-150">
                        Home
                    </span>
                    <span className="text-lg sm:text-xl">]</span>
                </NavLink>

                <NavLink to="/github"
                onClick={scrollToTop}
                >
                    <span className="text-lg sm:text-xl">[</span>
                    <span className="border-b-1 text-md border-white hover:border-b-2 hover:border-yellow-500 transition-all duration-150">
                        GitHub
                    </span>
                    <span className="text-lg sm:text-xl">]</span>
                </NavLink>

                <NavLink to="/leetcode"
                onClick={scrollToTop}
                >
                    <span className="text-lg sm:text-xl">[</span>
                    <span className="border-b-1 text-md border-white hover:border-b-2 hover:border-yellow-500">
                        Leetcode
                    </span>
                    <span className="text-lg sm:text-xl">]</span>
                </NavLink>
                <NavLink to="/create"
                onClick={scrollToTop}
                >
                    <span className="text-lg sm:text-xl">[</span>
                    <span className="border-b-1 text-md border-white hover:border-b-2 hover:border-yellow-500">
                        Create
                    </span>
                    <span className="text-lg sm:text-xl">]</span>
                </NavLink>
            </div>
        </div>
    );
}
