import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";

const Blogs = () => {
  const [blog, setblog] = useState();
  const sendRequest = async () => {
    const { data } = await axios
      .get("http://localhost:1000/api/blog")
      .catch((err) => console.log(err));
    const res = await data;
    return res;
  };
  useEffect(() => {
    const getBlog = async () => {
      const response = await sendRequest();
      if (response.val) {
        setblog(response.blog);
      }
    };
    getBlog();
  }, []);

  return (
    <div>
      {blog &&
        blog.map((data, index) => {
          return (
            <Blog
              id={data._id}
              key={index}
              data={data}
              isUser={localStorage.getItem("id") === data.user._id}
            />
          );
        })}
    </div>
  );
};

export default Blogs;
