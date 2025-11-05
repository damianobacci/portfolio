import TextDivider from "@/components/UI/TextDivider";
import OutlineButton from "@/components/UI/OutlineButton";
import ContactList from "@/components/UI/ContactList";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <h1 className="title">ABOUT</h1>
      <h3 className="projectTitle">A journalist turned software developer</h3>
      <p className="projectParagraph">
        If you are on this page, you are probably wondering who am I. The{" "}
        <a href="https://en.wikipedia.org/wiki/TL;DR">TL;DR</a> version is
        already in the title above, but keep reading if you are interested in
        the details.
      </p>
      <TextDivider />
      <p className="projectParagraph">
        I didn't arrive organically to coding, but rather with a series of
        circumstances: during my college studies I began to be interested in
        data journalism, a broad type of journalism which involves data
        analysis, visual representation of the data and interactive
        storytelling. Basically, a melting-pot of design, code and journalism.
      </p>
      <p className="projectParagraph">
        As my career progressed, I noticed that I was less interested in the
        actual storytelling, but rather much more into the technology. I started
        learning Python to do some scraping, understanding how the web works,
        using D3 for data visualization to get into the world of Javascript.
      </p>
      <TextDivider />
      <p className="projectParagraph">
        I have been coding full time for two years now, working mostly with JS/TS on the frontend (Vue.js) and backend (Node.js). I worked for companies ranging from the retail sector to the industrial IoT one. It made me appreciate more how deep the computer science rabbit hole is, teaching me to get to the bone of problems and learn as much as possible on the go. Check out my <Link href={"https://www.goodreads.com/user/show/31928098-damiano-bacci"}>Goodreads</Link> if you want to see what I am currently studying.
      </p>
      <OutlineButton icon="download" link="/cv_DamianoBacci.pdf">
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
