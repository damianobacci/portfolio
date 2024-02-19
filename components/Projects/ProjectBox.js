import styles from "./ProjectBox.module.css";
import OutlineButton from "../UI/OutlineButton";

export default function ProjectBox({ title, description, more, live, code }) {
  return (
    <div className={styles.container}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <OutlineButton link={more}>Read More</OutlineButton>
        {live && <OutlineButton link={live}>View Live</OutlineButton>}
        {code && <OutlineButton link={code}>View Code</OutlineButton>}
      </div>
    </div>
  );
}
