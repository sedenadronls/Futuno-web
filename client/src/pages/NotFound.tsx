import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

/**
 * 404 Not Found Page
 * Design: Organic Glassmorphism
 */
export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-20 md:py-32">
        <div className="container mx-auto px-4 text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-7xl md:text-8xl font-bold text-accent">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Page Not Found
            </h2>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/">
              <a>
                <Button className="bg-gradient-accent hover:shadow-lg text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 text-lg">
                  Go Home
                </Button>
              </a>
            </Link>
            <Link href="/blog">
              <a>
                <Button 
                  variant="outline" 
                  className="border-2 border-foreground/20 hover:border-foreground/50 font-semibold px-8 py-3 rounded-full transition-all duration-300 text-lg"
                >
                  Visit Blog
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
