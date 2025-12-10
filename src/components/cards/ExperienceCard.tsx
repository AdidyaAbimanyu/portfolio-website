"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Calendar } from "lucide-react";
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
  return (
    <motion.div variants={fadeInUp}>
      <Card
        className="p-6 hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer group bg-card/50 backdrop-blur-sm"
        onClick={onClick}
      >
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left side - Company icon/logo placeholder */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-3xl">
              {experience.company
                .split(" ")
                .map((word) => word[0])
                .join("")
                .slice(0, 2)}
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex-1 space-y-3">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {experience.title}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground mt-1">
                  <Building2 className="h-4 w-4" />
                  <span className="font-medium">{experience.company}</span>
                </div>
              </div>
              <Badge variant="secondary">{experience.type}</Badge>
            </div>

            {/* Meta info */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{experience.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>
                  {formatDate(experience.startDate)} -{" "}
                  {experience.current ? "Present" : formatDate(experience.endDate!)}
                </span>
                <span className="text-primary ml-1">
                  ({calculateDuration(experience.startDate, experience.endDate)})
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground">{experience.description}</p>

            {/* Key responsibilities (show first 3) */}
            {experience.responsibilities.length > 0 && (
              <ul className="space-y-2">
                {experience.responsibilities.slice(0, 3).map((resp, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-primary mt-1">▸</span>
                    <span className="flex-1">{resp}</span>
                  </li>
                ))}
                {experience.responsibilities.length > 3 && (
                  <li className="text-sm text-primary">
                    +{experience.responsibilities.length - 3} more
                    responsibilities
                  </li>
                )}
              </ul>
            )}

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 pt-2">
              {experience.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className={`text-xs ${getTechColor(tech)}`}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
