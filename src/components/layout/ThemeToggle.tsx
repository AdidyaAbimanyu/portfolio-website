"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-border/50 bg-background/50 cursor-default opacity-50">
        <div className="h-4 w-4" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "relative inline-flex items-center justify-center h-9 w-9 rounded-md",
        "border border-border/50 bg-background/50 hover:bg-secondary/50",
        "transition-colors overflow-hidden text-muted-foreground hover:text-foreground"
      )}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          scale: theme === "dark" ? 0 : 1,
          rotate: theme === "dark" ? 90 : 0,
          opacity: theme === "dark" ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="absolute flex items-center justify-center"
      >
        <Sun className="h-4 w-4" />
      </motion.div>
      
      <motion.div
        initial={false}
        animate={{
          scale: theme === "dark" ? 1 : 0,
          rotate: theme === "dark" ? 0 : -90,
          opacity: theme === "dark" ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="absolute flex items-center justify-center"
      >
        <Moon className="h-4 w-4" />
      </motion.div>
    </button>
  );
}