import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ["github", "leetcode", "general"],
      default: "general",
    },
    images: [
      {
        name: String,
        src: String,
      },
    ],
    source: {
      type: String,
      enum: ["seed", "user"],
      default: "user",
    },
  },
  { timestamps: true }
);

export const Blog = mongoose.model("Blog", blogSchema);
