"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#home"
          className="group flex items-center gap-3"
          aria-label="Vithahaselvi Haribalajhee home"
        >
          <span className="grid h-10 w-10 place-items-center border border-border bg-surface font-code text-sm font-semibold text-text-primary transition group-hover:border-primary/70 group-hover:text-teal">
            VH
          </span>
          <span className="hidden font-code text-xs uppercase tracking-[0.24em] text-muted sm:inline">
            Portfolio
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-code text-sm text-muted transition hover:text-text-primary"
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
                className="border border-border bg-surface px-4 py-3 font-code text-sm text-muted transition hover:border-primary/60 hover:text-text-primary"
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
