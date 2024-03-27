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
        description="Remembrify is a Single Page Application (SPA) made in React + Typescript. The app allows you to set multiple reminders with a sound alarm, helping you to maintain your health routines while you are at your desk, without losing focus."
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
        While working at my desk, I often find myself deeply engrossed in the
        task at hand, navigating through multiple StackOverflow discussions,
        experimenting with various code snippets, and engaging in a cycle of
        testing and reading.
      </p>
      <p className="projectParagraph">
        However, it's crucial to remember that maintaining one's health requires
        regular breaks: experts suggest standing up{" "}
        <a href="https://hr.umich.edu/benefits-wellness/health-well-being/mhealthy/faculty-staff-well-being/physical-activity/time-move#:~:text=Remember%20to%20move%20for%20approximately,helps%20us%20feel%20our%20best.">
          for about three minutes every 30-60 minutes
        </a>
        ,{" "}
        <a href="https://www.universityhealth.com/blog/how-much-water-should-i-drink#:~:text=To%20avoid%20becoming%20dehydrated%2C%20it's,ll%20need%20to%20consume%20more.">
          drinking water hourly
        </a>
        , and for someone like me who wears contact lenses,{" "}
        <a href="https://www.healthline.com/health/shut-the-lid-on-chronic-dry-eye/computer-use">
          ensuring my eyes are hydrated consistently
        </a>
        .
      </p>
      <p className="projectParagraph">
        Setting alarms on my phone was my initial strategy, but this approach
        led to distractions due to incoming messages and notifications. I
        wondered, how could I implement a straightforward reminder system
        tailored to individual needs?
      </p>
      <h2 className="projectTitle">Problems and Thought Process</h2>
      <p className="projectParagraph">
        My primary requirement was a flexible countdown system: one that's
        simple to configure, allows for additions or deletions on the fly, and
        offers both individual and collective control.
      </p>
      <ProjectImage alt="Remembrify" link="/images/projects/remembrify2.jpg" />
      <p className="projectParagraph">
        React emerged as the obvious choice. It enabled me to develop a single
        component's logic and replicate it, along with UI elements such as
        buttons and counters. The application could run in a browser tab,
        quietly operating in the background during my work sessions.
      </p>
      <ProjectImage alt="Remembrify" link="/images/projects/remembrify3.jpg" />
      <p className="projectParagraph">
        After establishing the countdown mechanism, I could have a fixed amount
        of them to meet my personal needs. But what if a different person was
        using the app? Yet, considering potential diverse users prompted me to
        leverage browser{" "}
        <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">
          LocalStorage
        </a>{" "}
        for saving user-specific countdown data, circumventing the need for an
        external database. This decision maintained the app's simplicity while
        integrating a crucial customization feature.
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
        countdown" component. I managed the Change and Blur events for form
        inputs, and this proved to be a challenging yet informative experience,
        especially for a form with just two inputs, teaching me valuable lessons
        for managing more complex forms in the future.
      </p>
      <p className="projectParagraph">
        Moreover, hosting the app on a website introduced certain limitations.
        Ideally, a standalone executable file would enhance accessibility and
        convenience. Exploring{" "}
        <a href="https://www.electronjs.org/">Electron</a> as a solution for
        creating desktop applications from web technologies is something I plan
        to consider moving forward.
      </p>
      <p className="projectParagraph">
        The project was not originally designed with TypeScript integration in
        mind; however, I took the initiative to refactor it to utilize
        TypeScript. This decision was motivated by the desire to enhance type
        safety, incorporate custom types, and effectively manage event types
        within React, thereby elevating the project's code quality and
        maintainability.
      </p>
      <ProjectFooter />
    </main>
  );
}
