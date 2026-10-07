"use client";

import FadeIn from "@/components/animations/FadeIn";
import personalData from "@/data/personal.json";
import type { PersonalInfo } from "@/types";

export default function Contact() {
  const personal = personalData as PersonalInfo;
  return (
    <FadeIn>
      <div className="border-t rule pt-10 md:pt-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="folio"><span className="text-signal">05</span><span aria-hidden="true" className="mx-3 text-rule">/</span>Contact</p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-4xl md:text-5xl">Open to internships, freelance and research collaboration.</h2>
            <a href={`mailto:${personal.email}`} className="mt-8 inline-block break-all font-display text-2xl font-bold tracking-tight text-foreground underline decoration-signal decoration-2 underline-offset-8 transition-colors hover:text-signal sm:text-3xl md:text-4xl">
              {personal.email}
            </a>
          </div>
          <div className="md:col-span-5">
            <dl className="space-y-5 border-t rule pt-6 font-mono text-[12px] md:border-t-0 md:pt-16">
              <div className="flex items-center justify-between gap-4 border-b rule pb-4"><dt className="uppercase tracking-[0.16em] text-muted-foreground">Phone</dt><dd className="text-foreground">{personal.phone}</dd></div>
              <div className="flex items-center justify-between gap-4 border-b rule pb-4"><dt className="uppercase tracking-[0.16em] text-muted-foreground">Location</dt><dd className="text-foreground">{personal.location}</dd></div>
              <div className="flex items-center justify-between gap-4 border-b rule pb-4"><dt className="uppercase tracking-[0.16em] text-muted-foreground">GitHub</dt><dd><a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="field-link text-foreground">AdidyaAbimanyu ↗</a></dd></div>
              <div className="flex items-center justify-between gap-4 border-b rule pb-4"><dt className="uppercase tracking-[0.16em] text-muted-foreground">LinkedIn</dt><dd><a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="field-link text-foreground">adidya-abimanyu ↗</a></dd></div>
              <div className="flex items-center justify-between gap-4"><dt className="uppercase tracking-[0.16em] text-muted-foreground">Resume</dt><dd><a href={personal.resume} download className="field-link text-foreground">resume.pdf ↓</a></dd></div>
            </dl>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
