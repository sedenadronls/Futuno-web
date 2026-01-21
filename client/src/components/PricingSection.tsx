import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Check, Sparkles } from 'lucide-react';
import { Link } from 'wouter';

/**
 * Pricing Section Component
 * 3-column comparison grid with monthly/yearly toggle
 */
export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

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
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the plan that fits your automation needs. Scale as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm font-medium ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-primary"
            />
            <span className={`text-sm font-medium ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full font-medium">
                Save 20%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative glass p-8 rounded-2xl transition-all duration-300 ${
                plan.popular
                  ? 'glow-border-strong scale-105 md:scale-110 z-10'
                  : 'hover:glow-border'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    <Sparkles className="w-4 h-4" />
                    Recommended
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

                {/* Price */}
                {plan.monthlyPrice ? (
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-foreground">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                ) : (
                  <div className="text-3xl font-bold text-foreground">Custom</div>
                )}

                {isYearly && plan.monthlyPrice && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Billed annually (${(plan.yearlyPrice || 0) * 12}/year)
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
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
          ))}
        </div>

        {/* Trust Badges */}
        <div className="text-center mt-16">
          <p className="text-sm text-muted-foreground mb-4">
            Trusted by 500+ companies worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
            <span className="text-lg font-semibold opacity-50">TechCorp</span>
            <span className="text-lg font-semibold opacity-50">DataFlow</span>
            <span className="text-lg font-semibold opacity-50">CloudSync</span>
            <span className="text-lg font-semibold opacity-50">InnovateLabs</span>
            <span className="text-lg font-semibold opacity-50">FutureScale</span>
          </div>
        </div>
      </div>
    </section>
  );
}
