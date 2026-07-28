"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Building2, MapPin, Calendar, Briefcase, Star, ArrowRight } from "lucide-react";
import { Experience } from "@/types";
import { formatDate, calculateDuration, getTechColor, cn } from "@/lib/utils";

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
      <DialogContent className="max-w-3xl p-0 gap-0 overflow-hidden bg-background border-border/50">
        
        {/* Header Section */}
        <div className="p-6 md:p-8 border-b border-border/50 bg-muted/10">
          <DialogHeader className="mb-6 text-left">
            <DialogTitle className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
              {experience.title}
            </DialogTitle>
            <DialogDescription className="sr-only">
              Details about my role as {experience.title} at {experience.company}
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <div className="w-12 h-12 rounded-md bg-background border border-border/50 flex items-center justify-center flex-shrink-0 shadow-sm">
              <Building2 className="h-5 w-5 text-muted-foreground" />
            </div>
            
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-sm font-medium text-muted-foreground">
              <span className="text-foreground text-base">{experience.company}</span>
              <span className="hidden sm:inline-block h-4 w-px bg-border/50" />
              
              <div className="flex items-center gap-1.5">
                <Briefcase className="h-3.5 w-3.5" />
                {experience.type}
              </div>
              <span className="hidden sm:inline-block h-4 w-px bg-border/50" />
              
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                {experience.location}
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 md:p-8 max-h-[60vh] overflow-y-auto space-y-8">
          
          {/* Timeframe & Status */}
          <div className="flex items-center justify-between p-4 rounded-lg border border-border/50 bg-background">
            <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(experience.startDate)}</span>
              <ArrowRight className="h-3 w-3 mx-1 opacity-50" />
              <span className={experience.current ? "text-green-500 font-semibold" : ""}>
                {experience.current ? "Present" : formatDate(experience.endDate!)}
              </span>
            </div>
            <Badge variant="secondary" className="font-mono text-xs bg-secondary/50">
              {calculateDuration(experience.startDate, experience.endDate)}
            </Badge>
          </div>

          {/* Achievement Badge */}
          {experience.featured && (
            <div className="flex items-start gap-3 p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
              <Star className="h-5 w-5 mt-0.5 fill-current" />
              <div>
                <p className="font-semibold text-sm">Featured Experience</p>
                <p className="text-sm opacity-90 mt-1">This role represents a significant milestone in my professional journey.</p>
              </div>
            </div>
          )}

          {/* Details */}
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-foreground uppercase mb-3">About the Role</h4>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {experience.description}
              </p>
            </div>

            {experience.responsibilities.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold tracking-wide text-foreground uppercase mb-3">Key Responsibilities</h4>
                <ul className="space-y-3">
                  {experience.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-muted-foreground group">
                      <div className="w-1.5 h-1.5 rounded-full bg-border group-hover:bg-foreground transition-colors mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h4 className="text-sm font-semibold tracking-wide text-foreground uppercase mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className={cn("bg-background", getTechColor(tech))}>
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
}