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
    <div className="min-h-screen pt-28 pb-24 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <FadeIn>
          <div className="flex flex-col items-start mb-16 space-y-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary/30 border border-border/50 text-sm font-medium">
              <BookOpen className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">Writings</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
              Blog & Insights.
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Thoughts, engineering insights, and technical write-ups on AI, Machine Learning, and Software Development.
            </p>
          </div>
        </FadeIn>

        {/* Search & Tags */}
        <FadeIn delay={0.1}>
          <div className="mb-12 space-y-6">
            <div className="relative max-w-xl">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10 h-11 bg-background border-border/50 rounded-md"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-1.5">
              <Button
                variant={selectedTag === null ? "secondary" : "ghost"}
                size="sm"
                onClick={() => setSelectedTag(null)}
                className={`rounded-md h-9 px-4 ${selectedTag === null
                    ? "bg-foreground text-background hover:bg-foreground/90 font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50 border border-border/50"
                  }`}
              >
                All Topics
              </Button>
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => setSelectedTag(tag)}
                  className={`rounded-md h-9 px-4 ${selectedTag === tag
                      ? "bg-foreground text-background hover:bg-foreground/90 font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50 border border-border/50"
                    }`}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xs font-mono text-muted-foreground mb-8">
            SHOWING {sortedPosts.length} {sortedPosts.length === 1 ? "ARTICLE" : "ARTICLES"}
          </p>
        </FadeIn>

        {/* Posts Grid */}
        <StaggerChildren>
          <motion.div layout className="grid md:grid-cols-2 gap-6">
            {sortedPosts.map((post) => (
              <motion.div
                key={post.id}
                layout
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="h-full flex flex-col justify-between overflow-hidden border-border/50 hover:border-foreground/30 transition-all cursor-pointer group bg-background shadow-sm">
                  <div>
                    <div className="relative w-full aspect-video overflow-hidden bg-muted border-b border-border/40">
                      <div className="w-full h-full flex items-center justify-center bg-secondary/20 group-hover:scale-105 transition-transform duration-500">
                        <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">Article Cover</span>
                      </div>
                      {post.featured && (
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-foreground text-background font-medium rounded-sm text-xs">
                            Featured
                          </Badge>
                        </div>
                      )}
                    </div>

                    <div className="p-6 md:p-8 space-y-4">
                      <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>
                            {new Date(post.publishedAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                        <span className="text-border">•</span>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{post.readTime} min read</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs font-mono rounded-sm bg-secondary/30">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 pt-0">
                    <Button
                      variant="outline"
                      className="w-full bg-transparent text-xs font-medium h-9"
                      disabled
                    >
                      Coming Soon
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </StaggerChildren>

        {filteredPosts.length === 0 && (
          <FadeIn>
            <div className="flex flex-col items-center justify-center py-24 text-center bg-muted/20 rounded-2xl border border-dashed border-border/50 mt-8">
              <BookOpen className="h-12 w-12 text-muted-foreground/50 mb-4" />
              <p className="text-foreground font-medium text-lg mb-2">No articles found</p>
              <p className="text-muted-foreground text-sm mb-6">Try clearing your filters or search query.</p>
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
      </div>
    </div>
  );
}