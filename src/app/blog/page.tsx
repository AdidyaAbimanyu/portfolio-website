"use client";

import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="shell pb-20 pt-28 md:pt-36">
      <FadeIn initiallyVisible>
        <p className="folio"><span className="text-signal">04</span><span aria-hidden="true" className="mx-3 text-rule">/</span>Notes</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.03] tracking-tight text-foreground sm:text-5xl md:text-6xl">No notes published yet.</h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">I keep this route because writing is planned. Until the first real post ships, the research and project dossiers above are the writing.</p>
      </FadeIn>
      <FadeIn initiallyVisible delay={0.05}>
        <div className="mt-10 flex flex-wrap gap-3 border-t rule pt-6">
          <Link href="/projects" className="inline-flex h-11 items-center bg-foreground px-5 font-mono text-[12px] uppercase tracking-[0.14em] text-background transition-opacity hover:opacity-90">Read case studies</Link>
          <Link href="/about" className="inline-flex h-11 items-center border border-border px-5 font-mono text-[12px] uppercase tracking-[0.14em] text-foreground transition-colors hover:border-foreground">About + research</Link>
        </div>
      </FadeIn>
    </div>
  );
}
