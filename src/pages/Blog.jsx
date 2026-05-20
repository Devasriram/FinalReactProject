import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then((response) => {
        setPosts(response.data);
      });
  }, []);

  return (
    <div className="page">
      <h1>Latest Blogs</h1>

      <div className="grid">
        {posts.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;