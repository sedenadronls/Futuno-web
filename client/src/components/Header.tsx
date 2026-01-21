import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

/**
 * Global Header Component
 * Sticky navigation with FUTUNO branding, centered nav links, and Contact CTA
 * Design: Organic Glassmorphism with frosted glass effect
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: 'Services', href: '/#services' },
    { label: 'About', href: '/#about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 glass pointer-events-none" />
      
      <nav className="relative container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center text-white font-bold text-lg transition-transform duration-300 group-hover:scale-110">
                F
              </div>
              <span className="text-xl md:text-2xl font-bold text-foreground hidden sm:inline">
                FUTUNO
              </span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className="text-foreground/70 hover:text-foreground transition-colors duration-200 font-medium">
                  {link.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Desktop Contact CTA */}
          <div className="hidden md:block">
            <Link href="/contact">
              <a>
                <Button 
                  className="bg-gradient-accent hover:shadow-lg text-white font-semibold px-6 py-2 rounded-full transition-all duration-300"
                >
                  Contact Us
                </Button>
              </a>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4 animate-fade-in-up">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a 
                    className="block px-4 py-2 text-foreground/70 hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
              <Link href="/contact">
                <a onClick={() => setMobileMenuOpen(false)}>
                  <Button 
                    className="w-full bg-gradient-accent hover:shadow-lg text-white font-semibold rounded-full transition-all duration-300"
                  >
                    Contact Us
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
