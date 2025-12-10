"use client";

import { useState } from "react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren from "@/components/animations/StaggerChildren";
import ExperienceCard from "@/components/cards/ExperienceCard";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";
import experiencesData from "../../data/experiences.json";
import { Experience } from "@/types";

export default function ExperienceSection() {
  const [showAll, setShowAll] = useState(false);
  const experiences = experiencesData as Experience[];
  
  // Sort by order and show featured first
  const sortedExperiences = [...experiences].sort((a, b) => a.order - b.order);
  const displayedExperiences = showAll
    ? sortedExperiences
    : sortedExperiences.slice(0, 3);

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
              <Briefcase className="h-4 w-4" />
              <span className="text-sm font-medium">Experience</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My professional journey and contributions to various projects
            </p>
          </div>
        </FadeIn>

        {/* Experience Cards */}
        <StaggerChildren className="space-y-6">
          {displayedExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </StaggerChildren>

        {/* Show More Button */}
        {experiences.length > 3 && (
          <FadeIn delay={0.4}>
            <div className="text-center mt-12">
              <Button
                size="lg"
                variant="outline"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Show Less" : `View All (${experiences.length})`}
              </Button>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
