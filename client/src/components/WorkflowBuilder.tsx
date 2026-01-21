import { useState, useEffect } from 'react';
import { ArrowRight, Database, Bot, BarChart3 } from 'lucide-react';

/**
 * Interactive Workflow Builder Component
 * Demonstrates a live automation sequence with animated data flow
 */
export default function WorkflowBuilder() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const steps = [
    {
      id: 1,
      icon: Database,
      label: 'Lead Source',
      description: 'CRM, Forms, APIs',
      color: 'from-blue-500/20 to-blue-600/20',
    },
    {
      id: 2,
      icon: Bot,
      label: 'FUTUNO AI',
      description: 'Processing & Analysis',
      color: 'from-primary/20 to-primary/30',
      isMain: true,
    },
    {
      id: 3,
      icon: BarChart3,
      label: 'CRM Result',
      description: 'Qualified & Enriched',
      color: 'from-green-500/20 to-green-600/20',
    },
  ];

  useEffect(() => {
    if (!isAnimating) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % (steps.length + 1));
    }, 1500);

    return () => clearInterval(interval);
  }, [isAnimating, steps.length]);

  return (
    <div className="glass p-8 md:p-12 rounded-2xl">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          See Automation in Action
        </h3>
        <p className="text-muted-foreground">
          Watch how FUTUNO transforms your workflow
        </p>
      </div>

      {/* Workflow Visualization */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isActive = activeStep > index;
          const isCurrent = activeStep === index;

          return (
            <div key={step.id} className="flex items-center gap-4 md:gap-8">
              {/* Step Card */}
              <div
                className={`relative p-6 rounded-xl transition-all duration-500 ${
                  step.isMain ? 'glass glow-border-strong' : 'glass'
                } ${isActive || isCurrent ? 'scale-105' : 'scale-100'}`}
                style={{
                  boxShadow: isActive || isCurrent
                    ? '0 0 30px rgba(0, 122, 255, 0.3)'
                    : 'none',
                }}
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 mx-auto transition-all duration-500 ${
                    isActive ? 'scale-110' : ''
                  }`}
                >
                  <Icon
                    className={`w-8 h-8 transition-colors duration-500 ${
                      isActive ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-foreground">{step.label}</p>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>

                {/* Pulse effect for active step */}
                {isCurrent && (
                  <div className="absolute inset-0 rounded-xl border-2 border-primary/50 animate-pulse" />
                )}
              </div>

              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex items-center">
                  <div className="relative w-16 h-1">
                    {/* Background line */}
                    <div className="absolute inset-0 bg-border rounded-full" />
                    
                    {/* Animated fill */}
                    <div
                      className={`absolute inset-y-0 left-0 bg-primary rounded-full transition-all duration-500 ${
                        activeStep > index ? 'w-full' : 'w-0'
                      }`}
                    />
                    
                    {/* Traveling dot */}
                    {activeStep === index && (
                      <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/50" 
                        style={{
                          animation: 'travelDot 1.5s ease-in-out infinite',
                        }}
                      />
                    )}
                  </div>
                  <ArrowRight className={`w-5 h-5 transition-colors duration-500 ${
                    activeStep > index ? 'text-primary' : 'text-muted-foreground'
                  }`} />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Status indicator */}
      <div className="text-center mt-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-primary font-medium">
            {activeStep === 0 && 'Collecting leads...'}
            {activeStep === 1 && 'AI processing data...'}
            {activeStep === 2 && 'Enriching results...'}
            {activeStep === 3 && 'Complete! Restarting...'}
          </span>
        </div>
      </div>

      {/* Toggle button */}
      <div className="text-center mt-6">
        <button
          onClick={() => setIsAnimating(!isAnimating)}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {isAnimating ? 'Pause Animation' : 'Resume Animation'}
        </button>
      </div>

      <style>{`
        @keyframes travelDot {
          0% { left: 0; }
          100% { left: calc(100% - 12px); }
        }
      `}</style>
    </div>
  );
}
