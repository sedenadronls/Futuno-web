import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'wouter';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';
import { useState } from 'react';

/**
 * Global Footer Component - Superhuman Dark Elegance
 * 4-column layout with dark theme styling
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
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-4 py-16 md:py-20">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Column 1: About FUTUNO */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                F
              </div>
              <span className="text-xl font-bold text-foreground tracking-tight">
                FUTUNO
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Elite AI Automation Agency. We build autonomous agent workflows, custom LLM integrations, and neural strategy solutions for enterprises worldwide.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              <a href="mailto:hello@futuno.ai" className="hover:text-primary transition-colors">
                hello@futuno.ai
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/#services">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Custom LLM Integration
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/#services">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Autonomous Agent Workflows
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/#services">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Neural Strategy Consulting
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/#pricing">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Pricing Plans
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/blog">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Blog
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
              <li>
                <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Terms of Service
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Newsletter</h3>
            <p className="text-muted-foreground text-sm">
              Get the latest AI automation insights delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-secondary border-border"
                required
              />
              <Button
                type="submit"
                className="w-full btn-primary"
              >
                {subscribed ? '✓ Subscribed!' : 'Subscribe'}
              </Button>
            </form>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <a
                href="https://twitter.com/futuno"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/futuno"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/futuno"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 FUTUNO. All rights reserved. Automating the Future of Work.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <span className="hover:text-primary transition-colors cursor-pointer">
              Privacy
            </span>
            <span className="hover:text-primary transition-colors cursor-pointer">
              Terms
            </span>
            <span className="hover:text-primary transition-colors cursor-pointer">
              Cookies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
