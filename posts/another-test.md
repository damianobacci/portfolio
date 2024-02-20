---
title: "This is a test file"
date: "2024-05-30"
---

Test

Asd

![Alt](test.png)

```js
import PostsList from "@/components/Posts/PostsList";
import { getAllPosts } from "@/lib/posts-util";

export default function BlogPage() {
  const allPosts = getAllPosts();
  return (
    <main>
      <h1>Blog</h1>
      <PostsList posts={allPosts} />
    </main>
  );
}
```

```c
#include <stdio.h>
int main()
{
   printf("Welcome to Little Cave Adventure.\n");
   printf("It is very dark in here.\n");
   printf("\nBye!\n");
   return 0;
}
```
