"use client";

import { useState } from "react";
import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren from "@/components/animations/StaggerChildren";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Search, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

// Dummy blog data - nanti bisa diganti dengan real data
const blogPosts = [
  {
    id: "1",
    slug: "image-enhancement-techniques",
    title: "Advanced Image Enhancement Techniques in Computer Vision",
    excerpt:
      "Exploring modern approaches to image enhancement using deep learning and traditional methods.",
    content: "",
    coverImage: "/images/blog/blog-1.jpg",
    tags: ["Computer Vision", "Image Processing", "Deep Learning"],
    publishedAt: "2024-12-01",
    readTime: 8,
    featured: true,
  },
  {
    id: "2",
    slug: "deep-learning-optimization",
    title: "Optimizing Deep Learning Models for Production",
    excerpt:
      "Best practices for deploying and optimizing deep learning models in production environments.",
    content: "",
    coverImage: "/images/blog/blog-2.jpg",
    tags: ["Deep Learning", "Optimization", "Production"],
    publishedAt: "2024-11-25",
    readTime: 12,
    featured: true,
  },
  {
    id: "3",
    slug: "clustering-algorithms-comparison",
    title: "Comparing Clustering Algorithms: K-Means, FCM, GMM, and HDBSCAN",
    excerpt:
      "A comprehensive comparison of popular clustering algorithms and their use cases.",
    content: "",
    coverImage: "/images/blog/blog-3.jpg",
    tags: ["Machine Learning", "Clustering", "Algorithms"],
    publishedAt: "2024-11-15",
    readTime: 10,
    featured: false,
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags
  const allTags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags))
  );

  // Filter posts
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
              <BookOpen className="h-4 w-4" />
              <span className="text-sm font-medium">Blog</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Blog & <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Thoughts on AI, Machine Learning, and Software Development
            </p>
          </div>
        </FadeIn>

        {/* Search & Tags */}
        <FadeIn delay={0.2}>
          <div className="mb-12 space-y-4">
            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Tags Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant={selectedTag === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(null)}
              >
                All
              </Button>
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Results count */}
        <FadeIn delay={0.3}>
          <p className="text-muted-foreground mb-6">
            {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""}{" "}
            found
          </p>
        </FadeIn>

        {/* Blog Posts Grid */}
        <StaggerChildren>
          <motion.div layout className="grid md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                exit="initial"
              >
                <Card className="h-full overflow-hidden hover:border-primary/50 transition-all cursor-pointer group bg-card/50 backdrop-blur-sm">
                  {/* Cover Image */}
                  <div className="relative w-full aspect-video overflow-hidden bg-muted">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-105 transition-transform duration-300">
                      <span className="text-6xl">📝</span>
                    </div>
                    {post.featured && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-primary text-primary-foreground">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(post.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Read More */}
                    <Button variant="ghost" className="w-full group-hover:text-primary">
                      Read More →
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </StaggerChildren>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <FadeIn>
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg mb-4">
                No articles found matching your criteria
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTag(null);
                }}
              >
                Clear Filters
              </Button>
            </div>
          </FadeIn>
        )}

        {/* Coming Soon Notice */}
        <FadeIn delay={0.5}>
          <Card className="p-8 mt-12 text-center bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <h3 className="text-2xl font-bold mb-2">More Articles Coming Soon!</h3>
            <p className="text-muted-foreground">
              I'm working on more technical articles about AI, Machine Learning, and
              Software Development. Stay tuned! 🚀
            </p>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}
