"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={`nav-menu-toggle${isOpen ? " open" : ""}`}
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        id="primary-navigation"
        className={`nav-links${isOpen ? " nav-links-open" : ""}`}
      >
        {navItems.map((item) => {
          const isActive = isActivePath(pathname, item.href);

          return (
            <Link
              href={item.href}
              className={isActive ? "active" : undefined}
              aria-current={isActive ? "page" : undefined}
              key={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
