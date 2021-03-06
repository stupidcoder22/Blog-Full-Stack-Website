import express from "express";
import {
  addBlog,
  deleteBlog,
  getAllblogs,
  getbyid,
  getbyuserid,
  updateBlog,
} from "../controllers/blogcontroller.js";
const blogrouter = express.Router();

blogrouter.get("/", getAllblogs);
blogrouter.get("/:id", getbyid);
blogrouter.post("/add", addBlog);
blogrouter.put("/update/:id", updateBlog);
blogrouter.delete("/delete/:id", deleteBlog);
blogrouter.get("/user/:id", getbyuserid);

export default blogrouter;
