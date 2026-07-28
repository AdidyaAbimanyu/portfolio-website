"use client";

import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Award,
  Code2,
  BookOpen,
  Download,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import personalData from "../../data/personal.json";
import publicationsData from "../../data/publications.json";
import certificationsData from "../../data/certifications.json";
import { PersonalInfo, Publication, Certification } from "@/types";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import Image from "next/image";

export default function AboutPage() {
  const personal = personalData as PersonalInfo;
  const publications = publicationsData as Publication[];
  const certifications = certificationsData as Certification[];

  return (
    <div className="min-h-screen pt-28 pb-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header */}
        <FadeIn>
          <div className="flex flex-col items-start mb-16 space-y-4">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
              About Me.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Passionate about building software systems, conducting AI research, and solving real-world problems through intelligent automation.
            </p>
          </div>
        </FadeIn>

        {/* Bio Section */}
        <FadeIn delay={0.1}>
          <div className="rounded-2xl overflow-hidden border border-border/50 bg-background shadow-sm p-8 md:p-12 mb-16">
            <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
              
              {/* Avatar */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden bg-muted border border-border/50 shrink-0">
                {personal.avatar ? (
                  <Image
                    src={personal.avatar}
                    alt={personal.name}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    priority
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-mono font-bold text-3xl text-muted-foreground">
                    AA
                  </div>
                )}
              </div>

              {/* Bio Content */}
              <div className="flex-1 space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-1">
                    {personal.name}
                  </h2>
                  <p className="text-sm font-mono text-muted-foreground">{personal.title}</p>
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {personal.bio}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {personal.interests?.map((interest) => (
                    <Badge key={interest} variant="secondary" className="rounded-sm bg-secondary/30 text-xs font-mono">
                      {interest}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/40">
                  <Button asChild className="h-10 px-5 font-medium">
                    <a href={`mailto:${personal.email}`}>
                      <Mail className="h-4 w-4 mr-2" />
                      Contact Me
                    </a>
                  </Button>
                  <Button variant="outline" asChild className="h-10 px-5 font-medium bg-background">
                    <a href={personal.resume} download>
                      <Download className="h-4 w-4 mr-2" />
                      Resume
                    </a>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.2}>
          <div className="rounded-2xl overflow-hidden border border-border/50 shadow-sm bg-border/40 mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px">
              
              <div className="bg-background p-6 md:p-8 flex flex-col justify-center">
                <Code2 className="h-5 w-5 text-muted-foreground mb-3" />
                <p className="text-3xl md:text-4xl font-bold font-mono tracking-tighter text-foreground mb-1">2+</p>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Years Coding</p>
              </div>

              <div className="bg-background p-6 md:p-8 flex flex-col justify-center">
                <BookOpen className="h-5 w-5 text-muted-foreground mb-3" />
                <p className="text-3xl md:text-4xl font-bold font-mono tracking-tighter text-foreground mb-1">{publications.length}</p>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Publications</p>
              </div>

              <div className="bg-background p-6 md:p-8 flex flex-col justify-center">
                <Award className="h-5 w-5 text-muted-foreground mb-3" />
                <p className="text-3xl md:text-4xl font-bold font-mono tracking-tighter text-foreground mb-1">{certifications.length}</p>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Certifications</p>
              </div>

              <div className="bg-background p-6 md:p-8 flex flex-col justify-center">
                <GraduationCap className="h-5 w-5 text-muted-foreground mb-3" />
                <p className="text-3xl md:text-4xl font-bold font-mono tracking-tighter text-foreground mb-1">3.5+</p>
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">GPA</p>
              </div>

            </div>
          </div>
        </FadeIn>

        {/* Publications Section */}
        <FadeIn delay={0.3}>
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8 pb-3 border-b border-border/40">
              <BookOpen className="h-5 w-5 text-muted-foreground" />
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Publications</h2>
            </div>

            <StaggerChildren className="space-y-4">
              {publications.map((pub) => (
                <motion.div key={pub.id} variants={fadeInUp}>
                  <Card className="p-6 md:p-8 border-border/50 hover:border-foreground/30 transition-all bg-background shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                      <div className="space-y-3 flex-1">
                        <h3 className="text-lg font-bold tracking-tight text-foreground">
                          {pub.title}
                        </h3>
                        <p className="text-sm text-muted-foreground font-mono">
                          {pub.authors.join(", ")}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          <span className="text-foreground font-medium">{pub.venue}</span> — {pub.year}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 pt-1">
                          <Badge
                            variant={pub.status === "Published" ? "default" : "secondary"}
                            className="rounded-sm text-xs font-mono"
                          >
                            {pub.status}
                          </Badge>
                          {pub.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline" className="rounded-sm text-xs font-mono bg-secondary/20">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {pub.pdf && (
                        <Button variant="outline" size="sm" asChild className="shrink-0 h-9 font-medium">
                          <a href={pub.pdf} target="_blank" rel="noopener noreferrer">
                            View PDF <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 opacity-70" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </StaggerChildren>
          </div>
        </FadeIn>

        {/* Certifications Section */}
        <FadeIn delay={0.4}>
          <div>
            <div className="flex items-center gap-3 mb-8 pb-3 border-b border-border/40">
              <Award className="h-5 w-5 text-muted-foreground" />
              <h2 className="text-2xl font-bold tracking-tight text-foreground">Certifications</h2>
            </div>

            <StaggerChildren className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <motion.div key={cert.id} variants={fadeInUp} className="h-full">
                  <Card className="p-6 md:p-8 h-full flex flex-col justify-between border-border/50 hover:border-foreground/30 transition-all bg-background shadow-sm">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-bold tracking-tight text-foreground mb-1">
                          {cert.name}
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium">
                          {cert.issuer}
                        </p>
                      </div>

                      <p className="text-xs font-mono text-muted-foreground">
                        Issued: {cert.date}
                        {cert.expiryDate && ` • Expires: ${cert.expiryDate}`}
                      </p>

                      {cert.skills && cert.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {cert.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs font-mono rounded-sm bg-secondary/30">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>

                    {cert.credentialUrl && (
                      <div className="pt-6 mt-6 border-t border-border/40">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full font-medium h-9"
                          asChild
                        >
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Verify Credential <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 opacity-70" />
                          </a>
                        </Button>
                      </div>
                    )}
                  </Card>
                </motion.div>
              ))}
            </StaggerChildren>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}