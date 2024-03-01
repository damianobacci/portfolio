import ProjectHeader from "@/components/UI/ProjectHeader";
import ProjectFooter from "@/components/UI/ProjectFooter";
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
        Unfortunately, trash is a significant issue in many Italian cities. Some
        city administrations and garbage collectors are open to receiving
        reports to help tackle this problem. However, their notification
        platforms can be cumbersome. You're required to log onto their website
        and submit a lot of information. Although it's possible to report via
        Twitter (now X), the app doesn't support precise location tagging.
      </p>
      <MobileImage
        alt="Ecowatcher"
        source="/images/projects/ecowatcher/ecowatcher2.jpg"
      />
      <h2 className="projectTitle">Problems and Thought Process</h2>
      <p className="projectParagraph">
        I contemplated creating a user-friendly mobile app designed to do three
        essential tasks: capture a photo of the trash, attach important details
        such as a description and location, and then either send this
        information to a backend system or post it on Twitter. I chose React
        Native for development because of my familiarity with React and its
        cross-platform capabilities.
      </p>
      <MobileImage
        alt="Ecowatcher"
        source="/images/projects/ecowatcher/ecowatcher5.jpg"
      />
      <p className="projectParagraph">
        For location services, I integrated Mapbox's{" "}
        <a href="https://docs.mapbox.com/api/maps/static-images/">
          Static Images API
        </a>{" "}
        to generate location previews, and their{" "}
        <a href="https://docs.mapbox.com/api/search/geocoding/">
          Geocoding API
        </a>{" "}
        to find addresses based on the location coordinates.
      </p>
      <p className="projectParagraph">
        The information can be transmitted to a dedicated backend (in my case,{" "}
        <a href="https://firebase.google.com/docs/database">
          Firebase Realtime Database
        </a>
        )using Axios. Alternatively, it can be formatted into a tweet, tagging
        the relevant garbage collection authority (for me, that's{" "}
        <a href="https://twitter.com/amsa_spa/with_replies">AMSA</a> in Milan).
      </p>
      <MobileImage
        alt="Ecowatcher"
        source="/images/projects/ecowatcher/ecowatcher6.jpg"
      />
      <h2 className="projectTitle">Lessons Learned</h2>
      <p className="projectParagraph">
        Embarking on this as my first mobile project, I learned about the
        distinct differences between Android and iOS development. It's crucial
        to consider both platforms when building with React Native, especially
        since testing the iOS version requires Apple devices.
      </p>
      <p className="projectParagraph">
        Managing permissions for the camera, gallery, and location services was
        another layer of complexity. I had to develop additional logic for
        permissions, as well as for validating form inputs and database storage.
      </p>
      <p className="projectParagraph">
        In summary, React Native offers an easy transition for developers
        familiar with the React ecosystem, significantly easing the development
        process for mobile applications.
      </p>
      <MobileImage
        alt="Ecowatcher"
        source="/images/projects/ecowatcher/ecowatcher7.jpg"
      />
      <ProjectFooter />
    </main>
  );
}
