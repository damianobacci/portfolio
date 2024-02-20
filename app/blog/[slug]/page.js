import PostContent from "@/components/Posts/PostDetails/PostContent";
import { getPostData } from "@/lib/posts-util";

export default function BlogPostPage({ params }) {
  const postData = getPostData(params.slug);
  return <PostContent post={postData} />;
}
