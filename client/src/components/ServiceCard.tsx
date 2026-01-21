import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'wouter';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  steps: { title: string; description: string }[];
}

/**
 * Service Card Component with 3D Effects and Side Drawer
 * Bento grid card with 3D hover effects that opens a detailed breakdown on "Learn More"
 */
export default function ServiceCard({
  icon,
  title,
  description,
  features,
  steps,
}: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="glass p-6 md:p-8 rounded-2xl group relative overflow-hidden"
      style={{
        transform: isHovered 
          ? 'translateY(-12px) rotateX(5deg) rotateY(-2deg) scale(1.02)' 
          : 'translateY(0) rotateX(0) rotateY(0) scale(1)',
        boxShadow: isHovered 
          ? '0 40px 80px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 122, 255, 0.4), 0 0 60px rgba(0, 122, 255, 0.2)'
          : '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Gradient overlay on hover */}
      <div 
        className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/10 to-transparent pointer-events-none"
        style={{ 
          opacity: isHovered ? 1 : 0, 
          transition: 'opacity 0.5s ease-out' 
        }}
      />
      
      {/* Shine effect */}
      <div 
        className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden"
        style={{ opacity: isHovered ? 1 : 0, transition: 'opacity 0.5s' }}
      >
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          style={{
            transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
            transition: 'transform 0.8s ease-out',
          }}
        />
      </div>

      {/* Icon with 3D float effect */}
      <div 
        className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 relative z-10"
        style={{
          transform: isHovered ? 'translateZ(30px) scale(1.1)' : 'translateZ(0) scale(1)',
          boxShadow: isHovered ? '0 15px 40px rgba(0, 122, 255, 0.3)' : 'none',
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {icon}
      </div>

      {/* Content with 3D depth */}
      <h3 
        className="text-xl font-bold text-foreground mb-3 relative z-10"
        style={{
          transform: isHovered ? 'translateZ(20px)' : 'translateZ(0)',
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {title}
      </h3>
      <p 
        className="text-muted-foreground mb-6 leading-relaxed relative z-10"
        style={{
          transform: isHovered ? 'translateZ(15px)' : 'translateZ(0)',
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {description}
      </p>

      {/* Features Preview with staggered 3D effect */}
      <ul className="space-y-2 mb-6 relative z-10">
        {features.slice(0, 3).map((feature, index) => (
          <li 
            key={index} 
            className="flex items-center gap-2 text-sm"
            style={{
              transform: isHovered 
                ? `translateZ(${10 + index * 5}px) translateX(8px)` 
                : 'translateZ(0) translateX(0)',
              transition: `all 0.5s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s`,
            }}
          >
            <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Check className="w-2.5 h-2.5 text-primary" />
            </div>
            <span className="text-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Learn More Button with Sheet */}
      <div 
        className="relative z-10"
        style={{
          transform: isHovered ? 'translateZ(25px)' : 'translateZ(0)',
          transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="w-full justify-between text-primary hover:text-primary hover:bg-primary/10 group/btn"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full sm:max-w-lg bg-card border-border overflow-y-auto">
            <SheetHeader className="mb-8">
              <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                {icon}
              </div>
              <SheetTitle className="text-2xl font-bold text-foreground">
                {title}
              </SheetTitle>
              <SheetDescription className="text-muted-foreground">
                {description}
              </SheetDescription>
            </SheetHeader>

            {/* Full Features List */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                What's Included
              </h4>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 glass p-3 rounded-lg">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Step-by-Step Breakdown */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                How It Works
              </h4>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-4 glass p-4 rounded-lg hover-lift">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-semibold text-sm">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">{step.title}</h5>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-border">
              <Link href="/register">
                <Button className="w-full btn-primary" onClick={() => setIsOpen(false)}>
                  Get Started with {title}
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
