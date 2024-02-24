import styles from "./ProjectImage.module.css";
import Image from "next/image";

export default function ProjectImage({ link, alt }) {
  return (
    <div className={styles.imageWrapper}>
      <Image src={link} alt={alt} width={0} height={0} sizes="100vw" />
    </div>
  );
}
