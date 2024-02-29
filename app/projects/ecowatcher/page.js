import ProjectHeader from "@/components/UI/ProjectHeader";
import ProjectFooter from "@/components/UI/ProjectFooter";
import ProjectImage from "@/components/UI/ProjectImage";
import OutlineButton from "@/components/UI/OutlineButton";
import MobileImage from "@/components/UI/MobileImage";

export default function EcoWatcher() {
  return (
    <main>
      <ProjectHeader
        title="EcoWatcher"
        description="EcoWatcher is a mobile app made in React Native. You can report litter in your city by simply snapping a photo of the trash and sharing it to the local public administration."
      />
      <OutlineButton
        icon="code"
        link="https://github.com/damianobacci/ecowatcher"
      >
        View Code
      </OutlineButton>
      <h2 className="projectTitle">Project Purpose and Goal</h2>
      <p className="projectParagraph">
        Unfornutately, trash is a problem of many Italian cities. Some of the
        cities administration garbage collectors are accepting notifications to
        help abiding this problem. But notificaiton platforms are difficult to
        use, you have to log onto their website and provide tons of information.
        You can also signal them on Twitter (now X), but it lacks the ability
        in-app to pinpoint the exact location.
      </p>
      <MobileImage
        alt="Ecowatcher"
        source="/images/projects/ecowatcher/ecowatcher2.jpg"
      />
      <h2 className="projectTitle">Problems and Thought Process</h2>
      <p className="projectParagraph">
        I began thinking about a lightweight mobile app on mobile to essentially
        do three things: take a picture of the trash, attach relevant
        informations, like a description and a location, and either notify the
        infos to a backend or publish them on Twitter. choose React Native to
        leverage my knowledge of React and for its multi-platform approach.
      </p>
      <MobileImage
        alt="Ecowatcher"
        source="/images/projects/ecowatcher/ecowatcher5.jpg"
      />
      <h2 className="projectTitle">Lessons Learned</h2>
      <p className="projectParagraph">
        I had to provide some kind of validation logic in the "Add your
        countdown" component, to not rely on the built-in browser validation
        logic that could be easily bypassed. The validation logic handles the
        Change and the Blur events on the form inputs and it was rather
        cumbersome to write for a two-input form, a valuable lesson for when I
        will handle a longer form.
      </p>
      <ProjectFooter />
    </main>
  );
}
