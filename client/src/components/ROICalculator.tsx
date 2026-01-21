import { useState, useEffect } from 'react';
import { Calculator, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

/**
 * ROI Calculator Component
 * Functional tool where users input manual hours to see real-time cost savings
 */
export default function ROICalculator() {
  const [manualHours, setManualHours] = useState(40);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [animatedSavings, setAnimatedSavings] = useState(0);

  // Calculate savings
  const automationEfficiency = 0.85; // 85% time saved
  const hoursSaved = Math.round(manualHours * automationEfficiency);
  const monthlySavings = hoursSaved * hourlyRate * 4; // 4 weeks per month
  const yearlySavings = monthlySavings * 12;

  // Animate the savings number
  useEffect(() => {
    const target = monthlySavings;
    const duration = 500;
    const steps = 20;
    const increment = (target - animatedSavings) / steps;
    
    let current = animatedSavings;
    const timer = setInterval(() => {
      current += increment;
      if ((increment > 0 && current >= target) || (increment < 0 && current <= target)) {
        setAnimatedSavings(target);
        clearInterval(timer);
      } else {
        setAnimatedSavings(Math.round(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [monthlySavings]);

  return (
    <div className="glass p-8 md:p-12 rounded-2xl glow-border">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
          <Calculator className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-foreground">ROI Calculator</h3>
          <p className="text-muted-foreground">See your potential savings with FUTUNO</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-8">
          {/* Manual Hours Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-foreground">
                Weekly Manual Hours
              </label>
              <span className="text-2xl font-bold text-primary">{manualHours}h</span>
            </div>
            <Slider
              value={[manualHours]}
              onValueChange={(value) => setManualHours(value[0])}
              min={10}
              max={100}
              step={5}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">
              Hours spent on repetitive tasks per week
            </p>
          </div>

          {/* Hourly Rate Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-foreground">
                Average Hourly Rate
              </label>
              <span className="text-2xl font-bold text-primary">${hourlyRate}</span>
            </div>
            <Slider
              value={[hourlyRate]}
              onValueChange={(value) => setHourlyRate(value[0])}
              min={20}
              max={200}
              step={10}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">
              Cost per hour of manual work
            </p>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Main Savings Display */}
          <div className="glass p-6 rounded-xl text-center">
            <p className="text-sm text-muted-foreground mb-2">Monthly Cost Savings</p>
            <div className="flex items-center justify-center gap-2">
              <DollarSign className="w-8 h-8 text-primary" />
              <span className="text-5xl font-bold text-foreground">
                {animatedSavings.toLocaleString()}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              ${yearlySavings.toLocaleString()} per year
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass p-4 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Hours Saved</span>
              </div>
              <p className="text-2xl font-bold text-foreground">{hoursSaved}h</p>
              <p className="text-xs text-muted-foreground">per week</p>
            </div>
            <div className="glass p-4 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Efficiency</span>
              </div>
              <p className="text-2xl font-bold text-foreground">85%</p>
              <p className="text-xs text-muted-foreground">time reduction</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-4">
            <p className="text-sm text-muted-foreground mb-3">
              Ready to start saving?
            </p>
            <a
              href="/register"
              className="inline-block btn-primary text-center"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
