"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Download, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:24px_24px] opacity-50" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-8">

          {/* Bagian Teks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 flex flex-col items-start space-y-8"
          >
            {/* Status Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-muted-foreground">Available for new opportunities</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground">
                Adidya Abimanyu
              </h1>
              <h2 className="text-2xl sm:text-3xl font-medium text-muted-foreground">
                Informatics Student & Developer.
              </h2>
            </div>

            {/* Deskripsi Singkat */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Specializing in <strong className="text-foreground font-semibold">Web Development, </strong>
              <strong className="text-foreground font-semibold">Machine Learning, and </strong>
              <strong className="text-foreground font-semibold">Deep Learning.</strong>
              Passionate about solving real-world problems through intelligent automation.
            </p>

            {/* Aksi & Sosial */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/projects">
                <Button size="lg" className="h-12 px-6 rounded-md font-medium group">
                  View Projects
                  <ArrowUpRight className="ml-2 h-4 w-4 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </Link>

              <a href="/resume.pdf" download>
                <Button size="lg" variant="outline" className="h-12 px-6 rounded-md font-medium">
                  <Download className="mr-2 h-4 w-4 opacity-70" />
                  Resume
                </Button>
              </a>

              <div className="flex items-center gap-2 ml-2 sm:ml-4 border-l pl-4 sm:pl-6 border-border">
                <a href="https://github.com/AdidyaAbimanyu" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/adidya-abimanyu/" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bagian Gambar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex-1 w-full max-w-md lg:max-w-lg relative"
          >
            {/* Frame untuk Gambar */}
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden bg-muted group">
              <Image
                src="/images/avatar.jpg"
                alt="Adidya Abimanyu"
                fill
                className="object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}