"use client";

import FadeIn from "@/components/animations/FadeIn";
import type { SkillsData } from "@/types";

const useFor: Record<string, string> = {
  "Programming Languages": "General-purpose code",
  "Deep Learning & AI": "Models I train",
  "Data Science": "Data handling",
  "Web Development": "Things I ship on the web",
  "Tools & Platforms": "Daily environment",
};

export default function Skills({ data }: { data: SkillsData }) {
  const sorted = [...data.categories].sort((a, b) => (a.order || 0) - (b.order || 0));
  return (
    <FadeIn>
      <dl className="border-t rule">
        {sorted.map((cat) => (
          <div key={cat.name} className="grid grid-cols-1 gap-2 border-b rule py-6 md:grid-cols-12 md:gap-6">
            <dt className="md:col-span-4">
              <p className="font-display text-lg font-bold tracking-tight text-foreground">{cat.name}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{useFor[cat.name] ?? "Capability"}</p>
            </dt>
            <dd className="md:col-span-8">
              <p className="text-[15px] leading-relaxed text-muted-foreground">{cat.skills.map((s) => s.name).join("  ·  ")}</p>
            </dd>
          </div>
        ))}
      </dl>
    </FadeIn>
  );
}
