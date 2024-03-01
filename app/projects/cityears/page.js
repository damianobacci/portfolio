import ProjectHeader from "@/components/UI/ProjectHeader";
import ProjectImage from "@/components/UI/ProjectImage";
import ProjectFooter from "@/components/UI/ProjectFooter";
import OutlineButton from "@/components/UI/OutlineButton";

export default function CityEars() {
  return (
    <main>
      <ProjectHeader
        title="CityEars"
        description="CityEars is a curated list of musical gigs in Italian cities built with Next.js. Contributors can ask for login access to add events, whose are fetched realtime from a MongoDB database using an API route."
      />
      <OutlineButton
        icon="code"
        link="https://github.com/damianobacci/cityears"
      >
        View Code (private repo)
      </OutlineButton>
      <OutlineButton icon="live" link="https://city-ears.vercel.app/">
        View Live
      </OutlineButton>
      <h2 className="projectTitle">Project Purpose and Goal</h2>
      <p className="projectParagraph">
        I always been amazed by minimalistic websites that gets the job done
        without fancy graphics or UI. When I first moved to London, one of my
        favourite websites was{" "}
        <a href="https://londonears.com/index.html">Londonears</a>, a list of
        gigs all around London presented in a very simple format: day, band,
        location, price, link.
      </p>
      <p className="projectParagraph">
        With CityEars I wanted to reproduce the same kind of layout, but
        benefitting from the modularity of Next.js ad MongoDB to have different
        cities and the ability to submit events by requesting access to a form.
      </p>
      <ProjectImage
        alt="Cityears"
        link="/images/projects/cityears/cityears.jpg"
      />
      <p className="projectParagraph">
        For this project I wanted to try a challenge and do the styling with{" "}
        <a href="https://tailwindcss.com/">Tailwind CSS</a>, being my first
        attempt with it.
      </p>
      <h2 className="projectTitle">Problems and Thought Process</h2>
      <p className="projectParagraph">
        One of the main challenges so far has been managing the validation logic
        for the Add Event form, I am planning the use the{" "}
        <a href="https://formik.org/">Formik</a> library to avoid writing the
        validation logic all by myself for every input.
      </p>
      <ProjectImage
        alt="Cityears"
        link="/images/projects/cityears/cityears2.jpg"
      />
      <ProjectFooter />
    </main>
  );
}
