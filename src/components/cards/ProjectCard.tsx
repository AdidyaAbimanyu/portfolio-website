"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileText, Database } from "lucide-react";
import Image from "next/image";
import { Project } from "@/types";
import { cardHover } from "@/lib/animations";
import { getTechColor } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className="h-full"
    >
      <Card
        className="h-full overflow-hidden cursor-pointer group border-border/50 hover:border-primary/50 transition-all duration-300 bg-card/50 backdrop-blur-sm"
        onClick={onClick}
      >
        {/* Image */}
        <div className="relative w-full aspect-video overflow-hidden bg-muted">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
              <span className="text-4xl">💻</span>
            </div>
          )}
          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-primary text-primary-foreground">
                Featured
              </Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Category */}
          <Badge variant="outline" className="text-xs">
            {project.category}
          </Badge>

          {/* Title */}
          <h3 className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground text-sm line-clamp-3">
            {project.shortDescription}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className={`text-xs ${getTechColor(tech)}`}
              >
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="secondary" className="text-xs">
                +{project.technologies.length - 4} more
              </Badge>
            )}
          </div>

          {/* Metrics (if available) */}
          {project.metrics && (
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border/50">
              {Object.entries(project.metrics)
                .slice(0, 3)
                .map(([key, value]) => (
                  <div key={key} className="text-center">
                    <p className="text-xs text-muted-foreground uppercase">
                      {key}
                    </p>
                    <p className="text-sm font-semibold text-primary">
                      {typeof value === "number" ? value.toFixed(2) : value}
                    </p>
                  </div>
                ))}
            </div>
          )}

          {/* Links */}
          <div className="flex gap-2 pt-2">
            {project.github && (
              <Button
                size="sm"
                variant="outline"
                className="flex-1"
                onClick={(e) => {
                  e.stopPropagation();
                  if (project.github) {  // ← Tambah check lagi
                    window.open(project.github, "_blank");
                  }
                }}
              >
                <Github className="h-4 w-4 mr-2" />
                Code
              </Button>
            )}
            {project.demo && (
              <Button
                size="sm"
                variant="outline"
                className="flex-1"
                onClick={(e) => {
                  e.stopPropagation();
                  if (project.demo) {  // ← Tambah check lagi
                    window.open(project.demo, "_blank");
                  }
                }}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Demo
              </Button>
            )}
            {project.paper && (
              <Button
                size="sm"
                variant="outline"
                className="flex-1"
                onClick={(e) => {
                  e.stopPropagation();
                  if (project.paper) {  // ← Tambah check lagi
                    window.open(project.paper, "_blank");
                  }
                }}
              >
                <FileText className="h-4 w-4 mr-2" />
                Paper
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
