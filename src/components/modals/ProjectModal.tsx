"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileText, Database } from "lucide-react";
import Image from "next/image";
import { Project } from "@/types";
import { getTechColor } from "@/lib/utils";

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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Image */}
          {project.image && (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* Meta info */}
          <div className="flex flex-wrap gap-2">
            <Badge>{project.category}</Badge>
            {project.featured && (
              <Badge variant="outline" className="border-primary text-primary">
                Featured
              </Badge>
            )}
            <Badge variant="secondary">
              {project.startDate} - {project.endDate}
            </Badge>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About</h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Highlights</h3>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-muted-foreground flex-1">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Metrics */}
          {project.metrics && Object.keys(project.metrics).length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Performance Metrics
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(project.metrics).map(([key, value]) => (
                  <div
                    key={key}
                    className="p-4 rounded-lg bg-muted/50 text-center"
                  >
                    <p className="text-xs text-muted-foreground uppercase mb-1">
                      {key}
                    </p>
                    <p className="text-2xl font-bold text-primary">
                      {typeof value === "number" ? value.toFixed(3) : value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
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

          {/* Tags */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-4 border-t">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </Button>
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Button>
              </a>
            )}
            {project.paper && (
              <a
                href={project.paper}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Research Paper
                </Button>
              </a>
            )}
            {project.dataset && (
              <a
                href={project.dataset}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  <Database className="h-4 w-4 mr-2" />
                  Dataset
                </Button>
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
