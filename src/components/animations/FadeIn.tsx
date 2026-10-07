"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  initiallyVisible?: boolean;
  y?: number;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.18,
  className,
  initiallyVisible = false,
  y = 10,
}: FadeInProps) {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Render a plain div on server + first client pass so SSR HTML matches
  // hydration. framer-motion only injects `style="opacity:0..."` on the
  // client, which otherwise trips "server HTML didn't match client".
  if (!mounted) {
    return <div className={className}>{children}</div>;
  }

  if (initiallyVisible || reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
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
