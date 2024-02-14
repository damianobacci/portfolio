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
                  DB
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
