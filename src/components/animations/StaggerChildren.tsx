"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  initiallyVisible?: boolean;
}

export default function StaggerChildren({
  children,
  className,
  staggerDelay = 0.1,
  initiallyVisible = false,
}: StaggerChildrenProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  if (initiallyVisible) {
    return (
      <motion.div
        initial="visible"
        animate="visible"
        variants={containerVariants}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
