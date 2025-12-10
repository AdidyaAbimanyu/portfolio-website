"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  childrenDelay?: number;
}

export default function StaggerChildren({
  children,
  className = "",
  staggerDelay = 0.1,
  childrenDelay = 0.2,
}: StaggerChildrenProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        ...staggerContainer,
        animate: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: childrenDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
