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

    const [create, setCreate] = React.useState(false);

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
                <NavLink to="/"
                    onClick={() => setCreate(true)}
                >
                    <span className="text-lg sm:text-xl">[</span>
                    <span className="border-b-1 text-md border-white hover:border-b-2 hover:border-yellow-500">
                        Create
                    </span>
                    <span className="text-lg sm:text-xl">]</span>
                </NavLink>
                {create && (
                    <div className="w-full h-screen border  border-yellow-400 bg-yellow-500 flex flex-col justify-center items-center space-y-6 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 scroll-none">
                        <div>
                            <h1 className="text-4xl text-center mb-10 selection:bg-transparent"><span>[</span>Create<span>]</span></h1>
                            <p className="text-xl text-center selection:bg-transparent">Coming soon...</p>
                        </div>
                        <button className="selection:bg-transparent" onClick={() => setCreate(false)}>
                            <span className="text-lg sm:text-xl">[</span>
                            <span className="border-b-2 text-md border-white hover:border-b-2 hover:border-blue-500">
                                Close
                            </span>
                            <span className="text-lg sm:text-xl">]</span>
                        </button>
                    </div>
                )}
            </div>
        </div>

    );
}


