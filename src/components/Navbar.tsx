"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useSectionInView } from "@/hooks/useSectionInView";

const links = [
  { id: "about", href: "#about", label: "About" },
  { id: "skills", href: "#skills", label: "Skills" },
  { id: "projects", href: "#projects", label: "Projects" },
  { id: "activities", href: "#activities", label: "Activities" },
  { id: "contact", href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionIds = useMemo(() => ["home", ...links.map((link) => link.id)], []);
  const activeSection = useSectionInView(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition ${
        scrolled
          ? "border-border bg-bg/80 shadow-[0_10px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          : "border-transparent bg-bg/35 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#home"
          className="group flex items-center gap-3"
          aria-label="Vithahaselvi Haribalajhee home"
        >
          <span className="grid h-10 w-10 place-items-center border border-accent/60 bg-surface font-code text-sm font-semibold text-accent transition group-hover:border-accent2/70 group-hover:text-accent2">
            VH
          </span>
          <span className="hidden font-code text-xs uppercase tracking-[0.24em] text-muted sm:inline">
            ML systems
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-code text-sm transition hover:text-text ${
                activeSection === link.id ? "text-accent2" : "text-muted"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center border border-border text-text-primary md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-border bg-bg px-5 py-4 md:hidden">
          <div className="mx-auto grid max-w-6xl gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`border border-border bg-surface px-4 py-3 font-code text-sm transition hover:border-accent/60 hover:text-text ${
                  activeSection === link.id ? "text-accent2" : "text-muted"
                }`}
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
