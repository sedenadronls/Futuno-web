import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Check, Sparkles, Zap } from 'lucide-react';
import { Link } from 'wouter';

/**
 * Pricing Section Component with 3D Animations
 * 3-column comparison grid with monthly/yearly toggle and 3D slide effects
 */
export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: 'Starter',
      description: 'Basic workflow scripts for small teams',
      monthlyPrice: 49,
      yearlyPrice: 39,
      features: [
        'Up to 5 workflow automations',
        'Basic LLM integration',
        '1,000 API calls/month',
        'Email support',
        'Basic analytics dashboard',
        'Community access',
      ],
      cta: 'Get Started',
      popular: false,
      animationDirection: 'left',
    },
    {
      name: 'Professional',
      description: 'Autonomous agent integration for growing teams',
      monthlyPrice: 79,
      yearlyPrice: 63,
      features: [
        'Unlimited workflow automations',
        'Advanced LLM integration',
        '10,000 API calls/month',
        'Priority email & chat support',
        'Advanced analytics & reporting',
        'Custom agent workflows',
        'API access',
        'Team collaboration tools',
      ],
      cta: 'Get Started',
      popular: true,
      animationDirection: 'bottom',
    },
    {
      name: 'Enterprise',
      description: 'Full-scale neural integration and dedicated support',
      monthlyPrice: null,
      yearlyPrice: null,
      features: [
        'Everything in Professional',
        'Unlimited API calls',
        'Dedicated account manager',
        '24/7 phone & video support',
        'Custom LLM fine-tuning',
        'On-premise deployment option',
        'SLA guarantee',
        'Security audit & compliance',
        'Custom integrations',
      ],
      cta: 'Contact Sales',
      popular: false,
      animationDirection: 'right',
    },
  ];

  const getAnimationClass = (direction: string, index: number) => {
    if (!isVisible) return 'opacity-0';
    
    const baseDelay = index * 0.15;
    const delayClass = `stagger-${index + 1}`;
    
    switch (direction) {
      case 'left':
        return `animate-slide-3d-left ${delayClass}`;
      case 'right':
        return `animate-slide-3d-right ${delayClass}`;
      case 'bottom':
      default:
        return `animate-slide-3d-bottom ${delayClass}`;
    }
  };

  return (
    <section id="pricing" ref={sectionRef} className="py-20 md:py-32 relative scroll-mt-20 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Pricing Plans</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the plan that fits your automation needs. Scale as you grow.
          </p>

          {/* Billing Toggle with enhanced styling */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium transition-colors duration-300 ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-primary"
            />
            <span className={`text-sm font-medium transition-colors duration-300 ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="text-xs bg-gradient-to-r from-primary to-blue-400 text-white px-3 py-1 rounded-full font-semibold animate-fade-in-scale">
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* 3D Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto perspective-container">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative ${getAnimationClass(plan.animationDirection, index)}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className={`relative h-full glass p-8 rounded-2xl transition-all duration-500 card-3d ${
                  plan.popular
                    ? 'glow-border-strong md:scale-105 z-10 bg-gradient-to-b from-primary/10 to-transparent'
                    : 'hover:glow-border'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 bg-gradient-to-r from-primary to-blue-400 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg shadow-primary/30">
                      <Sparkles className="w-4 h-4" />
                      Recommended
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

                  {/* Price with animation */}
                  {plan.monthlyPrice ? (
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-bold text-foreground transition-all duration-300">
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-muted-foreground">/mo</span>
                    </div>
                  ) : (
                    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                      Custom
                    </div>
                  )}

                  {isYearly && plan.monthlyPrice && (
                    <p className="text-sm text-muted-foreground mt-2">
                      Billed annually (${(plan.yearlyPrice || 0) * 12}/year)
                    </p>
                  )}
                </div>

                {/* Features with staggered animation */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-start gap-3"
                      style={{ 
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                        transition: `all 0.3s ease-out ${(index * 0.2) + (featureIndex * 0.05)}s`
                      }}
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link href={plan.name === 'Enterprise' ? '/contact' : '/register'}>
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'btn-primary'
                        : 'btn-secondary'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges with glass effect */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in-up stagger-5' : 'opacity-0'}`}>
          <p className="text-sm text-muted-foreground mb-6">
            Trusted by 500+ companies worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {['TechCorp', 'DataFlow', 'CloudSync', 'InnovateLabs', 'FutureScale'].map((company, index) => (
              <div 
                key={company}
                className="glass px-6 py-3 rounded-lg hover-lift"
                style={{ animationDelay: `${0.5 + (index * 0.1)}s` }}
              >
                <span className="text-lg font-semibold text-muted-foreground">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
