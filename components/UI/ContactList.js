import styles from "./ContactList.module.css";
import CopyButton from "./CopyButton";

import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaStackOverflow, FaGithub } from "react-icons/fa";

import Link from "next/link";

export default function ContactList() {
  return (
    <>
      <h2 className="title">Contact me</h2>
      <p className={styles.email}>
        Email me at
        <br />
        <Link href="mailto:damiano.bacci@gmail.com">
          damiano.bacci@gmail.com
        </Link>
        <CopyButton />
      </p>
      <ul className={styles.list}>
        <li>
          <Link href="https://github.com/damianobacci">
            <FaGithub size={35} />
          </Link>
        </li>

        <li>
          <Link href="https://www.linkedin.com/in/damianobacci/">
            <FaLinkedin size={35} />
          </Link>
        </li>

        <li>
          <Link href="https://twitter.com/DamianoBacci">
            <FaSquareXTwitter size={35} />
          </Link>
        </li>

        <li>
          <Link href="https://stackoverflow.com/users/7099458/damiano-bacci">
            <FaStackOverflow size={35} />
          </Link>
        </li>
      </ul>
    </>
  );
}
