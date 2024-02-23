import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function GoBack({ children, link }) {
  return (
    <div style={{ marginTop: "1em", marginBottom: "1em" }}>
      <Link href={link}>
        <IoIosArrowRoundBack style={{ verticalAlign: "middle" }} />
        {children}
      </Link>
    </div>
  );
}
