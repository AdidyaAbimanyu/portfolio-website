"use client"

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
} from "lucide-react";
import personalData from "../../data/personal.json";
import publicationsData from "../../data/publications.json";
import certificationsData from "../../data/certifications.json";
import { PersonalInfo, Publication, Certification } from "@/types";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function AboutPage() {
  const personal = personalData as PersonalInfo;
  const publications = publicationsData as Publication[];
  const certifications = certificationsData as Certification[];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about solving real-world problems through automization.
            </p>
          </div>
        </FadeIn>

        {/* Bio Section */}
        <FadeIn delay={0.2}>
          <Card className="p-8 mb-12 bg-card/50 backdrop-blur-sm">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Avatar */}
              <div className="flex justify-center items-start">
                <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>

              {/* Bio Content */}
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{personal.name}</h2>
                  <p className="text-xl text-primary mb-4">{personal.title}</p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {personal.bio}
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {personal.interests?.map((interest) => (
                    <Badge key={interest} variant="secondary">
                      {interest}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button asChild>
                    <a href={`mailto:${personal.email}`}>
                      <Mail className="h-4 w-4 mr-2" />
                      Contact Me
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={personal.resume} download>
                      <Download className="h-4 w-4 mr-2" />
                      Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </FadeIn>

        {/* Stats */}
        <FadeIn delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Card className="p-6 text-center bg-card/50 backdrop-blur-sm">
              <Code2 className="h-8 w-8 mx-auto mb-3 text-primary" />
              <p className="text-3xl font-bold mb-1">2+</p>
              <p className="text-sm text-muted-foreground">Years Coding</p>
            </Card>
            <Card className="p-6 text-center bg-card/50 backdrop-blur-sm">
              <BookOpen className="h-8 w-8 mx-auto mb-3 text-primary" />
              <p className="text-3xl font-bold mb-1">{publications.length}</p>
              <p className="text-sm text-muted-foreground">Publications</p>
            </Card>
            <Card className="p-6 text-center bg-card/50 backdrop-blur-sm">
              <Award className="h-8 w-8 mx-auto mb-3 text-primary" />
              <p className="text-3xl font-bold mb-1">{certifications.length}</p>
              <p className="text-sm text-muted-foreground">Certifications</p>
            </Card>
            <Card className="p-6 text-center bg-card/50 backdrop-blur-sm">
              <GraduationCap className="h-8 w-8 mx-auto mb-3 text-primary" />
              <p className="text-3xl font-bold mb-1">3.8+</p>
              <p className="text-sm text-muted-foreground">GPA</p>
            </Card>
          </div>
        </FadeIn>

        {/* Publications Section */}
        <FadeIn delay={0.4}>
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Publications</h2>
            </div>

            <StaggerChildren className="space-y-4">
              {publications.map((pub) => (
                <motion.div key={pub.id} variants={fadeInUp}>
                  <Card className="p-6 hover:border-primary/50 transition-all bg-card/50 backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">
                          {pub.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {pub.authors.join(", ")}
                        </p>
                        <p className="text-sm text-muted-foreground mb-3">
                          {pub.venue}, {pub.year}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Badge
                            variant={
                              pub.status === "Published"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {pub.status}
                          </Badge>
                          {pub.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="outline">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      {pub.pdf && (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={pub.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View PDF
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
        <FadeIn delay={0.5}>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Certifications</h2>
            </div>

            <StaggerChildren className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert) => (
                <motion.div key={cert.id} variants={fadeInUp}>
                  <Card className="p-6 h-full hover:border-primary/50 transition-all bg-card/50 backdrop-blur-sm">
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-lg font-semibold mb-1">
                          {cert.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {cert.issuer}
                        </p>
                      </div>

                      <div className="text-sm text-muted-foreground">
                        Issued: {cert.date}
                        {cert.expiryDate && ` • Expires: ${cert.expiryDate}`}
                      </div>

                      {cert.skills && cert.skills.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      )}

                      {cert.credentialUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full"
                          asChild
                        >
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Credential
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
      </div>
    </div>
  );
}
