import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function PostHeader({ title, date }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header>
      <h1 style={{ marginTop: "0.5em" }}>{title}</h1>
      <time>{formattedDate}</time>
      <div style={{ marginTop: "1em", marginBottom: "1em" }}>
        <Link href="/blog">
          <IoIosArrowRoundBack style={{ verticalAlign: "middle" }} />
          Go back
        </Link>
      </div>
    </header>
  );
}
