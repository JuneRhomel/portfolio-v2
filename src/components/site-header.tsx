"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
const links = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="brand" href="#top" aria-label="June Rhomel, back to top">
          <Image src="/jr-logo.svg" alt="" width={44} height={44} priority />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span />
          <span />
        </button>
        <nav
          id="site-navigation"
          className={open ? "nav open" : "nav"}
          aria-label="Primary navigation"
        >
          {links.map((link, index) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {link.label}
            </a>
          ))}
          <a
            className="resume-link"
            href="/documents/june-rhomel-resume.pdf"
            download
          >
            Résumé
          </a>
        </nav>
      </div>
    </header>
  );
}
