"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SlideIn from "@/components/animations/SlideIn";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="hero-gradient" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <FadeIn delay={0.2}>
              <div className="inline-block">
                <span className="text-sm font-medium px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
                  👋 Welcome to my portfolio
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="gradient-text">Adidya Abimanyu</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Computer Science Student
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl">
                Specializing in{" "}
                <span className="text-primary font-medium">
                  Web Development
                </span>
                ,{" "}
                <span className="text-primary font-medium">Machine Learning</span>
                , and{" "}
                <span className="text-primary font-medium">
                  Deep Learning
                </span>
                . Passionate about solving real-world problems through automization.
              </p>
            </FadeIn>

            <FadeIn delay={0.6}>
              <div className="flex flex-wrap gap-4">
                <Link href="/projects">
                  <Button size="lg" className="group">
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <a href="/resume.pdf" download>
                  <Button size="lg" variant="outline">
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </Button>
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.7}>
              <div className="flex items-center gap-4 pt-4">
                <span className="text-sm text-muted-foreground">
                  Connect with me:
                </span>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/AdidyaAbimanyu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:text-primary"
                    >
                      <Github className="h-5 w-5" />
                    </Button>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/adidya-abimanyu/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:text-primary"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right content - Avatar/Image */}
          <SlideIn direction="right" delay={0.4}>
            <div className="relative">
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10"
              >
                <div className="w-full aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/20 glow-blue p-8 flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/avatar.jpg"
                    alt="Adidya Abimanyu"
                    width={300}
                    height={300}
                    className="rounded-xl object-cover"
                    priority
                  />
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 bg-card border border-border rounded-lg p-3 shadow-lg"
              >
                <div className="text-2xl">🎓</div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 bg-card border border-border rounded-lg p-3 shadow-lg"
              >
                <div className="text-2xl">🚀</div>
              </motion.div>
            </div>
          </SlideIn>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-muted-foreground">Scroll down</span>
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
