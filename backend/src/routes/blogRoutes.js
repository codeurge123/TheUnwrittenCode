import { Router } from "express";
import {
  createBlog,
  getBlogBySlug,
  getBlogs,
} from "../controllers/blogController.js";

const router = Router();

router.route("/").get(getBlogs).post(createBlog);
router.route("/:slug").get(getBlogBySlug);

export default router;
