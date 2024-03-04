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
        In my previous life as a journalist I used to collect quotes from
        various people while reading the news. A good quote is a very useful
        piece of information to display in an attractive way if you are building
        an interactive longform for example.
      </p>
      <p className="projectParagraph">
        But I found my Excel sheet to be quite heavy, that necessitates a lot of
        copy-pasting. I wanted to develop something easier that I could use
        directly in the browser, so why not a Chrome extension?
      </p>
      <ProjectImage
        alt="Quote Keeper"
        link="/images/projects/quote-keeper/quote-keeper.png"
      />
      <h2 className="projectTitle">Problems and Thought Process</h2>
      <p className="projectParagraph">
        Creating a{" "}
        <a href="https://developer.chrome.com/docs/extensions/get-started">
          Chrome extension
        </a>{" "}
        was totally new to me, and much to my surprise, I learned that are
        developed with the common everyday languages of the web: HTML, CSS and
        Javascript.
      </p>
      <p className="projectParagraph">
        My extension has a simple job: storing quotes that can be easily
        extracted from a webpage. First it basically creates an additional
        Context menu to trigger the text extraction, and it generates a simple
        form that it's injected onto the page, to save the data with additional
        informations like tags and authors.
      </p>
      <ProjectImage
        alt="Quote Keeper"
        link="/images/projects/quote-keeper/quote-keeper2.png"
      />
      <ProjectImage
        alt="Quote Keeper"
        link="/images/projects/quote-keeper/quote-keeper3.png"
      />
      <p className="projectParagraph">
        Instead of relying to a database, I use LocalStorage to store the
        quotes, which are then displayed in a simple table on different page,
        which I can navigate from the main extension popup.
      </p>
      <p className="projectParagraph">
        I use LocalStorage because this extension is designed to be like a
        temporary repository. I give the option to search for specific quotes,
        or to download them as a CSV.
      </p>
      <ProjectImage
        alt="Quote Keeper"
        link="/images/projects/quote-keeper/quote-keeper4.png"
      />
      <h2 className="projectTitle">Lessons Learned</h2>
      <p className="projectParagraph">
        Despite being made in HTML, CSS and JS, Chrome extensions have a
        specific syntax and a structure that must be followed to make them work.
        The biggest hurdle was getting used to this model, and required a narrow
        perusing of the documentation.
      </p>
      <p className="projectParagraph">
        However it opened a new realm of possibilities, to be able to create a
        simple but very specific product that can make a job easier, while
        staying in the browser environment.
      </p>
      <ProjectFooter />
    </main>
  );
}
