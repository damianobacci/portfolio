import Hero from "@/components/Hero";
import PostsList from "@/components/Posts/PostsList";
import ProjectBox from "@/components/Projects/ProjectBox";
import { getLastThreePosts } from "@/lib/posts-util";
import Link from "next/link";

export default function Home() {
  const lastPosts = getLastThreePosts();

  return (
    <main>
      <Hero />
      <section>
        <h2 className="title">Featured Projects</h2>
        <ProjectBox
          title="Remembrify"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
          more="/projects/remembrify"
          live="/"
          code="/"
        />
        <ProjectBox
          title="EcoWatcher"
          description="asd"
          more="/projects/ecowatcher"
          code="/"
        />
        <ProjectBox
          title="CityEars"
          description="asd"
          more="/projects/cityears"
          live="/"
          code="/"
        />
        <Link href="/projects">View all projects & experiments</Link>
      </section>
      <section>
        <h2 className="title">Blog</h2>
        <PostsList posts={lastPosts} />
        <Link href="/blog">View all posts</Link>
      </section>
    </main>
  );
}
