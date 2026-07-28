"use client";

import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Github, Linkedin, ArrowUpRight, Download } from "lucide-react";
import personalData from "../../data/personal.json";
import { PersonalInfo } from "@/types";

export default function ContactSection() {
  const personal = personalData as PersonalInfo;

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 border-t border-border/20">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <FadeIn>
          <div className="flex flex-col items-start mb-16 space-y-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary/30 border border-border/50 text-sm font-medium">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Contact</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
              Let's build together.
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl">
              I'm currently open to new opportunities, freelance projects, and research collaborations.
            </p>
          </div>
        </FadeIn>

        {/* Bento Box Contact Panel */}
        <FadeIn delay={0.2}>
          <div className="rounded-2xl overflow-hidden border border-border/50 shadow-sm bg-border/40 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-px">
              
              {/* Panel Kiri: Informasi Kontak */}
              <div className="bg-background/95 backdrop-blur-sm p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-8">Connect</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-md border border-border/50 bg-secondary/20 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-secondary/50">
                        <Mail className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
                        <a
                          href={`mailto:${personal.email}`}
                          className="text-lg font-medium text-foreground hover:underline decoration-border underline-offset-4 transition-all"
                        >
                          {personal.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-md border border-border/50 bg-secondary/20 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-secondary/50">
                        <MapPin className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Location</p>
                        <p className="text-lg font-medium text-foreground">{personal.location}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border/50">
                  <p className="text-sm font-medium text-muted-foreground mb-4">Social Profiles</p>
                  <div className="flex gap-3">
                    {personal.social.github && (
                      <a href={personal.social.github} target="_blank" rel="noopener noreferrer">
                        <Button size="icon" variant="outline" className="rounded-md hover:bg-secondary/50 transition-colors">
                          <Github className="h-4 w-4" />
                          <span className="sr-only">GitHub</span>
                        </Button>
                      </a>
                    )}
                    {personal.social.linkedin && (
                      <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer">
                        <Button size="icon" variant="outline" className="rounded-md hover:bg-secondary/50 transition-colors">
                          <Linkedin className="h-4 w-4" />
                          <span className="sr-only">LinkedIn</span>
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Panel Kanan: Call to Action */}
              <div className="bg-muted/10 backdrop-blur-sm p-8 md:p-12 flex flex-col justify-center">
                <div className="max-w-sm">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background border border-border mb-8 shadow-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-medium text-foreground">Available for work</span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight mb-3">
                    Have a project in mind?
                  </h3>
                  <p className="text-muted-foreground mb-8">
                    Drop me an email to discuss your ideas, or download my resume to see my detailed qualifications.
                  </p>

                  <div className="flex flex-col gap-3">
                    <a href={`mailto:${personal.email}`}>
                      <Button size="lg" className="w-full justify-between group h-12">
                        Send Message
                        <ArrowUpRight className="h-4 w-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Button>
                    </a>
                    <a href={personal.resume} download>
                      <Button size="lg" variant="outline" className="w-full justify-between bg-background/50 h-12">
                        Download Resume
                        <Download className="h-4 w-4 opacity-70" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}