import React from "react";

const inlinePattern =
  /(!\[[^\]]*]\([^)]+\)|\[[^\]]+]\([^)]+\)|`[^`]+`|\*\*[^*]+\*\*|\*[^*]+\*)/g;

function renderInline(text, keyPrefix) {
  return text.split(inlinePattern).filter(Boolean)?.map((part, index) => {
    const key = `${keyPrefix}-${index}`;

    if (part.startsWith("![") && part.includes("](")) {
      const match = part.match(/^!\[([^\]]*)]\(([^)]+)\)$/);
      if (!match) return part;
      return (
        <img
          key={key}
          src={match[2]}
          alt={match[1]}
          className="my-5 w-full max-h-[460px] object-contain border-2 border-black dark:border-zinc-400 bg-white"
        />
      );
    }

    if (part.startsWith("[") && part.includes("](")) {
      const match = part.match(/^\[([^\]]+)]\(([^)]+)\)$/);
      if (!match) return part;
      return (
        <a
          key={key}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold text-blue-700 dark:text-blue-300"
        >
          {match[1]}
        </a>
      );
    }

    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={key}>{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={key}>{part.slice(1, -1)}</em>;
    }

    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={key} className="px-1 py-0.5 bg-zinc-200 dark:bg-zinc-700">
          {part.slice(1, -1)}
        </code>
      );
    }

    return part;
  });
}

export function renderMarkdown(markdown) {
  const lines = markdown.split("\n");
  const nodes = [];
  let listItems = [];
  let codeLines = [];
  let inCodeBlock = false;

  const flushList = () => {
    if (listItems.length === 0) return;
    const items = listItems;
    listItems = [];
    nodes.push(
      <ul key={`ul-${nodes.length}`} className="my-4 list-disc pl-6 space-y-2">
        {items.map((item, index) => (
          <li key={index}>{renderInline(item, `li-${nodes.length}-${index}`)}</li>
        ))}
      </ul>
    );
  };

  const flushCode = () => {
    nodes.push(
      <pre
        key={`code-${nodes.length}`}
        className="my-5 overflow-x-auto border-2 border-black dark:border-zinc-400 bg-zinc-950 text-zinc-100 p-4 text-sm"
      >
        <code>{codeLines.join("\n")}</code>
      </pre>
    );
    codeLines = [];
  };

  lines.forEach((line) => {
    if (line.trim().startsWith("```")) {
      if (inCodeBlock) {
        flushCode();
        inCodeBlock = false;
      } else {
        flushList();
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      return;
    }

    if (!line.trim()) {
      flushList();
      return;
    }

    if (line.startsWith("### ")) {
      flushList();
      nodes.push(
        <h3 key={`h3-${nodes.length}`} className="mt-8 text-lg font-semibold">
          {renderInline(line.slice(4), `h3-${nodes.length}`)}
        </h3>
      );
      return;
    }

    if (line.startsWith("## ")) {
      flushList();
      nodes.push(
        <h2 key={`h2-${nodes.length}`} className="mt-10 text-xl font-semibold">
          {renderInline(line.slice(3), `h2-${nodes.length}`)}
        </h2>
      );
      return;
    }

    if (line.startsWith("# ")) {
      flushList();
      nodes.push(
        <h1 key={`h1-${nodes.length}`} className="mt-10 text-3xl font-bold">
          {renderInline(line.slice(2), `h1-${nodes.length}`)}
        </h1>
      );
      return;
    }

    if (/^- /.test(line)) {
      listItems.push(line.slice(2));
      return;
    }

    flushList();
    nodes.push(
      <p key={`p-${nodes.length}`} className="mt-4 leading-8">
        {renderInline(line, `p-${nodes.length}`)}
      </p>
    );
  });

  if (inCodeBlock) flushCode();
  flushList();

  return nodes;
}
