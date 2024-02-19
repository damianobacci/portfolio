import Hero from "@/components/Hero";
import PostsList from "@/components/Posts/PostsList";
import ProjectBox from "@/components/Projects/ProjectBox";
import Link from "next/link";
import { Press_Start_2P } from "@next/font/google";

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

export default function Home() {
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
        <PostsList posts={DUMMY_POSTS} />
        <Link href="/blog">View all posts</Link>
      </section>
    </main>
  );
}
