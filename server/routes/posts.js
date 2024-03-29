import express from "express";

import {
  getPostsBySearch,
  getPosts,
  // getPost,
  createPost,
  updatePost,
  likePost,
  deletePost,
  deleteAllPosts,
} from "../controllers/posts.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/search", getPostsBySearch);
router.post("/", auth, createPost);
// router.get("/:id", getPost);
router.patch("/:id", auth, updatePost);
router.delete("/:id", auth, deletePost);
router.patch("/:id/likePost", auth, likePost);
router.delete("/posts/all", deleteAllPosts);

export default router;
