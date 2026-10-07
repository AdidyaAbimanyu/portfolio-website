"use client";

import FadeIn from "@/components/animations/FadeIn";
import Experience from "@/components/sections/Experience";
import experiencesData from "@/data/experiences.json";
import type { Experience as ExperienceType } from "@/types";

export default function ExperiencePage() {
  const items = [...(experiencesData as unknown as ExperienceType[])].sort((a, b) => a.order - b.order);
  return (
    <div className="shell pb-20 pt-28 md:pt-36">
      <FadeIn initiallyVisible>
        <p className="folio"><span className="text-signal">02</span><span aria-hidden="true" className="mx-3 text-rule">/</span>Archive — Experience</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.03] tracking-tight text-foreground sm:text-5xl md:text-6xl">Work, study and training in order.</h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">Dates on the left, responsibility and stack on the right. The mixed-reality train prototype lives inside the PT KAI entry.</p>
      </FadeIn>
      <div className="mt-10">
        <Experience items={items} />
      </div>
    </div>
  );
}
