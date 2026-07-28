"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SkillCategory } from "@/types";
import { fadeInUp } from "@/lib/animations";

interface SkillCardProps {
  category: SkillCategory;
}

export default function SkillCard({ category }: SkillCardProps) {
  return (
    <motion.div variants={fadeInUp} className="h-full">
      <Card className="p-6 md:p-8 h-full border-border/50 bg-background shadow-sm flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold tracking-tight text-foreground mb-6 pb-3 border-b border-border/40">
            {category.name}
          </h3>
          
          <div className="space-y-4">
            {category.skills.map((skill) => {
              const isExpertOrAdvanced = 
                skill.level === "Expert" || skill.level === "Advanced";

              return (
                <div
                  key={skill.name}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{skill.name}</p>
                    {skill.yearsOfExperience && (
                      <p className="text-xs font-mono text-muted-foreground mt-0.5">
                        {skill.yearsOfExperience}{" "}
                        {skill.yearsOfExperience === 1 ? "yr exp" : "yrs exp"}
                      </p>
                    )}
                  </div>
                  
                  <Badge
                    variant="outline"
                    className={`text-xs font-mono rounded-sm px-2 py-0.5 ${
                      isExpertOrAdvanced
                        ? "border-border text-foreground bg-secondary/40 font-medium"
                        : "border-border/50 text-muted-foreground bg-background"
                    }`}
                  >
                    {skill.level}
                  </Badge>
                </div>
              );
            })}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}