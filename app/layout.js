import Link from "next/link";
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
              <li>
                <Link
                  href="/"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  Damiano
                </Link>
              </li>

              <li>
                <Link href="/blog">Blog</Link>
              </li>

              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
