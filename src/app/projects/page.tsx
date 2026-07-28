"use client";

import { useState } from "react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren from "@/components/animations/StaggerChildren";
import ProjectCard from "@/components/cards/ProjectCard";
import ProjectModal from "@/components/modals/ProjectModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, FolderGit2 } from "lucide-react";
import projectsData from "../../data/projects.json";
import { Project } from "@/types";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const projects = projectsData as Project[];

  // Get unique categories
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  // Filter projects
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  // Sort by featured and order
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.order - b.order;
  });

  return (
    <div className="min-h-screen pt-28 pb-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <FadeIn>
          <div className="flex flex-col items-start mb-16 space-y-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary/30 border border-border/50 text-sm font-medium">
              <FolderGit2 className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Directory</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
              All Projects.
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Explore a comprehensive archive of my software engineering, artificial intelligence, and machine learning projects.
            </p>
          </div>
        </FadeIn>

        {/* Search & Filter */}
        <FadeIn delay={0.1}>
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects, technologies..."
                className="pl-10 h-11 bg-background border-border/50 rounded-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-1.5">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`transition-all rounded-md px-4 h-11 ${
                    selectedCategory === category 
                      ? "bg-foreground text-background hover:bg-foreground/90 font-medium" 
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50 border border-border/50"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Results count */}
        <FadeIn delay={0.2}>
          <p className="text-xs font-mono text-muted-foreground mb-8">
            SHOWING {sortedProjects.length} OF {projects.length} PROJECTS
          </p>
        </FadeIn>

        {/* Projects Grid */}
        <StaggerChildren>
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                exit="initial"
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </motion.div>
            ))}
          </motion.div>
        </StaggerChildren>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <FadeIn>
            <div className="flex flex-col items-center justify-center py-24 text-center bg-muted/20 rounded-2xl border border-dashed border-border/50 mt-8">
              <FolderGit2 className="h-12 w-12 text-muted-foreground/50 mb-4" />
              <p className="text-foreground font-medium text-lg mb-2">No projects found</p>
              <p className="text-muted-foreground text-sm mb-6">Try adjusting your search criteria or filters.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Clear Filters
              </Button>
            </div>
          </FadeIn>
        )}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}