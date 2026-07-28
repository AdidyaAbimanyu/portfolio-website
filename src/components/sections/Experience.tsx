"use client";

import { useState } from "react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren from "@/components/animations/StaggerChildren";
import ExperienceCard from "@/components/cards/ExperienceCard";
import ExperienceModal from "@/components/modals/ExperienceModal";
import { Button } from "@/components/ui/button";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";
import experiencesData from "../../data/experiences.json";
import { Experience } from "@/types";

export default function ExperienceSection() {
  const [showAll, setShowAll] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const experiences = experiencesData as Experience[];

  // Sort by order and show featured first
  const sortedExperiences = [...experiences].sort((a, b) => a.order - b.order);
  const displayedExperiences = showAll
    ? sortedExperiences
    : sortedExperiences.slice(0, 3);

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-4xl">

        {/* Header */}
        <FadeIn>
          <div className="flex flex-col items-start mb-16 space-y-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary/30 border border-border/50 text-sm font-medium transition-colors hover:bg-secondary/50">
              <Briefcase className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Career Route</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Work Experience.
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl">
              A timeline of my professional journey, roles, and technical contributions.
            </p>
          </div>
        </FadeIn>

        {/* Experience Cards */}
        <div className="relative">
          <StaggerChildren className="space-y-6">
            {displayedExperiences.map((experience) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                onClick={() => setSelectedExperience(experience)}
              />
            ))}
          </StaggerChildren>
        </div>

        {/* Show More Button */}
        {experiences.length > 3 && (
          <FadeIn delay={0.2}>
            <div className="flex justify-start mt-12 pt-8 border-t border-border/50">
              <Button
                size="lg"
                variant="ghost"
                className="hover:bg-accent/50 text-muted-foreground hover:text-foreground transition-all"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? (
                  <>
                    Show Less <ChevronUp className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    View All Past Roles ({experiences.length}) <ChevronDown className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </FadeIn>
        )}

        {/* Experience Detail Modal */}
        <ExperienceModal
          experience={selectedExperience}
          isOpen={!!selectedExperience}
          onClose={() => setSelectedExperience(null)}
        />
      </div>
    </section>
  );
}