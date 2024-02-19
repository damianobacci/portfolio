import Link from "next/link";
import styles from "./PostItem.module.css";

export default function PostItem(props) {
  const { date, title, slug } = props.post;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const fullURL = `/blog/${slug}`;
  return (
    <li>
      <div className={styles.post}>
        <time>{formattedDate}</time>
        <Link href={fullURL}>
          <h3>{title}</h3>
        </Link>
      </div>
    </li>
  );
}
