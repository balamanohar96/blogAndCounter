import React, { useState, useEffect } from "react";
import axios from "axios";
import "./blog.css";

function Blog() {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    const BlogResponse = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      let data=response.data;
      setResponse(data);
    };
    BlogResponse();
  }, []);
  return (
    <div className="container">
      <h2>BLOG POST</h2>
      {response.map((each, index) => {
        return (
          <div key={index}>
            <div className="hhhh">
              <h1 className="dataheader">{each.title}</h1>
              <p className="datapara">{each.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Blog;
