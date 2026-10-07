import FadeIn from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: string;
  description?: string;
  className?: string;
  aside?: ReactNode;
}

export default function SectionHeading({
  index,
  label,
  title,
  description,
  className,
  aside,
}: SectionHeadingProps) {
  return (
    <FadeIn className={cn("mb-10 md:mb-14", className)}>
      <div className="flex flex-wrap items-end justify-between gap-6 border-b rule pb-6 md:pb-8">
        <div className="max-w-2xl space-y-4">
          <p className="folio">
            <span className="text-signal">{index}</span>
            <span aria-hidden="true" className="mx-3 text-rule">
              /
            </span>
            {label}
          </p>
          <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {description}
            </p>
          ) : null}
        </div>
        {aside ? <div className="shrink-0">{aside}</div> : null}
      </div>
    </FadeIn>
  );
}
