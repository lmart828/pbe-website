import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Precision Broadcast Engineering",
  description: "Mission-critical broadcast engineering services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {/* GLOBAL NAVBAR */}
        <header className="navbar">
          <div className="nav-inner">

            <Link href="/" className="logo-wrap">
              <Image
                src="/logo.png"
                alt="PBE Logo"
                width={220}
                height={90}
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

        {/* PAGE CONTENT */}
        {children}

      </body>
    </html>
  );
}