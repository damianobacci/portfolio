import Image from "next/image";

export default function ProjectImage(props) {
  <Image
    src={props.link}
    alt="Testo"
    width={0}
    height={0}
    sizes="100vw"
    style={{
      width: "100%",
      height: "auto",
      marginBottom: "0.5em",
      marginTop: "1em",
    }}
  />;
}
