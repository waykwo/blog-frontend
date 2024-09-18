function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  )
}

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form action="/my-handling-form-page" method="post">
        <ul>
          <li>
            <label for="name">Title:</label>
            <input type="text" id="name" name="user_name" />
          </li>
          <li>
            <label for="msg">Body:</label>
            <textarea id="msg" name="user_message"></textarea>
          </li>
          <li>
            <label for="img">Image:</label>
            <input type="img" id="img" name="user_image" />
          </li>
        </ul>
        <button type="submit" href="/">Submit</button>
      </form>
    </div>
  )
}

function PostsIndex(props) {
  console.log("The props are", props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {/* <p>The name is {props.name}</p> */}
      {props.posts.map(post => (
          <div key={post.id}>
            <p>{post.id}</p>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <img src={post.image} />
          </div>
          // <div key={post.id}>
          //   <p>{post.id}</p>
          //   <h2>{post.title}</h2>
          //   <p></p>
          //   <img src="" />
          // </div>
      ))}
    </div>
  )
}


function Footer() {
  return (
    <footer>
      <p>Copyright 20XX</p>
    </footer>
  )
}

function PostPage() {
  let name = "Test";
  let posts = [
    {
      id: 1,
      title: "Post 1",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet nobis fuga est tenetur commodi veritatis atque iusto laboriosam rerum iste quos, voluptas labore quae quibusdam alias possimus debitis non fugit.",
      image: "https://th.bing.com/th/id/OIP.wwxK07x0Umfnh0l-nrjxjgHaDg?rs=1&pid=ImgDetMain",
    },
    {
      id: 2,
      title: "Post 2",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias debitis fugit, voluptate est sit quod ad repellat laborum id accusantium esse vero ea officia, optio commodi sunt qui placeat? Dolore!",
      image: "https://www.sommertage.com/wp-content/uploads/2022/09/Wilder-Kaiser-Astbergsee-1140x700.jpg",
    },
    {
      id: 3,
      title: "Post 3",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias debitis fugit, voluptate est sit quod ad repellat laborum id accusantium esse vero ea officia, optio commodi sunt qui placeat? Dolore!",
      image: "https://th.bing.com/th/id/OIP.PKfqOnjL_1h7NOJfE3OvkQHaE8?w=1920&h=1280&rs=1&pid=ImgDetMain",
    },
  ];

  return(
    <main>

      <PostsNew />
    
      <PostsIndex name={name} posts={posts} />

    </main>

  )
}

function App() {
  return (
    <div>

      <Header />

      <PostPage />

      <Footer />

    </div>
  );
}

export default App;












// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
