import styles from "./ProjectHeader.module.css";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import GoBack from "./GoBack";

export default function ProjectHeader({ title, description }) {
  return (
    <>
      <h1 className="title">{title}</h1>
      <GoBack link="/projects">Go back to the list of projects</GoBack>
      <p className={styles.description}>{description}</p>
    </>
  );
}
