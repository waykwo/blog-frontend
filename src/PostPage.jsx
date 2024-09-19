import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import axios from "axios";
import { useState } from "react";

export function PostPage() {
  const [posts, setPosts] = useState([]);

  const handleIndex = () => (
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response.data);
      setPosts(response.data);
    })
  )
  

  return (
    <main>
      <PostsNew />
      <PostsIndex name={name} posts={posts} />
      <button onClick={handleIndex}>Get the data</button>
    </main>

  );
}
