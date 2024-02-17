import express from "express";

import {
  addPost,
  deletePost,
  getById,
  getByUserId,
  getPost,
  updatePost,
} from "../controllers/blog-controller.mjs";

const blogRouter = express.Router();

blogRouter.get("/", getPost);
blogRouter.post("/add", addPost);
blogRouter.put("/update/:id", updatePost);
blogRouter.get("/:id", getById);
blogRouter.delete("/:id", deletePost);
blogRouter.get("/users/:id", getByUserId);

export default blogRouter;
