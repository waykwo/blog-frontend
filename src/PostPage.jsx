import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";

export function PostPage() {
  const [posts, setPosts] = useState([]);
  const [IsPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const handleIndex = () => {
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response.data);
      setPosts(response.data);
    });
  };
  
  const handleShow = () => {
    setIsPostsShowVisible(true);
  };
    
  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <PostsNew />
      <PostsIndex posts={posts} onShow={handleShow} />
      <Modal show={IsPostsShowVisible} onClose={handleClose}>
        <p>TEST</p>
      </Modal>
      <button onClick={handleIndex}>Get the data</button>
    </main>

  );
}
