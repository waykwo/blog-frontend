import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";

export function PostPage() {
  const [posts, setPosts] = useState([]);
  const [IsPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState();

  const handleIndex = () => {
    axios.get("http://localhost:3000/posts.json").then(response => {
      // console.log(response.data);
      setPosts(response.data);
    });
  };

  const handleShowPost = () => {
    axios.get("http://localhost:3000/posts/1.json").then(response => {
      console.log(response.data);
      // setPosts(response.data);
    });
  };

  // const handleCreate = () => {
  //   axios.post("http://localhost:3000/posts.json", {
  //     title: 'An even even even better Test title from handleCreate',
  //     body: 'This is still still a test'
  //   }).then((response) => {
  //     console.log(response.data);
  //   });
  // };

  const handleCreate = (params) => {
    console.log('handling create');
    axios.post("http://localhost:3000/posts.json", params).then(response => {
      console.log(response.data);

      setPosts([...posts, response.data]) // copies the original array and then adds response.data
    });
  };

  // Brad's code:
  // const handleCreate = (params, successCallback) => {
  //   axios.post("http://localhost:3000/posts.json", params).then((response) => {
  //     console.log(response.data);
  //     setPosts([...posts, response.data]);
  //     successCallback();
  //   });
  // };


  
  const handleShow = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
    console.log(currentPost)
  };
    
  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  useEffect(handleIndex, []);

  return (
    <main>
      {/* <button onClick={handleIndex}>Get the data</button> */}
      <button onClick={handleShowPost}>Get 1 post</button>
      <button onClick={handleCreate}>Create</button>
      <PostsNew onCreate={handleCreate}/>
      <PostsIndex posts={posts} onShow={handleShow} />
      <Modal show={IsPostsShowVisible} onClose={handleClose}>
        {/* <h2>Title: {currentPost.title}</h2>
        <p>Body: {currentPost.body}</p> */}
      </Modal>
    </main>

  );
}
