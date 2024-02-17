import mongoose from "mongoose";
import Blog from "../models/Blog.mjs";
import User from "../models/User.mjs";

export const getPost = async (req, res, next) => {
  let allPost;
  try {
    allPost = await Blog.find();
  } catch (err) {
    return res.status(500).json({ message: "internal error" + err });
  }
  if (!allPost) {
    return res.status(404).json({ message: "Error 404 data not found!" });
  }
  return res.status(200).json({ allPost });
};

export const addPost = async (req, res, next) => {
  const { title, description, image, user } = req.body;
  let existingUser;
  try {
    existingUser = await User.findById(user);
  } catch (err) {
    return console.log(err);
  }
  if (!existingUser) {
    return res.status(404).json({ message: "Unable to find user by this ID" });
  }

  const blog = Blog({
    title,
    description,
    image,
    user,
  });
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await blog.save({ session });
    existingUser.blogs.push(blog);
    await existingUser.save({ session });
    await session.commitTransaction();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err });
  }
  return res.status(200).json({ blog });
};

export const updatePost = async (req, res, next) => {
  const { title, description } = req.body;
  const blogId = req.params.id;
  let blog;
  try {
    blog = await Blog.findByIdAndUpdate(blogId, {
      title,
      description,
    });
  } catch (err) {
    return console.log(err);
  }
  if (!blog) {
    return res
      .status(404)
      .json({ message: "Data cn't be update some problem" });
  }
  return res.status(200).json({ blog });
};

export const getById = async (req, res, next) => {
  const Id = req.params.id;
  let blog;
  try {
    blog = await Blog.findById(Id);
  } catch (err) {
    return console.log(err);
  }
  if (!blog) {
    return res.status(404).json({ message: "Post not found" });
  }
  return res.status(200).json({ blog });
};

export const deletePost = async (req, res, next) => {
  const id = req.params.id;
  let blog;

  try {
    blog = await Blog.findById(id).populate("user");
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Store the reference to the user
    const user = blog.user;

    // Delete the blog
    await Blog.findByIdAndDelete(id);

    // If the user exists, update their 'blogs' array
    if (user) {
      user.blogs.pull(id);
      await user.save();
    }
  } catch (err) {
    return console.log(err);
  }
  if (!blog) {
    return res.status(404).json({ message: "ID not found" });
  }
  return res.status(200).json({ message: "Post deleted successfully" });
};

export const getByUserId = async (req, res, next) => {
  const userId = req.params.id;
  let userBlogs;
  try {
    userBlogs = await User.findById(userId).populate("blogs");
  } catch (err) {
    return res.status(500).json({ message: err });
  }
  if (!userBlogs) {
    return res.status(404).json({ message: "User id not found" });
  }
  return res.status(200).json({ blogs: userBlogs });
};
