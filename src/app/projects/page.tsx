"use client";

import { useMemo, useState } from "react";
import FadeIn from "@/components/animations/FadeIn";
import { CaseStudy } from "@/components/sections/Projects";
import { Input } from "@/components/ui/input";
import projectsData from "@/data/projects.json";
import type { Project } from "@/types";

export default function ProjectsPage() {
  const projects = useMemo(() => projectsData as Project[], []);
  const [query, setQuery] = useState("");

  const filtered = projects.filter((p) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      p.title.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.technologies.some((t) => t.toLowerCase().includes(q))
    );
  });

  return (
    <div className="shell pb-20 pt-28 md:pt-36">
      <FadeIn initiallyVisible>
        <p className="folio"><span className="text-signal">01</span><span aria-hidden="true" className="mx-3 text-rule">/</span>Archive — Projects</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.03] tracking-tight text-foreground sm:text-5xl md:text-6xl">Five builds, documented like case studies.</h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">SleepWell and the RAG chat lead because they are complete systems. Everything below uses the real descriptions, dates and links from my files.</p>
      </FadeIn>

      <FadeIn initiallyVisible delay={0.05}>
        <div className="mt-10 flex flex-col gap-4 border-t rule pt-6 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full max-w-md">
            <label htmlFor="project-search" className="folio mb-2 block">Filter by name or stack</label>
            <Input id="project-search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Try cnn, laravel, rag..." className="h-11 rounded-none border-border bg-background" />
          </div>
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">Showing {filtered.length} of {projects.length}</p>
        </div>
      </FadeIn>

      <div className="mt-4">
        {filtered.length > 0 ? (
          <div className="border-t rule">
            {filtered.map((project, i) => (
              <CaseStudy key={project.id} project={project} index={String(i + 1).padStart(2, "0")} />
            ))}
          </div>
        ) : (
          <div className="border rule py-16 text-center">
            <p className="font-display text-xl font-bold text-foreground">No projects match.</p>
            <p className="mt-2 text-sm text-muted-foreground">Clear the filter to see all five case studies.</p>
            <button onClick={() => setQuery("")} className="mt-5 font-mono text-[12px] uppercase tracking-[0.14em] text-signal">Clear filter</button>
          </div>
        )}
      </div>
    </div>
  );
}
