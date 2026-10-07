"use client";

import FadeIn from "@/components/animations/FadeIn";
import certificationsData from "@/data/certifications.json";
import personalData from "@/data/personal.json";
import publicationsData from "@/data/publications.json";
import type { Certification, PersonalInfo, Publication } from "@/types";
import Image from "next/image";

export default function AboutPage() {
  const personal = personalData as PersonalInfo;
  const publications = publicationsData as Publication[];
  const certifications = [...(certificationsData as Certification[])].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

  return (
    <div className="shell pb-20 pt-28 md:pt-36">
      <FadeIn initiallyVisible>
        <p className="folio"><span className="text-signal">03</span><span aria-hidden="true" className="mx-3 text-rule">/</span>About</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.03] tracking-tight text-foreground sm:text-5xl md:text-6xl">Research-minded student who ships.</h1>
      </FadeIn>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <FadeIn initiallyVisible delay={0.05}>
            <div className="md:sticky md:top-24">
              <div className="relative aspect-[4/5] w-full max-w-[280px] overflow-hidden border border-border bg-muted">
                <Image src={personal.avatar || "/images/avatar.jpg"} alt={`Portrait of ${personal.name}`} fill className="object-cover" sizes="(max-width: 768px) 70vw, 280px" />
              </div>
              <p className="mt-4 font-display text-xl font-bold tracking-tight text-foreground">{personal.name}</p>
              <p className="mt-1 font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">{personal.title} — {personal.location}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{personal.bio}</p>
              <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.12em] text-muted-foreground">{(personal.interests ?? []).join(" / ")}</p>
            </div>
          </FadeIn>
        </div>

        <div className="md:col-span-8">
          <FadeIn initiallyVisible delay={0.08}>
            <div className="space-y-5 border-t rule pt-6 text-[16px] leading-relaxed text-muted-foreground">
              <p><span className="text-foreground">I study Informatics at Universitas Sebelas Maret.</span> My coursework centers on digital image processing, web programming, database systems and software engineering.</p>
              <p>I learned to build in teams: a four-person Laravel marketplace, an LMS and KMS for PT KAI, and a news CMS for Winnicode. Bangkit then pushed me into machine learning full time, ending in the SleepWell capstone.</p>
              <p>Now I split time between web platforms and applied deep learning — image enhancement research, steganography robustness, and retrieval chat over my own documents.</p>
            </div>
          </FadeIn>

          <div className="mt-12">
            <p className="folio mb-4">Research</p>
            <div className="border-t rule">
              {publications.map((pub) => (
                <div key={pub.id} className="border-b rule py-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-signal">{pub.status} — {pub.year}</p>
                  <h2 className="mt-2 font-display text-xl font-bold leading-snug tracking-tight text-foreground">{pub.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{pub.authors.join(", ")} · {pub.venue}</p>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                    {pub.pdf ? <a href={pub.pdf} target="_blank" rel="noopener noreferrer" className="field-link text-foreground">PDF ↗</a> : null}
                    {pub.arxiv && !pub.arxiv.includes("XXXX") ? <a href={pub.arxiv} target="_blank" rel="noopener noreferrer" className="field-link text-foreground">arXiv ↗</a> : null}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <p className="folio mb-4">Certifications — verifiable</p>
            <div className="border-t rule">
              {certifications.map((cert) => (
                <div key={cert.id} className="grid grid-cols-1 gap-1 border-b rule py-5 sm:grid-cols-12 sm:gap-4">
                  <p className="font-mono text-[12px] uppercase tracking-[0.12em] text-muted-foreground sm:col-span-3">{cert.date}</p>
                  <div className="sm:col-span-9">
                    <p className="font-display text-[17px] font-bold tracking-tight text-foreground">{cert.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}{cert.credentialUrl ? <> — <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="field-link text-foreground">Verify ↗</a></> : null}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
