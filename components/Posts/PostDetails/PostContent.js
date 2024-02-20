import PostHeader from "./PostHeader";
import ReactMarkdow from "react-markdown";

export default function PostContent({ post }) {
  return (
    <article>
      <PostHeader title={post.title} date={post.date} />
      <ReactMarkdow>{post.content}</ReactMarkdow>
    </article>
  );
}
