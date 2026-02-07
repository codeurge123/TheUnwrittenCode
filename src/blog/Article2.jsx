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
    bg-neutral-100
    dark:bg-zinc-900
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
        SkinCureX: My Journey into AI-Powered Skin Analysis
      </h1>

      {/* Date */}
      <p className="mt-4 text-sm text-gray-500 dark:text-zinc-400">
        July 12, 2025
      </p>

      {/* Introduction */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        Introduction
      </h2>
      <p className="mt-4">
        SkinCureX is a project I started with the goal of exploring how artificial
        intelligence can be applied to healthcare in a practical and accessible
        way. Skin diseases are common, but early detection is often delayed due to
        lack of awareness or access to specialists.
      </p>
      <p className="mt-4">
        This project focuses on using machine learning to analyze skin images and
        provide an initial prediction that can help users decide whether medical
        attention is required.
      </p>

      {/* Why SkinCureX */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        Why SkinCureX?
      </h2>
      <p className="mt-4">
        While researching healthcare applications of AI, I noticed that many
        existing solutions are either complex, expensive, or inaccessible to
        common users. SkinCureX aims to bridge this gap by offering a simple and
        intuitive interface backed by a trained ML model.
      </p>
      <p className="mt-4">
        The idea is not to replace doctors, but to act as a preliminary screening
        tool that encourages early consultation and awareness.
      </p>

      {/* Tech Stack */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        Tech Stack
      </h2>
      <ol className="mt-4 list-decimal list-inside space-y-2">
        <li>
          <strong>Frontend:</strong> React.js, HTML, CSS
        </li>
        <li>
          <strong>Backend:</strong> Python, Flask
        </li>
        <li>
          <strong>Machine Learning:</strong> TensorFlow / Keras
        </li>
        <li>
          <strong>Image Processing:</strong> OpenCV
        </li>
        <li>
          <strong>Deployment & Tooling:</strong> GitHub
        </li>
      </ol>

      {/* Project Architecture */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        Project Architecture
      </h2>
      <p className="mt-4">
        SkinCureX follows a modular architecture where each layer has a clear
        responsibility. The frontend handles image upload and user interaction,
        while the backend processes requests and communicates with the trained
        machine learning model.
      </p>

      <ol className="mt-4 list-decimal list-inside space-y-2">
        <li>
          <strong>User Interface:</strong> Image upload and result display
        </li>
        <li>
          <strong>API Layer:</strong> Handles requests between frontend and model
        </li>
        <li>
          <strong>ML Model:</strong> Predicts skin disease class from image
        </li>
      </ol>

      {/* ML Workflow */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        Machine Learning Workflow
      </h2>
      <p className="mt-4">
        Images uploaded by the user are preprocessed to match the model’s input
        requirements. The trained model then analyzes features from the image and
        predicts the most likely skin condition.
      </p>
      <p className="mt-4">
        The prediction result is sent back to the frontend, where it is displayed
        in a clean and understandable format.
      </p>

      {/* GitHub */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        Source Code
      </h2>
      <p className="mt-4">
        The complete source code for SkinCureX is available on GitHub. The
        repository includes the frontend, backend, and model training logic.
      </p>
      <p className="mt-2">
        🔗{" "}
        <a
          href="https://github.com/codeurge123/SkinCureX"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold"
        >
          GitHub Repository – SkinCureX
        </a>
      </p>

      {/* Current Status */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        Current Status
      </h2>
      <p className="mt-4">
        SkinCureX is currently under active development. The focus is on improving
        model accuracy, expanding supported skin conditions, and enhancing the
        user interface for better usability.
      </p>

      {/* Future Scope */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        Future Scope
      </h2>
      <ol className="mt-4 list-decimal list-inside space-y-2">
        <li>Support for more skin disease categories</li>
        <li>Improved dataset and model accuracy</li>
        <li>User history and report tracking</li>
        <li>Mobile-friendly interface</li>
      </ol>

      {/* Closing */}
      <h2 className="mt-10 sm:mt-12 text-lg sm:text-xl font-semibold">
        Final Thoughts
      </h2>
      <p className="mt-4">
        SkinCureX has been a valuable learning experience that helped me combine
        frontend development, backend APIs, and machine learning into a single
        real-world application. Future articles will dive deeper into model
        training, challenges faced, and improvements made along the way.
      </p>
    </article>
  );
}
