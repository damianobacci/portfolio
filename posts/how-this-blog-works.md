---
title: "How this blog works, and what is its purpose"
date: "2024-02-21"
---

When I started to develop my personal portfolio, I was somewhat startled at the idea of including a blog. Did I have time to write blog posts? Would I have anything interesting to say? What if I didn't update it for a long time?

However, I realized I was looking at blogging from the wrong perspective. Sure, a blog is meant for others to read, but it can also be incredibly beneficial for me. I can use blog posts as a way to dive deeper into various subjects, or to store notes from videos and books. I'm also planning to use blog posts to publish the countless exercises I've found in coding books, as a way to improve myself.

So, I created this very simple and lightweight blog. All posts are Markdown files, which are read from the _posts folder_ and then converted into HTML using [React Markdown](https://github.com/remarkjs/react-markdown). The YAML front-matter of every post is parsed with [gray-matter](https://www.npmjs.com/package/gray-matter), giving me direct control over the content of each post. Below is an example of the function used to parse all posts from the folder:

```js
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
}
```

The content is then funneled via props to the **<PostContent />** component, which then uses custom renderers to render code blocks and images, leveraging the **<Image/>** native component in Next.js. Below is an example of a custom renderer for the code blocks, using the [Prism Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter):

```js
(...)
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
(...)
code(code) {
      const { className, children } = code;
      const language = className.split("-")[1];
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
          wrapLongLines={true}
        />
      );
    },
```
