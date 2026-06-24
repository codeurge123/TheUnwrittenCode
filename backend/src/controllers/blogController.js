import { Blog } from "../models/Blog.js";
import { slugify } from "../utils/slug.js";

const createUniqueSlug = async (title) => {
  const baseSlug = slugify(title) || `blog-${Date.now()}`;
  let slug = baseSlug;
  let suffix = 1;

  while (await Blog.exists({ slug })) {
    slug = `${baseSlug}-${suffix}`;
    suffix += 1;
  }

  return slug;
};

export const getBlogs = async (req, res, next) => {
  try {
    const filter = req.query.category ? { category: req.query.category } : {};
    const blogs = await Blog.find(filter)
      .select("title slug description date category source createdAt")
      .sort({ createdAt: -1 });

    res.json({ success: true, data: blogs });
  } catch (error) {
    next(error);
  }
};

export const getBlogBySlug = async (req, res, next) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    res.json({ success: true, data: blog });
  } catch (error) {
    next(error);
  }
};

export const createBlog = async (req, res, next) => {
  try {
    const title = req.body.title?.trim();
    const content = req.body.content?.trim();

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Title and content are required",
      });
    }

    const blog = await Blog.create({
      title,
      content,
      slug: await createUniqueSlug(title),
      description: req.body.description?.trim() || "",
      date: req.body.date || new Date().toLocaleDateString("en-GB"),
      category: req.body.category || "general",
      images: Array.isArray(req.body.images) ? req.body.images : [],
      source: "user",
    });

    res.status(201).json({ success: true, data: blog });
  } catch (error) {
    next(error);
  }
};
