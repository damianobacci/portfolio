import PostItem from "./PostItem";
export default function PostsList({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}
