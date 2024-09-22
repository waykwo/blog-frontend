export function PostsNew() {

  // export function PostsNew(props) {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const params = new FormData(event.target);
//     props.onCreatePost(params, () => event.target.reset());
//   }

return (
    <div id="posts-new">
      <h1>New post</h1>
      
      <form method="POST" action="http://localhost:3000/posts.json">
        <div>
          <div>
            <label>Title:</label>
            <input type="text" name="title" />
          </div>
          <div>
            <label>Body:</label>
            <textarea id="msg" name="body"></textarea>
          </div>
          <div>
            <label>Image:</label>
            <input type="img" name="image" />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>

      {/* <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label>Title:</label>
            <input type="text" name="title" />
          </div>
          <div>
            <label>Body:</label>
            <textarea id="msg" name="body"></textarea>
          </div>
          <div>
            <label>Image:</label>
            <input type="img" name="image" />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
}
