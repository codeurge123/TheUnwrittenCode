import React, { useState } from "react";

export default function Create() {
    const [form, setForm] = useState({
        title: "",
        description: "",
        content: "",
    });

    const [showToast, setShowToast] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);

        setShowToast(true);

        setTimeout(() => {
            setShowToast(false);
        }, 5000);
    };

    return (
        <div className="min-h-screen bg-[#f4f1e6] flex items-center justify-center p-6">
            <div className="w-full max-w-3xl border-4 border-black bg-white p-8 shadow-[8px_8px_0px_black]">

                {/* Heading */}
                <h1 className="text-3xl font-extrabold mb-6">Create Blog</h1>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Title */}
                    <div>
                        <label className="block font-semibold mb-2">Title</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Enter blog title"
                            value={form.title}
                            onChange={handleChange}
                            className="w-full p-3 border-2 border-black shadow-[4px_4px_0px_black] outline-none"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block font-semibold mb-2">Description</label>
                        <input
                            type="text"
                            name="description"
                            placeholder="Short description"
                            value={form.description}
                            onChange={handleChange}
                            className="w-full p-3 border-2 border-black shadow-[4px_4px_0px_black] outline-none"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <label className="block font-semibold mb-2">Content</label>
                        <textarea
                            name="content"
                            rows="6"
                            placeholder="Write your blog content..."
                            value={form.content}
                            onChange={handleChange}
                            className="w-full p-3 border-2 border-black shadow-[4px_4px_0px_black] outline-none resize-none"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="bg-yellow-400 px-6 py-3 font-bold border-2 border-black shadow-[4px_4px_0px_black] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                    >
                        Publish Blog →
                    </button>
                </form>
            </div>

            {/* Toast */}
            {showToast && (
                <div className="fixed bottom-6 right-6 z-50 animate-slideIn">
                    <div className="bg-white border-4 border-black px-6 py-4 shadow-[6px_6px_0px_black] max-w-sm">
                        <p className="font-bold text-lg">Coming Soon</p>
                        <p className="text-sm mt-1">
                            It is a raw implementation of the page final update on {" "}
                            <span className="font-semibold">30 April</span>
                        </p>
                    </div>
                </div>
            )}

            {/* Animation */}
            <style>
                {`
          @keyframes slideIn {
            from {
              transform: translateY(20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .animate-slideIn {
            animation: slideIn 0.3s ease-out;
          }
        `}
            </style>
        </div>
    );
}