import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WorkflowBuilder from '@/components/WorkflowBuilder';
import ROICalculator from '@/components/ROICalculator';
import ServiceCard from '@/components/ServiceCard';
import PricingSection from '@/components/PricingSection';
import { Link } from 'wouter';
import { 
  Brain, 
  Bot, 
  Lightbulb, 
  ArrowRight, 
  Zap,
  Shield,
  BarChart3
} from 'lucide-react';

/**
 * Home Page - Superhuman Dark Elegance
 * Hero, Workflow Builder, ROI Calculator, Services Grid, Pricing
 */
export default function Home() {
  // Update page title
  useEffect(() => {
    document.title = 'FUTUNO - Global AI Automation Agency';
  }, []);

  const services = [
    {
      icon: <Brain className="w-7 h-7 text-primary" />,
      title: 'Custom LLM Integration',
      description: 'Integrate powerful language models into your business workflows. From GPT to Claude, we connect the right AI to your specific needs.',
      features: [
        'Custom model fine-tuning',
        'Multi-model orchestration',
        'Prompt engineering & optimization',
        'Secure API integration',
        'Real-time inference scaling',
        'Cost optimization strategies',
      ],
      steps: [
        { title: 'Discovery', description: 'We analyze your current workflows and identify automation opportunities.' },
        { title: 'Model Selection', description: 'Choose the optimal LLM based on your use case, budget, and performance needs.' },
        { title: 'Integration', description: 'Seamlessly connect the LLM to your existing systems and data sources.' },
        { title: 'Optimization', description: 'Fine-tune prompts and parameters for maximum accuracy and efficiency.' },
        { title: 'Deployment', description: 'Launch with monitoring, scaling, and continuous improvement.' },
      ],
    },
    {
      icon: <Bot className="w-7 h-7 text-primary" />,
      title: 'Autonomous Agent Workflows',
      description: 'Build self-operating AI agents that handle complex tasks end-to-end. From lead qualification to customer support, automate intelligently.',
      features: [
        'Multi-agent orchestration',
        'Decision tree automation',
        'Human-in-the-loop controls',
        'Error handling & recovery',
        'Performance monitoring',
        'Scalable architecture',
      ],
      steps: [
        { title: 'Process Mapping', description: 'Document your current manual processes and decision points.' },
        { title: 'Agent Design', description: 'Architect autonomous agents with clear goals and boundaries.' },
        { title: 'Training', description: 'Train agents on your specific data and business rules.' },
        { title: 'Testing', description: 'Rigorous testing with edge cases and failure scenarios.' },
        { title: 'Deployment', description: 'Gradual rollout with monitoring and human oversight.' },
      ],
    },
    {
      icon: <Lightbulb className="w-7 h-7 text-primary" />,
      title: 'Neural Strategy Consulting',
      description: 'Strategic AI implementation roadmaps for enterprise transformation. We help you navigate the AI landscape and build competitive advantage.',
      features: [
        'AI readiness assessment',
        'Technology roadmapping',
        'ROI modeling & forecasting',
        'Change management support',
        'Vendor evaluation',
        'Implementation oversight',
      ],
      steps: [
        { title: 'Assessment', description: 'Evaluate your current AI maturity and organizational readiness.' },
        { title: 'Strategy', description: 'Develop a comprehensive AI strategy aligned with business goals.' },
        { title: 'Roadmap', description: 'Create a phased implementation plan with clear milestones.' },
        { title: 'Execution', description: 'Guide implementation with hands-on support and expertise.' },
        { title: 'Optimization', description: 'Continuous improvement and scaling of AI initiatives.' },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 gradient-radial opacity-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in-up">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">AI-Powered Automation</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Automating the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                  Future of Work
                </span>
              </h1>

              {/* Sub-headline */}
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Elite AI automation solutions for enterprises worldwide. Build autonomous workflows, integrate LLMs, and transform your operations.
              </p>

              {/* Dual CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Link href="/register">
                  <Button className="btn-primary text-lg px-8 py-4 h-auto">
                    Get Started Free
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="btn-secondary text-lg px-8 py-4 h-auto">
                    Book a Demo
                  </Button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="mt-16 flex flex-col items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <p className="text-sm text-muted-foreground">Trusted by industry leaders</p>
                <div className="flex items-center gap-8 flex-wrap justify-center">
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="text-sm text-foreground">SOC 2 Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    <span className="text-sm text-foreground">500+ Enterprises</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="text-sm text-foreground">99.9% Uptime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Builder Section */}
        <section className="py-20 md:py-32 relative">
          <div className="container mx-auto px-4">
            <WorkflowBuilder />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-32 relative">
          <div className="container mx-auto px-4">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive AI automation solutions tailored to your business needs
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  steps={service.steps}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculator Section */}
        <section className="py-20 md:py-32 relative">
          <div className="container mx-auto px-4">
            <ROICalculator />
          </div>
        </section>

        {/* Pricing Section */}
        <PricingSection />

        {/* CTA Section */}
        <section className="py-20 md:py-32 relative">
          <div className="absolute inset-0 gradient-radial opacity-30" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="glass p-12 md:p-16 rounded-3xl text-center max-w-4xl mx-auto glow-border">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join hundreds of companies already using FUTUNO to automate their workflows and drive growth.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/register">
                  <Button className="btn-primary text-lg px-8 py-4 h-auto">
                    Start Your Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="btn-secondary text-lg px-8 py-4 h-auto">
                    Talk to Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
