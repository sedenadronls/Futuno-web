import { useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Home, ArrowLeft } from 'lucide-react';

/**
 * 404 Not Found Page - Superhuman Dark Elegance
 */
export default function NotFound() {
  useEffect(() => {
    document.title = '404 - Page Not Found | FUTUNO';
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 flex items-center justify-center py-20">
        <div className="absolute inset-0 gradient-radial opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            {/* 404 Display */}
            <div className="mb-8">
              <span className="text-9xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 leading-none">
                404
              </span>
            </div>

            {/* Message */}
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Page Not Found
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/">
                <Button className="btn-primary">
                  <Home className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Button
                variant="outline"
                className="btn-secondary"
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="mt-16 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">
                Here are some helpful links:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/">
                  <span className="text-primary hover:underline cursor-pointer">Home</span>
                </Link>
                <Link href="/blog">
                  <span className="text-primary hover:underline cursor-pointer">Blog</span>
                </Link>
                <Link href="/contact">
                  <span className="text-primary hover:underline cursor-pointer">Contact</span>
                </Link>
                <Link href="/#pricing">
                  <span className="text-primary hover:underline cursor-pointer">Pricing</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
