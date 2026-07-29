"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Calendar, ArrowRight } from "lucide-react";
import { Experience } from "@/types";
import { formatDate, calculateDuration, getTechColor } from "@/lib/utils";
import { fadeInUp } from "@/lib/animations";

interface ExperienceCardProps {
  experience: Experience;
  onClick?: () => void;
}

export default function ExperienceCard({
  experience,
  onClick,
}: ExperienceCardProps) {
  const companyInitials = experience.company
    ? experience.company
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "EX";

  return (
    <motion.div variants={fadeInUp}>
      <Card
        className="p-6 md:p-8 hover:border-foreground/30 transition-all duration-300 cursor-pointer group bg-background border-border/50 shadow-sm"
        onClick={onClick}
      >
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left side */}
          <div className="flex-shrink-0">
            <div className="w-14 h-14 rounded-md border border-border/50 bg-secondary/20 flex items-center justify-center text-sm font-mono font-bold text-foreground">
              {companyInitials}
            </div>
          </div>

          {/* Right side */}
          <div className="flex-1 space-y-4">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                  {experience.title}
                  <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground mt-1 text-sm">
                  <Building2 className="h-4 w-4" />
                  <span className="font-medium text-foreground">
                    {experience.company || "Unknown Organization"}
                  </span>
                </div>
              </div>
              <Badge variant="secondary" className="font-mono text-xs w-fit">
                {experience.type}
              </Badge>
            </div>

            {/* Meta info */}
            <div className="flex flex-wrap gap-4 text-xs font-mono text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                <span>{experience.location || "Indonesia"}</span>
              </div>
              <span className="text-border">•</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                <span>
                  {experience.startDate ? formatDate(experience.startDate) : "TBA"} —{" "}
                  {experience.current 
                    ? "Present" 
                    : (experience.endDate ? formatDate(experience.endDate) : "Completed")}
                </span>
                
                {experience.startDate && (
                  <span className="text-foreground ml-1">
                    ({calculateDuration(experience.startDate, experience.endDate)})
                  </span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed">
              {experience.description}
            </p>

            {/* Key responsibilities */}
            {experience.responsibilities && experience.responsibilities.length > 0 && (
              <ul className="space-y-2 pt-1">
                {experience.responsibilities.slice(0, 3).map((resp, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <span className="text-foreground mt-1 text-xs">▸</span>
                    <span className="flex-1 leading-relaxed">{resp}</span>
                  </li>
                ))}
                {experience.responsibilities.length > 3 && (
                  <li className="text-xs font-mono text-muted-foreground pt-1">
                    +{experience.responsibilities.length - 3} more responsibilities
                  </li>
                )}
              </ul>
            )}

            {/* Technologies */}
            {experience.technologies && experience.technologies.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
                {experience.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className={`text-xs rounded-sm bg-secondary/20 border-border/50 ${getTechColor(tech)}`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}