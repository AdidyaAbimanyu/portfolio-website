"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  initiallyVisible?: boolean;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  className,
  initiallyVisible = false,
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: initiallyVisible ? 1 : 0, y: initiallyVisible ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
