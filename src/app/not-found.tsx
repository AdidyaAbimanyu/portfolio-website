import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-2xl">
        {/* 404 Illustration */}
        <div className="text-9xl font-bold gradient-text">404</div>
        
        <h1 className="text-4xl md:text-5xl font-bold">Page Not Found</h1>
        
        <p className="text-xl text-muted-foreground">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Button size="lg" asChild>
            <Link href="/">
              <Home className="h-5 w-5 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button size="lg" variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back
          </Button>
        </div>

        {/* Suggested Links */}
        <div className="pt-8">
          <p className="text-sm text-muted-foreground mb-4">
            You might be looking for:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link
              href="/projects"
              className="text-sm text-primary hover:underline"
            >
              Projects
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="/about"
              className="text-sm text-primary hover:underline"
            >
              About
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="/blog"
              className="text-sm text-primary hover:underline"
            >
              Blog
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="/#contact"
              className="text-sm text-primary hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
