export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePost(params, () => event.target.reset());
  }
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label>Title:</label>
            <input type="text" name="title" />
          </li>
          <li>
            <label>Body:</label>
            <textarea id="msg" name="body"></textarea>
          </li>
          <li>
            <label>Image:</label>
            <input type="img" name="image" />
          </li>
        </ul>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
