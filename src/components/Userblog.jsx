import axios from "axios";
import React, { useEffect, useState } from "react";
import Blog from "./Blog";
const Userblog = () => {
  const id = localStorage.getItem("id");
  const [blog, setblog] = useState();
  const sendrequest = async () => {
    const resp = await axios.get(`http://localhost:1000/api/blog/user/${id}`);
    return resp.data;
  };
  useEffect(() => {
    const searchblog = async () => {
      const resp = await sendrequest();
      setblog(resp.message.blogs);
    };
    searchblog();
  }, []);
  console.log(blog);
  return (
    <div>
      {blog &&
        blog.map((data, index) => {
          {
            // console.log(data);
          }
          return <Blog key={index} data={data} isUser={true} />;
        })}
    </div>
  );
};

export default Userblog;
