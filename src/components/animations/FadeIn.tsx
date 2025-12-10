"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeInUp } from "@/lib/animations";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
}

export default function FadeIn({
  children,
  delay = 0,
  className = "",
  duration = 0.6,
}: FadeInProps) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
