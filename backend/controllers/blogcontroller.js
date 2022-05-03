import Blog from "../models/Blog";

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
  const blog = await Blog({ title, description, image, user });
  try {
    await blog.save();
  } catch (error) {
    console.log(error);
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
    blog = await Blog.findByIdAndDelete({ _id: blogdeleteId });
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
