import Intro from "@/components/sections/Intro";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import SectionHeading from "@/components/layout/SectionHeading";
import projectsData from "@/data/projects.json";
import experiencesData from "@/data/experiences.json";
import skillsData from "@/data/skills.json";
import type { Experience as ExperienceType, Project, SkillsData } from "@/types";

function sortProjects(items: Project[]): Project[] {
  const rank = (p: Project) => {
    if (p.id === "proj-1") return 0;
    if (p.id === "proj-5") return 1;
    return 10 + p.order;
  };
  return [...items].sort((a, b) => rank(a) - rank(b));
}

export default function Home() {
  const projects = sortProjects(projectsData as Project[]);
  const experiences = [...(experiencesData as unknown as ExperienceType[])].sort((a, b) => a.order - b.order);

  return (
    <>
      <Intro />

      <section aria-label="Selected projects" className="shell pb-4 pt-6 md:pt-10">
        <SectionHeading
          index="01"
          label="Projects"
          title="Case studies, not cards."
          description="Two systems I built end to end, then the web platforms around them. Large image, real dates, full stack, one outcome each."
        />
        <Projects projects={projects} limit={3} showLink />
      </section>

      <section aria-label="Experience" className="shell py-16 md:py-24">
        <SectionHeading
          index="02"
          label="Experience"
          title="Where I have worked."
          description="Two internships, one degree in progress, one national ML program. Expand any row for what I actually did."
        />
        <Experience items={experiences} limit={4} />
      </section>

      <section aria-label="Skills" className="shell pb-16 md:pb-24">
        <SectionHeading
          index="03"
          label="Capabilities"
          title="Tools I reach for."
        />
        <Skills data={skillsData as SkillsData} />
      </section>

      <section aria-label="Contact" className="shell pb-20 md:pb-28">
        <Contact />
      </section>
    </>
  );
}
