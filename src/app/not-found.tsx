"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell flex min-h-[70vh] items-center py-28">
      <div className="max-w-xl">
        <p className="folio"><span className="text-signal">404</span><span aria-hidden="true" className="mx-3 text-rule">/</span>Missing page</p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">This entry is not in the log.</h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">The page moved or never existed. Start from the projects or go home.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="inline-flex h-11 items-center bg-foreground px-5 font-mono text-[12px] uppercase tracking-[0.14em] text-background transition-opacity hover:opacity-90">Go home</Link>
          <Link href="/projects" className="inline-flex h-11 items-center border border-border px-5 font-mono text-[12px] uppercase tracking-[0.14em] text-foreground transition-colors hover:border-foreground">Projects</Link>
        </div>
      </div>
    </div>
  );
}
