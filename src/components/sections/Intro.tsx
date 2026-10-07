"use client";

import FadeIn from "@/components/animations/FadeIn";
import personalData from "@/data/personal.json";
import type { PersonalInfo } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function Intro() {
  const personal = personalData as PersonalInfo;

  return (
    <section aria-label="Introduction" className="shell pb-16 pt-28 md:pb-24 md:pt-36">
      <FadeIn initiallyVisible>
        <p className="folio">
          <span className="text-signal">Field notes</span>
          <span aria-hidden="true" className="mx-3 text-rule">/</span>
          Informatics — Universitas Sebelas Maret
        </p>
      </FadeIn>

      <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-8">
          <FadeIn initiallyVisible>
            <h1 className="font-display text-[42px] font-bold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Adidya Abimanyu builds web systems and applied machine learning.
            </h1>
          </FadeIn>
          <FadeIn initiallyVisible delay={0.05}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Informatics student in Surakarta, Indonesia. I work across web
              development, machine learning and deep learning, and I care about
              solving real-world problems through intelligent automation.
            </p>
          </FadeIn>
          <FadeIn initiallyVisible delay={0.1}>
            <dl className="mt-8 grid max-w-xl grid-cols-1 gap-x-8 gap-y-4 border-t rule pt-6 font-mono text-[12px] sm:grid-cols-2">
              <div>
                <dt className="uppercase tracking-[0.16em] text-muted-foreground">Based in</dt>
                <dd className="mt-1 text-foreground">{personal.location}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.16em] text-muted-foreground">Focus</dt>
                <dd className="mt-1 text-foreground">{(personal.interests ?? []).join(" / ")}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.16em] text-muted-foreground">Currently</dt>
                <dd className="mt-1 text-foreground">Informatics student, open to internships</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.16em] text-muted-foreground">Contact</dt>
                <dd className="mt-1">
                  <a href={`mailto:${personal.email}`} className="field-link text-foreground">{personal.email}</a>
                </dd>
              </div>
            </dl>
          </FadeIn>
          <FadeIn initiallyVisible delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/projects" className="inline-flex h-11 items-center bg-foreground px-5 font-mono text-[12px] uppercase tracking-[0.14em] text-background transition-opacity hover:opacity-90">
                See projects<span aria-hidden="true" className="ml-2">↓</span>
              </Link>
              <a href={personal.resume} download className="inline-flex h-11 items-center border border-border px-5 font-mono text-[12px] uppercase tracking-[0.14em] text-foreground transition-colors hover:border-foreground">
                Resume<span aria-hidden="true" className="ml-2">↓</span>
              </a>
              <div className="flex items-center gap-4 pl-1 text-sm text-muted-foreground">
                <a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">GitHub ↗</a>
                <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">LinkedIn ↗</a>
              </div>
            </div>
          </FadeIn>
        </div>
        <div className="md:col-span-4">
          <FadeIn initiallyVisible delay={0.1}>
            <figure className="md:sticky md:top-24">
              <div className="relative aspect-[4/5] w-full max-w-[300px] overflow-hidden border border-border bg-muted">
                <Image src={personal.avatar || "/images/avatar.jpg"} alt="Portrait of Adidya Abimanyu" fill className="object-cover" priority sizes="(max-width: 768px) 70vw, 300px" />
              </div>
              <figcaption className="mt-3 flex max-w-[300px] items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                <span>Adidya Abimanyu</span>
                <span>Surakarta, ID</span>
              </figcaption>
            </figure>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
