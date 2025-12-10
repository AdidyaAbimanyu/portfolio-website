import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Merge Tailwind classes with proper precedence
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format date to readable string
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
}

// Calculate duration between two dates
export function calculateDuration(
  startDate: string,
  endDate: string | null
): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  if (months < 12) {
    return `${months} ${months === 1 ? "month" : "months"}`;
  }

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (remainingMonths === 0) {
    return `${years} ${years === 1 ? "year" : "years"}`;
  }

  return `${years} ${years === 1 ? "year" : "years"} ${remainingMonths} ${
    remainingMonths === 1 ? "month" : "months"
  }`;
}

// Truncate text with ellipsis
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}

// Slugify text (untuk URL-friendly strings)
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Group items by key
export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce((result, item) => {
    const groupKey = String(item[key]);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {} as Record<string, T[]>);
}

// Sort by date (newest first)
export function sortByDate<T extends { startDate: string }>(
  items: T[]
): T[] {
  return [...items].sort((a, b) => {
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });
}

// Filter featured items
export function getFeaturedItems<T extends { featured: boolean }>(
  items: T[]
): T[] {
  return items.filter((item) => item.featured);
}

// Debounce function
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Check if element is in viewport
export function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Generate random ID
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

// Format number with commas
export function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Clamp number between min and max
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

// Linear interpolation
export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}

// Get color from tech stack (untuk badges)
export function getTechColor(tech: string): string {
  const colors: Record<string, string> = {
    Python: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    JavaScript: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    TypeScript: "bg-blue-400/10 text-blue-400 border-blue-400/20",
    React: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
    "Next.js": "bg-gray-500/10 text-gray-500 border-gray-500/20",
    TensorFlow: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    PyTorch: "bg-red-500/10 text-red-500 border-red-500/20",
    OpenCV: "bg-green-500/10 text-green-500 border-green-500/20",
    "Node.js": "bg-green-600/10 text-green-600 border-green-600/20",
    Tailwind: "bg-teal-500/10 text-teal-500 border-teal-500/20",
  };

  return (
    colors[tech] || "bg-primary/10 text-primary border-primary/20"
  );
}

// Copy to clipboard
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error("Failed to copy:", err);
    return false;
  }
}

// Scroll to element with offset
export function scrollToElement(
  elementId: string,
  offset: number = 80
): void {
  const element = document.getElementById(elementId);
  if (element) {
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}
