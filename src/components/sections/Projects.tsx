"use client";

import { useState } from "react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren from "@/components/animations/StaggerChildren";
import ProjectCard from "@/components/cards/ProjectCard";
import ProjectModal from "@/components/modals/ProjectModal";
import { Button } from "@/components/ui/button";
import { FolderGit2, ArrowRight } from "lucide-react";
import projectsData from "../../data/projects.json";
import { Project } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import Link from "next/link";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const projects = projectsData as Project[];

  // Get unique categories
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  // Filter projects by category
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  // Sort by order and featured first
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.order - b.order;
  });

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 border-t border-border/20">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header Section */}
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="flex flex-col items-start space-y-4 max-w-2xl">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary/30 border border-border/50 text-sm font-medium transition-colors hover:bg-secondary/50">
                <FolderGit2 className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Portfolio</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
                Selected Works.
              </h2>
              
              <p className="text-lg text-muted-foreground">
                Explore my research and development projects in AI, Machine Learning, and Computer Vision.
              </p>
            </div>

            {/* View All Button */}
            <Link href="/projects" className="hidden md:block">
              <Button variant="ghost" className="group font-medium hover:bg-accent/50 text-muted-foreground hover:text-foreground">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`transition-all rounded-full px-4 ${
                  selectedCategory === category 
                    ? "bg-foreground text-background hover:bg-foreground/90 font-medium" 
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50 border border-transparent hover:border-border/50"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Grid */}
        <StaggerChildren>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {sortedProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  exit="initial"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <ProjectCard
                    project={project}
                    onClick={() => setSelectedProject(project)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </StaggerChildren>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <FadeIn>
            <div className="flex flex-col items-center justify-center py-24 text-center bg-muted/20 rounded-2xl border border-dashed border-border/50 mt-8">
              <FolderGit2 className="h-12 w-12 text-muted-foreground/50 mb-4" />
              <p className="text-foreground font-medium text-lg">No projects found</p>
              <p className="text-muted-foreground">Try selecting a different category.</p>
            </div>
          </FadeIn>
        )}

        {/* View All Button (Mobile Only) */}
        <div className="mt-12 md:hidden">
          <Link href="/projects" className="w-full">
            <Button variant="outline" className="w-full">
              View All Projects ({projects.length})
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}