import ProjectHeader from "@/components/UI/ProjectHeader";
import ProjectFooter from "@/components/UI/ProjectFooter";
import OutlineButton from "@/components/UI/OutlineButton";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import ProjectImage from "@/components/UI/ProjectImage";

export default function Remembrify() {
  // const code =
  //   'import fs from "fs";\nimport path from "path";\nimport matter from "gray-matter";\nconst postsDirectory = path.join(process.cwd(),"posts");';
  return (
    <main>
      <ProjectHeader
        title="Remembrify"
        description="Remembrify is a Single Page Application (SPA) made in React. The app allows you to set multiple reminders with a sound alarm, helping you to maintain your health routines while you are at your desk, without losing focus."
      />
      <OutlineButton
        icon="code"
        link="https://github.com/damianobacci/health-routines"
      >
        View Code
      </OutlineButton>
      <OutlineButton icon="live" link="https://health-routines.vercel.app/">
        View Live
      </OutlineButton>
      <ProjectImage alt="Remembrify" link="/images/projects/remembrify.jpg" />
      <h2 className="projectTitle">Project Purpose and Goal</h2>
      <p className="projectParagraph">
        While working at my desk, I am sometimes completely absorbed by the
        subject I am working on, browsing multiple StackOverflow discussions,
        trying different code snippets, testing, reading.
      </p>

      <p className="projectParagraph">
        But for the sake of your own health, there are some things you cannot
        forget to do: experts recommend getting up from your chair{" "}
        <a href="https://hr.umich.edu/benefits-wellness/health-well-being/mhealthy/faculty-staff-well-being/physical-activity/time-move#:~:text=Remember%20to%20move%20for%20approximately,helps%20us%20feel%20our%20best.">
          for approximately three minutes every 30-60 minutes
        </a>
        , <a>drinking water every one hour</a>, and in my case where I wear
        contact lenses, <a> keep my eyes hydrated every hour</a>.
      </p>
      <p className="projectParagraph">
        I tried to set alarms on my phone, but I ended up getting distracted by
        messages and notifications. How can I have a simple system of reminders
        that can be personalized on your needs?
      </p>
      <h2 className="projectTitle">Problems and Thought Process</h2>
      <p className="projectParagraph">
        I needed a set of countdowns very easy to set up, that could be added or
        deleted on the fly, and that could be controlled individually or
        together.
      </p>
      <ProjectImage alt="Remembrify" link="/images/projects/remembrify2.jpg" />
      <p className="projectParagraph">
        React was the immediate choice. I could simply write the logic for one
        component and reuse it over and over, the same with all the UI elements
        like buttons and counters. The app can be a simple browser tab open,
        running in the background of my work.
      </p>
      <ProjectImage alt="Remembrify" link="/images/projects/remembrify3.jpg" />
      <p className="projectParagraph">
        With the countdown logic done, I could program a fixed amount of them to
        suits my needs. But what if a different person was using the app? I
        decided to use the browser <a href="">LocalStorage</a> to store the data
        relative to the user's countdown, without relying on an external
        database. In this way I could keep the app lean, but with a very
        important feature.
      </p>
      {/* <SyntaxHighlighter
        style={atomDark}
        language="javascript"
        wrapLongLines="true"
      >
        {code}
      </SyntaxHighlighter> */}
      <h2 className="projectTitle">Lessons Learned</h2>
      <p className="projectParagraph">
        I had to provide some kind of validation logic in the "Add your
        countdown" component, to not rely on the built-in browser validation
        logic that could be easily bypassed. The validation logic handles the
        Change and the Blur events on the form inputs and it was rather
        cumbersome to write for a two-input form, a valuable lesson for when I
        will handle a longer form.
      </p>
      <p className="projectParagraph">
        Also, there are some limitations on having the app on a website. It
        could be a simple executable file to have on you computer. I will
        consider using <a href="https://www.electronjs.org/">Electron</a> for
        this in the future.
      </p>
      <ProjectFooter />
    </main>
  );
}
