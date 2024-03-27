import ProjectHeader from "@/components/UI/ProjectHeader";
import ProjectImage from "@/components/UI/ProjectImage";
import ProjectFooter from "@/components/UI/ProjectFooter";
import OutlineButton from "@/components/UI/OutlineButton";
import CodeBlock from "@/components/Projects/CodeBlock";

export default function PHPTicketGenerator() {
  return (
    <main>
      <ProjectHeader
        title="PHP Ticket Generator"
        description="A ticket generator in PHP to generate tickets with a QRCode from a SQLite database. You can add custom events and generate a simplified PDF version of the ticket."
      />
      <OutlineButton
        icon="code"
        link="https://github.com/damianobacci/php-ticket-generator"
      >
        View Code
      </OutlineButton>
      <h2 className="projectTitle">Project Purpose and Goal</h2>
      <p className="projectParagraph">
        As I am studying PHP, I started this project to learn about the
        capabilities of PHP in handling backend logic, database interactions,
        and server-side rendering of HTML content.
      </p>
      <ProjectImage
        alt="PHP Ticket Generator"
        link="/images/projects/php-ticket-generator/php-ticket-generator.png"
      />
      <p className="projectParagraph">
        I decided to use SQLite database for its simplicity, as I can initilize
        it with a simple function and run queries through the{" "}
        <a href="https://www.php.net/manual/en/book.pdo.php">PHP Data Object</a>{" "}
        (PDO), greatly simplyfing the process and showcasing PHP's versatility
        in managing data persistence and retrieval. There is also a page to add
        events and to list all of them, interacting in real-time with the
        database.
      </p>
      <p className="projectParagraph">
        Additionally, the integration of{" "}
        <a href="https://github.com/chillerlan/php-qrcode">
          QR code generation
        </a>{" "}
        and <a href="https://github.com/dompdf/dompdf">PDF rendering</a>{" "}
        highlighted PHP's ability to work seamlessly with third-party libraries
        and tools, thus expanding its utility beyond traditional web development
        practices.
      </p>
      <h2 className="projectTitle">Lessons Learned</h2>
      <p className="projectParagraph">
        Throughout the development of the ticket generator project, one of the
        key insights was the importance of effective data flow across different
        pages of the application, and how to render this data as dynamic
        content.
      </p>
      <ProjectImage
        alt="PHP Ticket Generator"
        link="/images/projects/php-ticket-generator/php-ticket-generator2.png"
      />
      <p className="projectParagraph">
        Without any kind of framework, I tried to put an emphasis on code
        reusability, creating a common.php lib file that featured different
        functions to create the PDO and fetch/add different kind of events on
        it. This project further reminds me the need to have a robust backend
        validation.
      </p>
      <ProjectFooter />
    </main>
  );
}
