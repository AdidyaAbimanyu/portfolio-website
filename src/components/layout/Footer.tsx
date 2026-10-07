"use client";

import Link from "next/link";
import personalData from "@/data/personal.json";
import type { PersonalInfo } from "@/types";

export default function Footer() {
  const personal = personalData as PersonalInfo;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t rule bg-background">
      <div className="shell py-12 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-display text-xl font-bold tracking-tight text-foreground">
              Adidya Abimanyu
              <span aria-hidden="true" className="text-signal">
                .
              </span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Informatics student in Surakarta, Indonesia. I build web systems
              and applied machine learning.
            </p>
            <p className="mt-5 font-mono text-[12px] text-muted-foreground">
              <a
                href={`mailto:${personal.email}`}
                className="field-link text-foreground"
              >
                {personal.email}
              </a>
            </p>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <p className="folio mb-4">Index</p>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Projects", path: "/projects" },
                { name: "Experience", path: "/experience" },
                { name: "About", path: "/about" },
                { name: "Notes", path: "/blog" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <p className="folio mb-4">Elsewhere</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  GitHub
                  <span aria-hidden="true"> ↗</span>
                </a>
              </li>
              <li>
                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  LinkedIn
                  <span aria-hidden="true"> ↗</span>
                </a>
              </li>
              <li>
                <a
                  href={personal.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Resume
                  <span aria-hidden="true"> ↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t rule pt-6 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Adidya Abimanyu — Surakarta, ID</p>
          <div className="flex items-center gap-5">
            <span>Set in Archivo, Inter + JetBrains Mono</span>
            <button
              onClick={scrollToTop}
              className="uppercase tracking-[0.14em] transition-colors hover:text-foreground"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
