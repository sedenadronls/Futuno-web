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
 * Service Card Component with Side Drawer
 * Bento grid card that opens a detailed breakdown on "Learn More"
 */
export default function ServiceCard({
  icon,
  title,
  description,
  features,
  steps,
}: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass p-6 md:p-8 rounded-2xl card-3d group">
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
        {icon}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>

      {/* Features Preview */}
      <ul className="space-y-2 mb-6">
        {features.slice(0, 3).map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-primary flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Learn More Button with Sheet */}
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
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
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
                <li key={index} className="flex items-start gap-3">
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
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-sm">
                      {index + 1}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-px h-8 bg-border mx-auto mt-2" />
                    )}
                  </div>
                  <div className="pb-4">
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
  );
}
