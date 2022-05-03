import express from "express";
import {
  addBlog,
  deleteBlog,
  getAllblogs,
  updateBlog,
} from "../controllers/blogcontroller";
const blogrouter = express.Router();

blogrouter.get("/", getAllblogs);
blogrouter.post("/add", addBlog);
blogrouter.put("/update/:id", updateBlog);
blogrouter.delete("/delete/:id", deleteBlog);

export default blogrouter;
