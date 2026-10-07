"use client";

import { useState } from "react";
import FadeIn from "@/components/animations/FadeIn";
import type { Experience } from "@/types";
import { calculateDuration, cn, formatDate } from "@/lib/utils";

function Row({ experience }: { experience: Experience }) {
  const [open, setOpen] = useState(false);
  return (
    <FadeIn>
      <div className="grid grid-cols-1 gap-3 border-b rule py-7 md:grid-cols-12 md:gap-6">
        <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted-foreground md:col-span-3">
          {formatDate(experience.startDate)} — {experience.current ? "Present" : experience.endDate ? formatDate(experience.endDate) : "Done"}
          <span className="mt-1 block text-[11px] text-muted-foreground/80">{calculateDuration(experience.startDate, experience.endDate)} · {experience.type}</span>
        </p>
        <div className="md:col-span-9">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">{experience.title}</h3>
            <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted-foreground">{experience.company}</p>
          </div>
          <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">{experience.description}</p>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">{experience.location}</span>
            <button onClick={() => setOpen((v) => !v)} aria-expanded={open} className="font-mono text-[12px] uppercase tracking-[0.14em] text-signal transition-opacity hover:opacity-80">{open ? "Close −" : "Details +"}</button>
          </div>
          <div className={cn("grid transition-all duration-200", open ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
            <div className="overflow-hidden">
              <div className="space-y-4 border-t rule pt-5">
                <ul className="space-y-2 text-[15px] leading-relaxed text-muted-foreground">
                  {experience.responsibilities.map((r) => (
                    <li key={r} className="flex gap-3"><span aria-hidden="true" className="text-signal">→</span><span>{r}</span></li>
                  ))}
                </ul>
                <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted-foreground">{experience.technologies.join(" / ")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Experience({ items, limit }: { items: Experience[]; limit?: number }) {
  const visible = limit ? items.slice(0, limit) : items;
  return (
    <div className="border-t rule">
      {visible.map((e) => (
        <Row key={e.id} experience={e} />
      ))}
    </div>
  );
}
