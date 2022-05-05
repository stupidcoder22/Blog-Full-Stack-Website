import Blog from "../models/Blog";
import User from "../models/User";
import mongoose from "mongoose";

export const getAllblogs = async (req, res, next) => {
  let blog;
  try {
    blog = await Blog.find();
  } catch (error) {
    console.log(error);
  }
  if (!blog) {
    return res.status(404).json({ message: "No Blog Found", val: false });
  }
  return res.status(200).json({ blog });
};

export const addBlog = async (req, res, next) => {
  const { title, description, image, user } = req.body;
  let existinguser;
  try {
    existinguser = await User.findById(user);
  } catch (error) {
    console.log(error);
  }
  if (!existinguser) {
    return res.status(400).json({ message: "Unable to find User by this id" });
  }
  const blog = await Blog({ title, description, image, user });
  try {
    await blog.save();
    existinguser.blogs.push(blog);
    existinguser.save();
    return res.status(200).json({ blog });
  } catch (error) {
    res.status(500).json({ message: error, val: false });
  }
  return res.status(200).json({ blog });
};

export const updateBlog = async (req, res, next) => {
  const { title, description } = req.body;
  const blogupdateId = req.params.id;
  let blog;
  try {
    blog = await Blog.findByIdAndUpdate(
      { _id: blogupdateId },
      { title, description },
      { new: true }
    );
    console.log(blog);
  } catch (error) {
    console.log(error);
  }
  if (!blog) {
    return res
      .status(500)
      .json({ message: "couldn't update the data", val: false });
  }
  return res.status(200).json({ blog });
};

export const deleteBlog = async (req, res, next) => {
  let blog;
  const blogdeleteId = req.params.id;
  try {
    blog = await Blog.findByIdAndDelete({ _id: blogdeleteId }).populate("user");
    await blog.user.blogs.pull(blog);
    blog.user.save();
  } catch (error) {
    console.log(error);
  }
  if (!blog) {
    res.status(500).json({ message: "couldn't delete", val: false });
  }

  return res
    .status(200)
    .json({ message: "blog successfully deleted", val: true });
};

export const getbyuserid = async (req, res, next) => {
  const userId = req.params.id;
  let userBlog;
  try {
    userBlog = await User.findById(userId).populate("blogs");
  } catch (error) {
    console.log(error);
  }
  if (!userBlog) {
    res.status(404).json({ message: "No blog found" });
  }
  return res.status(200).json({ message: userBlog });
};
