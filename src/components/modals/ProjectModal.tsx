"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileText, Database, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Project } from "@/types";
import { getTechColor, cn } from "@/lib/utils";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[85vh] flex flex-col p-0 gap-0 overflow-hidden bg-background border-border/50">
        
        {/* Cover Image */}
        {project.image && (
          <div className="relative w-full h-40 md:h-56 bg-muted shrink-0 border-b border-border/50">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>
        )}

        {/* Header */}
        <div className="px-6 py-5 md:px-8 md:pt-6 shrink-0 border-b border-border/50 bg-background">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="rounded-sm font-medium bg-secondary/50">
                {project.category}
              </Badge>
              <span className="text-sm font-mono text-muted-foreground border border-border/50 px-2 py-0.5 rounded-sm">
                {project.startDate} — {project.endDate}
              </span>
            </div>
            
            {project.featured && (
              <Badge variant="default" className="rounded-sm">Featured Work</Badge>
            )}
          </div>

          <DialogHeader className="text-left">
            <DialogTitle className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
              {project.title}
            </DialogTitle>
            <DialogDescription className="sr-only">
              Detailed view of the {project.title} project
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-10 bg-background">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column: Description & Highlights */}
            <div className="md:col-span-2 space-y-8">
              <section>
                <h4 className="text-sm font-semibold tracking-wide text-foreground uppercase mb-3">Overview</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {project.fullDescription}
                </p>
              </section>

              {project.highlights && project.highlights.length > 0 && (
                <section>
                  <h4 className="text-sm font-semibold tracking-wide text-foreground uppercase mb-3">Key Features</h4>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Right Column: Meta Info */}
            <div className="space-y-6">
              <section>
                <h4 className="text-sm font-semibold tracking-wide text-foreground uppercase mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className={cn("bg-secondary/30", getTechColor(tech))}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </section>

              <section>
                <h4 className="text-sm font-semibold tracking-wide text-foreground uppercase mb-3">Keywords</h4>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded-sm border border-border/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Metrics */}
          {project.metrics && Object.keys(project.metrics).length > 0 && (
            <section>
              <h4 className="text-sm font-semibold tracking-wide text-foreground uppercase mb-3">Performance Metrics</h4>
              <div className="rounded-xl overflow-hidden border border-border/50 bg-border/40">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-px">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="bg-background p-4 flex flex-col justify-center">
                      <p className="text-xs font-medium text-muted-foreground uppercase mb-1 tracking-wider">{key}</p>
                      <p className="text-2xl font-bold font-mono text-foreground">
                        {typeof value === "number" ? value.toFixed(2) : value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

        </div>

        {/* Footer Actions */}
        <div className="shrink-0 p-4 md:p-6 border-t border-border/50 bg-muted/10 flex flex-wrap gap-3">
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
              <Button className="w-full sm:w-auto h-10 px-6 font-medium">
                <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
              </Button>
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
              <Button variant="outline" className="w-full sm:w-auto h-10 px-6 font-medium bg-background">
                <Github className="h-4 w-4 mr-2" /> Source Code
              </Button>
            </a>
          )}
          {project.paper && (
            <a href={project.paper} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
              <Button variant="secondary" className="w-full sm:w-auto h-10 px-6 font-medium">
                <FileText className="h-4 w-4 mr-2" /> Paper
              </Button>
            </a>
          )}
          {project.dataset && (
            <a href={project.dataset} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
              <Button variant="secondary" className="w-full sm:w-auto h-10 px-6 font-medium">
                <Database className="h-4 w-4 mr-2" /> Dataset
              </Button>
            </a>
          )}
        </div>

      </DialogContent>
    </Dialog>
  );
}