import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";

export function PostPage() {
  const [posts, setPosts] = useState([]);

  const handleIndex = () => {
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response.data);
      setPosts(response.data);
    });
  };
  
  useEffect(handleIndex, []);

  return (
    <main>
      <PostsNew />
      <PostsIndex posts={posts} />
      <Modal show={true}>
        <p>TEST</p>
      </Modal>
      <button onClick={handleIndex}>Get the data</button>
    </main>

  );
}
