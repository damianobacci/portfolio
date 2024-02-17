import styles from "./OutlineButton.module.css";
import Link from "next/link";

export default function OutlineButton({ icon, children, link }) {
  return (
    <Link href={link}>
      <button className={styles.outline}>{children}</button>
    </Link>
  );
}
