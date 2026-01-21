import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'wouter';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';
import { useState } from 'react';

/**
 * Global Footer Component
 * 4-column layout: About, Sitemap, Social Links, Newsletter
 * Design: Organic Glassmorphism with frosted glass cards
 */
export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-secondary/50 border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-16 md:py-20">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Column 1: About FUTUNO */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">About FUTUNO</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              FUTUNO delivers cutting-edge AI solutions designed for enterprise innovation. We transform businesses through intelligent automation and advanced analytics.
            </p>
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <Mail className="w-4 h-4" />
              <a href="mailto:hello@futuno.ai" className="hover:text-foreground transition-colors">
                hello@futuno.ai
              </a>
            </div>
          </div>

          {/* Column 2: Sitemap */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Sitemap</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="text-foreground/70 hover:text-foreground transition-colors">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="text-foreground/70 hover:text-foreground transition-colors">
                    Blog
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#services">
                  <a className="text-foreground/70 hover:text-foreground transition-colors">
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-foreground/70 hover:text-foreground transition-colors">
                    Contact
                  </a>
                </Link>
              </li>
              <li>
                <a 
                  href="#privacy" 
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="https://twitter.com/futuno"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent/20 flex items-center justify-center text-foreground/70 hover:text-accent transition-all duration-300 hover-lift"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/futuno"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent/20 flex items-center justify-center text-foreground/70 hover:text-accent transition-all duration-300 hover-lift"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/futuno"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent/20 flex items-center justify-center text-foreground/70 hover:text-accent transition-all duration-300 hover-lift"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Newsletter</h3>
            <p className="text-foreground/70 text-sm">
              Subscribe to get the latest AI insights and updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-lg"
                required
              />
              <Button
                type="submit"
                className="w-full bg-gradient-accent hover:shadow-lg text-white font-semibold rounded-lg transition-all duration-300"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">
            © 2026 FUTUNO. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-foreground/60">
            <a href="#privacy" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#terms" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#cookies" className="hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
