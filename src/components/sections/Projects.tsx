"use client";

import Image from "next/image";
import { useState } from "react";
import FadeIn from "@/components/animations/FadeIn";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

function outcomeFor(project: Project): string {
  if (project.id === "proj-1")
    return "CNN drowsiness detection at 90%+ accuracy, shipped inside an Android app.";
  if (project.id === "proj-5")
    return "Chat with PDF, DOCX and TXT using Llama 3.3 70B with cited answers.";
  return project.shortDescription;
}

export function CaseStudy({ project, index, priority }: { project: Project; index: string; priority?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeIn>
      <article className="grid grid-cols-1 gap-6 border-b rule py-10 md:grid-cols-12 md:gap-8 md:py-14">
        <div className="md:col-span-7">
          {project.image ? (
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-border bg-muted">
              <Image src={project.image} alt={`${project.title} interface`} fill className="object-cover" priority={priority} sizes="(max-width: 768px) 100vw, 60vw" />
            </div>
          ) : (
            <div className="flex aspect-[4/3] w-full items-center justify-center border border-border bg-muted font-mono text-[12px] uppercase tracking-[0.16em] text-muted-foreground">No image</div>
          )}
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Fig. {index} — {project.category}, {project.startDate.slice(0, 4)}</p>
        </div>
        <div className="md:col-span-5">
          <p className="folio"><span className="text-signal">{index}</span><span aria-hidden="true" className="mx-2 text-rule">/</span>{project.category} — {project.startDate} to {project.endDate}</p>
          <h3 className="mt-4 font-display text-2xl font-bold leading-tight tracking-tight text-foreground md:text-[34px]">{project.title}</h3>
          <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.12em] text-muted-foreground">{project.technologies.slice(0, 6).join(" / ")}</p>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{outcomeFor(project)}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            {project.github ? <a href={project.github} target="_blank" rel="noopener noreferrer" className="field-link text-foreground">Source ↗</a> : null}
            {project.demo ? <a href={project.demo} target="_blank" rel="noopener noreferrer" className="field-link text-foreground">Live ↗</a> : null}
            {project.paper ? <a href={project.paper} target="_blank" rel="noopener noreferrer" className="field-link text-foreground">Paper ↗</a> : null}
            <button onClick={() => setOpen((v) => !v)} aria-expanded={open} className="font-mono text-[12px] uppercase tracking-[0.14em] text-signal transition-opacity hover:opacity-80">{open ? "Close details −" : "Read details +"}</button>
          </div>
          <div className={cn("grid transition-all duration-200", open ? "mt-6 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
            <div className="overflow-hidden">
              <div className="space-y-5 border-t rule pt-5 text-[15px] leading-relaxed text-muted-foreground">
                <p>{project.fullDescription}</p>
                {project.highlights && project.highlights.length > 0 ? (
                  <ul className="space-y-2">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-3"><span aria-hidden="true" className="text-signal">→</span><span>{h}</span></li>
                    ))}
                  </ul>
                ) : null}
                <p className="font-mono text-[12px] uppercase tracking-[0.12em]">{project.tags.join(" / ")}</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </FadeIn>
  );
}

import Link from "next/link";

export default function Projects({ projects, limit, showLink }: { projects: Project[]; limit?: number; showLink?: boolean }) {
  const visible = limit ? projects.slice(0, limit) : projects;
  return (
    <div>
      <div className="border-t rule">
        {visible.map((project, i) => (
          <CaseStudy key={project.id} project={project} index={String(i + 1).padStart(2, "0")} priority={i === 0} />
        ))}
      </div>
      {showLink ? (
        <div className="flex flex-wrap items-center justify-between gap-3 py-8">
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">Showing {visible.length} of {projects.length} case studies</p>
          <Link href="/projects" className="font-mono text-[12px] uppercase tracking-[0.14em] text-foreground transition-colors hover:text-signal">All projects →</Link>
        </div>
      ) : null}
    </div>
  );
}
