import styles from "./ProjectBox.module.css";
import OutlineButton from "../UI/OutlineButton";

export default function ProjectBox() {
  return (
    <div>
      <div>
        <img></img>
      </div>
      <div>
        <h3>Title</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure maiores
          aperiam nesciunt officiis ex beatae consectetur odit tempore?
        </p>
        <OutlineButton link="/test">Read More</OutlineButton>
        <button>View Live</button>
        <button>View Code</button>
      </div>
    </div>
  );
}
