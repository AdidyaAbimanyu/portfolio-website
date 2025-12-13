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
import blogsData from "@/data/blogs.json";
import { BlogPost } from "@/types";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const blogPosts = blogsData as BlogPost[];

  const allTags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags))
  );

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
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

        <FadeIn delay={0.2}>
          <div className="mb-12 space-y-4">
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

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

        <FadeIn delay={0.3}>
          <p className="text-muted-foreground mb-6">
            {sortedPosts.length} article{sortedPosts.length !== 1 ? "s" : ""} found
          </p>
        </FadeIn>

        <StaggerChildren>
          <motion.div layout className="grid md:grid-cols-2 gap-8">
            {sortedPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="h-full overflow-hidden hover:border-primary/50 transition-all cursor-pointer group bg-card/50 backdrop-blur-sm">
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

                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>
                          {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      variant="ghost"
                      className="w-full group-hover:text-primary"
                      disabled
                    >
                      Coming Soon →
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </StaggerChildren>

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

        <FadeIn delay={0.5}>
          <Card className="p-8 mt-12 text-center bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <h3 className="text-2xl font-bold mb-2">More Articles Coming Soon!</h3>
            <p className="text-muted-foreground">
              I'm working on technical articles about my projects, research findings, and development experiences. Stay tuned! 🚀
            </p>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}
