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
      <p className="projectParagraph">
        I used Mapbox{" "}
        <a href="https://docs.mapbox.com/api/maps/static-images/">
          Static Images API
        </a>{" "}
        to generate a preview of the location, as well as their{" "}
        <a href="https://docs.mapbox.com/api/search/geocoding/">
          Geocoding API
        </a>{" "}
        to get an address based on a location.
      </p>
      <p className="projectParagraph">
        The data can then be sent to a specific backend (in my case{" "}
        <a href="https://firebase.google.com/docs/database">
          Firebase Realtime Database
        </a>
        ) using Axios, or it can be used to generate a tweet with the targeted
        garbage collection authority (in my case, I am tagging the one in Milan,{" "}
        <a href="https://twitter.com/amsa_spa/with_replies">AMSA</a>)
      </p>
      <MobileImage
        alt="Ecowatcher"
        source="/images/projects/ecowatcher/ecowatcher6.jpg"
      />
      <h2 className="projectTitle">Lessons Learned</h2>
      <p className="projectParagraph">
        As my first mobile project, the biggest take home lesson is the
        difference between Android and iOS development, and how I must take into
        account both version while building with React Native (and how it's
        impossible to test the iOS version without Apple devices).
      </p>
      <p className="projectParagraph">
        Mobile devices have also to manage different kind of permissions related
        to the use of the camera, the gallery, the location, and I had to build
        additional permission logic to handle those, as well as traditional
        validation logic for the form inputs and the database storing.
      </p>
      <p className="projectParagraph">
        Overall, React Native provides a smooth transition for developers
        already used to the React environment, greatly simplifying the
        development of mobile apps.
      </p>
      <MobileImage
        alt="Ecowatcher"
        source="/images/projects/ecowatcher/ecowatcher7.jpg"
      />
      <ProjectFooter />
    </main>
  );
}
