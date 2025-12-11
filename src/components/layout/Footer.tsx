"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/40 bg-card/50 backdrop-blur-sm mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold gradient-text mb-3">
              Adidya Abimanyu
            </h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              Computer Science Student &  solving real-world problems through technology.
            </p>
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/adidyaabimanyu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary hover:glow-blue-hover transition-all"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a
                href="https://linkedin.com/in/adidyaabimanyu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary hover:glow-blue-hover transition-all"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="mailto:adidyawork88@example.com" aria-label="Email">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary hover:glow-blue-hover transition-all"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-3 text-foreground">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    target={link.path.endsWith(".pdf") ? "_blank" : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} Adidya Abimanyu. Built with{" "}
            <Heart className="inline h-4 w-4 text-red-500 fill-current" /> using
            Next.js & Shadcn UI
          </p>
          <p className="text-sm text-muted-foreground">
            Designed with Token Terminal aesthetics
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            onClick={scrollToTop}
            size="icon"
            className="rounded-full shadow-lg glow-blue hover:glow-blue-lg transition-all"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </motion.div>
      )}
    </footer>
  );
}
