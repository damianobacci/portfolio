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
        As part of my studies, I embarked on{" "}
        <a href="https://threejs-journey.com/">
          Bruno Simon's Three.js Journey course
        </a>{" "}
        and was inspired to experiment with recreating a particular scene in 3D.
        My thoughts immediately turned to the iconic Windows 3D Maze, evoking a
        mix of nostalgia and frustration from the days of Windows 95. Why not
        attempt to recreate it?
      </p>
      <p className="projectParagraph">
        I discovered a repository containing the original textures. Armed with
        these and a trip-hop remix of the famous Windows 95 startup sound by
        Brian Eno, I began modeling a miniature version of the maze.
      </p>
      <ProjectImage
        alt="Three JS Windows 95 Maze"
        link="/images/projects/win95-maze/win95-maze.jpg"
      />
      <h2 className="projectTitle">Lessons Learned</h2>
      <p className="projectParagraph">
        To generate the maze, I placed objects in the scene "by hand" rather
        than programmatically, except for the outer walls of the maze, which
        were generated using a loop. This manual approach made the scene
        difficult to maintain, particularly if I needed to move a wall or expand
        the maze. Implementing one of the many{" "}
        <a href="https://en.wikipedia.org/wiki/Maze_generation_algorithm">
          algorithms for maze generations
        </a>{" "}
        would have made the project much more manageable.
      </p>
      <p className="projectParagraph">
        3D graphics projects can be quite challenging and time-consuming,
        especially when aiming for a higher level of complexity. In this case,
        the camera was fixed to simplify the project. However, incorporating a
        first-person shooter (FPS) style view would introduce additional
        complexities, such as adding wall collisions and potentially enabling
        interaction with various objects, like changing the ceiling's appearance
        when a floating geometry is touched.
      </p>
      <p className="projectParagraph">
        Overall, this project was an immensely interesting experience that has
        left me eager to explore more 3D projects, not just on the web but also
        in game development.
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/MHGnSqr9kK8?si=BSuGEtnUsX83fS-o"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <ProjectFooter />
    </main>
  );
}
