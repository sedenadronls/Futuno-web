import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  ArrowRight, 
  ArrowLeft, 
  Loader2, 
  Mail, 
  Phone, 
  MapPin,
  Linkedin,
  Twitter,
  CheckCircle2,
  Building,
  Users,
  Target,
  MessageSquare
} from 'lucide-react';
import { z } from 'zod';

/**
 * Contact Page - Multi-Step Discovery Form
 * Superhuman Dark Elegance with 4-step form
 */

const step1Schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(1, 'Company name is required'),
});

const step2Schema = z.object({
  companySize: z.string().min(1, 'Please select company size'),
  industry: z.string().min(1, 'Please select your industry'),
});

const step3Schema = z.object({
  services: z.array(z.string()).min(1, 'Please select at least one service'),
});

const step4Schema = z.object({
  message: z.string().min(10, 'Please provide more details about your project'),
});

type FormData = {
  name: string;
  email: string;
  company: string;
  companySize: string;
  industry: string;
  services: string[];
  message: string;
  budget: string;
  timeline: string;
};

export default function Contact() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    companySize: '',
    industry: '',
    services: [],
    message: '',
    budget: '',
    timeline: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    document.title = 'Contact Us - FUTUNO';
  }, []);

  const totalSteps = 4;

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-1000 employees',
    '1000+ employees',
  ];

  const industries = [
    'Technology',
    'Finance & Banking',
    'Healthcare',
    'Retail & E-commerce',
    'Manufacturing',
    'Professional Services',
    'Other',
  ];

  const services = [
    { id: 'llm', label: 'Custom LLM Integration', icon: '🧠' },
    { id: 'agents', label: 'Autonomous Agent Workflows', icon: '🤖' },
    { id: 'consulting', label: 'Neural Strategy Consulting', icon: '💡' },
    { id: 'data', label: 'Data Pipeline Automation', icon: '📊' },
    { id: 'support', label: 'AI Customer Support', icon: '💬' },
    { id: 'other', label: 'Other / Not Sure', icon: '❓' },
  ];

  const budgets = [
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+',
    'Not sure yet',
  ];

  const timelines = [
    'ASAP',
    '1-3 months',
    '3-6 months',
    '6+ months',
    'Just exploring',
  ];

  const handleInputChange = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const toggleService = (serviceId: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter((s) => s !== serviceId)
        : [...prev.services, serviceId],
    }));
    if (errors.services) {
      setErrors((prev) => ({ ...prev, services: '' }));
    }
  };

  const validateStep = (step: number): boolean => {
    let result;
    switch (step) {
      case 1:
        result = step1Schema.safeParse(formData);
        break;
      case 2:
        result = step2Schema.safeParse(formData);
        break;
      case 3:
        result = step3Schema.safeParse(formData);
        break;
      case 4:
        result = step4Schema.safeParse(formData);
        break;
      default:
        return true;
    }

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0] as string] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const stepIcons = [
    <Users key="1" className="w-5 h-5" />,
    <Building key="2" className="w-5 h-5" />,
    <Target key="3" className="w-5 h-5" />,
    <MessageSquare key="4" className="w-5 h-5" />,
  ];

  const stepTitles = ['Your Information', 'Company Details', 'Services Needed', 'Project Details'];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="glass p-8 rounded-2xl sticky top-24">
                <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Ready to transform your business with AI automation? Let's discuss your project.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a href="mailto:hello@futuno.ai" className="text-foreground hover:text-primary transition-colors">
                        hello@futuno.ai
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a href="tel:+1-555-123-4567" className="text-foreground hover:text-primary transition-colors">
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground">San Francisco, CA</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border/50">
                  <p className="text-sm text-muted-foreground mb-4">Follow us</p>
                  <div className="flex gap-3">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="glass p-8 md:p-10 rounded-2xl glow-border">
                {isSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">Message Sent!</h2>
                    <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                      Thank you for reaching out. Our team will review your request and get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => {
                        setIsSuccess(false);
                        setCurrentStep(1);
                        setFormData({
                          name: '', email: '', company: '', companySize: '',
                          industry: '', services: [], message: '', budget: '', timeline: '',
                        });
                      }}
                      className="btn-secondary"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    {/* Progress Steps */}
                    <div className="mb-10">
                      <div className="flex items-center justify-between mb-4">
                        {[1, 2, 3, 4].map((step) => (
                          <div key={step} className="flex items-center">
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                                step < currentStep
                                  ? 'bg-primary text-primary-foreground'
                                  : step === currentStep
                                  ? 'bg-primary text-primary-foreground'
                                  : 'bg-secondary text-muted-foreground'
                              }`}
                            >
                              {step < currentStep ? <CheckCircle2 className="w-5 h-5" /> : stepIcons[step - 1]}
                            </div>
                            {step < 4 && (
                              <div className={`w-12 md:w-20 h-1 mx-2 rounded ${step < currentStep ? 'bg-primary' : 'bg-secondary'}`} />
                            )}
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground text-center">
                        Step {currentStep} of {totalSteps}: {stepTitles[currentStep - 1]}
                      </p>
                    </div>

                    {/* Step 1 */}
                    {currentStep === 1 && (
                      <div className="space-y-6 animate-fade-in-up">
                        <h2 className="text-2xl font-bold text-foreground">Tell us about yourself</h2>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-foreground">Full Name *</Label>
                            <Input id="name" placeholder="John Doe" value={formData.name}
                              onChange={(e) => handleInputChange('name', e.target.value)}
                              className={`bg-secondary border-border ${errors.name ? 'border-destructive' : ''}`} />
                            {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-foreground">Business Email *</Label>
                            <Input id="email" type="email" placeholder="john@company.com" value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              className={`bg-secondary border-border ${errors.email ? 'border-destructive' : ''}`} />
                            {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="company" className="text-foreground">Company Name *</Label>
                            <Input id="company" placeholder="Acme Inc." value={formData.company}
                              onChange={(e) => handleInputChange('company', e.target.value)}
                              className={`bg-secondary border-border ${errors.company ? 'border-destructive' : ''}`} />
                            {errors.company && <p className="text-sm text-destructive">{errors.company}</p>}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 2 */}
                    {currentStep === 2 && (
                      <div className="space-y-6 animate-fade-in-up">
                        <h2 className="text-2xl font-bold text-foreground">About your company</h2>
                        <div className="space-y-6">
                          <div className="space-y-3">
                            <Label className="text-foreground">Company Size *</Label>
                            <RadioGroup value={formData.companySize}
                              onValueChange={(value) => handleInputChange('companySize', value)}
                              className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {companySizes.map((size) => (
                                <div key={size} className="flex items-center">
                                  <RadioGroupItem value={size} id={size} className="peer sr-only" />
                                  <Label htmlFor={size}
                                    className="flex-1 p-4 rounded-lg bg-secondary border border-transparent cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 hover:bg-secondary/80">
                                    {size}
                                  </Label>
                                </div>
                              ))}
                            </RadioGroup>
                            {errors.companySize && <p className="text-sm text-destructive">{errors.companySize}</p>}
                          </div>
                          <div className="space-y-3">
                            <Label className="text-foreground">Industry *</Label>
                            <RadioGroup value={formData.industry}
                              onValueChange={(value) => handleInputChange('industry', value)}
                              className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {industries.map((industry) => (
                                <div key={industry} className="flex items-center">
                                  <RadioGroupItem value={industry} id={industry} className="peer sr-only" />
                                  <Label htmlFor={industry}
                                    className="flex-1 p-4 rounded-lg bg-secondary border border-transparent cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 hover:bg-secondary/80">
                                    {industry}
                                  </Label>
                                </div>
                              ))}
                            </RadioGroup>
                            {errors.industry && <p className="text-sm text-destructive">{errors.industry}</p>}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 3 */}
                    {currentStep === 3 && (
                      <div className="space-y-6 animate-fade-in-up">
                        <h2 className="text-2xl font-bold text-foreground">What services are you interested in?</h2>
                        <p className="text-muted-foreground">Select all that apply</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {services.map((service) => (
                            <button key={service.id} type="button" onClick={() => toggleService(service.id)}
                              className={`p-4 rounded-lg text-left transition-all ${
                                formData.services.includes(service.id)
                                  ? 'bg-primary/20 border-2 border-primary'
                                  : 'bg-secondary border-2 border-transparent hover:bg-secondary/80'
                              }`}>
                              <span className="text-2xl mb-2 block">{service.icon}</span>
                              <span className="font-medium text-foreground">{service.label}</span>
                            </button>
                          ))}
                        </div>
                        {errors.services && <p className="text-sm text-destructive">{errors.services}</p>}
                      </div>
                    )}

                    {/* Step 4 */}
                    {currentStep === 4 && (
                      <div className="space-y-6 animate-fade-in-up">
                        <h2 className="text-2xl font-bold text-foreground">Tell us about your project</h2>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="message" className="text-foreground">Project Details *</Label>
                            <Textarea id="message" placeholder="Describe your automation needs, current challenges, and goals..."
                              value={formData.message} onChange={(e) => handleInputChange('message', e.target.value)}
                              className={`min-h-32 bg-secondary border-border ${errors.message ? 'border-destructive' : ''}`} />
                            {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label className="text-foreground">Budget Range (Optional)</Label>
                              <RadioGroup value={formData.budget}
                                onValueChange={(value) => handleInputChange('budget', value)} className="space-y-2">
                                {budgets.map((budget) => (
                                  <div key={budget} className="flex items-center">
                                    <RadioGroupItem value={budget} id={`budget-${budget}`} className="peer sr-only" />
                                    <Label htmlFor={`budget-${budget}`}
                                      className="flex-1 p-3 rounded-lg bg-secondary border border-transparent cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 hover:bg-secondary/80 text-sm">
                                      {budget}
                                    </Label>
                                  </div>
                                ))}
                              </RadioGroup>
                            </div>
                            <div className="space-y-2">
                              <Label className="text-foreground">Timeline (Optional)</Label>
                              <RadioGroup value={formData.timeline}
                                onValueChange={(value) => handleInputChange('timeline', value)} className="space-y-2">
                                {timelines.map((timeline) => (
                                  <div key={timeline} className="flex items-center">
                                    <RadioGroupItem value={timeline} id={`timeline-${timeline}`} className="peer sr-only" />
                                    <Label htmlFor={`timeline-${timeline}`}
                                      className="flex-1 p-3 rounded-lg bg-secondary border border-transparent cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 hover:bg-secondary/80 text-sm">
                                      {timeline}
                                    </Label>
                                  </div>
                                ))}
                              </RadioGroup>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Navigation */}
                    <div className="flex justify-between mt-10 pt-6 border-t border-border/50">
                      {currentStep > 1 ? (
                        <Button type="button" variant="outline" onClick={handleBack} className="btn-secondary">
                          <ArrowLeft className="w-4 h-4 mr-2" />Back
                        </Button>
                      ) : <div />}
                      {currentStep < totalSteps ? (
                        <Button type="button" onClick={handleNext} className="btn-primary">
                          Next<ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      ) : (
                        <Button type="button" onClick={handleSubmit} disabled={isSubmitting} className="btn-primary">
                          {isSubmitting ? (
                            <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Sending...</>
                          ) : (
                            <>Submit Request<ArrowRight className="w-4 h-4 ml-2" /></>
                          )}
                        </Button>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
