import ProjectHeader from "@/components/UI/ProjectHeader";
import ProjectImage from "@/components/UI/ProjectImage";
import ProjectFooter from "@/components/UI/ProjectFooter";
import OutlineButton from "@/components/UI/OutlineButton";

export default function QuoteKeeper() {
  return (
    <main>
      <ProjectHeader
        title="Quote Keeper"
        description="Quote Keeper is a Google Chrome extension to save your quotes while you are browsing the news. It's designed to help journalists as an 'in-browser' database to store and quickly retrieve informations."
      />
      <OutlineButton
        icon="code"
        link="https://github.com/damianobacci/quote-keeper"
      >
        View Code
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
      <h2 className="projectTitle">Lessons Learned</h2>
      <p className="projectParagraph">
        As my first mobile project, the biggest take home lesson is the
        difference between Android and iOS development, and how I must take into
        account both version while building with React Native (and how it's
        impossible to test the iOS version without Apple devices).
      </p>
      <ProjectFooter />
    </main>
  );
}
