import Link from "next/link";
import logo from "@/assets/logo.png";
import "@/app/globals.css";

export const metadata = {
  title: "Damiano Bacci",
  description: "Web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <Link href="/">
                <li>Damiano</li>
              </Link>
              <Link href="/blog">
                <li>Blog</li>
              </Link>
              <Link href="/about">
                <li>About</li>
              </Link>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
