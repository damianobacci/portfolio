import styles from "./OutlineButton.module.css";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MdReadMore } from "react-icons/md";
import { LuExternalLink } from "react-icons/lu";

export default function OutlineButton({ icon, children, link }) {
  return (
    <Link href={link}>
      <button className={styles.outline}>
        {children}
        {icon == "code" && <FaGithub className={styles.icon} />}
        {icon == "more" && <MdReadMore className={styles.icon} />}
        {icon == "live" && <LuExternalLink className={styles.icon} />}
      </button>
    </Link>
  );
}
