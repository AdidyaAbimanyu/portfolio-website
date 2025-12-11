"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import NProgress from "nprogress";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Blog", path: "/blog" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleLinkClick = () => {
    NProgress.start();
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "border-b border-border/40 bg-background/80 backdrop-blur-xl shadow-lg"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            onClick={handleLinkClick}
            className="text-xl font-bold gradient-text group"
          >
            <span className="group-hover:scale-110 inline-block transition-transform">
              Portfolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={handleLinkClick}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
                {pathname === item.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-2">
            {/* Social links - hidden on mobile */}
            <div className="hidden sm:flex items-center gap-1">
              <a
                href="https://github.com/AdidyaAbimanyu"
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
                href="https://www.linkedin.com/in/adidya-abimanyu/"
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
              <a href="mailto:adidyawork88@gmail.com" aria-label="Email">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:text-primary hover:glow-blue-hover transition-all"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </a>
            </div>

            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-accent"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-16 left-0 right-0 z-40 md:hidden overflow-hidden border-b border-border/40 bg-background/95 backdrop-blur-xl"
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {/* Mobile nav items */}
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={handleLinkClick}
              className={cn(
                "text-sm font-medium py-2 px-4 rounded-lg transition-colors",
                pathname === item.path
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-primary hover:bg-accent/50"
              )}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile social links */}
          <div className="flex items-center gap-2 pt-2 border-t border-border/40">
            <a
              href="https://github.com/AdidyaAbimanyu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button variant="ghost" size="sm" className="w-full">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/adidya-abimanyu/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button variant="ghost" size="sm" className="w-full">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
