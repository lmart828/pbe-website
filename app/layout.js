import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Precision Broadcast Engineering",
  description: "Mission-critical broadcast engineering services",
  icons: {
    icon: "/favicon-v2.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="navbar">
          <div className="nav-inner">
            <Link href="/" className="logo-wrap">
              <Image
                src="/logo.png"
                alt="Precision Broadcast Engineering Logo"
                width={260}
                height={100}
                priority
                className="logo-img"
              />
            </Link>

            <nav className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/about">About</Link>
              <Link href="/industries">Industries</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}