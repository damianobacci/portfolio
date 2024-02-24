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
      <OutlineButton icon="code" link="">
        View Code
      </OutlineButton>
      <OutlineButton icon="live" link="">
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
      <p className="projectParagraph">But</p>
      {/* <SyntaxHighlighter
        style={atomDark}
        language="javascript"
        wrapLongLines="true"
      >
        {code}
      </SyntaxHighlighter> */}
      <h2 className="projectTitle">Lessons Learned</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cum
        nisi quos vero reiciendis sint nihil quod, cupiditate autem, iure animi
        qui illo accusamus accusantium, voluptatibus magni ad architecto. Iusto?
      </p>
      <ProjectFooter />
    </main>
  );
}
