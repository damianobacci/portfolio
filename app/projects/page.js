import ProjectBox from "@/components/Projects/ProjectBox";

export const metadata = {
  title: "Complete list of projects",
  description:
    "A list of projects related to web development and programming, by Damiano Bacci",
};

export default function ProjectsPage() {
  return (
    <main>
      <h1 className="title">Projects & Experiments</h1>
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
      {/* <ProjectBox
        title="CityEars (under development)"
        description="CityEars is a curated list of musical gigs in Italian cities built with Next.js."
        more="/projects/cityears"
      /> */}
      <ProjectBox
        title="PHP ticket generator"
        description="A ticket generator in PHP to generate tickets from a SQLite database."
        more="/projects/php-ticket-generator"
      />
      <ProjectBox
        title="Quote Keeper"
        description="Quote Keeper is a Google Chrome extension to save your quotes while you are browsing the news."
        more="/projects/quote-keeper"
      />
      <ProjectBox
        title="Three.js Windows 95 Maze"
        description="A simplified reconstrunction of the popular Windows 3D maze, made in Three.js"
        more="/projects/threejs-win95-maze"
      />
      <ProjectBox
        title="Typescript Rock, Paper & Scissors"
        description="A Typescript rendition of the classic rock, paper and scissors game."
        more="/projects/js-rock-paper-scissors"
      />
      {/* <ProjectBox
        title="The Legend of Yota"
        description="The Legend of Yota is a text-based adventure game written in C, in the style of the great Infocom classics like Zork, Enchanter and Planetfall."
        more="/projects/the-legend-of-yota"
      /> */}
    </main>
  );
}
