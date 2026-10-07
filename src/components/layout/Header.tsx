"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";
import NProgress from "nprogress";

const navItems = [
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "About", path: "/about" },
  { name: "Notes", path: "/blog" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleLinkClick = () => {
    NProgress.start();
  };

  const scrolledHeaderClass = "border-b rule bg-background/90 backdrop-blur-sm";
  const topHeaderClass = "border-b border-transparent bg-transparent";
  const headerStateClass = isScrolled ? scrolledHeaderClass : topHeaderClass;

  return (
    <>
      <motion.header
        initial={{ y: -64 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-200",
          headerStateClass
        )}
      >
        <nav
          aria-label="Primary"
          className="shell flex h-16 items-center justify-between"
        >
          <Link
            href="/"
            onClick={handleLinkClick}
            className="font-display text-[17px] font-bold tracking-tight text-foreground"
          >
            Adidya Abimanyu
            <span aria-hidden="true" className="text-signal">
              .
            </span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item, i) => {
              const isActive =
                pathname === item.path ||
                (item.path !== "/" && pathname.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={handleLinkClick}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "group font-mono text-[12px] uppercase tracking-[0.14em] transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="mr-1.5 text-[10px] text-signal"
                  >
                    0{i + 1}
                  </span>
                  {item.name}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "mt-0.5 block h-px bg-signal transition-transform duration-200",
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <span className="folio hidden lg:inline">Surakarta, ID</span>
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:text-foreground md:hidden"
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-0 top-16 z-40 border-b rule bg-background md:hidden"
          >
            <div className="shell flex flex-col gap-1 py-4">
              {[{ name: "Home", path: "/" }, ...navItems].map((item) => {
                const isActive = pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={handleLinkClick}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "rounded-md px-4 py-3 font-mono text-[13px] uppercase tracking-[0.14em] transition-colors",
                      isActive
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
