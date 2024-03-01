import styles from "./JobBox.module.css";
import Link from "next/link";

export default function JobBox({ date, link, place, job, description }) {
  return (
    <div className={styles.work}>
      <div className={styles.date}>{date}</div>
      <div className={styles.details}>
        <Link href={link}>{place}</Link>
        <p>
          <em>{job}</em>
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}
