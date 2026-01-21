import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { updateMetaTags } from '@/lib/seo';
import { useEffect } from 'react';
import { Zap, Brain, Shield, TrendingUp, Users, Sparkles } from 'lucide-react';

/**
 * Home Page Component
 * Design: Organic Glassmorphism with frosted glass effects, soft shadows, and smooth animations
 */
export default function Home() {
  useEffect(() => {
    updateMetaTags({
      title: 'FUTUNO - Advanced AI Solutions for Enterprise',
      description: 'Transform your business with cutting-edge AI solutions, intelligent automation, and advanced analytics.',
      keywords: ['AI', 'Enterprise', 'Machine Learning', 'Automation'],
      type: 'website',
    });
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'Intelligent Automation',
      description: 'Automate complex processes with AI-powered workflows that learn and adapt to your business needs.',
    },
    {
      icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Gain deep insights from your data with predictive analytics and real-time dashboards.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Built-in security and compliance features to protect your data and meet regulatory requirements.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Deploy AI solutions in days, not months. Our platform accelerates time-to-value.',
    },
    {
      icon: Users,
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing systems and workflows without disruption.',
    },
    {
      icon: Sparkles,
      title: 'Continuous Learning',
      description: 'Models that improve over time, delivering better results as they process more data.',
    },
  ];

  const testimonials = [
    {
      quote: 'FUTUNO transformed our operations. We saw a 40% increase in efficiency within the first quarter.',
      author: 'Sarah Johnson',
      title: 'CEO, RetailCorp',
      image: '👩‍💼',
    },
    {
      quote: 'The implementation was seamless. Their team guided us through every step of the process.',
      author: 'Michael Chen',
      title: 'CTO, FinanceHub',
      image: '👨‍💼',
    },
    {
      quote: 'Outstanding support and continuous innovation. FUTUNO is a game-changer for our industry.',
      author: 'Emma Rodriguez',
      title: 'Director, HealthTech Solutions',
      image: '👩‍⚕️',
    },
  ];

  const partners = ['TechCorp', 'DataFlow', 'CloudSync', 'InnovateLabs', 'FutureScale', 'SmartSys'];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 md:pt-32 pb-20 md:pb-40">
        {/* Background gradient */}
        <div className="absolute inset-0 gradient-warm opacity-50 -z-10" />
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Advanced AI Solutions for Enterprise
                </h1>
                <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed">
                  Transform your business with intelligent automation, predictive analytics, and enterprise-grade AI solutions.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact">
                  <a>
                    <Button className="bg-gradient-accent hover:shadow-lg text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 text-lg">
                      Get Started
                    </Button>
                  </a>
                </Link>
                <Link href="/blog">
                  <a>
                    <Button 
                      variant="outline" 
                      className="border-2 border-foreground/20 hover:border-foreground/50 font-semibold px-8 py-3 rounded-full transition-all duration-300 text-lg"
                    >
                      Learn More
                    </Button>
                  </a>
                </Link>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-accent flex items-center justify-center text-white font-bold text-sm border-2 border-background"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <p className="text-foreground/60 text-sm">
                  <span className="font-bold text-foreground">500+</span> companies trust FUTUNO
                </p>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="hidden lg:block relative">
              <div className="glass p-8 rounded-3xl shadow-xl animate-float">
                <div className="space-y-6">
                  {/* Animated cards */}
                  <div className="glass p-4 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <Brain className="w-6 h-6 text-accent" />
                      <div>
                        <p className="font-semibold text-foreground">AI Processing</p>
                        <p className="text-sm text-foreground/60">Real-time analysis</p>
                      </div>
                    </div>
                  </div>
                  <div className="glass p-4 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-6 h-6 text-accent" />
                      <div>
                        <p className="font-semibold text-foreground">Growth Metrics</p>
                        <p className="text-sm text-foreground/60">+40% efficiency</p>
                      </div>
                    </div>
                  </div>
                  <div className="glass p-4 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <Shield className="w-6 h-6 text-accent" />
                      <div>
                        <p className="font-semibold text-foreground">Enterprise Secure</p>
                        <p className="text-sm text-foreground/60">Bank-level protection</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Powerful Features
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Everything you need to build, deploy, and scale AI solutions
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="glass p-8 rounded-2xl shadow hover-lift group transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-foreground/70">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Proof - Testimonials */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              See what our clients have to say about their experience with FUTUNO
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass p-8 rounded-2xl shadow hover-lift transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">{testimonial.image}</div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-foreground/60">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-foreground/80 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Marquee */}
      <section className="py-16 md:py-20 bg-secondary/50 overflow-hidden">
        <div className="container mx-auto px-4">
          <p className="text-center text-foreground/60 text-sm font-semibold mb-8 uppercase tracking-wider">
            Trusted by leading companies
          </p>
          
          {/* Scrolling marquee */}
          <div className="flex gap-8 md:gap-16 overflow-x-auto pb-4 hide-scrollbar">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-6 py-3 glass rounded-lg text-foreground/70 font-semibold whitespace-nowrap"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-accent opacity-10 -z-10" />
        
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Join hundreds of companies already using FUTUNO to drive innovation and growth.
          </p>
          
          <Link href="/contact">
            <a>
              <Button className="bg-gradient-accent hover:shadow-lg text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 text-lg">
                Start Your Journey Today
              </Button>
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
