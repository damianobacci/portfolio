import PostHeader from "./PostHeader";
import ReactMarkdow from "react-markdown";

const DUMMY_POST = {
  date: "2024-04-25",
  title: "Why React is Awesome",
  slug: "why-react-is-awesome",
  content: "* This is a first post in Markdown",
};

export default function PostContent() {
  return (
    <article>
      <PostHeader title={DUMMY_POST.title} date={DUMMY_POST.date} />
      <ReactMarkdow>{DUMMY_POST.content}</ReactMarkdow>
    </article>
  );
}
