"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#now", label: "Now" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Find active section
      const sections = links.map((link) => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-accent/10 transition-all duration-300 ${
        isScrolled
          ? "bg-bg/85 backdrop-blur-[16px]"
          : "bg-bg border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#home"
          className="group flex items-center gap-2"
          aria-label="Vithahaselvi Haribalajhee home"
        >
          <span className="grid h-10 w-10 place-items-center border border-accent/30 bg-surface font-code text-sm font-semibold text-text transition group-hover:border-accent group-hover:bg-surface2">
            VH
          </span>
          <span className="hidden font-code text-xs uppercase tracking-[0.24em] text-muted sm:inline">
            Portfolio
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`font-code text-sm transition relative ${
                  isActive
                    ? "text-accent font-semibold"
                    : "text-muted hover:text-text"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 h-0.5 bg-accent" style={{ width: `${link.label.length * 8}px` }} />
                )}
              </a>
            );
          })}
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center border border-accent/30 text-text transition hover:border-accent md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-accent/10 bg-bg px-5 py-4 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="border border-accent/20 bg-surface px-4 py-3 font-code text-sm text-muted transition hover:border-accent hover:bg-surface2 hover:text-text"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
