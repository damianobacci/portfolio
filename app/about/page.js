import TextDivider from "@/components/UI/TextDivider";
import OutlineButton from "@/components/UI/OutlineButton";
import ContactList from "@/components/UI/ContactList";

export default function AboutPage() {
  return (
    <main>
      <h1 className="title">ABOUT</h1>
      <h3 className="projectTitle">A journalist turned web developer</h3>
      <p className="projectParagraph">
        If you are in this page, you are probably wondering who am I. The{" "}
        <a href="https://en.wikipedia.org/wiki/TL;DR">TL;DR</a> version is
        already in the title above, but keep reading if you are interested in
        the details.
      </p>
      <p className="projectParagraph">
        I am somewhat of an "old" junior web developer. My first experience with
        web development was a simple website created in Microsoft Frontpage to
        record the tales of my group of high school friends, and it was a mess
        of static webpages that lasted more than it should have.
      </p>
      <TextDivider />
      <p className="projectParagraph">
        I didn't arrive organically to coding, but rather with a series of
        circumstances: during my college studies I began to be interested in
        data journalism, a broad type of journalism which involves data
        analysis, visual representation of the data, interactive storytelling.
        At the end, a melting-pot of design, code and journalism.
      </p>
      <p className="projectParagraph">
        As my career progressed, I noticed that I was less interested in the
        actual storytelling, but rather much more into the technology. I started
        learning Python to do some scraping, understanding how the web works,
        using D3 for data visualization to get into the world of Javascript.
      </p>
      <TextDivider />
      <p className="projectParagraph">
        I decided to embark full time in web development and computer
        programming. I am currently learning PHP and expanding my knowledge of
        Javascript, React and Next.js while building personal projects, but I
        also want to get a proper education in computer science, tackling the
        full{" "}
        <a href="https://github.com/ossu/computer-science">
          OSSU Computer Science curriculum
        </a>
        .
      </p>
      <OutlineButton icon="download" link="/cv-DamianoBacci.pdf">
        Download CV
      </OutlineButton>
      <ContactList />
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
      />*/}
    </main>
  );
}
