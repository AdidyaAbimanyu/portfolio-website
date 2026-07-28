"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, FileText } from "lucide-react";
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
        className="h-full flex flex-col justify-between overflow-hidden cursor-pointer group border-border/50 hover:border-foreground/30 transition-all duration-300 bg-background shadow-sm"
        onClick={onClick}
      >
        <div>
          {/* Image */}
          <div className="relative w-full aspect-video overflow-hidden bg-muted border-b border-border/40">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-secondary/30">
                <span className="text-2xl font-mono text-muted-foreground">{"</>"}</span>
              </div>
            )}
            {/* Featured badge */}
            {project.featured && (
              <div className="absolute top-3 right-3">
                <Badge className="bg-foreground text-background font-medium rounded-sm text-xs">
                  Featured
                </Badge>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                {project.category}
              </span>
            </div>

            <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {project.title}
            </h3>

            <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
              {project.shortDescription}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className={`text-xs rounded-sm bg-secondary/30 ${getTechColor(tech)}`}
                >
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 3 && (
                <Badge variant="secondary" className="text-xs rounded-sm bg-secondary/30 text-muted-foreground">
                  +{project.technologies.length - 3}
                </Badge>
              )}
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="px-6 pb-6 pt-0">
          <div className="flex gap-2 pt-4 border-t border-border/40">
            {project.github && (
              <Button
                size="sm"
                variant="outline"
                className="flex-1 text-xs h-8 bg-transparent"
                onClick={(e) => {
                  e.stopPropagation();
                  if (project.github) {
                    window.open(project.github, "_blank");
                  }
                }}
              >
                <Github className="h-3.5 w-3.5 mr-1.5 opacity-70" />
                Code
              </Button>
            )}
            {project.demo && (
              <Button
                size="sm"
                variant="outline"
                className="flex-1 text-xs h-8 bg-transparent"
                onClick={(e) => {
                  e.stopPropagation();
                  if (project.demo) {
                    window.open(project.demo, "_blank");
                  }
                }}
              >
                <ExternalLink className="h-3.5 w-3.5 mr-1.5 opacity-70" />
                Demo
              </Button>
            )}
            {project.paper && (
              <Button
                size="sm"
                variant="outline"
                className="flex-1 text-xs h-8 bg-transparent"
                onClick={(e) => {
                  e.stopPropagation();
                  if (project.paper) {
                    window.open(project.paper, "_blank");
                  }
                }}
              >
                <FileText className="h-3.5 w-3.5 mr-1.5 opacity-70" />
                Paper
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}