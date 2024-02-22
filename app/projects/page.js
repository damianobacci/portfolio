import ProjectBox from "@/components/Projects/ProjectBox";

export default function ProjectsPage() {
  return (
    <main>
      <h1 className="title">All Projects</h1>
      <ProjectBox
        title="Remembrify"
        description="Remembrify is a Single Page Application (SPA) made in React. The app allows you to set multiple reminders with a sound alarm, helping you maintain your health routines while you are at your desk, without losing focus."
        more="/projects/remembrify"
      />
      <ProjectBox
        title="EcoWatcher"
        description="EcoWatcher is a mobile app made in React Native. You can report litter in your city by simply snapping a photo of the trash and sharing it to the local public administration."
        more="/projects/ecowatcher"
      />
      <ProjectBox
        title="CityEars"
        description="CityEars is a curated list of musical gigs in Italian cities built with Next.js. Contributors can ask for login access to add events, whose are fetched realtime from a MongoDB database using an API route."
        more="/projects/cityears"
      />
      <ProjectBox
        title="Quote Keeper"
        description="Quote Keeper is a Google Chrome extension to save your quotes while you are browsing the news. It's designed to help journalists as an 'in-browser' database to store and quickly retrieve informations."
        more="/projects/quote-keeper"
      />
      <ProjectBox
        title="Three.js Windows 95 Maze"
        description="This project made in Three.js is a simplified reconstrunction of the popular Windows 3D maze."
        more="/projects/quote-keeper"
      />
      <ProjectBox
        title="Javascript Rock, Paper & Scissors"
        description="A small Javascript rendition of the classic rock, paper and scissors game."
        more="/projects/quote-keeper"
      />
      <ProjectBox
        title="The Legend of Yota"
        description="The Legend of Yota is a text-based adventure game written in C, in the style of the great Infocom classics like Zork, Enchanter and Planetfall."
        more="/projects/quote-keeper"
      />
    </main>
  );
}
