"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/industries", label: "Industries" },
  { href: "/gen-b", label: "GEN-B" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
];

function isActivePath(pathname, href) {
  if (pathname.startsWith("/legal")) {
    return false;
  }

  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="nav-links">
      {navItems.map((item) => (
        <Link
          href={item.href}
          className={isActivePath(pathname, item.href) ? "active" : undefined}
          aria-current={isActivePath(pathname, item.href) ? "page" : undefined}
          key={item.href}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
