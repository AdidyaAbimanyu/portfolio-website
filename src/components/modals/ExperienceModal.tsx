"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Calendar, Briefcase } from "lucide-react";
import { Experience } from "@/types";
import { formatDate, calculateDuration, getTechColor } from "@/lib/utils";

interface ExperienceModalProps {
  experience: Experience | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ExperienceModal({
  experience,
  isOpen,
  onClose,
}: ExperienceModalProps) {
  if (!experience) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text">
            {experience.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Company Info */}
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-2xl flex-shrink-0">
              {experience.company
                .split(" ")
                .map((word) => word[0])
                .join("")
                .slice(0, 2)}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                {experience.company}
              </h3>
              <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{experience.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Briefcase className="h-4 w-4" />
                  <span>{experience.type}</span>
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
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About the Role</h3>
            <p className="text-muted-foreground leading-relaxed">
              {experience.description}
            </p>
          </div>

          {/* Responsibilities */}
          {experience.responsibilities.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Responsibilities</h3>
              <ul className="space-y-3">
                {experience.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary mt-1 flex-shrink-0">▸</span>
                    <span className="text-muted-foreground flex-1">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Technologies & Skills</h3>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className={getTechColor(tech)}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Achievement Badge */}
          {experience.featured && (
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <div className="flex items-center gap-2 text-primary">
                <span className="text-2xl">⭐</span>
                <span className="font-semibold">Featured Experience</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                This role represents a significant milestone in my professional journey.
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
