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
    <motion.div variants={fadeInUp}>
      <Card className="p-6 h-full hover:shadow-lg hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm">
        <h3 className="text-xl font-bold mb-4 gradient-text">
          {category.name}
        </h3>
        <div className="space-y-3">
          {category.skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center justify-between gap-4"
            >
              <div className="flex-1">
                <p className="font-medium">{skill.name}</p>
                {skill.yearsOfExperience && (
                  <p className="text-xs text-muted-foreground">
                    {skill.yearsOfExperience}{" "}
                    {skill.yearsOfExperience === 1 ? "year" : "years"}
                  </p>
                )}
              </div>
              <Badge
                variant={
                  skill.level === "Expert" || skill.level === "Advanced"
                    ? "default"
                    : "secondary"
                }
                className={
                  skill.level === "Expert"
                    ? "bg-primary text-primary-foreground"
                    : skill.level === "Advanced"
                    ? "bg-accent text-accent-foreground"
                    : ""
                }
              >
                {skill.level}
              </Badge>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
