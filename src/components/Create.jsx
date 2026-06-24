import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../services/blogApi";
import { renderMarkdown } from "../utils/markdown.jsx";

const readFileAsDataUrl = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

export default function Create() {
  const navigate = useNavigate();
  const textareaRef = useRef(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "general",
    content: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const fieldClassName =
    "w-full p-3 border-2 border-black dark:border-zinc-300 bg-white dark:bg-zinc-900 focus:bg-transparent dark:focus:bg-transparent shadow-[4px_4px_0px_black] dark:shadow-[4px_4px_0px_#a1a1aa] outline-none";

  const updateContent = (nextContent, nextSelectionStart, nextSelectionEnd) => {
    setForm((currentForm) => ({ ...currentForm, content: nextContent }));

    requestAnimationFrame(() => {
      textareaRef.current?.focus();
      textareaRef.current?.setSelectionRange(nextSelectionStart, nextSelectionEnd);
    });
  };

  const insertMarkdown = (before, after = "", placeholder = "") => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const { selectionStart, selectionEnd } = textarea;
    const selectedText = form.content.slice(selectionStart, selectionEnd);
    const text = selectedText || placeholder;
    const insertion = `${before}${text}${after}`;
    const nextContent =
      form.content.slice(0, selectionStart) +
      insertion +
      form.content.slice(selectionEnd);

    const cursorStart = selectionStart + before.length;
    const cursorEnd = cursorStart + text.length;
    updateContent(nextContent, cursorStart, cursorEnd);
  };

  const insertBlock = (block) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const { selectionStart, selectionEnd } = textarea;
    const prefix =
      selectionStart > 0 && form.content[selectionStart - 1] !== "\n" ? "\n" : "";
    const suffix = selectionEnd < form.content.length ? "\n" : "";
    const insertion = `${prefix}${block}${suffix}`;
    const nextContent =
      form.content.slice(0, selectionStart) +
      insertion +
      form.content.slice(selectionEnd);

    const cursor = selectionStart + insertion.length;
    updateContent(nextContent, cursor, cursor);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleImageInsert = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please select an image file.");
      return;
    }

    try {
      const src = await readFileAsDataUrl(file);
      insertBlock(`![${file.name}](${src})`);
      setError("");
    } catch (uploadError) {
      console.error(uploadError);
      setError("Could not read the selected image. Please try again.");
    } finally {
      e.target.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const title = form.title.trim();
    const content = form.content.trim();

    if (!title || !content) {
      setError("Title and blog content are required.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const blog = await createBlog({
        title,
        description: form.description.trim(),
        category: form.category,
        content,
      });

      navigate(`/Article/${blog.slug}`);
    } catch (submitError) {
      setError(submitError.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f1e6] dark:bg-zinc-900 p-4 sm:p-6">
      <div className="mx-auto w-full max-w-6xl border-4 border-black dark:border-zinc-300 bg-white dark:bg-zinc-800 p-5 sm:p-8 shadow-[8px_8px_0px_black] dark:shadow-[8px_8px_0px_#a1a1aa] font-mono">
        <div className="mb-8">
          <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
            [ New Post ]
          </p>
          <h1 className="text-3xl font-extrabold">Create Blog</h1>
          <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
            Write in Markdown, preview the result, and publish it.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-5">
            <div>
              <label className="block font-semibold mb-2" htmlFor="title">
                Title
              </label>
              <input
                id="title"
                type="text"
                name="title"
                placeholder="Enter blog title"
                value={form.title}
                onChange={handleChange}
                className={fieldClassName}
              />
            </div>

            <div>
              <label className="block font-semibold mb-2" htmlFor="category">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={form.category}
                onChange={handleChange}
                className={fieldClassName}
              >
                <option value="general">General</option>
                <option value="github">GitHub</option>
                <option value="leetcode">Leetcode</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-2" htmlFor="description">
              Short Description
            </label>
            <input
              id="description"
              type="text"
              name="description"
              placeholder="Optional summary for the home page"
              value={form.description}
              onChange={handleChange}
              className={fieldClassName}
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 border-2 border-black dark:border-zinc-300 bg-amber-50 dark:bg-zinc-900 p-3">
            <button type="button" onClick={() => insertMarkdown("**", "**", "bold text")} className="px-3 py-2 border-2 border-black dark:border-zinc-300 bg-white dark:bg-zinc-800 font-bold">B</button>
            <button type="button" onClick={() => insertMarkdown("*", "*", "italic text")} className="px-3 py-2 border-2 border-black dark:border-zinc-300 bg-white dark:bg-zinc-800 italic">I</button>
            <button type="button" onClick={() => insertBlock("# Heading 1")} className="px-3 py-2 border-2 border-black dark:border-zinc-300 bg-white dark:bg-zinc-800">H1</button>
            <button type="button" onClick={() => insertBlock("## Heading 2")} className="px-3 py-2 border-2 border-black dark:border-zinc-300 bg-white dark:bg-zinc-800">H2</button>
            <button type="button" onClick={() => insertMarkdown("`", "`", "code")} className="px-3 py-2 border-2 border-black dark:border-zinc-300 bg-white dark:bg-zinc-800">Code</button>
            <button type="button" onClick={() => insertBlock("```\nconst message = \"hello\";\n```")} className="px-3 py-2 border-2 border-black dark:border-zinc-300 bg-white dark:bg-zinc-800">Code Block</button>
            <button type="button" onClick={() => insertBlock("- List item")} className="px-3 py-2 border-2 border-black dark:border-zinc-300 bg-white dark:bg-zinc-800">List</button>
            <label className="px-3 py-2 border-2 border-black dark:border-zinc-300 bg-white dark:bg-zinc-800 cursor-pointer">
              Image
              <input type="file" accept="image/*" onChange={handleImageInsert} className="hidden" />
            </label>
          </div>

          <div>
            <label className="block font-semibold mb-2" htmlFor="content">
              Blog
            </label>
            <textarea
              ref={textareaRef}
              id="content"
              name="content"
              rows="18"
              placeholder="Write here..."
              value={form.content}
              onChange={handleChange}
              className={`${fieldClassName} resize-y leading-7`}
            />
          </div>

          {error && (
            <div className="border-2 border-red-700 bg-red-50 text-red-800 px-4 py-3">
              {error}
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setIsPreviewOpen(true)}
              className="bg-white dark:bg-zinc-800 px-6 py-3 font-bold border-2 border-black dark:border-zinc-300 shadow-[4px_4px_0px_black] dark:shadow-[4px_4px_0px_#a1a1aa] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              Preview
            </button>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-yellow-400 disabled:bg-zinc-300 disabled:cursor-not-allowed px-6 py-3 font-bold border-2 border-black shadow-[4px_4px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
            >
              {isSubmitting ? "Publishing..." : "Publish Blog"}
            </button>
          </div>
        </form>
      </div>

      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-4xl max-h-[85vh] overflow-hidden border-4 border-black dark:border-zinc-300 bg-white dark:bg-zinc-900 shadow-[8px_8px_0px_black] dark:shadow-[8px_8px_0px_#a1a1aa] font-mono">
            <div className="flex items-center justify-between gap-4 border-b-2 border-black dark:border-zinc-300 p-4">
              <div>
                <p className="text-xs text-blue-700 dark:text-blue-300">
                  [ Preview ]
                </p>
                <h2 className="text-xl font-bold">
                  {form.title.trim() || "Untitled Blog"}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setIsPreviewOpen(false)}
                className="border-2 border-black dark:border-zinc-300 px-3 py-1 hover:bg-black hover:text-white dark:hover:bg-zinc-700"
              >
                Close
              </button>
            </div>

            <div className="max-h-[70vh] overflow-auto p-5 sm:p-7">
              {form.description.trim() && (
                <p className="mb-6 text-zinc-700 dark:text-zinc-300">
                  {form.description}
                </p>
              )}

              {form.content.trim() ? (
                renderMarkdown(form.content)
              ) : (
                <p className="text-zinc-500">
                  Write something in the Markdown field to preview it here.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
