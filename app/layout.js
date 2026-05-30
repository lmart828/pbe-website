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
              <Link href="/gen-b">GEN-B</Link>
              <Link href="/support">Support</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="footer-inner">
            <div className="footer-brand">
              <Image
                src="/logo.png"
                alt="Precision Broadcast Engineering Logo"
                width={150}
                height={58}
                className="footer-logo"
              />

              <h2>Precision Broadcast Engineering</h2>
              <p>
                Engineering support, consulting, diagnostics, and technology
                solutions for the broadcast industry.
              </p>

              <div className="footer-contact">
                <p>Contact:</p>
                <a href="mailto:support@pbe-engineering.com">
                  support@pbe-engineering.com
                </a>
                <span>Miami, Florida, USA</span>
              </div>
            </div>

            <nav className="footer-links" aria-label="Quick Links">
              <h3>Quick Links</h3>
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/about">About</Link>
              <Link href="/industries">Industries</Link>
              <Link href="/support">Support</Link>
              <Link href="/contact">Contact</Link>
            </nav>

            <nav className="footer-links" aria-label="Legal">
              <h3>Legal</h3>
              <Link href="/legal/privacy-policy">Privacy Policy</Link>
              <Link href="/legal/terms-of-use">Terms of Use</Link>
              <Link href="/legal/professional-disclaimer">
                Professional Disclaimer
              </Link>
              <Link href="/legal/copyright-notice">Copyright Notice</Link>
              <Link href="/legal/support-policy">Support Policy</Link>
            </nav>
          </div>

          <div className="footer-bottom">
            <p>© 2026 Precision Broadcast Engineering LLC. All Rights Reserved.</p>
            <p className="footer-trademark">
              GEN-B™ is a trademark of Precision Broadcast Engineering LLC.
            </p>
            <p className="footer-trademark">
              Apple, iPhone, and App Store are trademarks of Apple Inc.
              <br />
              All other trademarks are the property of their respective owners.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
