import Image from "next/image";
import styles from "./MobileImage.module.css";

export default function MobileImage({ source, alt }) {
  return (
    <div className={styles.container}>
      <Image alt={alt} src={source} width={350} height={600} />
    </div>
  );
}
