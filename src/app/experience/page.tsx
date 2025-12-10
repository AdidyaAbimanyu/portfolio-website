"use client";

import ExperienceCard from "@/components/cards/ExperienceCard";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { Briefcase } from "lucide-react";
import experiencesData from "../../data/experiences.json";
import { Experience } from "@/types";

export default function ExperiencePage() {
  const experiences = experiencesData as unknown as Experience[];
  const sortedExperiences = [...experiences].sort((a, b) => a.order - b.order);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
              <Briefcase className="h-4 w-4" />
              <span className="text-sm font-medium">Career Journey</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My professional journey and contributions to various organizations
            </p>
          </div>
        </FadeIn>

        {/* Timeline */}
        <StaggerChildren className="space-y-8">
          {sortedExperiences.map((experience, index) => (
            <div key={experience.id} className="relative">
              {/* Timeline line */}
              {index !== sortedExperiences.length - 1 && (
                <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-border/50 -translate-x-1/2 hidden md:block" />
              )}
              <ExperienceCard experience={experience} />
            </div>
          ))}
        </StaggerChildren>
      </div>
    </div>
  );
}
