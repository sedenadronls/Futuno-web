import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { updateMetaTags } from '@/lib/seo';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { toast } from 'sonner';

/**
 * Contact Form Validation Schema
 */
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

/**
 * Contact Page Component
 * Design: Organic Glassmorphism with functional form and contact details
 */
export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  useEffect(() => {
    updateMetaTags({
      title: 'Contact FUTUNO - Get in Touch',
      description: 'Contact FUTUNO for AI solutions, inquiries, and business partnerships. Reach out to our team today.',
      type: 'website',
    });
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setSubmitSuccess(true);
      reset();
      toast.success('Message sent successfully! We\'ll get back to you soon.');
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@futuno.ai',
      href: 'mailto:hello@futuno.ai',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'San Francisco, CA 94105',
      href: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Get in Touch
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Have questions about our AI solutions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass p-8 md:p-12 rounded-3xl shadow">
                <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>

                {submitSuccess ? (
                  <div className="space-y-6 text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-gradient-accent/20 flex items-center justify-center mx-auto text-4xl animate-fade-in-scale">
                      ✓
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
                      <p className="text-foreground/70">
                        Thank you for reaching out. Our team will review your message and get back to you shortly.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        {...register('name')}
                        className="w-full px-4 py-3 rounded-lg glass border-0"
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground">
                        Business Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        {...register('email')}
                        className="w-full px-4 py-3 rounded-lg glass border-0"
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Subject Field */}
                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-sm font-semibold text-foreground">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="How can we help?"
                        {...register('subject')}
                        className="w-full px-4 py-3 rounded-lg glass border-0"
                      />
                      {errors.subject && (
                        <p className="text-sm text-destructive">{errors.subject.message}</p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-semibold text-foreground">
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        placeholder="Tell us about your project and requirements..."
                        rows={6}
                        {...register('message')}
                        className="w-full px-4 py-3 rounded-lg glass border-0 bg-white/30 backdrop-blur-md border border-white/20 text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50"
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-accent hover:shadow-lg text-white font-semibold py-3 rounded-full transition-all duration-300 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="animate-spin">⏳</span>
                          Sending...
                        </span>
                      ) : (
                        'Send Message'
                      )}
                    </Button>

                    {/* Privacy Note */}
                    <p className="text-xs text-foreground/60 text-center">
                      We respect your privacy. Your information will only be used to respond to your inquiry.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Contact Details</h2>
                <p className="text-foreground/70 mb-8">
                  Reach out to our team through any of these channels. We're here to help!
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="glass p-6 rounded-2xl shadow hover-lift transition-all duration-300 group block"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground/60">{info.label}</p>
                          <p className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-border/50">
                <p className="text-sm font-semibold text-foreground/60 mb-4">Follow Us</p>
                <div className="flex gap-3">
                  <a
                    href="https://twitter.com/futuno"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-secondary hover:bg-accent/20 flex items-center justify-center text-foreground/70 hover:text-accent transition-all duration-300 hover-lift"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/company/futuno"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-secondary hover:bg-accent/20 flex items-center justify-center text-foreground/70 hover:text-accent transition-all duration-300 hover-lift"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="glass p-6 rounded-2xl shadow">
                <h3 className="font-semibold text-foreground mb-3">Business Hours</h3>
                <div className="space-y-2 text-sm text-foreground/70">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                  <p className="text-xs pt-2 border-t border-border/50 mt-2">
                    Response time: Within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-foreground/70">
              Find answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: 'How long does implementation take?',
                a: 'Implementation typically takes 4-12 weeks depending on complexity. We\'ll provide a detailed timeline during consultation.',
              },
              {
                q: 'Do you offer support after deployment?',
                a: 'Yes, we provide 24/7 support and continuous optimization to ensure your AI solutions perform optimally.',
              },
              {
                q: 'What industries do you serve?',
                a: 'We serve retail, finance, healthcare, manufacturing, and many other sectors. Contact us to discuss your industry.',
              },
              {
                q: 'Can you integrate with existing systems?',
                a: 'Absolutely. Our solutions are designed to integrate seamlessly with your existing infrastructure.',
              },
            ].map((faq, index) => (
              <div key={index} className="glass p-6 rounded-2xl shadow">
                <h3 className="font-bold text-foreground mb-3">{faq.q}</h3>
                <p className="text-foreground/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
