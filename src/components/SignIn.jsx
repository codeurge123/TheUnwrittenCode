import React from "react";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f1e6]">
      <div className="relative bg-white border-2 border-black rounded-xl shadow-[6px_6px_0px_black] p-8 w-[400px]">

        {/* Icon Circle */}
        <div className="absolute -top-6 -left-6 bg-yellow-400 border-2 border-black rounded-full w-14 h-14 flex items-center justify-center shadow-[3px_3px_0px_black]">
        
        </div>

        {/* Title */}
        <h1 className="text-3xl font-extrabold text-center mb-2">
          SIGN IN
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Enter your email to receive a magic link for instant access.
        </p>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block font-semibold mb-2">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full mb-2 p-3 border-2 border-black rounded-lg shadow-[4px_4px_0px_black] focus:shadow-none transition-all duration-200 focus:outline-none"
          />
          <label className="block font-semibold mb-2">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full p-3 border-2 border-black rounded-lg shadow-[4px_4px_0px_black] focus:shadow-none transition-all duration-200 focus:outline-none"
          />
        </div>

        {/* Button */}
        <button className="w-full bg-yellow-400 font-bold py-3 rounded-lg border-2 border-black shadow-[4px_4px_0px_black] active:shadow-[0px_0px_0px_black] hover:bg-yellow-500 hover:shadow-[6px_6px_0px_black] transition-all duration-150">
          Sign In
        </button>
      </div>
    </div>
  );
}