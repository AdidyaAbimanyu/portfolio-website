"use client";

import Hero from "@/components/sections/Hero";
import ExperienceSection from "@/components/sections/Experience";
import ProjectsSection from "@/components/sections/Projects";
import SkillsSection from "@/components/sections/Skills";
import ContactSection from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
