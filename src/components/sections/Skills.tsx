"use client";

import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren from "@/components/animations/StaggerChildren";
import SkillCard from "@/components/cards/SkillCard";
import { Terminal } from "lucide-react";
import skillsData from "../../data/skills.json";
import { SkillsData } from "@/types";

export default function SkillsSection() {
  const skills = skillsData as SkillsData;
  
  // Sort categories by order
  const sortedCategories = [...skills.categories].sort(
    (a, b) => (a.order || 0) - (b.order || 0)
  );

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <FadeIn>
          <div className="flex flex-col items-start mb-16 space-y-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary/30 border border-border/50 text-sm font-medium transition-colors hover:bg-secondary/50">
              <Terminal className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Capabilities</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Technical Skills.
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl">
              The frameworks, tools, and architectures I use to build scalable and intelligent solutions.
            </p>
          </div>
        </FadeIn>

        {/* Skills Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCategories.map((category) => (
            <SkillCard key={category.name} category={category} />
          ))}
        </StaggerChildren>

        {/* Stats */}
        <FadeIn delay={0.2}>
          <div className="mt-16 rounded-2xl overflow-hidden border border-border/50 shadow-sm bg-border/40">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px">
              
              <div className="bg-background/95 backdrop-blur-sm p-6 md:p-8 flex flex-col items-start justify-center transition-colors hover:bg-secondary/20">
                <p className="text-4xl md:text-5xl font-bold font-mono tracking-tighter text-foreground mb-2">
                  2+
                </p>
                <p className="text-sm font-medium text-muted-foreground">Years Experience</p>
              </div>
              
              <div className="bg-background/95 backdrop-blur-sm p-6 md:p-8 flex flex-col items-start justify-center transition-colors hover:bg-secondary/20">
                <p className="text-4xl md:text-5xl font-bold font-mono tracking-tighter text-foreground mb-2">
                  {skills.categories.length}
                </p>
                <p className="text-sm font-medium text-muted-foreground">Domains</p>
              </div>
              
              <div className="bg-background/95 backdrop-blur-sm p-6 md:p-8 flex flex-col items-start justify-center transition-colors hover:bg-secondary/20">
                <p className="text-4xl md:text-5xl font-bold font-mono tracking-tighter text-foreground mb-2">
                  {skills.categories.reduce(
                    (acc, cat) => acc + cat.skills.length,
                    0
                  )}+
                </p>
                <p className="text-sm font-medium text-muted-foreground">Technologies</p>
              </div>
              
              <div className="bg-background/95 backdrop-blur-sm p-6 md:p-8 flex flex-col items-start justify-center transition-colors hover:bg-secondary/20">
                <p className="text-4xl md:text-5xl font-bold font-mono tracking-tighter text-foreground mb-2">
                  3+
                </p>
                <p className="text-sm font-medium text-muted-foreground">Major Projects</p>
              </div>

            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}