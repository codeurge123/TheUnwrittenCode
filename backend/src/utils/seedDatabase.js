import { seedBlogs } from "../data/seedBlogs.js";
import { Blog } from "../models/Blog.js";

export async function seedDatabase() {
  const operations = seedBlogs.map((blog) => ({
    updateOne: {
      filter: { slug: blog.slug },
      update: { $setOnInsert: blog },
      upsert: true,
    },
  }));

  if (operations.length === 0) return;

  await Blog.bulkWrite(operations, { ordered: false });
}
