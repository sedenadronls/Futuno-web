import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { useState, useCallback } from 'react';

/**
 * Global Header Component - Superhuman Dark Elegance
 * Sticky navigation with FUTUNO branding, nav links, Login and Get Started CTAs
 * Supports smooth scrolling to sections on the home page
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const navLinks = [
    { label: 'Home', href: '/', isAnchor: false },
    { label: 'Services', href: '/#services', isAnchor: true, sectionId: 'services' },
    { label: 'Pricing', href: '/#pricing', isAnchor: true, sectionId: 'pricing' },
    { label: 'Blog', href: '/blog', isAnchor: false },
    { label: 'Contact', href: '/contact', isAnchor: false },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location === '/';
    if (href.startsWith('/#')) return location === '/';
    return location.startsWith(href);
  };

  const handleNavClick = useCallback((link: typeof navLinks[0]) => {
    setMobileMenuOpen(false);
    
    if (link.isAnchor && link.sectionId) {
      // If we're already on the home page, scroll to section
      if (location === '/') {
        const element = document.getElementById(link.sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // Navigate to home page first, then scroll
        setLocation('/');
        // Wait for navigation to complete, then scroll
        setTimeout(() => {
          const element = document.getElementById(link.sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      }
    }
  }, [location, setLocation]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" />
      
      <nav className="relative container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <span className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/30">
                F
              </div>
              <span className="text-xl font-bold text-foreground tracking-tight">
                FUTUNO
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isAnchor ? (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link)}
                  className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    isActive(link.href)
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.label}
                </button>
              ) : (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`text-sm font-medium transition-colors duration-200 cursor-pointer ${
                      isActive(link.href)
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              )
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="btn-primary">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4 animate-fade-in-up">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                link.isAnchor ? (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors text-left ${
                      isActive(link.href)
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                    }`}
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link key={link.href} href={link.href}>
                    <span
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                        isActive(link.href)
                          ? 'text-primary bg-primary/10'
                          : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </span>
                  </Link>
                )
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border/50">
                <Link href="/login">
                  <Button
                    variant="ghost"
                    className="w-full justify-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Button>
                </Link>
                <Link href="/register">
                  <Button
                    className="w-full btn-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
