import ProjectHeader from "@/components/UI/ProjectHeader";
import ProjectImage from "@/components/UI/ProjectImage";
import ProjectFooter from "@/components/UI/ProjectFooter";
import OutlineButton from "@/components/UI/OutlineButton";

export default function ThreeJSMaze() {
  return (
    <main>
      <ProjectHeader
        title="Three.js Windows 95 Maze"
        description="A simplified reconstrunction of the popular Windows 3D maze, made in Three.js"
      />
      <OutlineButton
        icon="code"
        link="https://github.com/damianobacci/threejs-win95-maze"
      >
        View Code
      </OutlineButton>
      <OutlineButton icon="live" link="https://threejs-win95-maze.vercel.app/">
        View Live
      </OutlineButton>
      <h2 className="projectTitle">Project Purpose and Goal</h2>
      <p className="projectParagraph">
        As part of my studies, I am doing{" "}
        <a href="https://threejs-journey.com/">
          Bruno Simon's Three.js Journey course
        </a>
      </p>
      <p className="projectParagraph">
        But I found my Excel sheet to be quite heavy, that necessitates a lot of
        copy-pasting. I wanted to develop something easier that I could use
        directly in the browser, so why not a Chrome extension?
      </p>
      <ProjectImage
        alt="Quote Keeper"
        link="/images/projects/quote-keeper/quote-keeper.png"
      />
      <h2 className="projectTitle">Lessons Learned</h2>
      <p className="projectParagraph">
        Despite being made in HTML, CSS and JS, Chrome extensions have a
        specific syntax and a structure that must be followed to make them work.
        The biggest hurdle was getting used to this model, and required a narrow
        perusing of the documentation.
      </p>
      <p className="projectParagraph">
        However it opened a new realm of possibilities, to be able to create a
        simple but very specific product that can make a job easier, while
        staying in the browser environment.
      </p>
      <ProjectFooter />
    </main>
  );
}
