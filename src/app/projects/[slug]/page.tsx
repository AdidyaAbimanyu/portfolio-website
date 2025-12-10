import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  FileText,
  Database,
  Calendar,
} from "lucide-react";
import projectsData from "../../../data/projects.json";
import { Project } from "@/types";
import { getTechColor } from "@/lib/utils";

// Generate static params for all projects
export async function generateStaticParams() {
  const projects = projectsData as Project[];
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const projects = projectsData as Project[];
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Projects`,
    description: project.shortDescription,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const projects = projectsData as Project[];
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/projects">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Link>
        </Button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge>{project.category}</Badge>
            {project.featured && (
              <Badge variant="outline" className="border-primary text-primary">
                Featured
              </Badge>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {project.title}
          </h1>

          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>
                {project.startDate} - {project.endDate}
              </span>
            </div>
          </div>
        </div>

        {/* Image */}
        {project.image && (
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-3 mb-8">
          {project.github && (
            <Button asChild>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" />
                View Code
              </a>
            </Button>
          )}
          {project.demo && (
            <Button variant="outline" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
          {project.paper && (
            <Button variant="outline" asChild>
              <a href={project.paper} target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4 mr-2" />
                Research Paper
              </a>
            </Button>
          )}
        </div>

        {/* Description */}
        <Card className="p-8 mb-8 bg-card/50 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4">About This Project</h2>
          <p className="text-muted-foreground leading-relaxed">
            {project.fullDescription}
          </p>
        </Card>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <Card className="p-8 mb-8 bg-card/50 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
            <ul className="space-y-3">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-xl">✓</span>
                  <span className="text-muted-foreground flex-1">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        )}

        {/* Metrics */}
        {project.metrics && Object.keys(project.metrics).length > 0 && (
          <Card className="p-8 mb-8 bg-card/50 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-6">Performance Metrics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div
                  key={key}
                  className="p-4 rounded-lg bg-muted/50 text-center"
                >
                  <p className="text-xs text-muted-foreground uppercase mb-2">
                    {key}
                  </p>
                  <p className="text-3xl font-bold text-primary">
                    {typeof value === "number" ? value.toFixed(3) : value}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Technologies */}
        <Card className="p-8 mb-8 bg-card/50 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
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
        </Card>

        {/* Tags */}
        <Card className="p-8 bg-card/50 backdrop-blur-sm">
          <h2 className="text-2xl font-bold mb-4">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
