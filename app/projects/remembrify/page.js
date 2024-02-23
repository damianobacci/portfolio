import ProjectHeader from "@/components/UI/ProjectHeader";
import ProjectFooter from "@/components/UI/ProjectFooter";
import OutlineButton from "@/components/UI/OutlineButton";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Image from "next/image";

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
      <Image
        src="/images/projects/remembrify.jpg"
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
          marginBottom: "0.5em",
          marginTop: "1em",
        }}
      />
      <h2 className="projectTitle">Project Purpose and Goal</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cum
        nisi quos vero reiciendis sint nihil quod, cupiditate autem, iure animi
        qui illo accusamus accusantium, voluptatibus magni ad architecto. Iusto?
      </p>
      <Image
        src="/images/projects/remembrify.jpg"
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
          marginBottom: "0.5em",
          marginTop: "1em",
        }}
      />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cum
        nisi quos vero reiciendis sint nihil quod, cupiditate autem, iure animi
        qui illo accusamus accusantium, voluptatibus magni ad architecto. Iusto?
      </p>
      <h2 className="projectTitle">Problems and Thought Process</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cum
        nisi quos vero reiciendis sint nihil quod, cupiditate autem, iure animi
        qui illo accusamus accusantium, voluptatibus magni ad architecto. Iusto?
      </p>
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
