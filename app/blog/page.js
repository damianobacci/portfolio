import PostsList from "@/components/Posts/PostsList";
import { getAllPosts } from "@/lib/posts-util";

export default function BlogPage() {
  const allPosts = getAllPosts();
  return (
    <main>
      <h1 className="title">Blog</h1>
      <PostsList posts={allPosts} />
    </main>
  );
}
