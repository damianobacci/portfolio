import Hero from "@/components/Hero";
import PostsList from "@/components/Posts/PostsList";
import ProjectBox from "@/components/Projects/ProjectBox";
import ContactList from "@/components/UI/ContactList";
import Splash from "@/components/Splash/Splash";
import { getLastThreePosts } from "@/lib/posts-util";
import Link from "next/link";

export default function Home() {
  const lastPosts = getLastThreePosts();

  return (
    <main>
      {/* <Splash /> */}
      <Hero />
      <section>
        <h2 className="title">Featured Projects</h2>
        <ProjectBox
          title="Remembrify"
          description="Remembrify is a SPA made in React + Typescript to mantain healthy routines while working."
          more="/projects/remembrify"
        />
        <ProjectBox
          title="EcoWatcher"
          description="EcoWatcher is a mobile app made in React Native to report litter in your city by simply snapping a photo."
          more="/projects/ecowatcher"
        />
        <ProjectBox
          title="CityEars (under development)"
          description="CityEars is a curated list of musical gigs in Italian cities built with Next.js."
          more="/projects/cityears"
        />
        <Link href="/projects">View all projects & experiments</Link>
      </section>
      <section>
        <h2 className="title">Blog</h2>
        <PostsList posts={lastPosts} />
        <Link href="/blog">View all posts</Link>
      </section>
      <section>
        <ContactList />
      </section>
    </main>
  );
}
