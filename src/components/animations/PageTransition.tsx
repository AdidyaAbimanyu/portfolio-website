"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(false);
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  return <div className={isReady ? "opacity-100" : "opacity-0"}>{children}</div>;
}
