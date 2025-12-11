// Personal Info
export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  phone?: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    scholar?: string;
  };
  avatar?: string;
  resume?: string;
  interests?: string[];
}

// Experience
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  type: "Full-time" | "Part-time" | "Internship" | "Freelance" | "Research";
  startDate: string;
  endDate: string | null;
  current: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
  featured: boolean;
  order: number;
}

// Project
export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: "Research" | "Personal" | "Academic" | "Open Source";
  technologies: string[];
  image: string | null;
  github?: string | null;
  demo?: string | null;
  paper?: string | null;
  dataset?: string | null;
  metrics?: ProjectMetrics | null;
  startDate: string;
  endDate: string;
  featured: boolean;
  tags: string[];
  order: number;
  highlights?: string[] | null;
}

// Project Metrics (untuk research projects)
export interface ProjectMetrics {
  ssim?: number;
  psnr?: number;
  ie?: number;
  ambe?: number;
  fsim?: number;
  accuracy?: number;
  precision?: number;
  recall?: number;
  f1Score?: number;
  [key: string]: number | undefined;
}

// Skill
export interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  icon?: string;
  yearsOfExperience?: number;
}

// Skill Category
export interface SkillCategory {
  name: string;
  skills: Skill[];
  order?: number;
}

// Skills Data Structure
export interface SkillsData {
  categories: SkillCategory[];
}

// Publication
export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  status: "Published" | "Under Review" | "In Preparation" | "Accepted";
  doi?: string | null;
  pdf?: string | null;
  arxiv?: string | null;
  abstract: string;
  tags: string[];
  citations?: number | null;
  order?: number | null;
}

// Certification
export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  expiryDate?: string | null;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  order?: number;
}

// Blog Post
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  readTime?: number;
  featured?: boolean;
}

// Navigation Item
export interface NavItem {
  name: string;
  path: string;
  icon?: string;
}

// Filter Options (untuk filtering projects/experience)
export interface FilterOption {
  label: string;
  value: string;
  count?: number;
}

// Modal State
export interface ModalState {
  isOpen: boolean;
  data: any;
}

// Theme
export type Theme = "light" | "dark" | "system";

// Toast Notification
export interface Toast {
  id: string;
  title: string;
  description?: string;
  type: "success" | "error" | "warning" | "info";
  duration?: number;
}

// SEO Metadata
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

// API Response (jika nanti pakai API)
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Paginated Response
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// Contact Form Data
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Social Link
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  username?: string;
}
