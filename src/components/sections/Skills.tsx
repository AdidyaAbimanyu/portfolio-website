"use client";

import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren from "@/components/animations/StaggerChildren";
import SkillCard from "@/components/cards/SkillCard";
import { Code2 } from "lucide-react";
import skillsData from "../../data/skills.json";
import { SkillsData } from "@/types";

export default function SkillsSection() {
  const skills = skillsData as SkillsData;
  
  // Sort categories by order
  const sortedCategories = [...skills.categories].sort(
    (a, b) => (a.order || 0) - (b.order || 0)
  );

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
              <Code2 className="h-4 w-4" />
              <span className="text-sm font-medium">Skills & Expertise</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to build innovative solutions
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
        <FadeIn delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">2+</p>
              <p className="text-sm text-muted-foreground">
                Years of Experience
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">
                {skills.categories.length}+
              </p>
              <p className="text-sm text-muted-foreground">
                Skill Categories
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">
                {skills.categories.reduce(
                  (acc, cat) => acc + cat.skills.length,
                  0
                )}
                +
              </p>
              <p className="text-sm text-muted-foreground">
                Technologies
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">3+</p>
              <p className="text-sm text-muted-foreground">Projects Built</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
