import PostsList from "@/components/Posts/PostsList";

const DUMMY_POSTS = [
  {
    date: "2024-04-25",
    title: "Why React is Awesome",
    slug: "why-react-is-awesome",
  },
  {
    date: "2024-04-25",
    title: "Why React is Awesome",
    slug: "why-react-is-awesome2",
  },
  {
    date: "2024-04-25",
    title: "Why React is Awesome",
    slug: "why-react-is-awesome3",
  },
  {
    date: "2024-04-25",
    title: "Why React is Awesome",
    slug: "why-react-is-awesome4",
  },
];

export default function BlogPage() {
  return (
    <main>
      <h1>Blog</h1>
      <PostsList posts={DUMMY_POSTS} />
    </main>
  );
}
