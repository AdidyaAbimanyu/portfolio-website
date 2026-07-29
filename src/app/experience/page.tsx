"use client";

import { useState } from "react";
import ExperienceCard from "@/components/cards/ExperienceCard";
import ExperienceModal from "@/components/modals/ExperienceModal";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { Briefcase } from "lucide-react";
import experiencesData from "../../data/experiences.json";
import { Experience } from "@/types";

export default function ExperiencePage() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);

  const experiences = experiencesData as unknown as Experience[];
  const sortedExperiences = [...experiences].sort((a, b) => a.order - b.order);

  return (
    <div className="min-h-screen pt-28 pb-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-4xl">
        
        {/* Header */}
        <FadeIn>
          <div className="flex flex-col items-start mb-16 space-y-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary/30 border border-border/50 text-sm font-medium">
              <Briefcase className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Career History</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
              Experience.
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              A comprehensive timeline of my professional roles, engineering contributions, and career trajectory.
            </p>
          </div>
        </FadeIn>

        {/* Timeline */}
        <StaggerChildren className="space-y-6">
          {sortedExperiences.map((experience) => (
            <div key={experience.id} className="relative">
              <ExperienceCard 
                experience={experience} 
                onClick={() => setSelectedExperience(experience)} 
              />
            </div>
          ))}
        </StaggerChildren>

        <ExperienceModal
          experience={selectedExperience}
          isOpen={!!selectedExperience}
          onClose={() => setSelectedExperience(null)}
        />
      </div>
    </div>
  );
}