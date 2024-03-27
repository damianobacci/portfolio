import ProjectHeader from "@/components/UI/ProjectHeader";
import ProjectImage from "@/components/UI/ProjectImage";
import ProjectFooter from "@/components/UI/ProjectFooter";
import OutlineButton from "@/components/UI/OutlineButton";

export default function JsRPS() {
  return (
    <main>
      <ProjectHeader
        title="Typescript Rock, Paper & Scissors"
        description="A Typescript rendition of the classic rock, paper and scissors game."
      />
      <OutlineButton
        icon="code"
        link="https://github.com/damianobacci/js-rock-paper-scissors"
      >
        View Code
      </OutlineButton>
      <OutlineButton
        icon="live"
        link="https://js-rock-paper-scissors-tau.vercel.app/"
      >
        View Live
      </OutlineButton>
      <h2 className="projectTitle">Project Purpose and Goal</h2>
      <p className="projectParagraph">
        To deepen my understanding of CSS, vanilla JavaScript, Typescript and
        browser APIs such as the DOM API, I created a simple rock, paper,
        scissors game with scoring tallies inspired by the one featured in{" "}
        <a href="https://threejs-journey.com/">Alex Kidd in Miracle World</a>{" "}
        for the Sega Master System.
      </p>
      <ProjectImage
        alt="Javascript Rock, Paper and Scissors"
        link="/images/projects/js-rps/js-rps.png"
      />
      <h2 className="projectTitle">Lessons Learned</h2>
      <p className="projectParagraph">
        Building a game entirely from scratch on the web involved a few steps.
        The game's logic is simple and straightforward, and employing vanilla
        JavaScript facilitates the addition of features with ease, along with
        Typescript for additional type safety.
      </p>
      <p className="projectParagraph">
        Currently, the program is somewhat basic. Ideally, it should declare a
        winner after a predetermined number of victories by either the player or
        the computer, and there's significant room for improvement in the user
        interface, such as a more apparent way to disable the move selection
        while a round is in progress.
      </p>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/rIfrf0ZX8Go?si=_6KA4Y-kYpsFDKpr"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <ProjectFooter />
    </main>
  );
}
