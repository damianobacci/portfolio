import PostHeader from "./PostHeader";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Image from "next/image";

export default function PostContent({ post }) {
  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <div>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto", marginBottom: "1em" }}
            />
          </div>
        );
      }
      return <p className="projectParagraph">{paragraph.children}</p>;
    },
    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1];
      return (
        <div style={{ marginBottom: "1em" }}>
          <SyntaxHighlighter
            style={atomDark}
            language={language}
            wrapLongLines={true}
          >
            {children}
          </SyntaxHighlighter>
        </div>
      );
    },
  };
  return (
    <article>
      <PostHeader title={post.title} date={post.date} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}
