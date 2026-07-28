"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  navigation: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
  ],
  resources: [
    { name: "Blog", path: "/blog" },
    { name: "Resume", path: "/resume.pdf" },
  ],
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/40 bg-background mt-20">
      <div className="container mx-auto max-w-7xl px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* Brand section */}
          <div className="md:col-span-2 flex flex-col items-start">
            <h3 className="text-xl font-bold tracking-tight text-foreground mb-4">
              Adidya Abimanyu.
            </h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Informatics Student. Building clean, scalable solutions and solving real-world problems through intelligent automation.
            </p>
            
            <div className="flex items-center gap-3">
              <a href="https://github.com/adidyaabimanyu" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="h-9 w-9 rounded-md bg-transparent border-border/50 hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </a>
              <a href="https://linkedin.com/in/adidyaabimanyu" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="h-9 w-9 rounded-md bg-transparent border-border/50 hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </a>
              <a href="mailto:adidyawork88@example.com">
                <Button variant="outline" size="icon" className="h-9 w-9 rounded-md bg-transparent border-border/50 hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Button>
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center group"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center group"
                    target={link.path.endsWith(".pdf") ? "_blank" : undefined}
                  >
                    {link.name}
                    {link.path.endsWith(".pdf") && (
                      <ArrowUpRight className="ml-1 h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-4">
            <p>© {new Date().getFullYear()} Adidya Abimanyu.</p>
            <span className="hidden md:inline-block h-3 w-px bg-border"></span>
            <p className="hidden md:block">Surakarta, Indonesia</p>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
              </span>
              All systems operational
            </span>
            <span className="hidden md:inline-block h-3 w-px bg-border"></span>
            <button 
              onClick={scrollToTop} 
              className="hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}