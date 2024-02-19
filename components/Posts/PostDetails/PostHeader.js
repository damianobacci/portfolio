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
      <h1>{title}</h1>
      <time>{formattedDate}</time>
      <Link href="/blog">
        <IoIosArrowRoundBack /> Go back
      </Link>
    </header>
  );
}
