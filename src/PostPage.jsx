import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";

export function PostPage() {
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

  return (
    <main>

      <PostsNew />

      <PostsIndex name={name} posts={posts} />

    </main>

  );
}
