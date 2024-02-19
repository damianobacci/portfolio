import Hero from "@/components/Hero";
import ProjectBox from "@/components/Projects/ProjectBox";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />
      <section>
        <h2 className="title">Featured Projects</h2>
        <ProjectBox
          title="Remembrify"
          description="asd"
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
        <Link href="/projects">View all projects</Link>
      </section>
      <section>
        <h2 className="title">Blog</h2>
        <div>
          <p>April 24th, 2024</p>
          <Link href="/blog">
            <h3> Why React is Awesome</h3>
          </Link>
        </div>
        <div>
          <p>April 24th, 2024</p>
          <Link href="/blog">
            <h3> Why Remix Sucks</h3>
          </Link>
        </div>
        <Link href="/blog">View all posts</Link>
      </section>
    </main>
  );
}
