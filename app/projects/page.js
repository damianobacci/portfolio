import ProjectBox from "@/components/Projects/ProjectBox";

export default function ProjectsPage() {
  return (
    <main>
      <h1 className="title">All Projects</h1>
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
      <ProjectBox
        title="Three.js Windows 95 Maze"
        description="asd"
        more="/projects/quote-keeper"
        live="/"
        code="/"
      />
      <ProjectBox
        title="QuoteKeeper"
        description="asd"
        more="/projects/quote-keeper"
        live="/"
        code="/"
      />
      <ProjectBox
        title="The Legend of Yota"
        description="asd"
        more="/projects/quote-keeper"
        live="/"
        code="/"
      />
      <ProjectBox
        title="Javascript Rock, Paper & Scissors"
        description="asd"
        more="/projects/quote-keeper"
        live="/"
        code="/"
      />
    </main>
  );
}
