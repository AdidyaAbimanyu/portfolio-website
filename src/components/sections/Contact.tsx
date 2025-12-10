"use client";

import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";
import personalData from "../../data/personal.json";
import { PersonalInfo } from "@/types";

export default function ContactSection() {
  const personal = personalData as PersonalInfo;

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
              <Send className="h-4 w-4" />
              <span className="text-sm font-medium">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Info */}
          <FadeIn delay={0.2}>
            <Card className="p-8 space-y-6 bg-card/50 backdrop-blur-sm">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a
                        href={`mailto:${personal.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Location</p>
                      <p className="text-muted-foreground">{personal.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border/50">
                <p className="font-medium mb-4">Follow me on</p>
                <div className="flex gap-3">
                  {personal.social.github && (
                    <a
                      href={personal.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="icon"
                        variant="outline"
                        className="hover:text-primary hover:border-primary"
                      >
                        <Github className="h-5 w-5" />
                      </Button>
                    </a>
                  )}
                  {personal.social.linkedin && (
                    <a
                      href={personal.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="icon"
                        variant="outline"
                        className="hover:text-primary hover:border-primary"
                      >
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          </FadeIn>

          {/* CTA Card */}
          <FadeIn delay={0.4}>
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3">
                    Ready to work together?
                  </h3>
                  <p className="text-muted-foreground">
                    I'm available for freelance projects, research collaborations,
                    and full-time opportunities.
                  </p>
                </div>

                <div className="space-y-3">
                  <a href={`mailto:${personal.email}`}>
                    <Button size="lg" className="w-full">
                      <Mail className="h-5 w-5 mr-2" />
                      Send me an email
                    </Button>
                  </a>
                  <a href={personal.resume} download>
                    <Button size="lg" variant="outline" className="w-full">
                      <Send className="h-5 w-5 mr-2" />
                      Download Resume
                    </Button>
                  </a>
                </div>

                <div className="pt-6 border-t border-border/50">
                  <p className="text-sm text-muted-foreground">
                    💡 <strong>Fun fact:</strong> I love solving complex problems
                    with elegant solutions. Let's build something amazing together!
                  </p>
                </div>
              </div>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
