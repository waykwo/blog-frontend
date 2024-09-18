export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form action="/my-handling-form-page" method="post">
        <ul>
          <li>
            <label>Title:</label>
            <input type="text" id="name" name="user_name" />
          </li>
          <li>
            <label>Body:</label>
            <textarea id="msg" name="user_message"></textarea>
          </li>
          <li>
            <label>Image:</label>
            <input type="img" id="img" name="user_image" />
          </li>
        </ul>
        <button type="submit" href="/">Submit</button>
      </form>
    </div>
  );
}
