"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { slideInLeft, slideInRight } from "@/lib/animations";

interface SlideInProps {
  children: ReactNode;
  direction?: "left" | "right";
  delay?: number;
  className?: string;
}

export default function SlideIn({
  children,
  direction = "left",
  delay = 0,
  className = "",
}: SlideInProps) {
  const variants = direction === "left" ? slideInLeft : slideInRight;

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
