import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function CodeBlock({ children, lang }) {
  return (
    <div style={{ marginBottom: "1em" }}>
      <SyntaxHighlighter style={atomDark} language={lang} wrapLongLines={true}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
}
