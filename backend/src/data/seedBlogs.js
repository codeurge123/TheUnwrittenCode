export const seedBlogs = [
  {
    title: "Article 0: Why I Started Writing This Blog",
    slug: "blog0",
    description:
      "A starting note about why The Unwritten Code exists and what kind of writing belongs here.",
    date: "26/12/2025",
    category: "general",
    source: "seed",
    content: `## Introduction

This is not a tutorial. This is not a guide. This is just me, writing things down before I forget them.

I realized that most of my learning happens in my head, inside random browser tabs, half-written notes, and broken projects. This blog is my attempt to give those thoughts a permanent place.

## Why "The Unwritten Code"?

Every developer writes code. Very few write about *why* they wrote it. The mistakes, the confusion, the weird hacks - those parts usually remain unwritten.

This blog is about those parts. The thinking that happens before the code works and after it breaks.

## What You'll Find Here

Don't expect polished articles every time. Expect dev logs, experiments, half-ideas, and lessons learned the hard way.

- Project breakdowns like CreatX
- Things I struggled with and finally understood
- Bad ideas that somehow worked
- Good ideas that completely failed

## How I Write

I write in simple language, mostly for myself. If future-me can understand it, present-me did a good job.

If someone else finds it useful, that's a bonus.

## No Big Promises

This blog won't follow a strict schedule. Some weeks will have multiple posts, some months none.

The only rule is this: if I build something interesting or learn something valuable, it probably ends up here.

## Bye-Bye!

This was Article 0 - a starting point. The next articles will be more technical, more detailed, and sometimes more chaotic.

If you're reading this, welcome aboard.

~ Yash Bansal`,
  },
  {
    title: "CreatX: Building My First Interactive UI Playground",
    slug: "blog1",
    description:
      "How CreatX became an interactive playground for learning UI animations through live examples.",
    date: "26/12/2025",
    category: "github",
    source: "seed",
    content: `## Introduction

Over the past few weeks, I have been working on a project called **CreatX**. The motivation behind this project was simple - understanding UI animations is much easier when you can see and interact with them rather than just reading code.

CreatX is designed as a playground where developers can explore animations, inspect their structure, and understand how HTML, CSS, and JavaScript work together to create smooth UI interactions.

## Why CreatX?

While learning frontend development, I noticed that most animation resources either provide static snippets or overly complex setups. CreatX aims to solve this by offering live, interactive components that can be studied and modified in real time.

Instead of copying code blindly, users can observe how animations behave, tweak values, and understand the reasoning behind each design decision.

## Project Architecture

CreatX follows a simple card-based architecture. Each card represents a single UI animation or component and contains everything needed to render it.

- **HTML Structure:** Defines the layout and elements
- **CSS Styling:** Handles animations and transitions
- **JavaScript Logic:** Adds interactivity

## Rendering Flow

When a user selects a card, CreatX dynamically injects the HTML into a preview container. The CSS is scoped so that it affects only the previewed component, and JavaScript is executed in a controlled environment.

## Code Visibility & Learning

A core goal of CreatX is transparency. Alongside every live preview, the complete source code is displayed with syntax highlighting.

## Current Status

CreatX is actively under development. New animations, improved previews, and better tooling are being added incrementally.

## Project Links

[GitHub Repository](https://github.com/codeurge123/Creatx)

[Live Demo](https://creatxui.vercel.app)

## The Future

- More advanced animation examples
- Customization controls
- Better performance and isolation
- Improved organization

## Bye-Bye!

Thanks for reading. All future articles will dive deeper into CreatX and the lessons learned while building it.`,
  },
  {
    title: "Solving LeetCode with a Clear Mindset",
    slug: "leetcode01",
    description:
      "A short reflection on slowing down, understanding constraints, and choosing clarity over rushing.",
    date: "24/12/2025",
    category: "leetcode",
    source: "seed",
    content: `When I first started solving LeetCode problems, my focus was purely on getting accepted solutions. Over time, I realized that rushing toward acceptance often led to shallow understanding and fragile logic.

I now approach problems by slowing down. I try to understand constraints, think through edge cases, and reason about why a solution works before writing code. This mindset has helped me write cleaner and more reliable solutions.

LeetCode has taught me that clarity beats speed. Calm reasoning, pattern recognition, and structured thinking matter far more than rushing toward results.`,
  },
  {
    title: "How I Track My Daily DSA Practice",
    slug: "leetcode02",
    description:
      "How tracking practice helps identify weak areas without turning DSA into burnout.",
    date: "23/12/2025",
    category: "leetcode",
    source: "seed",
    content: `Consistency is the hardest part of learning data structures and algorithms. Motivation fluctuates, but discipline creates progress. This article reflects how I track my practice without burnout.

I don't force myself to solve a fixed number of problems every day. Some days are about solving something new, others are about revisiting old mistakes and strengthening fundamentals.

Tracking progress has helped me identify weak areas early and focus on understanding rather than speed. Over time, this habit has made problem-solving feel natural and sustainable.`,
  },
  {
    title: "SkinCureX: My Journey into AI-Powered Skin Analysis",
    slug: "blog2",
    description:
      "A project log about applying machine learning to skin-image analysis in a practical healthcare workflow.",
    date: "12/07/2025",
    category: "github",
    source: "seed",
    content: `## Introduction

SkinCureX is a project I started with the goal of exploring how artificial intelligence can be applied to healthcare in a practical and accessible way. Skin diseases are common, but early detection is often delayed due to lack of awareness or access to specialists.

This project focuses on using machine learning to analyze skin images and provide an initial prediction that can help users decide whether medical attention is required.

## Why SkinCureX?

While researching healthcare applications of AI, I noticed that many existing solutions are either complex, expensive, or inaccessible to common users. SkinCureX aims to bridge this gap by offering a simple and intuitive interface backed by a trained ML model.

The idea is not to replace doctors, but to act as a preliminary screening tool that encourages early consultation and awareness.

## Tech Stack

- **Frontend:** React.js, HTML, CSS
- **Backend:** Python, Flask
- **Machine Learning:** TensorFlow / Keras
- **Image Processing:** OpenCV
- **Deployment & Tooling:** GitHub

## Project Architecture

SkinCureX follows a modular architecture where each layer has a clear responsibility. The frontend handles image upload and user interaction, while the backend processes requests and communicates with the trained machine learning model.

- **User Interface:** Image upload and result display
- **API Layer:** Handles requests between frontend and model
- **ML Model:** Predicts skin disease class from image

## Machine Learning Workflow

Images uploaded by the user are preprocessed to match the model's input requirements. The trained model then analyzes features from the image and predicts the most likely skin condition.

The prediction result is sent back to the frontend, where it is displayed in a clean and understandable format.

## Source Code

The complete source code for SkinCureX is available on GitHub. The repository includes the frontend, backend, and model training logic.

[GitHub Repository - SkinCureX](https://github.com/codeurge123/SkinCureX)

## Current Status

SkinCureX is currently under active development. The focus is on improving model accuracy, expanding supported skin conditions, and enhancing the user interface for better usability.

## Future Scope

- Support for more skin disease categories
- Improved dataset and model accuracy
- User history and report tracking
- Mobile-friendly interface

## Final Thoughts

SkinCureX has been a valuable learning experience that helped me combine frontend development, backend APIs, and machine learning into a single real-world application. Future articles will dive deeper into model training, challenges faced, and improvements made along the way.`,
  },
  {
    title: "Building My Own npm Package: From Idea to 800+ Downloads",
    slug: "blog3",
    description:
      "The journey of building and publishing a reusable LeetCode heatmap package.",
    date: "27/12/2025",
    category: "github",
    source: "seed",
    content: `## Introduction

Creating my own npm package was one of the most rewarding milestones in my development journey. What started as a small utility to visualize coding consistency eventually became a publicly published package used by hundreds of developers.

This article walks through my journey of building and publishing the **Leetcode Heatmap** npm package, which has currently crossed **800+ downloads**.

## Why I Built This Package

While practicing DSA on LeetCode, I wanted a clean and customizable way to visualize daily problem-solving consistency, similar to GitHub's contribution graph. Existing solutions were either tightly coupled or not flexible enough for modern React projects.

Instead of repeatedly solving the same UI problem, I decided to extract the logic into a reusable npm package that anyone could plug into their project.

## Tech Stack

- **Language:** JavaScript
- **Framework:** React
- **Package Manager:** npm
- **Tooling:** Babel, Rollup
- **Version Control:** Git & GitHub

## Development Process

The development started with defining a minimal API that could accept LeetCode submission data and render a heatmap without imposing strict UI constraints. I focused on keeping the package lightweight, dependency-free, and easy to integrate.

Special attention was given to documentation, default props, and edge cases, as a public package must be intuitive even for first-time users.

## Publishing to npm

Publishing the package involved setting up proper build scripts, versioning, and ensuring that the compiled output worked across different environments. Writing a clear README was just as important as writing clean code.

Once published, I actively monitored downloads, issues, and feedback to continuously improve the package.

## Impact & Adoption

Seeing the package cross **800+ downloads** was a huge confidence boost. It validated that the problem I was solving was real and that developers found value in my solution.

This experience also taught me how small, well-crafted tools can have a meaningful impact in the developer ecosystem.

## Source Code

The complete source code, documentation, and usage examples are available on GitHub.

[GitHub Repository - npm Leetcode Heatmap](https://github.com/codeurge123/npm-LeetcodeHeatMap)

## Lessons Learned

- Writing code for others is very different from personal projects
- Good documentation increases adoption drastically
- Backward compatibility and versioning matter
- Feedback-driven development leads to better design

## Final Thoughts

Building and publishing my own npm package helped me grow as a developer, not just technically but also in terms of product thinking. This journey gave me confidence to create tools that others can rely on and use in real-world applications.`,
  },
];
