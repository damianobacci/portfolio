import JobBox from "@/components/UI/JobBox";
import OutlineButton from "@/components/UI/OutlineButton";

export default function AboutPage() {
  return (
    <main>
      <h1 className="title">ABOUT</h1>
      <p className="projectParagraph">This is my story.</p>
      <OutlineButton icon="download" link="https://city-ears.vercel.app/">
        Download Resume
      </OutlineButton>
      {/* <h2>Full professional experience</h2>
      <JobBox
        date="Oct 2022 - Jun 2023"
        link="https://www.acaps.org/"
        place="ACAPS"
        job="Data Journalist"
        description="Asd"
      />
      <JobBox
        date="Nov 2018 - Sep 2022"
        link="https://www.datatalk.it/"
        place="Dalk"
        job="Data/Content Journalist"
        description="Asd"
      />
      <JobBox
        date="Nov 2018 - Sep 2022"
        link="https://www.datatalk.it/"
        place="Dalk"
        job="Data/Content Journalist"
        description="Asd"
      /> */}
    </main>
  );
}
